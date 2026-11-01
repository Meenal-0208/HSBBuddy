import sys
import uuid
from app.db.session import SessionLocal
from app.models.entities import Quiz, Question, Material

def seed_remaining_quizzes():
    db = SessionLocal()
    try:
        # First, find and purge any old poor-quality quizzes
        bad_quizzes = db.query(Quiz).filter(Quiz.title.like("%Active Recall%")).all()
        for bq in bad_quizzes:
            db.query(Question).filter(Question.quiz_id == bq.id).delete()
            db.delete(bq)
        db.commit()

        # Get materials
        mat_py = db.query(Material).filter(Material.original_filename.like("%Python%")).first()
        mat_guide = db.query(Material).filter(Material.original_filename.like("%Tech-Stacks-Guide%")).first()

        if mat_py:
            # Purge existing quizzes for mat_py to make sure it only has the high quality one
            old_py = db.query(Quiz).filter(Quiz.material_id == mat_py.id).all()
            for op in old_py:
                db.query(Question).filter(Question.quiz_id == op.id).delete()
                db.delete(op)
            db.commit()

            q_py = Quiz(
                id=str(uuid.uuid4()),
                material_id=mat_py.id,
                title="Python Tech Stack: Framework Selection & Async Concurrency",
                description="Real-world technical trade-offs between FastAPI, Django, Flask, synchronous blocking I/O, and modern Python architectures."
            )
            db.add(q_py)
            db.commit()

            py_questions = [
                Question(
                    id=str(uuid.uuid4()),
                    quiz_id=q_py.id,
                    prompt="Scenario: You are designing a real-time AI Agent platform where each user query makes 3 parallel API calls to external LLMs (latency: 1.5s each). Why should you mandate FastAPI over traditional synchronous Flask/Django?",
                    question_type="single_choice",
                    options=[
                        "FastAPI natively leverages Python's async/await (ASGI), allowing worker threads to handle other client requests while waiting on external network I/O without blocking threads.",
                        "FastAPI compiles Python into machine code, executing CPU-intensive algorithms 100x faster than Flask.",
                        "Flask is deprecated and cannot make HTTP calls to third-party endpoints.",
                        "Django cannot connect to relational databases when using AI agents."
                    ],
                    correct_answer="FastAPI natively leverages Python's async/await (ASGI), allowing worker threads to handle other client requests while waiting on external network I/O without blocking threads.",
                    explanation="FastAPI is built on Starlette and Pydantic with native ASGI support. During external network requests (like calling OpenAI or Claude APIs), the async event loop pauses the coroutine and continues serving other users, drastically lowering required thread counts and server costs.",
                    order_index=1
                ),
                Question(
                    id=str(uuid.uuid4()),
                    quiz_id=q_py.id,
                    prompt="Case Analysis: Your enterprise PM team needs an internal portal with RBAC (Role-Based Access Control), complex relational models, admin dashboards, and database migrations ready in 2 weeks. Which Python framework delivers the fastest time-to-market?",
                    question_type="single_choice",
                    options=[
                        "Django ('batteries-included' with built-in ORM, auto-generated admin panel, and robust auth)",
                        "Flask (because starting with an empty file is always faster for enterprise auth)",
                        "FastAPI (requires manually building admin panels and assembling third-party auth libraries)",
                        "Pyramid (requires custom ORM integration)"
                    ],
                    correct_answer="Django ('batteries-included' with built-in ORM, auto-generated admin panel, and robust auth)",
                    explanation="Django follows a 'batteries-included' philosophy. It provides an immediate, battle-tested admin interface, user management/auth, and ORM migrations out of the box, drastically cutting initial MVP lead times for internal tooling.",
                    order_index=2
                ),
                Question(
                    id=str(uuid.uuid4()),
                    quiz_id=q_py.id,
                    prompt="Trade-off: A junior developer argues that Python should be used for the high-frequency trading engine calculating portfolio Greeks in sub-millisecond real-time. As PM, why do you push back?",
                    question_type="single_choice",
                    options=[
                        "Python is dynamically typed, interpreted, and constrained by the GIL (Global Interpreter Lock), making it unsuited for sub-millisecond CPU-bound compute compared to C++, Rust, or Go.",
                        "Python cannot perform floating-point arithmetic or matrix multiplications.",
                        "Python has no libraries for financial math or statistical calculations.",
                        "Python requires 100x more database connections than compiled languages."
                    ],
                    correct_answer="Python is dynamically typed, interpreted, and constrained by the GIL (Global Interpreter Lock), making it unsuited for sub-millisecond CPU-bound compute compared to C++, Rust, or Go.",
                    explanation="Python excels at rapid prototyping, glue code, data science, and async I/O web services. However, for ultra-low latency, CPU-bound execution (like algorithmic trading engines), compiled languages with manual memory control and zero interpreter overhead (Rust, C++, Go) are necessary.",
                    order_index=3
                ),
                Question(
                    id=str(uuid.uuid4()),
                    quiz_id=q_py.id,
                    prompt="Which of the following represent genuine advantages of Python in modern Product Management & Data workflows? (Select the most accurate)",
                    question_type="single_choice",
                    options=[
                        "Unrivaled ecosystem for Machine Learning & Data Science (PyTorch, Pandas, Scikit-learn) with fast developer velocity.",
                        "Highest raw execution speed for multi-threaded CPU-heavy cryptography.",
                        "Guaranteed single-binary native mobile app compilation for iOS and Android.",
                        "Zero memory consumption during large dataset ETL operations."
                    ],
                    correct_answer="Unrivaled ecosystem for Machine Learning & Data Science (PyTorch, Pandas, Scikit-learn) with fast developer velocity.",
                    explanation="Python dominates the modern AI/ML and data landscape because C-backed libraries like PyTorch and NumPy allow developers to write clean, rapid Python code while computation runs on optimized C/CUDA backends.",
                    order_index=4
                )
            ]
            for pq in py_questions:
                db.add(pq)
            db.commit()

        if mat_guide:
            # Purge existing quizzes for mat_guide
            old_g = db.query(Quiz).filter(Quiz.material_id == mat_guide.id).all()
            for og in old_g:
                db.query(Question).filter(Question.quiz_id == og.id).delete()
                db.delete(og)
            db.commit()

            q_guide = Quiz(
                id=str(uuid.uuid4()),
                material_id=mat_guide.id,
                title="Tech Stacks Guide: Architecture, Cloud & Infrastructure",
                description="Strategic decisions on Frontend, Backend, Databases, Cloud providers (AWS vs Azure vs GCP), and DevOps CI/CD."
            )
            db.add(q_guide)
            db.commit()

            guide_questions = [
                Question(
                    id=str(uuid.uuid4()),
                    quiz_id=q_guide.id,
                    prompt="Scenario: Your B2B SaaS startup is pitching to Fortune 500 banks and healthcare providers. What architectural requirement must your tech stack prioritize to pass enterprise security audits?",
                    question_type="single_choice",
                    options=[
                        "SOC2/HIPAA compliance readiness, encryption in transit (TLS) and at rest (AES-256), and Role-Based Access Control (RBAC).",
                        "Using solely NoSQL databases so schemas never have to be declared.",
                        "Hosting the entire backend on a single shared VPS to save cloud infrastructure cost.",
                        "Allowing all microservices to communicate over public HTTP with basic passwords."
                    ],
                    correct_answer="SOC2/HIPAA compliance readiness, encryption in transit (TLS) and at rest (AES-256), and Role-Based Access Control (RBAC).",
                    explanation="Enterprise readiness requires strict data governance, end-to-end encryption, least-privilege RBAC, and audit logs to pass third-party security certifications (SOC 2, ISO 27001, HIPAA).",
                    order_index=1
                ),
                Question(
                    id=str(uuid.uuid4()),
                    quiz_id=q_guide.id,
                    prompt="DevOps Strategy: Releases are breaking in production twice a week because engineers merge code directly without standardized integration testing. What is the fundamental PM fix?",
                    question_type="single_choice",
                    options=[
                        "Implement an automated CI/CD pipeline (e.g. GitHub Actions) that enforces linting, automated unit/integration tests, and staging review before any PR can merge.",
                        "Stop writing automated tests and mandate manual QA testing on production directly.",
                        "Revert all backend code back to a monolithic architecture written in assembly.",
                        "Only allow senior engineers to write code while junior engineers manually deploy code via FTP."
                    ],
                    correct_answer="Implement an automated CI/CD pipeline (e.g. GitHub Actions) that enforces linting, automated unit/integration tests, and staging review before any PR can merge.",
                    explanation="A robust Continuous Integration / Continuous Deployment (CI/CD) pipeline acts as a safety gate, automatically running unit and integration test suites on every pull request, preventing regression bugs from reaching production.",
                    order_index=2
                ),
                Question(
                    id=str(uuid.uuid4()),
                    quiz_id=q_guide.id,
                    prompt="Cloud Vendor Decision: A company heavily invested in Microsoft 365, Active Directory, and Windows Server needs to choose a cloud provider. What is the standard strategic recommendation?",
                    question_type="single_choice",
                    options=[
                        "Microsoft Azure (seamless single sign-on integration with Entra ID/Active Directory and enterprise software license portability).",
                        "AWS (always chosen regardless of existing enterprise Microsoft contract agreements).",
                        "Build an on-premise private server rack in the office closet to avoid cloud contracts.",
                        "DigitalOcean droplet for hosting the core global ERP."
                    ],
                    correct_answer="Microsoft Azure (seamless single sign-on integration with Entra ID/Active Directory and enterprise software license portability).",
                    explanation="Enterprises with deep existing Microsoft investments typically gain substantial cost discounts through enterprise agreement (EA) software license portability and instant IAM integration via Microsoft Entra ID (formerly Azure AD).",
                    order_index=3
                ),
                Question(
                    id=str(uuid.uuid4()),
                    quiz_id=q_guide.id,
                    prompt="Containerization & Docker: What primary problem does Docker solve for engineering and product teams during product release cycles?",
                    question_type="single_choice",
                    options=[
                        "It eliminates the 'it works on my machine' bug by packaging software with all its runtime dependencies, OS libraries, and configuration into an immutable container.",
                        "It automatically rewrites slow SQL queries into fast in-memory lookups.",
                        "It replaces the need for a web framework like Django, Node, or Go.",
                        "It makes cloud hosting completely free across all providers."
                    ],
                    correct_answer="It eliminates the 'it works on my machine' bug by packaging software with all its runtime dependencies, OS libraries, and configuration into an immutable container.",
                    explanation="Containers encapsulate code along with all system dependencies and environment configurations, guaranteeing that code runs identically on a developer's MacBook, the staging environment, and the production Kubernetes cluster.",
                    order_index=4
                )
            ]
            for gq in guide_questions:
                db.add(gq)
            db.commit()

        print("SUCCESS: Quizzes seeded cleanly and bad quizzes purged.")
    finally:
        db.close()

if __name__ == "__main__":
    seed_remaining_quizzes()
