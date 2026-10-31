from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List, Optional

from app.db.session import get_db
from app.models.entities import Note, Material
from app.schemas.api_schemas import NoteResponse
from app.services.notes_service import generate_notes_for_content
from app.core.config import get_settings

router = APIRouter(prefix="/api/notes", tags=["notes"])
settings = get_settings()

@router.get("", response_model=List[NoteResponse])
def get_notes(
    material_id: Optional[str] = Query(None),
    db: Session = Depends(get_db)
):
    query = db.query(Note)
    if material_id:
        query = query.filter(Note.material_id == material_id)
    return query.order_by(Note.created_at.desc()).all()


@router.post("/generate", response_model=NoteResponse)
def generate_notes(
    material_id: Optional[str] = Query(None),
    scope: str = Query("single"),  # "single" or "all_subject"
    db: Session = Depends(get_db)
):
    source_title = ""
    source_text = ""

    if scope == "all_subject" or not material_id:
        materials = db.query(Material).filter(Material.status == "Ready").all()
        if not materials:
            raise HTTPException(status_code=400, detail="No processed materials available to generate notes.")
        source_title = f"{settings.SUBJECT_NAME} (All Course Materials)"
        source_text = "\n\n".join([f"=== Document: {m.title} ===\n{m.extracted_text or ''}" for m in materials])
        target_material_id = None
    else:
        material = db.query(Material).filter(Material.id == material_id).first()
        if not material:
            raise HTTPException(status_code=404, detail="Material not found")
        if not material.extracted_text:
            raise HTTPException(status_code=400, detail="Material has no extracted text to generate notes from.")
        source_title = material.title
        source_text = material.extracted_text
        target_material_id = material.id

    try:
        notes_data = generate_notes_for_content(source_title, source_text)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI generation failed: {str(e)}")

    # Save to SQLite
    note = Note(
        material_id=target_material_id,
        source_scope=scope,
        overview=notes_data.get("overview", ""),
        content=notes_data.get("sections", []),
        model_name=settings.AI_MODEL
    )
    db.add(note)
    db.commit()
    db.refresh(note)
    return note
