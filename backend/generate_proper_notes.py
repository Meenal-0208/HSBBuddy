from app.db.session import SessionLocal
from app.models.entities import Material, Note, Quiz, Question

def generate_deep_proper_notes():
    db = SessionLocal()
    mats = db.query(Material).all()

    # Clear old notes and quizzes to replace with exhaustive, textbook-grade revision notes
    db.query(Note).delete()
    db.query(Question).delete()
    db.query(Quiz).delete()
    db.commit()

    m_d1 = next((m for m in mats if "Day 1" in m.original_filename), mats[0])
    m_d2 = next((m for m in mats if "Day 2" in m.original_filename), mats[1])
    m_d3 = next((m for m in mats if "Day 3" in m.original_filename), mats[2])
    m_tech = next((m for m in mats if "Tech-Stacks-Guide" in m.original_filename), mats[3])
    m_py = next((m for m in mats if "Python" in m.original_filename), mats[4])

    # =========================================================================
    # 1. PM2-01 & PM2-02: HOW SOFTWARE WORKS & THE STACK (DAY 1)
    # =========================================================================
    n1 = Note(
        material_id=m_d1.id,
        source_scope="single",
        overview="Exhaustive Product Manager guide on web architecture, client-server interactions, network protocols, rendering strategies, monolithic vs microservice paradigms, and mobile deployment models based on PM2 Day 1 lectures by Dr. Anand Fadte.",
        content=[
            {
                "heading": "1. The 3-Tier Architecture & The 6-Step Request Lifecycle",
                "content": (
                    "• The Three Canonical Layers:\n"
                    "  1. Client (Front-End / Presentation): What the user sees, clicks, and taps in a web browser or native app. Responsible for UI layout, capturing form input, and client-side validation.\n"
                    "  2. Server (Back-End / Logic Layer): Executes business rules, pricing logic, fraud checks, and authentication. Rule of thumb: 'Never trust the client'—the backend re-validates all incoming data before touching persistence.\n"
                    "  3. Database (Data Tier / Persistence): Securely stores state permanently (PostgreSQL, MySQL, MongoDB). Retains records across user sessions and server restarts.\n\n"
                    "• The 6 Steps When a User Clicks a Button:\n"
                    "  Step 1. DNS Lookup: The browser resolves the domain name (e.g. app.com) into an IP address.\n"
                    "  Step 2. Secure Connect: HTTPS TLS/SSL handshake establishes an encrypted tunnel over TCP/IP.\n"
                    "  Step 3. HTTP Request Sent: Client transmits an HTTP method (GET, POST, PUT) with headers and JSON body.\n"
                    "  Step 4. Server Processes: Backend parses request, runs business authorization, and queries the database.\n"
                    "  Step 5. Response Returned: Server sends back an HTTP status code with payload (JSON or HTML).\n"
                    "  Step 6. UI Rendered: Browser engine parses response and updates the screen DOM."
                ),
                "sourceRef": "Day 1, Slide 3"
            },
            {
                "heading": "2. Web Protocols, State Management & Caching",
                "content": (
                    "• Core Protocols:\n"
                    "  - HTTP vs HTTPS: HyperText Transfer Protocol. HTTPS wraps HTTP in TLS encryption to prevent eavesdropping and man-in-the-middle tampering.\n"
                    "  - TCP/IP: Breaks data into numbered packets, routes them across networks, and reassembles them in guaranteed order.\n"
                    "  - DNS: The internet's address book mapping hostnames to numerical IPs.\n\n"
                    "• State & Sessions:\n"
                    "  - Cookies: Small key-value data stored directly in the browser by the server.\n"
                    "  - Sessions: Server-side memory tracking logged-in user state.\n"
                    "  - JWT (JSON Web Tokens): Digitally signed cryptographic tokens transmitted in Authorization headers on every request.\n\n"
                    "• Speed & Caching Hierarchy:\n"
                    "  - CDN (Content Delivery Network): Geographically distributed edge servers (Cloudflare, CloudFront) caching static assets (images, CSS, JS) right next to users to reduce latency.\n"
                    "  - In-Memory Server Cache (Redis, Memcached): Caches hot database query results in RAM to eliminate disk I/O bottlenecks."
                ),
                "sourceRef": "Day 1, Slide 4-5"
            },
            {
                "heading": "3. Front-End Foundations, DOM & Rendering Strategies",
                "content": (
                    "• The Core Trinity:\n"
                    "  - HTML: Structural skeleton of the document.\n"
                    "  - CSS: Presentation styling (colors, flexbox, typography, Tailwind CSS).\n"
                    "  - JavaScript: Dynamic behavior, DOM manipulation, asynchronous network calls (Fetch/Axios).\n\n"
                    "• The DOM & Virtual DOM:\n"
                    "  - DOM (Document Object Model): Browser's tree-structure representation of the UI.\n"
                    "  - Virtual DOM: React's performance technique: batches UI changes in memory and calculates minimal diffs before repainting pixels.\n\n"
                    "• Rendering Strategies (PM Trade-offs):\n"
                    "  1. CSR (Client-Side Rendering): Browser downloads empty HTML and large JS bundle, then builds UI on device. Best for private dashboards and interactive SPAs; poor for public SEO.\n"
                    "  2. SSR (Server-Side Rendering - Next.js): Server compiles full HTML for every user request. Excellent for marketing sites, SEO, and fast First Contentful Paint.\n"
                    "  3. SSG (Static Site Generation): HTML pages generated once at build time and served from CDN. Best for blogs, documentation, and marketing pages."
                ),
                "sourceRef": "Day 1, Slide 7-8"
            },
            {
                "heading": "4. Architecture Patterns: Monoliths, Microservices & Serverless",
                "content": (
                    "• Monolithic Architecture:\n"
                    "  - One unified codebase where all business domains (auth, inventory, billing) live and deploy together.\n"
                    "  - Advantages: Easiest to build, test, debug, and deploy for early-stage MVPs.\n"
                    "  - Drawbacks: Individual bottlenecks cannot scale independently; a single unhandled exception or memory leak can crash the entire company platform.\n\n"
                    "• Microservices Architecture:\n"
                    "  - Application decomposed into independent services communicating over REST, gRPC, or message queues.\n"
                    "  - Advantages: Autonomous cross-functional teams, independent deployment pipelines, and isolated horizontal scaling.\n"
                    "  - Drawbacks: High operational complexity, distributed data consistency challenges, and network latency.\n\n"
                    "• Containers (Docker) & Serverless:\n"
                    "  - Docker: Encapsulates code with all OS dependencies into portable immutable images.\n"
                    "  - Serverless (AWS Lambda): Cloud provider executes code on demand per event with zero idle server costs; ideal for sporadic background workloads."
                ),
                "sourceRef": "Day 1, Slide 10"
            },
            {
                "heading": "5. Mobile Approaches: Native vs. Cross-Platform vs. PWA",
                "content": (
                    "• 1. Native (Swift for iOS, Kotlin for Android):\n"
                    "  - Pros: Unmatched performance, 100% access to cutting-edge device hardware (FaceID, Bluetooth, ARKit).\n"
                    "  - Cons: Requires two separate engineering teams, double development cost, and disjointed release schedules.\n\n"
                    "• 2. Cross-Platform (React Native, Flutter):\n"
                    "  - Pros: Single unified codebase runs on both iOS and Android; 70-90% code reuse, faster time-to-market.\n"
                    "  - Cons: Slight performance overhead; relies on bridge layer for newest OS capabilities.\n\n"
                    "• 3. PWA (Progressive Web App):\n"
                    "  - Pros: Web application installable directly to home screen without App Store 30% commission or review delays.\n"
                    "  - Cons: Restricted background processing, limited hardware access on iOS Safari, and zero app store discovery."
                ),
                "sourceRef": "Day 1, Slide 12-13"
            }
        ],
        model_name="gemini-2.5-flash-synthesized"
    )
    db.add(n1)

    # =========================================================================
    # 2. PM2-03 & PM2-04: APIS & INTEGRATIONS (DAY 2)
    # =========================================================================
    n2 = Note(
        material_id=m_d2.id,
        source_scope="single",
        overview="Essential revision guide for Product Managers on APIs, request anatomy, status code diagnostics, webhook event architectures, partner integration checklists, and build-vs-buy analysis.",
        content=[
            {
                "heading": "1. What Is an API? The Restaurant Analogy & Types of APIs",
                "content": (
                    "• The Restaurant Analogy:\n"
                    "  - Client (You): Dining customer reviewing the menu and ordering food.\n"
                    "  - API (The Waiter): Takes your structured request to the kitchen and delivers the structured response back.\n"
                    "  - Server (The Kitchen): The private system where business logic cooks and database ingredients reside.\n\n"
                    "• Four Ways APIs Appear in Products:\n"
                    "  1. External Third-Party APIs: You consume another company's services (e.g. Google Maps for navigation, Twilio for SMS, Stripe for payments).\n"
                    "  2. Internal Private APIs: Your front-end app communicates with your private backend microservices.\n"
                    "  3. Partner APIs: Shared specifically with verified B2B partners under strict contracts.\n"
                    "  4. Public/Open APIs: You expose your own platform's capabilities to external developers (e.g. Twitter/Shopify Developer APIs) to build an ecosystem."
                ),
                "sourceRef": "Day 2, Slide 3"
            },
            {
                "heading": "2. The 5 Essential Parts of Every API Call",
                "content": (
                    "• 1. Endpoint (URL): The unique digital address of the resource (e.g., https://api.swiggy.com/v1/orders).\n"
                    "• 2. HTTP Method (Verb):\n"
                    "  - GET: Retrieve data (safe, idempotent, read-only).\n"
                    "  - POST: Create a brand new record.\n"
                    "  - PUT / PATCH: Update existing data (PUT replaces entire record, PATCH updates specific fields).\n"
                    "  - DELETE: Remove a record.\n"
                    "• 3. Headers: Metadata about the call (e.g., 'Content-Type: application/json', 'Authorization: Bearer <token>').\n"
                    "• 4. Request Body: The payload formatted in JSON containing fields to create or modify.\n"
                    "• 5. Response Status Code: A 3-digit standardized number from the server indicating what happened."
                ),
                "sourceRef": "Day 2, Slide 5"
            },
            {
                "heading": "3. HTTP Status Codes Cheat Sheet for PMs",
                "content": (
                    "• 2xx Success (Everything worked as expected):\n"
                    "  - 200 OK: Standard successful request.\n"
                    "  - 201 Created: New resource successfully created in database.\n\n"
                    "• 4xx Client Errors (User or Frontend Mistake):\n"
                    "  - 400 Bad Request: Malformed JSON or failed client validation.\n"
                    "  - 401 Unauthorized: User identity is unknown / login credentials missing or expired.\n"
                    "  - 403 Forbidden: Identity is known, but user lacks permission to access this resource (e.g. non-admin trying to access billing).\n"
                    "  - 404 Not Found: Requested URL or resource does not exist.\n"
                    "  - 429 Too Many Requests: Rate limit exceeded (client must back off).\n\n"
                    "• 5xx Server Errors (Backend Infrastructure Mistake):\n"
                    "  - 500 Internal Server Error: Unhandled crash or exception in backend code.\n"
                    "  - 502 Bad Gateway / 504 Gateway Timeout: Reverse proxy or upstream microservice failed to respond in time."
                ),
                "sourceRef": "Day 2, Slide 6"
            },
            {
                "heading": "4. Notifications Architecture: Webhooks (Push) vs. Polling (Pull)",
                "content": (
                    "• Polling (Pull Method):\n"
                    "  - How it works: Your client/server repeatedly asks the external system every few seconds: 'Is the payment done yet?'\n"
                    "  - Drawback: Enormous waste of server compute, high bandwidth consumption, and introduces artificial latency between polls.\n\n"
                    "• Webhooks (Push Method):\n"
                    "  - How it works: You register a callback URL with the partner. The instant the payment or event clears, their server sends an HTTP POST request with event payload to your endpoint.\n"
                    "  - Real-world rule: Urgent real-time events (payments, delivery status, OTP verification) MUST use Webhooks; slow periodic batch reports (weekly settlement CSVs) can use Polling."
                ),
                "sourceRef": "Day 2, Slide 7"
            },
            {
                "heading": "5. Partner Integrations: The 5-Question PM Checklist & Build vs Buy",
                "content": (
                    "• The 5 Questions Before Saying Yes to an API Integration:\n"
                    "  1. Does it have comprehensive documentation and a functional sandbox/staging environment?\n"
                    "  2. What is their uptime SLA (e.g. 99.9% vs 99.99%) and historical reliability?\n"
                    "  3. What are their rate limits (calls per second) and pricing tiers at scale?\n"
                    "  4. How do they handle versioning and breaking changes (notice period, deprecation policy)?\n"
                    "  5. Do they support Webhooks for real-time notifications or only Polling?\n\n"
                    "• Build vs Buy Decision Matrix:\n"
                    "  - Buy/Integrate (Stripe, Twilio, Google Maps): Non-core commodity functions requiring heavy specialized maintenance.\n"
                    "  - Build In-House: Core competitive differentiators, proprietary recommendation engines, or when vendor fees become prohibitively expensive at scale."
                ),
                "sourceRef": "Day 2, Slide 8-9"
            }
        ],
        model_name="gemini-2.5-flash-synthesized"
    )
    db.add(n2)

    # =========================================================================
    # 3. PM2-05 & PM2-06: DATABASES & DATA MODELING (DAY 3)
    # =========================================================================
    n3 = Note(
        material_id=m_d3.id,
        source_scope="single",
        overview="Technical deep dive for Product Managers on relational database architecture, SQL vs NoSQL trade-offs, ER diagram modeling, 3NF normalization, ACID transaction guarantees, and OLTP vs OLAP data pipelines.",
        content=[
            {
                "heading": "1. What Is a Database? Core Entities & Relational Keys",
                "content": (
                    "• Definition: A database is a strict spreadsheet with enforceable rules (data types, uniqueness constraints, relational integrity).\n"
                    "• Core Concepts:\n"
                    "  - Table: Entity category (e.g. Users, Orders, Products).\n"
                    "  - Row (Record/Tuple): A single instance of an entity (e.g., Jane Doe).\n"
                    "  - Column (Field/Attribute): A defined property with strict data typing (Integer, VARCHAR, Boolean, Timestamp).\n"
                    "  - Primary Key (PK): A unique, non-null identifier assigned to each row (e.g. user_id: 'u-101').\n"
                    "  - Foreign Key (FK): An attribute in a child table linking back to the Primary Key of a parent table (e.g., orders.user_id -> users.id). Enforces business logic: 'An order cannot exist without a valid customer.'\n"
                    "  - Indexes: Lookup data structures (B-Trees) that allow instant row retrieval without scanning all millions of rows."
                ),
                "sourceRef": "Day 3, Slide 3"
            },
            {
                "heading": "2. Choosing Your Database: SQL vs. NoSQL Matrix",
                "content": (
                    "• Relational (SQL - PostgreSQL, MySQL):\n"
                    "  - Schema: Rigid, predefined schemas with strict column types.\n"
                    "  - Scaling: Vertical scaling (upgrading CPU/RAM on main server) + read replicas.\n"
                    "  - Querying: Expressive JOIN operations linking tables together.\n"
                    "  - Best For: Financial transactions, ecommerce inventory, order management, audit ledgers.\n\n"
                    "• Non-Relational (NoSQL - MongoDB, DynamoDB, Redis):\n"
                    "  - Schema: Flexible JSON document structure or key-value pairs.\n"
                    "  - Scaling: Horizontal scaling (partitioning and sharding across server clusters).\n"
                    "  - Querying: Fast single-document reads without expensive multi-table joins.\n"
                    "  - Best For: Real-time sensor logs, social media feeds, rapid prototyping, caching (Redis).\n\n"
                    "• PM Decision Framework:\n"
                    "  - Choose SQL when: Strict ACID transactions and data integrity are non-negotiable.\n"
                    "  - Choose NoSQL when: Data structure evolves rapidly or massive horizontal write scale is required."
                ),
                "sourceRef": "Day 3, Slide 4"
            },
            {
                "heading": "3. Normalization Basics: Why Engineering Splits Tables",
                "content": (
                    "• The Flat Table Trap:\n"
                    "  - If a spreadsheet repeats customer name, email, and shipping address on every single order row, updating an address requires modifying thousands of rows.\n"
                    "  - This introduces Update Anomalies (address updated on one row but forgotten on another) and Deletion Anomalies.\n\n"
                    "• Normalization (1NF -> 2NF -> 3NF):\n"
                    "  - Splits flat data into normalized entity tables (Users table, Orders table, OrderItems table).\n"
                    "  - Connected via Foreign Keys.\n"
                    "  - Outcome: Single source of truth. Change a customer's address in one place, and all 50 past orders reflect the correct parent relation."
                ),
                "sourceRef": "Day 3, Slide 6"
            },
            {
                "heading": "4. Data Pipelines & Separation of Concerns: OLTP vs. OLAP",
                "content": (
                    "• OLTP (Online Transaction Processing):\n"
                    "  - The live operational database (PostgreSQL, MySQL).\n"
                    "  - Optimized for fast, sub-millisecond single-row reads and writes (e.g. 'Add product to cart', 'Process checkout').\n\n"
                    "• OLAP (Online Analytical Processing):\n"
                    "  - Data Warehouses (Snowflake, Google BigQuery, Amazon Redshift).\n"
                    "  - Columnar storage optimized for massive analytical aggregations across millions of rows (e.g. 'Calculate average retention by cohort across 3 years').\n\n"
                    "• The Golden Rule for PMs:\n"
                    "  - NEVER run heavy BI analytics or data science queries directly on your live production OLTP database! Doing so locks tables and crashes the customer-facing app."
                ),
                "sourceRef": "Day 3, Slide 8-9"
            }
        ],
        model_name="gemini-2.5-flash-synthesized"
    )
    db.add(n3)

    # =========================================================================
    # 4. PM2-TECH-STACKS-GUIDE
    # =========================================================================
    n4 = Note(
        material_id=m_tech.id,
        source_scope="single",
        overview="Comprehensive executive breakdown of modern frontend frameworks, backend runtimes, database engines, cloud infrastructure, and the evaluation framework for technology selection.",
        content=[
            {
                "heading": "1. The Four Layers of a Modern Technology Stack",
                "content": (
                    "• 1. Frontend: HTML, CSS, JavaScript, React, Next.js, Vue, Angular, iOS/Android mobile.\n"
                    "• 2. Backend: Business logic runtimes: Python (FastAPI/Django), Node.js (Express), Java (Spring Boot), Go (Gin), C# (.NET).\n"
                    "• 3. Database: Relational SQL (Postgres, MySQL), NoSQL (MongoDB, DynamoDB), Cache (Redis).\n"
                    "• 4. Infrastructure: Cloud providers (AWS, GCP, Azure), Containers (Docker, Kubernetes), CI/CD pipelines (GitHub Actions)."
                ),
                "sourceRef": "Tech Stacks Guide, Slide 2"
            },
            {
                "heading": "2. Frontend Frameworks Comparison Matrix",
                "content": (
                    "• React (Meta): Dominant industry standard, virtual DOM, component ecosystem; best for SPAs.\n"
                    "• Next.js (Vercel): Full-stack React with server-side rendering (SSR) and static generation (SSG); ideal for SEO and high-traffic public web apps.\n"
                    "• Vue.js: Gentle learning curve, popular in Asia-Pacific markets.\n"
                    "• Angular (Google): Opinionated enterprise TypeScript framework with strict MVC architecture."
                ),
                "sourceRef": "Tech Stacks Guide, Slide 3"
            },
            {
                "heading": "3. Backend Runtimes & Killer Features",
                "content": (
                    "• Node.js: Unified JavaScript across frontend and backend; high I/O throughput with event-loop model.\n"
                    "• Python: Dominates AI/ML and rapid prototyping; clean syntax, highly readable.\n"
                    "• Java / Spring Boot: Enterprise standard for banking and large-scale systems; multi-threading and JVM stability.\n"
                    "• Go (Golang): High-concurrency compiled binary; low memory footprint, ideal for microservices and cloud infrastructure tools."
                ),
                "sourceRef": "Tech Stacks Guide, Slide 4-5"
            }
        ],
        model_name="gemini-2.5-flash-synthesized"
    )
    db.add(n4)

    # =========================================================================
    # 5. TECH-STACKS-PYTHON
    # =========================================================================
    n5 = Note(
        material_id=m_py.id,
        source_scope="single",
        overview="Technical guide for Product Managers on Python backend architectures, Django vs FastAPI vs Flask, asynchronous execution, and machine learning model serving.",
        content=[
            {
                "heading": "1. Where Python Fits in the Stack",
                "content": (
                    "• Presentation Tier: Browser / Mobile client.\n"
                    "• Logic Tier (Python lives here): Backend application server processing HTTP endpoints, business rules, and AI pipelines.\n"
                    "• Data Tier: PostgreSQL, MongoDB, Redis.\n"
                    "• Core Advantage: Readable, English-like syntax allowing small teams to ship and iterate faster than nearly any other language."
                ),
                "sourceRef": "Python Stacks, Slide 3"
            },
            {
                "heading": "2. Python's Strengths & Weaknesses (PM Trade-offs)",
                "content": (
                    "• Strengths:\n"
                    "  - Unmatched AI/ML ecosystem (PyTorch, TensorFlow, Scikit-Learn, LangChain, HuggingFace).\n"
                    "  - Enormous PyPI package repository (500,000+ packages).\n"
                    "  - Massive engineering talent pool.\n\n"
                    "• Weaknesses:\n"
                    "  - Interpreted language with slower execution than compiled languages (C++, Rust, Go).\n"
                    "  - Global Interpreter Lock (GIL) historical limits on native multi-threading.\n"
                    "  - Not suitable for client-side native mobile development."
                ),
                "sourceRef": "Python Stacks, Slide 4"
            },
            {
                "heading": "3. The Big Three Python Web Frameworks",
                "content": (
                    "• 1. Django ('Batteries Included'):\n"
                    "  - Includes built-in ORM, admin dashboard, authentication, CSRF security, and database migrations.\n"
                    "  - Best For: Fast time-to-market web apps, content portals, and startups needing full-stack structure.\n\n"
                    "• 2. FastAPI (Modern & Asynchronous):\n"
                    "  - Built on Python type hints and ASGI; ultra-fast performance, automatic Swagger/OpenAPI documentation.\n"
                    "  - Best For: Microservices, REST APIs, and serving AI/ML inference endpoints.\n\n"
                    "• 3. Flask (Minimal Micro-Framework):\n"
                    "  - Minimal core with unopinionated architecture.\n"
                    "  - Best For: Small prototypes and internal micro-utilities."
                ),
                "sourceRef": "Python Stacks, Slide 6-7"
            }
        ],
        model_name="gemini-2.5-flash-synthesized"
    )
    db.add(n5)

    # =========================================================================
    # RE-CREATE ALL QUIZZES LINKED DIRECTLY TO THESE NEW PROPER NOTES
    # =========================================================================

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
            prompt="In a standard 3-tier web architecture, which tier is strictly responsible for executing business rules, user authorization, and data validation?",
            options=[
                {"id": "A", "text": "Presentation / Front-End Tier"},
                {"id": "B", "text": "Logic / Back-End Tier"},
                {"id": "C", "text": "Persistence / Database Tier"},
                {"id": "D", "text": "Domain Name System (DNS)"}
            ],
            correct_answers="B",
            hint="Think about the layer executing core code between the browser and storage.",
            explanation="The Application/Server tier executes business logic, authorizes users, and interfaces with the database (Day 1, Slide 3).",
            concept_tag="3-Tier Architecture",
            source_reference="Day 1 Slide 3"
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
            hint="Microservices grant independence and resilience, but require strong monitoring.",
            explanation="Microservices enable independent deployment, isolated scaling, and domain ownership, while requiring robust monitoring (Day 1, Slide 8).",
            concept_tag="Microservices vs Monolith",
            source_reference="Day 1 Slide 8"
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

    # Quiz 4
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
    print("PROPER HIGH-YIELD CURRICULUM NOTES AND QUIZZES SUCCESSFULLY SEEDED!")

if __name__ == "__main__":
    generate_deep_proper_notes()
