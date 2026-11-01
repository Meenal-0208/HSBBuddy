from app.db.session import SessionLocal
from app.models.entities import Material, Quiz, Question

def build_scenario_analytical_quizzes():
    db = SessionLocal()
    mats = db.query(Material).all()

    # Clear old quiz questions to replace with rich, scenario-based questions
    db.query(Question).delete()
    db.query(Quiz).delete()
    db.commit()

    m_d1 = next((m for m in mats if "Day 1" in m.original_filename), mats[0])
    m_d2 = next((m for m in mats if "Day 2" in m.original_filename), mats[1])
    m_d3 = next((m for m in mats if "Day 3" in m.original_filename), mats[2])
    m_tech = next((m for m in mats if "Tech-Stacks-Guide" in m.original_filename), mats[3])
    m_py = next((m for m in mats if "Python" in m.original_filename), mats[4])

    # =========================================================================
    # 1. DAY 1 QUIZ: ARCHITECTURE & SYSTEM DESIGN SCENARIOS
    # =========================================================================
    q1 = Quiz(
        title="Software Architecture & Scaling Decisions",
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
            prompt=(
                "Scenario: You are the PM of an e-commerce platform launching a 30-minute flash sale. "
                "The engineering team warns that while the product catalog reads are easily handled by a CDN, "
                "the checkout service keeps crashing because the primary database is overwhelmed by concurrent write locks.\n\n"
                "Which architectural adjustment best addresses this bottleneck without completely rebuilding the system?"
            ),
            options=[
                {"id": "A", "text": "Move from HTTPS to HTTP to eliminate encryption overhead"},
                {"id": "B", "text": "Introduce an asynchronous Message Queue (e.g., RabbitMQ/Kafka) to buffer checkout orders and process writes at a controlled rate"},
                {"id": "C", "text": "Replace the backend server with Client-Side Rendering (CSR)"},
                {"id": "D", "text": "Increase the browser cookie expiration time to keep sessions open longer"}
            ],
            correct_answers="B",
            hint="Think about decoupling the instant customer checkout click from the slow disk write using a buffer.",
            explanation="Message queues decouple traffic spikes from database writes. The checkout service acknowledges the order immediately, placing it on the queue for asynchronous background processing.",
            concept_tag="Traffic Spikes & Message Queues",
            source_reference="System Architecture"
        ),
        Question(
            quiz_id=q1.id,
            question_type="single",
            prompt=(
                "Case Analysis: An early-stage B2B SaaS startup with 3 engineers wants to rewrite their single monolithic codebase "
                "into 15 microservices before their first 100 paying customers. As the Product Manager, why should you challenge this proposal?"
            ),
            options=[
                {"id": "A", "text": "Because microservices make it impossible to write unit tests"},
                {"id": "B", "text": "Because premature microservice adoption introduces heavy operational overhead, distributed network debugging, and slows down early feature iteration when domain boundaries are still changing"},
                {"id": "C", "text": "Because microservices can only be deployed on physical on-premise hardware"},
                {"id": "D", "text": "Because relational databases cannot connect to microservices"}
            ],
            correct_answers="B",
            hint="Consider how small teams need fast iteration without spending 80% of their time managing network latency and service orchestration.",
            explanation="Early-stage startups prioritize velocity and finding product-market fit. Microservices introduce network latency, distributed failures, and deployment complexity that drain small teams.",
            concept_tag="Monolith vs Microservices",
            source_reference="Architecture Trade-offs"
        ),
        Question(
            quiz_id=q1.id,
            question_type="multiple",
            prompt=(
                "Situational Design: You are launching a public marketing and product review website where organic Google search (SEO) "
                "and instantaneous First Contentful Paint (FCP) on mobile networks are critical success metrics. "
                "Which rendering approaches meet these requirements? (Select all that apply)"
            ),
            options=[
                {"id": "A", "text": "Server-Side Rendering (SSR) using Next.js"},
                {"id": "B", "text": "Static Site Generation (SSG) pre-built and cached on a global CDN"},
                {"id": "C", "text": "Pure Client-Side Rendering (CSR) with an empty initial HTML body and heavy JS bundle"},
                {"id": "D", "text": "Browser-only DOM synthesis without server pre-rendering"}
            ],
            correct_answers=["A", "B"],
            hint="Search engines and slow mobile connections require pre-built HTML delivered directly on request.",
            explanation="SSR delivers fully rendered HTML on each request, and SSG serves pre-rendered static HTML via CDNs. Pure CSR loads an empty shell, hurting SEO indexing and initial mobile load speed.",
            concept_tag="Rendering Strategies (SSR/SSG)",
            source_reference="Web Fundamentals"
        ),
        Question(
            quiz_id=q1.id,
            question_type="true_false",
            prompt=(
                "Logical Evaluation: A fintech application relies on client-side JavaScript validation (e.g., verifying that a transfer amount is greater than $0). "
                "True or False: Because the frontend verifies the input before sending the HTTP request, the backend server can safely skip duplicate validation checks to maximize throughput."
            ),
            options=[
                {"id": "true", "text": "True"},
                {"id": "false", "text": "False"}
            ],
            correct_answers="false",
            hint="Remember the fundamental backend security rule: 'Never trust the client.'",
            explanation="False! Any malicious actor or automated tool (curl/Postman) can bypass the browser UI and send crafted requests directly to the API. The backend must always re-validate data and permissions.",
            concept_tag="Client vs Server Trust Boundary",
            source_reference="Security & Validation"
        )
    ])

    # =========================================================================
    # 2. DAY 2 QUIZ: APIS & SYSTEM INTEGRATION SCENARIOS
    # =========================================================================
    q2 = Quiz(
        title="API Integration & Error Handling Scenarios",
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
            prompt=(
                "Scenario: During a peak sale, customers report that their bank accounts are being charged, "
                "but your website displays: 'Order Pending - Awaiting Payment'. "
                "Engineering investigates and finds your server is querying the payment gateway's GET /status endpoint every 2 seconds for 100,000 active carts, "
                "and the payment gateway has started returning HTTP 429 errors.\n\n"
                "What is the root architectural flaw, and what is the proper solution?"
            ),
            options=[
                {"id": "A", "text": "Your server is polling the gateway; replace polling with Webhooks so the gateway pushes payment events to your backend only when they succeed"},
                {"id": "B", "text": "Your server should poll every 500ms instead of 2 seconds to beat the rate limit"},
                {"id": "C", "text": "HTTP 429 means your SSL certificate expired; you need to renew your TLS certificate"},
                {"id": "D", "text": "The payment gateway should send payment confirmations via DNS record updates"}
            ],
            correct_answers="A",
            hint="HTTP 429 means 'Too Many Requests' caused by aggressive polling. What push mechanism replaces repetitive requests?",
            explanation="Polling floods the external gateway, triggering 429 rate limits. Webhooks solve this by having the payment provider send a single POST notification only when the transaction status changes.",
            concept_tag="Webhooks vs Polling & Rate Limiting",
            source_reference="API Patterns"
        ),
        Question(
            quiz_id=q2.id,
            question_type="single",
            prompt=(
                "Diagnostic Case: An authenticated customer with a valid JWT token tries to download a financial statement belonging to another user. "
                "The engineering team configures the API to return HTTP 401 Unauthorized. "
                "As the PM reviewing the API contract, what correction should you make?"
            ),
            options=[
                {"id": "A", "text": "401 is correct because any unauthorized action must return 401"},
                {"id": "B", "text": "Change it to 403 Forbidden, because 401 means unauthenticated (missing credentials), whereas 403 means authenticated but lacking permission for this resource"},
                {"id": "C", "text": "Change it to 500 Internal Server Error to hide the failure from the user"},
                {"id": "D", "text": "Change it to 201 Created with an empty payload"}
            ],
            correct_answers="B",
            hint="401 asks 'Who are you?' while 403 says 'I know who you are, but you cannot access this.'",
            explanation="401 Unauthorized is for unauthenticated callers (no login/bad token). When the user is authenticated but not allowed to view the resource, the standard code is 403 Forbidden.",
            concept_tag="HTTP Status Code Diagnostics",
            source_reference="API Error Handling"
        ),
        Question(
            quiz_id=q2.id,
            question_type="single",
            prompt=(
                "Build vs. Buy Decision: Your product team is building a food delivery app. "
                "A junior engineer proposes building a proprietary maps routing engine and SMS delivery gateway from scratch over 6 months.\n\n"
                "How should you evaluate this from a Product Management perspective?"
            ),
            options=[
                {"id": "A", "text": "Approve it, because building everything in-house always saves money regardless of maintenance"},
                {"id": "B", "text": "Reject building in-house; buy/integrate established APIs (Google Maps, Twilio) because routing and SMS are commodity infrastructure, and time-to-market is the primary competitive factor"},
                {"id": "C", "text": "Reject APIs completely and communicate with drivers using email"},
                {"id": "D", "text": "Build maps in-house but use an external API for the food recipes"}
            ],
            correct_answers="B",
            hint="Focus engineering hours on core differentiators (e.g. food delivery matching algorithms) rather than commodity infrastructure.",
            explanation="Commodity capabilities with high compliance and infrastructure demands (mapping, SMS, payment processing) should be bought via APIs. Engineering should focus on the core value proposition.",
            concept_tag="Build vs Buy Strategy",
            source_reference="Integration Strategy"
        )
    ])

    # =========================================================================
    # 3. DAY 3 QUIZ: DATA MODELING & PERFORMANCE SCENARIOS
    # =========================================================================
    q3 = Quiz(
        title="Data Modeling & Production Performance Scenarios",
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
            prompt=(
                "Scenario: Every Monday morning at 9:00 AM, executive leadership runs a complex weekly cohort retention dashboard. "
                "Simultaneously, customer support begins receiving reports that checkout pages are timing out and throwing 504 errors.\n\n"
                "What is the architectural root cause and the standard engineering solution?"
            ),
            options=[
                {"id": "A", "text": "The marketing email used HTTP instead of HTTPS"},
                {"id": "B", "text": "The analytics query is running directly against the live production OLTP database, locking tables and starving transactional writes; the query must be offloaded to an OLAP Data Warehouse (e.g., Snowflake/BigQuery)"},
                {"id": "C", "text": "The database needs all Primary Keys removed to speed up calculations"},
                {"id": "D", "text": "The executive dashboard should be converted into a mobile app"}
            ],
            correct_answers="B",
            hint="OLTP is for fast single-row live user queries; OLAP is for heavy multi-million row analytics aggregations.",
            explanation="Heavy analytical queries lock database resources and block user transactions. Analytics and BI reporting must be offloaded to an OLAP data warehouse (Snowflake/BigQuery) via ETL pipelines.",
            concept_tag="OLTP vs OLAP Separation",
            source_reference="Data Pipelines"
        ),
        Question(
            quiz_id=q3.id,
            question_type="single",
            prompt=(
                "Data Integrity Case: A user updates their shipping address in their account settings. "
                "However, when looking at an existing order that hasn't shipped yet, the warehouse staff sees the old address, "
                "while the order receipt shows the new address.\n\n"
                "What database design flaw caused this inconsistency?"
            ),
            options=[
                {"id": "A", "text": "The database was using PostgreSQL instead of MongoDB"},
                {"id": "B", "text": "A denormalized schema where customer address was duplicated across multiple tables without a single source of truth or clear order-snapshot design"},
                {"id": "C", "text": "The table had too many Foreign Keys"},
                {"id": "D", "text": "The server was using an in-memory cache"}
            ],
            correct_answers="B",
            hint="Think about what happens when flat tables duplicate data across multiple places without relational normalization.",
            explanation="This is an update anomaly caused by denormalization. Normalization ensures a single source of truth, or an explicit order-snapshot table specifically designed for immutable point-in-time shipping addresses.",
            concept_tag="Normalization & Update Anomalies",
            source_reference="Data Design"
        ),
        Question(
            quiz_id=q3.id,
            question_type="multiple",
            prompt=(
                "Selection Matrix: When evaluating databases for a new fintech lending platform requiring strict audit trails, "
                "exact ledger balances, and zero tolerance for lost transfers, why should the PM require a Relational (SQL) database over a NoSQL document store? (Select all that apply)"
            ),
            options=[
                {"id": "A", "text": "Strict ACID transactional compliance guarantees atomicity across double-entry balance updates"},
                {"id": "B", "text": "Predefined schemas prevent corrupted or missing currency and timestamp fields"},
                {"id": "C", "text": "Foreign Key constraints guarantee that every transaction references an existing account and ledger"},
                {"id": "D", "text": "Relational databases run without needing servers or electricity"}
            ],
            correct_answers=["A", "B", "C"],
            hint="Financial systems depend on ACID guarantees, strict schemas, and referential integrity.",
            explanation="Financial ledger systems demand ACID guarantees (all-or-nothing transactions), strict schemas to avoid corrupted records, and Foreign Keys to enforce referential integrity.",
            concept_tag="SQL vs NoSQL Selection",
            source_reference="Choosing Your Database"
        )
    ])

    # =========================================================================
    # 3B. TECH STACKS GUIDE: CLOUD, ARCHITECTURE & DEVOPS
    # =========================================================================
    q_tech = Quiz(
        title="Tech Stacks Guide: Architecture & Cloud Decisions",
        source_scope="single",
        material_id=m_tech.id
    )
    db.add(q_tech)
    db.commit()
    db.refresh(q_tech)

    db.add_all([
        Question(
            quiz_id=q_tech.id,
            question_type="single",
            prompt=(
                "Scenario: Your B2B SaaS startup is pitching to enterprise healthcare systems and Fortune 500 banks. "
                "What architectural requirement must your tech stack prioritize to pass enterprise security and procurement audits?"
            ),
            options=[
                {"id": "A", "text": "SOC2/HIPAA compliance readiness, encryption in transit (TLS) and at rest (AES-256), and Role-Based Access Control (RBAC)"},
                {"id": "B", "text": "Using solely NoSQL databases so schemas never have to be declared"},
                {"id": "C", "text": "Hosting the entire backend on a single shared VPS to save cloud infrastructure cost"},
                {"id": "D", "text": "Allowing all microservices to communicate over public HTTP with basic passwords"}
            ],
            correct_answers="A",
            hint="Enterprise procurement audits focus on compliance frameworks, data encryption, and identity management.",
            explanation="Enterprise readiness requires strict data governance, end-to-end encryption, least-privilege RBAC, and audit logs to pass third-party security certifications (SOC 2, ISO 27001, HIPAA).",
            concept_tag="Enterprise Readiness & Security",
            source_reference="Tech Stacks Guide"
        ),
        Question(
            quiz_id=q_tech.id,
            question_type="single",
            prompt=(
                "DevOps Strategy: Releases are breaking in production twice a week because engineers merge code directly without standardized integration testing. "
                "What is the fundamental PM fix?"
            ),
            options=[
                {"id": "A", "text": "Implement an automated CI/CD pipeline (e.g. GitHub Actions) that enforces linting, automated unit/integration tests, and staging review before any PR can merge"},
                {"id": "B", "text": "Stop writing automated tests and mandate manual QA testing on production directly"},
                {"id": "C", "text": "Revert all backend code back to a monolithic architecture written in assembly"},
                {"id": "D", "text": "Only allow senior engineers to write code while junior engineers manually deploy code via FTP"}
            ],
            correct_answers="A",
            hint="A standard automation pipeline acts as a safety gate for pull requests before code reaches users.",
            explanation="A robust Continuous Integration / Continuous Deployment (CI/CD) pipeline acts as a safety gate, automatically running unit and integration test suites on every pull request, preventing regression bugs from reaching production.",
            concept_tag="CI/CD & DevOps Automation",
            source_reference="Tech Stacks Guide"
        ),
        Question(
            quiz_id=q_tech.id,
            question_type="single",
            prompt=(
                "Containerization & Docker: What primary problem does Docker solve for engineering and product teams during product release cycles?"
            ),
            options=[
                {"id": "A", "text": "It eliminates the 'it works on my machine' bug by packaging software with all its runtime dependencies, OS libraries, and configuration into an immutable container"},
                {"id": "B", "text": "It automatically rewrites slow SQL queries into fast in-memory lookups"},
                {"id": "C", "text": "It replaces the need for a web framework like Django, Node, or Go"},
                {"id": "D", "text": "It makes cloud hosting completely free across all providers"}
            ],
            correct_answers="A",
            hint="Containers encapsulate code alongside operating system dependencies so behavior is reproducible anywhere.",
            explanation="Containers encapsulate code along with all system dependencies and environment configurations, guaranteeing that code runs identically on a developer's MacBook, the staging environment, and the production Kubernetes cluster.",
            concept_tag="Containers & Docker",
            source_reference="Tech Stacks Guide"
        )
    ])

    # =========================================================================
    # 3C. PYTHON TECH STACKS: FRAMEWORKS & CONCURRENCY
    # =========================================================================
    q_py = Quiz(
        title="Python Tech Stack: Framework Selection & Concurrency",
        source_scope="single",
        material_id=m_py.id
    )
    db.add(q_py)
    db.commit()
    db.refresh(q_py)

    db.add_all([
        Question(
            quiz_id=q_py.id,
            question_type="single",
            prompt=(
                "Scenario: You are designing a real-time AI Agent platform where each user query makes 3 parallel API calls to external LLMs (latency: 1.5s each). "
                "Why should you mandate FastAPI over traditional synchronous Flask/Django?"
            ),
            options=[
                {"id": "A", "text": "FastAPI natively leverages Python's async/await (ASGI), allowing worker threads to handle other client requests while waiting on external network I/O without blocking threads"},
                {"id": "B", "text": "FastAPI compiles Python into machine code, executing CPU-intensive algorithms 100x faster than Flask"},
                {"id": "C", "text": "Flask is deprecated and cannot make HTTP calls to third-party endpoints"},
                {"id": "D", "text": "Django cannot connect to relational databases when using AI agents"}
            ],
            correct_answers="A",
            hint="During slow network I/O calls to LLMs, an asynchronous event loop can serve other incoming requests.",
            explanation="FastAPI is built on Starlette and Pydantic with native ASGI support. During external network requests (like calling OpenAI or Claude APIs), the async event loop pauses the coroutine and continues serving other users, drastically lowering required thread counts and server costs.",
            concept_tag="FastAPI & Async Concurrency",
            source_reference="Python Stacks"
        ),
        Question(
            quiz_id=q_py.id,
            question_type="single",
            prompt=(
                "Case Analysis: Your enterprise PM team needs an internal portal with RBAC (Role-Based Access Control), complex relational models, admin dashboards, and database migrations ready in 2 weeks. "
                "Which Python framework delivers the fastest time-to-market?"
            ),
            options=[
                {"id": "A", "text": "Django ('batteries-included' with built-in ORM, auto-generated admin panel, and robust auth)"},
                {"id": "B", "text": "Flask (because starting with an empty file is always faster for enterprise auth)"},
                {"id": "C", "text": "FastAPI (requires manually building admin panels and assembling third-party auth libraries)"},
                {"id": "D", "text": "Writing raw WSGI handlers without any framework"}
            ],
            correct_answers="A",
            hint="Which framework is famous for 'batteries-included' and has a ready-made admin panel?",
            explanation="Django follows a 'batteries-included' philosophy. It provides an immediate, battle-tested admin interface, user management/auth, and ORM migrations out of the box, drastically cutting initial MVP lead times for internal tooling.",
            concept_tag="Django Batteries-Included",
            source_reference="Python Stacks"
        ),
        Question(
            quiz_id=q_py.id,
            question_type="single",
            prompt=(
                "Language Trade-offs: A junior developer argues that Python should be used for the high-frequency trading engine calculating portfolio risk in sub-millisecond real-time. "
                "As PM, why do you push back?"
            ),
            options=[
                {"id": "A", "text": "Python is dynamically typed, interpreted, and constrained by the GIL (Global Interpreter Lock), making it unsuited for sub-millisecond CPU-bound compute compared to C++, Rust, or Go"},
                {"id": "B", "text": "Python cannot perform floating-point arithmetic or matrix multiplications"},
                {"id": "C", "text": "Python has no libraries for financial math or statistical calculations"},
                {"id": "D", "text": "Python requires 100x more database connections than compiled languages"}
            ],
            correct_answers="A",
            hint="Consider interpreted overhead and GIL constraints in CPU-heavy sub-millisecond environments.",
            explanation="Python excels at rapid prototyping, glue code, data science, and async I/O web services. However, for ultra-low latency, CPU-bound execution (like algorithmic trading engines), compiled languages with manual memory control and zero interpreter overhead (Rust, C++, Go) are necessary.",
            concept_tag="Python GIL & Performance Trade-offs",
            source_reference="Python Stacks"
        )
    ])

    # =========================================================================
    # 4. COMPREHENSIVE PM COURSE QUIZ: STRATEGIC PRODUCT SCENARIOS
    # =========================================================================
    q_all = Quiz(
        title="Comprehensive PM Tech & Architecture Strategy",
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
            prompt=(
                "Situational Case: Your engineering lead informs you that search queries on the products catalog table (now at 5 million rows) "
                "have slowed down from 20ms to 2.5 seconds, causing user drop-off.\n\n"
                "Before suggesting database sharding or migrating to a new tech stack, what simple database optimization should you ask about?"
            ),
            options=[
                {"id": "A", "text": "Whether an Index (B-Tree) exists on the searchable columns (e.g., product_name, category_id) so the database doesn't have to scan every row"},
                {"id": "B", "text": "Whether they can switch from JSON to XML payloads"},
                {"id": "C", "text": "Whether all product descriptions can be deleted to save bytes"},
                {"id": "D", "text": "Whether users can be asked to search only during night hours"}
            ],
            correct_answers="A",
            hint="Without this lookup structure, a database performs a full table scan across all 5 million rows for every search.",
            explanation="Indexes allow the database engine to locate matching rows in logarithmic time without performing expensive full table scans across millions of rows.",
            concept_tag="Database Indexes & Query Performance",
            source_reference="Database Performance"
        ),
        Question(
            quiz_id=q_all.id,
            question_type="single",
            prompt=(
                "Strategic Architecture: You are building an enterprise healthcare portal. "
                "Security compliance requires that patients can only view their own lab records, doctors can view their assigned patients, and auditors have read-only access.\n\n"
                "Where in the 3-tier architecture MUST these role-based access control (RBAC) rules be enforced?"
            ),
            options=[
                {"id": "A", "text": "Solely on the client-side UI (hiding buttons with CSS)"},
                {"id": "B", "text": "On the Backend Server, verifying user identity and claims on every incoming request before executing the query"},
                {"id": "C", "text": "At the DNS registrar level"},
                {"id": "D", "text": "In the user's browser localStorage"}
            ],
            correct_answers="B",
            hint="Frontend UI checks are cosmetic; security enforcement must live where business logic and data access are controlled.",
            explanation="Security and authorization rules must always be enforced on the backend server. Client-side checks are for user experience only; relying on client-side security is an OWASP vulnerability.",
            concept_tag="Security & Authorization Enforcement",
            source_reference="3-Tier Security"
        ),
        Question(
            quiz_id=q_all.id,
            question_type="true_false",
            prompt=(
                "Logical Evaluation: A team is evaluating Python for their backend. "
                "While Python has execution speed trade-offs compared to Go or Rust, "
                "its massive open-source ecosystem, clean syntax, and rapid developer velocity make it one of the most effective languages for early MVPs, AI/ML features, and fast time-to-market."
            ),
            options=[
                {"id": "true", "text": "True"},
                {"id": "false", "text": "False"}
            ],
            correct_answers="true",
            hint="Remember the core trade-off: developer speed vs raw hardware CPU speed.",
            explanation="True. Python prioritizes developer velocity and shipping speed over microsecond CPU execution, and dominates AI/ML pipelines.",
            concept_tag="Language Trade-offs & PM Decisions",
            source_reference="Python Stacks Guide"
        )
    ])

    db.commit()
    db.close()
    print("ALL SCENARIO-BASED ANALYTICAL QUIZZES SUCCESSFULLY SEEDED!")

if __name__ == "__main__":
    build_scenario_analytical_quizzes()
