from app.db.session import SessionLocal
from app.models.entities import Material, Note

def build_high_yield_revision_stickies():
    db = SessionLocal()
    mats = db.query(Material).all()

    # Clear old notes and replace with high-yield revision cards (zero administrative fluff/names)
    db.query(Note).delete()
    db.commit()

    m_d1 = next((m for m in mats if "Day 1" in m.original_filename), mats[0])
    m_d2 = next((m for m in mats if "Day 2" in m.original_filename), mats[1])
    m_d3 = next((m for m in mats if "Day 3" in m.original_filename), mats[2])
    m_tech = next((m for m in mats if "Tech-Stacks-Guide" in m.original_filename), mats[3])
    m_py = next((m for m in mats if "Python" in m.original_filename), mats[4])

    # ---------------------------------------------------------
    # 1. PM2 DAY 1: CORE ARCHITECTURE & WEB ESSENTIALS
    # ---------------------------------------------------------
    n1 = Note(
        material_id=m_d1.id,
        source_scope="single",
        overview="High-yield revision notes covering 3-tier architecture, request lifecycles, and scaling patterns.",
        content=[
            {
                "heading": "The 3-Tier Architecture",
                "content": (
                    "• Front-End (Client): Browser or mobile app (React, Swift). Renders UI and basic input checks.\n"
                    "• Back-End (Server): Executes business logic, pricing, permissions, and fraud checks. Golden Rule: Never trust client input.\n"
                    "• Database (Storage): Permanent persistence (PostgreSQL, MongoDB). Retains records across server restarts."
                ),
                "sourceRef": "Day 1"
            },
            {
                "heading": "The 6-Step Click Lifecycle",
                "content": (
                    "1. DNS Lookup: Converts domain URL to server IP address.\n"
                    "2. HTTPS Handshake: Establishes TLS/SSL encrypted connection.\n"
                    "3. HTTP Request: Client sends Verb (GET/POST) + Headers + JSON payload.\n"
                    "4. Server Processing: Validates request, checks authorization, queries DB.\n"
                    "5. Response Sent: Server returns HTTP Status Code + Data.\n"
                    "6. UI Update: Browser renders HTML or updates DOM."
                ),
                "sourceRef": "Day 1"
            },
            {
                "heading": "State & Speed: Cookies, JWT & CDNs",
                "content": (
                    "• Cookies: Small key-value data saved directly in user's browser.\n"
                    "• Sessions vs. JWT: Sessions store state in server memory; JWTs are signed cryptographic tokens passed in request headers.\n"
                    "• CDN (Content Delivery Network): Replicates static files (images, CSS, JS) on global edge servers to cut latency.\n"
                    "• Redis/Memcached: In-memory RAM cache for hot database queries."
                ),
                "sourceRef": "Day 1"
            },
            {
                "heading": "Rendering: CSR vs. SSR vs. SSG",
                "content": (
                    "• CSR (Client-Side Rendering): Browser loads empty HTML + JS. Best for private dashboards; terrible for public SEO.\n"
                    "• SSR (Server-Side Rendering - Next.js): Server compiles full HTML per request. Ideal for SEO and fast first paint.\n"
                    "• SSG (Static Generation): Pre-built HTML created at deploy time. Best for blogs and marketing docs."
                ),
                "sourceRef": "Day 1"
            },
            {
                "heading": "Monolith vs. Microservices",
                "content": (
                    "• Monolith: Single codebase for all features. Fastest to build and debug early on, but single point of failure and hard to scale specific bottlenecks.\n"
                    "• Microservices: Split into independent services (Auth, Cart, Billing). Independent deployments and horizontal scale, but adds network latency and debugging complexity."
                ),
                "sourceRef": "Day 1"
            },
            {
                "heading": "Mobile: Native vs. Cross-Platform vs. PWA",
                "content": (
                    "• Native (Swift/Kotlin): 100% hardware access and top performance, but requires 2 teams and doubles cost.\n"
                    "• Cross-Platform (React Native/Flutter): 80%+ shared code across iOS & Android; fastest time-to-market.\n"
                    "• PWA: Mobile website installable without App Store 30% cut, but limited background processing on iOS."
                ),
                "sourceRef": "Day 1"
            }
        ],
        model_name="high-yield-revision"
    )
    db.add(n1)

    # ---------------------------------------------------------
    # 2. PM2 DAY 2: APIS & INTEGRATIONS
    # ---------------------------------------------------------
    n2 = Note(
        material_id=m_d2.id,
        source_scope="single",
        overview="High-yield revision notes on API components, status codes, and webhooks.",
        content=[
            {
                "heading": "What is an API? (The Waiter Model)",
                "content": (
                    "• You (Client): Sit at table and place an order.\n"
                    "• The Waiter (API): Takes your structured request to the kitchen and brings back your order.\n"
                    "• Kitchen (Server & DB): The private system where data is prepared and stored."
                ),
                "sourceRef": "Day 2"
            },
            {
                "heading": "The 5 Anatomy Parts of an API Call",
                "content": (
                    "1. Endpoint: The URL resource path (e.g. /v1/payments).\n"
                    "2. HTTP Method: GET (read), POST (create), PUT/PATCH (update), DELETE (remove).\n"
                    "3. Headers: Metadata (Content-Type: application/json, Auth Bearer token).\n"
                    "4. Body: JSON payload carrying attributes to save.\n"
                    "5. Status Code: 3-digit outcome indicator from server."
                ),
                "sourceRef": "Day 2"
            },
            {
                "heading": "HTTP Status Code Cheat Sheet",
                "content": (
                    "• 200 OK: Request succeeded.\n"
                    "• 201 Created: New record successfully saved.\n"
                    "• 400 Bad Request: Malformed JSON or failed client validation.\n"
                    "• 401 Unauthorized: User not logged in (missing credentials).\n"
                    "• 403 Forbidden: User is logged in, but lacks permissions (e.g. non-admin accessing billing).\n"
                    "• 404 Not Found: Resource URL does not exist.\n"
                    "• 429 Too Many Requests: Rate limit exceeded.\n"
                    "• 500 Internal Error: Backend code crashed.\n"
                    "• 502/504 Bad Gateway / Timeout: Upstream service failed."
                ),
                "sourceRef": "Day 2"
            },
            {
                "heading": "Webhooks (Push) vs. Polling (Pull)",
                "content": (
                    "• Polling (Pull): Client periodically sends requests every 5 seconds asking 'Is it done yet?' Inefficient, high server load.\n"
                    "• Webhooks (Push): External provider (Stripe, Razorpay) immediately sends an automated HTTP POST request to your backend the instant the event occurs.\n"
                    "• Rule: Time-critical events (payments, OTP, delivery) must use Webhooks."
                ),
                "sourceRef": "Day 2"
            },
            {
                "heading": "Partner APIs: 5 Questions Before Saying Yes",
                "content": (
                    "1. Is there clear documentation and a staging sandbox?\n"
                    "2. What is their uptime SLA (e.g. 99.9% vs 99.99%)?\n"
                    "3. What are their rate limits (calls/sec) and cost tiers?\n"
                    "4. How do they communicate breaking changes and version deprecations?\n"
                    "5. Do they support Webhooks or only Polling?"
                ),
                "sourceRef": "Day 2"
            },
            {
                "heading": "Build vs. Buy Framework",
                "content": (
                    "• Buy / Integrate (Stripe, Twilio, Google Maps): Commodity features that require heavy specialized maintenance and compliance.\n"
                    "• Build In-House: Core competitive differentiators, proprietary IP, or when vendor fees become too high at scale."
                ),
                "sourceRef": "Day 2"
            }
        ],
        model_name="high-yield-revision"
    )
    db.add(n2)

    # ---------------------------------------------------------
    # 3. PM2 DAY 3: DATABASES & DATA MODELING
    # ---------------------------------------------------------
    n3 = Note(
        material_id=m_d3.id,
        source_scope="single",
        overview="High-yield revision notes on relational keys, SQL vs NoSQL, normalization, and analytics pipelines.",
        content=[
            {
                "heading": "Database Core Building Blocks",
                "content": (
                    "• Table: Entity category (Users, Orders).\n"
                    "• Row: Single record instance (one specific user).\n"
                    "• Column: Attribute with strict data type (Integer, Text, Timestamp).\n"
                    "• Primary Key (PK): Unique non-null identifier for every row.\n"
                    "• Foreign Key (FK): Reference in a child table pointing to parent table's Primary Key. Enforces business rule: 'An order must belong to a valid customer.'\n"
                    "• Index: Lookup structure (B-Tree) that speeds up queries from full table scans to instant searches."
                ),
                "sourceRef": "Day 3"
            },
            {
                "heading": "SQL (Relational) vs. NoSQL (Document)",
                "content": (
                    "• SQL (PostgreSQL, MySQL): Rigid schema, strict ACID transactional guarantees, multi-table JOINs. Best for financial ledgers, inventory, and order systems.\n"
                    "• NoSQL (MongoDB, DynamoDB): Flexible JSON documents, horizontal scale across clusters. Best for real-time sensor logs, social feeds, and caching (Redis).\n"
                    "• Rule: Use SQL for transactions and reporting integrity; use NoSQL for massive unstructured scale."
                ),
                "sourceRef": "Day 3"
            },
            {
                "heading": "Normalization: Why We Split Tables",
                "content": (
                    "• The Problem: A flat denormalized table repeats customer name, email, and address on every order row.\n"
                    "• The Risk: Update anomalies (address changed in one row, but forgotten in another) and data corruption.\n"
                    "• The Solution: Normalization (3NF) splits data into separate Users and Orders tables linked via user_id foreign key for a single source of truth."
                ),
                "sourceRef": "Day 3"
            },
            {
                "heading": "OLTP vs. OLAP (The Analytics Rule)",
                "content": (
                    "• OLTP (Online Transaction Processing): The operational database (PostgreSQL, MySQL) optimized for fast row writes (e.g. checkout, login).\n"
                    "• OLAP (Online Analytical Processing): Columnar data warehouses (Snowflake, BigQuery) optimized for massive aggregations and retention reports.\n"
                    "• Golden Rule: Never run heavy BI analytics queries directly on production OLTP; it locks tables and slows down users."
                ),
                "sourceRef": "Day 3"
            },
            {
                "heading": "5 SQL Commands Every PM Should Know",
                "content": (
                    "• SELECT: Chooses which columns to display.\n"
                    "• WHERE: Filters rows based on criteria.\n"
                    "• JOIN: Combines data from two tables using a common key.\n"
                    "• GROUP BY: Aggregates metrics (COUNT, SUM, AVG) per category.\n"
                    "• ORDER BY: Sorts results (ASC or DESC)."
                ),
                "sourceRef": "Day 3"
            }
        ],
        model_name="high-yield-revision"
    )
    db.add(n3)

    # ---------------------------------------------------------
    # 4. TECH STACKS GUIDE
    # ---------------------------------------------------------
    n4 = Note(
        material_id=m_tech.id,
        source_scope="single",
        overview="High-yield revision notes on frontend frameworks, backend languages, cloud platforms, and security.",
        content=[
            {
                "heading": "The 4 Layers of a Tech Stack",
                "content": (
                    "1. Frontend: What users see (HTML, CSS, React, Vue, mobile iOS/Android).\n"
                    "2. Backend: Business logic and APIs (Python, Node.js, Java, Go, C#).\n"
                    "3. Database: Where data lives (PostgreSQL, MongoDB, Redis).\n"
                    "4. Infrastructure: Where code runs (AWS, Azure, GCP, Docker, Kubernetes)."
                ),
                "sourceRef": "Tech Stacks"
            },
            {
                "heading": "Frontend Frameworks Comparison",
                "content": (
                    "• React (Meta): Virtual DOM, component-driven, largest ecosystem for SPAs.\n"
                    "• Next.js (Vercel): React with SSR and static generation; best for SEO and public apps.\n"
                    "• Vue.js: Clean syntax, gentle learning curve, popular in Asia.\n"
                    "• Angular (Google): Strict enterprise TypeScript framework with built-in conventions."
                ),
                "sourceRef": "Tech Stacks"
            },
            {
                "heading": "Backend Languages at a Glance",
                "content": (
                    "• Node.js: Same language on frontend/backend, high I/O throughput with event loop.\n"
                    "• Python: Clean syntax, fastest developer velocity, dominant in AI/ML.\n"
                    "• Java / Spring Boot: Enterprise-grade multithreading and JVM stability in banking.\n"
                    "• Go (Golang): High-concurrency compiled binary; low memory footprint, great for microservices."
                ),
                "sourceRef": "Tech Stacks"
            },
            {
                "heading": "Cloud Providers & Architecture",
                "content": (
                    "• The Big Three: AWS (~31% market share), Azure (~25%), Google Cloud GCP (~11%).\n"
                    "• Containers (Docker): Packages code with libraries so it runs identically across dev and production.\n"
                    "• Serverless (AWS Lambda): Runs code only when triggered; zero server management and scales to zero."
                ),
                "sourceRef": "Tech Stacks"
            }
        ],
        model_name="high-yield-revision"
    )
    db.add(n4)

    # ---------------------------------------------------------
    # 5. PYTHON IN PRODUCTION
    # ---------------------------------------------------------
    n5 = Note(
        material_id=m_py.id,
        source_scope="single",
        overview="High-yield revision notes on Python backend frameworks, ORMs, and deployment.",
        content=[
            {
                "heading": "Where Python Fits & Key Trade-offs",
                "content": (
                    "• Location: Operates in the Logic Tier (Backend/Server).\n"
                    "• Strengths: Readable syntax, fastest team shipping velocity, unmatched AI/ML ecosystem (PyTorch, Pandas).\n"
                    "• Trade-offs: Slower CPU-bound execution than Go/Rust/C++, and not suitable for native mobile client apps."
                ),
                "sourceRef": "Python Stacks"
            },
            {
                "heading": "The Big 3 Python Web Frameworks",
                "content": (
                    "• Django ('Batteries Included'): Comes with built-in ORM, admin dashboard, authentication, and migrations. Best for fast MVP full-stack products.\n"
                    "• FastAPI (Modern & Async): Built on Python type hints with async ASGI; fastest Python framework with automated Swagger API docs. Best for microservices and AI inference.\n"
                    "• Flask (Micro-Framework): Minimal core leaving all tooling decisions to engineers. Best for small prototypes."
                ),
                "sourceRef": "Python Stacks"
            },
            {
                "heading": "Python in Production Deployment",
                "content": (
                    "• WSGI / ASGI App Server: Gunicorn (for Django/Flask) or Uvicorn (for async FastAPI).\n"
                    "• Reverse Proxy: Nginx sits in front to handle SSL termination, request buffering, and static caching.\n"
                    "• Package Management: pip and virtual environments (venv/poetry) isolate project dependencies."
                ),
                "sourceRef": "Python Stacks"
            }
        ],
        model_name="high-yield-revision"
    )
    db.add(n5)

    db.commit()
    db.close()
    print("PURE HIGH-YIELD REVISION NOTES SUCCESSFULLY POPULATED!")

if __name__ == "__main__":
    build_high_yield_revision_stickies()
