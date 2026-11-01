import sys
import uuid
from app.db.session import SessionLocal
from app.models.entities import Material, Quiz, Question

def seed_full_50_questions():
    db = SessionLocal()
    try:
        # Clear existing quizzes & questions to do a clean seed
        db.query(Question).delete()
        db.query(Quiz).delete()
        db.commit()

        mats = db.query(Material).all()
        m_d1 = next((m for m in mats if "Day 1" in m.original_filename), mats[0])
        m_d2 = next((m for m in mats if "Day 2" in m.original_filename), mats[1])
        m_d3 = next((m for m in mats if "Day 3" in m.original_filename), mats[2])
        m_tech = next((m for m in mats if "Tech-Stacks-Guide" in m.original_filename), mats[3])
        m_py = next((m for m in mats if "Python" in m.original_filename), mats[4])

        # =========================================================================
        # 1. PPT 1: Day 1 - Software Architecture & Scaling Decisions (10 Questions)
        # =========================================================================
        q1 = Quiz(
            id=str(uuid.uuid4()),
            title="Software Architecture, Web Fundamentals & System Scaling",
            source_scope="single",
            material_id=m_d1.id
        )
        db.add(q1)
        db.commit()
        db.refresh(q1)

        d1_questions = [
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q1.id,
                question_type="single",
                prompt="Scenario: You are the PM of an e-commerce platform launching a 30-minute flash sale. Product catalog reads are easily handled by a CDN, but the checkout service crashes because the primary database is overwhelmed by concurrent write locks. Which architectural adjustment best addresses this bottleneck without a complete rebuild?",
                options=[
                    {"id": "A", "text": "Move from HTTPS to HTTP to eliminate encryption overhead"},
                    {"id": "B", "text": "Introduce an asynchronous Message Queue (e.g. RabbitMQ/Kafka) to buffer checkout orders and process writes at a controlled rate"},
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
                id=str(uuid.uuid4()),
                quiz_id=q1.id,
                question_type="single",
                prompt="Case Analysis: An early-stage B2B SaaS startup with 3 engineers wants to rewrite their monolithic codebase into 15 microservices before their first 100 paying customers. As the PM, why should you challenge this proposal?",
                options=[
                    {"id": "A", "text": "Because microservices make it impossible to write unit tests"},
                    {"id": "B", "text": "Because premature microservice adoption introduces heavy operational overhead, distributed network latency, and slows down early feature iteration when domain boundaries are still fluid"},
                    {"id": "C", "text": "Because microservices can only be deployed on physical on-premise hardware"},
                    {"id": "D", "text": "Because relational databases cannot connect to microservices"}
                ],
                correct_answers="B",
                hint="Early-stage teams need maximum shipping speed and simple local debugging.",
                explanation="Early-stage startups prioritize velocity and finding product-market fit. Microservices introduce network latency, distributed failures, and deployment complexity that drain small teams.",
                concept_tag="Monolith vs Microservices",
                source_reference="Architecture Trade-offs"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q1.id,
                question_type="multiple",
                prompt="Situational Design: You are launching a public marketing and product review website where organic Google search (SEO) and instantaneous First Contentful Paint (FCP) on mobile networks are critical success metrics. Which rendering approaches meet these requirements? (Select all that apply)",
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
                id=str(uuid.uuid4()),
                quiz_id=q1.id,
                question_type="true_false",
                prompt="Logical Evaluation: A fintech application relies on client-side JavaScript validation (e.g. verifying transfer amount > $0). True or False: Because the frontend verifies the input before sending the HTTP request, the backend server can safely skip duplicate validation checks to maximize throughput.",
                options=[
                    {"id": "true", "text": "True"},
                    {"id": "false", "text": "False"}
                ],
                correct_answers="false",
                hint="Remember the fundamental backend security rule: 'Never trust the client.'",
                explanation="False! Any malicious actor or automated tool (curl/Postman) can bypass the browser UI and send crafted requests directly to the API. The backend must always re-validate data and permissions.",
                concept_tag="Client vs Server Trust Boundary",
                source_reference="Security & Validation"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q1.id,
                question_type="single",
                prompt="Latency & Global Users: Your mobile app is hosted in US-East (N. Virginia), but 40% of active users are in Singapore and Tokyo experiencing 450ms latency on images and static JS bundles. What is the immediate architectural solution?",
                options=[
                    {"id": "A", "text": "Deploy a Content Delivery Network (CDN) like Cloudflare or AWS CloudFront to cache static assets in edge POPs geographically close to Asian users"},
                    {"id": "B", "text": "Rewrite backend code from Python to C++"},
                    {"id": "C", "text": "Ask Asian users to switch off Wi-Fi and use cellular data"},
                    {"id": "D", "text": "Compress all images to 1-bit monochrome"}
                ],
                correct_answers="A",
                hint="Edge servers located near users eliminate the physical speed-of-light trans-Pacific round trip.",
                explanation="CDNs distribute cached copies of static assets (images, stylesheets, JavaScript) across globally distributed Edge points of presence, cutting cross-continental latency.",
                concept_tag="CDN & Edge Caching",
                source_reference="Web Fundamentals"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q1.id,
                question_type="single",
                prompt="Scaling Terminology: Your engineering team suggests 'Vertical Scaling' instead of 'Horizontal Scaling' for an unexpected traffic surge this weekend. What does this decision mean in practice?",
                options=[
                    {"id": "A", "text": "Upgrading the existing single server instance with more CPU and RAM (e.g. from 8GB to 64GB), rather than spinning up multiple identical server instances behind a load balancer"},
                    {"id": "B", "text": "Splitting the database into horizontal shards across multiple continents"},
                    {"id": "C", "text": "Moving from cloud hosting to an on-premise mainframe"},
                    {"id": "D", "text": "Rotating server racks vertically in the data center to improve cooling"}
                ],
                correct_answers="A",
                hint="Vertical scaling means making the single machine bigger; horizontal scaling means adding more machines.",
                explanation="Vertical scaling (scaling UP) increases the hardware capacity of a single server. Horizontal scaling (scaling OUT) adds more server instances behind a reverse proxy or load balancer.",
                concept_tag="Horizontal vs Vertical Scaling",
                source_reference="System Scaling"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q1.id,
                question_type="single",
                prompt="3-Tier Architecture: In a standard 3-tier enterprise web application, what is the strict separation of responsibility between Tier 1, Tier 2, and Tier 3?",
                options=[
                    {"id": "A", "text": "Tier 1: Presentation Layer (UI/Client) | Tier 2: Application/Business Logic (Server) | Tier 3: Data Storage (Database)"},
                    {"id": "B", "text": "Tier 1: Database | Tier 2: Payment Gateway | Tier 3: Marketing Dashboard"},
                    {"id": "C", "text": "Tier 1: HTML | Tier 2: CSS | Tier 3: JavaScript"},
                    {"id": "D", "text": "Tier 1: DNS | Tier 2: ISP | Tier 3: Browser"}
                ],
                correct_answers="A",
                hint="Presentation -> Business Logic -> Data Storage.",
                explanation="The classic 3-tier architecture decouples Presentation (UI in browser/mobile), Application Layer (business logic and rules), and Data Layer (RDBMS or NoSQL databases).",
                concept_tag="3-Tier Architecture",
                source_reference="System Architecture"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q1.id,
                question_type="single",
                prompt="Load Balancing Algorithms: When distributing traffic across 5 backend application servers with identical CPU/RAM specs for stateful long-lived WebSocket chat connections, which load balancing strategy is most effective?",
                options=[
                    {"id": "A", "text": "Least Connections (routes new connections to the server currently handling the lowest number of active persistent client connections)"},
                    {"id": "B", "text": "Random Routing (routes without checking server load or connection counts)"},
                    {"id": "C", "text": "Round Robin (strictly sequential regardless of connection duration)"},
                    {"id": "D", "text": "DNS Round Robin with 24-hour TTL"}
                ],
                correct_answers="A",
                hint="For persistent connections that stay open for hours, sequential round-robin causes severe server imbalances.",
                explanation="Least Connections distributes traffic based on real-time active connections, ensuring no single server gets overwhelmed by long-lived chat/WebSocket sessions.",
                concept_tag="Load Balancing Strategies",
                source_reference="System Architecture"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q1.id,
                question_type="true_false",
                prompt="Caching Invalidation: True or False: Adding Redis in-memory caching in front of your database always improves user experience and carries zero product trade-offs.",
                options=[
                    {"id": "true", "text": "True"},
                    {"id": "false", "text": "False"}
                ],
                correct_answers="false",
                hint="Consider cache invalidation: what happens when an item price or stock count changes in the DB while Redis still holds the old data?",
                explanation="False. Caching introduces cache invalidation challenges ('cache stampedes', stale data anomalies where users see outdated prices, and extra synchronization overhead).",
                concept_tag="Caching Trade-offs & Stale Data",
                source_reference="System Scaling"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q1.id,
                question_type="single",
                prompt="High Availability (HA) & Fault Tolerance: What is the primary difference between a Single Point of Failure (SPOF) and a Redundant Architecture?",
                options=[
                    {"id": "A", "text": "A SPOF means if that single component crashes, the entire system goes down; Redundant architectures maintain hot standby or active-active duplicates so service continues uninterrupted"},
                    {"id": "B", "text": "SPOF is a modern cloud security protocol used by Google and AWS"},
                    {"id": "C", "text": "Redundancy means having duplicate code repositories on GitHub"},
                    {"id": "D", "text": "SPOF applies only to frontend CSS animations"}
                ],
                correct_answers="A",
                hint="Think about airline engines: if one engine fails, the second engine keeps the plane flying.",
                explanation="High Availability requires eliminating all Single Points of Failure through component redundancy (e.g. multi-AZ database read replicas, multi-node load balancers).",
                concept_tag="High Availability & SPOF",
                source_reference="System Scaling"
            )
        ]
        db.add_all(d1_questions)
        db.commit()

        # =========================================================================
        # 2. PPT 2: Day 2 - APIs, Integrations & Error Handling (10 Questions)
        # =========================================================================
        q2 = Quiz(
            id=str(uuid.uuid4()),
            title="APIs, System Integrations & Production Error Handling",
            source_scope="single",
            material_id=m_d2.id
        )
        db.add(q2)
        db.commit()
        db.refresh(q2)

        d2_questions = [
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q2.id,
                question_type="single",
                prompt="Scenario: During a peak sale, customers report bank accounts are charged, but the website displays 'Order Pending'. Engineering finds your server queries the payment gateway's GET /status endpoint every 2 seconds for 100,000 carts, triggering HTTP 429 rate limit errors. What is the proper architectural solution?",
                options=[
                    {"id": "A", "text": "Replace aggressive client polling with Webhooks so the payment gateway pushes success events to your backend only when status changes"},
                    {"id": "B", "text": "Poll every 200ms instead of 2 seconds to beat the gateway queue"},
                    {"id": "C", "text": "HTTP 429 means your SSL certificate expired; renew your TLS certificate"},
                    {"id": "D", "text": "Send payment confirmations via DNS record updates"}
                ],
                correct_answers="A",
                hint="HTTP 429 means 'Too Many Requests' caused by polling. What event-driven push pattern solves this?",
                explanation="Polling floods the external gateway, triggering 429 rate limits. Webhooks solve this by having the provider push an HTTP POST notification only upon state transitions.",
                concept_tag="Webhooks vs Polling & Rate Limiting",
                source_reference="API Patterns"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q2.id,
                question_type="single",
                prompt="Diagnostic Case: An authenticated user with a valid login token tries to download a financial statement belonging to another user. Engineering configures the API to return HTTP 401 Unauthorized. As the PM reviewing the API contract, what correction should you mandate?",
                options=[
                    {"id": "A", "text": "401 is correct because any unauthorized action must return 401"},
                    {"id": "B", "text": "Change it to 403 Forbidden: 401 means unauthenticated (missing credentials), whereas 403 means authenticated but lacking permission for this resource"},
                    {"id": "C", "text": "Change it to 500 Internal Server Error to hide the failure from the user"},
                    {"id": "D", "text": "Change it to 201 Created with an empty payload"}
                ],
                correct_answers="B",
                hint="401 asks 'Who are you?' while 403 says 'I know who you are, but you cannot touch this.'",
                explanation="401 Unauthorized is for unauthenticated callers (no login/bad token). When the user is authenticated but not allowed to view the resource, the standard code is 403 Forbidden.",
                concept_tag="HTTP Status Code Diagnostics",
                source_reference="API Error Handling"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q2.id,
                question_type="single",
                prompt="Build vs. Buy Decision: Your product team is building a ride-hailing app. A junior engineer proposes building a proprietary maps routing engine and global SMS delivery gateway from scratch over 6 months. How should you evaluate this as PM?",
                options=[
                    {"id": "A", "text": "Approve it, because building everything in-house always saves money regardless of maintenance"},
                    {"id": "B", "text": "Reject building in-house; integrate established APIs (Google Maps, Twilio) because routing and telecom carrier deals are commodity infrastructure, and speed-to-market is critical"},
                    {"id": "C", "text": "Reject APIs completely and communicate with drivers using email"},
                    {"id": "D", "text": "Build maps in-house but use an external API for the food recipes"}
                ],
                correct_answers="B",
                hint="Focus engineering hours on core business differentiators rather than commodity infrastructure.",
                explanation="Commodity capabilities with high compliance and infrastructure demands (mapping, SMS, payment processing) should be bought via APIs. Engineering should focus on the core value proposition.",
                concept_tag="Build vs Buy Strategy",
                source_reference="Integration Strategy"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q2.id,
                question_type="single",
                prompt="Payment Reliability & Idempotency: When a user clicks 'Pay Now' on a slow 3G connection and experiences a network timeout, their browser retries the POST /checkout request. How do you prevent double-charging their credit card?",
                options=[
                    {"id": "A", "text": "Implement an Idempotency-Key in the request header so the payment server recognizes retried requests and does not create duplicate charges"},
                    {"id": "B", "text": "Disable user payments on mobile devices"},
                    {"id": "C", "text": "Switch payment processing to GET requests instead of POST"},
                    {"id": "D", "text": "Require users to call customer support before each checkout"}
                ],
                correct_answers="A",
                hint="Idempotence guarantees that making the same request multiple times produces the identical result as making it once.",
                explanation="Idempotency keys (UUIDs generated per checkout session) allow APIs to detect retry attempts caused by network drops and return the cached initial result without double processing.",
                concept_tag="Idempotency in Payments",
                source_reference="API Reliability"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q2.id,
                question_type="single",
                prompt="RESTful API Design: According to REST standards, which HTTP verbs must be used for Creating a resource, Updating an existing resource completely, and Deleting a resource?",
                options=[
                    {"id": "A", "text": "POST (Create), PUT (Full Update), DELETE (Delete)"},
                    {"id": "B", "text": "GET (Create), POST (Update), REMOVE (Delete)"},
                    {"id": "C", "text": "FETCH (Create), PATCH (Update), DROP (Delete)"},
                    {"id": "D", "text": "SEND (Create), UPDATE (Update), PURGE (Delete)"}
                ],
                correct_answers="A",
                hint="POST creates, PUT replaces/updates, and DELETE removes.",
                explanation="RESTful semantics map HTTP verbs to CRUD operations: POST for resource creation, PUT for complete resource replacement, PATCH for partial updates, and DELETE for deletion.",
                concept_tag="RESTful API Verbs",
                source_reference="API Standards"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q2.id,
                question_type="true_false",
                prompt="True or False: A GET request to /api/products/123 should modify product pricing in the database as a side effect to keep the data fresh.",
                options=[
                    {"id": "true", "text": "True"},
                    {"id": "false", "text": "False"}
                ],
                correct_answers="false",
                hint="GET requests must be safe and idempotent — they should never cause state-changing side effects.",
                explanation="False! HTTP GET requests must be safe (read-only) with no side effects. Web crawlers, browser pre-fetching, and caching proxies execute GET requests automatically.",
                concept_tag="Safe & Idempotent HTTP Methods",
                source_reference="API Standards"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q2.id,
                question_type="single",
                prompt="GraphQL vs REST: A mobile team complains that fetching a user profile screen requires making 6 separate REST API calls (users, orders, addresses, rewards), causing battery drain and screen lag. What API architecture solves this over-fetching/under-fetching problem?",
                options=[
                    {"id": "A", "text": "GraphQL (allows the mobile client to specify the exact nested fields required in a single query payload)"},
                    {"id": "B", "text": "SOAP XML with strict WS-Security"},
                    {"id": "C", "text": "FTP file transfers of SQLite snapshots"},
                    {"id": "D", "text": "Telnet sockets"}
                ],
                correct_answers="A",
                hint="GraphQL allows clients to request exactly what they need and nothing more in one round trip.",
                explanation="GraphQL eliminates under-fetching (multiple network round-trips) and over-fetching (wasted payload bandwidth) by letting clients define the exact query schema.",
                concept_tag="GraphQL vs REST",
                source_reference="API Patterns"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q2.id,
                question_type="single",
                prompt="API Rate Limiting Strategy: To prevent API abuse and DDoS attacks while maintaining a smooth experience for legitimate bursty traffic, which rate limiting algorithm is standard industry practice?",
                options=[
                    {"id": "A", "text": "Token Bucket or Leaky Bucket algorithm (allows temporary bursts up to a capacity limit while enforcing a steady long-term refill rate)"},
                    {"id": "B", "text": "Permanent IP banning on the 2nd request"},
                    {"id": "C", "text": "Randomly dropping 50% of all incoming requests"},
                    {"id": "D", "text": "Fixed monthly quotas with zero reset capability"}
                ],
                correct_answers="A",
                hint="The token bucket algorithm accommodates normal user spikes (e.g. clicking refresh) while capping sustained abuse.",
                explanation="Token bucket algorithms allow short bursts of traffic while enforcing sustained rate limits, delivering superior user experience compared to rigid fixed-window counters.",
                concept_tag="Rate Limiting Algorithms",
                source_reference="API Reliability"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q2.id,
                question_type="single",
                prompt="API Versioning: Your engineering team is introducing a breaking change to the user address payload format. How should the PM ensure backward compatibility for legacy mobile app versions in the wild?",
                options=[
                    {"id": "A", "text": "Introduce URI versioning (/api/v2/users) or header versioning, maintaining the /api/v1/users endpoint until deprecated mobile app versions drop below acceptable thresholds"},
                    {"id": "B", "text": "Instantly overwrite /api/users and force users whose apps crash to delete their accounts"},
                    {"id": "C", "text": "Send a SMS to all customers telling them not to open the app today"},
                    {"id": "D", "text": "Change all HTTP response codes to 503"}
                ],
                correct_answers="A",
                hint="Mobile apps cannot be forced to update immediately; legacy versions must continue working.",
                explanation="Because mobile app updates cannot be forced immediately on all devices, breaking API changes must be released under new version routes (/v2/) with sunset roadmaps for /v1/.",
                concept_tag="API Versioning & Deprecation",
                source_reference="API Lifecycle"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q2.id,
                question_type="multiple",
                prompt="API Security Checklist: Which of the following security practices are mandatory for public-facing enterprise REST APIs? (Select all that apply)",
                options=[
                    {"id": "A", "text": "Enforce HTTPS/TLS encryption for all data in transit"},
                    {"id": "B", "text": "Use short-lived JWT access tokens with secure refresh tokens"},
                    {"id": "C", "text": "Sanitize and validate all query parameters and request bodies to prevent SQL injection and XSS"},
                    {"id": "D", "text": "Embed database root administrator credentials inside public frontend client bundles"}
                ],
                correct_answers=["A", "B", "C"],
                hint="Encryption, token authentication, and input sanitization are essential; never expose root credentials.",
                explanation="HTTPS, secure token authentication (JWT/OAuth2), and strict input validation/sanitization form the core trifecta of modern API defense.",
                concept_tag="API Security Best Practices",
                source_reference="API Security"
            )
        ]
        db.add_all(d2_questions)
        db.commit()

        # =========================================================================
        # 3. PPT 3: Day 3 - Databases, Data Modeling & Performance (10 Questions)
        # =========================================================================
        q3 = Quiz(
            id=str(uuid.uuid4()),
            title="Databases, Data Modeling, Schema Design & Performance",
            source_scope="single",
            material_id=m_d3.id
        )
        db.add(q3)
        db.commit()
        db.refresh(q3)

        d3_questions = [
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q3.id,
                question_type="single",
                prompt="Scenario: Every Monday at 9:00 AM, executives run a weekly cohort retention report. Simultaneously, checkout pages time out with 504 errors. What is the architectural root cause and the standard engineering solution?",
                options=[
                    {"id": "A", "text": "The marketing email used HTTP instead of HTTPS"},
                    {"id": "B", "text": "The analytical query is running directly against the live production OLTP database, locking tables and starving transactional writes; the query must be offloaded to an OLAP Data Warehouse (e.g. Snowflake/BigQuery)"},
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
                id=str(uuid.uuid4()),
                quiz_id=q3.id,
                question_type="single",
                prompt="Data Integrity Case: A user updates their shipping address in account settings. However, on an existing unshipped order, warehouse staff sees the old address while the order receipt shows the new address. What database design flaw caused this inconsistency?",
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
                id=str(uuid.uuid4()),
                quiz_id=q3.id,
                question_type="multiple",
                prompt="Selection Matrix: When evaluating databases for a new fintech lending platform requiring strict audit trails, exact balances, and zero tolerance for lost transfers, why should the PM require a Relational (SQL) database over a NoSQL document store? (Select all that apply)",
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
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q3.id,
                question_type="single",
                prompt="Query Optimization & Indexing: User searches on a 10-million row catalog table have slowed from 15ms to 3.8 seconds. Engineering runs EXPLAIN ANALYZE and observes a 'Seq Scan' (Sequential Scan). What is the fix?",
                options=[
                    {"id": "A", "text": "Add a B-Tree Index on the searched columns (e.g. product_name, category_id) so the database engine can perform index lookups in O(log N) time instead of scanning every disk block"},
                    {"id": "B", "text": "Delete 9 million rows from the database"},
                    {"id": "C", "text": "Switch the database port from 5432 to 80"},
                    {"id": "D", "text": "Convert all numeric fields into raw text strings"}
                ],
                correct_answers="A",
                hint="Indexes act like an index at the back of a textbook, allowing the DB to jump straight to matching records.",
                explanation="Without an index, the database scans every single row on disk (Full Table Scan). Adding an index allows logarithmic B-Tree lookups, dropping query times back to single-digit milliseconds.",
                concept_tag="Database Indexes & Query Optimization",
                source_reference="Database Performance"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q3.id,
                question_type="single",
                prompt="ACID Properties: In database transactions, what does the 'A' (Atomicity) guarantee during a funds transfer of $100 from Account A to Account B?",
                options=[
                    {"id": "A", "text": "Both the debit from Account A and the credit to Account B succeed together, or if an error occurs, the entire transaction rolls back so no money disappears into thin air"},
                    {"id": "B", "text": "The transaction executes in atomic sub-nanosecond hardware cycles"},
                    {"id": "C", "text": "Data is automatically encrypted with atomic quantum keys"},
                    {"id": "D", "text": "Only one user can log in to the app at any given second"}
                ],
                correct_answers="A",
                hint="Atomicity means 'all-or-nothing'.",
                explanation="Atomicity guarantees that all statements within a transaction block either complete successfully or roll back completely if any failure occurs.",
                concept_tag="ACID Transactions - Atomicity",
                source_reference="Database Fundamentals"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q3.id,
                question_type="true_false",
                prompt="Document Stores (NoSQL): True or False: MongoDB document stores are superior to PostgreSQL for every use case because they have no schema constraints and can store anything without errors.",
                options=[
                    {"id": "true", "text": "True"},
                    {"id": "false", "text": "False"}
                ],
                correct_answers="false",
                hint="Lack of schema validation often leads to corrupted, inconsistent production data when team sizes grow.",
                explanation="False. 'Schemaless' often means 'schema in application code'. For relational domains, missing schema enforcement leads to data corruption, orphan records, and complex joining logic.",
                concept_tag="NoSQL Limitations",
                source_reference="Choosing Your Database"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q3.id,
                question_type="single",
                prompt="Database Normalization: What is the primary objective of normalizing a database schema up to Third Normal Form (3NF)?",
                options=[
                    {"id": "A", "text": "To eliminate data redundancy, avoid insertion/update/deletion anomalies, and enforce relational integrity"},
                    {"id": "B", "text": "To ensure tables can be edited directly in Microsoft Excel"},
                    {"id": "C", "text": "To compress database disk space by exactly 75%"},
                    {"id": "D", "text": "To allow unauthenticated public queries over port 80"}
                ],
                correct_answers="A",
                hint="Normalization organizes tables around single entities so changes only happen in one place.",
                explanation="Normalization structures relational tables to eliminate redundant data duplication and prevent inconsistencies when updating records.",
                concept_tag="Normalization (3NF)",
                source_reference="Data Design"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q3.id,
                question_type="single",
                prompt="Sharding vs Partitioning: When a database table grows to 500 million rows and exceeds single-machine storage capacity, how does 'Horizontal Sharding' resolve this?",
                options=[
                    {"id": "A", "text": "It partitions rows across multiple independent physical database server nodes based on a Shard Key (e.g. user_id or country_code)"},
                    {"id": "B", "text": "It deletes all historical records older than 7 days"},
                    {"id": "C", "text": "It combines all columns into a single comma-separated string"},
                    {"id": "D", "text": "It replaces relational tables with flat CSV files"}
                ],
                correct_answers="A",
                hint="Sharding spreads rows across different database servers using a partitioning key.",
                explanation="Sharding distributes large datasets across independent server nodes based on a shard key, enabling massive horizontal scaling beyond single-server hardware limits.",
                concept_tag="Database Sharding",
                source_reference="Database Performance"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q3.id,
                question_type="single",
                prompt="Read Replicas: Your SaaS application has an 85% Read vs 15% Write traffic pattern. Primary database CPU utilization is reaching 95%. What architectural pattern relieves read pressure?",
                options=[
                    {"id": "A", "text": "Deploy Read Replicas: direct write queries (INSERT/UPDATE/DELETE) to the Primary DB, and route read queries (SELECT) across read replicas via asynchronous replication"},
                    {"id": "B", "text": "Disable all SELECT queries during business hours"},
                    {"id": "C", "text": "Ask customers to refresh the page less frequently"},
                    {"id": "D", "text": "Store user passwords in browser local storage"}
                ],
                correct_answers="A",
                hint="Read replicas scale read-heavy applications by offloading SELECT queries from the primary master.",
                explanation="Read replicas replicate data from the primary master node. Routing read traffic to replicas frees up the primary database for transactional writes.",
                concept_tag="Read Replicas & CQRS",
                source_reference="Database Performance"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q3.id,
                question_type="true_false",
                prompt="Transactions & Deadlocks: True or False: A deadlock occurs when two concurrent transactions each hold a lock on a row that the other transaction needs to proceed, causing both to wait indefinitely until the DB engine aborts one.",
                options=[
                    {"id": "true", "text": "True"},
                    {"id": "false", "text": "False"}
                ],
                correct_answers="true",
                hint="Circular wait conditions in database locks create deadlocks.",
                explanation="True. Deadlocks occur when circular dependencies arise between locks. Database engines detect deadlocks and abort/rollback one transaction so the other can proceed.",
                concept_tag="Deadlocks & Concurrency",
                source_reference="Database Fundamentals"
            )
        ]
        db.add_all(d3_questions)
        db.commit()

        # =========================================================================
        # 4. PPT 4: Tech Stacks Guide - Cloud, DevOps & Infrastructure (10 Questions)
        # =========================================================================
        q4 = Quiz(
            id=str(uuid.uuid4()),
            title="Tech Stacks Guide: Architecture, Cloud & Infrastructure",
            source_scope="single",
            material_id=m_tech.id
        )
        db.add(q4)
        db.commit()
        db.refresh(q4)

        tech_questions = [
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q4.id,
                question_type="single",
                prompt="Enterprise Procurement Scenario: Your B2B SaaS startup is pitching to Fortune 500 banks and healthcare providers. What architectural requirement must your tech stack prioritize to pass enterprise security and procurement audits?",
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
                id=str(uuid.uuid4()),
                quiz_id=q4.id,
                question_type="single",
                prompt="DevOps Strategy: Releases are breaking in production twice a week because engineers merge code directly without standardized integration testing. What is the fundamental PM fix?",
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
                id=str(uuid.uuid4()),
                quiz_id=q4.id,
                question_type="single",
                prompt="Containerization & Docker: What primary problem does Docker solve for engineering and product teams during product release cycles?",
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
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q4.id,
                question_type="single",
                prompt="Cloud Vendor Decision: A company heavily invested in Microsoft 365, Active Directory, and Windows Server needs to choose a cloud provider. What is the standard strategic recommendation?",
                options=[
                    {"id": "A", "text": "Microsoft Azure (seamless single sign-on integration with Entra ID/Active Directory and enterprise software license portability)"},
                    {"id": "B", "text": "AWS (always chosen regardless of existing enterprise Microsoft contract agreements)"},
                    {"id": "C", "text": "Build an on-premise private server rack in the office closet to avoid cloud contracts"},
                    {"id": "D", "text": "DigitalOcean droplet for hosting the core global ERP"}
                ],
                correct_answers="A",
                hint="Enterprises with deep Microsoft infrastructure gain commercial discounts and IAM integration on Azure.",
                explanation="Enterprises with deep existing Microsoft investments typically gain substantial cost discounts through enterprise agreement (EA) software license portability and instant IAM integration via Microsoft Entra ID (formerly Azure AD).",
                concept_tag="Cloud Provider Strategy (Azure vs AWS)",
                source_reference="Tech Stacks Guide"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q4.id,
                question_type="single",
                prompt="Infrastructure as Code (IaC): When scaling cloud infrastructure across staging, EU production, and US production, why should teams mandate Terraform or AWS CloudFormation rather than clicking buttons in the AWS web console?",
                options=[
                    {"id": "A", "text": "IaC defines infrastructure in declarative, version-controlled code, preventing human configuration drift and allowing entire multi-region environments to be reproduced reliably"},
                    {"id": "B", "text": "Clicking the AWS console automatically bills 500% higher rates"},
                    {"id": "C", "text": "IaC makes servers run 10x faster than manually provisioned servers"},
                    {"id": "D", "text": "Terraform replaces the need for databases"}
                ],
                correct_answers="A",
                hint="Infrastructure as Code avoids manual errors and creates reproducible, auditable cloud environments.",
                explanation="Infrastructure as Code treats server, VPC, and database provisioning as versioned code, ensuring environment parity across staging and production while enabling peer review on infrastructure changes.",
                concept_tag="Infrastructure as Code (Terraform)",
                source_reference="Tech Stacks Guide"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q4.id,
                question_type="true_false",
                prompt="Serverless Architecture: True or False: AWS Lambda (Serverless) is always cheaper than maintaining provisioned EC2 virtual servers for consistent, high-volume 24/7 background processing workloads.",
                options=[
                    {"id": "true", "text": "True"},
                    {"id": "false", "text": "False"}
                ],
                correct_answers="false",
                hint="Serverless is cost-effective for sporadic, spiky traffic; continuous 100% compute load is far cheaper on reserved instances.",
                explanation="False. Serverless is cost-effective for spiky or idle workloads. For steady, high-throughput 24/7 processing, per-millisecond serverless pricing becomes significantly more expensive than reserved instances or container clusters.",
                concept_tag="Serverless Cost Trade-offs",
                source_reference="Tech Stacks Guide"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q4.id,
                question_type="single",
                prompt="Monitoring & Observability: What are the 'Three Pillars of Observability' required to diagnose intermittent production outages and latency spikes?",
                options=[
                    {"id": "A", "text": "Metrics (aggregated numeric stats), Logs (timestamped event records), and Traces (end-to-end request lifecycle across microservices)"},
                    {"id": "B", "text": "HTML, CSS, and JavaScript"},
                    {"id": "C", "text": "Jira tickets, Slack notifications, and Zoom calls"},
                    {"id": "D", "text": "CPU, GPU, and RAM"}
                ],
                correct_answers="A",
                hint="Metrics show that something is wrong; Logs show what happened; Distributed Traces show where in the call chain the bottleneck occurred.",
                explanation="Observability relies on Metrics (system telemetry), Logs (detailed contextual event strings), and Distributed Tracing (following an HTTP request across distributed service hops).",
                concept_tag="Observability (Logs, Metrics, Traces)",
                source_reference="Tech Stacks Guide"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q4.id,
                question_type="single",
                prompt="Database Managed Services vs Self-Hosted: Why do modern startups prefer managed database services (e.g. AWS RDS or Supabase) over renting a bare Linux VM and running PostgreSQL manually?",
                options=[
                    {"id": "A", "text": "Managed services automate OS patching, automated point-in-time backups, multi-AZ failover, and storage auto-scaling, freeing engineers to build product features"},
                    {"id": "B", "text": "PostgreSQL cannot be installed on a regular Linux VM"},
                    {"id": "C", "text": "Managed databases are legally required by international copyright law"},
                    {"id": "D", "text": "Managed databases never require paying cloud hosting fees"}
                ],
                correct_answers="A",
                hint="Consider the hidden cost of hiring dedicated database administrators (DBAs) to manage backups, hardware failover, and patches.",
                explanation="Managed services eliminate the heavy operational burden of manual database administration (disaster recovery, automatic failover, patching, point-in-time restores).",
                concept_tag="Managed Cloud Services vs Self-Hosted",
                source_reference="Tech Stacks Guide"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q4.id,
                question_type="single",
                prompt="Zero Downtime Deployment: Which deployment strategy spins up an identical new version environment alongside the current production environment, tests it, and then instantly switches load balancer traffic to achieve zero downtime?",
                options=[
                    {"id": "A", "text": "Blue-Green Deployment"},
                    {"id": "B", "text": "Cold Reboot Deployment"},
                    {"id": "C", "text": "Manual FTP Drag-and-Drop"},
                    {"id": "D", "text": "Forklift Migration"}
                ],
                correct_answers="A",
                hint="Two identical production environments: Blue (active) and Green (new release).",
                explanation="Blue-Green deployments maintain two identical environments. Traffic switches instantly at the router level once the new release (Green) passes health checks, enabling instantaneous rollback if bugs appear.",
                concept_tag="Blue-Green Deployment",
                source_reference="Tech Stacks Guide"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q4.id,
                question_type="multiple",
                prompt="Security Best Practice - Secrets Management: Where should sensitive API keys, database passwords, and private certificates be stored in modern web production stacks? (Select all safe practices)",
                options=[
                    {"id": "A", "text": "Dedicated secret vaults (AWS Secrets Manager, HashiCorp Vault, Azure Key Vault)"},
                    {"id": "B", "text": "Injected at runtime via secure environment variables in container deployment configs"},
                    {"id": "C", "text": "Hardcoded in public git repository source files for easy developer access"},
                    {"id": "D", "text": "Plaintext in public frontend JavaScript bundles"}
                ],
                correct_answers=["A", "B"],
                hint="Never commit secrets into source control or expose them in browser bundles.",
                explanation="Secrets must be stored in encrypted vaults and injected as runtime environment variables. Committing credentials to git or client bundles is an OWASP critical vulnerability.",
                concept_tag="Secrets Management",
                source_reference="Tech Stacks Guide"
            )
        ]
        db.add_all(tech_questions)
        db.commit()

        # =========================================================================
        # 5. PPT 5: Tech Stacks Python - Concurrency, Frameworks & Trade-offs (10 Questions)
        # =========================================================================
        q5 = Quiz(
            id=str(uuid.uuid4()),
            title="Python Tech Stack: Frameworks, Concurrency & Trade-offs",
            source_scope="single",
            material_id=m_py.id
        )
        db.add(q5)
        db.commit()
        db.refresh(q5)

        py_questions = [
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q5.id,
                question_type="single",
                prompt="Scenario: You are designing a real-time AI Agent platform where each user query makes 3 parallel API calls to external LLMs (latency: 1.5s each). Why should you mandate FastAPI over traditional synchronous Flask/Django?",
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
                id=str(uuid.uuid4()),
                quiz_id=q5.id,
                question_type="single",
                prompt="Case Analysis: Your enterprise PM team needs an internal portal with RBAC (Role-Based Access Control), complex relational models, admin dashboards, and database migrations ready in 2 weeks. Which Python framework delivers the fastest time-to-market?",
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
                id=str(uuid.uuid4()),
                quiz_id=q5.id,
                question_type="single",
                prompt="Language Trade-offs: A junior developer argues that Python should be used for the high-frequency trading engine calculating portfolio risk in sub-millisecond real-time. As PM, why do you push back?",
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
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q5.id,
                question_type="single",
                prompt="Type Validation: In modern Python API development, what primary value does Pydantic provide in frameworks like FastAPI?",
                options=[
                    {"id": "A", "text": "Automatic data parsing, runtime schema validation, and automatic OpenAPI/Swagger documentation generation from Python type hints"},
                    {"id": "B", "text": "It converts Python scripts into native iOS Swift binaries"},
                    {"id": "C", "text": "It replaces relational database engines with text files"},
                    {"id": "D", "text": "It forces Python to execute synchronously without memory allocation"}
                ],
                correct_answers="A",
                hint="Pydantic validates incoming JSON request schemas and automatically outputs OpenAPI documentation.",
                explanation="Pydantic enforces type validation at runtime, parsing incoming request bodies and generating comprehensive OpenAPI (Swagger) specifications automatically.",
                concept_tag="Pydantic & Type Safety",
                source_reference="Python Stacks"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q5.id,
                question_type="single",
                prompt="WSGI vs ASGI: When choosing a web server interface for a high-concurrency microservice handling WebSockets, Server-Sent Events (SSE), and async endpoints, which standard must you choose?",
                options=[
                    {"id": "A", "text": "ASGI (Asynchronous Server Gateway Interface, e.g. Uvicorn)"},
                    {"id": "B", "text": "WSGI (Web Server Gateway Interface, e.g. Gunicorn without async workers)"},
                    {"id": "C", "text": "CGI (Common Gateway Interface from 1993)"},
                    {"id": "D", "text": "FTP Server Gateway"}
                ],
                correct_answers="A",
                hint="ASGI handles asynchronous event-driven protocols like WebSockets; WSGI is synchronous.",
                explanation="WSGI is synchronous and cannot handle WebSockets or async coroutines without blocking worker threads. ASGI was created specifically to enable async/await, WebSockets, and high-concurrency I/O.",
                concept_tag="WSGI vs ASGI",
                source_reference="Python Stacks"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q5.id,
                question_type="single",
                prompt="Background Task Offloading: An endpoint in your Python API generates a heavy 50-page PDF report. If executed synchronously inside the HTTP request handler, the user's browser hangs for 25 seconds. What is the standard Python pattern to solve this?",
                options=[
                    {"id": "A", "text": "Return an immediate HTTP 202 Accepted response with a task ID, and offload PDF generation to Celery workers using Redis as the message broker"},
                    {"id": "B", "text": "Tell users to keep the browser tab open and wait without clicking anything"},
                    {"id": "C", "text": "Execute the generation in an infinite while loop on the main server thread"},
                    {"id": "D", "text": "Delete all PDF reporting features from the product"}
                ],
                correct_answers="A",
                hint="Decouple long-running CPU/IO jobs from the synchronous HTTP request-response cycle using Celery.",
                explanation="Long-running tasks must be offloaded to background task queues (Celery/RQ) with message brokers (Redis/RabbitMQ). The HTTP handler returns 202 Accepted immediately.",
                concept_tag="Background Tasks (Celery & Redis)",
                source_reference="Python Stacks"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q5.id,
                question_type="true_false",
                prompt="Global Interpreter Lock (GIL): True or False: Python's GIL prevents multi-threaded Python programs from executing CPU-bound bytecode in true parallel across multiple CPU cores on a single interpreter process.",
                options=[
                    {"id": "true", "text": "True"},
                    {"id": "false", "text": "False"}
                ],
                correct_answers="true",
                hint="The GIL ensures only one native thread executes Python bytecode at once per process.",
                explanation="True. In CPython, the GIL allows only one thread to hold control of the Python interpreter at a time, meaning CPU-bound tasks must use multiprocessing rather than multithreading to use all cores.",
                concept_tag="Global Interpreter Lock (GIL)",
                source_reference="Python Stacks"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q5.id,
                question_type="single",
                prompt="AI/ML Ecosystem Dominance: Why has Python emerged as the undisputed standard language for Machine Learning and Generative AI (PyTorch, TensorFlow, Hugging Face, LangChain)?",
                options=[
                    {"id": "A", "text": "Python offers high developer velocity and intuitive syntax while wrapping high-performance C/C++ and CUDA numerical compute libraries under the hood"},
                    {"id": "B", "text": "Python is the only language capable of communicating with GPUs"},
                    {"id": "C", "text": "Python code compiles into faster machine assembly than C++"},
                    {"id": "D", "text": "All other programming languages were deprecated by AI researchers"}
                ],
                correct_answers="A",
                hint="Python provides clean high-level developer experience, while underlying tensor operations execute in optimized C/CUDA.",
                explanation="Python serves as the ideal high-level 'glue' language. Data scientists write clean, readable Python code, while heavy linear algebra operations execute in compiled C and CUDA kernels.",
                concept_tag="Python in AI/ML Ecosystem",
                source_reference="Python Stacks"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q5.id,
                question_type="single",
                prompt="Virtual Environments & Dependency Isolation: Why should a production Python application always use virtual environments (e.g. venv, Poetry) rather than installing packages into the global system Python?",
                options=[
                    {"id": "A", "text": "To prevent dependency version conflicts between different projects and avoid corrupting the host operating system's internal Python packages"},
                    {"id": "B", "text": "Virtual environments make Python run in RAM without hard disk storage"},
                    {"id": "C", "text": "Global Python packages cannot connect to cloud databases"},
                    {"id": "D", "text": "Virtual environments are required to connect to the internet"}
                ],
                correct_answers="A",
                hint="Isolated environments ensure reproducible builds and prevent 'dependency hell'.",
                explanation="Virtual environments isolate project-specific dependencies, ensuring deterministic, reproducible builds and preventing package version collisions.",
                concept_tag="Dependency Management & Isolation",
                source_reference="Python Stacks"
            ),
            Question(
                id=str(uuid.uuid4()),
                quiz_id=q5.id,
                question_type="multiple",
                prompt="Micro-frameworks vs Full-Stack: When is a micro-framework like Flask or FastAPI preferred over full-stack Django? (Select all that apply)",
                options=[
                    {"id": "A", "text": "Building lightweight microservices focused purely on single API responsibilities"},
                    {"id": "B", "text": "Deploying serverless functions (AWS Lambda) where fast cold-start times are critical"},
                    {"id": "C", "text": "When the project requires a custom database layer or non-relational datastore where Django's ORM is unnecessary overhead"},
                    {"id": "D", "text": "When you need a built-in admin dashboard and user management system ready on day one without writing any code"}
                ],
                correct_answers=["A", "B", "C"],
                hint="Options A, B, and C favor minimal micro-frameworks. Option D is specifically where Django shines.",
                explanation="Micro-frameworks provide lightweight agility, fast cold starts, and minimal bloat for microservices and serverless functions. Django is preferred when you need full-stack out-of-the-box features (Option D).",
                concept_tag="Micro-framework vs Full-Stack Framework",
                source_reference="Python Stacks"
            )
        ]
        db.add_all(py_questions)
        db.commit()

        print("SUCCESSFULLY SEEDED ALL 5 QUIZZES WITH EXACTLY 10 QUESTIONS EACH (TOTAL: 50 QUESTIONS)!")
    finally:
        db.close()

if __name__ == "__main__":
    seed_full_50_questions()
