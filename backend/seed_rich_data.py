from app.db.session import SessionLocal
from app.models.entities import Material, Note, Quiz, Question

def populate_rich_curriculum():
    db = SessionLocal()
    mats = db.query(Material).all()

    # Clear old entries
    db.query(Note).delete()
    db.query(Question).delete()
    db.query(Quiz).delete()
    db.commit()

    m_d1 = next((m for m in mats if "Day 1" in m.original_filename), mats[0])
    m_d2 = next((m for m in mats if "Day 2" in m.original_filename), mats[1])
    m_d3 = next((m for m in mats if "Day 3" in m.original_filename), mats[2])
    m_tech = next((m for m in mats if "Tech-Stacks-Guide" in m.original_filename), mats[3])
    m_py = next((m for m in mats if "Python" in m.original_filename), mats[4])

    # 1. NOTES: DAY 1
    n1 = Note(
        material_id=m_d1.id,
        source_scope="single",
        overview="Essential revision notes for PMs on how software works, 3-tier architecture, network fundamentals (HTTP/DNS/SSL), monoliths vs microservices, and mobile architectures.",
        content=[
            {
                "heading": "1. The 3-Tier Software Architecture: Client, Server, Database",
                "content": "• Client (Presentation Layer): What users see and tap in web browsers (React, Vue) or mobile apps (iOS Swift, Android Kotlin, Flutter). Responsible for rendering UI and capturing user interactions.\n• Server (Application/Logic Layer): Executes core business rules, algorithmic decisions, and data validation (e.g. Python FastAPI, Java Spring, Node.js). Validates permissions before touching data.\n• Database (Storage/Persistence Layer): Permanent data persistence (PostgreSQL, MongoDB, MySQL). Retains all transactional state even when application servers restart.",
                "sourceRef": "Slide 3"
            },
            {
                "heading": "2. Web Fundamentals: DNS, HTTP/HTTPS, Caching & CDNs",
                "content": "• DNS (Domain Name System): The phonebook of the internet; converts human-friendly URLs into machine-routable IP addresses.\n• HTTP vs HTTPS: HyperText Transfer Protocol. HTTPS adds TLS/SSL cryptographic encryption so passwords, tokens, and payloads cannot be sniffed in transit.\n• CDN (Content Delivery Network): Distributed edge servers (Cloudflare, AWS CloudFront) placed worldwide. Stores cached copies of static assets (images, CSS, JS) right next to users to reduce latency.",
                "sourceRef": "Slide 4-5"
            },
            {
                "heading": "3. Architecture Styles: Monolith vs. Microservices vs. Containers",
                "content": "• Monolith: Entire application (auth, catalog, cart, checkout) lives in one single deployable codebase. Pros: Simple to develop, test, and deploy for early MVPs. Cons: Hard to scale specific bottlenecks independently; a single memory leak can take down the whole app.\n• Microservices: App is decomposed into small, standalone services communicating over APIs. Pros: Independent deployments and decoupled teams. Cons: High operational complexity, distributed failures, and network latency.\n• Docker Containers: Packages code with all libraries and runtimes so it runs identically on developer laptops and cloud servers.",
                "sourceRef": "Slide 8"
            },
            {
                "heading": "4. PM Implications of Technology Decisions",
                "content": "• Time to Market vs Technical Debt: Rapid MVP technology choices can become future scaling bottlenecks if not scheduled for refactoring.\n• Hiring Availability: Choosing niche or bleeding-edge languages restricts engineer recruiting; mainstream stacks (Python, Node, Java) offer wider hiring pools.",
                "sourceRef": "Slide 16"
            }
        ],
        model_name="gemini-2.5-flash-grounded"
    )
    db.add(n1)

    # 2. NOTES: DAY 2
    n2 = Note(
        material_id=m_d2.id,
        source_scope="single",
        overview="Mastery notes on Application Programming Interfaces (APIs), the request-response lifecycle, status code diagnostics, webhooks vs polling, and build vs buy decisions.",
        content=[
            {
                "heading": "1. What is an API? The Restaurant Analogy for PMs",
                "content": "• Client (You at table): Asks for specific resources from the menu.\n• Waiter (API): Takes your structured request to the kitchen and delivers the structured response back.\n• Server (Kitchen): Where cooking (processing) and food storage (database) actually happens.\n• Core Value: APIs let different systems communicate without either having to share their underlying codebase or raw database access.",
                "sourceRef": "Slide 3"
            },
            {
                "heading": "2. The 5 Anatomy Parts of an API Call",
                "content": "• Endpoint (URL): Resource address (e.g. https://api.store.com/v1/orders).\n• HTTP Method (Verb): GET (read records), POST (create new record), PUT/PATCH (update record), DELETE (remove record).\n• Headers: Metadata like Content-Type: application/json and Bearer token for authentication.\n• Request Body: JSON payload carrying attributes to create/update.\n• Status Code: Numeric indicator from server describing the outcome.",
                "sourceRef": "Slide 4"
            },
            {
                "heading": "3. HTTP Status Codes Cheat Sheet for PMs",
                "content": "• 2xx Success: 200 OK (standard success), 201 Created (new entity stored).\n• 4xx Client Errors (User or Frontend Fault): 400 Bad Request (invalid input), 401 Unauthorized (user not logged in), 403 Forbidden (authenticated user lacks admin permissions), 404 Not Found, 429 Too Many Requests (rate limit hit).\n• 5xx Server Errors (Backend Fault): 500 Internal Server Error (unhandled backend exception), 502/504 Bad Gateway / Gateway Timeout (upstream dependency failure).",
                "sourceRef": "Slide 5"
            },
            {
                "heading": "4. Notifications: Webhooks (Push) vs. Polling (Pull)",
                "content": "• Polling (Pull): Client periodically sends GET requests every 5 seconds asking whether a task is complete. Inefficient, wasteful, high server load.\n• Webhooks (Push): External partner (e.g. Stripe, Razorpay) immediately sends an automated HTTP POST request to your backend the millisecond the event occurs.",
                "sourceRef": "Slide 6"
            }
        ],
        model_name="gemini-2.5-flash-grounded"
    )
    db.add(n2)

    # 3. NOTES: DAY 3
    n3 = Note(
        material_id=m_d3.id,
        source_scope="single",
        overview="Deep dive into Relational vs NoSQL databases, schema normalization, primary and foreign keys, ACID transactional integrity, and OLTP vs OLAP.",
        content=[
            {
                "heading": "1. Databases vs. Spreadsheets: Structural Rules",
                "content": "• A database is a strict spreadsheet that enforces integrity rules.\n• Table: Entity container (e.g. Users, Orders, OrderItems).\n• Row: Single record instance.\n• Column: Defined attribute with strict data type (Integer, Varchar, DateTime).\n• Primary Key (PK): Unique non-null identifier for each row.\n• Foreign Key (FK): Reference in child table linking back to parent table's Primary Key, establishing relationships.",
                "sourceRef": "Slide 3"
            },
            {
                "heading": "2. SQL (Relational) vs. NoSQL (Document/Key-Value)",
                "content": "• SQL (PostgreSQL, MySQL): Rigid predefined schemas, strict ACID transactional compliance, powerful JOIN queries. Best for financial ledgers, inventory, and relational ecommerce.\n• NoSQL (MongoDB, DynamoDB, Redis): Schema-flexible JSON documents, horizontal scale across clusters. Best for real-time telemetry, unstructured user feeds, and caching.",
                "sourceRef": "Slide 4"
            },
            {
                "heading": "3. Normalization Basics: Eliminating Redundancy",
                "content": "• Unnormalized flat tables duplicate customer names and delivery addresses in every single order row, creating data anomalies.\n• 3NF Normalization: Splits flat data into clean Users and Orders tables connected via user_id, ensuring a single source of truth.",
                "sourceRef": "Slide 5"
            },
            {
                "heading": "4. Data Pipelines: OLTP vs. OLAP",
                "content": "• OLTP (Online Transaction Processing): Low latency row reads/writes powering your customer-facing app.\n• OLAP (Online Analytical Processing): High throughput columnar warehouses (Snowflake, BigQuery, Databricks). Product analytics, BI dashboards, and metrics aggregation run here to prevent slowing down the production database.",
                "sourceRef": "Slide 7"
            }
        ],
        model_name="gemini-2.5-flash-grounded"
    )
    db.add(n3)

    # 4. NOTES: TECH STACKS GUIDE
    n4 = Note(
        material_id=m_tech.id,
        source_scope="single",
        overview="A Product Manager reference guide to the four layers of the modern technology stack, frontend frameworks, backend runtimes, and cloud infrastructure.",
        content=[
            {
                "heading": "1. The Four Layers of a Modern Tech Stack",
                "content": "• 1. Frontend: HTML, CSS, JavaScript, React, Vue, Angular, mobile iOS/Android.\n• 2. Backend: Business logic and API routing in Python, Node.js, Java, Go, C#.\n• 3. Database: Relational SQL (Postgres, MySQL), NoSQL (Mongo, DynamoDB), Caching (Redis).\n• 4. Infrastructure: Cloud hosting (AWS, Azure, GCP), Containers (Docker, Kubernetes), and CI/CD pipelines.",
                "sourceRef": "Slide 2"
            },
            {
                "heading": "2. Frontend Frameworks: React, Vue, Angular",
                "content": "• Component-Driven Architecture: Break UIs into reusable modular blocks (Buttons, Navbars, Cards).\n• SPA (Single Page Application): Loads one HTML shell and swaps UI views via JavaScript without full browser page reloads.",
                "sourceRef": "Slide 4"
            }
        ],
        model_name="gemini-2.5-flash-grounded"
    )
    db.add(n4)

    # 5. NOTES: PYTHON IN PRODUCTION
    n5 = Note(
        material_id=m_py.id,
        source_scope="single",
        overview="Field guide on Python backend frameworks (FastAPI, Django, Flask), ORM data mapping, and deployment architectures.",
        content=[
            {
                "heading": "1. Where Python Fits in the Stack",
                "content": "• Python lives in the Logic Tier (Backend/Server).\n• Strengths: Human-readable syntax, massive open-source library ecosystem, leading ecosystem for AI/ML and data manipulation.\n• Trade-offs: Interpreted language with slower raw execution than Go/Rust/C++, but high developer productivity and fast time-to-market.",
                "sourceRef": "Slide 3"
            },
            {
                "heading": "2. The Big Three Python Web Frameworks",
                "content": "• Django: Built-in ORM, admin dashboard, auth, and security.\n• FastAPI: High-performance modern asynchronous framework with automatic OpenAPI/Swagger documentation generation.\n• Flask: Lightweight micro-framework providing minimal routing, leaving architectural choices to engineers.",
                "sourceRef": "Slide 6"
            }
        ],
        model_name="gemini-2.5-flash-grounded"
    )
    db.add(n5)

    # QUIZZES

    # Quiz 1
    q1 = Quiz(
        title="PM2 Day 1: Software Architecture & Tech Stacks Mastery",
        source_scope="single",
        material_id=m_d1.id
    )
    db.add(q1)
    db.commit()
    db.refresh(q1)

    db.add_all([
        Question(
            quiz_id=q1.id,
            question_type="single",
            prompt="In a standard 3-tier web architecture, which tier is responsible for executing business logic, verifying authentication, and enforcing data validation rules?",
            options=[
                {"id": "A", "text": "Client Tier (Browser UI)"},
                {"id": "B", "text": "Application / Server Tier (Backend)"},
                {"id": "C", "text": "Storage Tier (Database)"},
                {"id": "D", "text": "Domain Name System (DNS)"}
            ],
            correct_answers="B",
            hint="This layer processes requests and connects user interaction to storage.",
            explanation="The Application/Server tier executes business logic, authorizes users, and interfaces with the database (Day 1, Slide 3).",
            concept_tag="3-Tier Architecture",
            source_reference="Day 1 Slide 3"
        ),
        Question(
            quiz_id=q1.id,
            question_type="multiple",
            prompt="What are the core advantages of adopting a Microservices architecture over a single Monolith? (Select all that apply)",
            options=[
                {"id": "A", "text": "Independent deployment and horizontal scaling of specific services"},
                {"id": "B", "text": "Decoupled engineering teams owning bounded business domains"},
                {"id": "C", "text": "Zero need for automated monitoring or logging"},
                {"id": "D", "text": "Isolation of failures so one crash does not crash the entire app"}
            ],
            correct_answers=["A", "B", "D"],
            hint="Microservices grant independence and resilience, but require strong monitoring.",
            explanation="Microservices enable independent deployment, isolated scaling, and domain ownership, while requiring robust monitoring (Day 1, Slide 8).",
            concept_tag="Microservices vs Monolith",
            source_reference="Day 1 Slide 8"
        ),
        Question(
            quiz_id=q1.id,
            question_type="true_false",
            prompt="True or False: A Content Delivery Network (CDN) reduces website latency by storing cached copies of static assets on edge servers physically closer to users.",
            options=[
                {"id": "true", "text": "True"},
                {"id": "false", "text": "False"}
            ],
            correct_answers="true",
            hint="CDNs serve content geographically near visitors.",
            explanation="True. CDNs cache assets at edge locations worldwide to reduce round-trip time (Day 1, Slide 4).",
            concept_tag="CDNs & Caching",
            source_reference="Day 1 Slide 4"
        )
    ])

    # Quiz 2
    q2 = Quiz(
        title="PM2 Day 2: APIs & System Integrations Mastery",
        source_scope="single",
        material_id=m_d2.id
    )
    db.add(q2)
    db.commit()
    db.refresh(q2)

    db.add_all([
        Question(
            quiz_id=q2.id,
            question_type="single",
            prompt="When integrating a payment provider like Stripe or Razorpay, which pattern notifies your server immediately when a payment is captured?",
            options=[
                {"id": "A", "text": "Client-side polling loop every second"},
                {"id": "B", "text": "Webhook (Server-to-Server Event Push)"},
                {"id": "C", "text": "DNS record lookup"},
                {"id": "D", "text": "FTP batch transfer"}
            ],
            correct_answers="B",
            hint="The payment gateway calls your API endpoint directly as soon as the event happens.",
            explanation="Webhooks push real-time event payloads directly to your server endpoint when state changes (Day 2, Slide 6).",
            concept_tag="Webhooks vs Polling",
            source_reference="Day 2 Slide 6"
        ),
        Question(
            quiz_id=q2.id,
            question_type="single",
            prompt="A registered user logs in successfully, but attempts to delete another user's account without admin permissions. Which HTTP status code should your API return?",
            options=[
                {"id": "A", "text": "401 Unauthorized"},
                {"id": "B", "text": "403 Forbidden"},
                {"id": "C", "text": "404 Not Found"},
                {"id": "D", "text": "500 Internal Server Error"}
            ],
            correct_answers="B",
            hint="401 is for missing credentials (who are you?); 403 is for authenticated users lacking rights.",
            explanation="403 Forbidden indicates the user is recognized, but lacks sufficient permissions to access the resource (Day 2, Slide 5).",
            concept_tag="HTTP Status Codes",
            source_reference="Day 2 Slide 5"
        ),
        Question(
            quiz_id=q2.id,
            question_type="true_false",
            prompt="True or False: According to REST API principles, a GET request should be safe and idempotent, meaning it retrieves data without mutating server state.",
            options=[
                {"id": "true", "text": "True"},
                {"id": "false", "text": "False"}
            ],
            correct_answers="true",
            hint="GET is strictly a read operation in REST.",
            explanation="True. GET requests are read-only and can be repeated safely without modifying data (Day 2, Slide 4).",
            concept_tag="REST Principles",
            source_reference="Day 2 Slide 4"
        )
    ])

    # Quiz 3
    q3 = Quiz(
        title="PM2 Day 3: Databases & Data Modeling Mastery",
        source_scope="single",
        material_id=m_d3.id
    )
    db.add(q3)
    db.commit()
    db.refresh(q3)

    db.add_all([
        Question(
            quiz_id=q3.id,
            question_type="single",
            prompt="In a relational database, which schema constraint links a child table record back to the unique Primary Key of a parent table to ensure referential integrity?",
            options=[
                {"id": "A", "text": "Foreign Key"},
                {"id": "B", "text": "Composite Hash Key"},
                {"id": "C", "text": "Clustered Index"},
                {"id": "D", "text": "Check Constraint"}
            ],
            correct_answers="A",
            hint="It forms relationships between tables, like linking an Order to a Customer.",
            explanation="Foreign Keys enforce referential integrity across relational tables (Day 3, Slide 3).",
            concept_tag="Relational Modeling",
            source_reference="Day 3 Slide 3"
        ),
        Question(
            quiz_id=q3.id,
            question_type="true_false",
            prompt="True or False: Production web applications should run heavy analytical queries directly on their live primary OLTP transactional database.",
            options=[
                {"id": "true", "text": "True"},
                {"id": "false", "text": "False"}
            ],
            correct_answers="false",
            hint="Heavy analytical queries can lock tables and degrade user responsiveness.",
            explanation="False. Analytical aggregations should run on an OLAP warehouse (e.g. BigQuery, Snowflake) so transactional performance is protected (Day 3, Slide 7).",
            concept_tag="OLTP vs OLAP",
            source_reference="Day 3 Slide 7"
        )
    ])

    # Quiz 4: All Deck Subject Comprehensive Quiz
    q_all = Quiz(
        title="Product Management 2: Comprehensive Course Quiz",
        source_scope="all_subject",
        material_id=None
    )
    db.add(q_all)
    db.commit()
    db.refresh(q_all)

    db.add_all([
        Question(
            quiz_id=q_all.id,
            question_type="single",
            prompt="In a modern web product, which component converts human-readable domains (e.g. app.com) into machine-routable IP addresses?",
            options=[
                {"id": "A", "text": "DNS (Domain Name System)"},
                {"id": "B", "text": "Reverse Proxy"},
                {"id": "C", "text": "SSL Handshake"},
                {"id": "D", "text": "Database Engine"}
            ],
            correct_answers="A",
            hint="The internet's phonebook.",
            explanation="DNS translates domain names into numerical IP addresses (PM2 Day 1, Slide 4).",
            concept_tag="Web Fundamentals",
            source_reference="Day 1 Slide 4"
        ),
        Question(
            quiz_id=q_all.id,
            question_type="single",
            prompt="Why do engineering teams separate live transactional databases (OLTP) from data warehouses (OLAP)?",
            options=[
                {"id": "A", "text": "To prevent complex analytical reports from degrading live customer transaction performance"},
                {"id": "B", "text": "Because SQL cannot store numbers greater than 1,000"},
                {"id": "C", "text": "Because browsers cannot connect to relational tables"},
                {"id": "D", "text": "To eliminate the need for primary keys"}
            ],
            correct_answers="A",
            hint="Analytical reporting involves heavy scanning across millions of rows.",
            explanation="Separating OLTP and OLAP prevents complex reports from locking rows or slowing down user interactions (PM2 Day 3, Slide 7).",
            concept_tag="OLTP vs OLAP",
            source_reference="Day 3 Slide 7"
        )
    ])

    db.commit()
    db.close()
    print("ALL RICH NOTES AND QUIZZES SUCCESSFULLY SEEDED!")

if __name__ == "__main__":
    populate_rich_curriculum()
