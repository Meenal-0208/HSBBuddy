import sys
import uuid
from app.db.session import SessionLocal
from app.models.entities import Material, Quiz, Question

from day1_questions import get_day1_questions
from day2_questions import get_day2_questions
from day3_questions import get_day3_questions
from techguide_questions import get_techguide_questions
from python_questions import get_python_questions

def seed_sub_quizzes():
    db = SessionLocal()
    try:
        # Wipe existing quizzes and questions
        db.query(Question).delete()
        db.query(Quiz).delete()
        db.commit()

        mats = db.query(Material).all()
        m_d1 = next((m for m in mats if "Day 1" in m.original_filename), mats[0])
        m_d2 = next((m for m in mats if "Day 2" in m.original_filename), mats[1])
        m_d3 = next((m for m in mats if "Day 3" in m.original_filename), mats[2])
        m_tech = next((m for m in mats if "Tech-Stacks-Guide" in m.original_filename), mats[3])
        m_py = next((m for m in mats if "Python" in m.original_filename), mats[4])

        # Topics mapping for each PPT (5 sets of 10 questions each: 2 Easy, 2 Medium, 1 Hard)
        deck_configs = [
            (
                m_d1,
                get_day1_questions,
                [
                    ("Set 1: Web Fundamentals, DNS & HTTPS Encryption", "Easy", "Core definitions of DNS, HTTP ports 80/443, SSL/TLS certificates, and client-server communication"),
                    ("Set 2: Frontend vs Backend, SSR, CSR & Caching", "Easy", "Differences between client-side rendering, server-side rendering, CDN edge caching, and browser storage"),
                    ("Set 3: Scalability, Horizontal vs Vertical & SPOF", "Medium", "Scaling out vs scaling up, database read replicas, load balancing algorithms, and eliminating SPOFs"),
                    ("Set 4: 3-Tier Architecture, Microservices & Queues", "Medium", "Decoupling presentation from persistence, asynchronous message queues for flash sales, and monolith tradeoffs"),
                    ("Set 5: Advanced Resilience, Disaster Recovery & WAF", "Hard", "Multi-region active-active databases, CAP theorem tradeoffs, circuit breakers, and zero-downtime Blue-Green deployments")
                ]
            ),
            (
                m_d2,
                get_day2_questions,
                [
                    ("Set 1: What is an API & How Calls Work (REST Verbs)", "Easy", "RESTful HTTP verbs (GET, POST, PUT, DELETE), endpoints, query parameters, and JSON payloads"),
                    ("Set 2: HTTP Error Codes & Production Diagnostics (4xx, 5xx)", "Easy", "Status codes 200, 201, 204, 400, 401 Unauthorized vs 403 Forbidden, 404, 409, and 500"),
                    ("Set 3: Webhooks vs Polling & Idempotency in Payments", "Medium", "Event-driven push vs polling on 429 rate limits, UUID idempotency keys for checkout, and webhook signatures"),
                    ("Set 4: API Security, BOLA/IDOR, Tokens & OAuth 2.0", "Medium", "JWT claims and stateless tradeoffs, OAuth 2.0 PKCE flow for mobile/SPAs, and BOLA/IDOR authorization flaws"),
                    ("Set 5: Rate Limiting Algorithms, GraphQL, gRPC & Advanced Patterns", "Hard", "Token bucket algorithms, GraphQL N+1 problem & DataLoader batching, gRPC Protobuf binary streams, and gateway caching")
                ]
            ),
            (
                m_d3,
                get_day3_questions,
                [
                    ("Set 1: What is a Database, SQL vs NoSQL Selection", "Easy", "Relational tables, columns, primary keys, foreign keys, and document store vs SQL decision frameworks"),
                    ("Set 2: ACID Transactions, Locks & Concurrency Basics", "Easy", "Atomicity, Consistency, Isolation, Durability, dirty reads, and transaction rollbacks"),
                    ("Set 3: Normalization (1NF-3NF) & Schema Design Integrity", "Medium", "De-duplicating flat tables into 3NF, update anomalies, soft deletes, and audit log schemas"),
                    ("Set 4: Indexes, B-Trees & Query Optimization", "Medium", "Composite index leftmost prefix rules, sequential table scans vs index lookups, EXPLAIN ANALYZE, and index write taxes"),
                    ("Set 5: OLTP vs OLAP, Sharding, Replication Lag & CQRS", "Hard", "Table locking from analytics queries, master-read replica routing, CAP theorem partitions, and horizontal sharding keys")
                ]
            ),
            (
                m_tech,
                get_techguide_questions,
                [
                    ("Set 1: Modern Tech Stack Layers & Frontend Frameworks", "Easy", "Presentation vs backend tiers, React vs Vue vs Angular vs Svelte, and browser runtime fundamentals"),
                    ("Set 2: Backend Frameworks & Microservice Languages", "Easy", "Node.js event loop vs Python vs Go concurrency vs Java Spring Boot enterprise capabilities"),
                    ("Set 3: Cloud Infrastructure (AWS vs Azure vs GCP) & IaC", "Medium", "Serverless Lambda pricing curves vs EC2, enterprise Azure Active Directory synergies, and Terraform IaC drift"),
                    ("Set 4: Containers, Docker & Kubernetes Orchestration", "Medium", "Docker image immutability, Helm charts, horizontal pod autoscaling (HPA), and container CVE scanning"),
                    ("Set 5: DevOps CI/CD, Observability & Enterprise Security", "Hard", "SOC2/HIPAA RBAC compliance, OpenTelemetry distributed tracing, Canary 2% blast radiuses, and Chaos Engineering")
                ]
            ),
            (
                m_py,
                get_python_questions,
                [
                    ("Set 1: The Python Ecosystem & Where it Fits in the Stack", "Easy", "Python as high-level glue code, PyPI packaging, virtual environments (venv), and developer velocity"),
                    ("Set 2: Python Strengths, Weaknesses & GIL Performance", "Easy", "Interpreted overhead, Global Interpreter Lock (GIL) mechanics, and when to avoid Python for trading engines"),
                    ("Set 3: Web Frameworks: FastAPI vs Django vs Flask", "Medium", "Django 'batteries-included' admin/ORM, microservices with Flask, and Pydantic type validation"),
                    ("Set 4: Async Concurrency, ASGI vs WSGI & Background Tasks", "Medium", "FastAPI non-blocking ASGI coroutines, Celery background worker queues with Redis, and thread-pool offloading"),
                    ("Set 5: Python in AI/ML, Data Engineering & Low-Level Interop", "Hard", "PyTorch C/CUDA acceleration, Polars multi-threaded Arrow memory, Cython extensions, and memory profiling with tracemalloc")
                ]
            )
        ]

        total_quizzes = 0
        total_questions = 0

        for mat, generator_fn, set_names in deck_configs:
            # Generate the 50 questions for this deck
            # We will assign a temporary dummy quiz_id then slice into 5 sets of 10
            raw_qs = generator_fn("temp")
            print(f"\nProcessing [{mat.title}]: {len(raw_qs)} questions loaded.")

            for set_idx, (set_name, difficulty, desc) in enumerate(set_names):
                quiz_id = str(uuid.uuid4())
                q_obj = Quiz(
                    id=quiz_id,
                    title=f"[{difficulty}] {set_name}",
                    source_scope="single",
                    material_id=mat.id
                )
                db.add(q_obj)
                db.commit()
                db.refresh(q_obj)
                total_quizzes += 1

                # Slice 10 questions for this set
                start_i = set_idx * 10
                end_i = start_i + 10
                subset = raw_qs[start_i:end_i]

                for q in subset:
                    q.id = str(uuid.uuid4())
                    q.quiz_id = q_obj.id
                    db.add(q)
                
                db.commit()
                total_questions += len(subset)
                print(f"  Created Quiz Set {set_idx + 1} [{difficulty}]: '{set_name}' with {len(subset)} questions.")

        print("\n" + "="*50)
        print(f"SUCCESS! Created {total_quizzes} Quizzes (5 PPTs x 5 Sets = 25 Quizzes).")
        print(f"Total Questions seeded: {total_questions} (10 questions per quiz).")
        print("="*50)
    finally:
        db.close()

if __name__ == "__main__":
    seed_sub_quizzes()
