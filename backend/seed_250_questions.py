import sys
import uuid
from app.db.session import SessionLocal
from app.models.entities import Material, Quiz, Question

from day1_questions import get_day1_questions
from day2_questions import get_day2_questions
from day3_questions import get_day3_questions
from techguide_questions import get_techguide_questions
from python_questions import get_python_questions

def seed_exact_250_questions():
    db = SessionLocal()
    try:
        # Wipe all existing quizzes and questions to rebuild clean 50-question sets per PPT
        db.query(Question).delete()
        db.query(Quiz).delete()
        db.commit()

        mats = db.query(Material).all()
        m_d1 = next((m for m in mats if "Day 1" in m.original_filename), mats[0])
        m_d2 = next((m for m in mats if "Day 2" in m.original_filename), mats[1])
        m_d3 = next((m for m in mats if "Day 3" in m.original_filename), mats[2])
        m_tech = next((m for m in mats if "Tech-Stacks-Guide" in m.original_filename), mats[3])
        m_py = next((m for m in mats if "Python" in m.original_filename), mats[4])

        decks = [
            (m_d1, "Software Architecture, Web Fundamentals & System Scaling", get_day1_questions),
            (m_d2, "APIs, System Integrations & Production Error Handling", get_day2_questions),
            (m_d3, "Databases, Data Modeling, Schema Design & Performance", get_day3_questions),
            (m_tech, "Tech Stacks Guide: Architecture, Cloud & Infrastructure", get_techguide_questions),
            (m_py, "Python Tech Stack: Frameworks, Concurrency & Trade-offs", get_python_questions)
        ]

        total_questions = 0
        for mat, title, question_generator in decks:
            q = Quiz(
                id=str(uuid.uuid4()),
                title=title,
                source_scope="single",
                material_id=mat.id
            )
            db.add(q)
            db.commit()
            db.refresh(q)

            questions = question_generator(q.id)
            db.add_all(questions)
            db.commit()
            total_questions += len(questions)
            print(f"Seeded: {title} -> {len(questions)} Questions for deck [{mat.title}]")

        print(f"\n==========================================")
        print(f"SUCCESS! SEEDED EXACTLY {len(decks)} QUIZZES WITH 50 QUESTIONS EACH.")
        print(f"TOTAL QUESTIONS IN DATABASE: {total_questions}")
        print(f"==========================================")
    finally:
        db.close()

if __name__ == "__main__":
    seed_exact_250_questions()
