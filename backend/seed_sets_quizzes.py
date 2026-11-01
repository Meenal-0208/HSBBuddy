import sys
import uuid
from app.db.session import SessionLocal
from app.models.entities import Material, Quiz, Question

from day1_questions import get_day1_questions
from day2_questions import get_day2_questions
from day3_questions import get_day3_questions
from techguide_questions import get_techguide_questions
from python_questions import get_python_questions

def seed_sub_quizzes():
    db = SessionLocal()
    try:
        # Wipe existing quizzes and questions
        db.query(Question).delete()
        db.query(Quiz).delete()
        db.commit()

        mats = db.query(Material).all()
        m_d1 = next((m for m in mats if "Day 1" in m.original_filename), mats[0])
        m_d2 = next((m for m in mats if "Day 2" in m.original_filename), mats[1])
        m_d3 = next((m for m in mats if "Day 3" in m.original_filename), mats[2])
        m_tech = next((m for m in mats if "Tech-Stacks-Guide" in m.original_filename), mats[3])
        m_py = next((m for m in mats if "Python" in m.original_filename), mats[4])

        # Topics mapping for each PPT (5 sets of 10 questions each)
        deck_configs = [
            (
                m_d1,
                get_day1_questions,
                [
                    "Set 1: Web Fundamentals, DNS & HTTPS Encryption",
                    "Set 2: Frontend vs Backend, SSR, CSR & Caching",
                    "Set 3: Scalability, Horizontal vs Vertical & SPOF",
                    "Set 4: 3-Tier Architecture, Microservices & Queues",
                    "Set 5: System Resilience, Disaster Recovery & WAF"
                ]
            ),
            (
                m_d2,
                get_day2_questions,
                [
                    "Set 1: What is an API & How Calls Work (REST Verbs)",
                    "Set 2: HTTP Error Codes & Production Diagnostics (4xx, 5xx)",
                    "Set 3: Webhooks vs Polling & Idempotency in Payments",
                    "Set 4: API Security, BOLA/IDOR, Tokens & OAuth 2.0",
                    "Set 5: Rate Limiting, GraphQL, gRPC & Advanced Patterns"
                ]
            ),
            (
                m_d3,
                get_day3_questions,
                [
                    "Set 1: What is a Database, SQL vs NoSQL Selection",
                    "Set 2: ACID Transactions, Locks, Deadlocks & Isolation",
                    "Set 3: Normalization (1NF-3NF) & Schema Design Integrity",
                    "Set 4: Indexes, B-Trees & Query Optimization",
                    "Set 5: OLTP vs OLAP, Sharding, Replication & Warehousing"
                ]
            ),
            (
                m_tech,
                get_techguide_questions,
                [
                    "Set 1: Modern Tech Stack Layers & Frontend Frameworks",
                    "Set 2: Backend Frameworks & Microservice Languages",
                    "Set 3: Cloud Infrastructure (AWS vs Azure vs GCP) & IaC",
                    "Set 4: Containers, Docker & Kubernetes Orchestration",
                    "Set 5: DevOps CI/CD, Observability & Enterprise Security"
                ]
            ),
            (
                m_py,
                get_python_questions,
                [
                    "Set 1: The Python Ecosystem & Where it Fits in the Stack",
                    "Set 2: Python Strengths, Weaknesses & GIL Performance",
                    "Set 3: Web Frameworks: FastAPI vs Django vs Flask",
                    "Set 4: Async Concurrency, ASGI vs WSGI & Background Tasks",
                    "Set 5: Python in AI/ML, Data Engineering & Packaging"
                ]
            )
        ]

        total_quizzes = 0
        total_questions = 0

        for mat, generator_fn, set_names in deck_configs:
            # Generate the 50 questions for this deck
            # We will assign a temporary dummy quiz_id then slice into 5 sets of 10
            raw_qs = generator_fn("temp")
            print(f"\nProcessing [{mat.title}]: {len(raw_qs)} questions loaded.")

            for set_idx, set_name in enumerate(set_names):
                quiz_id = str(uuid.uuid4())
                q_obj = Quiz(
                    id=quiz_id,
                    title=f"{mat.title} • {set_name}",
                    source_scope="single",
                    material_id=mat.id
                )
                db.add(q_obj)
                db.commit()
                db.refresh(q_obj)
                total_quizzes += 1

                # Slice 10 questions for this set
                start_i = set_idx * 10
                end_i = start_i + 10
                subset = raw_qs[start_i:end_i]

                for q in subset:
                    q.id = str(uuid.uuid4())
                    q.quiz_id = q_obj.id
                    db.add(q)
                
                db.commit()
                total_questions += len(subset)
                print(f"  Created Quiz Set {set_idx + 1}: '{set_name}' with {len(subset)} questions.")

        print("\n" + "="*50)
        print(f"SUCCESS! Created {total_quizzes} Quizzes (5 PPTs x 5 Sets = 25 Quizzes).")
        print(f"Total Questions seeded: {total_questions} (10 questions per quiz).")
        print("="*50)
    finally:
        db.close()

if __name__ == "__main__":
    seed_sub_quizzes()
