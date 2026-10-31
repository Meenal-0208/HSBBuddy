from pydantic import BaseModel
from typing import Optional, List, Any
from datetime import datetime

class MaterialResponse(BaseModel):
    id: str
    title: str
    original_filename: str
    file_type: str
    file_size_bytes: int
    uploaded_at: datetime
    status: str
    slides_count: int
    extracted_text: Optional[str] = None
    extraction_error: Optional[str] = None

    class Config:
        from_attributes = True

class MaterialUpdate(BaseModel):
    title: Optional[str] = None

class NoteSection(BaseModel):
    heading: str
    content: str
    sourceRef: Optional[str] = None

class NoteResponse(BaseModel):
    id: str
    material_id: Optional[str]
    source_scope: str
    overview: Optional[str]
    content: List[NoteSection]
    created_at: datetime
    model_name: Optional[str]

    class Config:
        from_attributes = True

class QuizOption(BaseModel):
    id: str
    text: str

class QuestionPublic(BaseModel):
    id: str
    quiz_id: str
    question_type: str
    prompt: str
    options: List[QuizOption]
    hint: Optional[str] = None
    source_reference: Optional[str] = None
    concept_tag: Optional[str] = None

class QuizPublic(BaseModel):
    id: str
    title: str
    source_scope: str
    material_id: Optional[str]
    created_at: datetime
    questions: List[QuestionPublic]

class SubmitAnswerItem(BaseModel):
    question_id: str
    selected: Any # str or List[str]

class QuizSubmitRequest(BaseModel):
    answers: List[SubmitAnswerItem]

class QuestionEvaluation(BaseModel):
    question_id: str
    prompt: str
    user_answer: Any
    correct_answer: Any
    is_correct: bool
    explanation: str
    source_reference: Optional[str]
    concept_tag: Optional[str]

class QuizResultResponse(BaseModel):
    attempt_id: str
    quiz_id: str
    quiz_title: str
    score: int
    correct_count: int
    total_questions: int
    details: List[QuestionEvaluation]
    missed_concepts: List[str]

class RevisionItemResponse(BaseModel):
    id: str
    concept: str
    material_id: Optional[str]
    material_title: Optional[str] = None
    miss_count: int
    last_seen_at: datetime
    status: str

    class Config:
        from_attributes = True

class ProgressResponse(BaseModel):
    recent_attempts: List[Any]
    revision_items: List[RevisionItemResponse]
    stats: dict
