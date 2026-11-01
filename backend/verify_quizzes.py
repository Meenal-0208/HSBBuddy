import urllib.request
import json

def verify():
    res = urllib.request.urlopen('http://127.0.0.1:8000/api/quizzes')
    quizzes = json.loads(res.read())
    print(f'Total Quizzes in DB: {len(quizzes)}')
    for q in quizzes:
        print(f"\nQuiz: {q['title']} (Scope: {q['source_scope']})")
        detail_res = urllib.request.urlopen(f"http://127.0.0.1:8000/api/quizzes/{q['id']}")
        detail = json.loads(detail_res.read())
        questions = detail.get("questions", [])
        print(f"  Total Questions: {len(questions)}")
        for idx, qstn in enumerate(questions, 1):
            print(f"    Q{idx}: {qstn['prompt'][:85]}...")

if __name__ == '__main__':
    verify()
