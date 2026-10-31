import os
from typing import Tuple

def extract_text_from_pptx(file_path: str) -> Tuple[str, int, str]:
    """
    Extracts ordered text slide-by-slide from PPTX using python-pptx.
    Returns: (extracted_text, slides_count, error_msg)
    """
    from pptx import Presentation
    try:
        prs = Presentation(file_path)
        slides_count = len(prs.slides)
        extracted_slides = []

        for idx, slide in enumerate(prs.slides, start=1):
            slide_lines = []
            # Check shapes for text
            for shape in slide.shapes:
                if shape.has_text_frame:
                    for paragraph in shape.text_frame.paragraphs:
                        text = paragraph.text.strip()
                        if text:
                            slide_lines.append(text)
                elif shape.has_table:
                    # Extract table cell texts
                    for row in shape.table.rows:
                        row_vals = [cell.text.strip() for cell in row.cells if cell.text.strip()]
                        if row_vals:
                            slide_lines.append(" | ".join(row_vals))

            # Check speaker notes if present
            try:
                if slide.has_notes_slide and slide.notes_slide.notes_text_frame:
                    notes = slide.notes_slide.notes_text_frame.text.strip()
                    if notes:
                        slide_lines.append(f"[Speaker Notes]: {notes}")
            except Exception:
                pass

            if slide_lines:
                extracted_slides.append(f"--- Slide {idx} ---\n" + "\n".join(slide_lines))
            else:
                extracted_slides.append(f"--- Slide {idx} ---\n[No extractable text found in this slide]")

        combined_text = "\n\n".join(extracted_slides)
        return combined_text, slides_count, None
    except Exception as e:
        return "", 0, f"PPTX Extraction Error: {str(e)}"


def extract_text_from_pdf(file_path: str) -> Tuple[str, int, str]:
    """
    Extracts text page-by-page from PDF using PyMuPDF (fitz).
    Returns: (extracted_text, pages_count, error_msg)
    """
    import fitz
    try:
        doc = fitz.open(file_path)
        pages_count = len(doc)
        extracted_pages = []
        has_any_text = False

        for idx, page in enumerate(doc, start=1):
            text = page.get_text("text").strip()
            if text:
                has_any_text = True
                extracted_pages.append(f"--- Page {idx} ---\n{text}")
            else:
                extracted_pages.append(f"--- Page {idx} ---\n[No extractable text - page may be scanned or image-only]")

        doc.close()

        warning = None
        if not has_any_text and pages_count > 0:
            warning = "Notice: Document contains scanned images or non-selectable text. Text extraction may be incomplete."

        combined_text = "\n\n".join(extracted_pages)
        return combined_text, pages_count, warning
    except Exception as e:
        return "", 0, f"PDF Extraction Error: {str(e)}"


def extract_text_from_docx(file_path: str) -> Tuple[str, int, str]:
    """
    Extracts paragraphs and tables from DOCX using python-docx.
    Returns: (extracted_text, paragraphs_count, error_msg)
    """
    import docx
    try:
        doc = docx.Document(file_path)
        extracted_sections = []
        section_idx = 1
        current_chunk = []

        for p in doc.paragraphs:
            text = p.text.strip()
            if text:
                current_chunk.append(text)
                if len(current_chunk) >= 10:  # Group into logical readable sections
                    extracted_sections.append(f"--- Section {section_idx} ---\n" + "\n".join(current_chunk))
                    current_chunk = []
                    section_idx += 1

        # Tables
        for table in doc.tables:
            table_lines = []
            for row in table.rows:
                vals = [c.text.strip() for c in row.cells if c.text.strip()]
                if vals:
                    table_lines.append(" | ".join(vals))
            if table_lines:
                current_chunk.append("[Table Content]:\n" + "\n".join(table_lines))

        if current_chunk:
            extracted_sections.append(f"--- Section {section_idx} ---\n" + "\n".join(current_chunk))

        items_count = max(section_idx, len(doc.paragraphs))
        combined_text = "\n\n".join(extracted_sections)
        return combined_text, items_count, None
    except Exception as e:
        return "", 0, f"DOCX Extraction Error: {str(e)}"


def process_material_file(file_path: str, file_type: str) -> Tuple[str, int, str]:
    """
    Dispatcher based on file_type.
    """
    ft = file_type.lower()
    if ft == "pptx":
        return extract_text_from_pptx(file_path)
    elif ft == "pdf":
        return extract_text_from_pdf(file_path)
    elif ft == "docx":
        return extract_text_from_docx(file_path)
    else:
        return "", 0, f"Unsupported file type: {file_type}"
