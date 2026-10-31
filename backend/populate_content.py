import json
from app.db.session import SessionLocal
from app.models.entities import Material, Note, Quiz, Question

def populate_gemini_notes_and_quizzes():
    db = SessionLocal()

    # Match materials
    mats = db.query(Material).all()
    mat_map = {m.original_filename: m for m in mats}

    # ==========================
    # 1. DAY 1: SOFTWARE & STACK
    # ==========================
    d1 = next((m for m in mats if "Day 1" in m.original_filename), None)
    if d1:
        db.query(Note).filter(Note.material_id == d1.id).delete()
        n1 = Note(
            material_id=d1.id,
            source_scope="single",
            overview="Executive guide for Product Managers on the 3-tier software model, web protocols, client vs server boundaries, and monolithic vs microservice trade-offs.",
            content=[
                {
                    "heading": "1. The 3-Tier Architecture (Client, Server, Database)",
                    "content": "• Client (Front-End): Browser or mobile app handling user interaction, layout rendering, and form input capture.\n• Server (Back-End): Logic tier executing business rules, authentication verification, and data manipulation.\n• Database (Data Tier): Persistence layer storing structured state (PostgreSQL, MySQL, MongoDB).",
                    "sourceRef": "Slide 3"
                },
                {
                    "heading": "2. Web Protocols: HTTP, DNS & Encryption",
                    "content": "• DNS: Converts human-readable URLs to IP addresses (phonebook of the internet).\n• HTTPS: Employs TLS/SSL encryption to secure data packets in transit against eavesdropping.\n• Edge Caching & CDNs: Geographically distributed servers caching static web assets to lower latency.",
                    "sourceRef": "Slide 4"
                },
                {
                    "heading": "3. Monoliths vs. Microservices",
                    "content": "• Monolithic Architecture: Single unified codebase. Simple to test and deploy initially, but difficult to scale independently as engineering headcount grows.\n• Microservices Architecture: Decentralized modular services communicating over REST/gRPC. High team autonomy and horizontal scaling, but introduces network complexity and distributed failure modes.",
                    "sourceRef": "Slide 8"
                },
                {
                    "heading": "4. Technology Choices as Business Decisions",
                    "content": "• Hiring & Velocity: A stack dictates talent acquisition speed and community support.\n• Technical Debt: Quick prototype shortcuts must be refactored before scaling roadblocks emerge.",
                    "sourceRef": "Slide 16"
                }
            ],
            model_name="gemini-2.5-flash-synthesized"
        )
        db.add(n1)

        # Quiz for Day 1
        db.query(Quiz).filter(Quiz.material_id == d1.id).delete()
        q1 = Quiz(
            title="Software Architecture & Tech Stacks Mastery",
            source_scope="single",
            material_id=d1.id
        )
        db.add(q1)
        db.commit()
        db.refresh(q1)

        questions1 = [
            Question(
                quiz_id=q1.id,
                question_type="single",
                prompt="In a standard 3-tier web architecture, which tier is strictly responsible for enforcing business rules, user authorization, and data validation?",
                options=[
                    {"id": "A", "text": "Presentation / Front-End Tier"},
                    {"id": "B", "text": "Logic / Back-End Tier"},
                    {"id": "C", "text": "Persistence / Database Tier"},
                    {"id": "D", "text": "Domain Name System (DNS)"}
                ],
                correct_answers="B",
                hint="Think about the layer executing core code between the browser and storage.",
                explanation="According to Slide 3, the Back-End logic tier executes business validation and authorizes requests before querying storage.",
                concept_tag="3-Tier Architecture",
                source_reference="Slide 3"
            ),
            Question(
                quiz_id=q1.id,
                question_type="true_false",
                prompt="True or False: A Content Delivery Network (CDN) speeds up web performance by storing copies of static assets closer to users on edge servers around the world.",
                options=[
                    {"id": "true", "text": "True"},
                    {"id": "false", "text": "False"}
                ],
                correct_answers="true",
                hint="CDNs reduce round-trip time across global networks.",
                explanation="True. CDNs cache assets geographically close to visitors to minimize latency and offload origin server bandwidth.",
                concept_tag="CDNs & Caching",
                source_reference="Slide 4"
            ),
            Question(
                quiz_id=q1.id,
                question_type="multiple",
                prompt="What are the key trade-offs when transitioning from a Monolithic architecture to Microservices? (Select all that apply)",
                options=[
                    {"id": "A", "text": "Independent service deployment and horizontal scalability"},
                    {"id": "B", "text": "Increased network latency and distributed debugging complexity"},
                    {"id": "C", "text": "Zero requirement for automated testing or monitoring"},
                    {"id": "D", "text": "Autonomous engineering teams owning specific domain services"}
                ],
                correct_answers=["A", "B", "D"],
                hint="Microservices decouple teams and scaling, but add network and operational complexity.",
                explanation="Microservices enable independent deployment, team ownership, and granular scaling, but increase operational and monitoring requirements.",
                concept_tag="Monolith vs Microservices",
                source_reference="Slide 8"
            )
        ]
        db.add_all(questions1)

    # ==========================
    # 2. DAY 2: APIS & INTEGRATIONS
    # ==========================
    d2 = next((m for m in mats if "Day 2" in m.original_filename), None)
    if d2:
        db.query(Note).filter(Note.material_id == d2.id).delete()
        n2 = Note(
            material_id=d2.id,
            source_scope="single",
            overview="Foundational guide for PMs on APIs, the request-response lifecycle, HTTP verbs, error code handling, webhooks vs polling, and build vs buy decisions.",
            content=[
                {
                    "heading": "1. What is an API: The Restaurant Analogy",
                    "content": "• Client: The customer placing an order from the menu.\n• API (Waiter): Transports the formatted request to the kitchen and delivers the response back.\n• Server (Kitchen): Where data processing occurs and records live.",
                    "sourceRef": "Slide 3"
                },
                {
                    "heading": "2. Anatomy of an HTTP API Call",
                    "content": "• Endpoint (URI): Target resource path (e.g. /api/payments).\n• Method (Verb): GET (read), POST (create), PUT/PATCH (update), DELETE (destroy).\n• Headers: Metadata including Content-Type and Bearer tokens for authorization.\n• Request Body: JSON data payload sent to the server.\n• Status Code: Structured result indicator.",
                    "sourceRef": "Slide 4"
                },
                {
                    "heading": "3. Error Codes Every PM Must Know",
                    "content": "• 200 OK / 201 Created: Request succeeded.\n• 400 Bad Request: Malformed JSON or failed client validation.\n• 401 Unauthorized: User identity missing or token expired.\n• 403 Forbidden: Identity verified, but lacks permission for this resource.\n• 404 Not Found: Resource does not exist.\n• 429 Too Many Requests: Rate limit exceeded.\n• 500 Internal Server Error: Unhandled backend crash.\n• 502/504 Bad Gateway / Gateway Timeout: Upstream service failure.",
                    "sourceRef": "Slide 5"
                },
                {
                    "heading": "4. Webhooks (Push) vs. Polling (Pull)",
                    "content": "• Polling: Client repeatedly asks 'Has payment cleared?' every few seconds. Wastes bandwidth and server CPU.\n• Webhooks: Third-party server proactively sends a POST request with payload the instant an event occurs.",
                    "sourceRef": "Slide 6"
                }
            ],
            model_name="gemini-2.5-flash-synthesized"
        )
        db.add(n2)

        # Quiz for Day 2
        db.query(Quiz).filter(Quiz.material_id == d2.id).delete()
        q2 = Quiz(
            title="APIs & Integrations Mastery Quiz",
            source_scope="single",
            material_id=d2.id
        )
        db.add(q2)
        db.commit()
        db.refresh(q2)

        questions2 = [
            Question(
                quiz_id=q2.id,
                question_type="single",
                prompt="When integrating a payment gateway like Stripe or Razorpay, which architecture pattern notifies your backend immediately when a transaction succeeds?",
                options=[
                    {"id": "A", "text": "Continuous Client Polling"},
                    {"id": "B", "text": "Webhook (Server-to-Server Event Push)"},
                    {"id": "C", "text": "DNS Zone Transfer"},
                    {"id": "D", "text": "Database Trigger Replication"}
                ],
                correct_answers="B",
                hint="Think of the push mechanism where the payment provider alerts your endpoint.",
                explanation="Webhooks allow an external service to push real-time event notifications directly to a designated server URL.",
                concept_tag="Webhooks vs Polling",
                source_reference="Slide 6"
            ),
            Question(
                quiz_id=q2.id,
                question_type="single",
                prompt="A user logs in with valid credentials, but tries to access an administrative billing dashboard reserved for company owners. What HTTP status code should be returned?",
                options=[
                    {"id": "A", "text": "401 Unauthorized"},
                    {"id": "B", "text": "403 Forbidden"},
                    {"id": "C", "text": "404 Not Found"},
                    {"id": "D", "text": "500 Internal Server Error"}
                ],
                correct_answers="B",
                hint="401 means unauthenticated (who are you?); 403 means unauthorized (no permission).",
                explanation="403 Forbidden is used when the server knows who the user is, but the user lacks sufficient privileges to access the resource.",
                concept_tag="HTTP Error Codes",
                source_reference="Slide 5"
            ),
            Question(
                quiz_id=q2.id,
                question_type="true_false",
                prompt="True or False: In REST API conventions, the GET method should be idempotent and safe, meaning it only retrieves data without modifying server state.",
                options=[
                    {"id": "true", "text": "True"},
                    {"id": "false", "text": "False"}
                ],
                correct_answers="true",
                hint="GET requests should never alter the database.",
                explanation="True. Standard GET calls are read-only and safe to repeat without unintended side effects.",
                concept_tag="REST Conventions",
                source_reference="Slide 4"
            )
        ]
        db.add_all(questions2)

    # ==========================
    # 3. DAY 3: DATABASES & MODELING
    # ==========================
    d3 = next((m for m in mats if "Day 3" in m.original_filename), None)
    if d3:
        db.query(Note).filter(Note.material_id == d3.id).delete()
        n3 = Note(
            material_id=d3.id,
            source_scope="single",
            overview="Technical reference for PMs on Relational vs NoSQL database selection, data normalization, primary/foreign key relationships, and ACID transaction guarantees.",
            content=[
                {
                    "heading": "1. What is a Database: Tables, Rows, Keys",
                    "content": "• Table: Entity category (e.g., Users, Products, Transactions).\n• Row: Single record instance.\n• Column: Defined typed attribute.\n• Primary Key (PK): Unique non-null identifier for a row.\n• Foreign Key (FK): Reference field establishing parent-child relationships between tables.",
                    "sourceRef": "Slide 3"
                },
                {
                    "heading": "2. SQL vs. NoSQL Selection Framework",
                    "content": "• Relational (SQL - PostgreSQL, MySQL): Rigid schemas, ACID consistency, complex JOIN capabilities. Perfect for financial ledgers and relational business objects.\n• Document (NoSQL - MongoDB, DynamoDB): Schema-flexible JSON documents, horizontal clustering. Best for unstructured content and high-volume event streams.",
                    "sourceRef": "Slide 4"
                },
                {
                    "heading": "3. Normalization & Referential Integrity",
                    "content": "• Prevents data redundancy and update anomalies.\n• Instead of repeating customer address text inside every order row, separate into Customers and Orders tables linked via customer_id.",
                    "sourceRef": "Slide 5"
                },
                {
                    "heading": "4. OLTP vs. OLAP in Product Analytics",
                    "content": "• OLTP (Online Transaction Processing): Fast row-level reads/writes powering user-facing apps.\n• OLAP (Online Analytical Processing): Columnar data warehouses (Snowflake, BigQuery) optimized for analytics queries and dashboard aggregations.",
                    "sourceRef": "Slide 7"
                }
            ],
            model_name="gemini-2.5-flash-synthesized"
        )
        db.add(n3)

        # Quiz for Day 3
        db.query(Quiz).filter(Quiz.material_id == d3.id).delete()
        q3 = Quiz(
            title="Databases & Data Modeling Mastery",
            source_scope="single",
            material_id=d3.id
        )
        db.add(q3)
        db.commit()
        db.refresh(q3)

        questions3 = [
            Question(
                quiz_id=q3.id,
                question_type="single",
                prompt="Which database constraint prevents orphaned child records by linking a table attribute to the unique Primary Key of another table?",
                options=[
                    {"id": "A", "text": "Foreign Key"},
                    {"id": "B", "text": "Composite Index"},
                    {"id": "C", "text": "Secondary Hash Key"},
                    {"id": "D", "text": "Check Constraint"}
                ],
                correct_answers="A",
                hint="It enforces referential relationships between parent and child tables.",
                explanation="Foreign keys enforce referential integrity across relational tables.",
                concept_tag="Relational Modeling",
                source_reference="Slide 3"
            ),
            Question(
                quiz_id=q3.id,
                question_type="multiple",
                prompt="Why would a Product Manager choose a Relational (SQL) database over a NoSQL database for core transaction handling? (Select all that apply)",
                options=[
                    {"id": "A", "text": "Strict ACID transactional integrity guarantees"},
                    {"id": "B", "text": "Enforced schema prevents corrupted or malformed data records"},
                    {"id": "C", "text": "Ability to run complex relational JOIN queries"},
                    {"id": "D", "text": "Total absence of query languages or database drivers"}
                ],
                correct_answers=["A", "B", "C"],
                hint="Consider the guarantees necessary for financial ledgers and relational schemas.",
                explanation="SQL provides ACID guarantees, rigid schemas, and expressive relational joins.",
                concept_tag="SQL vs NoSQL",
                source_reference="Slide 4"
            ),
            Question(
                quiz_id=q3.id,
                question_type="true_false",
                prompt="True or False: Production web applications should execute heavy analytical aggregation queries directly on their live primary OLTP transactional database.",
                options=[
                    {"id": "true", "text": "True"},
                    {"id": "false", "text": "False"}
                ],
                correct_answers="false",
                hint="Heavy analytics queries can lock tables and slow down active user requests.",
                explanation="False. Heavy analytics should run in a dedicated OLAP warehouse (e.g. Snowflake or BigQuery) to prevent degrading live transactional application performance.",
                concept_tag="OLTP vs OLAP",
                source_reference="Slide 7"
            )
        ]
        db.add_all(questions3)

    # Commit all
    db.commit()
    db.close()
    print("Database successfully seeded with comprehensive notes and quizzes!")

if __name__ == "__main__":
    populate_gemini_notes_and_quizzes()
