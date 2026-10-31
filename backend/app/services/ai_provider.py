import os
import json
import re
from typing import Optional, Dict, Any, List
from app.core.config import get_settings

settings = get_settings()

def get_ai_client():
    """
    Returns initialized client or raises informative error if unconfigured.
    """
    api_key = settings.AI_API_KEY or os.environ.get("AI_API_KEY") or os.environ.get("GEMINI_API_KEY")
    if not api_key:
        raise ValueError(
            "AI API Key is not configured. Please set AI_API_KEY in backend/.env to generate AI notes and quizzes."
        )

    provider = settings.AI_PROVIDER.lower()
    if provider == "gemini":
        from google import genai
        return "gemini", genai.Client(api_key=api_key)
    elif provider == "openai":
        from openai import OpenAI
        return "openai", OpenAI(api_key=api_key)
    else:
        raise ValueError(f"Unsupported AI provider: {provider}. Supported: 'gemini', 'openai'.")


def generate_structured_json(prompt: str, system_instruction: str = "") -> Dict[str, Any]:
    """
    Calls LLM with strict JSON enforcement and error recovery.
    """
    provider_type, client = get_ai_client()
    raw_text = ""

    if provider_type == "gemini":
        from google.genai import types
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
    elif provider_type == "openai":
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

    # Strip code block wrappers if any
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
        # Fallback regex search for JSON object or array
        match = re.search(r'(\{[\s\S]*\}|\[[\s\S]*\])', clean_text)
        if match:
            return json.loads(match.group(1))
        raise ValueError(f"Failed to parse LLM JSON output: {str(err)}. Raw output: {raw_text[:300]}")
