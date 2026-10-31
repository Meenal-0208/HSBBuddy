from typing import Dict, Any, List
from app.services.ai_provider import generate_structured_json
from app.core.config import get_settings

settings = get_settings()

SYSTEM_NOTE_PROMPT = """
You are an expert academic tutor in the course: "{subject_name}".
Your task is to synthesize concise, student-friendly revision notes STRICTLY grounded in the provided course material text.

CRITICAL RULES:
1. ONLY use information explicitly stated in the source text.
2. NEVER invent facts, clinical scenarios, or definitions not present in the slides/pages.
3. If an example or formula is not in the slides, DO NOT make one up.
4. Always cite specific Slide / Page numbers in sourceRef whenever available.
5. Return your response as a valid JSON object matching this schema:
{{
  "overview": "Short 2-3 sentence high-level overview of the topic.",
  "sections": [
    {{
      "heading": "Clear section title (e.g. 1. Core Definitions & Histology)",
      "content": "Concise bulleted or structured text using bold key terms.",
      "sourceRef": "Slide 1-4"
    }}
  ]
}}
"""

def generate_notes_for_content(source_title: str, text_content: str) -> Dict[str, Any]:
    if not text_content.strip():
        raise ValueError("Cannot generate notes: extracted text is empty.")

    system_prompt = SYSTEM_NOTE_PROMPT.format(subject_name=settings.SUBJECT_NAME)
    
    # Cap single chunk to ~20,000 characters to prevent context truncation
    bounded_text = text_content[:20000]

    user_prompt = f"""
Course Material Title: {source_title}

Extracted Text Content:
\"\"\"
{bounded_text}
\"\"\"

Please generate the structured study notes in JSON format.
"""

    try:
        return generate_structured_json(user_prompt, system_instruction=system_prompt)
    except ValueError as e:
        if "AI_API_KEY_MISSING" in str(e):
            from app.services.ai_provider import generate_offline_heuristic_notes
            return generate_offline_heuristic_notes(source_title, text_content)
        raise e
