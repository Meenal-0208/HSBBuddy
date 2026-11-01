from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List, Optional

from app.db.session import get_db
from app.models.entities import Quiz, Question, QuizAttempt, AttemptAnswer, Material, RevisionItem
from app.schemas.api_schemas import (
    QuizPublic, 
    QuizSubmitRequest, 
    QuizResultResponse, 
    QuestionEvaluation,
    ProgressResponse,
    RevisionItemResponse
)
from app.services.quiz_service import generate_quiz_for_content
from app.core.config import get_settings

router = APIRouter(tags=["quizzes"])
settings = get_settings()

@router.post("/api/quizzes/generate", response_model=QuizPublic)
def generate_quiz(
    material_id: Optional[str] = Query(None),
    scope: str = Query("single"),  # single, all_subject, revision
    count: int = Query(4, ge=1, le=10),
    db: Session = Depends(get_db)
):
    source_title = ""
    source_text = ""
    focus_concepts = []

    if scope == "revision":
        rev_items = db.query(RevisionItem).filter(RevisionItem.status == "Needs Practice").all()
        if not rev_items:
            # Fallback to any past items
            rev_items = db.query(RevisionItem).all()
        focus_concepts = [r.concept for r in rev_items] if rev_items else []
        materials = db.query(Material).filter(Material.status == "Ready").all()
        if not materials:
            raise HTTPException(status_code=400, detail="No materials available to generate revision quiz.")
        source_title = f"{settings.SUBJECT_NAME} (Revision Focus)"
        source_text = "\n\n".join([f"=== Document: {m.title} ===\n{m.extracted_text or ''}" for m in materials])
        target_material_id = None

    elif scope == "all_subject" or not material_id:
        materials = db.query(Material).filter(Material.status == "Ready").all()
        if not materials:
            raise HTTPException(status_code=400, detail="No materials available to generate quiz.")
        source_title = f"{settings.SUBJECT_NAME} (Full Subject Review)"
        source_text = "\n\n".join([f"=== Document: {m.title} ===\n{m.extracted_text or ''}" for m in materials])
        target_material_id = None
    else:
        material = db.query(Material).filter(Material.id == material_id).first()
        if not material:
            raise HTTPException(status_code=404, detail="Material not found")
        if not material.extracted_text:
            raise HTTPException(status_code=400, detail="Material has no extracted text.")
        source_title = material.title
        source_text = material.extracted_text
        target_material_id = material.id

    try:
        quiz_data = generate_quiz_for_content(source_title, source_text, count, focus_concepts)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI Quiz Generation failed: {str(e)}")

    # Create Quiz in DB
    quiz = Quiz(
        title=quiz_data.get("title", f"Quiz: {source_title}"),
        source_scope=scope,
        material_id=target_material_id
    )
    db.add(quiz)
    db.commit()
    db.refresh(quiz)

    # Save Questions with answers in DB (keys never returned to browser here)
    for q_item in quiz_data.get("questions", []):
        question = Question(
            quiz_id=quiz.id,
            question_type=q_item.get("question_type", "single"),
            prompt=q_item.get("prompt"),
            options=q_item.get("options", []),
            correct_answers=q_item.get("correct_answers"),
            explanation=q_item.get("explanation", ""),
            hint=q_item.get("hint"),
            source_reference=q_item.get("source_reference"),
            concept_tag=q_item.get("concept_tag")
        )
        db.add(question)
    
    db.commit()
    db.refresh(quiz)
    return quiz


@router.get("/api/quizzes", response_model=List[QuizPublic])
def list_quizzes(
    material_id: Optional[str] = Query(None),
    db: Session = Depends(get_db)
):
    query = db.query(Quiz)
    if material_id:
        query = query.filter(Quiz.material_id == material_id)
    return query.order_by(Quiz.created_at.asc()).all()


@router.get("/api/quizzes/{quiz_id}", response_model=QuizPublic)
def get_quiz(quiz_id: str, db: Session = Depends(get_db)):
    quiz = db.query(Quiz).filter(Quiz.id == quiz_id).first()
    if not quiz:
        raise HTTPException(status_code=404, detail="Quiz not found")
    return quiz


@router.post("/api/quizzes/{quiz_id}/submit", response_model=QuizResultResponse)
def submit_quiz_answers(
    quiz_id: str, 
    submission: QuizSubmitRequest, 
    db: Session = Depends(get_db)
):
    quiz = db.query(Quiz).filter(Quiz.id == quiz_id).first()
    if not quiz:
        raise HTTPException(status_code=404, detail="Quiz not found")

    user_ans_map = {item.question_id: item.selected for item in submission.answers}
    
    correct_count = 0
    evaluations: List[QuestionEvaluation] = []
    missed_concepts = []

    attempt = QuizAttempt(
        quiz_id=quiz.id,
        started_at=datetime.utcnow(),
        total_questions=len(quiz.questions)
    )
    db.add(attempt)
    db.commit()
    db.refresh(attempt)

    for q in quiz.questions:
        user_val = user_ans_map.get(q.id)
        correct_val = q.correct_answers
        is_correct = False

        if q.question_type == "multiple":
            u_set = set(user_val) if isinstance(user_val, list) else set([user_val] if user_val else [])
            c_set = set(correct_val) if isinstance(correct_val, list) else set([correct_val])
            is_correct = (u_set == c_set)
        else:
            is_correct = (str(user_val).strip().lower() == str(correct_val).strip().lower())

        if is_correct:
            correct_count += 1
            # If concept was in revision, check if it should be marked as reviewed
            if q.concept_tag:
                rev = db.query(RevisionItem).filter(RevisionItem.concept == q.concept_tag).first()
                if rev and rev.miss_count > 0:
                    rev.status = "Review"
                    db.commit()
        else:
            if q.concept_tag:
                missed_concepts.append(q.concept_tag)
                # Record or increment revision item
                rev = db.query(RevisionItem).filter(RevisionItem.concept == q.concept_tag).first()
                if rev:
                    rev.miss_count += 1
                    rev.status = "Needs Practice"
                    rev.last_seen_at = datetime.utcnow()
                else:
                    new_rev = RevisionItem(
                        concept=q.concept_tag,
                        material_id=q.quiz.material_id,
                        miss_count=1,
                        status="Needs Practice"
                    )
                    db.add(new_rev)
                db.commit()

        evaluations.append(QuestionEvaluation(
            question_id=q.id,
            prompt=q.prompt,
            user_answer=user_val,
            correct_answer=correct_val,
            is_correct=is_correct,
            explanation=q.explanation,
            source_reference=q.source_reference,
            concept_tag=q.concept_tag
        ))

        # Save AttemptAnswer
        att_ans = AttemptAnswer(
            attempt_id=attempt.id,
            question_id=q.id,
            selected_answers=user_val,
            is_correct=is_correct
        )
        db.add(att_ans)

    total_q = len(quiz.questions)
    score = round((correct_count / total_q) * 100) if total_q > 0 else 0

    attempt.completed_at = datetime.utcnow()
    attempt.correct_count = correct_count
    attempt.score = score
    db.commit()

    return QuizResultResponse(
        attempt_id=attempt.id,
        quiz_id=quiz.id,
        quiz_title=quiz.title,
        score=score,
        correct_count=correct_count,
        total_questions=total_q,
        details=evaluations,
        missed_concepts=list(set(missed_concepts))
    )


@router.get("/api/progress", response_model=ProgressResponse)
def get_progress(db: Session = Depends(get_db)):
    attempts = db.query(QuizAttempt).order_by(QuizAttempt.completed_at.desc()).limit(10).all()
    recent = []
    total_score = 0
    for a in attempts:
        recent.append({
            "id": a.id,
            "quiz_title": a.quiz.title if a.quiz else "Quiz",
            "date": a.completed_at.isoformat() if a.completed_at else a.started_at.isoformat(),
            "score": a.score,
            "correct_count": a.correct_count,
            "total_questions": a.total_questions,
            "source": a.quiz.material.title if (a.quiz and a.quiz.material) else "All Materials"
        })
        total_score += a.score

    avg_score = round(total_score / len(attempts)) if attempts else 0

    rev_items = db.query(RevisionItem).order_by(RevisionItem.miss_count.desc()).all()
    rev_list = []
    for r in rev_items:
        rev_list.append(RevisionItemResponse(
            id=r.id,
            concept=r.concept,
            material_id=r.material_id,
            material_title=r.material.title if r.material else "All Deck",
            miss_count=r.miss_count,
            last_seen_at=r.last_seen_at,
            status=r.status
        ))

    mat_count = db.query(Material).count()
    notes_count = db.query(Material).join(Material.notes).count()

    return ProgressResponse(
        recent_attempts=recent,
        revision_items=rev_list,
        stats={
            "materials_count": mat_count,
            "notes_generated": notes_count,
            "quizzes_completed": len(attempts),
            "average_score": avg_score,
            "revision_topics_count": len([r for r in rev_items if r.status == "Needs Practice"])
        }
    )
