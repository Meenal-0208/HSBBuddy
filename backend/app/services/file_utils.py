import os
import uuid
import re
from typing import Tuple

ALLOWED_EXTENSIONS = {".pptx", ".pdf", ".docx"}

def validate_file_extension(filename: str) -> str:
    ext = os.path.splitext(filename)[1].lower()
    if ext not in ALLOWED_EXTENSIONS:
        raise ValueError(f"Unsupported file format '{ext}'. Only PPTX, PDF, and DOCX files are supported.")
    return ext[1:] # return without dot: 'pptx', 'pdf', 'docx'

def sanitize_and_generate_storage_name(original_filename: str) -> Tuple[str, str]:
    """
    Prevents path traversal and unsafe character issues.
    Returns: (safe_storage_filename, clean_display_title)
    """
    ext = os.path.splitext(original_filename)[1].lower()
    base = os.path.splitext(original_filename)[0]
    
    # Clean display title for human reading
    clean_title = re.sub(r'[_]+', ' ', base).strip()
    
    # Safe unique filename for disk storage
    random_id = uuid.uuid4().hex[:12]
    safe_name = f"{random_id}{ext}"
    return safe_name, clean_title
