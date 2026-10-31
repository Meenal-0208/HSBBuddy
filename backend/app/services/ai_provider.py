import os
import json
import re
from typing import Optional, Dict, Any, List
from app.core.config import get_settings

settings = get_settings()

def get_api_key() -> Optional[str]:
    return (
        settings.AI_API_KEY
        or os.environ.get("AI_API_KEY")
        or os.environ.get("GEMINI_API_KEY")
        or os.environ.get("OPENAI_API_KEY")
    )

def is_ai_configured() -> bool:
    return bool(get_api_key())

def generate_offline_heuristic_notes(source_title: str, text_content: str) -> Dict[str, Any]:
    """
    Synthesizes structured notes directly from the extracted PPT text
    when no cloud API key is configured.
    """
    slides = [s.strip() for s in text_content.split("--- Slide ") if s.strip()]
    sections = []
    
    # Process up to 5 slide chunks
    for idx, slide_block in enumerate(slides[:6], start=1):
        lines = [line.strip() for line in slide_block.split("\n") if line.strip()]
        if not lines:
            continue
            
        header_candidate = lines[0]
        # Remove slide number if present at the top
        header_candidate = re.sub(r'^\d+\s*---\s*', '', header_candidate)
        if len(header_candidate) > 60:
            header_candidate = header_candidate[:57] + "..."
            
        content_lines = lines[1:] if len(lines) > 1 else lines
        bullet_points = [f"• {c}" for c in content_lines[:5] if len(c) > 3]
        
        if bullet_points:
            sections.append({
                "heading": f"{idx}. {header_candidate}",
                "content": "\n".join(bullet_points),
                "sourceRef": f"Slide {idx}"
            })

    if not sections:
        sections.append({
            "heading": "1. Key Concepts & Architecture",
            "content": "• Core lecture topics extracted from uploaded course slide deck.\n• Detailed frameworks and implementation guidelines.",
            "sourceRef": "Slide 1-5"
        })

    return {
        "overview": f"Key architectural takeaways, definitions, and frameworks synthesized directly from '{source_title}'.",
        "sections": sections
    }


def generate_offline_heuristic_quiz(
    source_title: str, 
    text_content: str, 
    num_questions: int = 4
) -> Dict[str, Any]:
    """
    Builds questions directly from slide content when no cloud LLM API key is present.
    """
    slides = [s.strip() for s in text_content.split("--- Slide ") if s.strip()]
    questions = []
    
    for idx, s_block in enumerate(slides[:num_questions], start=1):
        lines = [l.strip() for l in s_block.split("\n") if l.strip()]
        if len(lines) < 2:
            continue
            
        topic = lines[0]
        key_fact = lines[1] if len(lines) > 1 else lines[0]
        
        q_type = "single" if idx % 2 == 1 else "true_false"
        
        if q_type == "true_false":
            questions.append({
                "question_type": "true_false",
                "prompt": f"True or False according to {source_title} (Slide {idx}): {key_fact}",
                "options": [
                    {"id": "true", "text": "True"},
                    {"id": "false", "text": "False"}
                ],
                "correct_answers": "true",
                "hint": f"Review the primary definitions introduced on Slide {idx}.",
                "explanation": f"This statement directly reflects the core curriculum on Slide {idx}: '{key_fact}'.",
                "concept_tag": topic[:30],
                "source_reference": f"Slide {idx}"
            })
        else:
            distractors = [
                "Not specified in the course architecture overview",
                "Legacy deprecated monolithic pattern",
                "Applies only to unencrypted public web sockets"
            ]
            questions.append({
                "question_type": "single",
                "prompt": f"Regarding '{topic}' (Slide {idx}), which statement accurately reflects the lecture material?",
                "options": [
                    {"id": "A", "text": key_fact},
                    {"id": "B", "text": distractors[0]},
                    {"id": "C", "text": distractors[1]},
                    {"id": "D", "text": distractors[2]}
                ],
                "correct_answers": "A",
                "hint": f"Recall the primary focus discussed on Slide {idx}.",
                "explanation": f"According to Slide {idx}, the lecture explicitly states: '{key_fact}'.",
                "concept_tag": topic[:30],
                "source_reference": f"Slide {idx}"
            })

    if not questions:
        questions = [
            {
                "question_type": "single",
                "prompt": f"Which component in a modern web stack handles routing, business validation, and database queries according to {source_title}?",
                "options": [
                    {"id": "A", "text": "Backend / Application Logic Layer"},
                    {"id": "B", "text": "Client-side CSS Stylesheet"},
                    {"id": "C", "text": "Browser DOM Renderer"},
                    {"id": "D", "text": "Domain Registrar"}
                ],
                "correct_answers": "A",
                "hint": "Think about the layer connecting presentation to persistence.",
                "explanation": "The backend server processes HTTP requests, runs application rules, and interfaces with the database.",
                "concept_tag": "3-Tier Stack",
                "source_reference": "Slide 3"
            }
        ]

    return {
        "title": f"Active Recall Quiz: {source_title}",
        "questions": questions
    }


def generate_structured_json(prompt: str, system_instruction: str = "") -> Dict[str, Any]:
    api_key = get_api_key()
    if not api_key:
        raise ValueError("AI_API_KEY_MISSING")

    provider = settings.AI_PROVIDER.lower()
    raw_text = ""

    if provider == "gemini":
        from google import genai
        from google.genai import types
        client = genai.Client(api_key=api_key)
        config = types.GenerateContentConfig(
            temperature=0.2,
            response_mime_type="application/json"
        )
        if system_instruction:
            config.system_instruction = system_instruction

        response = client.models.generate_content(
            model=settings.AI_MODEL,
            contents=prompt,
            config=config
        )
        raw_text = response.text
    elif provider == "openai":
        from openai import OpenAI
        client = OpenAI(api_key=api_key)
        messages = []
        if system_instruction:
            messages.append({"role": "system", "content": system_instruction})
        messages.append({"role": "user", "content": prompt})

        response = client.chat.completions.create(
            model=settings.AI_MODEL,
            messages=messages,
            response_format={"type": "json_object"},
            temperature=0.2
        )
        raw_text = response.choices[0].message.content

    # Clean JSON
    clean_text = raw_text.strip()
    if clean_text.startswith("```json"):
        clean_text = clean_text[7:]
    if clean_text.startswith("```"):
        clean_text = clean_text[3:]
    if clean_text.endswith("```"):
        clean_text = clean_text[:-3]

    try:
        return json.loads(clean_text)
    except json.JSONDecodeError as err:
        match = re.search(r'(\{[\s\S]*\}|\[[\s\S]*\])', clean_text)
        if match:
            return json.loads(match.group(1))
        raise ValueError(f"Failed to parse LLM JSON output: {str(err)}. Raw output: {raw_text[:300]}")
