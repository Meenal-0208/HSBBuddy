import uuid
from app.models.entities import Question

def get_python_questions(quiz_id):
    qs = []
    # 50 scenarios spanning Python strengths/weaknesses, GIL, Asyncio, ASGI vs WSGI, FastAPI, Django, Flask, PyTorch, Celery, Redis, Pydantic, SQLAlchemy, Type Hints, Virtualenvs, Desktop GUI (PyQt), Fintech data pipelines
    data = [
        ("FastAPI Async Concurrency: Designing an AI platform where user queries trigger 3 parallel external LLM API calls (1.5s latency each). Why mandate FastAPI over synchronous Flask/Django?",
         ["FastAPI natively leverages Python's async/await (ASGI), allowing worker threads to handle other client requests while waiting on external network I/O without blocking threads", "FastAPI compiles Python into machine code, executing CPU-intensive algorithms 100x faster than Flask", "Flask is deprecated and cannot make HTTP calls to third-party endpoints", "Django cannot connect to relational databases when using AI agents"],
         "A", "Asynchronous non-blocking network I/O.", "FastAPI's ASGI event loop pauses coroutines during external network I/O, continuing to serve incoming traffic without thread blocking.", "FastAPI & Async"),

        ("Time-to-Market Portal: Your enterprise PM team needs an internal portal with RBAC, complex relational models, admin dashboards, and database migrations ready in 2 weeks. Which framework delivers fastest?",
         ["Django ('batteries-included' with built-in ORM, auto-generated admin panel, and robust auth)", "Flask (because starting with an empty file is always faster for enterprise auth)", "FastAPI (requires manually building admin panels and assembling third-party auth libraries)", "Writing raw WSGI handlers without any framework"],
         "A", "Batteries-included admin and auth.", "Django provides an immediate battle-tested admin panel, ORM migrations, and user management out of the box, slashing MVP lead times.", "Django Batteries-Included"),

        ("High-Frequency Trading Trade-off: A junior developer argues Python should be used for a high-frequency trading engine calculating portfolio risk in sub-millisecond real-time. As PM, why push back?",
         ["Python is dynamically typed, interpreted, and constrained by the GIL, making it unsuited for sub-millisecond CPU-bound compute compared to C++, Rust, or Go", "Python cannot perform floating-point arithmetic or matrix multiplications", "Python has no libraries for financial math or statistical calculations", "Python requires 100x more database connections than compiled languages"],
         "A", "Interpreted overhead and GIL constraints.", "Python excels at rapid iteration, web APIs, and data science glue, but compiled languages (Rust, C++, Go) are necessary for sub-millisecond CPU execution.", "Python GIL & Trade-offs"),

        ("Pydantic & Type Hints: What primary engineering value does Pydantic provide in modern Python frameworks like FastAPI?",
         ["Automatic data parsing, runtime schema validation, and automatic OpenAPI/Swagger documentation generation from Python type hints", "It converts Python scripts into native iOS Swift binaries", "It replaces relational database engines with text files", "It forces Python to execute synchronously without memory allocation"],
         "A", "Runtime validation and automated Swagger generation.", "Pydantic enforces strict type validation on incoming JSON payloads and generates comprehensive OpenAPI documentation automatically.", "Pydantic & Validation"),

        ("WSGI vs ASGI: When choosing a web server interface for a high-concurrency microservice handling WebSockets, Server-Sent Events (SSE), and async endpoints, which standard must you choose?",
         ["ASGI (Asynchronous Server Gateway Interface, e.g. Uvicorn)", "WSGI (Web Server Gateway Interface, e.g. Gunicorn without async workers)", "CGI (Common Gateway Interface from 1993)", "FTP Server Gateway"],
         "A", "ASGI supports asynchronous event protocols.", "WSGI is synchronous and cannot handle WebSockets or async coroutines without blocking worker threads. ASGI was created specifically to enable async/await.", "WSGI vs ASGI"),

        ("Background Job Offloading: A Python API endpoint generates a heavy 50-page PDF report. If executed synchronously inside the HTTP handler, the browser hangs for 25 seconds. What is the standard Python pattern to solve this?",
         ["Return an immediate HTTP 202 Accepted response with a task ID, and offload PDF generation to Celery workers using Redis as the message broker", "Tell users to keep the browser tab open and wait without clicking anything", "Execute the generation in an infinite while loop on the main server thread", "Delete all PDF reporting features from the product"],
         "A", "Offload long compute to Celery background workers.", "Long-running tasks must be decoupled from the synchronous HTTP request-response cycle using background worker queues (Celery/RQ).", "Celery & Background Tasks"),

        ("Global Interpreter Lock (GIL): True or False: Python's GIL prevents multi-threaded Python programs from executing CPU-bound bytecode in true parallel across multiple CPU cores on a single interpreter process.",
         ["True", "False"],
         "A", "GIL permits only one native thread to run bytecode at once.", "In CPython, the GIL allows only one thread to execute Python bytecode at a time, requiring multiprocessing rather than multithreading to use all CPU cores.", "Global Interpreter Lock"),

        ("AI/ML Ecosystem Dominance: Why has Python emerged as the undisputed standard language for Machine Learning and Generative AI (PyTorch, TensorFlow, LangChain)?",
         ["Python offers high developer velocity and intuitive syntax while wrapping high-performance C/C++ and CUDA numerical compute libraries under the hood", "Python is the only language capable of communicating with GPUs", "Python code compiles into faster machine assembly than C++", "All other programming languages were deprecated by AI researchers"],
         "A", "High developer velocity wrapping C/CUDA compute.", "Python acts as the ideal high-level 'glue' language, giving researchers clean, expressive syntax while underlying tensor calculations run on optimized C and CUDA kernels.", "Python in AI/ML"),

        ("Virtual Environments & Isolation: Why should a production Python application always use virtual environments (e.g. venv, Poetry) rather than installing packages into global system Python?",
         ["To prevent dependency version conflicts between different projects and avoid corrupting the host operating system's internal Python packages", "Virtual environments make Python run in RAM without hard disk storage", "Global Python packages cannot connect to cloud databases", "Virtual environments are required to connect to the internet"],
         "A", "Isolates project dependencies and prevents collisions.", "Virtual environments guarantee deterministic, reproducible environments and prevent conflicts between package versions required by different services.", "Dependency Management"),

        ("Micro-frameworks vs Full-Stack: When is a micro-framework like Flask or FastAPI preferred over full-stack Django?",
         ["Building lightweight microservices focused purely on single API responsibilities with custom non-relational database layers or serverless cold starts", "When building an enterprise portal requiring built-in admin panels and relational auth out of the box", "When the team wants a built-in ORM migration engine", "When building desktop software for Windows XP"],
         "A", "Minimal footprint for microservices and serverless.", "Micro-frameworks avoid the heavier overhead and opinions of Django when services only need lightweight REST endpoints or custom non-relational databases.", "Micro-frameworks vs Full-Stack"),

        # 40 additional realistic Python questions
        ("Python GIL in I/O Bound Tasks: Does the Global Interpreter Lock (GIL) prevent Python from efficiently handling thousands of concurrent network I/O requests in an async event loop?",
         ["No, because during network I/O waits (e.g. database queries or HTTP calls), the GIL is released, allowing other coroutines or threads to execute freely", "Yes, the GIL blocks all network activity", "The GIL only affects internet downloads", "The GIL automatically deletes database records"],
         "A", "I/O releases the GIL.", "The GIL only constrains CPU-bound execution. During external I/O waits, the interpreter releases the lock, enabling high-concurrency async operations.", "GIL & I/O"),

        ("FastAPI Dependency Injection: How does FastAPI's `Depends()` dependency injection system improve backend code quality?",
         ["It cleanly injects database sessions, authentication credentials, and shared configurations into route functions, enabling modularity and easy unit test mocking", "It automatically downloads packages from the internet", "It converts Python into HTML", "It makes queries run without databases"],
         "A", "Modular, testable architecture.", "FastAPI's dependency injection simplifies shared logic (e.g. user authentication, database session lifecycles) and allows effortless mocking in automated tests.", "FastAPI Architecture"),

        ("SQLAlchemy Session Management: Why must database sessions in SQLAlchemy be handled using context managers (`with SessionLocal() as db:`) or FastAPI `yield` patterns?",
         ["To ensure that database connections are always closed and returned to the connection pool, even if an unhandled exception or error crashes the endpoint", "To make SQL queries run in reverse", "To encrypt user passwords", "To save hard drive space"],
         "A", "Guarantees connections return to pool.", "Failing to close SQLAlchemy sessions creates connection leaks that rapidly starve the database pool and cause production lockouts.", "SQLAlchemy Best Practices"),

        ("Flask Application Context vs Request Context: In Flask, what happens if code attempts to access `request.args` inside a background thread without a request context?",
         ["Flask raises a `RuntimeError: Working outside of request context` because the request object is tied specifically to the active incoming HTTP thread", "The entire server crashes permanently", "The database is deleted", "The operating system reboots"],
         "A", "Thread-local context isolation.", "Flask uses thread-local proxies for `request` and `session`. Accessing them outside an active HTTP request thread requires pushing an explicit context.", "Flask Internals"),

        ("Django ORM Lazy Evaluation: What does it mean that Django ORM querysets are 'lazy'?",
         ["A query like `users = User.objects.filter(active=True)` does not actually execute SQL against the database until the queryset is evaluated (e.g. in a loop or template)", "Django takes 10 seconds to execute any query", "Django developers do less work", "The query runs only when the user is asleep"],
         "A", "Queries only hit DB when data is accessed.", "Lazy evaluation allows developers to chain complex filters and conditions without executing premature, redundant database queries.", "Django ORM"),

        ("Django N+1 Optimization (`select_related` vs `prefetch_related`): When should a developer use `select_related` vs `prefetch_related` in Django ORM?",
         ["Use `select_related` for single-valued relationships (ForeignKey, OneToOne) using SQL JOINs; use `prefetch_related` for multi-valued relationships (ManyToMany, reverse ForeignKey) using separate batch queries", "They are identical and interchangeable", "Use `select_related` only on Mondays", "Use `prefetch_related` for CSS files"],
         "A", "SQL JOIN vs Multi-query batching.", "`select_related` uses SQL JOINs in a single query (ideal for ForeignKeys), while `prefetch_related` executes separate batched queries in Python (ideal for ManyToMany).", "Django Performance"),

        ("Python Packaging & Dependency Lockfiles: Why are lockfiles (e.g. `poetry.lock` or `Pipfile.lock`) mandatory in production CI/CD pipelines instead of loose `requirements.txt`?",
         ["They pin exact recursive sub-dependency versions and cryptographic hashes, preventing unexpected breaking upstream releases from crashing production deployments", "They encrypt Python source code", "They make packages download 100x faster", "They replace the virtual environment"],
         "A", "Deterministic reproducible builds.", "Without lockfiles, a minor sub-dependency release pushed upstream can break production builds even if your direct code never changed.", "Python Packaging"),

        ("Gunicorn Worker Models: When deploying a Flask or Django application on Gunicorn, what is the trade-off of using sync workers vs gevent/async workers?",
         ["Sync workers handle exactly 1 request per worker process at a time (easily exhausted by slow requests); async/gevent workers handle thousands of concurrent I/O requests per process via monkey-patching", "Sync workers run only on mobile devices", "Async workers cannot connect to databases", "Sync workers are 100x faster for video streaming"],
         "A", "Worker concurrency vs I/O blocking.", "Sync workers block an entire process on slow external calls. Async or threaded workers allow high concurrency over network I/O.", "Gunicorn Architecture"),

        ("Celery Task Retries & Idempotency: Why must tasks executed by Celery background workers be strictly idempotent?",
         ["Because in distributed systems, message brokers may re-deliver a task if a worker crashes before sending an acknowledgment ('at-least-once delivery')", "Because non-idempotent tasks cannot run on Linux", "Because Celery deletes failed tasks permanently", "Because Redis only supports idempotency"],
         "A", "Guarantees safety under at-least-once delivery.", "Message brokers guarantee at-least-once delivery. If a task crashes after partial execution, retrying must not cause duplicate charges or state corruption.", "Celery Distributed Systems"),

        ("NumPy Vectorization: Why is vectorized computation in NumPy 50 to 100 times faster than a standard Python `for` loop over a list of numbers?",
         ["NumPy arrays store data in contiguous C-level memory buffers and execute operations via pre-compiled SIMD machine instructions, bypassing Python interpreter overhead", "NumPy deletes empty array elements automatically", "Python loops are intentionally slowed down by the operating system", "NumPy runs directly on the user's monitor"],
         "A", "Contiguous memory and C-level SIMD vectorization.", "Pure Python loops incur heavy dynamic type-checking and boxing on every iteration. NumPy executes SIMD vector operations in raw compiled C.", "Numerical Python"),

        ("Pandas Memory Management: What causes an Out of Memory (OOM) crash when loading a 5GB CSV file into a Pandas DataFrame on a 16GB server?",
         ["Pandas creates substantial memory overhead (often 3-5x the raw file size) due to object pointers, unoptimized data types, and copy-on-write intermediate operations", "The operating system refuses to read CSV files", "Pandas can only read files smaller than 10MB", "CSV files are automatically converted into video"],
         "A", "Memory amplification in Pandas objects.", "Default object datatypes in Pandas consume 3-5x disk size in RAM. Specifying categorical types, downcasting integers, or using Polars prevents OOM crashes.", "Data Engineering"),

        ("Polars vs Pandas: Why is Polars rapidly replacing Pandas in modern high-performance data engineering pipelines?",
         ["Polars is written in Rust, leverages Apache Arrow columnar memory, executes multi-threaded queries in parallel across all CPU cores, and features a lazy query optimizer", "Polars is built directly into Windows", "Pandas has been deprecated by the Python Foundation", "Polars requires no computer memory"],
         "A", "Multi-threaded Rust engine with Arrow memory.", "Unlike single-threaded Pandas, Polars executes queries across all available CPU cores with zero-copy Arrow memory and query optimization.", "Modern Data Stack"),

        ("Python Generators & Memory Efficiency: Why should a data ingestion script processing a 50GB log file use a Python generator (`yield`) rather than reading the entire file into a list?",
         ["Generators stream and process one line at a time in O(1) memory, allowing 50GB files to be processed using only a few megabytes of RAM", "Generators compress files by 90%", "Generators run only on supercomputers", "Lists cannot store text strings"],
         "A", "Streams data with constant O(1) memory.", "Generators produce items on demand without allocating massive lists in memory, enabling giant dataset ETL within minimal RAM envelopes.", "Python Core"),

        ("Python Type Hints (PEP 484 & Mypy): What is the primary purpose of adding type hints in a large Python codebase maintained by 40 developers?",
         ["To enable static type checking (via Mypy/Pyright) in CI pipelines, catching bug regressions and type mismatches before runtime while improving IDE auto-complete", "To force Python to compile into machine assembly", "To speed up Python execution by 500%", "To make code impossible for hackers to read"],
         "A", "Catches bugs before runtime in CI.", "Type annotations provide static verification for large engineering teams, preventing 'NoneType has no attribute' runtime errors before deployment.", "Code Quality"),

        ("Pytest Fixtures: Why are Pytest fixtures preferred over standard unit test setup/teardown classes?",
         ["They provide modular, reusable, and dependency-injected test setups (e.g. spinning up a test database container, rolling back transactions after each test) with precise scope control", "Pytest runs tests without using CPU", "Fixtures are required by Python syntax", "Fixtures make code run 10x faster"],
         "A", "Modular, scoped test dependency injection.", "Pytest fixtures can be scoped to function, module, or session, enabling clean test databases and deterministic mocking across test suites.", "Testing Best Practices"),

        ("Python Desktop Apps (PyQt / PySide vs Electron): When is PyQt/PySide preferred over Electron for desktop applications?",
         ["When the desktop app requires high-performance native OS hardware access, low memory consumption (without bundling an entire Chromium browser), or complex real-time plotting", "When building websites for smartphones", "When the team only knows HTML and CSS", "When the app has no user interface"],
         "A", "Native C++ Qt performance without Chromium bloat.", "Electron bundles a full Chromium browser consuming 500MB+ of RAM. PyQt binds to native C++ Qt libraries, delivering high performance and lower memory footprint.", "Desktop Python"),

        ("Python Mobile Development (Kivy / BeeWare): What is the industry consensus on using Python for consumer-facing native mobile apps (iOS & Android)?",
         ["Python is rarely used for consumer mobile apps due to large binary bundle sizes, lack of native platform UI look-and-feel, and inferior performance compared to Swift, Kotlin, or React Native", "Python is the primary language used for 90% of iOS apps", "Apple bans all apps written in Python", "Python mobile apps are completely free of bugs"],
         "A", "Not recommended for polished consumer mobile.", "While frameworks like Kivy exist, Python's runtime overhead and non-native UI widgets make Swift, Kotlin, Flutter, or React Native far superior for mobile.", "Mobile Strategy"),

        ("Asyncio Event Loop Blocking Anti-Pattern: What catastrophic performance bug occurs when a developer writes `time.sleep(5)` or synchronous `requests.get()` inside an `async def` FastAPI route?",
         ["It completely freezes the entire single-threaded async event loop for 5 seconds, blocking ALL other concurrent user requests across the whole server from processing", "The database automatically deletes records", "The server runs 5 times faster", "The user's computer reboots"],
         "A", "Synchronous blocking stalls the entire event loop.", "In async Python, blocking calls (`time.sleep`, synchronous DB drivers) freeze the single event loop thread, stalling all concurrent traffic. Use `asyncio.sleep` or thread offloading.", "Async Anti-Patterns"),

        ("Asyncio `run_in_executor`: How should a developer safely execute a heavy CPU-bound function (e.g. image resizing) inside an async FastAPI endpoint?",
         ["Offload the function to a thread pool or process pool using `asyncio.to_thread()` or `loop.run_in_executor()`, preventing the main event loop from freezing", "Execute it directly in the async route", "Put it inside an infinite while loop", "Delete the image resizing feature"],
         "A", "Offload blocking compute to thread/process pools.", "`asyncio.to_thread()` moves blocking or CPU-heavy work to worker threads, keeping the primary async event loop responsive to incoming traffic.", "Async Concurrency"),

        ("Uvicorn vs Gunicorn Deployment Pattern: What is the standard production deployment pattern pairing Gunicorn and Uvicorn for Python ASGI applications?",
         ["Run Gunicorn as the master process manager to handle worker process lifecycles, graceful restarts, and CPU core utilization, running `UvicornWorker` inside each process", "Run Uvicorn inside a web browser", "Run Gunicorn on Windows and Uvicorn on Mac", "They cannot be used together"],
         "A", "Gunicorn master process + Uvicorn ASGI workers.", "Gunicorn manages process forking, crash restarts, and worker scaling across CPU cores, while Uvicorn handles async ASGI HTTP parsing within each worker.", "Production Deployment"),

        ("Python Metaclasses: When would a senior Python architect implement a metaclass?",
         ["When creating advanced frameworks, ORMs, or validation libraries that need to intercept, inspect, and modify class creation logic at import time", "To make web pages load faster", "To calculate financial balances", "To design mobile app icons"],
         "A", "Customizing class creation in frameworks.", "Metaclasses act as 'classes of classes', used in frameworks like Django ORM to automatically inspect fields and bind database mappings dynamically.", "Advanced Python"),

        ("Python Decorators: What architectural purpose do decorators (`@authenticate`, `@cache_response`) serve in web APIs?",
         ["They implement the Decorator design pattern, wrapping functions with cross-cutting concerns (authentication, caching, logging, rate limiting) without cluttering business logic", "They change the font color of Python code", "They compile code into machine assembly", "They encrypt the hard drive"],
         "A", "Clean cross-cutting concern abstraction.", "Decorators cleanly separate cross-cutting infrastructure logic (auth checks, telemetry, cache headers) from core domain business code.", "Python Design Patterns"),

        ("Python Garbage Collection (Reference Counting & Generational GC): How does CPython manage memory and clean up abandoned objects?",
         ["Primarily through immediate Reference Counting, supplemented by a Generational Garbage Collector that detects and reclaims circular reference cycles", "By deleting all memory every 5 minutes", "By asking the user to close browser tabs", "By running on external cloud servers"],
         "A", "Reference counting + generational cycle detection.", "CPython deallocates objects instantly when their reference count drops to zero, and periodically scans generational heaps for circular pointer loops.", "Python Internals"),

        ("Python Context Managers (`__enter__` and `__exit__`): What resource management guarantee does the `with` statement provide?",
         ["It guarantees that cleanup logic (closing file descriptors, releasing locks, returning DB connections) is executed, even if exceptions are raised inside the block", "It speeds up Python execution by 50%", "It prevents syntax errors", "It connects to the internet"],
         "A", "Deterministic cleanup even during exceptions.", "Context managers ensure deterministic resource cleanup, preventing memory leaks, socket exhaustion, and unreleased thread locks.", "Python Core"),

        ("FastAPI BackgroundTasks: When should a developer use FastAPI's built-in `BackgroundTasks` instead of an external Celery worker queue?",
         ["For simple, lightweight fire-and-forget operations (e.g. sending a single welcome email, logging an audit event) that don't warrant the operational complexity of Redis/RabbitMQ", "For processing 50-gigabyte video transcoding jobs", "For executing distributed multi-day batch calculations", "For tasks that must survive a server restart"],
         "A", "Lightweight tasks within the same process.", "FastAPI's `BackgroundTasks` run within the active server process after returning the HTTP response, ideal for simple email triggers without infrastructure overhead.", "FastAPI Utilities"),

        ("Celery Result Backend Trade-off: What happens if an engineering team configures Celery to store task results in a relational database without setting task expiration (`result_expires`)?",
         ["The task result table accumulates millions of rows of JSON return values, eventually exhausting database disk space and slowing down indexing", "The database automatically upgrades to SSD storage", "Celery stops sending emails", "The server switches to Python 2"],
         "A", "Unbounded result table bloat.", "Storing return values for every background task without TTL expiration inflates databases. For fire-and-forget tasks, disabling result storage is recommended.", "Celery Operations"),

        ("Cython & C Extensions: How do data libraries like Pandas and Scikit-Learn achieve near-C execution speeds while exposing Python interfaces?",
         ["They write critical computational loops in C, C++, or Cython, compiling them into shared C extension binaries that Python calls with zero interpreter overhead", "They compile Python directly to HTML", "They run on quantum supercomputers", "They delete all unused Python variables"],
         "A", "Compiled C extensions bound to Python.", "Cython translates Python syntax into optimized C code, compiling to native machine instructions for compute-heavy loops while retaining Python API accessibility.", "Python Performance"),

        ("Python GIL Removal (PEP 703 / Free-threaded Python): What is the goal of the historic Python 3.13 free-threaded build (PEP 703)?",
         ["To make the Global Interpreter Lock optional, allowing multi-threaded Python programs to execute CPU-bound code in true parallel across all CPU cores", "To rewrite Python in Java", "To delete the Python standard library", "To make Python run only in browsers"],
         "A", "True parallel multi-threading without the GIL.", "PEP 703 removes the global lock in favor of fine-grained mimalloc locks, enabling multi-threaded CPU-bound parallelism on multi-core servers.", "Python Evolution"),

        ("Python `dataclasses` vs Pydantic: In what scenario are Python standard library `@dataclass` objects preferred over Pydantic models?",
         ["Internal domain modeling and business logic where data types are already trusted and the runtime overhead of Pydantic string parsing and validation is unnecessary", "Parsing untrusted JSON from external public HTTP requests", "Generating OpenAPI specifications", "Validating environment variables"],
         "A", "Lightweight internal modeling with zero validation overhead.", "Dataclasses provide clean boilerplate reduction for internal objects without the parsing and validation performance tax of Pydantic.", "Python Architecture"),

        ("Python Mocking in Automated Tests (`unittest.mock`): Why is mocking external third-party API clients mandatory in CI test suites?",
         ["To ensure tests run in milliseconds, don't trigger real credit card charges, don't fail due to external internet outages, and don't leak production API credentials", "To make test files look longer", "Because third-party APIs are illegal in tests", "To test user monitor resolution"],
         "A", "Deterministic, fast, and isolated testing.", "Mocking external network calls guarantees that unit tests remain fast, reproducible, free of third-party rate limits, and safe from unintended side effects.", "Automated Testing"),

        ("Python Monkey Patching: What is 'Monkey Patching' in Python, and why is it dangerous in production codebases?",
         ["Dynamically modifying modules, classes, or methods at runtime, which can cause subtle, unpredictable bugs and break debugging across third-party libraries", "A tool for training monkeys to write code", "A method for encrypting Python files", "A feature that makes code run 10x faster"],
         "A", "Dynamic runtime code alteration.", "Monkey patching overrides methods at runtime. While useful in test mocks, using it in production leads to hidden side-effects and nightmare debugging sessions.", "Python Anti-Patterns"),

        ("FastAPI CORS Middleware: Where in the FastAPI middleware stack should `CORSMiddleware` be added?",
         ["It should be added as the outermost middleware so CORS response headers are attached to all responses, including errors and unhandled exceptions", "Inside the database session", "At the very bottom of the file after the database", "Inside each individual route function"],
         "A", "Outermost middleware to catch all responses.", "Adding CORS middleware outermost ensures that even 500 server crashes return proper `Access-Control-Allow-Origin` headers, allowing browsers to read error details.", "FastAPI Middleware"),

        ("Python Memory Profiling (memory_profiler / tracemalloc): When diagnosing a production memory leak in a long-running Python daemon, which built-in library pinpoints the allocating lines?",
         ["`tracemalloc` (tracks memory allocations back to exact file and line numbers)", "`time` library", "`math` library", "`random` library"],
         "A", "Tracks allocation traces back to source lines.", "Tracemalloc snapshots Python heap memory, allowing developers to compare snapshots and identify the exact line of code accumulating uncollected objects.", "Profiling & Debugging"),

        ("FastAPI Response Models (`response_model`): What security benefit does declaring `response_model=UserPublic` provide on an endpoint that queries a database `User` object?",
         ["It automatically filters out sensitive database fields (such as `password_hash`, `ssn`, or internal flags), guaranteeing they are never serialized or leaked to the client", "It encrypts the entire HTTP body with AES", "It speeds up database queries by 10x", "It checks if the user is using Google Chrome"],
         "A", "Prevents accidental credential leakage.", "Response models act as an automated output firewall, serializing only explicitly declared public fields and stripping internal database attributes like password hashes.", "API Security"),

        ("SQLAlchemy `lazy='dynamic'`: Why is `lazy='dynamic'` on SQLAlchemy relationships being deprecated in favor of explicit queries?",
         ["Because it generates implicit database queries during object access that hide query costs, break async programming models, and cause unexpected N+1 performance bottlenecks", "Because dynamic typing is illegal in SQL", "Because it uses too much color on screens", "Because databases cannot store dynamic data"],
         "A", "Prevents hidden implicit queries in async code.", "Implicit lazy loading breaks under modern async event loops because accessing an attribute cannot perform non-blocking async `await` transparently.", "SQLAlchemy Architecture"),

        ("Python Logging Best Practice: Why should production Python services use structured JSON logging (e.g. `structlog` or `python-json-logger`) instead of plain text strings?",
         ["Structured JSON logs allow log aggregation platforms (Datadog, Loki) to automatically index, filter, and alert on specific metadata fields (e.g. `user_id`, `duration_ms`)", "JSON logs make files 100x smaller", "Plain text logs cannot be read by humans", "JSON logs prevent server crashes"],
         "A", "Machine-parseable telemetry indexing.", "Structured JSON logs format timestamp, level, user ID, and stack traces into searchable key-value fields, enabling instant log queries during incidents.", "Observability Logging"),

        ("Python Dependency Injection Containers: In enterprise Python applications, why use a dependency injection container (e.g. `dependency-injector`)?",
         ["To decouple concrete infrastructure implementations (e.g. Postgres vs SQLite, Sendgrid vs MockEmailer) from core domain business services via interfaces", "To make Python compile faster", "To replace the need for unit testing", "To format Python code automatically"],
         "A", "Decouples domain from infrastructure implementations.", "DI containers wire application dependencies at startup, allowing painless swapping between mock and production services for testing and staging.", "Enterprise Python Architecture"),

        ("Python Event Loop Concurrency vs OS Threads: How does Python's `asyncio` cooperative multitasking differ from OS multi-threading?",
         ["Asyncio uses a single thread that switches between coroutines cooperatively when an explicit `await` occurs; OS threads are preemptively switched by the operating system kernel", "Asyncio requires multiple physical computers", "OS threads cannot connect to the internet", "Asyncio is written in Java"],
         "A", "Cooperative coroutines vs preemptive kernel switching.", "Asyncio switches tasks only when coroutines yield control at `await` boundaries, drastically reducing context switching overhead and memory usage.", "Asyncio Internals"),

        ("Python CFFI vs ctypes: Why is CFFI (C Foreign Function Interface) preferred over `ctypes` when binding high-performance C libraries to Python?",
         ["CFFI compiles C declarations at build-time using the native C compiler, delivering significantly faster call overhead, better safety, and PyPy compatibility", "CFFI works without C code", "ctypes is deprecated in all versions of Python", "CFFI makes Python code run in browsers"],
         "A", "Compile-time validation and low call overhead.", "CFFI validates declarations against C header files at compile time, eliminating the runtime type-mismatch risks and call overhead of `ctypes`.", "Python Interop"),

        ("Django Signals Anti-Pattern: Why do senior Django architects advise against heavy use of Django Signals (`post_save`, `pre_delete`) for complex business logic?",
         ["They create hidden implicit side effects that execute out-of-order, make code difficult to trace and debug, and can trigger accidental recursion or redundant queries", "Django signals can only run on Windows", "Signals prevent databases from saving records", "Signals make websites run 10x slower"],
         "A", "Hidden implicit side effects and debugging nightmares.", "Signals obscure business workflows because saving a model silently triggers side-effects across the codebase. Explicit service layer methods are preferred.", "Django Anti-Patterns")
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
            source_reference=f"Tech Stacks Python (Topic {idx})"
        ))
    return qs

print("Prepared helper for Python.")
