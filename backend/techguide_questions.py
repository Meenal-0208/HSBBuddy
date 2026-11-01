import uuid
from app.models.entities import Question

def get_techguide_questions(quiz_id):
    qs = []
    # 50 scenarios spanning Frontend (React, Vue, Angular, Svelte), Backend (Node, Python, Go, Java), Cloud (AWS, Azure, GCP), Containers (Docker, Kubernetes), DevOps (CI/CD, GitHub Actions), Observability (Logs, Metrics, Traces), Security (SOC2, HIPAA, IAM, RBAC)
    data = [
        ("Enterprise Compliance: Your B2B SaaS startup pitches to Fortune 500 banks and health systems. What architectural requirements are non-negotiable for enterprise audits?",
         ["SOC2/HIPAA compliance readiness, encryption in transit (TLS) and at rest (AES-256), audit logs, and least-privilege RBAC", "Using solely NoSQL databases", "Hosting on a single shared VPS", "Public HTTP communication without passwords"],
         "A", "Enterprise security and governance.", "Enterprise procurement demands third-party security certifications (SOC 2 Type II), robust data encryption, and role-based access control.", "Enterprise Readiness"),

        ("CI/CD Pipeline Failure: Releases are breaking in production twice a week because engineers merge code directly without standardized integration tests. What is the fundamental PM fix?",
         ["Implement an automated CI/CD pipeline (e.g. GitHub Actions) that enforces linting, automated unit/integration tests, and staging review before any PR can merge", "Stop writing automated tests and test on production manually", "Revert all backend code to monolithic assembly", "Deploy code via manual FTP"],
         "A", "Automated CI/CD safety gates.", "CI/CD automates quality gates, running test suites on every pull request to prevent regressions from reaching production.", "CI/CD & DevOps"),

        ("Docker Containerization: What primary problem does Docker solve for engineering and product teams during release cycles?",
         ["It eliminates the 'it works on my machine' bug by packaging software with all its runtime dependencies, OS libraries, and configuration into an immutable container", "It rewrites slow SQL queries automatically", "It replaces the web framework", "It makes cloud hosting free"],
         "A", "Immutable reproducible runtimes.", "Containers encapsulate application code alongside exact OS system libraries, guaranteeing identical execution from dev laptops to production clusters.", "Containers & Docker"),

        ("Cloud Provider Alignment: A company heavily invested in Microsoft 365, Active Directory, and Windows Server needs to choose a cloud provider. What is the standard strategic recommendation?",
         ["Microsoft Azure (seamless single sign-on integration with Entra ID/Active Directory and enterprise software license portability)", "AWS (regardless of existing Microsoft contracts)", "Build an on-premise closet server", "DigitalOcean droplet for global ERP"],
         "A", "Commercial and IAM synergy with Azure.", "Enterprises with deep Microsoft footprints gain commercial discounts via Enterprise Agreements and instant identity integration with Azure AD/Entra ID.", "Cloud Strategy"),

        ("Infrastructure as Code (IaC): When provisioning multi-region cloud infrastructure across staging, EU, and US, why mandate Terraform over clicking the AWS console?",
         ["IaC defines infrastructure in declarative, version-controlled code, preventing human configuration drift and enabling reproducible multi-region environments", "Clicking the AWS console bills 500% higher rates", "IaC makes servers run 10x faster", "Terraform replaces the database"],
         "A", "Declarative reproducible environments.", "IaC prevents configuration drift, documents cloud topologies in git, and enables automated provisioning of staging and production environments.", "IaC & Terraform"),

        ("Serverless Cost Curve: True or False: AWS Lambda (Serverless) is always cheaper than maintaining provisioned EC2 virtual servers for consistent, high-volume 24/7 processing workloads.",
         ["False", "True"],
         "A", "Serverless is cheap for idle/spiky; expensive for steady 100% compute.", "Serverless pricing per millisecond becomes significantly more expensive than reserved instances for continuous 24/7 high-throughput processing.", "Serverless Costs"),

        ("Three Pillars of Observability: What are the 'Three Pillars of Observability' required to diagnose intermittent production outages and latency spikes?",
         ["Metrics (aggregated numeric stats), Logs (timestamped event records), and Traces (end-to-end request lifecycle across microservices)", "HTML, CSS, and JavaScript", "Jira tickets, Slack notifications, and Zoom calls", "CPU, GPU, and RAM"],
         "A", "Metrics, Logs, and Distributed Traces.", "Metrics show trends and trigger alerts; Logs provide detailed context; Distributed Traces pinpoint exact bottlenecks across microservice hops.", "Observability"),

        ("Managed Cloud Databases: Why do modern startups prefer managed database services (e.g. AWS RDS or Supabase) over renting a bare Linux VM and running PostgreSQL manually?",
         ["Managed services automate OS patching, automated point-in-time backups, multi-AZ failover, and storage auto-scaling, freeing engineers to build product features", "PostgreSQL cannot install on Linux VMs", "Managed databases are legally required by international law", "Managed databases are completely free"],
         "A", "Saves expensive DBA operational overhead.", "Managed services eliminate the heavy operational overhead of disaster recovery, automatic failover, patching, and disk management.", "Cloud Services"),

        ("Blue-Green Deployment: Which deployment strategy spins up an identical new version environment alongside production, tests it, and switches traffic instantly at the load balancer?",
         ["Blue-Green Deployment", "Cold Reboot Deployment", "Manual FTP Drag-and-Drop", "Forklift Migration"],
         "A", "Instant traffic switch with zero downtime.", "Blue-Green keeps two identical environments, switching routing instantly upon passing smoke tests to deliver zero downtime and instant rollback.", "Zero-Downtime Deployments"),

        ("Secrets Management: Where should sensitive API keys, database passwords, and private certificates be stored in modern web production stacks?",
         ["Dedicated secret vaults (AWS Secrets Manager, HashiCorp Vault, Azure Key Vault) and injected at runtime via environment variables", "Hardcoded in public git repository source files", "Plaintext in public frontend JavaScript bundles", "In user browser cookies"],
         "A", "Encrypted secret vaults with runtime injection.", "Committing credentials to git or frontend client code is a critical vulnerability. Secrets must live in encrypted KMS-backed vaults.", "Secrets Management"),

        # 40 additional realistic Tech Stacks Guide questions
        ("Frontend Framework Selection (React vs Vue vs Angular): When is enterprise Angular preferred over React for large-scale enterprise development teams?",
         ["When the organization mandates a highly opinionated, full-featured framework with strict TypeScript enforcement, built-in dependency injection, and standardized routing out of the box", "When the team only knows CSS", "When the application has no backend", "When building mobile apps for flip phones"],
         "A", "Opinionated structure for large teams.", "Angular enforces strict architectural patterns and standard libraries, making it easier for large enterprise teams to write consistent code across 50 squads.", "Frontend Frameworks"),

        ("Svelte / SvelteKit Advantage: How does Svelte differ architecturally from React and Vue regarding DOM updates?",
         ["Svelte shifts work from the browser to the build-step compile phase, updating the real DOM surgically without a heavy Virtual DOM runtime overhead", "Svelte only works on mobile devices", "Svelte requires a mainframe computer", "Svelte replaces CSS with Python"],
         "A", "Compile-time framework with no Virtual DOM.", "Svelte compiles components into tiny vanilla JavaScript code that directly mutates DOM nodes, achieving smaller bundle sizes and faster runtime execution.", "Frontend Performance"),

        ("Micro-Frontends: What organizational and architectural problem do Micro-Frontends solve for 200+ person engineering organizations?",
         ["Allowing autonomous squads to build, test, and independently deploy separate portions of a single web portal using different technologies without waiting on other teams", "Making websites load 1,000 times faster", "Eliminating the need for backend APIs", "Allowing users to write their own JavaScript"],
         "A", "Decouples deployment across large teams.", "Micro-frontends decompose monolithic frontend applications so independent product teams can deploy user-facing features without coordinated monolithic releases.", "Micro-Frontends"),

        ("Backend Language Trade-off (Go vs Python): Why do companies like Uber and Google choose Go (Golang) over Python for high-throughput network microservices?",
         ["Go compiles to a single native binary, executes true multi-threaded concurrency via lightweight Goroutines, and consumes a fraction of the memory and CPU of interpreted Python", "Go has more AI libraries than Python", "Python cannot make HTTP requests", "Go is the only language supported on AWS"],
         "A", "High concurrency and low memory footprint.", "Go's static compilation, goroutine scheduler, and minimal memory footprint make it ideal for microservices handling 100,000 requests per second.", "Backend Trade-offs"),

        ("Backend Language Trade-off (Node.js vs Java Spring Boot): When is Java Spring Boot preferred over Node.js for Fortune 500 enterprise banking backends?",
         ["When enterprise compliance demands strong compile-time static typing, robust multi-threading for CPU-bound computations, and mature integration with legacy banking mainframes", "Because Java runs only in web browsers", "Because Node.js cannot connect to SQL databases", "Because Java hosting is completely free"],
         "A", "Enterprise multi-threading and type safety.", "Java Spring Boot provides robust multi-threading, enterprise security frameworks, and deep integration with legacy enterprise systems.", "Enterprise Backends"),

        ("Kubernetes (K8s) Value: What core capability does Kubernetes provide for containerized microservice architectures?",
         ["Automated container orchestration: self-healing pod restarts, automated horizontal pod auto-scaling (HPA), rolling updates, and internal service discovery", "Writing HTML and CSS automatically", "Designing mobile app icons", "Replacing relational databases with text files"],
         "A", "Orchestrates container lifecycle and scaling.", "Kubernetes automates deploying, scaling, and managing containerized applications across a cluster of server nodes.", "Kubernetes & Containers"),

        ("Kubernetes Helm Charts: What is a Helm chart in Kubernetes environments?",
         ["A package manager that bundles declarative Kubernetes YAML manifests into versioned, parameterized templates for reproducible application deployments", "A navigation tool for ships", "A tool for editing photos", "A database engine"],
         "A", "Package manager for Kubernetes manifests.", "Helm charts package complex Kubernetes resources (Deployments, Services, Ingresses) into reusable, configurable templates.", "Kubernetes Helm"),

        ("Service Mesh (Istio / Linkerd): What role does a Service Mesh play in a complex Kubernetes microservices deployment?",
         ["Provides dedicated infrastructure for transparent service-to-service communication, enforcing mutual TLS (mTLS) encryption, traffic shaping, and distributed tracing", "Replaces the frontend React application", "Acts as the physical network router in the data center", "Deletes old code automatically"],
         "A", "Manages east-west traffic security and telemetry.", "Service meshes inject sidecar proxies to manage service-to-service security, retries, and telemetry without modifying application code.", "Service Mesh"),

        ("Canary Deployments: What is the primary safety mechanism of a Canary Deployment?",
         ["Routing a tiny percentage (e.g. 2%) of production user traffic to the new version while monitoring error rates, before rolling it out to 100% of users", "Testing code on a developer's laptop", "Deploying code only on weekends", "Shutting down the website during updates"],
         "A", "Limits blast radius by testing on 2% of live traffic.", "Canary releases expose new code to a small subset of real users, allowing automated monitoring to detect spikes in 500 errors and rollback safely.", "Deployment Safety"),

        ("Chaos Engineering (Chaos Monkey): Why do engineering teams like Netflix intentionally kill production servers using Chaos Engineering tools?",
         ["To proactively verify that the system automatically tolerates hardware failures and self-heals without degrading end-user experience before real disasters occur", "To punish lazy developers", "To save on monthly AWS bills", "To test user patience"],
         "A", "Proves system resilience under real-world failures.", "Chaos engineering injects controlled failures to validate that automated failover, autoscaling, and circuit breakers work as designed.", "Chaos Engineering"),

        ("Static Code Analysis & Linting (SonarQube / ESLint): Where should static analysis tools run in the product development lifecycle?",
         ["Automatically on every Git Pull Request inside the CI/CD pipeline, blocking PRs with security vulnerabilities, bad code smells, or low test coverage", "Only once a year during annual tax audits", "Manually in the browser console", "On customer devices after download"],
         "A", "Automated safety gate on every PR.", "Automated static analysis catches security flaws, code smells, and regression vulnerabilities before code ever merges into main branches.", "DevOps Quality"),

        ("Single Sign-On (SSO) with SAML / OIDC: Why is SAML 2.0 or OIDC enterprise SSO mandatory for selling software to large corporate enterprises?",
         ["It allows enterprise IT administrators to centrally manage, enforce MFA on, and immediately de-provision employee access through their corporate Identity Provider (Okta, Azure AD)", "It makes the website load in 1 millisecond", "It eliminates the need for software licenses", "It automatically writes customer support tickets"],
         "A", "Centralized enterprise access control.", "Enterprise IT demands centralized access management so when an employee is terminated, their access to all SaaS vendors is revoked instantly in one click.", "Enterprise SSO"),

        ("Role-Based Access Control (RBAC) vs Attribute-Based Access Control (ABAC): When does an enterprise product require ABAC instead of standard RBAC?",
         ["When permissions depend on dynamic contextual conditions (e.g. user location, time of day, classification level of document) rather than static job roles", "When the company has fewer than 5 employees", "When using a NoSQL database", "When the application runs offline"],
         "A", "Dynamic fine-grained context.", "While RBAC grants permissions based on static roles (Admin, Editor), ABAC evaluates fine-grained dynamic attributes (e.g. IP range, shift hours, clearance).", "Access Control"),

        ("Audit Logging & Compliance: What information MUST an enterprise audit log capture for compliance under SOC2 and HIPAA?",
         ["Who performed the action (User ID), What was changed, When it occurred (Timestamp), and Where it originated (IP address & resource ID)", "The user's favorite color and music playlist", "The developer's salary", "The company's stock price"],
         "A", "Immutable who, what, when, and where.", "Compliance frameworks require tamper-proof audit trails recording user identity, timestamps, IP origins, and exact resource state changes.", "Audit & Compliance"),

        ("Cloud Cost Management (FinOps): What is the primary role of FinOps in a cloud-first product company?",
         ["Fostering financial accountability across engineering teams to monitor, optimize, and eliminate wasted cloud infrastructure spend (idle VMs, unattached EBS disks, unindexed queries)", "Canceling all software subscriptions", "Forcing engineers to work on local laptops without cloud", "Selling servers on eBay"],
         "A", "Cloud cost optimization and accountability.", "FinOps provides visibility and governance into cloud bills, rightsizing resources, utilizing reserved instances, and pruning orphaned assets.", "FinOps & Cloud Costs"),

        ("AWS Reserved Instances vs On-Demand: How do Reserved Instances (or Savings Plans) save cloud infrastructure costs?",
         ["Committing to a 1-year or 3-year term of consistent compute usage in exchange for up to a 60-70% discount compared to pay-as-you-go On-Demand rates", "They make electricity free", "They run on older deprecated servers", "They only allow server usage between 9 AM and 5 PM"],
         "A", "Term commitment discounts.", "By committing to a baseline compute footprint for 1-3 years, companies save up to 72% over volatile pay-as-you-go pricing.", "Cloud Economics"),

        ("Disaster Recovery RTO vs RPO: If an enterprise product promises an RPO of 15 minutes, what does that dictate for the database engineering team?",
         ["Database backups or transaction log snapshots must be archived at least every 15 minutes so no more than 15 minutes of customer data can ever be lost in a disaster", "The system must recover in 15 minutes", "Employees must arrive at the office in 15 minutes", "Servers must reboot every 15 minutes"],
         "A", "Maximum 15 minutes of lost transactions.", "RPO (Recovery Point Objective) measures allowable data loss in time. An RPO of 15 minutes requires continuous replication or 15-minute snapshot intervals.", "Disaster Recovery"),

        ("SLA Calculation: If an enterprise SaaS contract specifies a 99.9% ('Three Nines') uptime SLA with financial credits for breaches, what is the maximum allowable downtime per month?",
         ["Approximately 43.8 minutes of downtime per month", "24 hours per month", "5 days per month", "Zero seconds"],
         "A", "99.9% = ~43.8 minutes/month.", "Three nines allows a maximum of 43.8 minutes of unplanned downtime per month before violating customer contractual commitments.", "SLAs & Uptime"),

        ("APM (Application Performance Monitoring): What primary insight does an APM tool (e.g. Datadog, New Relic) provide over basic CPU/RAM graphs?",
         ["Distributed code-level transaction traces showing exact execution times inside specific functions, database queries, and third-party API calls", "Checking employee keyboard activity", "Scanning for spelling mistakes in code comments", "Counting daily website pageviews"],
         "A", "Code-level and query-level latency breakdown.", "APM tracks requests through software code, identifying whether a 3-second delay was caused by a slow database query, Redis wait, or slow Python function.", "Observability APM"),

        ("Log Aggregation (ELK / Grafana Loki): Why must multi-server cloud environments forward logs to a centralized aggregation platform rather than storing logs on local disk?",
         ["Because cloud servers are ephemeral and can terminate at any moment, destroying local logs, and centralized search allows cross-server debugging in one dashboard", "Because local disks cannot store text files", "Because local logs violate international copyright law", "Because centralized logs are free"],
         "A", "Ephemeral server lifecycles destroy local logs.", "Auto-scaling groups terminate instances continuously. Centralized log shippers (Loki, Elasticsearch) preserve logs permanently for debugging.", "Log Aggregation"),

        ("Vulnerability Scanning (SAST vs DAST): What is the difference between Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST)?",
         ["SAST inspects source code from the inside without running the app; DAST attacks the running application from the outside to find vulnerabilities like an external hacker", "SAST is for mobile; DAST is for desktops", "SAST runs on hardware; DAST runs on paper", "There is no difference"],
         "A", "Inside source code analysis vs outside runtime attack testing.", "SAST analyzes code for flaws (hardcoded credentials, unsafe libraries); DAST tests live HTTP endpoints against real injection attacks.", "Security Testing"),

        ("Multi-Cloud Strategy Trade-off: What is the primary downside of building an application to be completely cloud-agnostic across AWS, Azure, and Google Cloud simultaneously?",
         ["Massive engineering complexity and lowest-common-denominator architecture that prevents teams from leveraging high-value proprietary services (e.g. AWS Aurora, BigQuery)", "Cloud providers refuse to sell servers to multi-cloud companies", "Multi-cloud systems cannot connect to the internet", "Multi-cloud only works on Windows"],
         "A", "Lowest-common-denominator complexity.", "Abstracting cloud-specific features forces teams to rebuild standard services (queues, IAM) manually, creating enormous architectural overhead.", "Multi-Cloud Strategy"),

        ("Zero-Trust Architecture: What is the core guiding principle of Zero-Trust Network Architecture?",
         ["'Never trust, always verify': every request, user, and service-to-service communication must be authenticated and authorized, even inside the internal corporate network perimeter", "Users are not allowed to use computers", "All databases must be deleted after 5 PM", "Only company executives are allowed internet access"],
         "A", "Never trust, always verify.", "Zero trust assumes attackers already breach the perimeter. Every network hop, API call, and microservice requires explicit authentication and least-privilege authorization.", "Zero-Trust Security"),

        ("Container Image Vulnerability Scanning: Why should container registries (e.g. AWS ECR, Docker Hub) run automated CVE vulnerability scans on Docker images?",
         ["To detect outdated base operating system packages and libraries with known security exploits (CVEs) before images are deployed to production clusters", "To compress image file sizes", "To count lines of code", "To convert containers into virtual machines"],
         "A", "Blocks vulnerable CVE packages before deployment.", "Container images often inherit outdated Debian/Ubuntu packages containing known vulnerabilities. Automated scanning blocks risky deployments.", "Container Security"),

        ("Infrastructure Drifting: What is 'Configuration Drift' in cloud environments?",
         ["When cloud infrastructure changes over time due to manual ad-hoc tweaks in the web console, causing production to diverge from version-controlled Terraform code", "When servers physically move inside a data center", "When cloud bills increase each month", "When developers forget their passwords"],
         "A", "Manual console changes diverge from code.", "Configuration drift occurs when engineers make manual emergency edits in cloud consoles without updating Terraform, leading to irreproducible environments.", "IaC & Governance"),

        ("Serverless vs Container Orchestration: In what product scenario should engineering choose Docker/Kubernetes over AWS Lambda Serverless?",
         ["Long-running, computationally heavy tasks (e.g. video transcoding, machine learning inference) or predictable high-throughput 24/7 web traffic", "A simple webhook receiver that runs once per day", "A basic portfolio website", "An app with 1 user"],
         "A", "Long-running compute and predictable sustained scale.", "Serverless functions have execution time limits (15 minutes on Lambda) and become expensive under steady high load compared to container clusters.", "Architecture Selection"),

        ("Progressive Web Apps (PWA): What core capabilities do Progressive Web Apps provide over traditional web applications?",
         ["Offline functionality via Service Workers, background data synchronization, push notifications, and home screen installability on mobile devices", "Direct access to modify the device's kernel", "Guaranteed 100% discount on cloud hosting", "Free app store distribution without web servers"],
         "A", "Offline caching and mobile installability.", "PWAs use browser Service Workers to cache resources for offline access and send native push notifications without app store approval friction.", "Web Stacks"),

        ("Cross-Platform Mobile (React Native / Flutter vs Native Swift/Kotlin): When is cross-platform React Native or Flutter preferred for early-stage startup MVPs?",
         ["Building a single codebase that deploys simultaneously to iOS and Android, cutting initial engineering headcount and feature development time in half", "When building 3D gaming engines with microsecond graphics demands", "When building operating system device drivers", "When the company has unlimited engineering budget"],
         "A", "Single codebase for iOS and Android velocity.", "Cross-platform frameworks share 80-90% of code between iOS and Android, allowing small teams to ship features to both app stores simultaneously.", "Mobile Stacks"),

        ("Mobile Deep Linking (Universal Links / App Links): What is the business value of implementing Universal Links (iOS) and App Links (Android)?",
         ["Allowing marketing emails and social ads to open specific in-app product screens directly if the app is installed, falling back to the web store if not", "Making mobile apps load 10x faster", "Bypassing app store security reviews", "Eliminating mobile cellular data charges"],
         "A", "Frictionless conversion from web to native screens.", "Deep linking routes users directly to target in-app conversion funnels (checkout, promos), eliminating dropped conversions from generic app launches.", "Mobile Product Growth"),

        ("A/B Testing Architecture: How does client-side A/B testing (e.g. visual DOM flickering tools) compare to server-side feature flagging?",
         ["Server-side experimentation eliminates 'flicker' (CLS), prevents exposing unreleased feature logic in client code, and enables testing backend pricing and algorithms", "Client-side testing is 100x more secure", "Server-side testing cannot show different colors", "There is no difference"],
         "A", "Server-side prevents flickering and secures test logic.", "Client-side A/B testing alters DOM elements after initial render, causing visual layout shifts (flicker). Server-side flags render correct variants natively.", "Experimentation Architecture"),

        ("API Rate Limiting by Plan: How should an enterprise SaaS platform enforce API limits when a Free user upgrades to an Enterprise plan?",
         ["Store the user's active tier in an in-memory cache (Redis) with dynamic token bucket allowances, updating the allowance instantly upon subscription webhook receipt", "Hardcode the user's IP address into server files", "Require the user to reinstall their app", "Reboot the cloud infrastructure"],
         "A", "Dynamic Redis token bucket allowances.", "Decoupling tier definitions into Redis allows instant rate limit adjustments upon receiving payment webhooks without restarting services.", "API Tiering"),

        ("Database Connection Pooling (RDS Proxy): Why do applications deployed on AWS Lambda use AWS RDS Proxy when connecting to Aurora PostgreSQL?",
         ["It maintains an external warm connection pool that shares and reuses database connections across thousands of fleeting Lambda invocations, preventing connection exhaustion", "It translates PostgreSQL into MongoDB", "It makes database queries free of charge", "It formats tables in HTML"],
         "A", "Reuses connections across fleeting serverless runs.", "Lambda instances spin up and die rapidly. RDS Proxy pools database connections externally so Aurora never crashes from connection storms.", "Serverless Infrastructure"),

        ("Blue-Green vs Canary Deployments: In what scenario is a Canary deployment safer than a Blue-Green deployment?",
         ["When releasing high-risk database or core algorithmic changes where bugs could corrupt data across 100% of users simultaneously if switched all at once", "When the engineering team wants to take the day off", "When the website has zero users", "When the application is built in PHP"],
         "A", "Minimizes blast radius of latent critical bugs.", "While Blue-Green exposes 100% of traffic to the new version instantly, Canary routes only 1-2% of users initially, containing potential damage.", "Deployment Strategies"),

        ("Continuous Deployment (CD) vs Continuous Delivery: What is the defining difference between Continuous Delivery and Continuous Deployment?",
         ["Continuous Delivery automatically prepares tested release artifacts but requires manual human approval to deploy to production; Continuous Deployment deploys every passing commit to production automatically", "Continuous Delivery is for mobile; Continuous Deployment is for web", "Continuous Delivery requires no tests", "Continuous Deployment is illegal in enterprise software"],
         "A", "Manual approval gate vs 100% automated release.", "Continuous Delivery keeps software in a perpetually deployable state awaiting human sign-off; Continuous Deployment ships straight to production on green tests.", "DevOps Pipelines"),

        ("Database Migration Drift: What risk occurs if an engineer manually runs an `ALTER TABLE` query directly in production without writing a migration script in Git?",
         ["The staging environment and automated test pipelines drift out of sync with production, causing subsequent automated CI/CD deployments to crash unexpectedly", "The database automatically turns off", "The cloud provider cancels the account", "The query runs 10x faster"],
         "A", "Divergence crashes subsequent automated deployments.", "Unversioned manual database tweaks create hidden schema divergence, causing subsequent automated migrations to fail or drop columns unexpectedly.", "Database Governance"),

        ("Distributed Tracing (OpenTelemetry): What is the purpose of passing a `trace_id` header (e.g. `traceparent`) across microservice HTTP requests?",
         ["To stitch together a unified end-to-end visualization showing the latency of every internal microservice, database query, and queue message involved in that user's single request", "To encrypt user passwords", "To bypass paying API fees", "To track user physical GPS location"],
         "A", "Correlates cross-service hops for single user actions.", "OpenTelemetry trace IDs propagate across distributed network hops, enabling unified latency waterfalls in monitoring tools (Jaeger, Datadog).", "Distributed Tracing"),

        ("Log PII Masking: Why must logging pipelines automatically redact or mask fields like `password`, `ssn`, and `credit_card_number` before saving logs?",
         ["To prevent sensitive customer personal identifiable information (PII) from being leaked to developers or third-party log dashboards, violating GDPR and PCI-DSS compliance", "To save hard drive space", "Because logging tools cannot display numbers", "Because PII makes servers crash"],
         "A", "Prevents regulatory data leakage (GDPR/PCI-DSS).", "Committing unmasked passwords or credit card numbers to application logs exposes sensitive data to internal staff and violates compliance mandates.", "Log Security"),

        ("Container Resource Limits (CPU & Memory Limits): What happens in Kubernetes when a container exceeds its configured `memory.limits`?",
         ["The Linux kernel terminates the container with an OOMKilled (Out of Memory Killed) error and Kubernetes automatically restarts a fresh pod", "The computer hard drive melts", "The container borrows memory from Google", "The container continues running at half speed"],
         "A", "OOMKilled by kernel; pod restarts.", "When a process exceeds its declared memory boundary, the operating system kernel kills the container process instantly to protect node stability.", "Kubernetes Operations"),

        ("Content Negotiation (Accept Header): What is the function of the HTTP `Accept` request header sent by a client?",
         ["It informs the server which MIME types or data formats the client understands and expects in return (e.g. `application/json` vs `text/csv` vs `application/pdf`)", "It accepts the website's terms of service", "It accepts the user's credit card payment", "It accepts cookies automatically"],
         "A", "Client declares expected response format.", "Content negotiation allows an endpoint (like `/reports/monthly`) to return JSON, CSV, or PDF based on what the client declares in its `Accept` header.", "HTTP Standards"),

        ("Disaster Recovery Multi-Region Active-Passive: What is a 'Pilot Light' disaster recovery strategy?",
         ["Maintaining a minimal, non-scaled core infrastructure footprint (database continuous replication + idle minimal servers) in a secondary region, rapidly scaling up compute only if the primary region dies", "Leaving one server turned on at night", "Using emergency batteries during storms", "Testing code only once per quarter"],
         "A", "Warm minimal standby scaled up on disaster.", "Pilot Light keeps critical data synchronized to a standby region with minimal compute, striking an ideal balance between low idle cloud cost and fast RTO.", "Disaster Recovery")
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
            source_reference=f"Tech Stacks Guide (Topic {idx})"
        ))
    return qs

print("Prepared helper for Tech Stacks Guide.")
