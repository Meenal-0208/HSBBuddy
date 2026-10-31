import uuid
from datetime import datetime
from sqlalchemy import (
    Column, 
    String, 
    Integer, 
    Text, 
    DateTime, 
    ForeignKey, 
    Boolean,
    JSON
)
from sqlalchemy.orm import relationship
from app.db.session import Base

def generate_uuid():
    return str(uuid.uuid4())

class Material(Base):
    __tablename__ = "materials"

    id = Column(String, primary_key=True, default=generate_uuid)
    title = Column(String, nullable=False)
    original_filename = Column(String, nullable=False)
    file_type = Column(String, nullable=False)  # pptx, pdf, docx
    file_path = Column(String, nullable=False)
    file_size_bytes = Column(Integer, default=0)
    uploaded_at = Column(DateTime, default=datetime.utcnow)
    status = Column(String, default="Uploaded")  # Uploaded, Processing, Ready, Failed
    extracted_text = Column(Text, nullable=True)
    slides_count = Column(Integer, default=0)
    extraction_error = Column(Text, nullable=True)

    notes = relationship("Note", back_populates="material", cascade="all, delete-orphan")
    quizzes = relationship("Quiz", back_populates="material", cascade="all, delete-orphan")
    revision_items = relationship("RevisionItem", back_populates="material", cascade="all, delete-orphan")


class Note(Base):
    __tablename__ = "notes"

    id = Column(String, primary_key=True, default=generate_uuid)
    material_id = Column(String, ForeignKey("materials.id", ondelete="CASCADE"), nullable=True)
    source_scope = Column(String, default="single")  # single, all_subject
    overview = Column(Text, nullable=True)
    content = Column(JSON, nullable=False)  # List of sections: [{heading, content, sourceRef}]
    created_at = Column(DateTime, default=datetime.utcnow)
    model_name = Column(String, nullable=True)

    material = relationship("Material", back_populates="notes")


class Quiz(Base):
    __tablename__ = "quizzes"

    id = Column(String, primary_key=True, default=generate_uuid)
    title = Column(String, nullable=False)
    source_scope = Column(String, default="single")  # single, all_subject, revision
    material_id = Column(String, ForeignKey("materials.id", ondelete="CASCADE"), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    material = relationship("Material", back_populates="quizzes")
    questions = relationship("Question", back_populates="quiz", cascade="all, delete-orphan")
    attempts = relationship("QuizAttempt", back_populates="quiz", cascade="all, delete-orphan")


class Question(Base):
    __tablename__ = "questions"

    id = Column(String, primary_key=True, default=generate_uuid)
    quiz_id = Column(String, ForeignKey("quizzes.id", ondelete="CASCADE"), nullable=False)
    question_type = Column(String, nullable=False)  # single, multiple, true_false
    prompt = Column(Text, nullable=False)
    options = Column(JSON, nullable=False)  # [{id, text}]
    correct_answers = Column(JSON, nullable=False)  # "A" or ["A", "C"] or "true"
    explanation = Column(Text, nullable=False)
    hint = Column(Text, nullable=True)
    source_reference = Column(String, nullable=True)
    concept_tag = Column(String, nullable=True)

    quiz = relationship("Quiz", back_populates="questions")
    answers = relationship("AttemptAnswer", back_populates="question", cascade="all, delete-orphan")


class QuizAttempt(Base):
    __tablename__ = "quiz_attempts"

    id = Column(String, primary_key=True, default=generate_uuid)
    quiz_id = Column(String, ForeignKey("quizzes.id", ondelete="CASCADE"), nullable=False)
    started_at = Column(DateTime, default=datetime.utcnow)
    completed_at = Column(DateTime, nullable=True)
    score = Column(Integer, default=0)
    correct_count = Column(Integer, default=0)
    total_questions = Column(Integer, default=0)

    quiz = relationship("Quiz", back_populates="attempts")
    answers = relationship("AttemptAnswer", back_populates="attempt", cascade="all, delete-orphan")


class AttemptAnswer(Base):
    __tablename__ = "attempt_answers"

    id = Column(String, primary_key=True, default=generate_uuid)
    attempt_id = Column(String, ForeignKey("quiz_attempts.id", ondelete="CASCADE"), nullable=False)
    question_id = Column(String, ForeignKey("questions.id", ondelete="CASCADE"), nullable=False)
    selected_answers = Column(JSON, nullable=True)
    is_correct = Column(Boolean, default=False)

    attempt = relationship("QuizAttempt", back_populates="answers")
    question = relationship("Question", back_populates="answers")


class RevisionItem(Base):
    __tablename__ = "revision_items"

    id = Column(String, primary_key=True, default=generate_uuid)
    concept = Column(String, nullable=False)
    material_id = Column(String, ForeignKey("materials.id", ondelete="CASCADE"), nullable=True)
    miss_count = Column(Integer, default=1)
    last_seen_at = Column(DateTime, default=datetime.utcnow)
    status = Column(String, default="Needs Practice")  # Needs Practice, Review, Mastered

    material = relationship("Material", back_populates="revision_items")
