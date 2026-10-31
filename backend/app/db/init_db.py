from app.db.session import Base, engine
from app.models.entities import Material, Note, Quiz, Question, QuizAttempt, AttemptAnswer, RevisionItem

def init_db():
    Base.metadata.create_all(bind=engine)
