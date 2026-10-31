from typing import Dict, Any, List, Optional
from app.services.ai_provider import generate_structured_json
from app.core.config import get_settings

settings = get_settings()

SYSTEM_QUIZ_PROMPT = """
You are an expert assessment designer for the university course: "{subject_name}".
Create an active-recall quiz strictly grounded in the provided source material text.

RULES:
1. Every question must be fully grounded in the provided course text. Do not invent answers.
2. Support a mix of:
   - "single" (Multiple choice with exactly one correct option: "A", "B", "C", or "D")
   - "multiple" (Multiple-choice where one or more options are correct, e.g. ["A", "C"])
   - "true_false" (True or False, options: [{"id": "true", "text": "True"}, {"id": "false", "text": "False"}], correct_answers: "true" or "false")
3. Include:
   - A hidden "hint" that guides recall without giving away the answer.
   - An "explanation" that clearly justifies the correct answer.
   - "concept_tag": A short 2-4 word concept name for progress tracking.
   - "source_reference": e.g., "Slide 4" or "Page 2" when found in text.
4. Output MUST be valid JSON adhering to:
{
  "title": "Quiz Title",
  "questions": [
    {
      "question_type": "single",
      "prompt": "Question text here?",
      "options": [
        {"id": "A", "text": "Option A"},
        {"id": "B", "text": "Option B"},
        {"id": "C", "text": "Option C"},
        {"id": "D", "text": "Option D"}
      ],
      "correct_answers": "B",
      "hint": "Recall the builder cell type...",
      "explanation": "Osteoblasts synthesize osteoid...",
      "concept_tag": "Bone Histology",
      "source_reference": "Slide 3"
    }
  ]
}
"""

def generate_quiz_for_content(
    source_title: str, 
    text_content: str, 
    num_questions: int = 5,
    focus_concepts: Optional[List[str]] = None
) -> Dict[str, Any]:
    if not text_content.strip():
        raise ValueError("Cannot generate quiz: extracted text is empty.")

    system_prompt = SYSTEM_QUIZ_PROMPT.format(subject_name=settings.SUBJECT_NAME)
    bounded_text = text_content[:20000]

    concepts_instruction = ""
    if focus_concepts:
        concepts_instruction = f"\nFOCUS REVISION NOTICE: Please prioritize questions testing these previously missed concepts: {', '.join(focus_concepts)}."

    user_prompt = f"""
Source Material: {source_title}
Generate {num_questions} questions for this quiz.{concepts_instruction}

Extracted Source Content:
\"\"\"
{bounded_text}
\"\"\"
"""

    quiz_data = generate_structured_json(user_prompt, system_instruction=system_prompt)
    
    # Validate questions
    questions = quiz_data.get("questions", [])
    valid_questions = []
    seen_prompts = set()

    for q in questions:
        prompt = q.get("prompt", "").strip()
        if not prompt or prompt in seen_prompts:
            continue
        seen_prompts.add(prompt)

        q_type = q.get("question_type", "single")
        if q_type not in ["single", "multiple", "true_false"]:
            q_type = "single"
            q["question_type"] = "single"

        # Ensure correct_answers is present
        if "correct_answers" not in q or q["correct_answers"] is None:
            continue

        valid_questions.append(q)

    quiz_data["questions"] = valid_questions
    return quiz_data
