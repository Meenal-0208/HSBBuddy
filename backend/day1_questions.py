import sys
import uuid
from app.db.session import SessionLocal
from app.models.entities import Material, Quiz, Question

# 50 robust scenario questions for Day 1
def get_day1_questions(quiz_id):
    qs = []
    # 50 scenarios spanning 3-tier, DNS, HTTP, HTTPS/TLS, Ports, Cookies/Sessions, CDNs, Caching, Frontend CSR/SSR, Load Balancers, Horizontal vs Vertical scaling, SPOFs, Microservices vs Monoliths, Asynchronous Queues, WebSockets
    data = [
        ("Flash Sale Concurrency: Your checkout service crashes under peak write locks. How to fix?",
         ["Introduce an asynchronous message queue (e.g. RabbitMQ/Kafka) to buffer checkout orders and process writes at a controlled rate", "Switch from HTTPS to HTTP", "Increase browser cookie TTL", "Use Client-Side Rendering"],
         "A", "Buffer database writes asynchronously.", "Message queues decouple spikes from transactional DB writes.", "Queues & Buffering"),
        
        ("Startup Architecture: 3 engineers want 15 microservices before their first 100 users. Why push back?",
         ["Microservices introduce heavy operational overhead, distributed network latency, and slow feature velocity when domain boundaries are still changing", "Microservices cannot run unit tests", "Microservices require on-premise mainframes", "Microservices cannot use SQL"],
         "A", "Early-stage startups need fast shipping velocity.", "Premature microservices add deployment complexity and distributed failure modes.", "Monolith vs Microservices"),

        ("SEO & Rendering: An e-commerce site needs fast First Contentful Paint and organic Google search indexing. What rendering should you pick?",
         ["Server-Side Rendering (SSR) or Static Site Generation (SSG) so full HTML is delivered on initial response", "Pure Client-Side Rendering (CSR) with an empty initial div", "Browser-only JavaScript canvas rendering", "Flash applet rendering"],
         "A", "Web crawlers need pre-rendered HTML.", "SSR and SSG deliver pre-built HTML that crawlers and mobile browsers can immediately parse.", "SSR vs CSR"),

        ("Trust Boundary: True or False: Because the frontend verifies transfer amount > $0 in JavaScript, the backend can safely skip duplicate validation.",
         ["False", "True"],
         "A", "Never trust the client.", "Any user or script can send raw HTTP requests directly to the API, bypassing UI checks. Backend validation is mandatory.", "Security Validation"),

        ("Global Latency: 40% of users in Asia experience 500ms latency downloading images hosted in Virginia. What is the immediate solution?",
         ["Deploy a Content Delivery Network (CDN) like Cloudflare or CloudFront to cache static assets in edge POPs near users", "Rewrite backend in C++", "Ask users to switch to 5G", "Compress images to monochrome"],
         "A", "Edge servers physically close to users cut speed-of-light delay.", "CDNs cache static assets at global points of presence to eliminate transatlantic latency.", "CDNs & Edge Caching"),

        ("Scaling Definitions: What is the defining difference between Vertical Scaling and Horizontal Scaling?",
         ["Vertical scaling adds more CPU/RAM to a single server instance; Horizontal scaling adds more server instances behind a load balancer", "Vertical scaling uses cloud; horizontal uses physical servers", "Vertical scaling is for databases; horizontal is for CSS", "Vertical scaling divides code into microservices"],
         "A", "Vertical = bigger machine; Horizontal = more machines.", "Scaling up (vertical) upgrades single-server hardware; scaling out (horizontal) distributes load across multiple servers.", "System Scaling"),

        ("3-Tier Architecture: What are the three core tiers of a standard web application architecture?",
         ["Presentation Layer (Client UI), Application Layer (Business Logic), and Data Storage Layer (Database)", "DNS Layer, ISP Layer, Browser Layer", "HTML Layer, CSS Layer, JavaScript Layer", "Email Layer, Payment Layer, Marketing Layer"],
         "A", "UI -> Business Logic -> Storage.", "Standard 3-tier separates the user interface, backend processing, and data persistence.", "3-Tier Stack"),

        ("Load Balancer Routing: For persistent WebSocket chat connections, which load balancing algorithm prevents server starvation?",
         ["Least Connections (routes new connections to the server currently handling the lowest active connections)", "Round Robin", "Random Routing", "DNS TTL Cycling"],
         "A", "Long-lived connections cause imbalances under simple sequential round-robin.", "Least Connections accounts for persistent connection durations, balancing active workloads.", "Load Balancing"),

        ("Cache Invalidation: True or False: Adding Redis caching in front of your database carries zero product risk or complexity.",
         ["False", "True"],
         "A", "Consider stale data and synchronization.", "Cache invalidation causes stale pricing data, cache stampedes, and synchronization bugs.", "Caching Trade-offs"),

        ("High Availability: What is the primary difference between a Single Point of Failure (SPOF) and a Redundant Architecture?",
         ["A SPOF crashes the entire system if that single component fails; Redundancy maintains standby duplicates for seamless failover", "SPOF is a cloud security feature", "Redundancy means having duplicate git branches", "SPOF only applies to CSS"],
         "A", "Redundancy eliminates SPOFs.", "High availability requires active or standby duplicates so no single failure stops service.", "High Availability"),

        ("DNS Resolution: What is the primary function of the Domain Name System (DNS) when a user visits your website?",
         ["Translating human-readable domain names (e.g. app.com) into machine-routable IP addresses (e.g. 192.0.2.1)", "Encrypting user passwords in transit", "Compressing PNG images", "Executing backend database queries"],
         "A", "DNS is the phonebook of the internet.", "DNS maps friendly domain names to numeric IP addresses required by TCP/IP routing.", "DNS"),

        ("HTTPS & SSL/TLS: What two primary protections does HTTPS (SSL/TLS) provide over plain HTTP?",
         ["Encryption (prevents eavesdropping) and Server Authentication (proves you are connecting to the legitimate site)", "Faster database indexing and automated SQL backups", "Eliminates the need for user passwords", "Guarantees 100% server uptime"],
         "A", "Encryption + Verification.", "TLS encrypts communications against man-in-the-middle sniffing and verifies server identity.", "HTTPS & Security"),

        ("Port Numbers: What standard default network ports are reserved for HTTP and HTTPS traffic respectively?",
         ["Port 80 for HTTP, Port 443 for HTTPS", "Port 21 for HTTP, Port 22 for HTTPS", "Port 3000 for HTTP, Port 8000 for HTTPS", "Port 5432 for HTTP, Port 3306 for HTTPS"],
         "A", "Standard internet ports.", "Port 80 is the unencrypted web standard; 443 is the TLS/HTTPS standard.", "Network Ports"),

        ("Cookies vs LocalStorage: Why should sensitive session authentication tokens be stored in HttpOnly cookies rather than LocalStorage?",
         ["HttpOnly cookies cannot be accessed or stolen by malicious JavaScript during Cross-Site Scripting (XSS) attacks", "LocalStorage has a 2-second expiration limit", "Cookies are stored directly in CPU cache", "Browsers delete LocalStorage on every page refresh"],
         "A", "HttpOnly blocks JS read access.", "HttpOnly flags prevent malicious scripts injected via XSS from reading the session cookie.", "Session Security"),

        ("Stateful vs Stateless: Why do modern horizontally scaled web servers mandate Stateless application tier design?",
         ["Stateless servers don't store session data in local server memory, allowing any server node to handle any user request seamlessly", "Stateless servers don't need electricity", "Stateless servers delete the database after each request", "Stateless servers run only on mobile devices"],
         "A", "Any server can answer any request.", "When state is kept in Redis/DB rather than local RAM, requests can be routed to any server behind the load balancer.", "Stateless Architecture"),

        ("Reverse Proxy: What role does a reverse proxy like NGINX play when placed in front of application servers?",
         ["SSL termination, request routing, static file caching, and load balancing across internal app workers", "Replacing the database engine", "Compiling React JSX inside the browser", "Assigning credit limits to customers"],
         "A", "Shields and coordinates backend app servers.", "Reverse proxies handle SSL decryption, compression, and traffic distribution before hitting Python/Node workers.", "Reverse Proxies"),

        ("Connection Limits: When backend workers exceed maximum concurrent database connections, what architectural utility prevents server crashes?",
         ["Database Connection Pooler (e.g. PgBouncer)", "Disabling SQL indexing", "Changing the domain registrar", "Switching from JSON to XML"],
         "A", "Connection pooling manages and reuses open sockets.", "Connection poolers keep a warm set of connections and queue surplus queries rather than exhausting DB file descriptors.", "Connection Pooling"),

        ("Cold Starts: In Serverless architecture (e.g. AWS Lambda), what causes an initial request latency spike called a 'cold start'?",
         ["The cloud provider spinning up a new container runtime, downloading code, and initializing libraries from an idle state", "The user's Wi-Fi router rebooting", "The DNS server expiring globally", "The SQL database performing a table scan"],
         "A", "Spinning up fresh runtime containers takes time.", "When an idle serverless function receives a trigger, initializing the container and runtime introduces initial latency.", "Serverless Cold Starts"),

        ("WebSockets vs HTTP: When building a collaborative multi-player whiteboarding tool, why use WebSockets instead of HTTP polling?",
         ["WebSockets maintain a persistent, full-duplex TCP connection allowing instantaneous bidirectional messages with minimal header overhead", "HTTP does not support JSON", "WebSockets are cheaper than HTML", "HTTP can only be sent once per day"],
         "A", "Full-duplex persistent real-time streaming.", "WebSockets avoid repeated HTTP header handshakes, enabling sub-10ms bidirectional communication.", "WebSockets"),

        ("Service Level Agreements: What is the allowable downtime per year for an enterprise product promising 'Four Nines' (99.99%) availability?",
         ["Approximately 52.6 minutes per year", "24 hours per year", "7 days per year", "Zero seconds per year"],
         "A", "99.99% = ~52.6 minutes of downtime per year.", "Four nines availability means downtime cannot exceed ~4.3 minutes per month or 52.6 minutes annually.", "SLA & Uptime"),

        # 30 more realistic scenarios for Day 1
        ("Session Hijacking: An attacker steals an active user's session cookie over an unencrypted public Wi-Fi network. What protocol prevented this?",
         ["HTTPS with Secure and HttpOnly cookie flags", "FTP protocol", "Client-Side Rendering", "CSS Media Queries"],
         "A", "Secure cookies transmit only over HTTPS.", "The Secure cookie attribute guarantees tokens are never broadcast over unencrypted HTTP.", "Web Security"),

        ("Database Write Bottleneck: Your analytics dashboard performs millions of real-time event writes per minute, crashing the SQL master. What pattern mitigates this?",
         ["Write-behind caching or time-series message streaming into ClickHouse/Kafka", "Switching to CSV files on Google Drive", "Mandating users only click once per hour", "Deleting the primary key"],
         "A", "Decouple high-velocity write ingest.", "Buffering stream writes in message queues and ingesting into specialized columnar databases preserves OLTP health.", "Write Scaling"),

        ("Content Security Policy (CSP): What critical frontend security risk does a robust Content Security Policy header mitigate?",
         ["Cross-Site Scripting (XSS) by restricting where scripts, styles, and images can be loaded from", "SQL Injection on backend queries", "Hard drive physical corruption", "DNS domain expiration"],
         "A", "CSP restricts unauthorized script execution.", "CSP headers tell browsers which domains are trusted script sources, preventing inline malicious payloads from executing.", "CSP & Security"),

        ("Rate of Degradation: What is the primary difference between graceful degradation and a hard catastrophic system failure?",
         ["Graceful degradation disables non-essential features (e.g. recommendations) while preserving core workflows (e.g. checkout); hard failure crashes the entire app", "Graceful degradation makes servers shut down permanently", "Hard failures are caused by HTML errors", "Graceful degradation requires physical rebooting"],
         "A", "Keep core functionality alive under stress.", "Graceful degradation sheds non-critical load (shedding secondary widgets) to ensure fundamental transactions succeed.", "System Resilience"),

        ("Microservices Network Latency: What term describes the latency tax incurred when a single user action triggers 20 synchronous RPC calls between internal services?",
         ["Cascading network latency / Service Call Chain Latency", "Database Deadlock", "Browser DOM thrashing", "Cookie fragmentation"],
         "A", "Chained synchronous calls compound latency.", "When microservices call each other synchronously in a chain, the total user wait time is the sum of every network hop.", "Microservice Latency"),

        ("Monolithic Advantage: In what scenario is a monolithic architecture significantly superior to microservices?",
         ["Rapid prototyping, early-stage startups with small teams, single deployment pipelines, and shared transactional consistency", "Companies with 5,000 independent engineering teams", "Applications requiring 50 different programming languages", "Systems that never use databases"],
         "A", "Monoliths excel at speed and simplicity.", "Monoliths offer single-repo visibility, trivial local testing, atomic DB transactions, and zero cross-service network latency.", "Monolith Advantages"),

        ("Circuit Breaker Pattern: What happens when an integrated third-party recommendation service goes down and starts timing out on every request?",
         ["The Circuit Breaker trips 'open', immediately returning a fallback response without wasting threads waiting for external timeouts", "The backend server crashes automatically", "All database tables are deleted", "The browser reloads 1,000 times"],
         "A", "Fails fast to prevent thread exhaustion.", "Circuit breakers stop calls to failing dependencies after a threshold of errors, preventing cascading system-wide exhaustion.", "Resilience Patterns"),

        ("Health Checks: Why do cloud load balancers require /healthz HTTP endpoints on backend services?",
         ["To detect unhealthy or crashed server instances and automatically stop routing client traffic to them", "To count how many lines of code were written", "To verify that the company's credit card is valid", "To check user grammar in form inputs"],
         "A", "Removes dead servers from traffic pool.", "Load balancers poll health endpoints. If an instance fails or hangs, it is automatically drained and removed.", "Health Checks"),

        ("Edge Computing: When would a PM recommend running logic at CDN Edge Workers (e.g. Cloudflare Workers) rather than the origin backend?",
         ["Geolocation routing, A/B testing header rewrites, and instant cookie-based redirects with zero origin round trips", "Heavy 30-minute machine learning model training", "Processing complex multi-table SQL ledger migrations", "Storing 50 terabytes of customer backup files"],
         "A", "Sub-10ms edge request manipulation.", "Edge workers execute lightweight logic directly at POPs closest to users, avoiding origin round trips for redirects and auth checks.", "Edge Computing"),

        ("Browser Rendering Critical Path: What happens when a web page loads a heavy synchronous `<script>` tag in the `<head>` without `async` or `defer`?",
         ["HTML parsing is completely blocked until the script downloads and executes, causing a blank screen delay", "The browser immediately executes the script in the background without affecting rendering", "The script is automatically deleted by Chrome", "The web server shuts down"],
         "A", "Parsing is blocked.", "Synchronous script tags block the browser's DOM parser, delaying First Contentful Paint until the file is parsed.", "Frontend Performance"),

        ("Asset Minification & Bundling: Why do frontend production build pipelines bundle and minify JavaScript and CSS?",
         ["To strip whitespace, shorten variable names, and reduce download size, speeding up page load over mobile networks", "To prevent users from opening Developer Tools", "To convert JavaScript into Python bytecode", "To automatically translate text into 50 languages"],
         "A", "Smaller payloads download faster.", "Minification strips comments and whitespace and mangles variable names to deliver the smallest possible payload over the wire.", "Web Optimization"),

        ("Time To First Byte (TTFB): A user complains that after clicking a link, the screen stays white for 1.8 seconds before anything starts loading. What metric is broken?",
         ["Time To First Byte (TTFB) - the time from the client HTTP request until the first byte of response data arrives from the server", "Cumulative Layout Shift (CLS)", "First Input Delay (FID)", "Browser battery level"],
         "A", "TTFB measures server response time.", "High TTFB indicates slow backend processing, database query locks, or transatlantic network hops before the server sends HTML.", "Performance Metrics"),

        ("HTTP Keep-Alive: What efficiency does persistent HTTP Keep-Alive provide for web applications?",
         ["It reuses an existing TCP connection for multiple HTTP requests rather than renegotiating a 3-way handshake and TLS handshake for every single file", "It keeps the user's laptop screen awake indefinitely", "It prevents database connections from expiring", "It forces mobile apps to stay open in the background"],
         "A", "Reuses established TCP sockets.", "Keep-Alive avoids the latency tax of negotiating a new TCP three-way handshake and TLS cipher exchange for every image and asset.", "TCP Fundamentals"),

        ("Compression (Gzip / Brotli): Why should web servers enable Brotli or Gzip compression on HTTP responses?",
         ["It compresses text responses (HTML, CSS, JSON) by up to 70-80%, drastically reducing bandwidth and download latency", "It converts relational databases into NoSQL documents", "It prevents web scraping by bots", "It encrypts credit card transactions"],
         "A", "Compresses text payloads.", "Gzip and Brotli use Huffman coding and LZ77 to compress JSON and HTML text by over 70%, dramatically speeding up transfer times.", "HTTP Compression"),

        ("Asynchronous Processing: Which of the following tasks should ALWAYS be processed asynchronously in a background queue rather than in the user's synchronous HTTP request?",
         ["Sending 10,000 welcome email newsletters and generating a 50-page invoice PDF", "Checking if the username input field is empty", "Retrieving a single user record by Primary Key", "Returning a static CSS stylesheet"],
         "A", "Long-running batch jobs belong in background workers.", "Any task that takes longer than 200ms or depends on external network services (emails, PDFs) must be offloaded to message queues.", "Async Architecture"),

        ("Idempotency Concept: What does it mean for an operation to be 'idempotent'?",
         ["Executing the operation multiple times produces the identical state as executing it exactly once", "The operation runs in under 1 millisecond", "The operation requires no authentication", "The operation can only be executed by administrators"],
         "A", "Multiple calls = same outcome.", "Idempotent actions guarantee that repeated execution (due to network retries) does not alter system state beyond the first call.", "System Design Fundamentals"),

        ("Disaster Recovery RTO & RPO: What is the fundamental difference between Recovery Time Objective (RTO) and Recovery Point Objective (RPO)?",
         ["RTO is how quickly systems must be restored after an outage; RPO is the maximum acceptable data loss measured in time (e.g. 5 minutes of lost data)", "RTO measures server cost; RPO measures user signups", "RTO applies to SQL; RPO applies to NoSQL", "RTO is for frontend; RPO is for backend"],
         "A", "RTO = downtime duration; RPO = data loss window.", "RTO sets the target restoration clock; RPO dictates backup frequency and the tolerable transaction loss window.", "Disaster Recovery"),

        ("Multi-Region Active-Active: Why is Multi-Region Active-Active the most expensive and complex architecture to maintain?",
         ["It requires continuous bi-directional database synchronization and distributed conflict resolution across global data centers", "Cloud providers bill 100x higher for Asian servers", "It cannot run on Linux servers", "It requires writing separate codebases for each country"],
         "A", "Cross-region data consistency is hard.", "Synchronizing real-time writes across global regions without violating speed of light latency or causing data collisions requires complex distributed consensus.", "Global Architecture"),

        ("Graceful Shutdown: Why must containerized backend workers implement graceful SIGTERM signal handling?",
         ["To allow in-flight HTTP requests and database transactions to finish processing before the process exits during deployments", "To save battery power on the cloud host", "To format the hard drive on exit", "To alert users via SMS that servers are restarting"],
         "A", "Finish existing work before stopping.", "Graceful shutdown finishes in-progress requests, flushes logs, and closes DB connections cleanly without dropping active user queries.", "DevOps Best Practices"),

        ("Sticky Sessions: What is the downside of using 'Sticky Sessions' (Session Affinity) on a load balancer?",
         ["It breaks uniform load distribution because heavy users remain tied to a single server instance, preventing balanced horizontal scaling", "It deletes cookies every 5 minutes", "It requires switching from HTTPS to HTTP", "It prevents users from uploading files"],
         "A", "Causes server load imbalances.", "Sticky sessions tie specific users to specific servers. If a power user performs heavy compute, that single node gets overloaded.", "Load Balancing"),

        ("API Gateway Role: What primary architectural responsibilities does an API Gateway handle in front of internal backend services?",
         ["Centralized authentication, rate limiting, request routing, SSL termination, and API usage analytics", "Directly querying hard drives without OS drivers", "Rendering React components in the browser", "Hosting corporate email accounts"],
         "A", "Front door for all internal APIs.", "API gateways act as the single entry point, abstracting routing, auth, telemetry, and policy enforcement away from individual microservices.", "API Gateway"),

        ("CORS (Cross-Origin Resource Sharing): What causes a browser to throw a CORS error when calling an API?",
         ["The frontend JavaScript origin (e.g. https://app.com) differs from the backend API origin (e.g. https://api.com), and the API did not return matching Access-Control-Allow-Origin headers", "The user's password was incorrect", "The backend server ran out of hard disk space", "The user is using an outdated smartphone"],
         "A", "Browser security policy enforcement.", "CORS is a browser security mechanism that blocks cross-origin requests unless the server explicitly grants permission via HTTP headers.", "Browser Security"),

        ("Microservices Anti-Pattern (Distributed Monolith): What is a 'Distributed Monolith' in modern engineering?",
         ["A system composed of multiple microservices that are tightly coupled, must be deployed simultaneously, and share database tables, combining the downsides of both architectures", "A supercomputer hosted by NASA", "A single massive monolithic codebase running on a mainframe", "A mobile application that works offline"],
         "A", "All the operational pain with none of the benefits.", "A distributed monolith has decoupled services that cannot operate independently, requiring synchronized releases and causing cascading cross-network failures.", "Architecture Anti-Patterns"),

        ("Message Broker vs In-Memory Cache: What is the primary difference in purpose between RabbitMQ and Redis?",
         ["RabbitMQ is built primarily for robust, guaranteed message routing and consumer acknowledgment queues; Redis is primarily an ultra-fast in-memory key-value data store and cache", "RabbitMQ is a relational database; Redis is a web browser", "RabbitMQ can only be used on Windows; Redis runs on Android", "There is no difference; they are identical"],
         "A", "Message broker vs In-memory key-value store.", "While Redis supports lightweight pub/sub, dedicated brokers like RabbitMQ/Kafka guarantee persistence, routing topologies, and delivery receipts.", "Infrastructure Selection"),

        ("Database Connection Leak: What happens to a backend application when code opens database connections inside request handlers but fails to close them in an `except/finally` block?",
         ["The database pool exhausts all available connections, causing all subsequent user requests to time out and crash the service", "The database automatically upgrades its memory", "The backend rewrites the query automatically", "Connections are converted into static HTML"],
         "A", "Exhausts connection limits.", "Failing to release database connections causes pool starvation, leading to system-wide lockouts until the service is restarted.", "Production Reliability"),

        ("Database Read-Your-Own-Writes Consistency: A user posts a comment, but when the page refreshes, their comment does not appear for 2 seconds. What caused this?",
         ["Asynchronous replication lag between the Primary master database (where the write occurred) and the Read Replica (which served the immediate read)", "The user's keyboard was unplugged", "The browser deleted the comment automatically", "The database password changed"],
         "A", "Replication lag on read replicas.", "Replicating writes across read replicas is asynchronous. Direct reads right after writes must be routed to the primary master to guarantee read-your-own-writes consistency.", "Replication Lag"),

        ("Blue-Green vs Rolling Deployment: What advantage does a Blue-Green deployment have over a Rolling deployment during a catastrophic bug release?",
         ["Instant instantaneous rollback by switching load balancer router traffic back to the idle Blue environment in under 1 second", "Zero server cost", "Requires no automated tests", "Works without load balancers"],
         "A", "Instant 1-second router rollback.", "Blue-Green keeps the previous version running warm. If the new release fails, shifting traffic back to the old environment takes seconds.", "Deployment Strategies"),

        ("Zero Downtime Database Migrations: How should engineering add a new non-nullable column to a 100-million row production table without causing a service outage?",
         ["Multi-step migration: Add column as nullable, backfill data in batches, update application code, and then add NOT NULL constraint", "Lock the entire table for 3 hours during peak business hours", "Delete the table and rebuild it from scratch", "Stop taking user payments for a week"],
         "A", "Expand and contract non-blocking migrations.", "Direct table-locking ALTER statements block production writes. Multi-phase non-blocking migrations preserve live traffic.", "Database Migrations"),

        ("Web Application Firewall (WAF): What primary threats does a cloud WAF (e.g. AWS WAF, Cloudflare) protect against?",
         ["Common web exploits such as SQL injection, Cross-Site Scripting (XSS), bad bots, and HTTP flood attacks", "Physical data center power outages", "Developer syntax errors", "Employee laptop screen damage"],
         "A", "Inspects and blocks malicious HTTP payloads.", "WAFs inspect incoming HTTP requests at the edge, blocking signature-based attack vectors before they reach origin servers.", "WAF & Security"),

        ("Feature Flags / Toggles: Why do PMs mandate Feature Flags (e.g. LaunchDarkly) for major product releases?",
         ["To decouple software deployment from business release, enabling canary rollouts, instant kill-switches, and risk-free testing in production", "To make CSS buttons look darker", "To replace automated unit testing", "To automatically write marketing copy"],
         "A", "Decouples deployment from feature exposure.", "Feature flags allow code to be deployed safely dark, enabled for 1% of users, and instantly killed if errors spike without redeploying code.", "Feature Flags")
    ]
    
    for idx, (p, opts, ans, hint, exp, tag) in enumerate(data, 1):
        options = [{"id": chr(65+i), "text": opt} for i, opt in enumerate(opts)]
        qs.append(Question(
            id=str(uuid.uuid4()),
            quiz_id=quiz_id,
            question_type="single" if len(opts) > 2 else "true_false",
            prompt=p,
            options=options,
            correct_answers=ans,
            hint=hint,
            explanation=exp,
            concept_tag=tag,
            source_reference=f"Day 1 System Design (Topic {idx})"
        ))
    return qs

print("Prepared helper for 50 questions.")
