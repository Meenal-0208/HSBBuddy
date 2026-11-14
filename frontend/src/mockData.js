export const MOCK_DATA = {
  "subjectName": "PRODUCT MANAGEMENT",
  "stats": {
    "materialsCount": 5,
    "notesGenerated": 5,
    "quizzesCompleted": 0,
    "averageScore": 0,
    "revisionTopicsCount": 26
  },
  "materials": [
    {
      "id": "pm2-day1",
      "title": "PM2 Combined Overview - Day 1",
      "filename": "PM2-Combined-Overview-v2 - Day 1.pptx",
      "fileType": "pptx",
      "uploadDate": "2026-10-27T21:58:00Z",
      "status": "Ready",
      "size": "94 KB",
      "slidesCount": 18,
      "extractedPreview": "--- Slide 1 ---\nPM2-01 & PM2-02  \u2013  COMBINED OVERVIEW\nHow Software Works, Meet the Stack\nA fast, high-level tour for Product Managers \u2013 everything in one hour\nDr. Anand Fadte\n\n--- Slide 2 ---\nToday's Roadmap\n1. How Software Works\n2. Front-End, Back-End, Database\n3. APIs & Integrations\n4. Cloud & Infrastructure",
      "hasNotes": true,
      "hasQuiz": true
    },
    {
      "id": "pm2-day2",
      "title": "PM2 APIs & Integrations - Day 2",
      "filename": "PM2-APIs-Integrations-Combined-v2 - Day 2.pptx",
      "fileType": "pptx",
      "uploadDate": "2026-10-27T21:58:00Z",
      "status": "Ready",
      "size": "71 KB",
      "slidesCount": 13,
      "extractedPreview": "--- Slide 1 ---\nAPIs & Integrations for Product Managers\nREST, Endpoints, JSON, Webhooks & Third-Party Services",
      "hasNotes": true,
      "hasQuiz": true
    },
    {
      "id": "pm2-day3",
      "title": "PM2 Databases & Data Modeling - Day 3",
      "filename": "PM2-Databases-DataModeling-Combined-Day 3.pptx",
      "fileType": "pptx",
      "uploadDate": "2026-10-27T21:58:00Z",
      "status": "Ready",
      "size": "82 KB",
      "slidesCount": 15,
      "extractedPreview": "--- Slide 1 ---\nDatabases & Data Modeling\nRelational vs NoSQL, Schemas, Primary Keys, Foreign Keys & ACID Properties",
      "hasNotes": true,
      "hasQuiz": true
    },
    {
      "id": "pm2-tech-guide",
      "title": "PM2 Tech Stacks Guide",
      "filename": "PM2-Tech-Stacks-Guide.pptx",
      "fileType": "pptx",
      "uploadDate": "2026-10-27T21:58:00Z",
      "status": "Ready",
      "size": "113 KB",
      "slidesCount": 20,
      "extractedPreview": "--- Slide 1 ---\nComprehensive Technology Stacks Guide\nFrontend Frameworks, Backend Runtimes, Database Engines & DevOps Pipelines",
      "hasNotes": true,
      "hasQuiz": true
    },
    {
      "id": "pm2-python",
      "title": "Tech Stacks: Python in Production",
      "filename": "Tech-Stacks-Python.pptx",
      "fileType": "pptx",
      "uploadDate": "2026-10-27T21:58:00Z",
      "status": "Ready",
      "size": "64 KB",
      "slidesCount": 14,
      "extractedPreview": "--- Slide 1 ---\nPython Tech Stacks\nFastAPI, Django, Flask, SQLAlchemy, Celery & ML Serving",
      "hasNotes": true,
      "hasQuiz": true
    }
  ],
  "notes": {
    "pm2-day1": {
      "materialId": "pm2-day1",
      "materialTitle": "PM2-Combined-Overview-v2 - Day 1",
      "updatedAt": "2026-11-01T10:02:20.338275",
      "overview": "High-yield revision notes covering 3-tier architecture, request lifecycles, and scaling patterns.",
      "sections": [
        {
          "heading": "The 3-Tier Architecture",
          "content": "\u2022 Front-End (Client): Browser or mobile app (React, Swift). Renders UI and basic input checks.\n\u2022 Back-End (Server): Executes business logic, pricing, permissions, and fraud checks. Golden Rule: Never trust client input.\n\u2022 Database (Storage): Permanent persistence (PostgreSQL, MongoDB). Retains records across server restarts.",
          "sourceRef": "Day 1"
        },
        {
          "heading": "The 6-Step Click Lifecycle",
          "content": "1. DNS Lookup: Converts domain URL to server IP address.\n2. HTTPS Handshake: Establishes TLS/SSL encrypted connection.\n3. HTTP Request: Client sends Verb (GET/POST) + Headers + JSON payload.\n4. Server Processing: Validates request, checks authorization, queries DB.\n5. Response Sent: Server returns HTTP Status Code + Data.\n6. UI Update: Browser renders HTML or updates DOM.",
          "sourceRef": "Day 1"
        },
        {
          "heading": "State & Speed: Cookies, JWT & CDNs",
          "content": "\u2022 Cookies: Small key-value data saved directly in user's browser.\n\u2022 Sessions vs. JWT: Sessions store state in server memory; JWTs are signed cryptographic tokens passed in request headers.\n\u2022 CDN (Content Delivery Network): Replicates static files (images, CSS, JS) on global edge servers to cut latency.\n\u2022 Redis/Memcached: In-memory RAM cache for hot database queries.",
          "sourceRef": "Day 1"
        },
        {
          "heading": "Rendering: CSR vs. SSR vs. SSG",
          "content": "\u2022 CSR (Client-Side Rendering): Browser loads empty HTML + JS. Best for private dashboards; terrible for public SEO.\n\u2022 SSR (Server-Side Rendering - Next.js): Server compiles full HTML per request. Ideal for SEO and fast first paint.\n\u2022 SSG (Static Generation): Pre-built HTML created at deploy time. Best for blogs and marketing docs.",
          "sourceRef": "Day 1"
        },
        {
          "heading": "Monolith vs. Microservices",
          "content": "\u2022 Monolith: Single codebase for all features. Fastest to build and debug early on, but single point of failure and hard to scale specific bottlenecks.\n\u2022 Microservices: Split into independent services (Auth, Cart, Billing). Independent deployments and horizontal scale, but adds network latency and debugging complexity.",
          "sourceRef": "Day 1"
        },
        {
          "heading": "Mobile: Native vs. Cross-Platform vs. PWA",
          "content": "\u2022 Native (Swift/Kotlin): 100% hardware access and top performance, but requires 2 teams and doubles cost.\n\u2022 Cross-Platform (React Native/Flutter): 80%+ shared code across iOS & Android; fastest time-to-market.\n\u2022 PWA: Mobile website installable without App Store 30% cut, but limited background processing on iOS.",
          "sourceRef": "Day 1"
        }
      ]
    },
    "a4516950-64eb-47e3-b4aa-d2e97cbd8af4": {
      "materialId": "pm2-day1",
      "materialTitle": "PM2-Combined-Overview-v2 - Day 1",
      "updatedAt": "2026-11-01T10:02:20.338275",
      "overview": "High-yield revision notes covering 3-tier architecture, request lifecycles, and scaling patterns.",
      "sections": [
        {
          "heading": "The 3-Tier Architecture",
          "content": "\u2022 Front-End (Client): Browser or mobile app (React, Swift). Renders UI and basic input checks.\n\u2022 Back-End (Server): Executes business logic, pricing, permissions, and fraud checks. Golden Rule: Never trust client input.\n\u2022 Database (Storage): Permanent persistence (PostgreSQL, MongoDB). Retains records across server restarts.",
          "sourceRef": "Day 1"
        },
        {
          "heading": "The 6-Step Click Lifecycle",
          "content": "1. DNS Lookup: Converts domain URL to server IP address.\n2. HTTPS Handshake: Establishes TLS/SSL encrypted connection.\n3. HTTP Request: Client sends Verb (GET/POST) + Headers + JSON payload.\n4. Server Processing: Validates request, checks authorization, queries DB.\n5. Response Sent: Server returns HTTP Status Code + Data.\n6. UI Update: Browser renders HTML or updates DOM.",
          "sourceRef": "Day 1"
        },
        {
          "heading": "State & Speed: Cookies, JWT & CDNs",
          "content": "\u2022 Cookies: Small key-value data saved directly in user's browser.\n\u2022 Sessions vs. JWT: Sessions store state in server memory; JWTs are signed cryptographic tokens passed in request headers.\n\u2022 CDN (Content Delivery Network): Replicates static files (images, CSS, JS) on global edge servers to cut latency.\n\u2022 Redis/Memcached: In-memory RAM cache for hot database queries.",
          "sourceRef": "Day 1"
        },
        {
          "heading": "Rendering: CSR vs. SSR vs. SSG",
          "content": "\u2022 CSR (Client-Side Rendering): Browser loads empty HTML + JS. Best for private dashboards; terrible for public SEO.\n\u2022 SSR (Server-Side Rendering - Next.js): Server compiles full HTML per request. Ideal for SEO and fast first paint.\n\u2022 SSG (Static Generation): Pre-built HTML created at deploy time. Best for blogs and marketing docs.",
          "sourceRef": "Day 1"
        },
        {
          "heading": "Monolith vs. Microservices",
          "content": "\u2022 Monolith: Single codebase for all features. Fastest to build and debug early on, but single point of failure and hard to scale specific bottlenecks.\n\u2022 Microservices: Split into independent services (Auth, Cart, Billing). Independent deployments and horizontal scale, but adds network latency and debugging complexity.",
          "sourceRef": "Day 1"
        },
        {
          "heading": "Mobile: Native vs. Cross-Platform vs. PWA",
          "content": "\u2022 Native (Swift/Kotlin): 100% hardware access and top performance, but requires 2 teams and doubles cost.\n\u2022 Cross-Platform (React Native/Flutter): 80%+ shared code across iOS & Android; fastest time-to-market.\n\u2022 PWA: Mobile website installable without App Store 30% cut, but limited background processing on iOS.",
          "sourceRef": "Day 1"
        }
      ]
    },
    "pm2-day2": {
      "materialId": "pm2-day2",
      "materialTitle": "PM2-APIs-Integrations-Combined-v2 - Day 2",
      "updatedAt": "2026-11-01T10:02:20.338275",
      "overview": "High-yield revision notes on API components, status codes, and webhooks.",
      "sections": [
        {
          "heading": "What is an API? (The Waiter Model)",
          "content": "\u2022 You (Client): Sit at table and place an order.\n\u2022 The Waiter (API): Takes your structured request to the kitchen and brings back your order.\n\u2022 Kitchen (Server & DB): The private system where data is prepared and stored.",
          "sourceRef": "Day 2"
        },
        {
          "heading": "The 5 Anatomy Parts of an API Call",
          "content": "1. Endpoint: The URL resource path (e.g. /v1/payments).\n2. HTTP Method: GET (read), POST (create), PUT/PATCH (update), DELETE (remove).\n3. Headers: Metadata (Content-Type: application/json, Auth Bearer token).\n4. Body: JSON payload carrying attributes to save.\n5. Status Code: 3-digit outcome indicator from server.",
          "sourceRef": "Day 2"
        },
        {
          "heading": "HTTP Status Code Cheat Sheet",
          "content": "\u2022 200 OK: Request succeeded.\n\u2022 201 Created: New record successfully saved.\n\u2022 400 Bad Request: Malformed JSON or failed client validation.\n\u2022 401 Unauthorized: User not logged in (missing credentials).\n\u2022 403 Forbidden: User is logged in, but lacks permissions (e.g. non-admin accessing billing).\n\u2022 404 Not Found: Resource URL does not exist.\n\u2022 429 Too Many Requests: Rate limit exceeded.\n\u2022 500 Internal Error: Backend code crashed.\n\u2022 502/504 Bad Gateway / Timeout: Upstream service failed.",
          "sourceRef": "Day 2"
        },
        {
          "heading": "Webhooks (Push) vs. Polling (Pull)",
          "content": "\u2022 Polling (Pull): Client periodically sends requests every 5 seconds asking 'Is it done yet?' Inefficient, high server load.\n\u2022 Webhooks (Push): External provider (Stripe, Razorpay) immediately sends an automated HTTP POST request to your backend the instant the event occurs.\n\u2022 Rule: Time-critical events (payments, OTP, delivery) must use Webhooks.",
          "sourceRef": "Day 2"
        },
        {
          "heading": "Partner APIs: 5 Questions Before Saying Yes",
          "content": "1. Is there clear documentation and a staging sandbox?\n2. What is their uptime SLA (e.g. 99.9% vs 99.99%)?\n3. What are their rate limits (calls/sec) and cost tiers?\n4. How do they communicate breaking changes and version deprecations?\n5. Do they support Webhooks or only Polling?",
          "sourceRef": "Day 2"
        },
        {
          "heading": "Build vs. Buy Framework",
          "content": "\u2022 Buy / Integrate (Stripe, Twilio, Google Maps): Commodity features that require heavy specialized maintenance and compliance.\n\u2022 Build In-House: Core competitive differentiators, proprietary IP, or when vendor fees become too high at scale.",
          "sourceRef": "Day 2"
        }
      ]
    },
    "4dbe3614-e836-4af9-8e62-7174a75c91c4": {
      "materialId": "pm2-day2",
      "materialTitle": "PM2-APIs-Integrations-Combined-v2 - Day 2",
      "updatedAt": "2026-11-01T10:02:20.338275",
      "overview": "High-yield revision notes on API components, status codes, and webhooks.",
      "sections": [
        {
          "heading": "What is an API? (The Waiter Model)",
          "content": "\u2022 You (Client): Sit at table and place an order.\n\u2022 The Waiter (API): Takes your structured request to the kitchen and brings back your order.\n\u2022 Kitchen (Server & DB): The private system where data is prepared and stored.",
          "sourceRef": "Day 2"
        },
        {
          "heading": "The 5 Anatomy Parts of an API Call",
          "content": "1. Endpoint: The URL resource path (e.g. /v1/payments).\n2. HTTP Method: GET (read), POST (create), PUT/PATCH (update), DELETE (remove).\n3. Headers: Metadata (Content-Type: application/json, Auth Bearer token).\n4. Body: JSON payload carrying attributes to save.\n5. Status Code: 3-digit outcome indicator from server.",
          "sourceRef": "Day 2"
        },
        {
          "heading": "HTTP Status Code Cheat Sheet",
          "content": "\u2022 200 OK: Request succeeded.\n\u2022 201 Created: New record successfully saved.\n\u2022 400 Bad Request: Malformed JSON or failed client validation.\n\u2022 401 Unauthorized: User not logged in (missing credentials).\n\u2022 403 Forbidden: User is logged in, but lacks permissions (e.g. non-admin accessing billing).\n\u2022 404 Not Found: Resource URL does not exist.\n\u2022 429 Too Many Requests: Rate limit exceeded.\n\u2022 500 Internal Error: Backend code crashed.\n\u2022 502/504 Bad Gateway / Timeout: Upstream service failed.",
          "sourceRef": "Day 2"
        },
        {
          "heading": "Webhooks (Push) vs. Polling (Pull)",
          "content": "\u2022 Polling (Pull): Client periodically sends requests every 5 seconds asking 'Is it done yet?' Inefficient, high server load.\n\u2022 Webhooks (Push): External provider (Stripe, Razorpay) immediately sends an automated HTTP POST request to your backend the instant the event occurs.\n\u2022 Rule: Time-critical events (payments, OTP, delivery) must use Webhooks.",
          "sourceRef": "Day 2"
        },
        {
          "heading": "Partner APIs: 5 Questions Before Saying Yes",
          "content": "1. Is there clear documentation and a staging sandbox?\n2. What is their uptime SLA (e.g. 99.9% vs 99.99%)?\n3. What are their rate limits (calls/sec) and cost tiers?\n4. How do they communicate breaking changes and version deprecations?\n5. Do they support Webhooks or only Polling?",
          "sourceRef": "Day 2"
        },
        {
          "heading": "Build vs. Buy Framework",
          "content": "\u2022 Buy / Integrate (Stripe, Twilio, Google Maps): Commodity features that require heavy specialized maintenance and compliance.\n\u2022 Build In-House: Core competitive differentiators, proprietary IP, or when vendor fees become too high at scale.",
          "sourceRef": "Day 2"
        }
      ]
    },
    "pm2-day3": {
      "materialId": "pm2-day3",
      "materialTitle": "PM2-Databases-DataModeling-Combined-Day 3",
      "updatedAt": "2026-11-01T10:02:20.338275",
      "overview": "High-yield revision notes on relational keys, SQL vs NoSQL, normalization, and analytics pipelines.",
      "sections": [
        {
          "heading": "Database Core Building Blocks",
          "content": "\u2022 Table: Entity category (Users, Orders).\n\u2022 Row: Single record instance (one specific user).\n\u2022 Column: Attribute with strict data type (Integer, Text, Timestamp).\n\u2022 Primary Key (PK): Unique non-null identifier for every row.\n\u2022 Foreign Key (FK): Reference in a child table pointing to parent table's Primary Key. Enforces business rule: 'An order must belong to a valid customer.'\n\u2022 Index: Lookup structure (B-Tree) that speeds up queries from full table scans to instant searches.",
          "sourceRef": "Day 3"
        },
        {
          "heading": "SQL (Relational) vs. NoSQL (Document)",
          "content": "\u2022 SQL (PostgreSQL, MySQL): Rigid schema, strict ACID transactional guarantees, multi-table JOINs. Best for financial ledgers, inventory, and order systems.\n\u2022 NoSQL (MongoDB, DynamoDB): Flexible JSON documents, horizontal scale across clusters. Best for real-time sensor logs, social feeds, and caching (Redis).\n\u2022 Rule: Use SQL for transactions and reporting integrity; use NoSQL for massive unstructured scale.",
          "sourceRef": "Day 3"
        },
        {
          "heading": "Normalization: Why We Split Tables",
          "content": "\u2022 The Problem: A flat denormalized table repeats customer name, email, and address on every order row.\n\u2022 The Risk: Update anomalies (address changed in one row, but forgotten in another) and data corruption.\n\u2022 The Solution: Normalization (3NF) splits data into separate Users and Orders tables linked via user_id foreign key for a single source of truth.",
          "sourceRef": "Day 3"
        },
        {
          "heading": "OLTP vs. OLAP (The Analytics Rule)",
          "content": "\u2022 OLTP (Online Transaction Processing): The operational database (PostgreSQL, MySQL) optimized for fast row writes (e.g. checkout, login).\n\u2022 OLAP (Online Analytical Processing): Columnar data warehouses (Snowflake, BigQuery) optimized for massive aggregations and retention reports.\n\u2022 Golden Rule: Never run heavy BI analytics queries directly on production OLTP; it locks tables and slows down users.",
          "sourceRef": "Day 3"
        },
        {
          "heading": "5 SQL Commands Every PM Should Know",
          "content": "\u2022 SELECT: Chooses which columns to display.\n\u2022 WHERE: Filters rows based on criteria.\n\u2022 JOIN: Combines data from two tables using a common key.\n\u2022 GROUP BY: Aggregates metrics (COUNT, SUM, AVG) per category.\n\u2022 ORDER BY: Sorts results (ASC or DESC).",
          "sourceRef": "Day 3"
        }
      ]
    },
    "e6b9d5b2-0519-41a3-bcb6-1e20820322c8": {
      "materialId": "pm2-day3",
      "materialTitle": "PM2-Databases-DataModeling-Combined-Day 3",
      "updatedAt": "2026-11-01T10:02:20.338275",
      "overview": "High-yield revision notes on relational keys, SQL vs NoSQL, normalization, and analytics pipelines.",
      "sections": [
        {
          "heading": "Database Core Building Blocks",
          "content": "\u2022 Table: Entity category (Users, Orders).\n\u2022 Row: Single record instance (one specific user).\n\u2022 Column: Attribute with strict data type (Integer, Text, Timestamp).\n\u2022 Primary Key (PK): Unique non-null identifier for every row.\n\u2022 Foreign Key (FK): Reference in a child table pointing to parent table's Primary Key. Enforces business rule: 'An order must belong to a valid customer.'\n\u2022 Index: Lookup structure (B-Tree) that speeds up queries from full table scans to instant searches.",
          "sourceRef": "Day 3"
        },
        {
          "heading": "SQL (Relational) vs. NoSQL (Document)",
          "content": "\u2022 SQL (PostgreSQL, MySQL): Rigid schema, strict ACID transactional guarantees, multi-table JOINs. Best for financial ledgers, inventory, and order systems.\n\u2022 NoSQL (MongoDB, DynamoDB): Flexible JSON documents, horizontal scale across clusters. Best for real-time sensor logs, social feeds, and caching (Redis).\n\u2022 Rule: Use SQL for transactions and reporting integrity; use NoSQL for massive unstructured scale.",
          "sourceRef": "Day 3"
        },
        {
          "heading": "Normalization: Why We Split Tables",
          "content": "\u2022 The Problem: A flat denormalized table repeats customer name, email, and address on every order row.\n\u2022 The Risk: Update anomalies (address changed in one row, but forgotten in another) and data corruption.\n\u2022 The Solution: Normalization (3NF) splits data into separate Users and Orders tables linked via user_id foreign key for a single source of truth.",
          "sourceRef": "Day 3"
        },
        {
          "heading": "OLTP vs. OLAP (The Analytics Rule)",
          "content": "\u2022 OLTP (Online Transaction Processing): The operational database (PostgreSQL, MySQL) optimized for fast row writes (e.g. checkout, login).\n\u2022 OLAP (Online Analytical Processing): Columnar data warehouses (Snowflake, BigQuery) optimized for massive aggregations and retention reports.\n\u2022 Golden Rule: Never run heavy BI analytics queries directly on production OLTP; it locks tables and slows down users.",
          "sourceRef": "Day 3"
        },
        {
          "heading": "5 SQL Commands Every PM Should Know",
          "content": "\u2022 SELECT: Chooses which columns to display.\n\u2022 WHERE: Filters rows based on criteria.\n\u2022 JOIN: Combines data from two tables using a common key.\n\u2022 GROUP BY: Aggregates metrics (COUNT, SUM, AVG) per category.\n\u2022 ORDER BY: Sorts results (ASC or DESC).",
          "sourceRef": "Day 3"
        }
      ]
    },
    "pm2-tech-guide": {
      "materialId": "pm2-tech-guide",
      "materialTitle": "PM2-Tech-Stacks-Guide",
      "updatedAt": "2026-11-14T10:28:39.779685",
      "overview": "Key architectural takeaways, definitions, and frameworks synthesized directly from 'PM2-Tech-Stacks-Guide'.",
      "sections": [
        {
          "heading": "1. ",
          "content": "\u2022 PRODUCT MANAGEMENT II  \u00b7  TECH STACKS\n\u2022 Technology Stacks Guide\n\u2022 A PM's comprehensive reference to the modern technology landscape",
          "sourceRef": "Slide 1"
        },
        {
          "heading": "2. ",
          "content": "\u2022 CHAPTER 1\n\u2022 What Is a Tech Stack?\n\u2022 A tech stack is the combination of technologies used to build and run a software product \u2014 programming languages, frameworks, databases, cloud services, and tools.\n\u2022 THE FOUR LAYERS OF A TECH STACK\n\u2022 Frontend",
          "sourceRef": "Slide 2"
        },
        {
          "heading": "3. ",
          "content": "\u2022 CHAPTER 2\n\u2022 Frontend Technologies \u2014 What Users See\n\u2022 THE FOUNDATION: HTML + CSS + JAVASCRIPT\n\u2022 HTML\n\u2022 Structure of every",
          "sourceRef": "Slide 3"
        },
        {
          "heading": "4. ",
          "content": "\u2022 CHAPTERS 3\u20137\n\u2022 Backend Languages at a Glance\n\u2022 The backend is the \"brain\" of your application \u2014 it processes data, runs business logic, and serves APIs.\n\u2022 Language | Created | Primary Use | Killer Feature | Avoid For\n\u2022 Python | 1991 | AI/ML, data science, web | Ecosystem breadth, AI dominance | Mobile apps, high concurrency",
          "sourceRef": "Slide 4"
        },
        {
          "heading": "5. ",
          "content": "\u2022 BACKEND DECISION GUIDE\n\u2022 When to Use Which Language\n\u2022 MATCH THE LANGUAGE TO THE JOB\n\u2022 Use Case | Best Language(s) | Why\n\u2022 AI / Machine Learning product | Python | TensorFlow, PyTorch, scikit-learn all Python-first",
          "sourceRef": "Slide 5"
        },
        {
          "heading": "6. ",
          "content": "\u2022 CHAPTER 8\n\u2022 Mobile Development Approaches\n\u2022 FOUR WAYS TO BUILD MOBILE APPS\n\u2022 Native iOS\n\u2022 (Swift)",
          "sourceRef": "Slide 6"
        }
      ]
    },
    "71edc403-1c3c-48cd-9b41-2a8bba7413e4": {
      "materialId": "pm2-tech-guide",
      "materialTitle": "PM2-Tech-Stacks-Guide",
      "updatedAt": "2026-11-14T10:28:39.779685",
      "overview": "Key architectural takeaways, definitions, and frameworks synthesized directly from 'PM2-Tech-Stacks-Guide'.",
      "sections": [
        {
          "heading": "1. ",
          "content": "\u2022 PRODUCT MANAGEMENT II  \u00b7  TECH STACKS\n\u2022 Technology Stacks Guide\n\u2022 A PM's comprehensive reference to the modern technology landscape",
          "sourceRef": "Slide 1"
        },
        {
          "heading": "2. ",
          "content": "\u2022 CHAPTER 1\n\u2022 What Is a Tech Stack?\n\u2022 A tech stack is the combination of technologies used to build and run a software product \u2014 programming languages, frameworks, databases, cloud services, and tools.\n\u2022 THE FOUR LAYERS OF A TECH STACK\n\u2022 Frontend",
          "sourceRef": "Slide 2"
        },
        {
          "heading": "3. ",
          "content": "\u2022 CHAPTER 2\n\u2022 Frontend Technologies \u2014 What Users See\n\u2022 THE FOUNDATION: HTML + CSS + JAVASCRIPT\n\u2022 HTML\n\u2022 Structure of every",
          "sourceRef": "Slide 3"
        },
        {
          "heading": "4. ",
          "content": "\u2022 CHAPTERS 3\u20137\n\u2022 Backend Languages at a Glance\n\u2022 The backend is the \"brain\" of your application \u2014 it processes data, runs business logic, and serves APIs.\n\u2022 Language | Created | Primary Use | Killer Feature | Avoid For\n\u2022 Python | 1991 | AI/ML, data science, web | Ecosystem breadth, AI dominance | Mobile apps, high concurrency",
          "sourceRef": "Slide 4"
        },
        {
          "heading": "5. ",
          "content": "\u2022 BACKEND DECISION GUIDE\n\u2022 When to Use Which Language\n\u2022 MATCH THE LANGUAGE TO THE JOB\n\u2022 Use Case | Best Language(s) | Why\n\u2022 AI / Machine Learning product | Python | TensorFlow, PyTorch, scikit-learn all Python-first",
          "sourceRef": "Slide 5"
        },
        {
          "heading": "6. ",
          "content": "\u2022 CHAPTER 8\n\u2022 Mobile Development Approaches\n\u2022 FOUR WAYS TO BUILD MOBILE APPS\n\u2022 Native iOS\n\u2022 (Swift)",
          "sourceRef": "Slide 6"
        }
      ]
    },
    "pm2-python": {
      "materialId": "pm2-python",
      "materialTitle": "Tech-Stacks-Python",
      "updatedAt": "2026-11-01T10:02:20.338275",
      "overview": "High-yield revision notes on Python backend frameworks, ORMs, and deployment.",
      "sections": [
        {
          "heading": "Where Python Fits & Key Trade-offs",
          "content": "\u2022 Location: Operates in the Logic Tier (Backend/Server).\n\u2022 Strengths: Readable syntax, fastest team shipping velocity, unmatched AI/ML ecosystem (PyTorch, Pandas).\n\u2022 Trade-offs: Slower CPU-bound execution than Go/Rust/C++, and not suitable for native mobile client apps.",
          "sourceRef": "Python Stacks"
        },
        {
          "heading": "The Big 3 Python Web Frameworks",
          "content": "\u2022 Django ('Batteries Included'): Comes with built-in ORM, admin dashboard, authentication, and migrations. Best for fast MVP full-stack products.\n\u2022 FastAPI (Modern & Async): Built on Python type hints with async ASGI; fastest Python framework with automated Swagger API docs. Best for microservices and AI inference.\n\u2022 Flask (Micro-Framework): Minimal core leaving all tooling decisions to engineers. Best for small prototypes.",
          "sourceRef": "Python Stacks"
        },
        {
          "heading": "Python in Production Deployment",
          "content": "\u2022 WSGI / ASGI App Server: Gunicorn (for Django/Flask) or Uvicorn (for async FastAPI).\n\u2022 Reverse Proxy: Nginx sits in front to handle SSL termination, request buffering, and static caching.\n\u2022 Package Management: pip and virtual environments (venv/poetry) isolate project dependencies.",
          "sourceRef": "Python Stacks"
        }
      ]
    },
    "3a041faa-25e6-4f1a-952a-6cb4e12d1ba9": {
      "materialId": "pm2-python",
      "materialTitle": "Tech-Stacks-Python",
      "updatedAt": "2026-11-01T10:02:20.338275",
      "overview": "High-yield revision notes on Python backend frameworks, ORMs, and deployment.",
      "sections": [
        {
          "heading": "Where Python Fits & Key Trade-offs",
          "content": "\u2022 Location: Operates in the Logic Tier (Backend/Server).\n\u2022 Strengths: Readable syntax, fastest team shipping velocity, unmatched AI/ML ecosystem (PyTorch, Pandas).\n\u2022 Trade-offs: Slower CPU-bound execution than Go/Rust/C++, and not suitable for native mobile client apps.",
          "sourceRef": "Python Stacks"
        },
        {
          "heading": "The Big 3 Python Web Frameworks",
          "content": "\u2022 Django ('Batteries Included'): Comes with built-in ORM, admin dashboard, authentication, and migrations. Best for fast MVP full-stack products.\n\u2022 FastAPI (Modern & Async): Built on Python type hints with async ASGI; fastest Python framework with automated Swagger API docs. Best for microservices and AI inference.\n\u2022 Flask (Micro-Framework): Minimal core leaving all tooling decisions to engineers. Best for small prototypes.",
          "sourceRef": "Python Stacks"
        },
        {
          "heading": "Python in Production Deployment",
          "content": "\u2022 WSGI / ASGI App Server: Gunicorn (for Django/Flask) or Uvicorn (for async FastAPI).\n\u2022 Reverse Proxy: Nginx sits in front to handle SSL termination, request buffering, and static caching.\n\u2022 Package Management: pip and virtual environments (venv/poetry) isolate project dependencies.",
          "sourceRef": "Python Stacks"
        }
      ]
    }
  },
  "sampleQuiz": {
    "id": "e53c1ec4-2a20-472d-87c5-1cc13bcc5a45",
    "materialId": "pm2-day1",
    "title": "[Easy] Set 1: Web Fundamentals, DNS & HTTPS Encryption",
    "difficulty": "easy",
    "totalQuestions": 10,
    "questions": [
      {
        "id": "dbadeaaf-9cc8-4337-8a5b-7fd2fa7159ef",
        "type": "single",
        "prompt": "Flash Sale Concurrency: Your checkout service crashes under peak write locks. How to fix?",
        "options": [
          {
            "id": "A",
            "text": "Introduce an asynchronous message queue (e.g. RabbitMQ/Kafka) to buffer checkout orders and process writes at a controlled rate"
          },
          {
            "id": "B",
            "text": "Switch from HTTPS to HTTP"
          },
          {
            "id": "C",
            "text": "Increase browser cookie TTL"
          },
          {
            "id": "D",
            "text": "Use Client-Side Rendering"
          }
        ],
        "hint": "Buffer database writes asynchronously.",
        "explanation": "Message queues decouple spikes from transactional DB writes.",
        "sourceRef": "Day 1 System Design (Topic 1)",
        "conceptTag": "Queues & Buffering"
      },
      {
        "id": "e74bf54a-8d7c-48d6-816b-3fa426bcbad8",
        "type": "single",
        "prompt": "Startup Architecture: 3 engineers want 15 microservices before their first 100 users. Why push back?",
        "options": [
          {
            "id": "A",
            "text": "Microservices introduce heavy operational overhead, distributed network latency, and slow feature velocity when domain boundaries are still changing"
          },
          {
            "id": "B",
            "text": "Microservices cannot run unit tests"
          },
          {
            "id": "C",
            "text": "Microservices require on-premise mainframes"
          },
          {
            "id": "D",
            "text": "Microservices cannot use SQL"
          }
        ],
        "hint": "Early-stage startups need fast shipping velocity.",
        "explanation": "Premature microservices add deployment complexity and distributed failure modes.",
        "sourceRef": "Day 1 System Design (Topic 2)",
        "conceptTag": "Monolith vs Microservices"
      },
      {
        "id": "869c61f5-f50e-4b92-878c-5d12b64af389",
        "type": "single",
        "prompt": "SEO & Rendering: An e-commerce site needs fast First Contentful Paint and organic Google search indexing. What rendering should you pick?",
        "options": [
          {
            "id": "A",
            "text": "Server-Side Rendering (SSR) or Static Site Generation (SSG) so full HTML is delivered on initial response"
          },
          {
            "id": "B",
            "text": "Pure Client-Side Rendering (CSR) with an empty initial div"
          },
          {
            "id": "C",
            "text": "Browser-only JavaScript canvas rendering"
          },
          {
            "id": "D",
            "text": "Flash applet rendering"
          }
        ],
        "hint": "Web crawlers need pre-rendered HTML.",
        "explanation": "SSR and SSG deliver pre-built HTML that crawlers and mobile browsers can immediately parse.",
        "sourceRef": "Day 1 System Design (Topic 3)",
        "conceptTag": "SSR vs CSR"
      },
      {
        "id": "9268424d-d7fc-4fb5-b2df-a68500a12481",
        "type": "true_false",
        "prompt": "Trust Boundary: True or False: Because the frontend verifies transfer amount > $0 in JavaScript, the backend can safely skip duplicate validation.",
        "options": [
          {
            "id": "A",
            "text": "False"
          },
          {
            "id": "B",
            "text": "True"
          }
        ],
        "hint": "Never trust the client.",
        "explanation": "Any user or script can send raw HTTP requests directly to the API, bypassing UI checks. Backend validation is mandatory.",
        "sourceRef": "Day 1 System Design (Topic 4)",
        "conceptTag": "Security Validation"
      },
      {
        "id": "85c8afc0-4272-44dc-a473-9b76e8b7d1b1",
        "type": "single",
        "prompt": "Global Latency: 40% of users in Asia experience 500ms latency downloading images hosted in Virginia. What is the immediate solution?",
        "options": [
          {
            "id": "A",
            "text": "Deploy a Content Delivery Network (CDN) like Cloudflare or CloudFront to cache static assets in edge POPs near users"
          },
          {
            "id": "B",
            "text": "Rewrite backend in C++"
          },
          {
            "id": "C",
            "text": "Ask users to switch to 5G"
          },
          {
            "id": "D",
            "text": "Compress images to monochrome"
          }
        ],
        "hint": "Edge servers physically close to users cut speed-of-light delay.",
        "explanation": "CDNs cache static assets at global points of presence to eliminate transatlantic latency.",
        "sourceRef": "Day 1 System Design (Topic 5)",
        "conceptTag": "CDNs & Edge Caching"
      },
      {
        "id": "4f3c33b4-9965-4751-9bb9-083a03ec626e",
        "type": "single",
        "prompt": "Scaling Definitions: What is the defining difference between Vertical Scaling and Horizontal Scaling?",
        "options": [
          {
            "id": "A",
            "text": "Vertical scaling adds more CPU/RAM to a single server instance; Horizontal scaling adds more server instances behind a load balancer"
          },
          {
            "id": "B",
            "text": "Vertical scaling uses cloud; horizontal uses physical servers"
          },
          {
            "id": "C",
            "text": "Vertical scaling is for databases; horizontal is for CSS"
          },
          {
            "id": "D",
            "text": "Vertical scaling divides code into microservices"
          }
        ],
        "hint": "Vertical = bigger machine; Horizontal = more machines.",
        "explanation": "Scaling up (vertical) upgrades single-server hardware; scaling out (horizontal) distributes load across multiple servers.",
        "sourceRef": "Day 1 System Design (Topic 6)",
        "conceptTag": "System Scaling"
      },
      {
        "id": "24373429-fa45-4e6a-88d6-96df694b003e",
        "type": "single",
        "prompt": "3-Tier Architecture: What are the three core tiers of a standard web application architecture?",
        "options": [
          {
            "id": "A",
            "text": "Presentation Layer (Client UI), Application Layer (Business Logic), and Data Storage Layer (Database)"
          },
          {
            "id": "B",
            "text": "DNS Layer, ISP Layer, Browser Layer"
          },
          {
            "id": "C",
            "text": "HTML Layer, CSS Layer, JavaScript Layer"
          },
          {
            "id": "D",
            "text": "Email Layer, Payment Layer, Marketing Layer"
          }
        ],
        "hint": "UI -> Business Logic -> Storage.",
        "explanation": "Standard 3-tier separates the user interface, backend processing, and data persistence.",
        "sourceRef": "Day 1 System Design (Topic 7)",
        "conceptTag": "3-Tier Stack"
      },
      {
        "id": "835ecf6a-fe08-4227-b770-de6856a2b411",
        "type": "single",
        "prompt": "Load Balancer Routing: For persistent WebSocket chat connections, which load balancing algorithm prevents server starvation?",
        "options": [
          {
            "id": "A",
            "text": "Least Connections (routes new connections to the server currently handling the lowest active connections)"
          },
          {
            "id": "B",
            "text": "Round Robin"
          },
          {
            "id": "C",
            "text": "Random Routing"
          },
          {
            "id": "D",
            "text": "DNS TTL Cycling"
          }
        ],
        "hint": "Long-lived connections cause imbalances under simple sequential round-robin.",
        "explanation": "Least Connections accounts for persistent connection durations, balancing active workloads.",
        "sourceRef": "Day 1 System Design (Topic 8)",
        "conceptTag": "Load Balancing"
      },
      {
        "id": "02b8a94e-0f79-4dd4-931c-7667badc299a",
        "type": "true_false",
        "prompt": "Cache Invalidation: True or False: Adding Redis caching in front of your database carries zero product risk or complexity.",
        "options": [
          {
            "id": "A",
            "text": "False"
          },
          {
            "id": "B",
            "text": "True"
          }
        ],
        "hint": "Consider stale data and synchronization.",
        "explanation": "Cache invalidation causes stale pricing data, cache stampedes, and synchronization bugs.",
        "sourceRef": "Day 1 System Design (Topic 9)",
        "conceptTag": "Caching Trade-offs"
      },
      {
        "id": "f427455d-af86-4c20-af95-de2c48ad1eca",
        "type": "single",
        "prompt": "High Availability: What is the primary difference between a Single Point of Failure (SPOF) and a Redundant Architecture?",
        "options": [
          {
            "id": "A",
            "text": "A SPOF crashes the entire system if that single component fails; Redundancy maintains standby duplicates for seamless failover"
          },
          {
            "id": "B",
            "text": "SPOF is a cloud security feature"
          },
          {
            "id": "C",
            "text": "Redundancy means having duplicate git branches"
          },
          {
            "id": "D",
            "text": "SPOF only applies to CSS"
          }
        ],
        "hint": "Redundancy eliminates SPOFs.",
        "explanation": "High availability requires active or standby duplicates so no single failure stops service.",
        "sourceRef": "Day 1 System Design (Topic 10)",
        "conceptTag": "High Availability"
      }
    ]
  },
  "quizzes": [
    {
      "id": "e53c1ec4-2a20-472d-87c5-1cc13bcc5a45",
      "materialId": "pm2-day1",
      "title": "[Easy] Set 1: Web Fundamentals, DNS & HTTPS Encryption",
      "difficulty": "easy",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "dbadeaaf-9cc8-4337-8a5b-7fd2fa7159ef",
          "type": "single",
          "prompt": "Flash Sale Concurrency: Your checkout service crashes under peak write locks. How to fix?",
          "options": [
            {
              "id": "A",
              "text": "Introduce an asynchronous message queue (e.g. RabbitMQ/Kafka) to buffer checkout orders and process writes at a controlled rate"
            },
            {
              "id": "B",
              "text": "Switch from HTTPS to HTTP"
            },
            {
              "id": "C",
              "text": "Increase browser cookie TTL"
            },
            {
              "id": "D",
              "text": "Use Client-Side Rendering"
            }
          ],
          "hint": "Buffer database writes asynchronously.",
          "explanation": "Message queues decouple spikes from transactional DB writes.",
          "sourceRef": "Day 1 System Design (Topic 1)",
          "conceptTag": "Queues & Buffering"
        },
        {
          "id": "e74bf54a-8d7c-48d6-816b-3fa426bcbad8",
          "type": "single",
          "prompt": "Startup Architecture: 3 engineers want 15 microservices before their first 100 users. Why push back?",
          "options": [
            {
              "id": "A",
              "text": "Microservices introduce heavy operational overhead, distributed network latency, and slow feature velocity when domain boundaries are still changing"
            },
            {
              "id": "B",
              "text": "Microservices cannot run unit tests"
            },
            {
              "id": "C",
              "text": "Microservices require on-premise mainframes"
            },
            {
              "id": "D",
              "text": "Microservices cannot use SQL"
            }
          ],
          "hint": "Early-stage startups need fast shipping velocity.",
          "explanation": "Premature microservices add deployment complexity and distributed failure modes.",
          "sourceRef": "Day 1 System Design (Topic 2)",
          "conceptTag": "Monolith vs Microservices"
        },
        {
          "id": "869c61f5-f50e-4b92-878c-5d12b64af389",
          "type": "single",
          "prompt": "SEO & Rendering: An e-commerce site needs fast First Contentful Paint and organic Google search indexing. What rendering should you pick?",
          "options": [
            {
              "id": "A",
              "text": "Server-Side Rendering (SSR) or Static Site Generation (SSG) so full HTML is delivered on initial response"
            },
            {
              "id": "B",
              "text": "Pure Client-Side Rendering (CSR) with an empty initial div"
            },
            {
              "id": "C",
              "text": "Browser-only JavaScript canvas rendering"
            },
            {
              "id": "D",
              "text": "Flash applet rendering"
            }
          ],
          "hint": "Web crawlers need pre-rendered HTML.",
          "explanation": "SSR and SSG deliver pre-built HTML that crawlers and mobile browsers can immediately parse.",
          "sourceRef": "Day 1 System Design (Topic 3)",
          "conceptTag": "SSR vs CSR"
        },
        {
          "id": "9268424d-d7fc-4fb5-b2df-a68500a12481",
          "type": "true_false",
          "prompt": "Trust Boundary: True or False: Because the frontend verifies transfer amount > $0 in JavaScript, the backend can safely skip duplicate validation.",
          "options": [
            {
              "id": "A",
              "text": "False"
            },
            {
              "id": "B",
              "text": "True"
            }
          ],
          "hint": "Never trust the client.",
          "explanation": "Any user or script can send raw HTTP requests directly to the API, bypassing UI checks. Backend validation is mandatory.",
          "sourceRef": "Day 1 System Design (Topic 4)",
          "conceptTag": "Security Validation"
        },
        {
          "id": "85c8afc0-4272-44dc-a473-9b76e8b7d1b1",
          "type": "single",
          "prompt": "Global Latency: 40% of users in Asia experience 500ms latency downloading images hosted in Virginia. What is the immediate solution?",
          "options": [
            {
              "id": "A",
              "text": "Deploy a Content Delivery Network (CDN) like Cloudflare or CloudFront to cache static assets in edge POPs near users"
            },
            {
              "id": "B",
              "text": "Rewrite backend in C++"
            },
            {
              "id": "C",
              "text": "Ask users to switch to 5G"
            },
            {
              "id": "D",
              "text": "Compress images to monochrome"
            }
          ],
          "hint": "Edge servers physically close to users cut speed-of-light delay.",
          "explanation": "CDNs cache static assets at global points of presence to eliminate transatlantic latency.",
          "sourceRef": "Day 1 System Design (Topic 5)",
          "conceptTag": "CDNs & Edge Caching"
        },
        {
          "id": "4f3c33b4-9965-4751-9bb9-083a03ec626e",
          "type": "single",
          "prompt": "Scaling Definitions: What is the defining difference between Vertical Scaling and Horizontal Scaling?",
          "options": [
            {
              "id": "A",
              "text": "Vertical scaling adds more CPU/RAM to a single server instance; Horizontal scaling adds more server instances behind a load balancer"
            },
            {
              "id": "B",
              "text": "Vertical scaling uses cloud; horizontal uses physical servers"
            },
            {
              "id": "C",
              "text": "Vertical scaling is for databases; horizontal is for CSS"
            },
            {
              "id": "D",
              "text": "Vertical scaling divides code into microservices"
            }
          ],
          "hint": "Vertical = bigger machine; Horizontal = more machines.",
          "explanation": "Scaling up (vertical) upgrades single-server hardware; scaling out (horizontal) distributes load across multiple servers.",
          "sourceRef": "Day 1 System Design (Topic 6)",
          "conceptTag": "System Scaling"
        },
        {
          "id": "24373429-fa45-4e6a-88d6-96df694b003e",
          "type": "single",
          "prompt": "3-Tier Architecture: What are the three core tiers of a standard web application architecture?",
          "options": [
            {
              "id": "A",
              "text": "Presentation Layer (Client UI), Application Layer (Business Logic), and Data Storage Layer (Database)"
            },
            {
              "id": "B",
              "text": "DNS Layer, ISP Layer, Browser Layer"
            },
            {
              "id": "C",
              "text": "HTML Layer, CSS Layer, JavaScript Layer"
            },
            {
              "id": "D",
              "text": "Email Layer, Payment Layer, Marketing Layer"
            }
          ],
          "hint": "UI -> Business Logic -> Storage.",
          "explanation": "Standard 3-tier separates the user interface, backend processing, and data persistence.",
          "sourceRef": "Day 1 System Design (Topic 7)",
          "conceptTag": "3-Tier Stack"
        },
        {
          "id": "835ecf6a-fe08-4227-b770-de6856a2b411",
          "type": "single",
          "prompt": "Load Balancer Routing: For persistent WebSocket chat connections, which load balancing algorithm prevents server starvation?",
          "options": [
            {
              "id": "A",
              "text": "Least Connections (routes new connections to the server currently handling the lowest active connections)"
            },
            {
              "id": "B",
              "text": "Round Robin"
            },
            {
              "id": "C",
              "text": "Random Routing"
            },
            {
              "id": "D",
              "text": "DNS TTL Cycling"
            }
          ],
          "hint": "Long-lived connections cause imbalances under simple sequential round-robin.",
          "explanation": "Least Connections accounts for persistent connection durations, balancing active workloads.",
          "sourceRef": "Day 1 System Design (Topic 8)",
          "conceptTag": "Load Balancing"
        },
        {
          "id": "02b8a94e-0f79-4dd4-931c-7667badc299a",
          "type": "true_false",
          "prompt": "Cache Invalidation: True or False: Adding Redis caching in front of your database carries zero product risk or complexity.",
          "options": [
            {
              "id": "A",
              "text": "False"
            },
            {
              "id": "B",
              "text": "True"
            }
          ],
          "hint": "Consider stale data and synchronization.",
          "explanation": "Cache invalidation causes stale pricing data, cache stampedes, and synchronization bugs.",
          "sourceRef": "Day 1 System Design (Topic 9)",
          "conceptTag": "Caching Trade-offs"
        },
        {
          "id": "f427455d-af86-4c20-af95-de2c48ad1eca",
          "type": "single",
          "prompt": "High Availability: What is the primary difference between a Single Point of Failure (SPOF) and a Redundant Architecture?",
          "options": [
            {
              "id": "A",
              "text": "A SPOF crashes the entire system if that single component fails; Redundancy maintains standby duplicates for seamless failover"
            },
            {
              "id": "B",
              "text": "SPOF is a cloud security feature"
            },
            {
              "id": "C",
              "text": "Redundancy means having duplicate git branches"
            },
            {
              "id": "D",
              "text": "SPOF only applies to CSS"
            }
          ],
          "hint": "Redundancy eliminates SPOFs.",
          "explanation": "High availability requires active or standby duplicates so no single failure stops service.",
          "sourceRef": "Day 1 System Design (Topic 10)",
          "conceptTag": "High Availability"
        }
      ]
    },
    {
      "id": "7e24bed3-04ac-4ceb-986e-7a0e8883050d",
      "materialId": "pm2-day1",
      "title": "[Easy] Set 2: Frontend vs Backend, SSR, CSR & Caching",
      "difficulty": "easy",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "d01cbd5d-012a-44af-9ffe-07398b0cd220",
          "type": "single",
          "prompt": "DNS Resolution: What is the primary function of the Domain Name System (DNS) when a user visits your website?",
          "options": [
            {
              "id": "A",
              "text": "Translating human-readable domain names (e.g. app.com) into machine-routable IP addresses (e.g. 192.0.2.1)"
            },
            {
              "id": "B",
              "text": "Encrypting user passwords in transit"
            },
            {
              "id": "C",
              "text": "Compressing PNG images"
            },
            {
              "id": "D",
              "text": "Executing backend database queries"
            }
          ],
          "hint": "DNS is the phonebook of the internet.",
          "explanation": "DNS maps friendly domain names to numeric IP addresses required by TCP/IP routing.",
          "sourceRef": "Day 1 System Design (Topic 11)",
          "conceptTag": "DNS"
        },
        {
          "id": "a537d476-1e95-4bf2-bedc-f32691d4fe81",
          "type": "single",
          "prompt": "HTTPS & SSL/TLS: What two primary protections does HTTPS (SSL/TLS) provide over plain HTTP?",
          "options": [
            {
              "id": "A",
              "text": "Encryption (prevents eavesdropping) and Server Authentication (proves you are connecting to the legitimate site)"
            },
            {
              "id": "B",
              "text": "Faster database indexing and automated SQL backups"
            },
            {
              "id": "C",
              "text": "Eliminates the need for user passwords"
            },
            {
              "id": "D",
              "text": "Guarantees 100% server uptime"
            }
          ],
          "hint": "Encryption + Verification.",
          "explanation": "TLS encrypts communications against man-in-the-middle sniffing and verifies server identity.",
          "sourceRef": "Day 1 System Design (Topic 12)",
          "conceptTag": "HTTPS & Security"
        },
        {
          "id": "221d1a26-9d95-4c5e-805f-6f2a4d90b8a5",
          "type": "single",
          "prompt": "Port Numbers: What standard default network ports are reserved for HTTP and HTTPS traffic respectively?",
          "options": [
            {
              "id": "A",
              "text": "Port 80 for HTTP, Port 443 for HTTPS"
            },
            {
              "id": "B",
              "text": "Port 21 for HTTP, Port 22 for HTTPS"
            },
            {
              "id": "C",
              "text": "Port 3000 for HTTP, Port 8000 for HTTPS"
            },
            {
              "id": "D",
              "text": "Port 5432 for HTTP, Port 3306 for HTTPS"
            }
          ],
          "hint": "Standard internet ports.",
          "explanation": "Port 80 is the unencrypted web standard; 443 is the TLS/HTTPS standard.",
          "sourceRef": "Day 1 System Design (Topic 13)",
          "conceptTag": "Network Ports"
        },
        {
          "id": "725cca86-3c96-45b3-99d0-a6ee67cdc7d6",
          "type": "single",
          "prompt": "Cookies vs LocalStorage: Why should sensitive session authentication tokens be stored in HttpOnly cookies rather than LocalStorage?",
          "options": [
            {
              "id": "A",
              "text": "HttpOnly cookies cannot be accessed or stolen by malicious JavaScript during Cross-Site Scripting (XSS) attacks"
            },
            {
              "id": "B",
              "text": "LocalStorage has a 2-second expiration limit"
            },
            {
              "id": "C",
              "text": "Cookies are stored directly in CPU cache"
            },
            {
              "id": "D",
              "text": "Browsers delete LocalStorage on every page refresh"
            }
          ],
          "hint": "HttpOnly blocks JS read access.",
          "explanation": "HttpOnly flags prevent malicious scripts injected via XSS from reading the session cookie.",
          "sourceRef": "Day 1 System Design (Topic 14)",
          "conceptTag": "Session Security"
        },
        {
          "id": "9b956fd3-54ce-4b7f-b831-129f649b6f4f",
          "type": "single",
          "prompt": "Stateful vs Stateless: Why do modern horizontally scaled web servers mandate Stateless application tier design?",
          "options": [
            {
              "id": "A",
              "text": "Stateless servers don't store session data in local server memory, allowing any server node to handle any user request seamlessly"
            },
            {
              "id": "B",
              "text": "Stateless servers don't need electricity"
            },
            {
              "id": "C",
              "text": "Stateless servers delete the database after each request"
            },
            {
              "id": "D",
              "text": "Stateless servers run only on mobile devices"
            }
          ],
          "hint": "Any server can answer any request.",
          "explanation": "When state is kept in Redis/DB rather than local RAM, requests can be routed to any server behind the load balancer.",
          "sourceRef": "Day 1 System Design (Topic 15)",
          "conceptTag": "Stateless Architecture"
        },
        {
          "id": "20cef4a5-6004-43c9-8ca7-70943490615f",
          "type": "single",
          "prompt": "Reverse Proxy: What role does a reverse proxy like NGINX play when placed in front of application servers?",
          "options": [
            {
              "id": "A",
              "text": "SSL termination, request routing, static file caching, and load balancing across internal app workers"
            },
            {
              "id": "B",
              "text": "Replacing the database engine"
            },
            {
              "id": "C",
              "text": "Compiling React JSX inside the browser"
            },
            {
              "id": "D",
              "text": "Assigning credit limits to customers"
            }
          ],
          "hint": "Shields and coordinates backend app servers.",
          "explanation": "Reverse proxies handle SSL decryption, compression, and traffic distribution before hitting Python/Node workers.",
          "sourceRef": "Day 1 System Design (Topic 16)",
          "conceptTag": "Reverse Proxies"
        },
        {
          "id": "4a2ddb26-6977-4d68-97c9-defc066373d8",
          "type": "single",
          "prompt": "Connection Limits: When backend workers exceed maximum concurrent database connections, what architectural utility prevents server crashes?",
          "options": [
            {
              "id": "A",
              "text": "Database Connection Pooler (e.g. PgBouncer)"
            },
            {
              "id": "B",
              "text": "Disabling SQL indexing"
            },
            {
              "id": "C",
              "text": "Changing the domain registrar"
            },
            {
              "id": "D",
              "text": "Switching from JSON to XML"
            }
          ],
          "hint": "Connection pooling manages and reuses open sockets.",
          "explanation": "Connection poolers keep a warm set of connections and queue surplus queries rather than exhausting DB file descriptors.",
          "sourceRef": "Day 1 System Design (Topic 17)",
          "conceptTag": "Connection Pooling"
        },
        {
          "id": "077f00f5-bd44-4eb5-a6a3-e29c5d6b9a4b",
          "type": "single",
          "prompt": "Cold Starts: In Serverless architecture (e.g. AWS Lambda), what causes an initial request latency spike called a 'cold start'?",
          "options": [
            {
              "id": "A",
              "text": "The cloud provider spinning up a new container runtime, downloading code, and initializing libraries from an idle state"
            },
            {
              "id": "B",
              "text": "The user's Wi-Fi router rebooting"
            },
            {
              "id": "C",
              "text": "The DNS server expiring globally"
            },
            {
              "id": "D",
              "text": "The SQL database performing a table scan"
            }
          ],
          "hint": "Spinning up fresh runtime containers takes time.",
          "explanation": "When an idle serverless function receives a trigger, initializing the container and runtime introduces initial latency.",
          "sourceRef": "Day 1 System Design (Topic 18)",
          "conceptTag": "Serverless Cold Starts"
        },
        {
          "id": "b8a8c4ad-cb1f-41ec-9425-d3532c858f6c",
          "type": "single",
          "prompt": "WebSockets vs HTTP: When building a collaborative multi-player whiteboarding tool, why use WebSockets instead of HTTP polling?",
          "options": [
            {
              "id": "A",
              "text": "WebSockets maintain a persistent, full-duplex TCP connection allowing instantaneous bidirectional messages with minimal header overhead"
            },
            {
              "id": "B",
              "text": "HTTP does not support JSON"
            },
            {
              "id": "C",
              "text": "WebSockets are cheaper than HTML"
            },
            {
              "id": "D",
              "text": "HTTP can only be sent once per day"
            }
          ],
          "hint": "Full-duplex persistent real-time streaming.",
          "explanation": "WebSockets avoid repeated HTTP header handshakes, enabling sub-10ms bidirectional communication.",
          "sourceRef": "Day 1 System Design (Topic 19)",
          "conceptTag": "WebSockets"
        },
        {
          "id": "e95e88c1-00a9-418e-b61d-a4c76016dba4",
          "type": "single",
          "prompt": "Service Level Agreements: What is the allowable downtime per year for an enterprise product promising 'Four Nines' (99.99%) availability?",
          "options": [
            {
              "id": "A",
              "text": "Approximately 52.6 minutes per year"
            },
            {
              "id": "B",
              "text": "24 hours per year"
            },
            {
              "id": "C",
              "text": "7 days per year"
            },
            {
              "id": "D",
              "text": "Zero seconds per year"
            }
          ],
          "hint": "99.99% = ~52.6 minutes of downtime per year.",
          "explanation": "Four nines availability means downtime cannot exceed ~4.3 minutes per month or 52.6 minutes annually.",
          "sourceRef": "Day 1 System Design (Topic 20)",
          "conceptTag": "SLA & Uptime"
        }
      ]
    },
    {
      "id": "f4d4fd45-9ac2-40e3-9760-2b77add06f90",
      "materialId": "pm2-day1",
      "title": "[Medium] Set 3: Scalability, Horizontal vs Vertical & SPOF",
      "difficulty": "medium",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "96faae7a-3f48-4243-b6ad-04d5a08610af",
          "type": "single",
          "prompt": "Session Hijacking: An attacker steals an active user's session cookie over an unencrypted public Wi-Fi network. What protocol prevented this?",
          "options": [
            {
              "id": "A",
              "text": "HTTPS with Secure and HttpOnly cookie flags"
            },
            {
              "id": "B",
              "text": "FTP protocol"
            },
            {
              "id": "C",
              "text": "Client-Side Rendering"
            },
            {
              "id": "D",
              "text": "CSS Media Queries"
            }
          ],
          "hint": "Secure cookies transmit only over HTTPS.",
          "explanation": "The Secure cookie attribute guarantees tokens are never broadcast over unencrypted HTTP.",
          "sourceRef": "Day 1 System Design (Topic 21)",
          "conceptTag": "Web Security"
        },
        {
          "id": "edfbbddb-941f-4df1-bade-6f69b684d50c",
          "type": "single",
          "prompt": "Database Write Bottleneck: Your analytics dashboard performs millions of real-time event writes per minute, crashing the SQL master. What pattern mitigates this?",
          "options": [
            {
              "id": "A",
              "text": "Write-behind caching or time-series message streaming into ClickHouse/Kafka"
            },
            {
              "id": "B",
              "text": "Switching to CSV files on Google Drive"
            },
            {
              "id": "C",
              "text": "Mandating users only click once per hour"
            },
            {
              "id": "D",
              "text": "Deleting the primary key"
            }
          ],
          "hint": "Decouple high-velocity write ingest.",
          "explanation": "Buffering stream writes in message queues and ingesting into specialized columnar databases preserves OLTP health.",
          "sourceRef": "Day 1 System Design (Topic 22)",
          "conceptTag": "Write Scaling"
        },
        {
          "id": "5be070e0-3d06-4038-9aba-93cacd9dcad4",
          "type": "single",
          "prompt": "Content Security Policy (CSP): What critical frontend security risk does a robust Content Security Policy header mitigate?",
          "options": [
            {
              "id": "A",
              "text": "Cross-Site Scripting (XSS) by restricting where scripts, styles, and images can be loaded from"
            },
            {
              "id": "B",
              "text": "SQL Injection on backend queries"
            },
            {
              "id": "C",
              "text": "Hard drive physical corruption"
            },
            {
              "id": "D",
              "text": "DNS domain expiration"
            }
          ],
          "hint": "CSP restricts unauthorized script execution.",
          "explanation": "CSP headers tell browsers which domains are trusted script sources, preventing inline malicious payloads from executing.",
          "sourceRef": "Day 1 System Design (Topic 23)",
          "conceptTag": "CSP & Security"
        },
        {
          "id": "45e2dbea-3239-4f12-854d-6b9ae6811519",
          "type": "single",
          "prompt": "Rate of Degradation: What is the primary difference between graceful degradation and a hard catastrophic system failure?",
          "options": [
            {
              "id": "A",
              "text": "Graceful degradation disables non-essential features (e.g. recommendations) while preserving core workflows (e.g. checkout); hard failure crashes the entire app"
            },
            {
              "id": "B",
              "text": "Graceful degradation makes servers shut down permanently"
            },
            {
              "id": "C",
              "text": "Hard failures are caused by HTML errors"
            },
            {
              "id": "D",
              "text": "Graceful degradation requires physical rebooting"
            }
          ],
          "hint": "Keep core functionality alive under stress.",
          "explanation": "Graceful degradation sheds non-critical load (shedding secondary widgets) to ensure fundamental transactions succeed.",
          "sourceRef": "Day 1 System Design (Topic 24)",
          "conceptTag": "System Resilience"
        },
        {
          "id": "bcf00be6-c435-4194-a887-ca46648f2913",
          "type": "single",
          "prompt": "Microservices Network Latency: What term describes the latency tax incurred when a single user action triggers 20 synchronous RPC calls between internal services?",
          "options": [
            {
              "id": "A",
              "text": "Cascading network latency / Service Call Chain Latency"
            },
            {
              "id": "B",
              "text": "Database Deadlock"
            },
            {
              "id": "C",
              "text": "Browser DOM thrashing"
            },
            {
              "id": "D",
              "text": "Cookie fragmentation"
            }
          ],
          "hint": "Chained synchronous calls compound latency.",
          "explanation": "When microservices call each other synchronously in a chain, the total user wait time is the sum of every network hop.",
          "sourceRef": "Day 1 System Design (Topic 25)",
          "conceptTag": "Microservice Latency"
        },
        {
          "id": "dd3e9477-6b18-4cf4-b14b-e8bfd5f1622a",
          "type": "single",
          "prompt": "Monolithic Advantage: In what scenario is a monolithic architecture significantly superior to microservices?",
          "options": [
            {
              "id": "A",
              "text": "Rapid prototyping, early-stage startups with small teams, single deployment pipelines, and shared transactional consistency"
            },
            {
              "id": "B",
              "text": "Companies with 5,000 independent engineering teams"
            },
            {
              "id": "C",
              "text": "Applications requiring 50 different programming languages"
            },
            {
              "id": "D",
              "text": "Systems that never use databases"
            }
          ],
          "hint": "Monoliths excel at speed and simplicity.",
          "explanation": "Monoliths offer single-repo visibility, trivial local testing, atomic DB transactions, and zero cross-service network latency.",
          "sourceRef": "Day 1 System Design (Topic 26)",
          "conceptTag": "Monolith Advantages"
        },
        {
          "id": "81c03f8d-5d76-40b0-9386-0a77e27d5256",
          "type": "single",
          "prompt": "Circuit Breaker Pattern: What happens when an integrated third-party recommendation service goes down and starts timing out on every request?",
          "options": [
            {
              "id": "A",
              "text": "The Circuit Breaker trips 'open', immediately returning a fallback response without wasting threads waiting for external timeouts"
            },
            {
              "id": "B",
              "text": "The backend server crashes automatically"
            },
            {
              "id": "C",
              "text": "All database tables are deleted"
            },
            {
              "id": "D",
              "text": "The browser reloads 1,000 times"
            }
          ],
          "hint": "Fails fast to prevent thread exhaustion.",
          "explanation": "Circuit breakers stop calls to failing dependencies after a threshold of errors, preventing cascading system-wide exhaustion.",
          "sourceRef": "Day 1 System Design (Topic 27)",
          "conceptTag": "Resilience Patterns"
        },
        {
          "id": "6f2a963e-ed38-44cf-bffb-2a04cce11e8d",
          "type": "single",
          "prompt": "Health Checks: Why do cloud load balancers require /healthz HTTP endpoints on backend services?",
          "options": [
            {
              "id": "A",
              "text": "To detect unhealthy or crashed server instances and automatically stop routing client traffic to them"
            },
            {
              "id": "B",
              "text": "To count how many lines of code were written"
            },
            {
              "id": "C",
              "text": "To verify that the company's credit card is valid"
            },
            {
              "id": "D",
              "text": "To check user grammar in form inputs"
            }
          ],
          "hint": "Removes dead servers from traffic pool.",
          "explanation": "Load balancers poll health endpoints. If an instance fails or hangs, it is automatically drained and removed.",
          "sourceRef": "Day 1 System Design (Topic 28)",
          "conceptTag": "Health Checks"
        },
        {
          "id": "6bb25cf2-2bfb-4541-b7e8-3c214adb0dd5",
          "type": "single",
          "prompt": "Edge Computing: When would a PM recommend running logic at CDN Edge Workers (e.g. Cloudflare Workers) rather than the origin backend?",
          "options": [
            {
              "id": "A",
              "text": "Geolocation routing, A/B testing header rewrites, and instant cookie-based redirects with zero origin round trips"
            },
            {
              "id": "B",
              "text": "Heavy 30-minute machine learning model training"
            },
            {
              "id": "C",
              "text": "Processing complex multi-table SQL ledger migrations"
            },
            {
              "id": "D",
              "text": "Storing 50 terabytes of customer backup files"
            }
          ],
          "hint": "Sub-10ms edge request manipulation.",
          "explanation": "Edge workers execute lightweight logic directly at POPs closest to users, avoiding origin round trips for redirects and auth checks.",
          "sourceRef": "Day 1 System Design (Topic 29)",
          "conceptTag": "Edge Computing"
        },
        {
          "id": "e47b3d8f-8d2c-48ae-bbb7-8d96b87c4db5",
          "type": "single",
          "prompt": "Browser Rendering Critical Path: What happens when a web page loads a heavy synchronous `<script>` tag in the `<head>` without `async` or `defer`?",
          "options": [
            {
              "id": "A",
              "text": "HTML parsing is completely blocked until the script downloads and executes, causing a blank screen delay"
            },
            {
              "id": "B",
              "text": "The browser immediately executes the script in the background without affecting rendering"
            },
            {
              "id": "C",
              "text": "The script is automatically deleted by Chrome"
            },
            {
              "id": "D",
              "text": "The web server shuts down"
            }
          ],
          "hint": "Parsing is blocked.",
          "explanation": "Synchronous script tags block the browser's DOM parser, delaying First Contentful Paint until the file is parsed.",
          "sourceRef": "Day 1 System Design (Topic 30)",
          "conceptTag": "Frontend Performance"
        }
      ]
    },
    {
      "id": "61986cd4-3f50-431b-81ff-0a8273983581",
      "materialId": "pm2-day1",
      "title": "[Medium] Set 4: 3-Tier Architecture, Microservices & Queues",
      "difficulty": "medium",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "b4c74b9f-3ed0-449b-9b0b-26ffb5ae3b80",
          "type": "single",
          "prompt": "Asset Minification & Bundling: Why do frontend production build pipelines bundle and minify JavaScript and CSS?",
          "options": [
            {
              "id": "A",
              "text": "To strip whitespace, shorten variable names, and reduce download size, speeding up page load over mobile networks"
            },
            {
              "id": "B",
              "text": "To prevent users from opening Developer Tools"
            },
            {
              "id": "C",
              "text": "To convert JavaScript into Python bytecode"
            },
            {
              "id": "D",
              "text": "To automatically translate text into 50 languages"
            }
          ],
          "hint": "Smaller payloads download faster.",
          "explanation": "Minification strips comments and whitespace and mangles variable names to deliver the smallest possible payload over the wire.",
          "sourceRef": "Day 1 System Design (Topic 31)",
          "conceptTag": "Web Optimization"
        },
        {
          "id": "778688b3-5ec8-45e8-91b3-55deebdaa923",
          "type": "single",
          "prompt": "Time To First Byte (TTFB): A user complains that after clicking a link, the screen stays white for 1.8 seconds before anything starts loading. What metric is broken?",
          "options": [
            {
              "id": "A",
              "text": "Time To First Byte (TTFB) - the time from the client HTTP request until the first byte of response data arrives from the server"
            },
            {
              "id": "B",
              "text": "Cumulative Layout Shift (CLS)"
            },
            {
              "id": "C",
              "text": "First Input Delay (FID)"
            },
            {
              "id": "D",
              "text": "Browser battery level"
            }
          ],
          "hint": "TTFB measures server response time.",
          "explanation": "High TTFB indicates slow backend processing, database query locks, or transatlantic network hops before the server sends HTML.",
          "sourceRef": "Day 1 System Design (Topic 32)",
          "conceptTag": "Performance Metrics"
        },
        {
          "id": "c312a0df-afd9-460e-ab36-2e1cecfca3f1",
          "type": "single",
          "prompt": "HTTP Keep-Alive: What efficiency does persistent HTTP Keep-Alive provide for web applications?",
          "options": [
            {
              "id": "A",
              "text": "It reuses an existing TCP connection for multiple HTTP requests rather than renegotiating a 3-way handshake and TLS handshake for every single file"
            },
            {
              "id": "B",
              "text": "It keeps the user's laptop screen awake indefinitely"
            },
            {
              "id": "C",
              "text": "It prevents database connections from expiring"
            },
            {
              "id": "D",
              "text": "It forces mobile apps to stay open in the background"
            }
          ],
          "hint": "Reuses established TCP sockets.",
          "explanation": "Keep-Alive avoids the latency tax of negotiating a new TCP three-way handshake and TLS cipher exchange for every image and asset.",
          "sourceRef": "Day 1 System Design (Topic 33)",
          "conceptTag": "TCP Fundamentals"
        },
        {
          "id": "0ec6221b-6b10-480a-99f9-25d25acfef91",
          "type": "single",
          "prompt": "Compression (Gzip / Brotli): Why should web servers enable Brotli or Gzip compression on HTTP responses?",
          "options": [
            {
              "id": "A",
              "text": "It compresses text responses (HTML, CSS, JSON) by up to 70-80%, drastically reducing bandwidth and download latency"
            },
            {
              "id": "B",
              "text": "It converts relational databases into NoSQL documents"
            },
            {
              "id": "C",
              "text": "It prevents web scraping by bots"
            },
            {
              "id": "D",
              "text": "It encrypts credit card transactions"
            }
          ],
          "hint": "Compresses text payloads.",
          "explanation": "Gzip and Brotli use Huffman coding and LZ77 to compress JSON and HTML text by over 70%, dramatically speeding up transfer times.",
          "sourceRef": "Day 1 System Design (Topic 34)",
          "conceptTag": "HTTP Compression"
        },
        {
          "id": "70e5dc05-5982-45e2-9414-2c3cef403e5a",
          "type": "single",
          "prompt": "Asynchronous Processing: Which of the following tasks should ALWAYS be processed asynchronously in a background queue rather than in the user's synchronous HTTP request?",
          "options": [
            {
              "id": "A",
              "text": "Sending 10,000 welcome email newsletters and generating a 50-page invoice PDF"
            },
            {
              "id": "B",
              "text": "Checking if the username input field is empty"
            },
            {
              "id": "C",
              "text": "Retrieving a single user record by Primary Key"
            },
            {
              "id": "D",
              "text": "Returning a static CSS stylesheet"
            }
          ],
          "hint": "Long-running batch jobs belong in background workers.",
          "explanation": "Any task that takes longer than 200ms or depends on external network services (emails, PDFs) must be offloaded to message queues.",
          "sourceRef": "Day 1 System Design (Topic 35)",
          "conceptTag": "Async Architecture"
        },
        {
          "id": "14bb45cd-eca7-48ec-b916-da2e2dd94672",
          "type": "single",
          "prompt": "Idempotency Concept: What does it mean for an operation to be 'idempotent'?",
          "options": [
            {
              "id": "A",
              "text": "Executing the operation multiple times produces the identical state as executing it exactly once"
            },
            {
              "id": "B",
              "text": "The operation runs in under 1 millisecond"
            },
            {
              "id": "C",
              "text": "The operation requires no authentication"
            },
            {
              "id": "D",
              "text": "The operation can only be executed by administrators"
            }
          ],
          "hint": "Multiple calls = same outcome.",
          "explanation": "Idempotent actions guarantee that repeated execution (due to network retries) does not alter system state beyond the first call.",
          "sourceRef": "Day 1 System Design (Topic 36)",
          "conceptTag": "System Design Fundamentals"
        },
        {
          "id": "a1143e54-47fa-48b7-82c4-a4e29ef8884b",
          "type": "single",
          "prompt": "Disaster Recovery RTO & RPO: What is the fundamental difference between Recovery Time Objective (RTO) and Recovery Point Objective (RPO)?",
          "options": [
            {
              "id": "A",
              "text": "RTO is how quickly systems must be restored after an outage; RPO is the maximum acceptable data loss measured in time (e.g. 5 minutes of lost data)"
            },
            {
              "id": "B",
              "text": "RTO measures server cost; RPO measures user signups"
            },
            {
              "id": "C",
              "text": "RTO applies to SQL; RPO applies to NoSQL"
            },
            {
              "id": "D",
              "text": "RTO is for frontend; RPO is for backend"
            }
          ],
          "hint": "RTO = downtime duration; RPO = data loss window.",
          "explanation": "RTO sets the target restoration clock; RPO dictates backup frequency and the tolerable transaction loss window.",
          "sourceRef": "Day 1 System Design (Topic 37)",
          "conceptTag": "Disaster Recovery"
        },
        {
          "id": "78463120-1953-4c1f-a62d-eeabf286dd56",
          "type": "single",
          "prompt": "Multi-Region Active-Active: Why is Multi-Region Active-Active the most expensive and complex architecture to maintain?",
          "options": [
            {
              "id": "A",
              "text": "It requires continuous bi-directional database synchronization and distributed conflict resolution across global data centers"
            },
            {
              "id": "B",
              "text": "Cloud providers bill 100x higher for Asian servers"
            },
            {
              "id": "C",
              "text": "It cannot run on Linux servers"
            },
            {
              "id": "D",
              "text": "It requires writing separate codebases for each country"
            }
          ],
          "hint": "Cross-region data consistency is hard.",
          "explanation": "Synchronizing real-time writes across global regions without violating speed of light latency or causing data collisions requires complex distributed consensus.",
          "sourceRef": "Day 1 System Design (Topic 38)",
          "conceptTag": "Global Architecture"
        },
        {
          "id": "ce1bb57c-a8fe-48e9-a278-265a0c4d224b",
          "type": "single",
          "prompt": "Graceful Shutdown: Why must containerized backend workers implement graceful SIGTERM signal handling?",
          "options": [
            {
              "id": "A",
              "text": "To allow in-flight HTTP requests and database transactions to finish processing before the process exits during deployments"
            },
            {
              "id": "B",
              "text": "To save battery power on the cloud host"
            },
            {
              "id": "C",
              "text": "To format the hard drive on exit"
            },
            {
              "id": "D",
              "text": "To alert users via SMS that servers are restarting"
            }
          ],
          "hint": "Finish existing work before stopping.",
          "explanation": "Graceful shutdown finishes in-progress requests, flushes logs, and closes DB connections cleanly without dropping active user queries.",
          "sourceRef": "Day 1 System Design (Topic 39)",
          "conceptTag": "DevOps Best Practices"
        },
        {
          "id": "4d7764e9-8e3d-4dfb-9b7d-5cc7f30d4773",
          "type": "single",
          "prompt": "Sticky Sessions: What is the downside of using 'Sticky Sessions' (Session Affinity) on a load balancer?",
          "options": [
            {
              "id": "A",
              "text": "It breaks uniform load distribution because heavy users remain tied to a single server instance, preventing balanced horizontal scaling"
            },
            {
              "id": "B",
              "text": "It deletes cookies every 5 minutes"
            },
            {
              "id": "C",
              "text": "It requires switching from HTTPS to HTTP"
            },
            {
              "id": "D",
              "text": "It prevents users from uploading files"
            }
          ],
          "hint": "Causes server load imbalances.",
          "explanation": "Sticky sessions tie specific users to specific servers. If a power user performs heavy compute, that single node gets overloaded.",
          "sourceRef": "Day 1 System Design (Topic 40)",
          "conceptTag": "Load Balancing"
        }
      ]
    },
    {
      "id": "a9c04619-ed65-4dc9-9a9a-e8983f871ce0",
      "materialId": "pm2-day1",
      "title": "[Hard] Set 5: Advanced Resilience, Disaster Recovery & WAF",
      "difficulty": "hard",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "59d3c49b-dacc-4a4d-9e3f-880dd7c67271",
          "type": "single",
          "prompt": "API Gateway Role: What primary architectural responsibilities does an API Gateway handle in front of internal backend services?",
          "options": [
            {
              "id": "A",
              "text": "Centralized authentication, rate limiting, request routing, SSL termination, and API usage analytics"
            },
            {
              "id": "B",
              "text": "Directly querying hard drives without OS drivers"
            },
            {
              "id": "C",
              "text": "Rendering React components in the browser"
            },
            {
              "id": "D",
              "text": "Hosting corporate email accounts"
            }
          ],
          "hint": "Front door for all internal APIs.",
          "explanation": "API gateways act as the single entry point, abstracting routing, auth, telemetry, and policy enforcement away from individual microservices.",
          "sourceRef": "Day 1 System Design (Topic 41)",
          "conceptTag": "API Gateway"
        },
        {
          "id": "fe65ccd9-2930-4a3d-a5e6-68fd8ebeb9e9",
          "type": "single",
          "prompt": "CORS (Cross-Origin Resource Sharing): What causes a browser to throw a CORS error when calling an API?",
          "options": [
            {
              "id": "A",
              "text": "The frontend JavaScript origin (e.g. https://app.com) differs from the backend API origin (e.g. https://api.com), and the API did not return matching Access-Control-Allow-Origin headers"
            },
            {
              "id": "B",
              "text": "The user's password was incorrect"
            },
            {
              "id": "C",
              "text": "The backend server ran out of hard disk space"
            },
            {
              "id": "D",
              "text": "The user is using an outdated smartphone"
            }
          ],
          "hint": "Browser security policy enforcement.",
          "explanation": "CORS is a browser security mechanism that blocks cross-origin requests unless the server explicitly grants permission via HTTP headers.",
          "sourceRef": "Day 1 System Design (Topic 42)",
          "conceptTag": "Browser Security"
        },
        {
          "id": "ee8d79d0-377c-4226-b2d3-c87d055c106c",
          "type": "single",
          "prompt": "Microservices Anti-Pattern (Distributed Monolith): What is a 'Distributed Monolith' in modern engineering?",
          "options": [
            {
              "id": "A",
              "text": "A system composed of multiple microservices that are tightly coupled, must be deployed simultaneously, and share database tables, combining the downsides of both architectures"
            },
            {
              "id": "B",
              "text": "A supercomputer hosted by NASA"
            },
            {
              "id": "C",
              "text": "A single massive monolithic codebase running on a mainframe"
            },
            {
              "id": "D",
              "text": "A mobile application that works offline"
            }
          ],
          "hint": "All the operational pain with none of the benefits.",
          "explanation": "A distributed monolith has decoupled services that cannot operate independently, requiring synchronized releases and causing cascading cross-network failures.",
          "sourceRef": "Day 1 System Design (Topic 43)",
          "conceptTag": "Architecture Anti-Patterns"
        },
        {
          "id": "b420f123-ac36-4853-98eb-6f1f40665710",
          "type": "single",
          "prompt": "Message Broker vs In-Memory Cache: What is the primary difference in purpose between RabbitMQ and Redis?",
          "options": [
            {
              "id": "A",
              "text": "RabbitMQ is built primarily for robust, guaranteed message routing and consumer acknowledgment queues; Redis is primarily an ultra-fast in-memory key-value data store and cache"
            },
            {
              "id": "B",
              "text": "RabbitMQ is a relational database; Redis is a web browser"
            },
            {
              "id": "C",
              "text": "RabbitMQ can only be used on Windows; Redis runs on Android"
            },
            {
              "id": "D",
              "text": "There is no difference; they are identical"
            }
          ],
          "hint": "Message broker vs In-memory key-value store.",
          "explanation": "While Redis supports lightweight pub/sub, dedicated brokers like RabbitMQ/Kafka guarantee persistence, routing topologies, and delivery receipts.",
          "sourceRef": "Day 1 System Design (Topic 44)",
          "conceptTag": "Infrastructure Selection"
        },
        {
          "id": "d3921642-2de8-4429-ab82-132f1a8a5dff",
          "type": "single",
          "prompt": "Database Connection Leak: What happens to a backend application when code opens database connections inside request handlers but fails to close them in an `except/finally` block?",
          "options": [
            {
              "id": "A",
              "text": "The database pool exhausts all available connections, causing all subsequent user requests to time out and crash the service"
            },
            {
              "id": "B",
              "text": "The database automatically upgrades its memory"
            },
            {
              "id": "C",
              "text": "The backend rewrites the query automatically"
            },
            {
              "id": "D",
              "text": "Connections are converted into static HTML"
            }
          ],
          "hint": "Exhausts connection limits.",
          "explanation": "Failing to release database connections causes pool starvation, leading to system-wide lockouts until the service is restarted.",
          "sourceRef": "Day 1 System Design (Topic 45)",
          "conceptTag": "Production Reliability"
        },
        {
          "id": "41d2d549-3a82-4c11-bd40-534d130420eb",
          "type": "single",
          "prompt": "Database Read-Your-Own-Writes Consistency: A user posts a comment, but when the page refreshes, their comment does not appear for 2 seconds. What caused this?",
          "options": [
            {
              "id": "A",
              "text": "Asynchronous replication lag between the Primary master database (where the write occurred) and the Read Replica (which served the immediate read)"
            },
            {
              "id": "B",
              "text": "The user's keyboard was unplugged"
            },
            {
              "id": "C",
              "text": "The browser deleted the comment automatically"
            },
            {
              "id": "D",
              "text": "The database password changed"
            }
          ],
          "hint": "Replication lag on read replicas.",
          "explanation": "Replicating writes across read replicas is asynchronous. Direct reads right after writes must be routed to the primary master to guarantee read-your-own-writes consistency.",
          "sourceRef": "Day 1 System Design (Topic 46)",
          "conceptTag": "Replication Lag"
        },
        {
          "id": "7a7a5456-e9ae-441a-b272-c35f5a8982eb",
          "type": "single",
          "prompt": "Blue-Green vs Rolling Deployment: What advantage does a Blue-Green deployment have over a Rolling deployment during a catastrophic bug release?",
          "options": [
            {
              "id": "A",
              "text": "Instant instantaneous rollback by switching load balancer router traffic back to the idle Blue environment in under 1 second"
            },
            {
              "id": "B",
              "text": "Zero server cost"
            },
            {
              "id": "C",
              "text": "Requires no automated tests"
            },
            {
              "id": "D",
              "text": "Works without load balancers"
            }
          ],
          "hint": "Instant 1-second router rollback.",
          "explanation": "Blue-Green keeps the previous version running warm. If the new release fails, shifting traffic back to the old environment takes seconds.",
          "sourceRef": "Day 1 System Design (Topic 47)",
          "conceptTag": "Deployment Strategies"
        },
        {
          "id": "13c5bd7e-8d68-4d78-ac29-36c9f9a0369d",
          "type": "single",
          "prompt": "Zero Downtime Database Migrations: How should engineering add a new non-nullable column to a 100-million row production table without causing a service outage?",
          "options": [
            {
              "id": "A",
              "text": "Multi-step migration: Add column as nullable, backfill data in batches, update application code, and then add NOT NULL constraint"
            },
            {
              "id": "B",
              "text": "Lock the entire table for 3 hours during peak business hours"
            },
            {
              "id": "C",
              "text": "Delete the table and rebuild it from scratch"
            },
            {
              "id": "D",
              "text": "Stop taking user payments for a week"
            }
          ],
          "hint": "Expand and contract non-blocking migrations.",
          "explanation": "Direct table-locking ALTER statements block production writes. Multi-phase non-blocking migrations preserve live traffic.",
          "sourceRef": "Day 1 System Design (Topic 48)",
          "conceptTag": "Database Migrations"
        },
        {
          "id": "8c998d38-4f0c-4d70-80ca-23d3817b7d45",
          "type": "single",
          "prompt": "Web Application Firewall (WAF): What primary threats does a cloud WAF (e.g. AWS WAF, Cloudflare) protect against?",
          "options": [
            {
              "id": "A",
              "text": "Common web exploits such as SQL injection, Cross-Site Scripting (XSS), bad bots, and HTTP flood attacks"
            },
            {
              "id": "B",
              "text": "Physical data center power outages"
            },
            {
              "id": "C",
              "text": "Developer syntax errors"
            },
            {
              "id": "D",
              "text": "Employee laptop screen damage"
            }
          ],
          "hint": "Inspects and blocks malicious HTTP payloads.",
          "explanation": "WAFs inspect incoming HTTP requests at the edge, blocking signature-based attack vectors before they reach origin servers.",
          "sourceRef": "Day 1 System Design (Topic 49)",
          "conceptTag": "WAF & Security"
        },
        {
          "id": "c48e7e6a-17a0-4980-998b-6515af2190f5",
          "type": "single",
          "prompt": "Feature Flags / Toggles: Why do PMs mandate Feature Flags (e.g. LaunchDarkly) for major product releases?",
          "options": [
            {
              "id": "A",
              "text": "To decouple software deployment from business release, enabling canary rollouts, instant kill-switches, and risk-free testing in production"
            },
            {
              "id": "B",
              "text": "To make CSS buttons look darker"
            },
            {
              "id": "C",
              "text": "To replace automated unit testing"
            },
            {
              "id": "D",
              "text": "To automatically write marketing copy"
            }
          ],
          "hint": "Decouples deployment from feature exposure.",
          "explanation": "Feature flags allow code to be deployed safely dark, enabled for 1% of users, and instantly killed if errors spike without redeploying code.",
          "sourceRef": "Day 1 System Design (Topic 50)",
          "conceptTag": "Feature Flags"
        }
      ]
    },
    {
      "id": "37be488d-3522-4869-a77c-913d8d68bbce",
      "materialId": "pm2-day2",
      "title": "[Easy] Set 1: What is an API & How Calls Work (REST Verbs)",
      "difficulty": "easy",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "d2520bc2-0a0a-4a31-baa5-ae113b257e58",
          "type": "single",
          "prompt": "Polling Flood: Your server polls a payment gateway's /status every 2 seconds for 100k carts, getting HTTP 429. What is the proper fix?",
          "options": [
            {
              "id": "A",
              "text": "Replace aggressive polling with Webhooks so the payment provider pushes an event only when payment state changes"
            },
            {
              "id": "B",
              "text": "Poll every 200ms"
            },
            {
              "id": "C",
              "text": "Renew SSL certificate"
            },
            {
              "id": "D",
              "text": "Send confirmations via DNS"
            }
          ],
          "hint": "Push vs Pull architecture.",
          "explanation": "Webhooks eliminate redundant polling traffic by notifying backends asynchronously when state changes.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 1)",
          "conceptTag": "Webhooks vs Polling"
        },
        {
          "id": "b8527486-f28f-4063-802f-4861300e9bb6",
          "type": "single",
          "prompt": "Auth Diagnostics: An authenticated user with a valid JWT token tries accessing another user's private financial statement. What HTTP code should the API return?",
          "options": [
            {
              "id": "A",
              "text": "403 Forbidden (authenticated, but lacking permission for this resource)"
            },
            {
              "id": "B",
              "text": "401 Unauthorized"
            },
            {
              "id": "C",
              "text": "500 Internal Error"
            },
            {
              "id": "D",
              "text": "201 Created"
            }
          ],
          "hint": "401 is for unauthenticated callers; 403 is for unauthorized access.",
          "explanation": "401 means missing/invalid credentials. 403 means identity is verified, but permissions are denied.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 2)",
          "conceptTag": "HTTP Status Codes"
        },
        {
          "id": "5b4ed5e9-7c3d-4273-95d4-255b4ce4e6a8",
          "type": "single",
          "prompt": "Build vs Buy: A food delivery app team proposes building a custom global maps engine and SMS telecom routing network from scratch over 6 months. As PM, how do you evaluate?",
          "options": [
            {
              "id": "A",
              "text": "Reject building in-house; buy/integrate established APIs (Google Maps, Twilio) because routing and SMS are commodity infrastructure, and time-to-market is the primary competitive factor"
            },
            {
              "id": "B",
              "text": "Approve it because building in-house always saves money"
            },
            {
              "id": "C",
              "text": "Communicate with drivers via email"
            },
            {
              "id": "D",
              "text": "Build maps in-house but use an API for recipes"
            }
          ],
          "hint": "Differentiate on core value; buy commodity infrastructure.",
          "explanation": "Commodity utilities should be consumed via APIs to maximize engineering velocity on core product differentiators.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 3)",
          "conceptTag": "Build vs Buy"
        },
        {
          "id": "cf890410-4485-4ebb-ba77-18230aa3236d",
          "type": "single",
          "prompt": "Idempotency: When a user clicks 'Pay Now' on a slow cellular connection and retries after a network drop, how do you prevent double-charging?",
          "options": [
            {
              "id": "A",
              "text": "Implement an Idempotency-Key in the request header so the server recognizes retries and returns the original transaction result without double-charging"
            },
            {
              "id": "B",
              "text": "Disable payments on mobile"
            },
            {
              "id": "C",
              "text": "Switch payments to GET requests"
            },
            {
              "id": "D",
              "text": "Ask users to phone customer support"
            }
          ],
          "hint": "Idempotency prevents duplicate state changes.",
          "explanation": "Idempotency keys allow distributed payment gateways to detect duplicate submissions and safely replay the initial result.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 4)",
          "conceptTag": "Payment Idempotency"
        },
        {
          "id": "b12f9441-470a-44f4-9043-7607b6d51343",
          "type": "single",
          "prompt": "REST Semantics: According to REST standards, which HTTP methods must be used for Creating, Completely Replacing, Partially Updating, and Deleting a resource?",
          "options": [
            {
              "id": "A",
              "text": "POST (Create), PUT (Full Replace), PATCH (Partial Update), DELETE (Delete)"
            },
            {
              "id": "B",
              "text": "GET (Create), POST (Replace), PUT (Partial), DROP (Delete)"
            },
            {
              "id": "C",
              "text": "FETCH (Create), UPDATE (Replace), PATCH (Partial), PURGE (Delete)"
            },
            {
              "id": "D",
              "text": "SEND (Create), EDIT (Replace), MODIFY (Partial), REMOVE (Delete)"
            }
          ],
          "hint": "Standard REST HTTP verbs.",
          "explanation": "POST creates, PUT replaces the whole entity, PATCH applies delta fields, and DELETE removes.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 5)",
          "conceptTag": "REST Verbs"
        },
        {
          "id": "b0f74b0b-c78e-4bfe-a69a-3f1fd9c138d6",
          "type": "true_false",
          "prompt": "Safe GET Requests: True or False: A GET request to /api/products/123 should modify product inventory in the database as a side effect.",
          "options": [
            {
              "id": "A",
              "text": "False"
            },
            {
              "id": "B",
              "text": "True"
            }
          ],
          "hint": "GET must be safe and idempotent.",
          "explanation": "HTTP GET requests must be read-only with no side effects because web crawlers and caches invoke GET requests automatically.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 6)",
          "conceptTag": "HTTP Safety"
        },
        {
          "id": "042bf760-6138-4053-8109-d53275184159",
          "type": "single",
          "prompt": "Over-fetching in Mobile: A mobile team complains that fetching a user screen requires 6 separate REST API calls, causing lag. What alternative architecture solves this?",
          "options": [
            {
              "id": "A",
              "text": "GraphQL (allows client to request the exact nested fields required in a single round-trip)"
            },
            {
              "id": "B",
              "text": "SOAP XML"
            },
            {
              "id": "C",
              "text": "FTP file sync"
            },
            {
              "id": "D",
              "text": "Telnet sockets"
            }
          ],
          "hint": "Client-specified schemas eliminate over/under-fetching.",
          "explanation": "GraphQL allows mobile clients to declare exact data shapes in a single query, saving bandwidth and round-trips.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 7)",
          "conceptTag": "GraphQL vs REST"
        },
        {
          "id": "29eca62b-c617-47a0-8bf5-2e93ea6ea54f",
          "type": "single",
          "prompt": "Token Bucket Rate Limiting: Why is the Token Bucket algorithm preferred over a Fixed Window Counter for public API rate limiting?",
          "options": [
            {
              "id": "A",
              "text": "It accommodates natural short bursts of traffic while enforcing a smooth sustained rate limit, preventing the 'edge of window' traffic spike exploit"
            },
            {
              "id": "B",
              "text": "It bans users permanently after 3 calls"
            },
            {
              "id": "C",
              "text": "It converts JSON into binary XML"
            },
            {
              "id": "D",
              "text": "It eliminates the need for servers"
            }
          ],
          "hint": "Handles bursty real-world user activity.",
          "explanation": "Token bucket allows temporary bursts up to bucket capacity while refilling at a steady rate, smoothing traffic.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 8)",
          "conceptTag": "Rate Limiting"
        },
        {
          "id": "6ded8133-8e78-45fe-8d13-04f4977cd4ec",
          "type": "single",
          "prompt": "API Versioning Strategy: Your API has breaking changes in the user profile payload. How do you protect legacy mobile app versions?",
          "options": [
            {
              "id": "A",
              "text": "Introduce URI versioning (/api/v2/users) or header versioning, maintaining /v1/ until deprecated app versions drop below acceptable thresholds"
            },
            {
              "id": "B",
              "text": "Immediately overwrite /api/users and crash older apps"
            },
            {
              "id": "C",
              "text": "Send SMS to all users telling them not to open the app"
            },
            {
              "id": "D",
              "text": "Return 503 on all endpoints"
            }
          ],
          "hint": "Never break active client apps in production.",
          "explanation": "Mobile apps cannot be forcefully updated on all devices instantly; breaking changes require versioned routes.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 9)",
          "conceptTag": "API Lifecycle"
        },
        {
          "id": "e266fcff-6f5b-4e93-89e3-e1021b4b98c4",
          "type": "single",
          "prompt": "API Security: Which of the following is an OWASP critical security vulnerability in API design?",
          "options": [
            {
              "id": "A",
              "text": "Broken Object Level Authorization (BOLA), where an API endpoint exposes records by ID without checking if the requester owns that record"
            },
            {
              "id": "B",
              "text": "Using HTTPS encryption"
            },
            {
              "id": "C",
              "text": "Returning JSON responses"
            },
            {
              "id": "D",
              "text": "Adding pagination to list endpoints"
            }
          ],
          "hint": "BOLA is the #1 API vulnerability.",
          "explanation": "BOLA (or IDOR) allows authenticated users to access other customers' private data simply by altering an ID parameter in the URL.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 10)",
          "conceptTag": "API Security"
        }
      ]
    },
    {
      "id": "7f17c612-a2bb-4569-85b5-2ade72d5e5c9",
      "materialId": "pm2-day2",
      "title": "[Easy] Set 2: HTTP Error Codes & Production Diagnostics (4xx, 5xx)",
      "difficulty": "easy",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "1893a8e4-7aaf-4d9a-a982-770905f91019",
          "type": "single",
          "prompt": "HTTP 502 Bad Gateway: A frontend user sees HTTP 502 Bad Gateway. What does this error code indicate?",
          "options": [
            {
              "id": "A",
              "text": "The reverse proxy (e.g. Nginx or Cloudflare) received an invalid response or connection drop from the upstream application server"
            },
            {
              "id": "B",
              "text": "The user's credit card was declined"
            },
            {
              "id": "C",
              "text": "The user's password was wrong"
            },
            {
              "id": "D",
              "text": "The browser is out of memory"
            }
          ],
          "hint": "Upstream server failure behind proxy.",
          "explanation": "502 indicates that an edge proxy or load balancer reached out to the backend application, but the backend dropped or failed the socket.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 11)",
          "conceptTag": "HTTP 5xx Errors"
        },
        {
          "id": "236fdeda-efa4-4a41-9a2f-582df3df0869",
          "type": "single",
          "prompt": "HTTP 504 Gateway Timeout: What is the root cause of an HTTP 504 Gateway Timeout error?",
          "options": [
            {
              "id": "A",
              "text": "The reverse proxy waited for the backend application server to respond, but the backend took longer than the configured timeout threshold"
            },
            {
              "id": "B",
              "text": "The client browser closed the tab"
            },
            {
              "id": "C",
              "text": "The DNS domain expired"
            },
            {
              "id": "D",
              "text": "The user was logged out"
            }
          ],
          "hint": "Backend took too long to finish processing.",
          "explanation": "504 indicates that upstream processing (often slow SQL queries or hung worker threads) exceeded the gateway's timeout window.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 12)",
          "conceptTag": "HTTP 5xx Errors"
        },
        {
          "id": "dcbc1432-af8e-455d-bc61-a4fa5f5c8385",
          "type": "single",
          "prompt": "HTTP 409 Conflict: When should an API return HTTP 409 Conflict?",
          "options": [
            {
              "id": "A",
              "text": "When a client tries to register an account using an email that already exists in the database, violating a uniqueness constraint"
            },
            {
              "id": "B",
              "text": "When the server hard drive is full"
            },
            {
              "id": "C",
              "text": "When the user forgets their password"
            },
            {
              "id": "D",
              "text": "When the payment gateway is offline"
            }
          ],
          "hint": "Resource state conflict.",
          "explanation": "409 Conflict indicates that the request cannot be completed because it contradicts the current state of the target resource (e.g. duplicate key).",
          "sourceRef": "Day 2 APIs & Integrations (Topic 13)",
          "conceptTag": "HTTP 4xx Errors"
        },
        {
          "id": "98c5c1a0-f3cd-4f11-a0df-980c7988d857",
          "type": "single",
          "prompt": "HTTP 204 No Content: When is an HTTP 204 No Content response code standard practice?",
          "options": [
            {
              "id": "A",
              "text": "When an action succeeds (such as DELETE /items/123) and the server has no response body to return to the client"
            },
            {
              "id": "B",
              "text": "When the server crashed and lost the data"
            },
            {
              "id": "C",
              "text": "When the user has an empty shopping cart"
            },
            {
              "id": "D",
              "text": "When the database is empty"
            }
          ],
          "hint": "Successful action with empty payload.",
          "explanation": "204 signifies that the server successfully executed the request but has no payload bytes to send back in the body.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 14)",
          "conceptTag": "HTTP 2xx Status"
        },
        {
          "id": "ed8e652e-ebe4-4848-a9c2-048c6b666d71",
          "type": "single",
          "prompt": "HTTP 202 Accepted: Why would a video encoding API return HTTP 202 Accepted instead of 200 OK?",
          "options": [
            {
              "id": "A",
              "text": "The request was accepted and queued for asynchronous background processing, but the long-running video encode is not yet complete"
            },
            {
              "id": "B",
              "text": "The video failed security scanning"
            },
            {
              "id": "C",
              "text": "The user needs to pay extra money"
            },
            {
              "id": "D",
              "text": "The browser does not support MP4"
            }
          ],
          "hint": "Queued for async processing.",
          "explanation": "202 informs the client that the payload was valid and enqueued, but final execution will occur asynchronously.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 15)",
          "conceptTag": "HTTP 2xx Status"
        },
        {
          "id": "0de4ef51-a4e5-447d-bc73-06de3df4bf35",
          "type": "single",
          "prompt": "Pagination Design: When designing an API that returns 500,000 product catalog items, why should you use Cursor-based pagination over Offset-based pagination?",
          "options": [
            {
              "id": "A",
              "text": "Cursor pagination prevents duplicate and missed items when new rows are inserted between page fetches, and performs in O(1) time without slow SQL OFFSET scans"
            },
            {
              "id": "B",
              "text": "Cursor pagination downloads all 500,000 items in 1 millisecond"
            },
            {
              "id": "C",
              "text": "Offset pagination is deprecated by the W3C"
            },
            {
              "id": "D",
              "text": "Cursor pagination requires no database"
            }
          ],
          "hint": "Consistent performance on dynamic datasets.",
          "explanation": "High offset queries (OFFSET 100000) force databases to scan and discard 100,000 rows. Cursor pagination uses index comparisons for constant-time lookups.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 16)",
          "conceptTag": "API Pagination"
        },
        {
          "id": "f54ca76d-89f6-45a9-ad9c-425c96a3659f",
          "type": "single",
          "prompt": "JWT Structure: What are the three dot-separated components of a JSON Web Token (JWT)?",
          "options": [
            {
              "id": "A",
              "text": "Header (algorithm info), Payload (claims and user data), and Signature (cryptographic hash proving authenticity)"
            },
            {
              "id": "B",
              "text": "Username, Password, and Database Name"
            },
            {
              "id": "C",
              "text": "HTML, CSS, and JavaScript"
            },
            {
              "id": "D",
              "text": "IP Address, MAC Address, and GPS Coordinates"
            }
          ],
          "hint": "Header.Payload.Signature.",
          "explanation": "A JWT consists of base64-encoded Header and Payload, followed by a HMAC or RSA signature verified with a secret key.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 17)",
          "conceptTag": "JWT Architecture"
        },
        {
          "id": "ab3ec606-4c8e-4018-8faa-3dd8aac8441a",
          "type": "single",
          "prompt": "Stateless JWT Trade-off: What is the main architectural challenge when using purely stateless JWT access tokens for user sessions?",
          "options": [
            {
              "id": "A",
              "text": "Immediate token revocation is difficult before expiration without maintaining a centralized token blacklist or checking Redis on every request"
            },
            {
              "id": "B",
              "text": "JWT tokens can only be read on Windows"
            },
            {
              "id": "C",
              "text": "JWT tokens encrypt data so deeply that the server cannot read it"
            },
            {
              "id": "D",
              "text": "JWT tokens can only hold 5 bytes of data"
            }
          ],
          "hint": "Revocation requires blacklist state.",
          "explanation": "Because stateless JWTs are self-validating, instantly revoking a compromised token requires maintaining a stateful revocation blacklist.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 18)",
          "conceptTag": "JWT Trade-offs"
        },
        {
          "id": "e3bf272a-dd13-47c7-8721-1f27b7d74166",
          "type": "single",
          "prompt": "OAuth 2.0 Authorization Code Flow: In the 'Sign in with Google' workflow, why does the client receive an Authorization Code first before exchanging it for an Access Token on the backend?",
          "options": [
            {
              "id": "A",
              "text": "To prevent exposing the sensitive Access Token in the public browser URL bar or browser history, keeping token exchange on the secure backend server"
            },
            {
              "id": "B",
              "text": "To allow Google to download files from the user's laptop"
            },
            {
              "id": "C",
              "text": "To make user login take 10 times longer"
            },
            {
              "id": "D",
              "text": "To format the database"
            }
          ],
          "hint": "Protects token from client-side interception.",
          "explanation": "The Authorization Code flow ensures the secret Access Token is exchanged directly server-to-server with the client secret, avoiding browser leaks.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 19)",
          "conceptTag": "OAuth 2.0"
        },
        {
          "id": "827f571d-9d93-4e00-9c24-766a6ebcfea7",
          "type": "single",
          "prompt": "API Response Envelopes: Why is it best practice for error responses to return structured JSON (e.g. `{ error: { code: 'INVALID_ZIP', message: 'Zip code must be 5 digits' } }`) rather than a raw HTML stack trace?",
          "options": [
            {
              "id": "A",
              "text": "It allows client applications to programmatically parse error codes and render localized user-friendly error banners without crashing the app"
            },
            {
              "id": "B",
              "text": "Raw stack traces make computers run slower"
            },
            {
              "id": "C",
              "text": "HTML is illegal in REST APIs"
            },
            {
              "id": "D",
              "text": "It eliminates the need for quality assurance"
            }
          ],
          "hint": "Programmatic error handling.",
          "explanation": "Standardized machine-readable error schemas allow frontend and mobile clients to display specific localized guidance rather than failing silently.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 20)",
          "conceptTag": "API Error Design"
        }
      ]
    },
    {
      "id": "12bc7b60-8741-4715-b8d1-8782e98d9bde",
      "materialId": "pm2-day2",
      "title": "[Medium] Set 3: Webhooks vs Polling & Idempotency in Payments",
      "difficulty": "medium",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "5b04c231-7d08-42d6-887f-4feabc86046f",
          "type": "single",
          "prompt": "gRPC vs REST: When designing high-frequency, low-latency microservice-to-microservice communication, why do engineering teams choose gRPC over REST/JSON?",
          "options": [
            {
              "id": "A",
              "text": "gRPC uses Protocol Buffers (compact binary serialization) over HTTP/2, achieving 7-10x higher throughput and lower serialization CPU overhead than REST/JSON"
            },
            {
              "id": "B",
              "text": "gRPC doesn't require network connections"
            },
            {
              "id": "C",
              "text": "REST cannot communicate between microservices"
            },
            {
              "id": "D",
              "text": "gRPC works only on mobile phones"
            }
          ],
          "hint": "Compact binary over HTTP/2.",
          "explanation": "Protocol Buffers serialize structured data into compact binary bytes rather than verbose JSON strings, drastically reducing CPU and network transfer overhead.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 21)",
          "conceptTag": "gRPC vs REST"
        },
        {
          "id": "7cd58372-e063-45f3-a0ef-e4d284a6fb54",
          "type": "single",
          "prompt": "Webhook Signature Verification: When receiving webhooks from Stripe or PayPal, why MUST your backend verify the `Stripe-Signature` cryptographic header?",
          "options": [
            {
              "id": "A",
              "text": "To prove that the webhook payload actually originated from Stripe and was not spoofed or intercepted by an attacker pretending to complete a payment"
            },
            {
              "id": "B",
              "text": "To encrypt the customer's home address"
            },
            {
              "id": "C",
              "text": "To calculate the sales tax automatically"
            },
            {
              "id": "D",
              "text": "To check the user's credit score"
            }
          ],
          "hint": "Prevents forged fake payment webhooks.",
          "explanation": "Signature verification uses an HMAC secret shared between you and the payment provider to guarantee message authenticity and integrity.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 22)",
          "conceptTag": "Webhook Security"
        },
        {
          "id": "8669db3f-cbec-4ee2-b618-b86c633e67b2",
          "type": "single",
          "prompt": "Webhook Retry Handling: If your backend returns HTTP 500 when Stripe delivers a payment webhook, what will a well-architected webhook system do?",
          "options": [
            {
              "id": "A",
              "text": "It will retry delivering the webhook with exponential backoff over the next 24 to 72 hours until receiving an HTTP 200 OK"
            },
            {
              "id": "B",
              "text": "It will cancel the customer's credit card"
            },
            {
              "id": "C",
              "text": "It will delete your Stripe account"
            },
            {
              "id": "D",
              "text": "It will publish your database on Twitter"
            }
          ],
          "hint": "Exponential retry queues.",
          "explanation": "Reliable webhook publishers implement retry schedules with exponential backoff so temporary receiver downtimes do not result in permanently lost events.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 23)",
          "conceptTag": "Webhook Reliability"
        },
        {
          "id": "3ab18b38-b8c6-487e-88fa-915b6f15ed00",
          "type": "single",
          "prompt": "ETag & Conditional Requests: How does the HTTP `ETag` (Entity Tag) and `If-None-Match` header mechanism optimize API performance?",
          "options": [
            {
              "id": "A",
              "text": "If the resource has not changed, the server returns HTTP 304 Not Modified without sending the response body, saving bandwidth and rendering time"
            },
            {
              "id": "B",
              "text": "It converts database tables into CSV files"
            },
            {
              "id": "C",
              "text": "It renames the user account"
            },
            {
              "id": "D",
              "text": "It automatically charges the user's card"
            }
          ],
          "hint": "HTTP 304 cache validation.",
          "explanation": "ETags represent content hashes. When a client sends an ETag in `If-None-Match`, the server skips sending the duplicate payload if the hash matches.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 24)",
          "conceptTag": "HTTP Caching"
        },
        {
          "id": "6e08dd6a-23fe-4b55-9835-bb617d287b4a",
          "type": "single",
          "prompt": "CORS Preflight (OPTIONS): Why does a browser automatically send an HTTP OPTIONS request before a POST or PUT API request?",
          "options": [
            {
              "id": "A",
              "text": "To ask the destination server for permission (allowed methods, headers, and credentials) before sending potentially sensitive or state-changing cross-origin data"
            },
            {
              "id": "B",
              "text": "To download the server's operating system"
            },
            {
              "id": "C",
              "text": "To verify that the browser is running Google Chrome"
            },
            {
              "id": "D",
              "text": "To format the database"
            }
          ],
          "hint": "Pre-flight safety check.",
          "explanation": "Browsers send pre-flight OPTIONS requests for cross-origin calls with custom headers or non-simple methods to verify backend CORS authorization.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 25)",
          "conceptTag": "CORS Preflight"
        },
        {
          "id": "8b9f73a4-0058-4660-8948-877d6970711b",
          "type": "single",
          "prompt": "API Documentation (OpenAPI / Swagger): Why is maintaining an automated OpenAPI specification critical for engineering teams?",
          "options": [
            {
              "id": "A",
              "text": "It serves as a single source of truth for generating interactive API documentation, client SDK libraries, and automated contract testing suites"
            },
            {
              "id": "B",
              "text": "It automatically fixes syntax errors in Python code"
            },
            {
              "id": "C",
              "text": "It replaces the need to write backend code"
            },
            {
              "id": "D",
              "text": "It files patent applications automatically"
            }
          ],
          "hint": "Automates docs and client SDKs.",
          "explanation": "OpenAPI specifications enable automated interactive test explorers (Swagger UI), mock servers, and automated SDK code generation for iOS and Android.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 26)",
          "conceptTag": "API Standards"
        },
        {
          "id": "adfc9118-8d8f-4d57-a920-5a2cd1aa5600",
          "type": "single",
          "prompt": "Payload Size Limits: If a mobile user tries to upload a 50MB video to an API endpoint configured with a 5MB limit, what HTTP error status must the server return?",
          "options": [
            {
              "id": "A",
              "text": "HTTP 413 Payload Too Large"
            },
            {
              "id": "B",
              "text": "HTTP 404 Not Found"
            },
            {
              "id": "C",
              "text": "HTTP 500 Internal Server Error"
            },
            {
              "id": "D",
              "text": "HTTP 200 OK"
            }
          ],
          "hint": "413 Payload Too Large.",
          "explanation": "HTTP 413 informs the client immediately that the request entity exceeds the server's configured storage or body size limit.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 27)",
          "conceptTag": "HTTP Status Codes"
        },
        {
          "id": "c71d4139-26ea-4df9-8dd3-334eea5995be",
          "type": "single",
          "prompt": "Exponential Backoff with Jitter: When calling an external API that is experiencing high latency or rate limits, why is 'randomized jitter' added to exponential retry backoffs?",
          "options": [
            {
              "id": "A",
              "text": "To prevent all retrying clients from hammering the recovering server in identical synchronized waves ('thundering herd problem')"
            },
            {
              "id": "B",
              "text": "To make requests run at random speeds"
            },
            {
              "id": "C",
              "text": "To hide the API key from hackers"
            },
            {
              "id": "D",
              "text": "To bypass paying API subscription fees"
            }
          ],
          "hint": "Prevents synchronized thundering herds.",
          "explanation": "Adding small random time offsets (jitter) to retry schedules desynchronizes traffic waves, allowing stressed upstream servers to recover.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 28)",
          "conceptTag": "Resilience Architecture"
        },
        {
          "id": "35cbc153-7172-4081-a2c4-6ff7d589a9a2",
          "type": "single",
          "prompt": "GraphQL N+1 Problem: What performance defect is known as the 'N+1 Query Problem' in GraphQL API development?",
          "options": [
            {
              "id": "A",
              "text": "When fetching a list of N users causes the backend to execute 1 query for the list and N individual database queries for each user's related data (e.g. orders)"
            },
            {
              "id": "B",
              "text": "When an API costs $1 more every month"
            },
            {
              "id": "C",
              "text": "When an API requires N+1 servers to run"
            },
            {
              "id": "D",
              "text": "When an API only works on N+1 devices"
            }
          ],
          "hint": "Inefficient relational loading without batching.",
          "explanation": "Without batching utilities like DataLoader, naive GraphQL resolvers execute individual database lookups for each item in a list.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 29)",
          "conceptTag": "GraphQL Performance"
        },
        {
          "id": "2e89ce34-f23b-4186-b9f1-0e68bdf2fd6c",
          "type": "single",
          "prompt": "GraphQL DataLoader Solution: How does the DataLoader utility resolve the N+1 problem in GraphQL backend resolvers?",
          "options": [
            {
              "id": "A",
              "text": "It batches individual item requests within a single tick of the event loop and fetches them in a single SQL `WHERE id IN (...)` query, caching results in memory"
            },
            {
              "id": "B",
              "text": "It deletes all foreign key constraints from the database"
            },
            {
              "id": "C",
              "text": "It converts SQL queries into flat JSON files"
            },
            {
              "id": "D",
              "text": "It reboots the database server every minute"
            }
          ],
          "hint": "Batches and caches relational lookups.",
          "explanation": "DataLoader consolidates individual ID requests into a single batched SQL query and caches results for the duration of the request.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 30)",
          "conceptTag": "GraphQL Optimization"
        }
      ]
    },
    {
      "id": "a4f7660b-2fda-4970-9a5b-1b547a8e4a0f",
      "materialId": "pm2-day2",
      "title": "[Medium] Set 4: API Security, BOLA/IDOR, Tokens & OAuth 2.0",
      "difficulty": "medium",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "89ace164-478d-4e09-89ef-42be88a3174c",
          "type": "single",
          "prompt": "API Deprecation Headers: When sun-setting an old version of an API endpoint, what standard HTTP response headers alert consuming developers?",
          "options": [
            {
              "id": "A",
              "text": "`Deprecation: true` and `Sunset: <date>` headers indicating when the endpoint will be permanently terminated"
            },
            {
              "id": "B",
              "text": "`Delete-Me: yes` header"
            },
            {
              "id": "C",
              "text": "`Error: 100` header"
            },
            {
              "id": "D",
              "text": "`Upgrade-To-Premium: true` header"
            }
          ],
          "hint": "Standard RFC deprecation headers.",
          "explanation": "RFC 8594 establishes `Deprecation` and `Sunset` headers to broadcast machine-readable termination deadlines to consuming engineering teams.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 31)",
          "conceptTag": "API Lifecycle"
        },
        {
          "id": "1816e8b4-5a75-4293-a881-1b33df92a36a",
          "type": "single",
          "prompt": "Webhook Security (Replay Attacks): How does an API consumer protect its webhook receiver from replay attacks where an attacker re-sends a captured valid webhook payload?",
          "options": [
            {
              "id": "A",
              "text": "Include a timestamp in the signed webhook payload and reject any webhook where the timestamp is older than 5 minutes, checking processed event IDs for duplicates"
            },
            {
              "id": "B",
              "text": "Change the company domain name daily"
            },
            {
              "id": "C",
              "text": "Use plain HTTP instead of HTTPS"
            },
            {
              "id": "D",
              "text": "Disable webhooks completely"
            }
          ],
          "hint": "Timestamp verification + idempotency checks.",
          "explanation": "Validating the signature timestamp and keeping a log of recently processed event UUIDs guarantees captured packets cannot be replayed.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 32)",
          "conceptTag": "Webhook Security"
        },
        {
          "id": "7b6dd238-51ed-4d4d-ab16-ae78a1bddf11",
          "type": "single",
          "prompt": "REST HATEOAS: What does HATEOAS (Hypermedia As The Engine Of Application State) recommend for REST API responses?",
          "options": [
            {
              "id": "A",
              "text": "Returning hypermedia link relations (`_links`) in response bodies that guide clients to the next allowable state transitions and related endpoints"
            },
            {
              "id": "B",
              "text": "Making all web pages run in HTML without JavaScript"
            },
            {
              "id": "C",
              "text": "Replacing JSON with pure text strings"
            },
            {
              "id": "D",
              "text": "Requiring user passwords in every JSON field"
            }
          ],
          "hint": "Discoverable hypermedia links.",
          "explanation": "HATEOAS embeds contextual navigation links within JSON objects (e.g. `{ '_links': { 'cancel': '/orders/1/cancel' } }`), guiding client state navigation.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 33)",
          "conceptTag": "REST Architecture"
        },
        {
          "id": "d4d1855f-7cde-4cb7-a8a7-d67250263ecc",
          "type": "single",
          "prompt": "Client Secret in SPAs: Why must a Single Page Application (React/Vue running in a browser) NEVER store an OAuth client secret?",
          "options": [
            {
              "id": "A",
              "text": "Because client-side JavaScript source code and memory can be trivially inspected by anyone using browser developer tools, leaking the secret globally"
            },
            {
              "id": "B",
              "text": "Because React doesn't support strings longer than 10 characters"
            },
            {
              "id": "C",
              "text": "Because client secrets can only be stored on mainframes"
            },
            {
              "id": "D",
              "text": "Because Google Chrome deletes secrets automatically"
            }
          ],
          "hint": "Browsers are untrusted public clients.",
          "explanation": "Single Page Applications cannot protect secrets. OAuth 2.0 PKCE (Proof Key for Code Exchange) must be used instead of client secrets.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 34)",
          "conceptTag": "OAuth Security"
        },
        {
          "id": "ffcbe53c-3bb5-4ff7-bae7-223c0f93d514",
          "type": "single",
          "prompt": "OAuth 2.0 PKCE: What does PKCE (Proof Key for Code Exchange) protect against in mobile and single-page apps?",
          "options": [
            {
              "id": "A",
              "text": "Authorization code interception attacks on public clients that lack secure backend secret storage"
            },
            {
              "id": "B",
              "text": "SQL injection on database servers"
            },
            {
              "id": "C",
              "text": "Physical hardware theft in data centers"
            },
            {
              "id": "D",
              "text": "Slow internet connections"
            }
          ],
          "hint": "Protects public clients from auth code interception.",
          "explanation": "PKCE generates dynamic cryptographic verifier/challenge pairs on the device, ensuring only the exact client instance that started the login can exchange the code.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 35)",
          "conceptTag": "OAuth Security"
        },
        {
          "id": "90f8bb24-c551-43ff-8abe-50411331e9f1",
          "type": "single",
          "prompt": "Bulk Operations API Design: When designing an API allowing users to update 1,000 inventory items at once, how should the endpoint be structured?",
          "options": [
            {
              "id": "A",
              "text": "Accept an array of update objects in a single POST /api/inventory/batch endpoint, returning individual status results for each item in a unified response"
            },
            {
              "id": "B",
              "text": "Force the client to make 1,000 separate concurrent HTTP requests"
            },
            {
              "id": "C",
              "text": "Download the database to the client and re-upload it"
            },
            {
              "id": "D",
              "text": "Send 1,000 emails to the warehouse"
            }
          ],
          "hint": "Batched transactional endpoints.",
          "explanation": "Batch endpoints minimize network handshakes and enable transactional atomicity across bulk operations while returning granular item-by-item status.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 36)",
          "conceptTag": "API Design Patterns"
        },
        {
          "id": "5ce88f2f-cd4e-4779-b89a-cb7f5a9675c9",
          "type": "single",
          "prompt": "API Throttling Tiers: Why do SaaS companies implement tiered API rate limits (e.g. Free: 60 rpm, Enterprise: 5,000 rpm)?",
          "options": [
            {
              "id": "A",
              "text": "To protect multi-tenant infrastructure from noisy neighbors and monetize high-volume enterprise API usage"
            },
            {
              "id": "B",
              "text": "Because enterprise servers use different internet cables"
            },
            {
              "id": "C",
              "text": "To encourage users to delete their accounts"
            },
            {
              "id": "D",
              "text": "Because Free accounts are not allowed to use JSON"
            }
          ],
          "hint": "Resource allocation & monetization.",
          "explanation": "Tiered rate limiting protects multi-tenant backends from resource starvation while creating clear monetization paths for heavy API usage.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 37)",
          "conceptTag": "API Product Strategy"
        },
        {
          "id": "29a24740-b3af-48c8-a054-12013bc6c253",
          "type": "single",
          "prompt": "Circuit Breaker Half-Open State: In the Circuit Breaker pattern, what occurs during the 'Half-Open' state?",
          "options": [
            {
              "id": "A",
              "text": "The system allows a limited trial number of probe requests through to the failing service; if they succeed, it closes the circuit and restores normal traffic"
            },
            {
              "id": "B",
              "text": "The system shuts down completely"
            },
            {
              "id": "C",
              "text": "The database is converted to read-only mode forever"
            },
            {
              "id": "D",
              "text": "The user is forced to change their password"
            }
          ],
          "hint": "Testing recovery safely.",
          "explanation": "Half-Open acts as a cautious probe state, verifying whether the recovering downstream dependency is truly healthy before resuming 100% traffic.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 38)",
          "conceptTag": "System Resilience"
        },
        {
          "id": "25ae5535-9bc2-4f8b-9fb2-ee62fd7f1e0e",
          "type": "single",
          "prompt": "HTTP 422 Unprocessable Entity: When is HTTP 422 returned instead of HTTP 400 Bad Request?",
          "options": [
            {
              "id": "A",
              "text": "When the incoming JSON syntax is well-formed, but the semantic business rules fail (e.g. end_date is earlier than start_date)"
            },
            {
              "id": "B",
              "text": "When the JSON payload has invalid curly brackets"
            },
            {
              "id": "C",
              "text": "When the server hard drive has corrupted blocks"
            },
            {
              "id": "D",
              "text": "When the API key has expired"
            }
          ],
          "hint": "Semantic validation failure.",
          "explanation": "400 indicates syntactic malformation (unparseable JSON). 422 indicates valid syntax that violates business logic validation rules.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 39)",
          "conceptTag": "HTTP Status Codes"
        },
        {
          "id": "d742214b-e6cd-424e-a4bb-6b5b23036d3d",
          "type": "single",
          "prompt": "API Mock Servers: Why should product teams create Mock API servers (e.g. Prism or MSW) during early sprint development?",
          "options": [
            {
              "id": "A",
              "text": "To enable frontend engineers to build and test UI features against agreed API schemas in parallel, before the backend engineering team finishes writing code"
            },
            {
              "id": "B",
              "text": "To replace real backend databases permanently"
            },
            {
              "id": "C",
              "text": "To prevent developers from testing code"
            },
            {
              "id": "D",
              "text": "To bypass unit testing requirements"
            }
          ],
          "hint": "Enables parallel frontend/backend velocity.",
          "explanation": "Mock servers unblock frontend velocity by simulating real API responses based on OpenAPI contracts before backend endpoints are built.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 40)",
          "conceptTag": "API-First Development"
        }
      ]
    },
    {
      "id": "c612ca2d-f17c-4729-9aa1-dc92534f96cb",
      "materialId": "pm2-day2",
      "title": "[Hard] Set 5: Rate Limiting Algorithms, GraphQL, gRPC & Advanced Patterns",
      "difficulty": "hard",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "1431e9e7-b747-46fe-9990-ae6001902d9b",
          "type": "single",
          "prompt": "API Gateway Transformation: How does an API Gateway perform 'Payload Transformation'?",
          "options": [
            {
              "id": "A",
              "text": "It transforms legacy internal XML or SOAP backend payloads into modern JSON for external client applications, decoupling legacy systems"
            },
            {
              "id": "B",
              "text": "It deletes half the JSON data"
            },
            {
              "id": "C",
              "text": "It converts text into audio"
            },
            {
              "id": "D",
              "text": "It translates English into Spanish"
            }
          ],
          "hint": "Bridges legacy internal protocols to external JSON.",
          "explanation": "API Gateways can translate internal legacy backend payloads (SOAP/XML) into clean REST/JSON contracts without refactoring internal mainframes.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 41)",
          "conceptTag": "API Gateway"
        },
        {
          "id": "464894dc-4cbc-463a-8448-91c93fde970a",
          "type": "single",
          "prompt": "Server-Sent Events (SSE) vs WebSockets: When is SSE preferred over WebSockets for real-time live feeds (e.g. stock tickers or LLM token streaming)?",
          "options": [
            {
              "id": "A",
              "text": "When communication is strictly unidirectional (server pushing text/tokens to client) over standard HTTP without requiring a custom full-duplex TCP protocol"
            },
            {
              "id": "B",
              "text": "When the client needs to stream video to the server"
            },
            {
              "id": "C",
              "text": "When the server has no internet connection"
            },
            {
              "id": "D",
              "text": "When the app only runs on Android"
            }
          ],
          "hint": "Unidirectional text/token streaming over HTTP.",
          "explanation": "Server-Sent Events run over standard HTTP/HTTPS, reconnect automatically, and are lightweight for single-direction server-to-client streaming like ChatGPT tokens.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 42)",
          "conceptTag": "Server-Sent Events"
        },
        {
          "id": "623f1d15-84e9-4167-ad8f-c747fd6902d1",
          "type": "single",
          "prompt": "BOLA / IDOR Defense: What backend engineering check completely prevents Broken Object Level Authorization (IDOR) on an endpoint like `GET /documents/8472`?",
          "options": [
            {
              "id": "A",
              "text": "Always verifying that `document.organization_id == current_authenticated_user.organization_id` in the database query before returning data"
            },
            {
              "id": "B",
              "text": "Hiding the document button in frontend CSS"
            },
            {
              "id": "C",
              "text": "Using a longer URL string"
            },
            {
              "id": "D",
              "text": "Renaming the API endpoint"
            }
          ],
          "hint": "Tenant and ownership verification in query.",
          "explanation": "Preventing BOLA requires validating that the queried entity belongs to the authenticated user's organization directly within the SQL WHERE clause.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 43)",
          "conceptTag": "API Security BOLA"
        },
        {
          "id": "53c70b24-a2b3-4ffd-83ee-f5ec38d3ddea",
          "type": "single",
          "prompt": "API Rate Limit Headers: What standard HTTP response headers tell consuming client applications their exact rate limit status?",
          "options": [
            {
              "id": "A",
              "text": "`X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset` (or standard `RateLimit-*` headers)"
            },
            {
              "id": "B",
              "text": "`User-Status: Good`"
            },
            {
              "id": "C",
              "text": "`Speed: Fast`"
            },
            {
              "id": "D",
              "text": "`Billing-Cost: Free`"
            }
          ],
          "hint": "Standard rate limit telemetry headers.",
          "explanation": "These headers inform clients of their quota ceiling, how many calls remain in the window, and epoch seconds until quota renewal.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 44)",
          "conceptTag": "Rate Limiting Standards"
        },
        {
          "id": "06f2c466-6d68-451b-9c1f-4bf4ca70a019",
          "type": "single",
          "prompt": "CORS with Credentials (`Access-Control-Allow-Credentials`): Why does a browser throw a CORS error if a server responds with `Access-Control-Allow-Origin: *` while the client sets `credentials: 'include'`?",
          "options": [
            {
              "id": "A",
              "text": "The browser security standard strictly prohibits wildcard `*` origins when requests include sensitive cookies or authorization tokens; origin must be explicitly named"
            },
            {
              "id": "B",
              "text": "Wildcards only work on weekends"
            },
            {
              "id": "C",
              "text": "The client is using an old browser"
            },
            {
              "id": "D",
              "text": "Cookies are not allowed in APIs"
            }
          ],
          "hint": "Wildcard forbidden with credentials.",
          "explanation": "Browsers mandate that if requests carry sensitive session cookies, the backend must return the exact matching origin domain rather than a wildcard `*`.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 45)",
          "conceptTag": "CORS & Auth"
        },
        {
          "id": "95a279c7-e49a-4c55-84ac-da0d437ac38b",
          "type": "single",
          "prompt": "API Contract Testing (Pact): What does Consumer-Driven Contract Testing verify in a microservices ecosystem?",
          "options": [
            {
              "id": "A",
              "text": "It verifies that upstream API providers do not make breaking schema changes that violate the explicit expectations of consuming frontend or mobile clients"
            },
            {
              "id": "B",
              "text": "It checks if developers paid their taxes"
            },
            {
              "id": "C",
              "text": "It verifies employee contracts"
            },
            {
              "id": "D",
              "text": "It checks internet cables"
            }
          ],
          "hint": "Guarantees cross-service schema compatibility.",
          "explanation": "Contract testing prevents teams from accidentally deploying breaking API changes that violate downstream client schemas.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 46)",
          "conceptTag": "Contract Testing"
        },
        {
          "id": "d2f5d09d-4d50-48d4-b8f2-8324f1a588db",
          "type": "single",
          "prompt": "API Payload Compression Negotiation: How does an API client request that the server return Gzip or Brotli compressed JSON?",
          "options": [
            {
              "id": "A",
              "text": "By sending the `Accept-Encoding: gzip, br` HTTP request header"
            },
            {
              "id": "B",
              "text": "By writing code in lowercase"
            },
            {
              "id": "C",
              "text": "By using a zip file in the URL"
            },
            {
              "id": "D",
              "text": "By clicking the browser refresh button"
            }
          ],
          "hint": "Accept-Encoding negotiation.",
          "explanation": "The `Accept-Encoding` header signals client decompression support, allowing servers to compress JSON responses and shrink bandwidth by 70%.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 47)",
          "conceptTag": "HTTP Compression"
        },
        {
          "id": "4b30a8e3-9a95-4402-8fc7-c54c805c05fd",
          "type": "single",
          "prompt": "Long Polling: In older systems lacking WebSockets, how does HTTP Long Polling simulate real-time updates?",
          "options": [
            {
              "id": "A",
              "text": "The client sends an HTTP request, and the server hangs open the connection without responding until fresh data arrives or a timeout occurs"
            },
            {
              "id": "B",
              "text": "The client sends 100 requests per millisecond"
            },
            {
              "id": "C",
              "text": "The server reboots every 10 seconds"
            },
            {
              "id": "D",
              "text": "The user must press F5 continuously"
            }
          ],
          "hint": "Hangs connection open until event fires.",
          "explanation": "Long polling holds open the HTTP socket until the server has new data, immediately returning the payload and prompting the client to reopen a new poll socket.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 48)",
          "conceptTag": "Real-time Legacy Patterns"
        },
        {
          "id": "5a953017-7628-4cc8-84b4-22b8fe49960c",
          "type": "single",
          "prompt": "API Gateway Caching: When is it safe and effective for an API Gateway to cache GET request responses for 60 seconds?",
          "options": [
            {
              "id": "A",
              "text": "For public, non-personalized endpoints with high read volume (e.g. public exchange rates or trending news headlines)"
            },
            {
              "id": "B",
              "text": "For personal banking account balances"
            },
            {
              "id": "C",
              "text": "For shopping cart checkout balances"
            },
            {
              "id": "D",
              "text": "For user password change endpoints"
            }
          ],
          "hint": "Public, non-personalized static data.",
          "explanation": "Edge caching on API gateways absorbs massive read spikes for public data, but must NEVER be used on private or user-personalized endpoints.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 49)",
          "conceptTag": "API Gateway Caching"
        },
        {
          "id": "6a0ed75e-1d5e-4af8-aab9-1c48ae21b3b6",
          "type": "single",
          "prompt": "API Security - SQL Injection (SQLi): What is the single most effective coding practice to completely eliminate SQL Injection in API backends?",
          "options": [
            {
              "id": "A",
              "text": "Using Parameterized Queries (Prepared Statements) or an ORM so user inputs are treated strictly as data literals and never concatenated into executable SQL strings"
            },
            {
              "id": "B",
              "text": "Writing SQL queries in uppercase"
            },
            {
              "id": "C",
              "text": "Encrypting database passwords"
            },
            {
              "id": "D",
              "text": "Validating that users have long passwords"
            }
          ],
          "hint": "Parameterized queries eliminate SQLi.",
          "explanation": "Prepared statements separate SQL syntax from untrusted user input, making SQL injection impossible regardless of user input characters.",
          "sourceRef": "Day 2 APIs & Integrations (Topic 50)",
          "conceptTag": "API Security SQLi"
        }
      ]
    },
    {
      "id": "9160e66b-901b-437f-b5b4-191744c32381",
      "materialId": "pm2-day3",
      "title": "[Easy] Set 1: What is a Database, SQL vs NoSQL Selection",
      "difficulty": "easy",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "1f8a9aaa-6ef4-4a4d-9a7b-d232594065f1",
          "type": "single",
          "prompt": "OLTP vs OLAP Bottleneck: Every Monday at 9 AM, leadership runs heavy analytics retention dashboards, crashing live checkout transactions with 504 timeouts. What is the root fix?",
          "options": [
            {
              "id": "A",
              "text": "The analytics query is locking live production OLTP tables; offload heavy BI reporting to an OLAP Data Warehouse (Snowflake/BigQuery) via ETL pipelines"
            },
            {
              "id": "B",
              "text": "Delete the primary key"
            },
            {
              "id": "C",
              "text": "Disable HTTPS"
            },
            {
              "id": "D",
              "text": "Convert dashboard to mobile app"
            }
          ],
          "hint": "Separate live transactions from heavy analytics.",
          "explanation": "Transactional databases (OLTP) are optimized for single-row reads/writes. Analytical queries (OLAP) lock tables and must run on dedicated warehouses.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 1)",
          "conceptTag": "OLTP vs OLAP"
        },
        {
          "id": "e3071334-7796-4ecd-afee-34c3d0552dcb",
          "type": "single",
          "prompt": "Address Inconsistency: A customer updates their shipping address, but warehouse staff still sees the old address on an existing unshipped order. What database design flaw caused this?",
          "options": [
            {
              "id": "A",
              "text": "A denormalized schema where customer address was duplicated across tables without a single source of truth or clear order-snapshot design"
            },
            {
              "id": "B",
              "text": "Using PostgreSQL instead of MongoDB"
            },
            {
              "id": "C",
              "text": "Too many foreign keys"
            },
            {
              "id": "D",
              "text": "Server in-memory cache was full"
            }
          ],
          "hint": "Update anomaly from denormalization.",
          "explanation": "Without normalization or explicit point-in-time snapshot design, duplicated address strings cause update anomalies across orders.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 2)",
          "conceptTag": "Normalization & Schema"
        },
        {
          "id": "0286ed0b-8f87-41e0-a761-e1a1d61b6486",
          "type": "single",
          "prompt": "Fintech Database Choice: When building a core banking ledger requiring double-entry balance transfers and strict zero-loss audit trails, why require a Relational (SQL) database?",
          "options": [
            {
              "id": "A",
              "text": "Strict ACID transactional compliance guarantees atomicity across balance updates and foreign key referential integrity prevents orphaned accounts"
            },
            {
              "id": "B",
              "text": "SQL runs without electricity"
            },
            {
              "id": "C",
              "text": "NoSQL cannot store numbers"
            },
            {
              "id": "D",
              "text": "SQL databases are always completely free"
            }
          ],
          "hint": "ACID guarantees prevent corrupted money transfers.",
          "explanation": "Relational databases enforce atomic transactions, strict schemas, and referential constraints necessary for financial ledgers.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 3)",
          "conceptTag": "SQL vs NoSQL"
        },
        {
          "id": "a50c480d-f2bc-4bf8-9267-29e3bc17558f",
          "type": "single",
          "prompt": "Slow Queries: Search queries on a 10-million row catalog table slowed from 15ms to 3.8s. EXPLAIN ANALYZE shows 'Seq Scan'. What is the fix?",
          "options": [
            {
              "id": "A",
              "text": "Add a B-Tree Index on the searched columns so lookups execute in logarithmic time instead of scanning every disk block"
            },
            {
              "id": "B",
              "text": "Delete 9 million rows"
            },
            {
              "id": "C",
              "text": "Change the port from 5432 to 80"
            },
            {
              "id": "D",
              "text": "Convert numbers to strings"
            }
          ],
          "hint": "B-Tree indexes avoid full table scans.",
          "explanation": "Sequential scans read every page on disk. Indexes allow the database engine to jump straight to matching records via binary tree lookups.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 4)",
          "conceptTag": "Indexes & Performance"
        },
        {
          "id": "21445f88-ea06-42c4-a975-f930c25fdad6",
          "type": "single",
          "prompt": "ACID Atomicity: What does 'Atomicity' guarantee during a $100 funds transfer from Account A to Account B?",
          "options": [
            {
              "id": "A",
              "text": "Both the debit from Account A and the credit to Account B succeed together, or if an error occurs, the entire transaction rolls back completely"
            },
            {
              "id": "B",
              "text": "Transactions execute in sub-nanosecond clock cycles"
            },
            {
              "id": "C",
              "text": "Data is encrypted with atomic quantum keys"
            },
            {
              "id": "D",
              "text": "Only one user can log in per second"
            }
          ],
          "hint": "All-or-nothing execution.",
          "explanation": "Atomicity guarantees that all steps in a transaction block complete as a unified atomic unit, or roll back with zero partial state saved.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 5)",
          "conceptTag": "ACID Atomicity"
        },
        {
          "id": "701418db-1a92-48c5-99d1-98354be53dff",
          "type": "true_false",
          "prompt": "Document Store Limits: True or False: MongoDB document stores are superior to PostgreSQL for every use case because they have no schema constraints.",
          "options": [
            {
              "id": "A",
              "text": "False"
            },
            {
              "id": "B",
              "text": "True"
            }
          ],
          "hint": "Schemaless often pushes data corruption into app code.",
          "explanation": "For highly relational data, missing schema enforcement leads to data corruption, orphan records, and complex joining logic.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 6)",
          "conceptTag": "NoSQL Trade-offs"
        },
        {
          "id": "66f19162-15e0-4137-b67d-897fd818ef71",
          "type": "single",
          "prompt": "Normalization Objective: What is the primary objective of normalizing a database schema up to Third Normal Form (3NF)?",
          "options": [
            {
              "id": "A",
              "text": "To eliminate data redundancy, prevent insertion/update/deletion anomalies, and enforce relational integrity"
            },
            {
              "id": "B",
              "text": "To view tables in Microsoft Excel"
            },
            {
              "id": "C",
              "text": "To compress disk space by exactly 75%"
            },
            {
              "id": "D",
              "text": "To allow unauthenticated queries"
            }
          ],
          "hint": "Eliminates redundancy and update anomalies.",
          "explanation": "Normalization structures tables around single business entities so updates happen in exactly one place without side-effects.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 7)",
          "conceptTag": "Database Normalization"
        },
        {
          "id": "e2f45db8-19be-411f-80c4-535b31e089b3",
          "type": "single",
          "prompt": "Horizontal Sharding: When a table reaches 500 million rows and exceeds single-machine storage capacity, how does Horizontal Sharding resolve this?",
          "options": [
            {
              "id": "A",
              "text": "Partitions rows across multiple independent physical database server nodes based on a Shard Key (e.g. user_id)"
            },
            {
              "id": "B",
              "text": "Deletes historical records older than 7 days"
            },
            {
              "id": "C",
              "text": "Combines all columns into a comma-separated string"
            },
            {
              "id": "D",
              "text": "Replaces tables with CSV files"
            }
          ],
          "hint": "Distributes rows across independent nodes using a shard key.",
          "explanation": "Horizontal sharding partitions table rows across distinct database instances, scaling beyond physical hardware limits.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 8)",
          "conceptTag": "Database Sharding"
        },
        {
          "id": "46b6b9bd-b72a-4722-9af9-f385268eca11",
          "type": "single",
          "prompt": "Read Replicas: Your SaaS application has an 85% Read vs 15% Write traffic pattern. Primary database CPU utilization is reaching 95%. What architectural pattern relieves read pressure?",
          "options": [
            {
              "id": "A",
              "text": "Deploy Read Replicas: direct write queries (INSERT/UPDATE/DELETE) to the Primary DB, and route read queries (SELECT) across read replicas via asynchronous replication"
            },
            {
              "id": "B",
              "text": "Disable all SELECT queries during business hours"
            },
            {
              "id": "C",
              "text": "Ask customers to refresh less frequently"
            },
            {
              "id": "D",
              "text": "Store passwords in browser local storage"
            }
          ],
          "hint": "Offload SELECT queries to replica pools.",
          "explanation": "Read replicas scale read-heavy applications by offloading SELECT queries from the primary master node.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 9)",
          "conceptTag": "Read Replicas & CQRS"
        },
        {
          "id": "34725288-a5b6-46ce-9485-64ce8db1110d",
          "type": "true_false",
          "prompt": "Deadlocks: True or False: A database deadlock occurs when two concurrent transactions each hold a lock on a row that the other transaction needs to proceed, causing both to wait indefinitely.",
          "options": [
            {
              "id": "A",
              "text": "True"
            },
            {
              "id": "B",
              "text": "False"
            }
          ],
          "hint": "Circular wait conditions create deadlocks.",
          "explanation": "Deadlocks occur when circular dependencies arise between locks. Database engines detect deadlocks and abort one transaction to break the cycle.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 10)",
          "conceptTag": "Deadlocks & Concurrency"
        }
      ]
    },
    {
      "id": "0557d258-05cc-4653-8317-28934d5fd8b2",
      "materialId": "pm2-day3",
      "title": "[Easy] Set 2: ACID Transactions, Locks & Concurrency Basics",
      "difficulty": "easy",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "be53a18c-4034-4cde-9e2d-1b6636205576",
          "type": "single",
          "prompt": "Foreign Key Constraints: What is the core business protection provided by a Foreign Key constraint between `orders.customer_id` and `customers.id`?",
          "options": [
            {
              "id": "A",
              "text": "It prevents orphan records by guaranteeing that an order cannot be inserted with a non-existent customer_id, and blocks deleting customers who have active orders"
            },
            {
              "id": "B",
              "text": "It encrypts the customer's credit card"
            },
            {
              "id": "C",
              "text": "It automatically sends an email to the customer"
            },
            {
              "id": "D",
              "text": "It makes queries 100x faster"
            }
          ],
          "hint": "Enforces referential integrity.",
          "explanation": "Foreign keys guarantee referential integrity at the engine level, preventing orphaned child records and broken relational joins.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 11)",
          "conceptTag": "Referential Integrity"
        },
        {
          "id": "e86f3c06-9fc6-4490-8dc3-7220fa5d8d1e",
          "type": "single",
          "prompt": "Primary Key Selection: Why are auto-incrementing sequential integers (1, 2, 3...) considered a security vulnerability for public URLs (e.g. `/orders/4819`)?",
          "options": [
            {
              "id": "A",
              "text": "They allow competitors and attackers to easily scrape data and guess valid order IDs via sequential enumeration, revealing company transaction volume"
            },
            {
              "id": "B",
              "text": "Integers take more storage space than UUIDs"
            },
            {
              "id": "C",
              "text": "Integers cannot be indexed by SQL databases"
            },
            {
              "id": "D",
              "text": "Integers crash web browsers"
            }
          ],
          "hint": "Prevents enumeration attacks. Use UUIDs.",
          "explanation": "Sequential IDs leak business growth metrics and make enumeration attacks trivial. Using UUIDv4 or UUIDv7 obscures internal volume.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 12)",
          "conceptTag": "Primary Keys & Security"
        },
        {
          "id": "88e7ac22-6d9e-4097-8777-da9e95e394d0",
          "type": "single",
          "prompt": "UUIDv4 vs UUIDv7: Why is UUIDv7 increasingly preferred over random UUIDv4 as a primary key in high-write databases?",
          "options": [
            {
              "id": "A",
              "text": "UUIDv7 includes a time-ordered prefix, ensuring sequential B-Tree index insertions that prevent index fragmentation and random disk I/O thrashing"
            },
            {
              "id": "B",
              "text": "UUIDv7 is written in Python"
            },
            {
              "id": "C",
              "text": "UUIDv7 is 100x shorter than UUIDv4"
            },
            {
              "id": "D",
              "text": "UUIDv7 doesn't require hard disk storage"
            }
          ],
          "hint": "Time-ordered UUIDs prevent B-Tree fragmentation.",
          "explanation": "Random UUIDv4 causes random page splits in B-Tree indexes. Time-ordered UUIDv7 preserves sequential append performance.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 13)",
          "conceptTag": "Database Indexing"
        },
        {
          "id": "ec79cf4a-1d9f-492d-aef5-51c073297e9b",
          "type": "single",
          "prompt": "Database Indexes Write Tax: What is the trade-off of adding 15 different indexes to a single SQL table to speed up searches?",
          "options": [
            {
              "id": "A",
              "text": "Every write operation (INSERT/UPDATE/DELETE) slows down significantly because the database engine must recalculate and update all 15 index trees on disk"
            },
            {
              "id": "B",
              "text": "The table cannot store text anymore"
            },
            {
              "id": "C",
              "text": "The database automatically deletes itself"
            },
            {
              "id": "D",
              "text": "User passwords become visible"
            }
          ],
          "hint": "Indexes speed up reads but slow down writes.",
          "explanation": "Indexes are not free: every write must rebalance index B-Trees on disk. Excessive indexes degrade transactional write throughput.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 14)",
          "conceptTag": "Index Trade-offs"
        },
        {
          "id": "e6709387-71b2-4000-94e9-8ba7a6132489",
          "type": "single",
          "prompt": "Composite Indexes: When creating a composite index on `(status, created_at)`, why does query column ordering matter ('Leftmost Prefix Rule')?",
          "options": [
            {
              "id": "A",
              "text": "The index can only optimize queries filtering by `status` alone or `status AND created_at`, but CANNOT optimize queries filtering ONLY by `created_at`"
            },
            {
              "id": "B",
              "text": "Column order determines the font color"
            },
            {
              "id": "C",
              "text": "The second column is ignored by the database"
            },
            {
              "id": "D",
              "text": "Column order only matters on Windows"
            }
          ],
          "hint": "Leftmost prefix rule applies to B-Trees.",
          "explanation": "B-Tree composite indexes sort by the first column first. Queries that omit the leading column cannot leverage the index tree.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 15)",
          "conceptTag": "Composite Indexes"
        },
        {
          "id": "bbaa7482-03fb-4fb2-9065-1a5abf16de12",
          "type": "single",
          "prompt": "Transaction Isolation Levels: In SQL standards, which transaction isolation level provides complete protection against Dirty Reads, Non-Repeatable Reads, and Phantom Reads?",
          "options": [
            {
              "id": "A",
              "text": "Serializable (the highest isolation level, executing transactions as if run sequentially)"
            },
            {
              "id": "B",
              "text": "Read Uncommitted"
            },
            {
              "id": "C",
              "text": "Read Committed"
            },
            {
              "id": "D",
              "text": "Repeatable Read"
            }
          ],
          "hint": "Serializable provides full mathematical isolation.",
          "explanation": "Serializable is the strictest ACID isolation level, preventing all anomalies by locking or validating ranges, but with higher lock contention.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 16)",
          "conceptTag": "Transaction Isolation"
        },
        {
          "id": "5009325a-37ca-43f9-ad55-8b4b17334d4c",
          "type": "single",
          "prompt": "Dirty Reads: What is a 'Dirty Read' anomaly in concurrent database processing?",
          "options": [
            {
              "id": "A",
              "text": "A transaction reads uncommitted data written by another concurrent transaction that is subsequently rolled back and never persisted"
            },
            {
              "id": "B",
              "text": "A read operation that returns corrupted binary data"
            },
            {
              "id": "C",
              "text": "A query executed with a typo in the table name"
            },
            {
              "id": "D",
              "text": "A query that takes longer than 10 seconds"
            }
          ],
          "hint": "Reading uncommitted ghost data.",
          "explanation": "If Transaction A modifies a balance and Transaction B reads it before Transaction A rolls back, Transaction B acted on data that never existed.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 17)",
          "conceptTag": "Transaction Anomalies"
        },
        {
          "id": "b927ad23-a9ad-41c1-b6cf-e93436f337fd",
          "type": "single",
          "prompt": "Optimistic vs Pessimistic Locking: In a flight booking system where seat collision is rare, why is Optimistic Locking with a `version_number` preferred over Pessimistic Locking?",
          "options": [
            {
              "id": "A",
              "text": "It doesn't hold open database row locks while users view their screens, checking only at update time if `version == current_version` to prevent blocking other users"
            },
            {
              "id": "B",
              "text": "Optimistic locking guarantees 100% discount on flights"
            },
            {
              "id": "C",
              "text": "Pessimistic locking is deprecated in SQL"
            },
            {
              "id": "D",
              "text": "Optimistic locking runs in browser memory"
            }
          ],
          "hint": "Avoids long-lived locks during user hesitation.",
          "explanation": "Optimistic locking avoids locking database rows while users deliberate, checking version timestamps only when final checkout updates are committed.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 18)",
          "conceptTag": "Concurrency Control"
        },
        {
          "id": "ff9413f8-4b92-47d4-b964-5bfe7344c124",
          "type": "single",
          "prompt": "Database Connection Pools: What happens when an application's connection pool size is configured too high (e.g. 5,000 connections on an 8-core database server)?",
          "options": [
            {
              "id": "A",
              "text": "Severe CPU context switching, RAM exhaustion, and disk I/O thrashing that degrades database throughput far below what 50 connections could process"
            },
            {
              "id": "B",
              "text": "The database runs 5,000 times faster"
            },
            {
              "id": "C",
              "text": "The database automatically upgrades to 64 cores"
            },
            {
              "id": "D",
              "text": "Queries execute with zero latency"
            }
          ],
          "hint": "Context switching degrades performance.",
          "explanation": "Hardware has limited CPU cores and disk spindles. Excessive connections spend more CPU cycles switching context than executing queries.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 19)",
          "conceptTag": "Connection Pool Sizing"
        },
        {
          "id": "cf3dd088-ba7f-442e-acda-f35b13d096d1",
          "type": "single",
          "prompt": "Time-Series Databases: When monitoring server telemetry or IoT sensor data generating 50,000 data points per second, why choose a Time-Series DB (e.g. TimescaleDB, InfluxDB)?",
          "options": [
            {
              "id": "A",
              "text": "Optimized for high-volume append-only timestamped writes, automated time-based data retention policies, and ultra-fast rolling aggregations"
            },
            {
              "id": "B",
              "text": "They don't require internet connections"
            },
            {
              "id": "C",
              "text": "They replace the operating system"
            },
            {
              "id": "D",
              "text": "They can only store text"
            }
          ],
          "hint": "Optimized for time-windowed metrics.",
          "explanation": "Time-series databases use columnar chunking and automated rollups tailored for continuous timestamped data streams.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 20)",
          "conceptTag": "Specialized Databases"
        }
      ]
    },
    {
      "id": "d16ce158-dbf1-4ca8-8fb5-e46e5576ad24",
      "materialId": "pm2-day3",
      "title": "[Medium] Set 3: Normalization (1NF-3NF) & Schema Design Integrity",
      "difficulty": "medium",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "0f649af9-2611-4d6a-bf5b-3e5cd8c3bef7",
          "type": "single",
          "prompt": "Graph Databases (Neo4j): For social networks or fraud detection mapping 6 degrees of relationships between users and credit cards, why use a Graph Database?",
          "options": [
            {
              "id": "A",
              "text": "Graph databases traverse deep multi-hop relationships via pointer traversals in O(1) time without executing exponential multi-table SQL JOINs"
            },
            {
              "id": "B",
              "text": "Graph databases render 3D graphics in the browser"
            },
            {
              "id": "C",
              "text": "Graph databases cannot store text"
            },
            {
              "id": "D",
              "text": "Graph databases are free of charge"
            }
          ],
          "hint": "Index-free adjacency traverses relationships fast.",
          "explanation": "Relational multi-table JOINs become computationally prohibitive beyond 3-4 hops. Graph databases follow direct memory pointers.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 21)",
          "conceptTag": "Graph Databases"
        },
        {
          "id": "04316cc3-9971-4867-b7da-1221c76873fa",
          "type": "single",
          "prompt": "Full-Text Search (Elasticsearch): Why do e-commerce products offload product catalog search from PostgreSQL to Elasticsearch?",
          "options": [
            {
              "id": "A",
              "text": "Elasticsearch uses Inverted Indexes to provide lightning-fast fuzzy matching, typo tolerance, synonyms, and relevance scoring across millions of documents"
            },
            {
              "id": "B",
              "text": "PostgreSQL cannot store product descriptions"
            },
            {
              "id": "C",
              "text": "Elasticsearch replaces relational order ledgers"
            },
            {
              "id": "D",
              "text": "Elasticsearch runs on client devices"
            }
          ],
          "hint": "Inverted indexes enable fuzzy search & relevance scoring.",
          "explanation": "SQL `LIKE '%shoes%'` queries force full table scans. Inverted indexes map keywords to document IDs for instant relevance ranking.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 22)",
          "conceptTag": "Search Architecture"
        },
        {
          "id": "084d0831-d4f6-4c1b-8dbd-7ef90c63cb10",
          "type": "single",
          "prompt": "In-Memory Caching (Redis): What is the primary reason Redis achieves sub-millisecond read/write latency?",
          "options": [
            {
              "id": "A",
              "text": "It stores data directly in RAM memory rather than reading/writing disk blocks, executing single-threaded non-blocking I/O multiplexing"
            },
            {
              "id": "B",
              "text": "It runs on quantum hardware"
            },
            {
              "id": "C",
              "text": "It doesn't use networking"
            },
            {
              "id": "D",
              "text": "It only allows 5 users at a time"
            }
          ],
          "hint": "RAM storage + event loop multiplexing.",
          "explanation": "Operating in RAM bypasses mechanical and SSD disk latency, allowing Redis to execute over 100,000 operations per second per core.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 23)",
          "conceptTag": "In-Memory Caching"
        },
        {
          "id": "fd3ce44b-7f31-4a24-9d75-3ee09c1df590",
          "type": "single",
          "prompt": "Cache Stampede (Thundering Herd): What occurs during a Cache Stampede when a high-traffic cached key (e.g. homepage banner) expires at peak traffic?",
          "options": [
            {
              "id": "A",
              "text": "Thousands of concurrent requests all miss the cache simultaneously and hit the primary database at the exact same millisecond, crashing the database"
            },
            {
              "id": "B",
              "text": "The cache permanently locks up"
            },
            {
              "id": "C",
              "text": "The server loses power"
            },
            {
              "id": "D",
              "text": "The user's cookie is deleted"
            }
          ],
          "hint": "Simultaneous cache miss crushes DB.",
          "explanation": "When a popular key expires, all incoming traffic bypasses the cache and floods the database. Mutex locks or probabilistic early expiration prevent this.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 24)",
          "conceptTag": "Caching Strategies"
        },
        {
          "id": "bd9c8c44-f76a-41c8-bd3a-e029ba922415",
          "type": "true_false",
          "prompt": "Database Read Replicas vs Backups: True or False: Having a real-time asynchronous Read Replica in another availability zone replaces the need for automated daily database backups.",
          "options": [
            {
              "id": "A",
              "text": "False"
            },
            {
              "id": "B",
              "text": "True"
            }
          ],
          "hint": "Replicas replicate human errors instantly.",
          "explanation": "If an engineer or bug executes `DROP TABLE users;`, that command replicates to the read replica in milliseconds. True point-in-time backups are mandatory.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 25)",
          "conceptTag": "Disaster Recovery"
        },
        {
          "id": "98567684-0ebb-4180-a72f-4643c40cfdcb",
          "type": "single",
          "prompt": "Columnar Databases (ClickHouse / BigQuery): Why are Columnar databases dramatically faster than Row-oriented databases for aggregate queries (`SELECT AVG(revenue)...`)?",
          "options": [
            {
              "id": "A",
              "text": "They store table data on disk column-by-column, allowing queries to read ONLY the revenue column from disk while skipping all other unneeded columns"
            },
            {
              "id": "B",
              "text": "They only store data on Sundays"
            },
            {
              "id": "C",
              "text": "They compile SQL into Python"
            },
            {
              "id": "D",
              "text": "They cannot run on Linux"
            }
          ],
          "hint": "Reads only requested columns from disk.",
          "explanation": "Row stores read entire multi-kilobyte rows off disk just to sum one field. Columnar stores read only the target column, achieving massive compression.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 26)",
          "conceptTag": "Columnar Stores"
        },
        {
          "id": "9fd71dd4-4916-46b2-b758-e142d6db69dd",
          "type": "single",
          "prompt": "Star Schema vs Snowflake Schema: In data warehousing, what distinguishes a Star Schema design?",
          "options": [
            {
              "id": "A",
              "text": "A central Fact Table containing numeric metrics surrounded by completely denormalized Dimension Tables in a simple 1-join star topology"
            },
            {
              "id": "B",
              "text": "Tables are shaped like snowflakes with 50 joins"
            },
            {
              "id": "C",
              "text": "Data is stored in circular rings"
            },
            {
              "id": "D",
              "text": "Tables have no primary keys"
            }
          ],
          "hint": "Denormalized dimensions surround a central fact table.",
          "explanation": "Star schemas simplify business intelligence queries and minimize joins by keeping dimension tables flat and denormalized.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 27)",
          "conceptTag": "Data Warehousing"
        },
        {
          "id": "91c59f00-21c6-42d3-aa7a-3f5dbf733b27",
          "type": "single",
          "prompt": "Soft Deletes vs Hard Deletes: Why do enterprise products implement Soft Deletes (`deleted_at IS NOT NULL`) rather than SQL `DELETE` statements?",
          "options": [
            {
              "id": "A",
              "text": "To maintain relational integrity, preserve audit trails for compliance, and enable 1-click user data recovery without restoring database backups"
            },
            {
              "id": "B",
              "text": "Because SQL databases cannot delete rows"
            },
            {
              "id": "C",
              "text": "Soft deletes make databases run faster"
            },
            {
              "id": "D",
              "text": "Hard deletes require hardware reboots"
            }
          ],
          "hint": "Auditability and accidental deletion recovery.",
          "explanation": "Soft deleting marks records as archived, protecting referential integrity across historical orders while allowing easy restoration.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 28)",
          "conceptTag": "Data Retention"
        },
        {
          "id": "efe6d335-3f7c-4547-8df8-0fd2670834e8",
          "type": "single",
          "prompt": "Database Migration Rollbacks: Why should database migration scripts always define both an `up()` function and a `down()` function?",
          "options": [
            {
              "id": "A",
              "text": "To allow automated deployment tools to cleanly rollback schema alterations if a release fails health checks in production"
            },
            {
              "id": "B",
              "text": "To make code look longer in git"
            },
            {
              "id": "C",
              "text": "To format tables in ascending and descending order"
            },
            {
              "id": "D",
              "text": "To convert SQL into JavaScript"
            }
          ],
          "hint": "Safe deployment reversibility.",
          "explanation": "Reversible migrations ensure that if a release triggers bugs, deployment pipelines can back out schema changes without data loss or manual SQL hotfixes.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 29)",
          "conceptTag": "Database Migrations"
        },
        {
          "id": "1aa348a8-6c83-43e3-a6b6-56d63551f202",
          "type": "single",
          "prompt": "ORM (Object-Relational Mapping) Pros & Cons: What is the main downside of relying completely on an ORM (like Hibernate or SQLAlchemy) for complex reporting queries?",
          "options": [
            {
              "id": "A",
              "text": "ORMs can generate wildly inefficient SQL with hidden N+1 queries and bloated joins that developer code obscures, compared to optimized handwritten SQL"
            },
            {
              "id": "B",
              "text": "ORMs cannot connect to relational databases"
            },
            {
              "id": "C",
              "text": "ORMs can only run in web browsers"
            },
            {
              "id": "D",
              "text": "ORMs require on-premise hardware"
            }
          ],
          "hint": "Hidden inefficient SQL and N+1 traps.",
          "explanation": "While ORMs accelerate routine CRUD velocity, complex reporting requires profiling generated SQL to prevent severe query performance bottlenecks.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 30)",
          "conceptTag": "ORM Trade-offs"
        }
      ]
    },
    {
      "id": "891d4f03-9373-4f4a-b3da-6285ce036c4c",
      "materialId": "pm2-day3",
      "title": "[Medium] Set 4: Indexes, B-Trees & Query Optimization",
      "difficulty": "medium",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "113202cc-b121-49c6-b839-63ebd36092e6",
          "type": "single",
          "prompt": "Write-Ahead Logging (WAL): What critical role does the Write-Ahead Log (WAL) play in relational databases like PostgreSQL and MySQL?",
          "options": [
            {
              "id": "A",
              "text": "It logs transaction changes sequentially to disk BEFORE writing changes to database data pages, guaranteeing crash recovery and durability"
            },
            {
              "id": "B",
              "text": "It records user passwords in plaintext"
            },
            {
              "id": "C",
              "text": "It emails developers when queries fail"
            },
            {
              "id": "D",
              "text": "It deletes old databases every night"
            }
          ],
          "hint": "Guarantees durability (D in ACID).",
          "explanation": "Sequential append-only WAL writes are fast and ensure that even if power cuts out before data blocks flush to disk, the state can be fully replayed.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 31)",
          "conceptTag": "Database Internals"
        },
        {
          "id": "f8975f05-3ca9-407d-9c90-6964568dcfff",
          "type": "single",
          "prompt": "Database Index Selectivity: Why does adding a B-Tree index on a `gender` column (with values only 'M', 'F', 'Other') on a 10-million row table provide almost no performance benefit?",
          "options": [
            {
              "id": "A",
              "text": "Low selectivity / low cardinality: when an index value matches 50% of the entire table, scanning the index and doing random heap lookups is slower than a sequential scan"
            },
            {
              "id": "B",
              "text": "SQL doesn't support letters in indexes"
            },
            {
              "id": "C",
              "text": "Gender cannot be indexed by law"
            },
            {
              "id": "D",
              "text": "Indexes only work on numbers"
            }
          ],
          "hint": "Low cardinality makes indexes useless.",
          "explanation": "Indexes shine on high-cardinality columns (unique IDs, emails). For low-cardinality fields, the engine ignores the index and performs table scans.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 32)",
          "conceptTag": "Index Cardinality"
        },
        {
          "id": "4149c547-449c-4085-a574-e62d402f36e3",
          "type": "single",
          "prompt": "Database Partitioning (Range Partitioning): When an enterprise table stores 200 million financial audit logs, how does Range Partitioning by `year_month` optimize query performance?",
          "options": [
            {
              "id": "A",
              "text": "The query planner performs 'Partition Pruning', reading only the specific monthly table partition matching the date filter and ignoring all other years"
            },
            {
              "id": "B",
              "text": "It deletes records from previous months"
            },
            {
              "id": "C",
              "text": "It stores old data in browser storage"
            },
            {
              "id": "D",
              "text": "It eliminates the need for SQL"
            }
          ],
          "hint": "Partition pruning skips unneeded disk blocks.",
          "explanation": "Partition pruning skips entire sub-tables that fall outside the query's date filter, saving massive disk I/O.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 33)",
          "conceptTag": "Partitioning"
        },
        {
          "id": "8b35704f-9dd7-4edb-b5bc-6020f6a7fa91",
          "type": "single",
          "prompt": "Database Vacuuming / Table Bloat: In PostgreSQL's MVCC (Multi-Version Concurrency Control) architecture, why is the `VACUUM` process necessary?",
          "options": [
            {
              "id": "A",
              "text": "To reclaim dead row tuples left behind by UPDATE and DELETE operations, preventing disk bloat and keeping indexes compact"
            },
            {
              "id": "B",
              "text": "To wipe the hard drive clean"
            },
            {
              "id": "C",
              "text": "To change the database password"
            },
            {
              "id": "D",
              "text": "To encrypt tables with SSL"
            }
          ],
          "hint": "Reclaims dead MVCC tuple versions.",
          "explanation": "MVCC marks updated/deleted rows as obsolete rather than overwriting in-place. Autovacuum cleans dead rows to prevent unbounded disk growth.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 34)",
          "conceptTag": "PostgreSQL MVCC"
        },
        {
          "id": "56c965ed-38c9-420f-9d2e-866630e587af",
          "type": "single",
          "prompt": "Foreign Key ON DELETE CASCADE: What is the catastrophic risk of applying `ON DELETE CASCADE` between an enterprise `organizations` table and an `orders` table?",
          "options": [
            {
              "id": "A",
              "text": "Accidentally deleting one organization record instantly and permanently wipes out all associated historical invoices, payments, and orders across that company"
            },
            {
              "id": "B",
              "text": "The database stops accepting new users"
            },
            {
              "id": "C",
              "text": "It slows down internet speeds globally"
            },
            {
              "id": "D",
              "text": "It converts SQL to XML"
            }
          ],
          "hint": "Cascading mass deletion risk.",
          "explanation": "Cascade deletes propagate deletions down the foreign key chain, risking unintentional catastrophic data wiping without safety stops.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 35)",
          "conceptTag": "Schema Constraints"
        },
        {
          "id": "24a253ba-eb02-4324-bcbc-4dd6ceb881cb",
          "type": "single",
          "prompt": "Database Connection Pooling (PgBouncer): Why do applications deployed on Serverless functions (AWS Lambda) require an external pooler like PgBouncer when connecting to PostgreSQL?",
          "options": [
            {
              "id": "A",
              "text": "Because thousands of ephemeral serverless function instances each opening individual DB connections will rapidly exhaust PostgreSQL's max connection limit (e.g. 200)"
            },
            {
              "id": "B",
              "text": "Because PostgreSQL cannot connect to the cloud"
            },
            {
              "id": "C",
              "text": "Because Lambda doesn't support SQL"
            },
            {
              "id": "D",
              "text": "Because PgBouncer makes database hosting free"
            }
          ],
          "hint": "Protects DB from ephemeral serverless bursts.",
          "explanation": "Serverless functions scale to thousands of instances in seconds. Without a centralized connection pooler, the database crashes from connection exhaustion.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 36)",
          "conceptTag": "Serverless & Databases"
        },
        {
          "id": "be425079-71fd-47eb-8eef-f043dec51dd7",
          "type": "single",
          "prompt": "Database Views vs Materialized Views: What is the defining difference between a standard SQL View and a Materialized View?",
          "options": [
            {
              "id": "A",
              "text": "A standard View runs the underlying query on demand every time; a Materialized View physically caches the query results on disk and must be periodically refreshed"
            },
            {
              "id": "B",
              "text": "Standard views can only store numbers"
            },
            {
              "id": "C",
              "text": "Materialized views run only in browsers"
            },
            {
              "id": "D",
              "text": "Standard views require hardware servers"
            }
          ],
          "hint": "Materialized views persist query results on disk.",
          "explanation": "Materialized views cache expensive multi-table join and aggregation results on disk for instant reading, trading disk space for speed.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 37)",
          "conceptTag": "SQL Views"
        },
        {
          "id": "383b5931-b53b-42a1-a06d-3385605d5193",
          "type": "single",
          "prompt": "CAP Theorem Trade-off: In the CAP Theorem, when a distributed network partition (P) occurs between two data centers, what choice must a distributed database make?",
          "options": [
            {
              "id": "A",
              "text": "Consistency (reject writes to prevent stale reads) vs Availability (accept writes on both sides, risking conflicting and inconsistent data)"
            },
            {
              "id": "B",
              "text": "Cost vs Performance"
            },
            {
              "id": "C",
              "text": "Speed vs Encryption"
            },
            {
              "id": "D",
              "text": "CPU vs RAM"
            }
          ],
          "hint": "Choose Consistency (CP) or Availability (AP).",
          "explanation": "When a network partition splits nodes, a distributed database must either stop serving writes to stay consistent, or keep serving writes and diverge.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 38)",
          "conceptTag": "Distributed Systems CAP"
        },
        {
          "id": "13b6c12f-3f66-4fcf-8f57-a63d19f8d267",
          "type": "single",
          "prompt": "Eventual Consistency: In distributed databases like Amazon DynamoDB or Cassandra, what does 'Eventual Consistency' mean for user reads?",
          "options": [
            {
              "id": "A",
              "text": "After a write, concurrent reads may return stale data for a few milliseconds until updates replicate across all quorum nodes, eventually converging to identical state"
            },
            {
              "id": "B",
              "text": "Data is only saved once per week"
            },
            {
              "id": "C",
              "text": "Data is lost permanently during outages"
            },
            {
              "id": "D",
              "text": "The database will eventually crash"
            }
          ],
          "hint": "Replicas converge after short propagation delay.",
          "explanation": "Eventual consistency trades real-time read guarantees for extreme write availability and global scale, reconciling divergence within milliseconds.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 39)",
          "conceptTag": "NoSQL Consistency"
        },
        {
          "id": "2aa472ce-93c9-4879-a463-c7143fc71e5c",
          "type": "single",
          "prompt": "Database Replication Lag Alerting: When an asynchronous Read Replica's replication lag exceeds 60 seconds, what product impact occurs?",
          "options": [
            {
              "id": "A",
              "text": "Users who perform an action (e.g. update profile or place an order) and refresh their screen will see stale old data, flooding customer support with bug reports"
            },
            {
              "id": "B",
              "text": "The database automatically deletes user accounts"
            },
            {
              "id": "C",
              "text": "The server catches fire"
            },
            {
              "id": "D",
              "text": "The mobile app uninstalls itself"
            }
          ],
          "hint": "Stale user experience and ghost state.",
          "explanation": "High replication lag causes read traffic to serve outdated records, creating apparent state rollback bugs for end users.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 40)",
          "conceptTag": "Replication Lag"
        }
      ]
    },
    {
      "id": "322fdab8-b8d3-437c-8c50-c31bab9e7d32",
      "materialId": "pm2-day3",
      "title": "[Hard] Set 5: OLTP vs OLAP, Sharding, Replication Lag & CQRS",
      "difficulty": "hard",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "40e237b5-0c44-4cf4-bb3a-7ab8bc91bc7a",
          "type": "single",
          "prompt": "Database Shard Key Selection: When sharding a multi-tenant B2B SaaS platform, why is `tenant_id` (or `company_id`) the standard choice for the Shard Key?",
          "options": [
            {
              "id": "A",
              "text": "It ensures all data for a single company resides on the same shard node, allowing efficient single-node relational joins without slow cross-network distributed queries"
            },
            {
              "id": "B",
              "text": "It makes all companies pay the same price"
            },
            {
              "id": "C",
              "text": "It deletes data when companies cancel"
            },
            {
              "id": "D",
              "text": "It converts SQL queries into JSON"
            }
          ],
          "hint": "Co-locates tenant data to prevent cross-shard joins.",
          "explanation": "Selecting `tenant_id` ensures that 99% of queries stay contained within a single physical shard, avoiding high-latency distributed joins.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 41)",
          "conceptTag": "Sharding Architecture"
        },
        {
          "id": "c17062fc-b91f-4e19-be89-143eb9723207",
          "type": "single",
          "prompt": "CQRS (Command Query Responsibility Segregation): What is the core architectural principle of CQRS?",
          "options": [
            {
              "id": "A",
              "text": "Separating read models (queries) from write models (commands), allowing each to be optimized, scaled, and indexed independently using different database technologies"
            },
            {
              "id": "B",
              "text": "Running all queries in the browser console"
            },
            {
              "id": "C",
              "text": "Replacing SQL with voice commands"
            },
            {
              "id": "D",
              "text": "Merging frontend and backend into one file"
            }
          ],
          "hint": "Separates read paths from write paths.",
          "explanation": "CQRS separates high-throughput write commands from complex read reporting models, allowing each database layer to scale to its specific workload.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 42)",
          "conceptTag": "Architecture Patterns"
        },
        {
          "id": "7a09dca8-696b-42ff-8988-e30dd29bfadf",
          "type": "single",
          "prompt": "Database Point-in-Time Recovery (PITR): How does Point-in-Time Recovery enable restoring a production database after an engineer accidentally truncates a table at 2:14:32 PM?",
          "options": [
            {
              "id": "A",
              "text": "It restores the last base backup snapshot and replays Write-Ahead Logs (WAL) forward to exactly 2:14:31 PM, recovering data right before the accidental command"
            },
            {
              "id": "B",
              "text": "It asks users to re-enter their data"
            },
            {
              "id": "C",
              "text": "It runs a reverse query automatically"
            },
            {
              "id": "D",
              "text": "It reboots the server in safe mode"
            }
          ],
          "hint": "Replays WAL logs to exact millisecond before disaster.",
          "explanation": "PITR pairs full backups with continuous WAL archiving, allowing exact replay up to any target millisecond in time.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 43)",
          "conceptTag": "Disaster Recovery"
        },
        {
          "id": "ce757b80-7540-493a-b598-533a1bf07cd1",
          "type": "single",
          "prompt": "Database Index Fragmentation: What causes index fragmentation in high-write tables, and how is it resolved?",
          "options": [
            {
              "id": "A",
              "text": "Frequent random INSERTs and DELETEs cause half-filled B-Tree leaf pages, resolved by running `REINDEX` or rebuilding the index in the background"
            },
            {
              "id": "B",
              "text": "Spilling coffee on the server"
            },
            {
              "id": "C",
              "text": "Using long passwords"
            },
            {
              "id": "D",
              "text": "Writing queries in lowercase"
            }
          ],
          "hint": "Page splits fragment B-Trees; REINDEX rebuilds.",
          "explanation": "Random insertions split B-Tree pages and leave empty space. Reindexing compacts page blocks and restores index sequential performance.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 44)",
          "conceptTag": "Database Maintenance"
        },
        {
          "id": "b051567a-1946-4d4f-a27b-ffc95dfabff0",
          "type": "single",
          "prompt": "Database Row-Level Security (RLS): What capability does PostgreSQL Row-Level Security provide for multi-tenant applications?",
          "options": [
            {
              "id": "A",
              "text": "It enforces database-engine-level security policies where queries automatically filter rows matching the current user's tenant ID, preventing cross-tenant data leaks"
            },
            {
              "id": "B",
              "text": "It locks rows so only one person can use the app"
            },
            {
              "id": "C",
              "text": "It deletes rows after 30 days"
            },
            {
              "id": "D",
              "text": "It forces users to change passwords monthly"
            }
          ],
          "hint": "Database-enforced tenant isolation.",
          "explanation": "RLS acts as an impenetrable safety net: even if backend code forgets a `WHERE tenant_id = 5` filter, the DB engine restricts row access automatically.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 45)",
          "conceptTag": "Database Security"
        },
        {
          "id": "22ebcc19-d6a5-41e2-8683-bca12956808b",
          "type": "single",
          "prompt": "Database Connection Timeouts: Why must backend applications configure strict statement timeouts (e.g. `statement_timeout = 5000ms`) on database connections?",
          "options": [
            {
              "id": "A",
              "text": "To automatically cancel rogue or unindexed runaway queries before they exhaust database CPU and lock tables for all other users"
            },
            {
              "id": "B",
              "text": "To force users to type queries faster"
            },
            {
              "id": "C",
              "text": "To save cloud electricity costs"
            },
            {
              "id": "D",
              "text": "To prevent users from logging in at night"
            }
          ],
          "hint": "Kills runaway queries before they crash the DB.",
          "explanation": "Statement timeouts kill runaway queries automatically, protecting shared database pools from rogue analytics locks.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 46)",
          "conceptTag": "Database Reliability"
        },
        {
          "id": "9ad12552-94e3-4840-98ed-9bd563fd93f8",
          "type": "single",
          "prompt": "Database Charset & Collation: Why is configuring `UTF8MB4` mandatory for relational databases storing modern mobile app inputs?",
          "options": [
            {
              "id": "A",
              "text": "To fully support 4-byte Unicode characters, including modern emojis (e.g. \ud83d\ude80, \ud83d\udca1), international alphabets, and non-Latin scripts without throwing encoding errors"
            },
            {
              "id": "B",
              "text": "To make numbers load 4x faster"
            },
            {
              "id": "C",
              "text": "To encrypt user passwords"
            },
            {
              "id": "D",
              "text": "To reduce hard disk usage by 75%"
            }
          ],
          "hint": "Supports 4-byte emojis and global languages.",
          "explanation": "Older UTF-8 configurations supported only up to 3 bytes. Attempting to insert 4-byte emojis caused immediate insertion crash errors.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 47)",
          "conceptTag": "Data Encoding"
        },
        {
          "id": "9fd30a05-1036-4551-aa35-248aa7716b33",
          "type": "single",
          "prompt": "Database Check Constraints: When should an engineering team implement SQL `CHECK` constraints (e.g. `CHECK (discount_percentage BETWEEN 0 AND 100)`)?",
          "options": [
            {
              "id": "A",
              "text": "To guarantee business rule boundaries at the data persistence layer so invalid values can never enter the database regardless of bugs in application code"
            },
            {
              "id": "B",
              "text": "To make forms submit faster in browsers"
            },
            {
              "id": "C",
              "text": "To check employee attendance"
            },
            {
              "id": "D",
              "text": "To automatically format dates"
            }
          ],
          "hint": "Guarantees domain validity at storage layer.",
          "explanation": "Check constraints enforce fundamental sanity rules directly inside the database engine, acting as the ultimate boundary defense.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 48)",
          "conceptTag": "Data Integrity"
        },
        {
          "id": "fd735c79-688e-4952-a506-a4a090ceede8",
          "type": "single",
          "prompt": "Database Explain Plans: When reviewing an EXPLAIN ANALYZE output, what does an 'Index Scan' vs 'Bitmap Index Scan' indicate?",
          "options": [
            {
              "id": "A",
              "text": "Index Scan reads rows one-by-one directly from the heap; Bitmap Index Scan builds an in-memory bitmap of matching pages first, sorting disk I/O before fetching"
            },
            {
              "id": "B",
              "text": "Index Scan is deprecated"
            },
            {
              "id": "C",
              "text": "Bitmap Index Scan is for images only"
            },
            {
              "id": "D",
              "text": "Index Scan only works on Windows"
            }
          ],
          "hint": "Bitmap scan groups disk reads sequentially.",
          "explanation": "Bitmap index scans batch and sort heap page lookups, turning random I/O into sequential scans when many rows match the filter.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 49)",
          "conceptTag": "Query Optimization"
        },
        {
          "id": "7fbd3fe6-0546-45ff-a1b0-9c86f9a994aa",
          "type": "single",
          "prompt": "Database Replication Slot Exhaustion: In PostgreSQL logical replication, what catastrophic failure occurs if a replication consumer stops reading from its replication slot?",
          "options": [
            {
              "id": "A",
              "text": "The primary master database retains all Write-Ahead Logs (WAL) on disk indefinitely, eventually filling 100% of the disk and crashing the entire primary database"
            },
            {
              "id": "B",
              "text": "The replication slot deletes the database"
            },
            {
              "id": "C",
              "text": "The server switches to MySQL"
            },
            {
              "id": "D",
              "text": "The consumer is billed $10,000"
            }
          ],
          "hint": "Retained WAL fills primary disk.",
          "explanation": "Replication slots protect consumers from missing data by keeping WAL files until acknowledged. If a consumer dies silently, retained logs consume all disk.",
          "sourceRef": "Day 3 Databases & Modeling (Topic 50)",
          "conceptTag": "Database Operations"
        }
      ]
    },
    {
      "id": "137e9bd0-cd8f-478f-8a9a-90eb79b0ed0f",
      "materialId": "pm2-tech-guide",
      "title": "[Easy] Set 1: Modern Tech Stack Layers & Frontend Frameworks",
      "difficulty": "easy",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "7357d680-1fa4-4023-97c7-4dff5357599d",
          "type": "single",
          "prompt": "Enterprise Compliance: Your B2B SaaS startup pitches to Fortune 500 banks and health systems. What architectural requirements are non-negotiable for enterprise audits?",
          "options": [
            {
              "id": "A",
              "text": "SOC2/HIPAA compliance readiness, encryption in transit (TLS) and at rest (AES-256), audit logs, and least-privilege RBAC"
            },
            {
              "id": "B",
              "text": "Using solely NoSQL databases"
            },
            {
              "id": "C",
              "text": "Hosting on a single shared VPS"
            },
            {
              "id": "D",
              "text": "Public HTTP communication without passwords"
            }
          ],
          "hint": "Enterprise security and governance.",
          "explanation": "Enterprise procurement demands third-party security certifications (SOC 2 Type II), robust data encryption, and role-based access control.",
          "sourceRef": "Tech Stacks Guide (Topic 1)",
          "conceptTag": "Enterprise Readiness"
        },
        {
          "id": "b1d67ce6-5a86-41f4-a4fe-90d70bda97d7",
          "type": "single",
          "prompt": "CI/CD Pipeline Failure: Releases are breaking in production twice a week because engineers merge code directly without standardized integration tests. What is the fundamental PM fix?",
          "options": [
            {
              "id": "A",
              "text": "Implement an automated CI/CD pipeline (e.g. GitHub Actions) that enforces linting, automated unit/integration tests, and staging review before any PR can merge"
            },
            {
              "id": "B",
              "text": "Stop writing automated tests and test on production manually"
            },
            {
              "id": "C",
              "text": "Revert all backend code to monolithic assembly"
            },
            {
              "id": "D",
              "text": "Deploy code via manual FTP"
            }
          ],
          "hint": "Automated CI/CD safety gates.",
          "explanation": "CI/CD automates quality gates, running test suites on every pull request to prevent regressions from reaching production.",
          "sourceRef": "Tech Stacks Guide (Topic 2)",
          "conceptTag": "CI/CD & DevOps"
        },
        {
          "id": "608395f3-0911-4d6d-81ad-22a2adeca937",
          "type": "single",
          "prompt": "Docker Containerization: What primary problem does Docker solve for engineering and product teams during release cycles?",
          "options": [
            {
              "id": "A",
              "text": "It eliminates the 'it works on my machine' bug by packaging software with all its runtime dependencies, OS libraries, and configuration into an immutable container"
            },
            {
              "id": "B",
              "text": "It rewrites slow SQL queries automatically"
            },
            {
              "id": "C",
              "text": "It replaces the web framework"
            },
            {
              "id": "D",
              "text": "It makes cloud hosting free"
            }
          ],
          "hint": "Immutable reproducible runtimes.",
          "explanation": "Containers encapsulate application code alongside exact OS system libraries, guaranteeing identical execution from dev laptops to production clusters.",
          "sourceRef": "Tech Stacks Guide (Topic 3)",
          "conceptTag": "Containers & Docker"
        },
        {
          "id": "754650e5-d7f6-495c-89e3-5aae4fa08e42",
          "type": "single",
          "prompt": "Cloud Provider Alignment: A company heavily invested in Microsoft 365, Active Directory, and Windows Server needs to choose a cloud provider. What is the standard strategic recommendation?",
          "options": [
            {
              "id": "A",
              "text": "Microsoft Azure (seamless single sign-on integration with Entra ID/Active Directory and enterprise software license portability)"
            },
            {
              "id": "B",
              "text": "AWS (regardless of existing Microsoft contracts)"
            },
            {
              "id": "C",
              "text": "Build an on-premise closet server"
            },
            {
              "id": "D",
              "text": "DigitalOcean droplet for global ERP"
            }
          ],
          "hint": "Commercial and IAM synergy with Azure.",
          "explanation": "Enterprises with deep Microsoft footprints gain commercial discounts via Enterprise Agreements and instant identity integration with Azure AD/Entra ID.",
          "sourceRef": "Tech Stacks Guide (Topic 4)",
          "conceptTag": "Cloud Strategy"
        },
        {
          "id": "83b83424-1240-49aa-b79d-3f3d15309d4d",
          "type": "single",
          "prompt": "Infrastructure as Code (IaC): When provisioning multi-region cloud infrastructure across staging, EU, and US, why mandate Terraform over clicking the AWS console?",
          "options": [
            {
              "id": "A",
              "text": "IaC defines infrastructure in declarative, version-controlled code, preventing human configuration drift and enabling reproducible multi-region environments"
            },
            {
              "id": "B",
              "text": "Clicking the AWS console bills 500% higher rates"
            },
            {
              "id": "C",
              "text": "IaC makes servers run 10x faster"
            },
            {
              "id": "D",
              "text": "Terraform replaces the database"
            }
          ],
          "hint": "Declarative reproducible environments.",
          "explanation": "IaC prevents configuration drift, documents cloud topologies in git, and enables automated provisioning of staging and production environments.",
          "sourceRef": "Tech Stacks Guide (Topic 5)",
          "conceptTag": "IaC & Terraform"
        },
        {
          "id": "512b7eeb-ce79-4e45-a5b6-c8bc3570f708",
          "type": "true_false",
          "prompt": "Serverless Cost Curve: True or False: AWS Lambda (Serverless) is always cheaper than maintaining provisioned EC2 virtual servers for consistent, high-volume 24/7 processing workloads.",
          "options": [
            {
              "id": "A",
              "text": "False"
            },
            {
              "id": "B",
              "text": "True"
            }
          ],
          "hint": "Serverless is cheap for idle/spiky; expensive for steady 100% compute.",
          "explanation": "Serverless pricing per millisecond becomes significantly more expensive than reserved instances for continuous 24/7 high-throughput processing.",
          "sourceRef": "Tech Stacks Guide (Topic 6)",
          "conceptTag": "Serverless Costs"
        },
        {
          "id": "5a8dc3c2-4629-49ad-9761-730e0acd9eeb",
          "type": "single",
          "prompt": "Three Pillars of Observability: What are the 'Three Pillars of Observability' required to diagnose intermittent production outages and latency spikes?",
          "options": [
            {
              "id": "A",
              "text": "Metrics (aggregated numeric stats), Logs (timestamped event records), and Traces (end-to-end request lifecycle across microservices)"
            },
            {
              "id": "B",
              "text": "HTML, CSS, and JavaScript"
            },
            {
              "id": "C",
              "text": "Jira tickets, Slack notifications, and Zoom calls"
            },
            {
              "id": "D",
              "text": "CPU, GPU, and RAM"
            }
          ],
          "hint": "Metrics, Logs, and Distributed Traces.",
          "explanation": "Metrics show trends and trigger alerts; Logs provide detailed context; Distributed Traces pinpoint exact bottlenecks across microservice hops.",
          "sourceRef": "Tech Stacks Guide (Topic 7)",
          "conceptTag": "Observability"
        },
        {
          "id": "5eff3150-46d3-41fb-9a1e-0832af316754",
          "type": "single",
          "prompt": "Managed Cloud Databases: Why do modern startups prefer managed database services (e.g. AWS RDS or Supabase) over renting a bare Linux VM and running PostgreSQL manually?",
          "options": [
            {
              "id": "A",
              "text": "Managed services automate OS patching, automated point-in-time backups, multi-AZ failover, and storage auto-scaling, freeing engineers to build product features"
            },
            {
              "id": "B",
              "text": "PostgreSQL cannot install on Linux VMs"
            },
            {
              "id": "C",
              "text": "Managed databases are legally required by international law"
            },
            {
              "id": "D",
              "text": "Managed databases are completely free"
            }
          ],
          "hint": "Saves expensive DBA operational overhead.",
          "explanation": "Managed services eliminate the heavy operational overhead of disaster recovery, automatic failover, patching, and disk management.",
          "sourceRef": "Tech Stacks Guide (Topic 8)",
          "conceptTag": "Cloud Services"
        },
        {
          "id": "4afe976e-b009-42ba-8496-575975ccb011",
          "type": "single",
          "prompt": "Blue-Green Deployment: Which deployment strategy spins up an identical new version environment alongside production, tests it, and switches traffic instantly at the load balancer?",
          "options": [
            {
              "id": "A",
              "text": "Blue-Green Deployment"
            },
            {
              "id": "B",
              "text": "Cold Reboot Deployment"
            },
            {
              "id": "C",
              "text": "Manual FTP Drag-and-Drop"
            },
            {
              "id": "D",
              "text": "Forklift Migration"
            }
          ],
          "hint": "Instant traffic switch with zero downtime.",
          "explanation": "Blue-Green keeps two identical environments, switching routing instantly upon passing smoke tests to deliver zero downtime and instant rollback.",
          "sourceRef": "Tech Stacks Guide (Topic 9)",
          "conceptTag": "Zero-Downtime Deployments"
        },
        {
          "id": "5a40ae28-c0f8-4fc1-b05a-c2d084e88021",
          "type": "single",
          "prompt": "Secrets Management: Where should sensitive API keys, database passwords, and private certificates be stored in modern web production stacks?",
          "options": [
            {
              "id": "A",
              "text": "Dedicated secret vaults (AWS Secrets Manager, HashiCorp Vault, Azure Key Vault) and injected at runtime via environment variables"
            },
            {
              "id": "B",
              "text": "Hardcoded in public git repository source files"
            },
            {
              "id": "C",
              "text": "Plaintext in public frontend JavaScript bundles"
            },
            {
              "id": "D",
              "text": "In user browser cookies"
            }
          ],
          "hint": "Encrypted secret vaults with runtime injection.",
          "explanation": "Committing credentials to git or frontend client code is a critical vulnerability. Secrets must live in encrypted KMS-backed vaults.",
          "sourceRef": "Tech Stacks Guide (Topic 10)",
          "conceptTag": "Secrets Management"
        }
      ]
    },
    {
      "id": "cf3faa39-cb06-4cbf-b239-cbe4210b51ee",
      "materialId": "pm2-tech-guide",
      "title": "[Easy] Set 2: Backend Frameworks & Microservice Languages",
      "difficulty": "easy",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "b8693b98-9c1f-46a5-85c8-77dc0303cc08",
          "type": "single",
          "prompt": "Frontend Framework Selection (React vs Vue vs Angular): When is enterprise Angular preferred over React for large-scale enterprise development teams?",
          "options": [
            {
              "id": "A",
              "text": "When the organization mandates a highly opinionated, full-featured framework with strict TypeScript enforcement, built-in dependency injection, and standardized routing out of the box"
            },
            {
              "id": "B",
              "text": "When the team only knows CSS"
            },
            {
              "id": "C",
              "text": "When the application has no backend"
            },
            {
              "id": "D",
              "text": "When building mobile apps for flip phones"
            }
          ],
          "hint": "Opinionated structure for large teams.",
          "explanation": "Angular enforces strict architectural patterns and standard libraries, making it easier for large enterprise teams to write consistent code across 50 squads.",
          "sourceRef": "Tech Stacks Guide (Topic 11)",
          "conceptTag": "Frontend Frameworks"
        },
        {
          "id": "3f26ce0c-ae5a-4036-8623-34d751332d3a",
          "type": "single",
          "prompt": "Svelte / SvelteKit Advantage: How does Svelte differ architecturally from React and Vue regarding DOM updates?",
          "options": [
            {
              "id": "A",
              "text": "Svelte shifts work from the browser to the build-step compile phase, updating the real DOM surgically without a heavy Virtual DOM runtime overhead"
            },
            {
              "id": "B",
              "text": "Svelte only works on mobile devices"
            },
            {
              "id": "C",
              "text": "Svelte requires a mainframe computer"
            },
            {
              "id": "D",
              "text": "Svelte replaces CSS with Python"
            }
          ],
          "hint": "Compile-time framework with no Virtual DOM.",
          "explanation": "Svelte compiles components into tiny vanilla JavaScript code that directly mutates DOM nodes, achieving smaller bundle sizes and faster runtime execution.",
          "sourceRef": "Tech Stacks Guide (Topic 12)",
          "conceptTag": "Frontend Performance"
        },
        {
          "id": "d7577831-fa79-41c8-be5b-c3890fb5e70a",
          "type": "single",
          "prompt": "Micro-Frontends: What organizational and architectural problem do Micro-Frontends solve for 200+ person engineering organizations?",
          "options": [
            {
              "id": "A",
              "text": "Allowing autonomous squads to build, test, and independently deploy separate portions of a single web portal using different technologies without waiting on other teams"
            },
            {
              "id": "B",
              "text": "Making websites load 1,000 times faster"
            },
            {
              "id": "C",
              "text": "Eliminating the need for backend APIs"
            },
            {
              "id": "D",
              "text": "Allowing users to write their own JavaScript"
            }
          ],
          "hint": "Decouples deployment across large teams.",
          "explanation": "Micro-frontends decompose monolithic frontend applications so independent product teams can deploy user-facing features without coordinated monolithic releases.",
          "sourceRef": "Tech Stacks Guide (Topic 13)",
          "conceptTag": "Micro-Frontends"
        },
        {
          "id": "e93f49cc-d8e0-4dcf-bf12-9ab38b4e5622",
          "type": "single",
          "prompt": "Backend Language Trade-off (Go vs Python): Why do companies like Uber and Google choose Go (Golang) over Python for high-throughput network microservices?",
          "options": [
            {
              "id": "A",
              "text": "Go compiles to a single native binary, executes true multi-threaded concurrency via lightweight Goroutines, and consumes a fraction of the memory and CPU of interpreted Python"
            },
            {
              "id": "B",
              "text": "Go has more AI libraries than Python"
            },
            {
              "id": "C",
              "text": "Python cannot make HTTP requests"
            },
            {
              "id": "D",
              "text": "Go is the only language supported on AWS"
            }
          ],
          "hint": "High concurrency and low memory footprint.",
          "explanation": "Go's static compilation, goroutine scheduler, and minimal memory footprint make it ideal for microservices handling 100,000 requests per second.",
          "sourceRef": "Tech Stacks Guide (Topic 14)",
          "conceptTag": "Backend Trade-offs"
        },
        {
          "id": "870cf6d8-7c53-488a-9cb1-1f3ca7e5241f",
          "type": "single",
          "prompt": "Backend Language Trade-off (Node.js vs Java Spring Boot): When is Java Spring Boot preferred over Node.js for Fortune 500 enterprise banking backends?",
          "options": [
            {
              "id": "A",
              "text": "When enterprise compliance demands strong compile-time static typing, robust multi-threading for CPU-bound computations, and mature integration with legacy banking mainframes"
            },
            {
              "id": "B",
              "text": "Because Java runs only in web browsers"
            },
            {
              "id": "C",
              "text": "Because Node.js cannot connect to SQL databases"
            },
            {
              "id": "D",
              "text": "Because Java hosting is completely free"
            }
          ],
          "hint": "Enterprise multi-threading and type safety.",
          "explanation": "Java Spring Boot provides robust multi-threading, enterprise security frameworks, and deep integration with legacy enterprise systems.",
          "sourceRef": "Tech Stacks Guide (Topic 15)",
          "conceptTag": "Enterprise Backends"
        },
        {
          "id": "1c8c80c1-3f53-4198-9082-3fcd97075302",
          "type": "single",
          "prompt": "Kubernetes (K8s) Value: What core capability does Kubernetes provide for containerized microservice architectures?",
          "options": [
            {
              "id": "A",
              "text": "Automated container orchestration: self-healing pod restarts, automated horizontal pod auto-scaling (HPA), rolling updates, and internal service discovery"
            },
            {
              "id": "B",
              "text": "Writing HTML and CSS automatically"
            },
            {
              "id": "C",
              "text": "Designing mobile app icons"
            },
            {
              "id": "D",
              "text": "Replacing relational databases with text files"
            }
          ],
          "hint": "Orchestrates container lifecycle and scaling.",
          "explanation": "Kubernetes automates deploying, scaling, and managing containerized applications across a cluster of server nodes.",
          "sourceRef": "Tech Stacks Guide (Topic 16)",
          "conceptTag": "Kubernetes & Containers"
        },
        {
          "id": "cfe305d0-29f6-4759-90f5-bd39061af719",
          "type": "single",
          "prompt": "Kubernetes Helm Charts: What is a Helm chart in Kubernetes environments?",
          "options": [
            {
              "id": "A",
              "text": "A package manager that bundles declarative Kubernetes YAML manifests into versioned, parameterized templates for reproducible application deployments"
            },
            {
              "id": "B",
              "text": "A navigation tool for ships"
            },
            {
              "id": "C",
              "text": "A tool for editing photos"
            },
            {
              "id": "D",
              "text": "A database engine"
            }
          ],
          "hint": "Package manager for Kubernetes manifests.",
          "explanation": "Helm charts package complex Kubernetes resources (Deployments, Services, Ingresses) into reusable, configurable templates.",
          "sourceRef": "Tech Stacks Guide (Topic 17)",
          "conceptTag": "Kubernetes Helm"
        },
        {
          "id": "56644d2c-376b-4916-8e89-3b6fd0af6560",
          "type": "single",
          "prompt": "Service Mesh (Istio / Linkerd): What role does a Service Mesh play in a complex Kubernetes microservices deployment?",
          "options": [
            {
              "id": "A",
              "text": "Provides dedicated infrastructure for transparent service-to-service communication, enforcing mutual TLS (mTLS) encryption, traffic shaping, and distributed tracing"
            },
            {
              "id": "B",
              "text": "Replaces the frontend React application"
            },
            {
              "id": "C",
              "text": "Acts as the physical network router in the data center"
            },
            {
              "id": "D",
              "text": "Deletes old code automatically"
            }
          ],
          "hint": "Manages east-west traffic security and telemetry.",
          "explanation": "Service meshes inject sidecar proxies to manage service-to-service security, retries, and telemetry without modifying application code.",
          "sourceRef": "Tech Stacks Guide (Topic 18)",
          "conceptTag": "Service Mesh"
        },
        {
          "id": "fcae8498-929e-45ae-90ad-a0b8502fb2f0",
          "type": "single",
          "prompt": "Canary Deployments: What is the primary safety mechanism of a Canary Deployment?",
          "options": [
            {
              "id": "A",
              "text": "Routing a tiny percentage (e.g. 2%) of production user traffic to the new version while monitoring error rates, before rolling it out to 100% of users"
            },
            {
              "id": "B",
              "text": "Testing code on a developer's laptop"
            },
            {
              "id": "C",
              "text": "Deploying code only on weekends"
            },
            {
              "id": "D",
              "text": "Shutting down the website during updates"
            }
          ],
          "hint": "Limits blast radius by testing on 2% of live traffic.",
          "explanation": "Canary releases expose new code to a small subset of real users, allowing automated monitoring to detect spikes in 500 errors and rollback safely.",
          "sourceRef": "Tech Stacks Guide (Topic 19)",
          "conceptTag": "Deployment Safety"
        },
        {
          "id": "53809081-1744-4ad1-bfe9-f47102b185a1",
          "type": "single",
          "prompt": "Chaos Engineering (Chaos Monkey): Why do engineering teams like Netflix intentionally kill production servers using Chaos Engineering tools?",
          "options": [
            {
              "id": "A",
              "text": "To proactively verify that the system automatically tolerates hardware failures and self-heals without degrading end-user experience before real disasters occur"
            },
            {
              "id": "B",
              "text": "To punish lazy developers"
            },
            {
              "id": "C",
              "text": "To save on monthly AWS bills"
            },
            {
              "id": "D",
              "text": "To test user patience"
            }
          ],
          "hint": "Proves system resilience under real-world failures.",
          "explanation": "Chaos engineering injects controlled failures to validate that automated failover, autoscaling, and circuit breakers work as designed.",
          "sourceRef": "Tech Stacks Guide (Topic 20)",
          "conceptTag": "Chaos Engineering"
        }
      ]
    },
    {
      "id": "8b73a478-b697-4f30-ad40-4605769fa529",
      "materialId": "pm2-tech-guide",
      "title": "[Medium] Set 3: Cloud Infrastructure (AWS vs Azure vs GCP) & IaC",
      "difficulty": "medium",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "1c101c1a-e3a8-4b00-bd8e-9e04b3826794",
          "type": "single",
          "prompt": "Static Code Analysis & Linting (SonarQube / ESLint): Where should static analysis tools run in the product development lifecycle?",
          "options": [
            {
              "id": "A",
              "text": "Automatically on every Git Pull Request inside the CI/CD pipeline, blocking PRs with security vulnerabilities, bad code smells, or low test coverage"
            },
            {
              "id": "B",
              "text": "Only once a year during annual tax audits"
            },
            {
              "id": "C",
              "text": "Manually in the browser console"
            },
            {
              "id": "D",
              "text": "On customer devices after download"
            }
          ],
          "hint": "Automated safety gate on every PR.",
          "explanation": "Automated static analysis catches security flaws, code smells, and regression vulnerabilities before code ever merges into main branches.",
          "sourceRef": "Tech Stacks Guide (Topic 21)",
          "conceptTag": "DevOps Quality"
        },
        {
          "id": "ebb8da96-c348-4ec1-895e-4aeef74eb1f5",
          "type": "single",
          "prompt": "Single Sign-On (SSO) with SAML / OIDC: Why is SAML 2.0 or OIDC enterprise SSO mandatory for selling software to large corporate enterprises?",
          "options": [
            {
              "id": "A",
              "text": "It allows enterprise IT administrators to centrally manage, enforce MFA on, and immediately de-provision employee access through their corporate Identity Provider (Okta, Azure AD)"
            },
            {
              "id": "B",
              "text": "It makes the website load in 1 millisecond"
            },
            {
              "id": "C",
              "text": "It eliminates the need for software licenses"
            },
            {
              "id": "D",
              "text": "It automatically writes customer support tickets"
            }
          ],
          "hint": "Centralized enterprise access control.",
          "explanation": "Enterprise IT demands centralized access management so when an employee is terminated, their access to all SaaS vendors is revoked instantly in one click.",
          "sourceRef": "Tech Stacks Guide (Topic 22)",
          "conceptTag": "Enterprise SSO"
        },
        {
          "id": "118b1e37-8406-4958-9a41-cc4d8d90b3cd",
          "type": "single",
          "prompt": "Role-Based Access Control (RBAC) vs Attribute-Based Access Control (ABAC): When does an enterprise product require ABAC instead of standard RBAC?",
          "options": [
            {
              "id": "A",
              "text": "When permissions depend on dynamic contextual conditions (e.g. user location, time of day, classification level of document) rather than static job roles"
            },
            {
              "id": "B",
              "text": "When the company has fewer than 5 employees"
            },
            {
              "id": "C",
              "text": "When using a NoSQL database"
            },
            {
              "id": "D",
              "text": "When the application runs offline"
            }
          ],
          "hint": "Dynamic fine-grained context.",
          "explanation": "While RBAC grants permissions based on static roles (Admin, Editor), ABAC evaluates fine-grained dynamic attributes (e.g. IP range, shift hours, clearance).",
          "sourceRef": "Tech Stacks Guide (Topic 23)",
          "conceptTag": "Access Control"
        },
        {
          "id": "10d687da-126d-4e98-ac5d-c88cd653d6c0",
          "type": "single",
          "prompt": "Audit Logging & Compliance: What information MUST an enterprise audit log capture for compliance under SOC2 and HIPAA?",
          "options": [
            {
              "id": "A",
              "text": "Who performed the action (User ID), What was changed, When it occurred (Timestamp), and Where it originated (IP address & resource ID)"
            },
            {
              "id": "B",
              "text": "The user's favorite color and music playlist"
            },
            {
              "id": "C",
              "text": "The developer's salary"
            },
            {
              "id": "D",
              "text": "The company's stock price"
            }
          ],
          "hint": "Immutable who, what, when, and where.",
          "explanation": "Compliance frameworks require tamper-proof audit trails recording user identity, timestamps, IP origins, and exact resource state changes.",
          "sourceRef": "Tech Stacks Guide (Topic 24)",
          "conceptTag": "Audit & Compliance"
        },
        {
          "id": "d3e219e7-3d0b-4c1b-85ec-4db694a624c1",
          "type": "single",
          "prompt": "Cloud Cost Management (FinOps): What is the primary role of FinOps in a cloud-first product company?",
          "options": [
            {
              "id": "A",
              "text": "Fostering financial accountability across engineering teams to monitor, optimize, and eliminate wasted cloud infrastructure spend (idle VMs, unattached EBS disks, unindexed queries)"
            },
            {
              "id": "B",
              "text": "Canceling all software subscriptions"
            },
            {
              "id": "C",
              "text": "Forcing engineers to work on local laptops without cloud"
            },
            {
              "id": "D",
              "text": "Selling servers on eBay"
            }
          ],
          "hint": "Cloud cost optimization and accountability.",
          "explanation": "FinOps provides visibility and governance into cloud bills, rightsizing resources, utilizing reserved instances, and pruning orphaned assets.",
          "sourceRef": "Tech Stacks Guide (Topic 25)",
          "conceptTag": "FinOps & Cloud Costs"
        },
        {
          "id": "6920953b-45c9-4c37-8acf-9662740a1794",
          "type": "single",
          "prompt": "AWS Reserved Instances vs On-Demand: How do Reserved Instances (or Savings Plans) save cloud infrastructure costs?",
          "options": [
            {
              "id": "A",
              "text": "Committing to a 1-year or 3-year term of consistent compute usage in exchange for up to a 60-70% discount compared to pay-as-you-go On-Demand rates"
            },
            {
              "id": "B",
              "text": "They make electricity free"
            },
            {
              "id": "C",
              "text": "They run on older deprecated servers"
            },
            {
              "id": "D",
              "text": "They only allow server usage between 9 AM and 5 PM"
            }
          ],
          "hint": "Term commitment discounts.",
          "explanation": "By committing to a baseline compute footprint for 1-3 years, companies save up to 72% over volatile pay-as-you-go pricing.",
          "sourceRef": "Tech Stacks Guide (Topic 26)",
          "conceptTag": "Cloud Economics"
        },
        {
          "id": "9f49037d-9170-4350-999c-8dc92f09201d",
          "type": "single",
          "prompt": "Disaster Recovery RTO vs RPO: If an enterprise product promises an RPO of 15 minutes, what does that dictate for the database engineering team?",
          "options": [
            {
              "id": "A",
              "text": "Database backups or transaction log snapshots must be archived at least every 15 minutes so no more than 15 minutes of customer data can ever be lost in a disaster"
            },
            {
              "id": "B",
              "text": "The system must recover in 15 minutes"
            },
            {
              "id": "C",
              "text": "Employees must arrive at the office in 15 minutes"
            },
            {
              "id": "D",
              "text": "Servers must reboot every 15 minutes"
            }
          ],
          "hint": "Maximum 15 minutes of lost transactions.",
          "explanation": "RPO (Recovery Point Objective) measures allowable data loss in time. An RPO of 15 minutes requires continuous replication or 15-minute snapshot intervals.",
          "sourceRef": "Tech Stacks Guide (Topic 27)",
          "conceptTag": "Disaster Recovery"
        },
        {
          "id": "27c6bd57-5e1b-4c40-bdf2-7d3c51dda6ad",
          "type": "single",
          "prompt": "SLA Calculation: If an enterprise SaaS contract specifies a 99.9% ('Three Nines') uptime SLA with financial credits for breaches, what is the maximum allowable downtime per month?",
          "options": [
            {
              "id": "A",
              "text": "Approximately 43.8 minutes of downtime per month"
            },
            {
              "id": "B",
              "text": "24 hours per month"
            },
            {
              "id": "C",
              "text": "5 days per month"
            },
            {
              "id": "D",
              "text": "Zero seconds"
            }
          ],
          "hint": "99.9% = ~43.8 minutes/month.",
          "explanation": "Three nines allows a maximum of 43.8 minutes of unplanned downtime per month before violating customer contractual commitments.",
          "sourceRef": "Tech Stacks Guide (Topic 28)",
          "conceptTag": "SLAs & Uptime"
        },
        {
          "id": "17907709-0636-4985-a633-0d0ec4f015b2",
          "type": "single",
          "prompt": "APM (Application Performance Monitoring): What primary insight does an APM tool (e.g. Datadog, New Relic) provide over basic CPU/RAM graphs?",
          "options": [
            {
              "id": "A",
              "text": "Distributed code-level transaction traces showing exact execution times inside specific functions, database queries, and third-party API calls"
            },
            {
              "id": "B",
              "text": "Checking employee keyboard activity"
            },
            {
              "id": "C",
              "text": "Scanning for spelling mistakes in code comments"
            },
            {
              "id": "D",
              "text": "Counting daily website pageviews"
            }
          ],
          "hint": "Code-level and query-level latency breakdown.",
          "explanation": "APM tracks requests through software code, identifying whether a 3-second delay was caused by a slow database query, Redis wait, or slow Python function.",
          "sourceRef": "Tech Stacks Guide (Topic 29)",
          "conceptTag": "Observability APM"
        },
        {
          "id": "0c7a3971-dee6-45b7-a936-fd9c1e48fb4c",
          "type": "single",
          "prompt": "Log Aggregation (ELK / Grafana Loki): Why must multi-server cloud environments forward logs to a centralized aggregation platform rather than storing logs on local disk?",
          "options": [
            {
              "id": "A",
              "text": "Because cloud servers are ephemeral and can terminate at any moment, destroying local logs, and centralized search allows cross-server debugging in one dashboard"
            },
            {
              "id": "B",
              "text": "Because local disks cannot store text files"
            },
            {
              "id": "C",
              "text": "Because local logs violate international copyright law"
            },
            {
              "id": "D",
              "text": "Because centralized logs are free"
            }
          ],
          "hint": "Ephemeral server lifecycles destroy local logs.",
          "explanation": "Auto-scaling groups terminate instances continuously. Centralized log shippers (Loki, Elasticsearch) preserve logs permanently for debugging.",
          "sourceRef": "Tech Stacks Guide (Topic 30)",
          "conceptTag": "Log Aggregation"
        }
      ]
    },
    {
      "id": "1df44c00-667b-4d2e-a72d-e00cb3760ac8",
      "materialId": "pm2-tech-guide",
      "title": "[Medium] Set 4: Containers, Docker & Kubernetes Orchestration",
      "difficulty": "medium",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "24426a68-9bc4-4db2-a596-11f2c648a9b9",
          "type": "single",
          "prompt": "Vulnerability Scanning (SAST vs DAST): What is the difference between Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST)?",
          "options": [
            {
              "id": "A",
              "text": "SAST inspects source code from the inside without running the app; DAST attacks the running application from the outside to find vulnerabilities like an external hacker"
            },
            {
              "id": "B",
              "text": "SAST is for mobile; DAST is for desktops"
            },
            {
              "id": "C",
              "text": "SAST runs on hardware; DAST runs on paper"
            },
            {
              "id": "D",
              "text": "There is no difference"
            }
          ],
          "hint": "Inside source code analysis vs outside runtime attack testing.",
          "explanation": "SAST analyzes code for flaws (hardcoded credentials, unsafe libraries); DAST tests live HTTP endpoints against real injection attacks.",
          "sourceRef": "Tech Stacks Guide (Topic 31)",
          "conceptTag": "Security Testing"
        },
        {
          "id": "3c69c391-9ad6-45df-876d-2b0c979986c1",
          "type": "single",
          "prompt": "Multi-Cloud Strategy Trade-off: What is the primary downside of building an application to be completely cloud-agnostic across AWS, Azure, and Google Cloud simultaneously?",
          "options": [
            {
              "id": "A",
              "text": "Massive engineering complexity and lowest-common-denominator architecture that prevents teams from leveraging high-value proprietary services (e.g. AWS Aurora, BigQuery)"
            },
            {
              "id": "B",
              "text": "Cloud providers refuse to sell servers to multi-cloud companies"
            },
            {
              "id": "C",
              "text": "Multi-cloud systems cannot connect to the internet"
            },
            {
              "id": "D",
              "text": "Multi-cloud only works on Windows"
            }
          ],
          "hint": "Lowest-common-denominator complexity.",
          "explanation": "Abstracting cloud-specific features forces teams to rebuild standard services (queues, IAM) manually, creating enormous architectural overhead.",
          "sourceRef": "Tech Stacks Guide (Topic 32)",
          "conceptTag": "Multi-Cloud Strategy"
        },
        {
          "id": "d31b89da-83bc-4ba1-a1ab-3eb4423a5d14",
          "type": "single",
          "prompt": "Zero-Trust Architecture: What is the core guiding principle of Zero-Trust Network Architecture?",
          "options": [
            {
              "id": "A",
              "text": "'Never trust, always verify': every request, user, and service-to-service communication must be authenticated and authorized, even inside the internal corporate network perimeter"
            },
            {
              "id": "B",
              "text": "Users are not allowed to use computers"
            },
            {
              "id": "C",
              "text": "All databases must be deleted after 5 PM"
            },
            {
              "id": "D",
              "text": "Only company executives are allowed internet access"
            }
          ],
          "hint": "Never trust, always verify.",
          "explanation": "Zero trust assumes attackers already breach the perimeter. Every network hop, API call, and microservice requires explicit authentication and least-privilege authorization.",
          "sourceRef": "Tech Stacks Guide (Topic 33)",
          "conceptTag": "Zero-Trust Security"
        },
        {
          "id": "3515e466-47e7-46fa-8cd0-073cd713b456",
          "type": "single",
          "prompt": "Container Image Vulnerability Scanning: Why should container registries (e.g. AWS ECR, Docker Hub) run automated CVE vulnerability scans on Docker images?",
          "options": [
            {
              "id": "A",
              "text": "To detect outdated base operating system packages and libraries with known security exploits (CVEs) before images are deployed to production clusters"
            },
            {
              "id": "B",
              "text": "To compress image file sizes"
            },
            {
              "id": "C",
              "text": "To count lines of code"
            },
            {
              "id": "D",
              "text": "To convert containers into virtual machines"
            }
          ],
          "hint": "Blocks vulnerable CVE packages before deployment.",
          "explanation": "Container images often inherit outdated Debian/Ubuntu packages containing known vulnerabilities. Automated scanning blocks risky deployments.",
          "sourceRef": "Tech Stacks Guide (Topic 34)",
          "conceptTag": "Container Security"
        },
        {
          "id": "a30ded0a-9504-4950-8d89-21a57c98a8b1",
          "type": "single",
          "prompt": "Infrastructure Drifting: What is 'Configuration Drift' in cloud environments?",
          "options": [
            {
              "id": "A",
              "text": "When cloud infrastructure changes over time due to manual ad-hoc tweaks in the web console, causing production to diverge from version-controlled Terraform code"
            },
            {
              "id": "B",
              "text": "When servers physically move inside a data center"
            },
            {
              "id": "C",
              "text": "When cloud bills increase each month"
            },
            {
              "id": "D",
              "text": "When developers forget their passwords"
            }
          ],
          "hint": "Manual console changes diverge from code.",
          "explanation": "Configuration drift occurs when engineers make manual emergency edits in cloud consoles without updating Terraform, leading to irreproducible environments.",
          "sourceRef": "Tech Stacks Guide (Topic 35)",
          "conceptTag": "IaC & Governance"
        },
        {
          "id": "82e01301-b9de-4e91-9413-5611e2f3934b",
          "type": "single",
          "prompt": "Serverless vs Container Orchestration: In what product scenario should engineering choose Docker/Kubernetes over AWS Lambda Serverless?",
          "options": [
            {
              "id": "A",
              "text": "Long-running, computationally heavy tasks (e.g. video transcoding, machine learning inference) or predictable high-throughput 24/7 web traffic"
            },
            {
              "id": "B",
              "text": "A simple webhook receiver that runs once per day"
            },
            {
              "id": "C",
              "text": "A basic portfolio website"
            },
            {
              "id": "D",
              "text": "An app with 1 user"
            }
          ],
          "hint": "Long-running compute and predictable sustained scale.",
          "explanation": "Serverless functions have execution time limits (15 minutes on Lambda) and become expensive under steady high load compared to container clusters.",
          "sourceRef": "Tech Stacks Guide (Topic 36)",
          "conceptTag": "Architecture Selection"
        },
        {
          "id": "494c49a3-64cb-4cd8-bba5-06bf2a1391c9",
          "type": "single",
          "prompt": "Progressive Web Apps (PWA): What core capabilities do Progressive Web Apps provide over traditional web applications?",
          "options": [
            {
              "id": "A",
              "text": "Offline functionality via Service Workers, background data synchronization, push notifications, and home screen installability on mobile devices"
            },
            {
              "id": "B",
              "text": "Direct access to modify the device's kernel"
            },
            {
              "id": "C",
              "text": "Guaranteed 100% discount on cloud hosting"
            },
            {
              "id": "D",
              "text": "Free app store distribution without web servers"
            }
          ],
          "hint": "Offline caching and mobile installability.",
          "explanation": "PWAs use browser Service Workers to cache resources for offline access and send native push notifications without app store approval friction.",
          "sourceRef": "Tech Stacks Guide (Topic 37)",
          "conceptTag": "Web Stacks"
        },
        {
          "id": "559b3c06-ca18-4fd9-8ad5-374787aa62ae",
          "type": "single",
          "prompt": "Cross-Platform Mobile (React Native / Flutter vs Native Swift/Kotlin): When is cross-platform React Native or Flutter preferred for early-stage startup MVPs?",
          "options": [
            {
              "id": "A",
              "text": "Building a single codebase that deploys simultaneously to iOS and Android, cutting initial engineering headcount and feature development time in half"
            },
            {
              "id": "B",
              "text": "When building 3D gaming engines with microsecond graphics demands"
            },
            {
              "id": "C",
              "text": "When building operating system device drivers"
            },
            {
              "id": "D",
              "text": "When the company has unlimited engineering budget"
            }
          ],
          "hint": "Single codebase for iOS and Android velocity.",
          "explanation": "Cross-platform frameworks share 80-90% of code between iOS and Android, allowing small teams to ship features to both app stores simultaneously.",
          "sourceRef": "Tech Stacks Guide (Topic 38)",
          "conceptTag": "Mobile Stacks"
        },
        {
          "id": "b7e46975-0f98-40a1-ba10-c2e67850fde8",
          "type": "single",
          "prompt": "Mobile Deep Linking (Universal Links / App Links): What is the business value of implementing Universal Links (iOS) and App Links (Android)?",
          "options": [
            {
              "id": "A",
              "text": "Allowing marketing emails and social ads to open specific in-app product screens directly if the app is installed, falling back to the web store if not"
            },
            {
              "id": "B",
              "text": "Making mobile apps load 10x faster"
            },
            {
              "id": "C",
              "text": "Bypassing app store security reviews"
            },
            {
              "id": "D",
              "text": "Eliminating mobile cellular data charges"
            }
          ],
          "hint": "Frictionless conversion from web to native screens.",
          "explanation": "Deep linking routes users directly to target in-app conversion funnels (checkout, promos), eliminating dropped conversions from generic app launches.",
          "sourceRef": "Tech Stacks Guide (Topic 39)",
          "conceptTag": "Mobile Product Growth"
        },
        {
          "id": "546931a5-b65b-413d-a424-cc85387501e1",
          "type": "single",
          "prompt": "A/B Testing Architecture: How does client-side A/B testing (e.g. visual DOM flickering tools) compare to server-side feature flagging?",
          "options": [
            {
              "id": "A",
              "text": "Server-side experimentation eliminates 'flicker' (CLS), prevents exposing unreleased feature logic in client code, and enables testing backend pricing and algorithms"
            },
            {
              "id": "B",
              "text": "Client-side testing is 100x more secure"
            },
            {
              "id": "C",
              "text": "Server-side testing cannot show different colors"
            },
            {
              "id": "D",
              "text": "There is no difference"
            }
          ],
          "hint": "Server-side prevents flickering and secures test logic.",
          "explanation": "Client-side A/B testing alters DOM elements after initial render, causing visual layout shifts (flicker). Server-side flags render correct variants natively.",
          "sourceRef": "Tech Stacks Guide (Topic 40)",
          "conceptTag": "Experimentation Architecture"
        }
      ]
    },
    {
      "id": "b6e8a6ee-50f1-483f-82c0-bb29dabd77e7",
      "materialId": "pm2-tech-guide",
      "title": "[Hard] Set 5: DevOps CI/CD, Observability & Enterprise Security",
      "difficulty": "hard",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "c95c0602-2519-4106-a03e-b5c3bdeb8c70",
          "type": "single",
          "prompt": "API Rate Limiting by Plan: How should an enterprise SaaS platform enforce API limits when a Free user upgrades to an Enterprise plan?",
          "options": [
            {
              "id": "A",
              "text": "Store the user's active tier in an in-memory cache (Redis) with dynamic token bucket allowances, updating the allowance instantly upon subscription webhook receipt"
            },
            {
              "id": "B",
              "text": "Hardcode the user's IP address into server files"
            },
            {
              "id": "C",
              "text": "Require the user to reinstall their app"
            },
            {
              "id": "D",
              "text": "Reboot the cloud infrastructure"
            }
          ],
          "hint": "Dynamic Redis token bucket allowances.",
          "explanation": "Decoupling tier definitions into Redis allows instant rate limit adjustments upon receiving payment webhooks without restarting services.",
          "sourceRef": "Tech Stacks Guide (Topic 41)",
          "conceptTag": "API Tiering"
        },
        {
          "id": "729e5165-de44-4e10-a93e-508492fa0385",
          "type": "single",
          "prompt": "Database Connection Pooling (RDS Proxy): Why do applications deployed on AWS Lambda use AWS RDS Proxy when connecting to Aurora PostgreSQL?",
          "options": [
            {
              "id": "A",
              "text": "It maintains an external warm connection pool that shares and reuses database connections across thousands of fleeting Lambda invocations, preventing connection exhaustion"
            },
            {
              "id": "B",
              "text": "It translates PostgreSQL into MongoDB"
            },
            {
              "id": "C",
              "text": "It makes database queries free of charge"
            },
            {
              "id": "D",
              "text": "It formats tables in HTML"
            }
          ],
          "hint": "Reuses connections across fleeting serverless runs.",
          "explanation": "Lambda instances spin up and die rapidly. RDS Proxy pools database connections externally so Aurora never crashes from connection storms.",
          "sourceRef": "Tech Stacks Guide (Topic 42)",
          "conceptTag": "Serverless Infrastructure"
        },
        {
          "id": "6ce9f6c6-e9ba-471d-8d18-63c6a7bbc0ae",
          "type": "single",
          "prompt": "Blue-Green vs Canary Deployments: In what scenario is a Canary deployment safer than a Blue-Green deployment?",
          "options": [
            {
              "id": "A",
              "text": "When releasing high-risk database or core algorithmic changes where bugs could corrupt data across 100% of users simultaneously if switched all at once"
            },
            {
              "id": "B",
              "text": "When the engineering team wants to take the day off"
            },
            {
              "id": "C",
              "text": "When the website has zero users"
            },
            {
              "id": "D",
              "text": "When the application is built in PHP"
            }
          ],
          "hint": "Minimizes blast radius of latent critical bugs.",
          "explanation": "While Blue-Green exposes 100% of traffic to the new version instantly, Canary routes only 1-2% of users initially, containing potential damage.",
          "sourceRef": "Tech Stacks Guide (Topic 43)",
          "conceptTag": "Deployment Strategies"
        },
        {
          "id": "b615875f-4b79-44b0-9a17-a1bd7614a1c4",
          "type": "single",
          "prompt": "Continuous Deployment (CD) vs Continuous Delivery: What is the defining difference between Continuous Delivery and Continuous Deployment?",
          "options": [
            {
              "id": "A",
              "text": "Continuous Delivery automatically prepares tested release artifacts but requires manual human approval to deploy to production; Continuous Deployment deploys every passing commit to production automatically"
            },
            {
              "id": "B",
              "text": "Continuous Delivery is for mobile; Continuous Deployment is for web"
            },
            {
              "id": "C",
              "text": "Continuous Delivery requires no tests"
            },
            {
              "id": "D",
              "text": "Continuous Deployment is illegal in enterprise software"
            }
          ],
          "hint": "Manual approval gate vs 100% automated release.",
          "explanation": "Continuous Delivery keeps software in a perpetually deployable state awaiting human sign-off; Continuous Deployment ships straight to production on green tests.",
          "sourceRef": "Tech Stacks Guide (Topic 44)",
          "conceptTag": "DevOps Pipelines"
        },
        {
          "id": "f7176fd6-ced6-4607-b2fd-ab1b109ee1fc",
          "type": "single",
          "prompt": "Database Migration Drift: What risk occurs if an engineer manually runs an `ALTER TABLE` query directly in production without writing a migration script in Git?",
          "options": [
            {
              "id": "A",
              "text": "The staging environment and automated test pipelines drift out of sync with production, causing subsequent automated CI/CD deployments to crash unexpectedly"
            },
            {
              "id": "B",
              "text": "The database automatically turns off"
            },
            {
              "id": "C",
              "text": "The cloud provider cancels the account"
            },
            {
              "id": "D",
              "text": "The query runs 10x faster"
            }
          ],
          "hint": "Divergence crashes subsequent automated deployments.",
          "explanation": "Unversioned manual database tweaks create hidden schema divergence, causing subsequent automated migrations to fail or drop columns unexpectedly.",
          "sourceRef": "Tech Stacks Guide (Topic 45)",
          "conceptTag": "Database Governance"
        },
        {
          "id": "9e366c5f-41a0-411c-8a1e-b0f4255049c9",
          "type": "single",
          "prompt": "Distributed Tracing (OpenTelemetry): What is the purpose of passing a `trace_id` header (e.g. `traceparent`) across microservice HTTP requests?",
          "options": [
            {
              "id": "A",
              "text": "To stitch together a unified end-to-end visualization showing the latency of every internal microservice, database query, and queue message involved in that user's single request"
            },
            {
              "id": "B",
              "text": "To encrypt user passwords"
            },
            {
              "id": "C",
              "text": "To bypass paying API fees"
            },
            {
              "id": "D",
              "text": "To track user physical GPS location"
            }
          ],
          "hint": "Correlates cross-service hops for single user actions.",
          "explanation": "OpenTelemetry trace IDs propagate across distributed network hops, enabling unified latency waterfalls in monitoring tools (Jaeger, Datadog).",
          "sourceRef": "Tech Stacks Guide (Topic 46)",
          "conceptTag": "Distributed Tracing"
        },
        {
          "id": "bf79d15c-418e-4cac-90f5-48a0dc491f6a",
          "type": "single",
          "prompt": "Log PII Masking: Why must logging pipelines automatically redact or mask fields like `password`, `ssn`, and `credit_card_number` before saving logs?",
          "options": [
            {
              "id": "A",
              "text": "To prevent sensitive customer personal identifiable information (PII) from being leaked to developers or third-party log dashboards, violating GDPR and PCI-DSS compliance"
            },
            {
              "id": "B",
              "text": "To save hard drive space"
            },
            {
              "id": "C",
              "text": "Because logging tools cannot display numbers"
            },
            {
              "id": "D",
              "text": "Because PII makes servers crash"
            }
          ],
          "hint": "Prevents regulatory data leakage (GDPR/PCI-DSS).",
          "explanation": "Committing unmasked passwords or credit card numbers to application logs exposes sensitive data to internal staff and violates compliance mandates.",
          "sourceRef": "Tech Stacks Guide (Topic 47)",
          "conceptTag": "Log Security"
        },
        {
          "id": "c32db912-d83a-4356-b1c6-5efd0c26e367",
          "type": "single",
          "prompt": "Container Resource Limits (CPU & Memory Limits): What happens in Kubernetes when a container exceeds its configured `memory.limits`?",
          "options": [
            {
              "id": "A",
              "text": "The Linux kernel terminates the container with an OOMKilled (Out of Memory Killed) error and Kubernetes automatically restarts a fresh pod"
            },
            {
              "id": "B",
              "text": "The computer hard drive melts"
            },
            {
              "id": "C",
              "text": "The container borrows memory from Google"
            },
            {
              "id": "D",
              "text": "The container continues running at half speed"
            }
          ],
          "hint": "OOMKilled by kernel; pod restarts.",
          "explanation": "When a process exceeds its declared memory boundary, the operating system kernel kills the container process instantly to protect node stability.",
          "sourceRef": "Tech Stacks Guide (Topic 48)",
          "conceptTag": "Kubernetes Operations"
        },
        {
          "id": "813388c4-e349-4d29-a7a7-246d9a201bd2",
          "type": "single",
          "prompt": "Content Negotiation (Accept Header): What is the function of the HTTP `Accept` request header sent by a client?",
          "options": [
            {
              "id": "A",
              "text": "It informs the server which MIME types or data formats the client understands and expects in return (e.g. `application/json` vs `text/csv` vs `application/pdf`)"
            },
            {
              "id": "B",
              "text": "It accepts the website's terms of service"
            },
            {
              "id": "C",
              "text": "It accepts the user's credit card payment"
            },
            {
              "id": "D",
              "text": "It accepts cookies automatically"
            }
          ],
          "hint": "Client declares expected response format.",
          "explanation": "Content negotiation allows an endpoint (like `/reports/monthly`) to return JSON, CSV, or PDF based on what the client declares in its `Accept` header.",
          "sourceRef": "Tech Stacks Guide (Topic 49)",
          "conceptTag": "HTTP Standards"
        },
        {
          "id": "1ac7b48f-c855-4ae5-83a1-467ee9df7421",
          "type": "single",
          "prompt": "Disaster Recovery Multi-Region Active-Passive: What is a 'Pilot Light' disaster recovery strategy?",
          "options": [
            {
              "id": "A",
              "text": "Maintaining a minimal, non-scaled core infrastructure footprint (database continuous replication + idle minimal servers) in a secondary region, rapidly scaling up compute only if the primary region dies"
            },
            {
              "id": "B",
              "text": "Leaving one server turned on at night"
            },
            {
              "id": "C",
              "text": "Using emergency batteries during storms"
            },
            {
              "id": "D",
              "text": "Testing code only once per quarter"
            }
          ],
          "hint": "Warm minimal standby scaled up on disaster.",
          "explanation": "Pilot Light keeps critical data synchronized to a standby region with minimal compute, striking an ideal balance between low idle cloud cost and fast RTO.",
          "sourceRef": "Tech Stacks Guide (Topic 50)",
          "conceptTag": "Disaster Recovery"
        }
      ]
    },
    {
      "id": "b27d719d-b8ed-4ac8-8329-6a155a048741",
      "materialId": "pm2-python",
      "title": "[Easy] Set 1: The Python Ecosystem & Where it Fits in the Stack",
      "difficulty": "easy",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "71ffb84a-480c-4a8d-acbc-c42e54cfc474",
          "type": "single",
          "prompt": "FastAPI Async Concurrency: Designing an AI platform where user queries trigger 3 parallel external LLM API calls (1.5s latency each). Why mandate FastAPI over synchronous Flask/Django?",
          "options": [
            {
              "id": "A",
              "text": "FastAPI natively leverages Python's async/await (ASGI), allowing worker threads to handle other client requests while waiting on external network I/O without blocking threads"
            },
            {
              "id": "B",
              "text": "FastAPI compiles Python into machine code, executing CPU-intensive algorithms 100x faster than Flask"
            },
            {
              "id": "C",
              "text": "Flask is deprecated and cannot make HTTP calls to third-party endpoints"
            },
            {
              "id": "D",
              "text": "Django cannot connect to relational databases when using AI agents"
            }
          ],
          "hint": "Asynchronous non-blocking network I/O.",
          "explanation": "FastAPI's ASGI event loop pauses coroutines during external network I/O, continuing to serve incoming traffic without thread blocking.",
          "sourceRef": "Tech Stacks Python (Topic 1)",
          "conceptTag": "FastAPI & Async"
        },
        {
          "id": "f1dab376-d62b-4b4e-abbe-9cd12a0d7c7d",
          "type": "single",
          "prompt": "Time-to-Market Portal: Your enterprise PM team needs an internal portal with RBAC, complex relational models, admin dashboards, and database migrations ready in 2 weeks. Which framework delivers fastest?",
          "options": [
            {
              "id": "A",
              "text": "Django ('batteries-included' with built-in ORM, auto-generated admin panel, and robust auth)"
            },
            {
              "id": "B",
              "text": "Flask (because starting with an empty file is always faster for enterprise auth)"
            },
            {
              "id": "C",
              "text": "FastAPI (requires manually building admin panels and assembling third-party auth libraries)"
            },
            {
              "id": "D",
              "text": "Writing raw WSGI handlers without any framework"
            }
          ],
          "hint": "Batteries-included admin and auth.",
          "explanation": "Django provides an immediate battle-tested admin panel, ORM migrations, and user management out of the box, slashing MVP lead times.",
          "sourceRef": "Tech Stacks Python (Topic 2)",
          "conceptTag": "Django Batteries-Included"
        },
        {
          "id": "4a4cae29-c429-489a-8051-82f5337c3c17",
          "type": "single",
          "prompt": "High-Frequency Trading Trade-off: A junior developer argues Python should be used for a high-frequency trading engine calculating portfolio risk in sub-millisecond real-time. As PM, why push back?",
          "options": [
            {
              "id": "A",
              "text": "Python is dynamically typed, interpreted, and constrained by the GIL, making it unsuited for sub-millisecond CPU-bound compute compared to C++, Rust, or Go"
            },
            {
              "id": "B",
              "text": "Python cannot perform floating-point arithmetic or matrix multiplications"
            },
            {
              "id": "C",
              "text": "Python has no libraries for financial math or statistical calculations"
            },
            {
              "id": "D",
              "text": "Python requires 100x more database connections than compiled languages"
            }
          ],
          "hint": "Interpreted overhead and GIL constraints.",
          "explanation": "Python excels at rapid iteration, web APIs, and data science glue, but compiled languages (Rust, C++, Go) are necessary for sub-millisecond CPU execution.",
          "sourceRef": "Tech Stacks Python (Topic 3)",
          "conceptTag": "Python GIL & Trade-offs"
        },
        {
          "id": "0daaf039-4b3b-4190-b1c5-70e5c80609dd",
          "type": "single",
          "prompt": "Pydantic & Type Hints: What primary engineering value does Pydantic provide in modern Python frameworks like FastAPI?",
          "options": [
            {
              "id": "A",
              "text": "Automatic data parsing, runtime schema validation, and automatic OpenAPI/Swagger documentation generation from Python type hints"
            },
            {
              "id": "B",
              "text": "It converts Python scripts into native iOS Swift binaries"
            },
            {
              "id": "C",
              "text": "It replaces relational database engines with text files"
            },
            {
              "id": "D",
              "text": "It forces Python to execute synchronously without memory allocation"
            }
          ],
          "hint": "Runtime validation and automated Swagger generation.",
          "explanation": "Pydantic enforces strict type validation on incoming JSON payloads and generates comprehensive OpenAPI documentation automatically.",
          "sourceRef": "Tech Stacks Python (Topic 4)",
          "conceptTag": "Pydantic & Validation"
        },
        {
          "id": "5363cc12-edcd-4735-af0f-7c39ec34cf14",
          "type": "single",
          "prompt": "WSGI vs ASGI: When choosing a web server interface for a high-concurrency microservice handling WebSockets, Server-Sent Events (SSE), and async endpoints, which standard must you choose?",
          "options": [
            {
              "id": "A",
              "text": "ASGI (Asynchronous Server Gateway Interface, e.g. Uvicorn)"
            },
            {
              "id": "B",
              "text": "WSGI (Web Server Gateway Interface, e.g. Gunicorn without async workers)"
            },
            {
              "id": "C",
              "text": "CGI (Common Gateway Interface from 1993)"
            },
            {
              "id": "D",
              "text": "FTP Server Gateway"
            }
          ],
          "hint": "ASGI supports asynchronous event protocols.",
          "explanation": "WSGI is synchronous and cannot handle WebSockets or async coroutines without blocking worker threads. ASGI was created specifically to enable async/await.",
          "sourceRef": "Tech Stacks Python (Topic 5)",
          "conceptTag": "WSGI vs ASGI"
        },
        {
          "id": "5759e480-32aa-4df7-a588-7dde8df963c2",
          "type": "single",
          "prompt": "Background Job Offloading: A Python API endpoint generates a heavy 50-page PDF report. If executed synchronously inside the HTTP handler, the browser hangs for 25 seconds. What is the standard Python pattern to solve this?",
          "options": [
            {
              "id": "A",
              "text": "Return an immediate HTTP 202 Accepted response with a task ID, and offload PDF generation to Celery workers using Redis as the message broker"
            },
            {
              "id": "B",
              "text": "Tell users to keep the browser tab open and wait without clicking anything"
            },
            {
              "id": "C",
              "text": "Execute the generation in an infinite while loop on the main server thread"
            },
            {
              "id": "D",
              "text": "Delete all PDF reporting features from the product"
            }
          ],
          "hint": "Offload long compute to Celery background workers.",
          "explanation": "Long-running tasks must be decoupled from the synchronous HTTP request-response cycle using background worker queues (Celery/RQ).",
          "sourceRef": "Tech Stacks Python (Topic 6)",
          "conceptTag": "Celery & Background Tasks"
        },
        {
          "id": "a4e60fc3-1376-4627-81c5-671e50fd463d",
          "type": "true_false",
          "prompt": "Global Interpreter Lock (GIL): True or False: Python's GIL prevents multi-threaded Python programs from executing CPU-bound bytecode in true parallel across multiple CPU cores on a single interpreter process.",
          "options": [
            {
              "id": "A",
              "text": "True"
            },
            {
              "id": "B",
              "text": "False"
            }
          ],
          "hint": "GIL permits only one native thread to run bytecode at once.",
          "explanation": "In CPython, the GIL allows only one thread to execute Python bytecode at a time, requiring multiprocessing rather than multithreading to use all CPU cores.",
          "sourceRef": "Tech Stacks Python (Topic 7)",
          "conceptTag": "Global Interpreter Lock"
        },
        {
          "id": "83fc8322-ada2-4e1a-bbaf-10103250e956",
          "type": "single",
          "prompt": "AI/ML Ecosystem Dominance: Why has Python emerged as the undisputed standard language for Machine Learning and Generative AI (PyTorch, TensorFlow, LangChain)?",
          "options": [
            {
              "id": "A",
              "text": "Python offers high developer velocity and intuitive syntax while wrapping high-performance C/C++ and CUDA numerical compute libraries under the hood"
            },
            {
              "id": "B",
              "text": "Python is the only language capable of communicating with GPUs"
            },
            {
              "id": "C",
              "text": "Python code compiles into faster machine assembly than C++"
            },
            {
              "id": "D",
              "text": "All other programming languages were deprecated by AI researchers"
            }
          ],
          "hint": "High developer velocity wrapping C/CUDA compute.",
          "explanation": "Python acts as the ideal high-level 'glue' language, giving researchers clean, expressive syntax while underlying tensor calculations run on optimized C and CUDA kernels.",
          "sourceRef": "Tech Stacks Python (Topic 8)",
          "conceptTag": "Python in AI/ML"
        },
        {
          "id": "c8216740-eab6-486c-bd78-c2c73e4f81e6",
          "type": "single",
          "prompt": "Virtual Environments & Isolation: Why should a production Python application always use virtual environments (e.g. venv, Poetry) rather than installing packages into global system Python?",
          "options": [
            {
              "id": "A",
              "text": "To prevent dependency version conflicts between different projects and avoid corrupting the host operating system's internal Python packages"
            },
            {
              "id": "B",
              "text": "Virtual environments make Python run in RAM without hard disk storage"
            },
            {
              "id": "C",
              "text": "Global Python packages cannot connect to cloud databases"
            },
            {
              "id": "D",
              "text": "Virtual environments are required to connect to the internet"
            }
          ],
          "hint": "Isolates project dependencies and prevents collisions.",
          "explanation": "Virtual environments guarantee deterministic, reproducible environments and prevent conflicts between package versions required by different services.",
          "sourceRef": "Tech Stacks Python (Topic 9)",
          "conceptTag": "Dependency Management"
        },
        {
          "id": "edd20fdf-83eb-4da4-b03f-c4249f5f1b0a",
          "type": "single",
          "prompt": "Micro-frameworks vs Full-Stack: When is a micro-framework like Flask or FastAPI preferred over full-stack Django?",
          "options": [
            {
              "id": "A",
              "text": "Building lightweight microservices focused purely on single API responsibilities with custom non-relational database layers or serverless cold starts"
            },
            {
              "id": "B",
              "text": "When building an enterprise portal requiring built-in admin panels and relational auth out of the box"
            },
            {
              "id": "C",
              "text": "When the team wants a built-in ORM migration engine"
            },
            {
              "id": "D",
              "text": "When building desktop software for Windows XP"
            }
          ],
          "hint": "Minimal footprint for microservices and serverless.",
          "explanation": "Micro-frameworks avoid the heavier overhead and opinions of Django when services only need lightweight REST endpoints or custom non-relational databases.",
          "sourceRef": "Tech Stacks Python (Topic 10)",
          "conceptTag": "Micro-frameworks vs Full-Stack"
        }
      ]
    },
    {
      "id": "1b93b355-bbc0-4da0-a741-64762b30b751",
      "materialId": "pm2-python",
      "title": "[Easy] Set 2: Python Strengths, Weaknesses & GIL Performance",
      "difficulty": "easy",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "b782c4e4-3122-467a-a5f7-c9729495b7ac",
          "type": "single",
          "prompt": "Python GIL in I/O Bound Tasks: Does the Global Interpreter Lock (GIL) prevent Python from efficiently handling thousands of concurrent network I/O requests in an async event loop?",
          "options": [
            {
              "id": "A",
              "text": "No, because during network I/O waits (e.g. database queries or HTTP calls), the GIL is released, allowing other coroutines or threads to execute freely"
            },
            {
              "id": "B",
              "text": "Yes, the GIL blocks all network activity"
            },
            {
              "id": "C",
              "text": "The GIL only affects internet downloads"
            },
            {
              "id": "D",
              "text": "The GIL automatically deletes database records"
            }
          ],
          "hint": "I/O releases the GIL.",
          "explanation": "The GIL only constrains CPU-bound execution. During external I/O waits, the interpreter releases the lock, enabling high-concurrency async operations.",
          "sourceRef": "Tech Stacks Python (Topic 11)",
          "conceptTag": "GIL & I/O"
        },
        {
          "id": "1f922e4a-cc27-4a56-8e27-215490dee5fd",
          "type": "single",
          "prompt": "FastAPI Dependency Injection: How does FastAPI's `Depends()` dependency injection system improve backend code quality?",
          "options": [
            {
              "id": "A",
              "text": "It cleanly injects database sessions, authentication credentials, and shared configurations into route functions, enabling modularity and easy unit test mocking"
            },
            {
              "id": "B",
              "text": "It automatically downloads packages from the internet"
            },
            {
              "id": "C",
              "text": "It converts Python into HTML"
            },
            {
              "id": "D",
              "text": "It makes queries run without databases"
            }
          ],
          "hint": "Modular, testable architecture.",
          "explanation": "FastAPI's dependency injection simplifies shared logic (e.g. user authentication, database session lifecycles) and allows effortless mocking in automated tests.",
          "sourceRef": "Tech Stacks Python (Topic 12)",
          "conceptTag": "FastAPI Architecture"
        },
        {
          "id": "f58b54e8-b707-4647-bd46-09fd93d5c2cb",
          "type": "single",
          "prompt": "SQLAlchemy Session Management: Why must database sessions in SQLAlchemy be handled using context managers (`with SessionLocal() as db:`) or FastAPI `yield` patterns?",
          "options": [
            {
              "id": "A",
              "text": "To ensure that database connections are always closed and returned to the connection pool, even if an unhandled exception or error crashes the endpoint"
            },
            {
              "id": "B",
              "text": "To make SQL queries run in reverse"
            },
            {
              "id": "C",
              "text": "To encrypt user passwords"
            },
            {
              "id": "D",
              "text": "To save hard drive space"
            }
          ],
          "hint": "Guarantees connections return to pool.",
          "explanation": "Failing to close SQLAlchemy sessions creates connection leaks that rapidly starve the database pool and cause production lockouts.",
          "sourceRef": "Tech Stacks Python (Topic 13)",
          "conceptTag": "SQLAlchemy Best Practices"
        },
        {
          "id": "41ee6170-779c-4967-a87c-c79647df39bd",
          "type": "single",
          "prompt": "Flask Application Context vs Request Context: In Flask, what happens if code attempts to access `request.args` inside a background thread without a request context?",
          "options": [
            {
              "id": "A",
              "text": "Flask raises a `RuntimeError: Working outside of request context` because the request object is tied specifically to the active incoming HTTP thread"
            },
            {
              "id": "B",
              "text": "The entire server crashes permanently"
            },
            {
              "id": "C",
              "text": "The database is deleted"
            },
            {
              "id": "D",
              "text": "The operating system reboots"
            }
          ],
          "hint": "Thread-local context isolation.",
          "explanation": "Flask uses thread-local proxies for `request` and `session`. Accessing them outside an active HTTP request thread requires pushing an explicit context.",
          "sourceRef": "Tech Stacks Python (Topic 14)",
          "conceptTag": "Flask Internals"
        },
        {
          "id": "a4b6b679-95bd-4d3e-b1a9-d8bfec71573c",
          "type": "single",
          "prompt": "Django ORM Lazy Evaluation: What does it mean that Django ORM querysets are 'lazy'?",
          "options": [
            {
              "id": "A",
              "text": "A query like `users = User.objects.filter(active=True)` does not actually execute SQL against the database until the queryset is evaluated (e.g. in a loop or template)"
            },
            {
              "id": "B",
              "text": "Django takes 10 seconds to execute any query"
            },
            {
              "id": "C",
              "text": "Django developers do less work"
            },
            {
              "id": "D",
              "text": "The query runs only when the user is asleep"
            }
          ],
          "hint": "Queries only hit DB when data is accessed.",
          "explanation": "Lazy evaluation allows developers to chain complex filters and conditions without executing premature, redundant database queries.",
          "sourceRef": "Tech Stacks Python (Topic 15)",
          "conceptTag": "Django ORM"
        },
        {
          "id": "be63267a-0752-4004-95fd-2dc48d504d68",
          "type": "single",
          "prompt": "Django N+1 Optimization (`select_related` vs `prefetch_related`): When should a developer use `select_related` vs `prefetch_related` in Django ORM?",
          "options": [
            {
              "id": "A",
              "text": "Use `select_related` for single-valued relationships (ForeignKey, OneToOne) using SQL JOINs; use `prefetch_related` for multi-valued relationships (ManyToMany, reverse ForeignKey) using separate batch queries"
            },
            {
              "id": "B",
              "text": "They are identical and interchangeable"
            },
            {
              "id": "C",
              "text": "Use `select_related` only on Mondays"
            },
            {
              "id": "D",
              "text": "Use `prefetch_related` for CSS files"
            }
          ],
          "hint": "SQL JOIN vs Multi-query batching.",
          "explanation": "`select_related` uses SQL JOINs in a single query (ideal for ForeignKeys), while `prefetch_related` executes separate batched queries in Python (ideal for ManyToMany).",
          "sourceRef": "Tech Stacks Python (Topic 16)",
          "conceptTag": "Django Performance"
        },
        {
          "id": "d2adefa5-8177-41a2-b537-7b5413f17d76",
          "type": "single",
          "prompt": "Python Packaging & Dependency Lockfiles: Why are lockfiles (e.g. `poetry.lock` or `Pipfile.lock`) mandatory in production CI/CD pipelines instead of loose `requirements.txt`?",
          "options": [
            {
              "id": "A",
              "text": "They pin exact recursive sub-dependency versions and cryptographic hashes, preventing unexpected breaking upstream releases from crashing production deployments"
            },
            {
              "id": "B",
              "text": "They encrypt Python source code"
            },
            {
              "id": "C",
              "text": "They make packages download 100x faster"
            },
            {
              "id": "D",
              "text": "They replace the virtual environment"
            }
          ],
          "hint": "Deterministic reproducible builds.",
          "explanation": "Without lockfiles, a minor sub-dependency release pushed upstream can break production builds even if your direct code never changed.",
          "sourceRef": "Tech Stacks Python (Topic 17)",
          "conceptTag": "Python Packaging"
        },
        {
          "id": "3ca32715-5256-4078-8838-5c481e51e96b",
          "type": "single",
          "prompt": "Gunicorn Worker Models: When deploying a Flask or Django application on Gunicorn, what is the trade-off of using sync workers vs gevent/async workers?",
          "options": [
            {
              "id": "A",
              "text": "Sync workers handle exactly 1 request per worker process at a time (easily exhausted by slow requests); async/gevent workers handle thousands of concurrent I/O requests per process via monkey-patching"
            },
            {
              "id": "B",
              "text": "Sync workers run only on mobile devices"
            },
            {
              "id": "C",
              "text": "Async workers cannot connect to databases"
            },
            {
              "id": "D",
              "text": "Sync workers are 100x faster for video streaming"
            }
          ],
          "hint": "Worker concurrency vs I/O blocking.",
          "explanation": "Sync workers block an entire process on slow external calls. Async or threaded workers allow high concurrency over network I/O.",
          "sourceRef": "Tech Stacks Python (Topic 18)",
          "conceptTag": "Gunicorn Architecture"
        },
        {
          "id": "3b6e0c4e-31d2-48c7-8767-61adffb07315",
          "type": "single",
          "prompt": "Celery Task Retries & Idempotency: Why must tasks executed by Celery background workers be strictly idempotent?",
          "options": [
            {
              "id": "A",
              "text": "Because in distributed systems, message brokers may re-deliver a task if a worker crashes before sending an acknowledgment ('at-least-once delivery')"
            },
            {
              "id": "B",
              "text": "Because non-idempotent tasks cannot run on Linux"
            },
            {
              "id": "C",
              "text": "Because Celery deletes failed tasks permanently"
            },
            {
              "id": "D",
              "text": "Because Redis only supports idempotency"
            }
          ],
          "hint": "Guarantees safety under at-least-once delivery.",
          "explanation": "Message brokers guarantee at-least-once delivery. If a task crashes after partial execution, retrying must not cause duplicate charges or state corruption.",
          "sourceRef": "Tech Stacks Python (Topic 19)",
          "conceptTag": "Celery Distributed Systems"
        },
        {
          "id": "bd0d3fab-f5ce-4b81-ac58-2231cac56fa8",
          "type": "single",
          "prompt": "NumPy Vectorization: Why is vectorized computation in NumPy 50 to 100 times faster than a standard Python `for` loop over a list of numbers?",
          "options": [
            {
              "id": "A",
              "text": "NumPy arrays store data in contiguous C-level memory buffers and execute operations via pre-compiled SIMD machine instructions, bypassing Python interpreter overhead"
            },
            {
              "id": "B",
              "text": "NumPy deletes empty array elements automatically"
            },
            {
              "id": "C",
              "text": "Python loops are intentionally slowed down by the operating system"
            },
            {
              "id": "D",
              "text": "NumPy runs directly on the user's monitor"
            }
          ],
          "hint": "Contiguous memory and C-level SIMD vectorization.",
          "explanation": "Pure Python loops incur heavy dynamic type-checking and boxing on every iteration. NumPy executes SIMD vector operations in raw compiled C.",
          "sourceRef": "Tech Stacks Python (Topic 20)",
          "conceptTag": "Numerical Python"
        }
      ]
    },
    {
      "id": "cf0b9c57-f5fb-4c5a-87f8-b9cc9ad7f0d5",
      "materialId": "pm2-python",
      "title": "[Medium] Set 3: Web Frameworks: FastAPI vs Django vs Flask",
      "difficulty": "medium",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "7dc00618-9805-4f8f-b61d-fb8c84bb7d70",
          "type": "single",
          "prompt": "Pandas Memory Management: What causes an Out of Memory (OOM) crash when loading a 5GB CSV file into a Pandas DataFrame on a 16GB server?",
          "options": [
            {
              "id": "A",
              "text": "Pandas creates substantial memory overhead (often 3-5x the raw file size) due to object pointers, unoptimized data types, and copy-on-write intermediate operations"
            },
            {
              "id": "B",
              "text": "The operating system refuses to read CSV files"
            },
            {
              "id": "C",
              "text": "Pandas can only read files smaller than 10MB"
            },
            {
              "id": "D",
              "text": "CSV files are automatically converted into video"
            }
          ],
          "hint": "Memory amplification in Pandas objects.",
          "explanation": "Default object datatypes in Pandas consume 3-5x disk size in RAM. Specifying categorical types, downcasting integers, or using Polars prevents OOM crashes.",
          "sourceRef": "Tech Stacks Python (Topic 21)",
          "conceptTag": "Data Engineering"
        },
        {
          "id": "453c734e-45f3-4ed1-80eb-e3e193d6bed7",
          "type": "single",
          "prompt": "Polars vs Pandas: Why is Polars rapidly replacing Pandas in modern high-performance data engineering pipelines?",
          "options": [
            {
              "id": "A",
              "text": "Polars is written in Rust, leverages Apache Arrow columnar memory, executes multi-threaded queries in parallel across all CPU cores, and features a lazy query optimizer"
            },
            {
              "id": "B",
              "text": "Polars is built directly into Windows"
            },
            {
              "id": "C",
              "text": "Pandas has been deprecated by the Python Foundation"
            },
            {
              "id": "D",
              "text": "Polars requires no computer memory"
            }
          ],
          "hint": "Multi-threaded Rust engine with Arrow memory.",
          "explanation": "Unlike single-threaded Pandas, Polars executes queries across all available CPU cores with zero-copy Arrow memory and query optimization.",
          "sourceRef": "Tech Stacks Python (Topic 22)",
          "conceptTag": "Modern Data Stack"
        },
        {
          "id": "ad337079-7fe5-407a-a2d3-04690d6773d5",
          "type": "single",
          "prompt": "Python Generators & Memory Efficiency: Why should a data ingestion script processing a 50GB log file use a Python generator (`yield`) rather than reading the entire file into a list?",
          "options": [
            {
              "id": "A",
              "text": "Generators stream and process one line at a time in O(1) memory, allowing 50GB files to be processed using only a few megabytes of RAM"
            },
            {
              "id": "B",
              "text": "Generators compress files by 90%"
            },
            {
              "id": "C",
              "text": "Generators run only on supercomputers"
            },
            {
              "id": "D",
              "text": "Lists cannot store text strings"
            }
          ],
          "hint": "Streams data with constant O(1) memory.",
          "explanation": "Generators produce items on demand without allocating massive lists in memory, enabling giant dataset ETL within minimal RAM envelopes.",
          "sourceRef": "Tech Stacks Python (Topic 23)",
          "conceptTag": "Python Core"
        },
        {
          "id": "9dc40755-bb52-4007-898e-51ea67338d7a",
          "type": "single",
          "prompt": "Python Type Hints (PEP 484 & Mypy): What is the primary purpose of adding type hints in a large Python codebase maintained by 40 developers?",
          "options": [
            {
              "id": "A",
              "text": "To enable static type checking (via Mypy/Pyright) in CI pipelines, catching bug regressions and type mismatches before runtime while improving IDE auto-complete"
            },
            {
              "id": "B",
              "text": "To force Python to compile into machine assembly"
            },
            {
              "id": "C",
              "text": "To speed up Python execution by 500%"
            },
            {
              "id": "D",
              "text": "To make code impossible for hackers to read"
            }
          ],
          "hint": "Catches bugs before runtime in CI.",
          "explanation": "Type annotations provide static verification for large engineering teams, preventing 'NoneType has no attribute' runtime errors before deployment.",
          "sourceRef": "Tech Stacks Python (Topic 24)",
          "conceptTag": "Code Quality"
        },
        {
          "id": "cefdfab0-9456-42cd-a2f6-fcd5ad2dc3bb",
          "type": "single",
          "prompt": "Pytest Fixtures: Why are Pytest fixtures preferred over standard unit test setup/teardown classes?",
          "options": [
            {
              "id": "A",
              "text": "They provide modular, reusable, and dependency-injected test setups (e.g. spinning up a test database container, rolling back transactions after each test) with precise scope control"
            },
            {
              "id": "B",
              "text": "Pytest runs tests without using CPU"
            },
            {
              "id": "C",
              "text": "Fixtures are required by Python syntax"
            },
            {
              "id": "D",
              "text": "Fixtures make code run 10x faster"
            }
          ],
          "hint": "Modular, scoped test dependency injection.",
          "explanation": "Pytest fixtures can be scoped to function, module, or session, enabling clean test databases and deterministic mocking across test suites.",
          "sourceRef": "Tech Stacks Python (Topic 25)",
          "conceptTag": "Testing Best Practices"
        },
        {
          "id": "758b5057-694d-4686-a85a-72d04ca1dc7c",
          "type": "single",
          "prompt": "Python Desktop Apps (PyQt / PySide vs Electron): When is PyQt/PySide preferred over Electron for desktop applications?",
          "options": [
            {
              "id": "A",
              "text": "When the desktop app requires high-performance native OS hardware access, low memory consumption (without bundling an entire Chromium browser), or complex real-time plotting"
            },
            {
              "id": "B",
              "text": "When building websites for smartphones"
            },
            {
              "id": "C",
              "text": "When the team only knows HTML and CSS"
            },
            {
              "id": "D",
              "text": "When the app has no user interface"
            }
          ],
          "hint": "Native C++ Qt performance without Chromium bloat.",
          "explanation": "Electron bundles a full Chromium browser consuming 500MB+ of RAM. PyQt binds to native C++ Qt libraries, delivering high performance and lower memory footprint.",
          "sourceRef": "Tech Stacks Python (Topic 26)",
          "conceptTag": "Desktop Python"
        },
        {
          "id": "cf5f10d1-b0b5-417c-9a54-50c6e60dcc99",
          "type": "single",
          "prompt": "Python Mobile Development (Kivy / BeeWare): What is the industry consensus on using Python for consumer-facing native mobile apps (iOS & Android)?",
          "options": [
            {
              "id": "A",
              "text": "Python is rarely used for consumer mobile apps due to large binary bundle sizes, lack of native platform UI look-and-feel, and inferior performance compared to Swift, Kotlin, or React Native"
            },
            {
              "id": "B",
              "text": "Python is the primary language used for 90% of iOS apps"
            },
            {
              "id": "C",
              "text": "Apple bans all apps written in Python"
            },
            {
              "id": "D",
              "text": "Python mobile apps are completely free of bugs"
            }
          ],
          "hint": "Not recommended for polished consumer mobile.",
          "explanation": "While frameworks like Kivy exist, Python's runtime overhead and non-native UI widgets make Swift, Kotlin, Flutter, or React Native far superior for mobile.",
          "sourceRef": "Tech Stacks Python (Topic 27)",
          "conceptTag": "Mobile Strategy"
        },
        {
          "id": "641987da-5aae-4e90-a1d0-d225b2117128",
          "type": "single",
          "prompt": "Asyncio Event Loop Blocking Anti-Pattern: What catastrophic performance bug occurs when a developer writes `time.sleep(5)` or synchronous `requests.get()` inside an `async def` FastAPI route?",
          "options": [
            {
              "id": "A",
              "text": "It completely freezes the entire single-threaded async event loop for 5 seconds, blocking ALL other concurrent user requests across the whole server from processing"
            },
            {
              "id": "B",
              "text": "The database automatically deletes records"
            },
            {
              "id": "C",
              "text": "The server runs 5 times faster"
            },
            {
              "id": "D",
              "text": "The user's computer reboots"
            }
          ],
          "hint": "Synchronous blocking stalls the entire event loop.",
          "explanation": "In async Python, blocking calls (`time.sleep`, synchronous DB drivers) freeze the single event loop thread, stalling all concurrent traffic. Use `asyncio.sleep` or thread offloading.",
          "sourceRef": "Tech Stacks Python (Topic 28)",
          "conceptTag": "Async Anti-Patterns"
        },
        {
          "id": "d66d4150-b493-476c-bd88-a7a9bdbcc8c2",
          "type": "single",
          "prompt": "Asyncio `run_in_executor`: How should a developer safely execute a heavy CPU-bound function (e.g. image resizing) inside an async FastAPI endpoint?",
          "options": [
            {
              "id": "A",
              "text": "Offload the function to a thread pool or process pool using `asyncio.to_thread()` or `loop.run_in_executor()`, preventing the main event loop from freezing"
            },
            {
              "id": "B",
              "text": "Execute it directly in the async route"
            },
            {
              "id": "C",
              "text": "Put it inside an infinite while loop"
            },
            {
              "id": "D",
              "text": "Delete the image resizing feature"
            }
          ],
          "hint": "Offload blocking compute to thread/process pools.",
          "explanation": "`asyncio.to_thread()` moves blocking or CPU-heavy work to worker threads, keeping the primary async event loop responsive to incoming traffic.",
          "sourceRef": "Tech Stacks Python (Topic 29)",
          "conceptTag": "Async Concurrency"
        },
        {
          "id": "db3bf92e-ec33-4b17-8d2c-82fc9b393c80",
          "type": "single",
          "prompt": "Uvicorn vs Gunicorn Deployment Pattern: What is the standard production deployment pattern pairing Gunicorn and Uvicorn for Python ASGI applications?",
          "options": [
            {
              "id": "A",
              "text": "Run Gunicorn as the master process manager to handle worker process lifecycles, graceful restarts, and CPU core utilization, running `UvicornWorker` inside each process"
            },
            {
              "id": "B",
              "text": "Run Uvicorn inside a web browser"
            },
            {
              "id": "C",
              "text": "Run Gunicorn on Windows and Uvicorn on Mac"
            },
            {
              "id": "D",
              "text": "They cannot be used together"
            }
          ],
          "hint": "Gunicorn master process + Uvicorn ASGI workers.",
          "explanation": "Gunicorn manages process forking, crash restarts, and worker scaling across CPU cores, while Uvicorn handles async ASGI HTTP parsing within each worker.",
          "sourceRef": "Tech Stacks Python (Topic 30)",
          "conceptTag": "Production Deployment"
        }
      ]
    },
    {
      "id": "25fc0326-db5d-4f8b-99fe-bce70ef2805c",
      "materialId": "pm2-python",
      "title": "[Medium] Set 4: Async Concurrency, ASGI vs WSGI & Background Tasks",
      "difficulty": "medium",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "90ce2ca5-d63e-40d0-959f-774a4ba05ecf",
          "type": "single",
          "prompt": "Python Metaclasses: When would a senior Python architect implement a metaclass?",
          "options": [
            {
              "id": "A",
              "text": "When creating advanced frameworks, ORMs, or validation libraries that need to intercept, inspect, and modify class creation logic at import time"
            },
            {
              "id": "B",
              "text": "To make web pages load faster"
            },
            {
              "id": "C",
              "text": "To calculate financial balances"
            },
            {
              "id": "D",
              "text": "To design mobile app icons"
            }
          ],
          "hint": "Customizing class creation in frameworks.",
          "explanation": "Metaclasses act as 'classes of classes', used in frameworks like Django ORM to automatically inspect fields and bind database mappings dynamically.",
          "sourceRef": "Tech Stacks Python (Topic 31)",
          "conceptTag": "Advanced Python"
        },
        {
          "id": "009c15f3-3587-4e22-a803-4b456bcbfac8",
          "type": "single",
          "prompt": "Python Decorators: What architectural purpose do decorators (`@authenticate`, `@cache_response`) serve in web APIs?",
          "options": [
            {
              "id": "A",
              "text": "They implement the Decorator design pattern, wrapping functions with cross-cutting concerns (authentication, caching, logging, rate limiting) without cluttering business logic"
            },
            {
              "id": "B",
              "text": "They change the font color of Python code"
            },
            {
              "id": "C",
              "text": "They compile code into machine assembly"
            },
            {
              "id": "D",
              "text": "They encrypt the hard drive"
            }
          ],
          "hint": "Clean cross-cutting concern abstraction.",
          "explanation": "Decorators cleanly separate cross-cutting infrastructure logic (auth checks, telemetry, cache headers) from core domain business code.",
          "sourceRef": "Tech Stacks Python (Topic 32)",
          "conceptTag": "Python Design Patterns"
        },
        {
          "id": "6c93120c-070f-4678-95c2-febd6ca7ab00",
          "type": "single",
          "prompt": "Python Garbage Collection (Reference Counting & Generational GC): How does CPython manage memory and clean up abandoned objects?",
          "options": [
            {
              "id": "A",
              "text": "Primarily through immediate Reference Counting, supplemented by a Generational Garbage Collector that detects and reclaims circular reference cycles"
            },
            {
              "id": "B",
              "text": "By deleting all memory every 5 minutes"
            },
            {
              "id": "C",
              "text": "By asking the user to close browser tabs"
            },
            {
              "id": "D",
              "text": "By running on external cloud servers"
            }
          ],
          "hint": "Reference counting + generational cycle detection.",
          "explanation": "CPython deallocates objects instantly when their reference count drops to zero, and periodically scans generational heaps for circular pointer loops.",
          "sourceRef": "Tech Stacks Python (Topic 33)",
          "conceptTag": "Python Internals"
        },
        {
          "id": "6117158d-2ad6-4229-bd0b-8f26034e9a0c",
          "type": "single",
          "prompt": "Python Context Managers (`__enter__` and `__exit__`): What resource management guarantee does the `with` statement provide?",
          "options": [
            {
              "id": "A",
              "text": "It guarantees that cleanup logic (closing file descriptors, releasing locks, returning DB connections) is executed, even if exceptions are raised inside the block"
            },
            {
              "id": "B",
              "text": "It speeds up Python execution by 50%"
            },
            {
              "id": "C",
              "text": "It prevents syntax errors"
            },
            {
              "id": "D",
              "text": "It connects to the internet"
            }
          ],
          "hint": "Deterministic cleanup even during exceptions.",
          "explanation": "Context managers ensure deterministic resource cleanup, preventing memory leaks, socket exhaustion, and unreleased thread locks.",
          "sourceRef": "Tech Stacks Python (Topic 34)",
          "conceptTag": "Python Core"
        },
        {
          "id": "4233e7f0-d2a5-42ff-bb02-b4a4faf08c2d",
          "type": "single",
          "prompt": "FastAPI BackgroundTasks: When should a developer use FastAPI's built-in `BackgroundTasks` instead of an external Celery worker queue?",
          "options": [
            {
              "id": "A",
              "text": "For simple, lightweight fire-and-forget operations (e.g. sending a single welcome email, logging an audit event) that don't warrant the operational complexity of Redis/RabbitMQ"
            },
            {
              "id": "B",
              "text": "For processing 50-gigabyte video transcoding jobs"
            },
            {
              "id": "C",
              "text": "For executing distributed multi-day batch calculations"
            },
            {
              "id": "D",
              "text": "For tasks that must survive a server restart"
            }
          ],
          "hint": "Lightweight tasks within the same process.",
          "explanation": "FastAPI's `BackgroundTasks` run within the active server process after returning the HTTP response, ideal for simple email triggers without infrastructure overhead.",
          "sourceRef": "Tech Stacks Python (Topic 35)",
          "conceptTag": "FastAPI Utilities"
        },
        {
          "id": "0062f406-e2a2-4387-9ac7-84f1e50c3ee3",
          "type": "single",
          "prompt": "Celery Result Backend Trade-off: What happens if an engineering team configures Celery to store task results in a relational database without setting task expiration (`result_expires`)?",
          "options": [
            {
              "id": "A",
              "text": "The task result table accumulates millions of rows of JSON return values, eventually exhausting database disk space and slowing down indexing"
            },
            {
              "id": "B",
              "text": "The database automatically upgrades to SSD storage"
            },
            {
              "id": "C",
              "text": "Celery stops sending emails"
            },
            {
              "id": "D",
              "text": "The server switches to Python 2"
            }
          ],
          "hint": "Unbounded result table bloat.",
          "explanation": "Storing return values for every background task without TTL expiration inflates databases. For fire-and-forget tasks, disabling result storage is recommended.",
          "sourceRef": "Tech Stacks Python (Topic 36)",
          "conceptTag": "Celery Operations"
        },
        {
          "id": "ba4c21ce-ff50-41f6-b2d0-6bd14ae48cb8",
          "type": "single",
          "prompt": "Cython & C Extensions: How do data libraries like Pandas and Scikit-Learn achieve near-C execution speeds while exposing Python interfaces?",
          "options": [
            {
              "id": "A",
              "text": "They write critical computational loops in C, C++, or Cython, compiling them into shared C extension binaries that Python calls with zero interpreter overhead"
            },
            {
              "id": "B",
              "text": "They compile Python directly to HTML"
            },
            {
              "id": "C",
              "text": "They run on quantum supercomputers"
            },
            {
              "id": "D",
              "text": "They delete all unused Python variables"
            }
          ],
          "hint": "Compiled C extensions bound to Python.",
          "explanation": "Cython translates Python syntax into optimized C code, compiling to native machine instructions for compute-heavy loops while retaining Python API accessibility.",
          "sourceRef": "Tech Stacks Python (Topic 37)",
          "conceptTag": "Python Performance"
        },
        {
          "id": "0a14cc26-fab8-4edb-b544-2807a32c3228",
          "type": "single",
          "prompt": "Python GIL Removal (PEP 703 / Free-threaded Python): What is the goal of the historic Python 3.13 free-threaded build (PEP 703)?",
          "options": [
            {
              "id": "A",
              "text": "To make the Global Interpreter Lock optional, allowing multi-threaded Python programs to execute CPU-bound code in true parallel across all CPU cores"
            },
            {
              "id": "B",
              "text": "To rewrite Python in Java"
            },
            {
              "id": "C",
              "text": "To delete the Python standard library"
            },
            {
              "id": "D",
              "text": "To make Python run only in browsers"
            }
          ],
          "hint": "True parallel multi-threading without the GIL.",
          "explanation": "PEP 703 removes the global lock in favor of fine-grained mimalloc locks, enabling multi-threaded CPU-bound parallelism on multi-core servers.",
          "sourceRef": "Tech Stacks Python (Topic 38)",
          "conceptTag": "Python Evolution"
        },
        {
          "id": "e80c4541-b341-460b-876c-87ba9b248d1b",
          "type": "single",
          "prompt": "Python `dataclasses` vs Pydantic: In what scenario are Python standard library `@dataclass` objects preferred over Pydantic models?",
          "options": [
            {
              "id": "A",
              "text": "Internal domain modeling and business logic where data types are already trusted and the runtime overhead of Pydantic string parsing and validation is unnecessary"
            },
            {
              "id": "B",
              "text": "Parsing untrusted JSON from external public HTTP requests"
            },
            {
              "id": "C",
              "text": "Generating OpenAPI specifications"
            },
            {
              "id": "D",
              "text": "Validating environment variables"
            }
          ],
          "hint": "Lightweight internal modeling with zero validation overhead.",
          "explanation": "Dataclasses provide clean boilerplate reduction for internal objects without the parsing and validation performance tax of Pydantic.",
          "sourceRef": "Tech Stacks Python (Topic 39)",
          "conceptTag": "Python Architecture"
        },
        {
          "id": "4d444851-a44a-43a1-86df-cb5f20ee9b5d",
          "type": "single",
          "prompt": "Python Mocking in Automated Tests (`unittest.mock`): Why is mocking external third-party API clients mandatory in CI test suites?",
          "options": [
            {
              "id": "A",
              "text": "To ensure tests run in milliseconds, don't trigger real credit card charges, don't fail due to external internet outages, and don't leak production API credentials"
            },
            {
              "id": "B",
              "text": "To make test files look longer"
            },
            {
              "id": "C",
              "text": "Because third-party APIs are illegal in tests"
            },
            {
              "id": "D",
              "text": "To test user monitor resolution"
            }
          ],
          "hint": "Deterministic, fast, and isolated testing.",
          "explanation": "Mocking external network calls guarantees that unit tests remain fast, reproducible, free of third-party rate limits, and safe from unintended side effects.",
          "sourceRef": "Tech Stacks Python (Topic 40)",
          "conceptTag": "Automated Testing"
        }
      ]
    },
    {
      "id": "fc4c9f6e-55ec-418a-8bcf-d56b4a1b864a",
      "materialId": "pm2-python",
      "title": "[Hard] Set 5: Python in AI/ML, Data Engineering & Low-Level Interop",
      "difficulty": "hard",
      "totalQuestions": 10,
      "questions": [
        {
          "id": "9b938b63-b4b3-428a-8e78-e0ec48fc5c74",
          "type": "single",
          "prompt": "Python Monkey Patching: What is 'Monkey Patching' in Python, and why is it dangerous in production codebases?",
          "options": [
            {
              "id": "A",
              "text": "Dynamically modifying modules, classes, or methods at runtime, which can cause subtle, unpredictable bugs and break debugging across third-party libraries"
            },
            {
              "id": "B",
              "text": "A tool for training monkeys to write code"
            },
            {
              "id": "C",
              "text": "A method for encrypting Python files"
            },
            {
              "id": "D",
              "text": "A feature that makes code run 10x faster"
            }
          ],
          "hint": "Dynamic runtime code alteration.",
          "explanation": "Monkey patching overrides methods at runtime. While useful in test mocks, using it in production leads to hidden side-effects and nightmare debugging sessions.",
          "sourceRef": "Tech Stacks Python (Topic 41)",
          "conceptTag": "Python Anti-Patterns"
        },
        {
          "id": "fcd8ac22-bf7e-4123-ad9a-ab22a444e940",
          "type": "single",
          "prompt": "FastAPI CORS Middleware: Where in the FastAPI middleware stack should `CORSMiddleware` be added?",
          "options": [
            {
              "id": "A",
              "text": "It should be added as the outermost middleware so CORS response headers are attached to all responses, including errors and unhandled exceptions"
            },
            {
              "id": "B",
              "text": "Inside the database session"
            },
            {
              "id": "C",
              "text": "At the very bottom of the file after the database"
            },
            {
              "id": "D",
              "text": "Inside each individual route function"
            }
          ],
          "hint": "Outermost middleware to catch all responses.",
          "explanation": "Adding CORS middleware outermost ensures that even 500 server crashes return proper `Access-Control-Allow-Origin` headers, allowing browsers to read error details.",
          "sourceRef": "Tech Stacks Python (Topic 42)",
          "conceptTag": "FastAPI Middleware"
        },
        {
          "id": "630317d3-a347-45d2-b662-4c4091e13789",
          "type": "single",
          "prompt": "Python Memory Profiling (memory_profiler / tracemalloc): When diagnosing a production memory leak in a long-running Python daemon, which built-in library pinpoints the allocating lines?",
          "options": [
            {
              "id": "A",
              "text": "`tracemalloc` (tracks memory allocations back to exact file and line numbers)"
            },
            {
              "id": "B",
              "text": "`time` library"
            },
            {
              "id": "C",
              "text": "`math` library"
            },
            {
              "id": "D",
              "text": "`random` library"
            }
          ],
          "hint": "Tracks allocation traces back to source lines.",
          "explanation": "Tracemalloc snapshots Python heap memory, allowing developers to compare snapshots and identify the exact line of code accumulating uncollected objects.",
          "sourceRef": "Tech Stacks Python (Topic 43)",
          "conceptTag": "Profiling & Debugging"
        },
        {
          "id": "94f68a0c-5f63-4a62-8871-0e0e205e2591",
          "type": "single",
          "prompt": "FastAPI Response Models (`response_model`): What security benefit does declaring `response_model=UserPublic` provide on an endpoint that queries a database `User` object?",
          "options": [
            {
              "id": "A",
              "text": "It automatically filters out sensitive database fields (such as `password_hash`, `ssn`, or internal flags), guaranteeing they are never serialized or leaked to the client"
            },
            {
              "id": "B",
              "text": "It encrypts the entire HTTP body with AES"
            },
            {
              "id": "C",
              "text": "It speeds up database queries by 10x"
            },
            {
              "id": "D",
              "text": "It checks if the user is using Google Chrome"
            }
          ],
          "hint": "Prevents accidental credential leakage.",
          "explanation": "Response models act as an automated output firewall, serializing only explicitly declared public fields and stripping internal database attributes like password hashes.",
          "sourceRef": "Tech Stacks Python (Topic 44)",
          "conceptTag": "API Security"
        },
        {
          "id": "19dbf0ea-f0b9-4708-959b-1b2490f7d544",
          "type": "single",
          "prompt": "SQLAlchemy `lazy='dynamic'`: Why is `lazy='dynamic'` on SQLAlchemy relationships being deprecated in favor of explicit queries?",
          "options": [
            {
              "id": "A",
              "text": "Because it generates implicit database queries during object access that hide query costs, break async programming models, and cause unexpected N+1 performance bottlenecks"
            },
            {
              "id": "B",
              "text": "Because dynamic typing is illegal in SQL"
            },
            {
              "id": "C",
              "text": "Because it uses too much color on screens"
            },
            {
              "id": "D",
              "text": "Because databases cannot store dynamic data"
            }
          ],
          "hint": "Prevents hidden implicit queries in async code.",
          "explanation": "Implicit lazy loading breaks under modern async event loops because accessing an attribute cannot perform non-blocking async `await` transparently.",
          "sourceRef": "Tech Stacks Python (Topic 45)",
          "conceptTag": "SQLAlchemy Architecture"
        },
        {
          "id": "64b916c1-51b0-489e-a005-af7f31ec96a9",
          "type": "single",
          "prompt": "Python Logging Best Practice: Why should production Python services use structured JSON logging (e.g. `structlog` or `python-json-logger`) instead of plain text strings?",
          "options": [
            {
              "id": "A",
              "text": "Structured JSON logs allow log aggregation platforms (Datadog, Loki) to automatically index, filter, and alert on specific metadata fields (e.g. `user_id`, `duration_ms`)"
            },
            {
              "id": "B",
              "text": "JSON logs make files 100x smaller"
            },
            {
              "id": "C",
              "text": "Plain text logs cannot be read by humans"
            },
            {
              "id": "D",
              "text": "JSON logs prevent server crashes"
            }
          ],
          "hint": "Machine-parseable telemetry indexing.",
          "explanation": "Structured JSON logs format timestamp, level, user ID, and stack traces into searchable key-value fields, enabling instant log queries during incidents.",
          "sourceRef": "Tech Stacks Python (Topic 46)",
          "conceptTag": "Observability Logging"
        },
        {
          "id": "1da744ea-4a90-49a3-8f7a-f46cba3b36b7",
          "type": "single",
          "prompt": "Python Dependency Injection Containers: In enterprise Python applications, why use a dependency injection container (e.g. `dependency-injector`)?",
          "options": [
            {
              "id": "A",
              "text": "To decouple concrete infrastructure implementations (e.g. Postgres vs SQLite, Sendgrid vs MockEmailer) from core domain business services via interfaces"
            },
            {
              "id": "B",
              "text": "To make Python compile faster"
            },
            {
              "id": "C",
              "text": "To replace the need for unit testing"
            },
            {
              "id": "D",
              "text": "To format Python code automatically"
            }
          ],
          "hint": "Decouples domain from infrastructure implementations.",
          "explanation": "DI containers wire application dependencies at startup, allowing painless swapping between mock and production services for testing and staging.",
          "sourceRef": "Tech Stacks Python (Topic 47)",
          "conceptTag": "Enterprise Python Architecture"
        },
        {
          "id": "d4868cd2-672e-4f36-b31e-13120fbb3447",
          "type": "single",
          "prompt": "Python Event Loop Concurrency vs OS Threads: How does Python's `asyncio` cooperative multitasking differ from OS multi-threading?",
          "options": [
            {
              "id": "A",
              "text": "Asyncio uses a single thread that switches between coroutines cooperatively when an explicit `await` occurs; OS threads are preemptively switched by the operating system kernel"
            },
            {
              "id": "B",
              "text": "Asyncio requires multiple physical computers"
            },
            {
              "id": "C",
              "text": "OS threads cannot connect to the internet"
            },
            {
              "id": "D",
              "text": "Asyncio is written in Java"
            }
          ],
          "hint": "Cooperative coroutines vs preemptive kernel switching.",
          "explanation": "Asyncio switches tasks only when coroutines yield control at `await` boundaries, drastically reducing context switching overhead and memory usage.",
          "sourceRef": "Tech Stacks Python (Topic 48)",
          "conceptTag": "Asyncio Internals"
        },
        {
          "id": "8c93f2ce-2e66-4925-8d03-d11de8e42f35",
          "type": "single",
          "prompt": "Python CFFI vs ctypes: Why is CFFI (C Foreign Function Interface) preferred over `ctypes` when binding high-performance C libraries to Python?",
          "options": [
            {
              "id": "A",
              "text": "CFFI compiles C declarations at build-time using the native C compiler, delivering significantly faster call overhead, better safety, and PyPy compatibility"
            },
            {
              "id": "B",
              "text": "CFFI works without C code"
            },
            {
              "id": "C",
              "text": "ctypes is deprecated in all versions of Python"
            },
            {
              "id": "D",
              "text": "CFFI makes Python code run in browsers"
            }
          ],
          "hint": "Compile-time validation and low call overhead.",
          "explanation": "CFFI validates declarations against C header files at compile time, eliminating the runtime type-mismatch risks and call overhead of `ctypes`.",
          "sourceRef": "Tech Stacks Python (Topic 49)",
          "conceptTag": "Python Interop"
        },
        {
          "id": "e9f62086-07af-406d-bf64-e7fe1e830c34",
          "type": "single",
          "prompt": "Django Signals Anti-Pattern: Why do senior Django architects advise against heavy use of Django Signals (`post_save`, `pre_delete`) for complex business logic?",
          "options": [
            {
              "id": "A",
              "text": "They create hidden implicit side effects that execute out-of-order, make code difficult to trace and debug, and can trigger accidental recursion or redundant queries"
            },
            {
              "id": "B",
              "text": "Django signals can only run on Windows"
            },
            {
              "id": "C",
              "text": "Signals prevent databases from saving records"
            },
            {
              "id": "D",
              "text": "Signals make websites run 10x slower"
            }
          ],
          "hint": "Hidden implicit side effects and debugging nightmares.",
          "explanation": "Signals obscure business workflows because saving a model silently triggers side-effects across the codebase. Explicit service layer methods are preferred.",
          "sourceRef": "Tech Stacks Python (Topic 50)",
          "conceptTag": "Django Anti-Patterns"
        }
      ]
    }
  ],
  "attemptsHistory": [],
  "revisionQueue": []
};
