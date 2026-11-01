import uuid
from app.models.entities import Question

def get_day2_questions(quiz_id):
    qs = []
    # 50 scenarios spanning REST verbs, HTTP status codes (2xx, 3xx, 4xx, 5xx), Webhooks vs Polling, Idempotency, Rate Limiting, GraphQL, SOAP, gRPC, JWT tokens, OAuth2, API Versioning, Documentation, Pagination, Caching, Error Payloads, Security (SQLi, XSS, MITM)
    data = [
        ("Polling Flood: Your server polls a payment gateway's /status every 2 seconds for 100k carts, getting HTTP 429. What is the proper fix?",
         ["Replace aggressive polling with Webhooks so the payment provider pushes an event only when payment state changes", "Poll every 200ms", "Renew SSL certificate", "Send confirmations via DNS"],
         "A", "Push vs Pull architecture.", "Webhooks eliminate redundant polling traffic by notifying backends asynchronously when state changes.", "Webhooks vs Polling"),

        ("Auth Diagnostics: An authenticated user with a valid JWT token tries accessing another user's private financial statement. What HTTP code should the API return?",
         ["403 Forbidden (authenticated, but lacking permission for this resource)", "401 Unauthorized", "500 Internal Error", "201 Created"],
         "A", "401 is for unauthenticated callers; 403 is for unauthorized access.", "401 means missing/invalid credentials. 403 means identity is verified, but permissions are denied.", "HTTP Status Codes"),

        ("Build vs Buy: A food delivery app team proposes building a custom global maps engine and SMS telecom routing network from scratch over 6 months. As PM, how do you evaluate?",
         ["Reject building in-house; buy/integrate established APIs (Google Maps, Twilio) because routing and SMS are commodity infrastructure, and time-to-market is the primary competitive factor", "Approve it because building in-house always saves money", "Communicate with drivers via email", "Build maps in-house but use an API for recipes"],
         "A", "Differentiate on core value; buy commodity infrastructure.", "Commodity utilities should be consumed via APIs to maximize engineering velocity on core product differentiators.", "Build vs Buy"),

        ("Idempotency: When a user clicks 'Pay Now' on a slow cellular connection and retries after a network drop, how do you prevent double-charging?",
         ["Implement an Idempotency-Key in the request header so the server recognizes retries and returns the original transaction result without double-charging", "Disable payments on mobile", "Switch payments to GET requests", "Ask users to phone customer support"],
         "A", "Idempotency prevents duplicate state changes.", "Idempotency keys allow distributed payment gateways to detect duplicate submissions and safely replay the initial result.", "Payment Idempotency"),

        ("REST Semantics: According to REST standards, which HTTP methods must be used for Creating, Completely Replacing, Partially Updating, and Deleting a resource?",
         ["POST (Create), PUT (Full Replace), PATCH (Partial Update), DELETE (Delete)", "GET (Create), POST (Replace), PUT (Partial), DROP (Delete)", "FETCH (Create), UPDATE (Replace), PATCH (Partial), PURGE (Delete)", "SEND (Create), EDIT (Replace), MODIFY (Partial), REMOVE (Delete)"],
         "A", "Standard REST HTTP verbs.", "POST creates, PUT replaces the whole entity, PATCH applies delta fields, and DELETE removes.", "REST Verbs"),

        ("Safe GET Requests: True or False: A GET request to /api/products/123 should modify product inventory in the database as a side effect.",
         ["False", "True"],
         "A", "GET must be safe and idempotent.", "HTTP GET requests must be read-only with no side effects because web crawlers and caches invoke GET requests automatically.", "HTTP Safety"),

        ("Over-fetching in Mobile: A mobile team complains that fetching a user screen requires 6 separate REST API calls, causing lag. What alternative architecture solves this?",
         ["GraphQL (allows client to request the exact nested fields required in a single round-trip)", "SOAP XML", "FTP file sync", "Telnet sockets"],
         "A", "Client-specified schemas eliminate over/under-fetching.", "GraphQL allows mobile clients to declare exact data shapes in a single query, saving bandwidth and round-trips.", "GraphQL vs REST"),

        ("Token Bucket Rate Limiting: Why is the Token Bucket algorithm preferred over a Fixed Window Counter for public API rate limiting?",
         ["It accommodates natural short bursts of traffic while enforcing a smooth sustained rate limit, preventing the 'edge of window' traffic spike exploit", "It bans users permanently after 3 calls", "It converts JSON into binary XML", "It eliminates the need for servers"],
         "A", "Handles bursty real-world user activity.", "Token bucket allows temporary bursts up to bucket capacity while refilling at a steady rate, smoothing traffic.", "Rate Limiting"),

        ("API Versioning Strategy: Your API has breaking changes in the user profile payload. How do you protect legacy mobile app versions?",
         ["Introduce URI versioning (/api/v2/users) or header versioning, maintaining /v1/ until deprecated app versions drop below acceptable thresholds", "Immediately overwrite /api/users and crash older apps", "Send SMS to all users telling them not to open the app", "Return 503 on all endpoints"],
         "A", "Never break active client apps in production.", "Mobile apps cannot be forcefully updated on all devices instantly; breaking changes require versioned routes.", "API Lifecycle"),

        ("API Security: Which of the following is an OWASP critical security vulnerability in API design?",
         ["Broken Object Level Authorization (BOLA), where an API endpoint exposes records by ID without checking if the requester owns that record", "Using HTTPS encryption", "Returning JSON responses", "Adding pagination to list endpoints"],
         "A", "BOLA is the #1 API vulnerability.", "BOLA (or IDOR) allows authenticated users to access other customers' private data simply by altering an ID parameter in the URL.", "API Security"),

        # 40 additional realistic Day 2 questions
        ("HTTP 502 Bad Gateway: A frontend user sees HTTP 502 Bad Gateway. What does this error code indicate?",
         ["The reverse proxy (e.g. Nginx or Cloudflare) received an invalid response or connection drop from the upstream application server", "The user's credit card was declined", "The user's password was wrong", "The browser is out of memory"],
         "A", "Upstream server failure behind proxy.", "502 indicates that an edge proxy or load balancer reached out to the backend application, but the backend dropped or failed the socket.", "HTTP 5xx Errors"),

        ("HTTP 504 Gateway Timeout: What is the root cause of an HTTP 504 Gateway Timeout error?",
         ["The reverse proxy waited for the backend application server to respond, but the backend took longer than the configured timeout threshold", "The client browser closed the tab", "The DNS domain expired", "The user was logged out"],
         "A", "Backend took too long to finish processing.", "504 indicates that upstream processing (often slow SQL queries or hung worker threads) exceeded the gateway's timeout window.", "HTTP 5xx Errors"),

        ("HTTP 409 Conflict: When should an API return HTTP 409 Conflict?",
         ["When a client tries to register an account using an email that already exists in the database, violating a uniqueness constraint", "When the server hard drive is full", "When the user forgets their password", "When the payment gateway is offline"],
         "A", "Resource state conflict.", "409 Conflict indicates that the request cannot be completed because it contradicts the current state of the target resource (e.g. duplicate key).", "HTTP 4xx Errors"),

        ("HTTP 204 No Content: When is an HTTP 204 No Content response code standard practice?",
         ["When an action succeeds (such as DELETE /items/123) and the server has no response body to return to the client", "When the server crashed and lost the data", "When the user has an empty shopping cart", "When the database is empty"],
         "A", "Successful action with empty payload.", "204 signifies that the server successfully executed the request but has no payload bytes to send back in the body.", "HTTP 2xx Status"),

        ("HTTP 202 Accepted: Why would a video encoding API return HTTP 202 Accepted instead of 200 OK?",
         ["The request was accepted and queued for asynchronous background processing, but the long-running video encode is not yet complete", "The video failed security scanning", "The user needs to pay extra money", "The browser does not support MP4"],
         "A", "Queued for async processing.", "202 informs the client that the payload was valid and enqueued, but final execution will occur asynchronously.", "HTTP 2xx Status"),

        ("Pagination Design: When designing an API that returns 500,000 product catalog items, why should you use Cursor-based pagination over Offset-based pagination?",
         ["Cursor pagination prevents duplicate and missed items when new rows are inserted between page fetches, and performs in O(1) time without slow SQL OFFSET scans", "Cursor pagination downloads all 500,000 items in 1 millisecond", "Offset pagination is deprecated by the W3C", "Cursor pagination requires no database"],
         "A", "Consistent performance on dynamic datasets.", "High offset queries (OFFSET 100000) force databases to scan and discard 100,000 rows. Cursor pagination uses index comparisons for constant-time lookups.", "API Pagination"),

        ("JWT Structure: What are the three dot-separated components of a JSON Web Token (JWT)?",
         ["Header (algorithm info), Payload (claims and user data), and Signature (cryptographic hash proving authenticity)", "Username, Password, and Database Name", "HTML, CSS, and JavaScript", "IP Address, MAC Address, and GPS Coordinates"],
         "A", "Header.Payload.Signature.", "A JWT consists of base64-encoded Header and Payload, followed by a HMAC or RSA signature verified with a secret key.", "JWT Architecture"),

        ("Stateless JWT Trade-off: What is the main architectural challenge when using purely stateless JWT access tokens for user sessions?",
         ["Immediate token revocation is difficult before expiration without maintaining a centralized token blacklist or checking Redis on every request", "JWT tokens can only be read on Windows", "JWT tokens encrypt data so deeply that the server cannot read it", "JWT tokens can only hold 5 bytes of data"],
         "A", "Revocation requires blacklist state.", "Because stateless JWTs are self-validating, instantly revoking a compromised token requires maintaining a stateful revocation blacklist.", "JWT Trade-offs"),

        ("OAuth 2.0 Authorization Code Flow: In the 'Sign in with Google' workflow, why does the client receive an Authorization Code first before exchanging it for an Access Token on the backend?",
         ["To prevent exposing the sensitive Access Token in the public browser URL bar or browser history, keeping token exchange on the secure backend server", "To allow Google to download files from the user's laptop", "To make user login take 10 times longer", "To format the database"],
         "A", "Protects token from client-side interception.", "The Authorization Code flow ensures the secret Access Token is exchanged directly server-to-server with the client secret, avoiding browser leaks.", "OAuth 2.0"),

        ("API Response Envelopes: Why is it best practice for error responses to return structured JSON (e.g. `{ error: { code: 'INVALID_ZIP', message: 'Zip code must be 5 digits' } }`) rather than a raw HTML stack trace?",
         ["It allows client applications to programmatically parse error codes and render localized user-friendly error banners without crashing the app", "Raw stack traces make computers run slower", "HTML is illegal in REST APIs", "It eliminates the need for quality assurance"],
         "A", "Programmatic error handling.", "Standardized machine-readable error schemas allow frontend and mobile clients to display specific localized guidance rather than failing silently.", "API Error Design"),

        ("gRPC vs REST: When designing high-frequency, low-latency microservice-to-microservice communication, why do engineering teams choose gRPC over REST/JSON?",
         ["gRPC uses Protocol Buffers (compact binary serialization) over HTTP/2, achieving 7-10x higher throughput and lower serialization CPU overhead than REST/JSON", "gRPC doesn't require network connections", "REST cannot communicate between microservices", "gRPC works only on mobile phones"],
         "A", "Compact binary over HTTP/2.", "Protocol Buffers serialize structured data into compact binary bytes rather than verbose JSON strings, drastically reducing CPU and network transfer overhead.", "gRPC vs REST"),

        ("Webhook Signature Verification: When receiving webhooks from Stripe or PayPal, why MUST your backend verify the `Stripe-Signature` cryptographic header?",
         ["To prove that the webhook payload actually originated from Stripe and was not spoofed or intercepted by an attacker pretending to complete a payment", "To encrypt the customer's home address", "To calculate the sales tax automatically", "To check the user's credit score"],
         "A", "Prevents forged fake payment webhooks.", "Signature verification uses an HMAC secret shared between you and the payment provider to guarantee message authenticity and integrity.", "Webhook Security"),

        ("Webhook Retry Handling: If your backend returns HTTP 500 when Stripe delivers a payment webhook, what will a well-architected webhook system do?",
         ["It will retry delivering the webhook with exponential backoff over the next 24 to 72 hours until receiving an HTTP 200 OK", "It will cancel the customer's credit card", "It will delete your Stripe account", "It will publish your database on Twitter"],
         "A", "Exponential retry queues.", "Reliable webhook publishers implement retry schedules with exponential backoff so temporary receiver downtimes do not result in permanently lost events.", "Webhook Reliability"),

        ("ETag & Conditional Requests: How does the HTTP `ETag` (Entity Tag) and `If-None-Match` header mechanism optimize API performance?",
         ["If the resource has not changed, the server returns HTTP 304 Not Modified without sending the response body, saving bandwidth and rendering time", "It converts database tables into CSV files", "It renames the user account", "It automatically charges the user's card"],
         "A", "HTTP 304 cache validation.", "ETags represent content hashes. When a client sends an ETag in `If-None-Match`, the server skips sending the duplicate payload if the hash matches.", "HTTP Caching"),

        ("CORS Preflight (OPTIONS): Why does a browser automatically send an HTTP OPTIONS request before a POST or PUT API request?",
         ["To ask the destination server for permission (allowed methods, headers, and credentials) before sending potentially sensitive or state-changing cross-origin data", "To download the server's operating system", "To verify that the browser is running Google Chrome", "To format the database"],
         "A", "Pre-flight safety check.", "Browsers send pre-flight OPTIONS requests for cross-origin calls with custom headers or non-simple methods to verify backend CORS authorization.", "CORS Preflight"),

        ("API Documentation (OpenAPI / Swagger): Why is maintaining an automated OpenAPI specification critical for engineering teams?",
         ["It serves as a single source of truth for generating interactive API documentation, client SDK libraries, and automated contract testing suites", "It automatically fixes syntax errors in Python code", "It replaces the need to write backend code", "It files patent applications automatically"],
         "A", "Automates docs and client SDKs.", "OpenAPI specifications enable automated interactive test explorers (Swagger UI), mock servers, and automated SDK code generation for iOS and Android.", "API Standards"),

        ("Payload Size Limits: If a mobile user tries to upload a 50MB video to an API endpoint configured with a 5MB limit, what HTTP error status must the server return?",
         ["HTTP 413 Payload Too Large", "HTTP 404 Not Found", "HTTP 500 Internal Server Error", "HTTP 200 OK"],
         "A", "413 Payload Too Large.", "HTTP 413 informs the client immediately that the request entity exceeds the server's configured storage or body size limit.", "HTTP Status Codes"),

        ("Exponential Backoff with Jitter: When calling an external API that is experiencing high latency or rate limits, why is 'randomized jitter' added to exponential retry backoffs?",
         ["To prevent all retrying clients from hammering the recovering server in identical synchronized waves ('thundering herd problem')", "To make requests run at random speeds", "To hide the API key from hackers", "To bypass paying API subscription fees"],
         "A", "Prevents synchronized thundering herds.", "Adding small random time offsets (jitter) to retry schedules desynchronizes traffic waves, allowing stressed upstream servers to recover.", "Resilience Architecture"),

        ("GraphQL N+1 Problem: What performance defect is known as the 'N+1 Query Problem' in GraphQL API development?",
         ["When fetching a list of N users causes the backend to execute 1 query for the list and N individual database queries for each user's related data (e.g. orders)", "When an API costs $1 more every month", "When an API requires N+1 servers to run", "When an API only works on N+1 devices"],
         "A", "Inefficient relational loading without batching.", "Without batching utilities like DataLoader, naive GraphQL resolvers execute individual database lookups for each item in a list.", "GraphQL Performance"),

        ("GraphQL DataLoader Solution: How does the DataLoader utility resolve the N+1 problem in GraphQL backend resolvers?",
         ["It batches individual item requests within a single tick of the event loop and fetches them in a single SQL `WHERE id IN (...)` query, caching results in memory", "It deletes all foreign key constraints from the database", "It converts SQL queries into flat JSON files", "It reboots the database server every minute"],
         "A", "Batches and caches relational lookups.", "DataLoader consolidates individual ID requests into a single batched SQL query and caches results for the duration of the request.", "GraphQL Optimization"),

        ("API Deprecation Headers: When sun-setting an old version of an API endpoint, what standard HTTP response headers alert consuming developers?",
         ["`Deprecation: true` and `Sunset: <date>` headers indicating when the endpoint will be permanently terminated", "`Delete-Me: yes` header", "`Error: 100` header", "`Upgrade-To-Premium: true` header"],
         "A", "Standard RFC deprecation headers.", "RFC 8594 establishes `Deprecation` and `Sunset` headers to broadcast machine-readable termination deadlines to consuming engineering teams.", "API Lifecycle"),

        ("Webhook Security (Replay Attacks): How does an API consumer protect its webhook receiver from replay attacks where an attacker re-sends a captured valid webhook payload?",
         ["Include a timestamp in the signed webhook payload and reject any webhook where the timestamp is older than 5 minutes, checking processed event IDs for duplicates", "Change the company domain name daily", "Use plain HTTP instead of HTTPS", "Disable webhooks completely"],
         "A", "Timestamp verification + idempotency checks.", "Validating the signature timestamp and keeping a log of recently processed event UUIDs guarantees captured packets cannot be replayed.", "Webhook Security"),

        ("REST HATEOAS: What does HATEOAS (Hypermedia As The Engine Of Application State) recommend for REST API responses?",
         ["Returning hypermedia link relations (`_links`) in response bodies that guide clients to the next allowable state transitions and related endpoints", "Making all web pages run in HTML without JavaScript", "Replacing JSON with pure text strings", "Requiring user passwords in every JSON field"],
         "A", "Discoverable hypermedia links.", "HATEOAS embeds contextual navigation links within JSON objects (e.g. `{ '_links': { 'cancel': '/orders/1/cancel' } }`), guiding client state navigation.", "REST Architecture"),

        ("Client Secret in SPAs: Why must a Single Page Application (React/Vue running in a browser) NEVER store an OAuth client secret?",
         ["Because client-side JavaScript source code and memory can be trivially inspected by anyone using browser developer tools, leaking the secret globally", "Because React doesn't support strings longer than 10 characters", "Because client secrets can only be stored on mainframes", "Because Google Chrome deletes secrets automatically"],
         "A", "Browsers are untrusted public clients.", "Single Page Applications cannot protect secrets. OAuth 2.0 PKCE (Proof Key for Code Exchange) must be used instead of client secrets.", "OAuth Security"),

        ("OAuth 2.0 PKCE: What does PKCE (Proof Key for Code Exchange) protect against in mobile and single-page apps?",
         ["Authorization code interception attacks on public clients that lack secure backend secret storage", "SQL injection on database servers", "Physical hardware theft in data centers", "Slow internet connections"],
         "A", "Protects public clients from auth code interception.", "PKCE generates dynamic cryptographic verifier/challenge pairs on the device, ensuring only the exact client instance that started the login can exchange the code.", "OAuth Security"),

        ("Bulk Operations API Design: When designing an API allowing users to update 1,000 inventory items at once, how should the endpoint be structured?",
         ["Accept an array of update objects in a single POST /api/inventory/batch endpoint, returning individual status results for each item in a unified response", "Force the client to make 1,000 separate concurrent HTTP requests", "Download the database to the client and re-upload it", "Send 1,000 emails to the warehouse"],
         "A", "Batched transactional endpoints.", "Batch endpoints minimize network handshakes and enable transactional atomicity across bulk operations while returning granular item-by-item status.", "API Design Patterns"),

        ("API Throttling Tiers: Why do SaaS companies implement tiered API rate limits (e.g. Free: 60 rpm, Enterprise: 5,000 rpm)?",
         ["To protect multi-tenant infrastructure from noisy neighbors and monetize high-volume enterprise API usage", "Because enterprise servers use different internet cables", "To encourage users to delete their accounts", "Because Free accounts are not allowed to use JSON"],
         "A", "Resource allocation & monetization.", "Tiered rate limiting protects multi-tenant backends from resource starvation while creating clear monetization paths for heavy API usage.", "API Product Strategy"),

        ("Circuit Breaker Half-Open State: In the Circuit Breaker pattern, what occurs during the 'Half-Open' state?",
         ["The system allows a limited trial number of probe requests through to the failing service; if they succeed, it closes the circuit and restores normal traffic", "The system shuts down completely", "The database is converted to read-only mode forever", "The user is forced to change their password"],
         "A", "Testing recovery safely.", "Half-Open acts as a cautious probe state, verifying whether the recovering downstream dependency is truly healthy before resuming 100% traffic.", "System Resilience"),

        ("HTTP 422 Unprocessable Entity: When is HTTP 422 returned instead of HTTP 400 Bad Request?",
         ["When the incoming JSON syntax is well-formed, but the semantic business rules fail (e.g. end_date is earlier than start_date)", "When the JSON payload has invalid curly brackets", "When the server hard drive has corrupted blocks", "When the API key has expired"],
         "A", "Semantic validation failure.", "400 indicates syntactic malformation (unparseable JSON). 422 indicates valid syntax that violates business logic validation rules.", "HTTP Status Codes"),

        ("API Mock Servers: Why should product teams create Mock API servers (e.g. Prism or MSW) during early sprint development?",
         ["To enable frontend engineers to build and test UI features against agreed API schemas in parallel, before the backend engineering team finishes writing code", "To replace real backend databases permanently", "To prevent developers from testing code", "To bypass unit testing requirements"],
         "A", "Enables parallel frontend/backend velocity.", "Mock servers unblock frontend velocity by simulating real API responses based on OpenAPI contracts before backend endpoints are built.", "API-First Development"),

        ("API Gateway Transformation: How does an API Gateway perform 'Payload Transformation'?",
         ["It transforms legacy internal XML or SOAP backend payloads into modern JSON for external client applications, decoupling legacy systems", "It deletes half the JSON data", "It converts text into audio", "It translates English into Spanish"],
         "A", "Bridges legacy internal protocols to external JSON.", "API Gateways can translate internal legacy backend payloads (SOAP/XML) into clean REST/JSON contracts without refactoring internal mainframes.", "API Gateway"),

        ("Server-Sent Events (SSE) vs WebSockets: When is SSE preferred over WebSockets for real-time live feeds (e.g. stock tickers or LLM token streaming)?",
         ["When communication is strictly unidirectional (server pushing text/tokens to client) over standard HTTP without requiring a custom full-duplex TCP protocol", "When the client needs to stream video to the server", "When the server has no internet connection", "When the app only runs on Android"],
         "A", "Unidirectional text/token streaming over HTTP.", "Server-Sent Events run over standard HTTP/HTTPS, reconnect automatically, and are lightweight for single-direction server-to-client streaming like ChatGPT tokens.", "Server-Sent Events"),

        ("BOLA / IDOR Defense: What backend engineering check completely prevents Broken Object Level Authorization (IDOR) on an endpoint like `GET /documents/8472`?",
         ["Always verifying that `document.organization_id == current_authenticated_user.organization_id` in the database query before returning data", "Hiding the document button in frontend CSS", "Using a longer URL string", "Renaming the API endpoint"],
         "A", "Tenant and ownership verification in query.", "Preventing BOLA requires validating that the queried entity belongs to the authenticated user's organization directly within the SQL WHERE clause.", "API Security BOLA"),

        ("API Rate Limit Headers: What standard HTTP response headers tell consuming client applications their exact rate limit status?",
         ["`X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset` (or standard `RateLimit-*` headers)", "`User-Status: Good`", "`Speed: Fast`", "`Billing-Cost: Free`"],
         "A", "Standard rate limit telemetry headers.", "These headers inform clients of their quota ceiling, how many calls remain in the window, and epoch seconds until quota renewal.", "Rate Limiting Standards"),

        ("CORS with Credentials (`Access-Control-Allow-Credentials`): Why does a browser throw a CORS error if a server responds with `Access-Control-Allow-Origin: *` while the client sets `credentials: 'include'`?",
         ["The browser security standard strictly prohibits wildcard `*` origins when requests include sensitive cookies or authorization tokens; origin must be explicitly named", "Wildcards only work on weekends", "The client is using an old browser", "Cookies are not allowed in APIs"],
         "A", "Wildcard forbidden with credentials.", "Browsers mandate that if requests carry sensitive session cookies, the backend must return the exact matching origin domain rather than a wildcard `*`.", "CORS & Auth"),

        ("API Contract Testing (Pact): What does Consumer-Driven Contract Testing verify in a microservices ecosystem?",
         ["It verifies that upstream API providers do not make breaking schema changes that violate the explicit expectations of consuming frontend or mobile clients", "It checks if developers paid their taxes", "It verifies employee contracts", "It checks internet cables"],
         "A", "Guarantees cross-service schema compatibility.", "Contract testing prevents teams from accidentally deploying breaking API changes that violate downstream client schemas.", "Contract Testing"),

        ("API Payload Compression Negotiation: How does an API client request that the server return Gzip or Brotli compressed JSON?",
         ["By sending the `Accept-Encoding: gzip, br` HTTP request header", "By writing code in lowercase", "By using a zip file in the URL", "By clicking the browser refresh button"],
         "A", "Accept-Encoding negotiation.", "The `Accept-Encoding` header signals client decompression support, allowing servers to compress JSON responses and shrink bandwidth by 70%.", "HTTP Compression"),

        ("Long Polling: In older systems lacking WebSockets, how does HTTP Long Polling simulate real-time updates?",
         ["The client sends an HTTP request, and the server hangs open the connection without responding until fresh data arrives or a timeout occurs", "The client sends 100 requests per millisecond", "The server reboots every 10 seconds", "The user must press F5 continuously"],
         "A", "Hangs connection open until event fires.", "Long polling holds open the HTTP socket until the server has new data, immediately returning the payload and prompting the client to reopen a new poll socket.", "Real-time Legacy Patterns"),

        ("API Gateway Caching: When is it safe and effective for an API Gateway to cache GET request responses for 60 seconds?",
         ["For public, non-personalized endpoints with high read volume (e.g. public exchange rates or trending news headlines)", "For personal banking account balances", "For shopping cart checkout balances", "For user password change endpoints"],
         "A", "Public, non-personalized static data.", "Edge caching on API gateways absorbs massive read spikes for public data, but must NEVER be used on private or user-personalized endpoints.", "API Gateway Caching"),

        ("API Security - SQL Injection (SQLi): What is the single most effective coding practice to completely eliminate SQL Injection in API backends?",
         ["Using Parameterized Queries (Prepared Statements) or an ORM so user inputs are treated strictly as data literals and never concatenated into executable SQL strings", "Writing SQL queries in uppercase", "Encrypting database passwords", "Validating that users have long passwords"],
         "A", "Parameterized queries eliminate SQLi.", "Prepared statements separate SQL syntax from untrusted user input, making SQL injection impossible regardless of user input characters.", "API Security SQLi")
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
            source_reference=f"Day 2 APIs & Integrations (Topic {idx})"
        ))
    return qs

print("Prepared helper for Day 2.")
