from pydantic_settings import BaseSettings
from functools import lru_cache
import os

class Settings(BaseSettings):
    APP_ENV: str = "development"
    SUBJECT_NAME: str = "PRODUCT MANAGEMENT"
    DATABASE_URL: str = "sqlite:///./study_buddy.db"
    UPLOAD_DIR: str = "../storage/uploads"
    MAX_UPLOAD_MB: int = 25
    
    AI_PROVIDER: str = "gemini"  # "gemini" or "openai"
    AI_API_KEY: str = ""
    AI_MODEL: str = "gemini-2.5-flash"
    
    CORS_ORIGINS: list[str] = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000"
    ]

    class Config:
        env_file = ".env"
        extra = "ignore"

@lru_cache()
def get_settings() -> Settings:
    return Settings()
