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
    Scenario & Case-based question pool generator for Product Management & Tech Architecture.
    Never generates superficial slide-number recall or raw slide title trivia.
    """
    scenario_pool = [
        {
            "question_type": "single",
            "prompt": f"System Design Scenario ({source_title}): Your app is experiencing sudden traffic surges that intermittently exhaust backend database connections and crash web servers. Which architectural mitigation should you prioritize?",
            "options": [
                {"id": "A", "text": "Introduce connection pooling and an asynchronous message queue (e.g., Celery/RabbitMQ) to buffer write operations."},
                {"id": "B", "text": "Disable user authentication to save compute cycles."},
                {"id": "C", "text": "Change all backend endpoints to unencrypted plain HTTP."},
                {"id": "D", "text": "Mandate that users only access the site sequentially."}
            ],
            "correct_answers": "A",
            "hint": "Decouple immediate incoming web traffic from synchronous database connection limits.",
            "explanation": "Connection pools limit concurrent active connections to healthy thresholds, and message queues buffer bursty write workloads for steady background processing.",
            "concept_tag": "System Resilience & Concurrency",
            "source_reference": "System Architecture"
        },
        {
            "question_type": "single",
            "prompt": f"Trade-off Analysis ({source_title}): When choosing between a rigid Relational Schema (PostgreSQL/MySQL) and a Document NoSQL store (MongoDB), which product requirement necessitates choosing the Relational model?",
            "options": [
                {"id": "A", "text": "Strict ACID transactional integrity with multi-table financial ledger audits and foreign-key constraints."},
                {"id": "B", "text": "Rapidly mutating unstructured JSON event logs with no relational joins."},
                {"id": "C", "text": "Zero need for database backup configurations."},
                {"id": "D", "text": "Guaranteed automatic generation of mobile UI components."}
            ],
            "correct_answers": "A",
            "hint": "Financial records require strict schemas and all-or-nothing (atomic) transaction guarantees.",
            "explanation": "Relational databases provide strict ACID compliance and referential integrity via foreign keys, crucial for financial balances and audit logs.",
            "concept_tag": "Data Modeling Decisions",
            "source_reference": "Databases"
        },
        {
            "question_type": "single",
            "prompt": f"API Integration Case ({source_title}): A third-party logistics API begins returning HTTP 429 errors during peak order volume. What should your integration logic implement?",
            "options": [
                {"id": "A", "text": "Exponential backoff with jitter and retry limits, plus client-side rate throttling."},
                {"id": "B", "text": "Send 10x more requests concurrently to force the server to respond."},
                {"id": "C", "text": "Delete the client API keys and switch to FTP transfers."},
                {"id": "D", "text": "Treat 429 as a permanent database corruption error."}
            ],
            "correct_answers": "A",
            "hint": "HTTP 429 indicates 'Too Many Requests' — backing off gracefully prevents cascading bans.",
            "explanation": "HTTP 429 indicates rate limiting. Clients must back off exponentially with randomized jitter to prevent the 'thundering herd' problem.",
            "concept_tag": "API Resilience & Rate Limiting",
            "source_reference": "APIs & Integrations"
        },
        {
            "question_type": "single",
            "prompt": f"Security & PM Strategy ({source_title}): In modern enterprise SaaS architecture, why must Role-Based Access Control (RBAC) and authorization checks always execute on the server?",
            "options": [
                {"id": "A", "text": "Client-side code running in user browsers can be modified, bypassed, or inspected via developer tools."},
                {"id": "B", "text": "Web browsers do not support conditional if/else logic."},
                {"id": "C", "text": "Server-side code is always written in Python, which is inherently unhackable."},
                {"id": "D", "text": "Database drivers automatically reject queries unless executed on port 80."}
            ],
            "correct_answers": "A",
            "hint": "Frontend UI guards are cosmetic; the API endpoint must authenticate the requester.",
            "explanation": "Client-side security is an illusion. Attackers can call APIs directly using tools like Postman or curl, so all permissions must be validated on the backend.",
            "concept_tag": "Backend Security & RBAC",
            "source_reference": "Security"
        }
    ]

    selected = scenario_pool[:num_questions] if num_questions <= len(scenario_pool) else scenario_pool

    return {
        "title": f"Scenario & Case-Based Quiz: {source_title}",
        "questions": selected
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
