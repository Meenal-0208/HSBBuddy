from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import get_settings
from app.db.init_db import init_db
from app.api import materials

settings = get_settings()

app = FastAPI(
    title="Personal AI Study Buddy API",
    description="Private single-subject study companion backend with file extraction and AI notes/quizzes.",
    version="1.0.0"
)

# Configure CORS for Vite frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    init_db()

# Include Routers
app.include_router(materials.router)

@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "app_env": settings.APP_ENV,
        "subject_name": settings.SUBJECT_NAME,
        "ai_provider": settings.AI_PROVIDER,
        "ai_configured": bool(settings.AI_API_KEY)
    }
