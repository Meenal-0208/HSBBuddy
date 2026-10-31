import os
import shutil
from fastapi import APIRouter, Depends, UploadFile, File, Form, HTTPException, BackgroundTasks
from sqlalchemy.orm import Session
from typing import List, Optional

from app.db.session import get_db
from app.core.config import get_settings
from app.models.entities import Material
from app.schemas.api_schemas import MaterialResponse, MaterialUpdate
from app.services.file_utils import validate_file_extension, sanitize_and_generate_storage_name
from app.services.file_extraction import process_material_file

router = APIRouter(prefix="/api/materials", tags=["materials"])
settings = get_settings()

def extract_and_update_material(material_id: str, file_path: str, file_type: str, db_session_maker):
    """Background task to extract text so large uploads don't block requests."""
    db = db_session_maker()
    try:
        material = db.query(Material).filter(Material.id == material_id).first()
        if not material:
            return

        material.status = "Processing"
        db.commit()

        text, count, err = process_material_file(file_path, file_type)
        if err and not text:
            material.status = "Failed"
            material.extraction_error = err
        else:
            material.status = "Ready"
            material.extracted_text = text
            material.slides_count = count
            material.extraction_error = err # warnings if any
        
        db.commit()
    except Exception as e:
        material = db.query(Material).filter(Material.id == material_id).first()
        if material:
            material.status = "Failed"
            material.extraction_error = str(e)
            db.commit()
    finally:
        db.close()


@router.get("", response_model=List[MaterialResponse])
def list_materials(db: Session = Depends(get_db)):
    return db.query(Material).order_by(Material.uploaded_at.desc()).all()


@router.post("", response_model=MaterialResponse)
async def upload_material(
    background_tasks: BackgroundTasks,
    file: UploadFile = File(...),
    title: Optional[str] = Form(None),
    db: Session = Depends(get_db)
):
    try:
        file_ext = validate_file_extension(file.filename)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    safe_name, clean_title = sanitize_and_generate_storage_name(file.filename)
    display_title = (title or clean_title).strip()

    # Ensure storage folder exists
    storage_dir = os.path.abspath(settings.UPLOAD_DIR)
    os.makedirs(storage_dir, exist_ok=True)
    destination_path = os.path.join(storage_dir, safe_name)

    # Save uploaded bytes to local private storage
    file_size = 0
    try:
        with open(destination_path, "wb") as buffer:
            while chunk := await file.read(1024 * 1024):  # 1MB chunks
                file_size += len(chunk)
                if file_size > settings.MAX_UPLOAD_MB * 1024 * 1024:
                    os.remove(destination_path)
                    raise HTTPException(
                        status_code=413,
                        detail=f"File exceeds maximum allowed size of {settings.MAX_UPLOAD_MB}MB"
                    )
                buffer.write(chunk)
    except Exception as e:
        if os.path.exists(destination_path):
            os.remove(destination_path)
        raise HTTPException(status_code=500, detail=f"Failed to save file: {str(e)}")

    # Create Material in DB with status "Uploaded"
    material = Material(
        title=display_title,
        original_filename=file.filename,
        file_type=file_ext,
        file_path=destination_path,
        file_size_bytes=file_size,
        status="Uploaded"
    )
    db.add(material)
    db.commit()
    db.refresh(material)

    # Trigger extraction immediately
    from app.db.session import SessionLocal
    extract_and_update_material(material.id, destination_path, file_ext, SessionLocal)
    db.refresh(material)

    return material


@router.get("/{material_id}", response_model=MaterialResponse)
def get_material(material_id: str, db: Session = Depends(get_db)):
    material = db.query(Material).filter(Material.id == material_id).first()
    if not material:
        raise HTTPException(status_code=404, detail="Material not found")
    return material


@router.patch("/{material_id}", response_model=MaterialResponse)
def update_material(material_id: str, update_data: MaterialUpdate, db: Session = Depends(get_db)):
    material = db.query(Material).filter(Material.id == material_id).first()
    if not material:
        raise HTTPException(status_code=404, detail="Material not found")
    if update_data.title:
        material.title = update_data.title.strip()
        db.commit()
        db.refresh(material)
    return material


@router.post("/{material_id}/process", response_model=MaterialResponse)
def retry_process_material(material_id: str, db: Session = Depends(get_db)):
    material = db.query(Material).filter(Material.id == material_id).first()
    if not material:
        raise HTTPException(status_code=404, detail="Material not found")

    from app.db.session import SessionLocal
    extract_and_update_material(material.id, material.file_path, material.file_type, SessionLocal)
    db.refresh(material)
    return material


@router.delete("/{material_id}")
def delete_material(material_id: str, db: Session = Depends(get_db)):
    material = db.query(Material).filter(Material.id == material_id).first()
    if not material:
        raise HTTPException(status_code=404, detail="Material not found")

    # Remove file from local disk if it exists
    if material.file_path and os.path.exists(material.file_path):
        try:
            os.remove(material.file_path)
        except Exception:
            pass

    db.delete(material)
    db.commit()
    return {"message": "Material and associated records deleted successfully"}
