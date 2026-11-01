import uuid
from app.models.entities import Question

def get_day3_questions(quiz_id):
    qs = []
    # 50 scenarios spanning SQL vs NoSQL, ACID, Normalization (1NF, 2NF, 3NF), Indexes (B-Tree, Hash), Full Table Scans, OLTP vs OLAP, Star Schemas, Sharding, Read Replicas, Transactions, Isolation Levels, Deadlocks, Foreign Keys, Stored Procedures, ORMs
    data = [
        ("OLTP vs OLAP Bottleneck: Every Monday at 9 AM, leadership runs heavy analytics retention dashboards, crashing live checkout transactions with 504 timeouts. What is the root fix?",
         ["The analytics query is locking live production OLTP tables; offload heavy BI reporting to an OLAP Data Warehouse (Snowflake/BigQuery) via ETL pipelines", "Delete the primary key", "Disable HTTPS", "Convert dashboard to mobile app"],
         "A", "Separate live transactions from heavy analytics.", "Transactional databases (OLTP) are optimized for single-row reads/writes. Analytical queries (OLAP) lock tables and must run on dedicated warehouses.", "OLTP vs OLAP"),

        ("Address Inconsistency: A customer updates their shipping address, but warehouse staff still sees the old address on an existing unshipped order. What database design flaw caused this?",
         ["A denormalized schema where customer address was duplicated across tables without a single source of truth or clear order-snapshot design", "Using PostgreSQL instead of MongoDB", "Too many foreign keys", "Server in-memory cache was full"],
         "A", "Update anomaly from denormalization.", "Without normalization or explicit point-in-time snapshot design, duplicated address strings cause update anomalies across orders.", "Normalization & Schema"),

        ("Fintech Database Choice: When building a core banking ledger requiring double-entry balance transfers and strict zero-loss audit trails, why require a Relational (SQL) database?",
         ["Strict ACID transactional compliance guarantees atomicity across balance updates and foreign key referential integrity prevents orphaned accounts", "SQL runs without electricity", "NoSQL cannot store numbers", "SQL databases are always completely free"],
         "A", "ACID guarantees prevent corrupted money transfers.", "Relational databases enforce atomic transactions, strict schemas, and referential constraints necessary for financial ledgers.", "SQL vs NoSQL"),

        ("Slow Queries: Search queries on a 10-million row catalog table slowed from 15ms to 3.8s. EXPLAIN ANALYZE shows 'Seq Scan'. What is the fix?",
         ["Add a B-Tree Index on the searched columns so lookups execute in logarithmic time instead of scanning every disk block", "Delete 9 million rows", "Change the port from 5432 to 80", "Convert numbers to strings"],
         "A", "B-Tree indexes avoid full table scans.", "Sequential scans read every page on disk. Indexes allow the database engine to jump straight to matching records via binary tree lookups.", "Indexes & Performance"),

        ("ACID Atomicity: What does 'Atomicity' guarantee during a $100 funds transfer from Account A to Account B?",
         ["Both the debit from Account A and the credit to Account B succeed together, or if an error occurs, the entire transaction rolls back completely", "Transactions execute in sub-nanosecond clock cycles", "Data is encrypted with atomic quantum keys", "Only one user can log in per second"],
         "A", "All-or-nothing execution.", "Atomicity guarantees that all steps in a transaction block complete as a unified atomic unit, or roll back with zero partial state saved.", "ACID Atomicity"),

        ("Document Store Limits: True or False: MongoDB document stores are superior to PostgreSQL for every use case because they have no schema constraints.",
         ["False", "True"],
         "A", "Schemaless often pushes data corruption into app code.", "For highly relational data, missing schema enforcement leads to data corruption, orphan records, and complex joining logic.", "NoSQL Trade-offs"),

        ("Normalization Objective: What is the primary objective of normalizing a database schema up to Third Normal Form (3NF)?",
         ["To eliminate data redundancy, prevent insertion/update/deletion anomalies, and enforce relational integrity", "To view tables in Microsoft Excel", "To compress disk space by exactly 75%", "To allow unauthenticated queries"],
         "A", "Eliminates redundancy and update anomalies.", "Normalization structures tables around single business entities so updates happen in exactly one place without side-effects.", "Database Normalization"),

        ("Horizontal Sharding: When a table reaches 500 million rows and exceeds single-machine storage capacity, how does Horizontal Sharding resolve this?",
         ["Partitions rows across multiple independent physical database server nodes based on a Shard Key (e.g. user_id)", "Deletes historical records older than 7 days", "Combines all columns into a comma-separated string", "Replaces tables with CSV files"],
         "A", "Distributes rows across independent nodes using a shard key.", "Horizontal sharding partitions table rows across distinct database instances, scaling beyond physical hardware limits.", "Database Sharding"),

        ("Read Replicas: Your SaaS application has an 85% Read vs 15% Write traffic pattern. Primary database CPU utilization is reaching 95%. What architectural pattern relieves read pressure?",
         ["Deploy Read Replicas: direct write queries (INSERT/UPDATE/DELETE) to the Primary DB, and route read queries (SELECT) across read replicas via asynchronous replication", "Disable all SELECT queries during business hours", "Ask customers to refresh less frequently", "Store passwords in browser local storage"],
         "A", "Offload SELECT queries to replica pools.", "Read replicas scale read-heavy applications by offloading SELECT queries from the primary master node.", "Read Replicas & CQRS"),

        ("Deadlocks: True or False: A database deadlock occurs when two concurrent transactions each hold a lock on a row that the other transaction needs to proceed, causing both to wait indefinitely.",
         ["True", "False"],
         "A", "Circular wait conditions create deadlocks.", "Deadlocks occur when circular dependencies arise between locks. Database engines detect deadlocks and abort one transaction to break the cycle.", "Deadlocks & Concurrency"),

        # 40 additional realistic Day 3 questions
        ("Foreign Key Constraints: What is the core business protection provided by a Foreign Key constraint between `orders.customer_id` and `customers.id`?",
         ["It prevents orphan records by guaranteeing that an order cannot be inserted with a non-existent customer_id, and blocks deleting customers who have active orders", "It encrypts the customer's credit card", "It automatically sends an email to the customer", "It makes queries 100x faster"],
         "A", "Enforces referential integrity.", "Foreign keys guarantee referential integrity at the engine level, preventing orphaned child records and broken relational joins.", "Referential Integrity"),

        ("Primary Key Selection: Why are auto-incrementing sequential integers (1, 2, 3...) considered a security vulnerability for public URLs (e.g. `/orders/4819`)?",
         ["They allow competitors and attackers to easily scrape data and guess valid order IDs via sequential enumeration, revealing company transaction volume", "Integers take more storage space than UUIDs", "Integers cannot be indexed by SQL databases", "Integers crash web browsers"],
         "A", "Prevents enumeration attacks. Use UUIDs.", "Sequential IDs leak business growth metrics and make enumeration attacks trivial. Using UUIDv4 or UUIDv7 obscures internal volume.", "Primary Keys & Security"),

        ("UUIDv4 vs UUIDv7: Why is UUIDv7 increasingly preferred over random UUIDv4 as a primary key in high-write databases?",
         ["UUIDv7 includes a time-ordered prefix, ensuring sequential B-Tree index insertions that prevent index fragmentation and random disk I/O thrashing", "UUIDv7 is written in Python", "UUIDv7 is 100x shorter than UUIDv4", "UUIDv7 doesn't require hard disk storage"],
         "A", "Time-ordered UUIDs prevent B-Tree fragmentation.", "Random UUIDv4 causes random page splits in B-Tree indexes. Time-ordered UUIDv7 preserves sequential append performance.", "Database Indexing"),

        ("Database Indexes Write Tax: What is the trade-off of adding 15 different indexes to a single SQL table to speed up searches?",
         ["Every write operation (INSERT/UPDATE/DELETE) slows down significantly because the database engine must recalculate and update all 15 index trees on disk", "The table cannot store text anymore", "The database automatically deletes itself", "User passwords become visible"],
         "A", "Indexes speed up reads but slow down writes.", "Indexes are not free: every write must rebalance index B-Trees on disk. Excessive indexes degrade transactional write throughput.", "Index Trade-offs"),

        ("Composite Indexes: When creating a composite index on `(status, created_at)`, why does query column ordering matter ('Leftmost Prefix Rule')?",
         ["The index can only optimize queries filtering by `status` alone or `status AND created_at`, but CANNOT optimize queries filtering ONLY by `created_at`", "Column order determines the font color", "The second column is ignored by the database", "Column order only matters on Windows"],
         "A", "Leftmost prefix rule applies to B-Trees.", "B-Tree composite indexes sort by the first column first. Queries that omit the leading column cannot leverage the index tree.", "Composite Indexes"),

        ("Transaction Isolation Levels: In SQL standards, which transaction isolation level provides complete protection against Dirty Reads, Non-Repeatable Reads, and Phantom Reads?",
         ["Serializable (the highest isolation level, executing transactions as if run sequentially)", "Read Uncommitted", "Read Committed", "Repeatable Read"],
         "A", "Serializable provides full mathematical isolation.", "Serializable is the strictest ACID isolation level, preventing all anomalies by locking or validating ranges, but with higher lock contention.", "Transaction Isolation"),

        ("Dirty Reads: What is a 'Dirty Read' anomaly in concurrent database processing?",
         ["A transaction reads uncommitted data written by another concurrent transaction that is subsequently rolled back and never persisted", "A read operation that returns corrupted binary data", "A query executed with a typo in the table name", "A query that takes longer than 10 seconds"],
         "A", "Reading uncommitted ghost data.", "If Transaction A modifies a balance and Transaction B reads it before Transaction A rolls back, Transaction B acted on data that never existed.", "Transaction Anomalies"),

        ("Optimistic vs Pessimistic Locking: In a flight booking system where seat collision is rare, why is Optimistic Locking with a `version_number` preferred over Pessimistic Locking?",
         ["It doesn't hold open database row locks while users view their screens, checking only at update time if `version == current_version` to prevent blocking other users", "Optimistic locking guarantees 100% discount on flights", "Pessimistic locking is deprecated in SQL", "Optimistic locking runs in browser memory"],
         "A", "Avoids long-lived locks during user hesitation.", "Optimistic locking avoids locking database rows while users deliberate, checking version timestamps only when final checkout updates are committed.", "Concurrency Control"),

        ("Database Connection Pools: What happens when an application's connection pool size is configured too high (e.g. 5,000 connections on an 8-core database server)?",
         ["Severe CPU context switching, RAM exhaustion, and disk I/O thrashing that degrades database throughput far below what 50 connections could process", "The database runs 5,000 times faster", "The database automatically upgrades to 64 cores", "Queries execute with zero latency"],
         "A", "Context switching degrades performance.", "Hardware has limited CPU cores and disk spindles. Excessive connections spend more CPU cycles switching context than executing queries.", "Connection Pool Sizing"),

        ("Time-Series Databases: When monitoring server telemetry or IoT sensor data generating 50,000 data points per second, why choose a Time-Series DB (e.g. TimescaleDB, InfluxDB)?",
         ["Optimized for high-volume append-only timestamped writes, automated time-based data retention policies, and ultra-fast rolling aggregations", "They don't require internet connections", "They replace the operating system", "They can only store text"],
         "A", "Optimized for time-windowed metrics.", "Time-series databases use columnar chunking and automated rollups tailored for continuous timestamped data streams.", "Specialized Databases"),

        ("Graph Databases (Neo4j): For social networks or fraud detection mapping 6 degrees of relationships between users and credit cards, why use a Graph Database?",
         ["Graph databases traverse deep multi-hop relationships via pointer traversals in O(1) time without executing exponential multi-table SQL JOINs", "Graph databases render 3D graphics in the browser", "Graph databases cannot store text", "Graph databases are free of charge"],
         "A", "Index-free adjacency traverses relationships fast.", "Relational multi-table JOINs become computationally prohibitive beyond 3-4 hops. Graph databases follow direct memory pointers.", "Graph Databases"),

        ("Full-Text Search (Elasticsearch): Why do e-commerce products offload product catalog search from PostgreSQL to Elasticsearch?",
         ["Elasticsearch uses Inverted Indexes to provide lightning-fast fuzzy matching, typo tolerance, synonyms, and relevance scoring across millions of documents", "PostgreSQL cannot store product descriptions", "Elasticsearch replaces relational order ledgers", "Elasticsearch runs on client devices"],
         "A", "Inverted indexes enable fuzzy search & relevance scoring.", "SQL `LIKE '%shoes%'` queries force full table scans. Inverted indexes map keywords to document IDs for instant relevance ranking.", "Search Architecture"),

        ("In-Memory Caching (Redis): What is the primary reason Redis achieves sub-millisecond read/write latency?",
         ["It stores data directly in RAM memory rather than reading/writing disk blocks, executing single-threaded non-blocking I/O multiplexing", "It runs on quantum hardware", "It doesn't use networking", "It only allows 5 users at a time"],
         "A", "RAM storage + event loop multiplexing.", "Operating in RAM bypasses mechanical and SSD disk latency, allowing Redis to execute over 100,000 operations per second per core.", "In-Memory Caching"),

        ("Cache Stampede (Thundering Herd): What occurs during a Cache Stampede when a high-traffic cached key (e.g. homepage banner) expires at peak traffic?",
         ["Thousands of concurrent requests all miss the cache simultaneously and hit the primary database at the exact same millisecond, crashing the database", "The cache permanently locks up", "The server loses power", "The user's cookie is deleted"],
         "A", "Simultaneous cache miss crushes DB.", "When a popular key expires, all incoming traffic bypasses the cache and floods the database. Mutex locks or probabilistic early expiration prevent this.", "Caching Strategies"),

        ("Database Read Replicas vs Backups: True or False: Having a real-time asynchronous Read Replica in another availability zone replaces the need for automated daily database backups.",
         ["False", "True"],
         "A", "Replicas replicate human errors instantly.", "If an engineer or bug executes `DROP TABLE users;`, that command replicates to the read replica in milliseconds. True point-in-time backups are mandatory.", "Disaster Recovery"),

        ("Columnar Databases (ClickHouse / BigQuery): Why are Columnar databases dramatically faster than Row-oriented databases for aggregate queries (`SELECT AVG(revenue)...`)?",
         ["They store table data on disk column-by-column, allowing queries to read ONLY the revenue column from disk while skipping all other unneeded columns", "They only store data on Sundays", "They compile SQL into Python", "They cannot run on Linux"],
         "A", "Reads only requested columns from disk.", "Row stores read entire multi-kilobyte rows off disk just to sum one field. Columnar stores read only the target column, achieving massive compression.", "Columnar Stores"),

        ("Star Schema vs Snowflake Schema: In data warehousing, what distinguishes a Star Schema design?",
         ["A central Fact Table containing numeric metrics surrounded by completely denormalized Dimension Tables in a simple 1-join star topology", "Tables are shaped like snowflakes with 50 joins", "Data is stored in circular rings", "Tables have no primary keys"],
         "A", "Denormalized dimensions surround a central fact table.", "Star schemas simplify business intelligence queries and minimize joins by keeping dimension tables flat and denormalized.", "Data Warehousing"),

        ("Soft Deletes vs Hard Deletes: Why do enterprise products implement Soft Deletes (`deleted_at IS NOT NULL`) rather than SQL `DELETE` statements?",
         ["To maintain relational integrity, preserve audit trails for compliance, and enable 1-click user data recovery without restoring database backups", "Because SQL databases cannot delete rows", "Soft deletes make databases run faster", "Hard deletes require hardware reboots"],
         "A", "Auditability and accidental deletion recovery.", "Soft deleting marks records as archived, protecting referential integrity across historical orders while allowing easy restoration.", "Data Retention"),

        ("Database Migration Rollbacks: Why should database migration scripts always define both an `up()` function and a `down()` function?",
         ["To allow automated deployment tools to cleanly rollback schema alterations if a release fails health checks in production", "To make code look longer in git", "To format tables in ascending and descending order", "To convert SQL into JavaScript"],
         "A", "Safe deployment reversibility.", "Reversible migrations ensure that if a release triggers bugs, deployment pipelines can back out schema changes without data loss or manual SQL hotfixes.", "Database Migrations"),

        ("ORM (Object-Relational Mapping) Pros & Cons: What is the main downside of relying completely on an ORM (like Hibernate or SQLAlchemy) for complex reporting queries?",
         ["ORMs can generate wildly inefficient SQL with hidden N+1 queries and bloated joins that developer code obscures, compared to optimized handwritten SQL", "ORMs cannot connect to relational databases", "ORMs can only run in web browsers", "ORMs require on-premise hardware"],
         "A", "Hidden inefficient SQL and N+1 traps.", "While ORMs accelerate routine CRUD velocity, complex reporting requires profiling generated SQL to prevent severe query performance bottlenecks.", "ORM Trade-offs"),

        ("Write-Ahead Logging (WAL): What critical role does the Write-Ahead Log (WAL) play in relational databases like PostgreSQL and MySQL?",
         ["It logs transaction changes sequentially to disk BEFORE writing changes to database data pages, guaranteeing crash recovery and durability", "It records user passwords in plaintext", "It emails developers when queries fail", "It deletes old databases every night"],
         "A", "Guarantees durability (D in ACID).", "Sequential append-only WAL writes are fast and ensure that even if power cuts out before data blocks flush to disk, the state can be fully replayed.", "Database Internals"),

        ("Database Index Selectivity: Why does adding a B-Tree index on a `gender` column (with values only 'M', 'F', 'Other') on a 10-million row table provide almost no performance benefit?",
         ["Low selectivity / low cardinality: when an index value matches 50% of the entire table, scanning the index and doing random heap lookups is slower than a sequential scan", "SQL doesn't support letters in indexes", "Gender cannot be indexed by law", "Indexes only work on numbers"],
         "A", "Low cardinality makes indexes useless.", "Indexes shine on high-cardinality columns (unique IDs, emails). For low-cardinality fields, the engine ignores the index and performs table scans.", "Index Cardinality"),

        ("Database Partitioning (Range Partitioning): When an enterprise table stores 200 million financial audit logs, how does Range Partitioning by `year_month` optimize query performance?",
         ["The query planner performs 'Partition Pruning', reading only the specific monthly table partition matching the date filter and ignoring all other years", "It deletes records from previous months", "It stores old data in browser storage", "It eliminates the need for SQL"],
         "A", "Partition pruning skips unneeded disk blocks.", "Partition pruning skips entire sub-tables that fall outside the query's date filter, saving massive disk I/O.", "Partitioning"),

        ("Database Vacuuming / Table Bloat: In PostgreSQL's MVCC (Multi-Version Concurrency Control) architecture, why is the `VACUUM` process necessary?",
         ["To reclaim dead row tuples left behind by UPDATE and DELETE operations, preventing disk bloat and keeping indexes compact", "To wipe the hard drive clean", "To change the database password", "To encrypt tables with SSL"],
         "A", "Reclaims dead MVCC tuple versions.", "MVCC marks updated/deleted rows as obsolete rather than overwriting in-place. Autovacuum cleans dead rows to prevent unbounded disk growth.", "PostgreSQL MVCC"),

        ("Foreign Key ON DELETE CASCADE: What is the catastrophic risk of applying `ON DELETE CASCADE` between an enterprise `organizations` table and an `orders` table?",
         ["Accidentally deleting one organization record instantly and permanently wipes out all associated historical invoices, payments, and orders across that company", "The database stops accepting new users", "It slows down internet speeds globally", "It converts SQL to XML"],
         "A", "Cascading mass deletion risk.", "Cascade deletes propagate deletions down the foreign key chain, risking unintentional catastrophic data wiping without safety stops.", "Schema Constraints"),

        ("Database Connection Pooling (PgBouncer): Why do applications deployed on Serverless functions (AWS Lambda) require an external pooler like PgBouncer when connecting to PostgreSQL?",
         ["Because thousands of ephemeral serverless function instances each opening individual DB connections will rapidly exhaust PostgreSQL's max connection limit (e.g. 200)", "Because PostgreSQL cannot connect to the cloud", "Because Lambda doesn't support SQL", "Because PgBouncer makes database hosting free"],
         "A", "Protects DB from ephemeral serverless bursts.", "Serverless functions scale to thousands of instances in seconds. Without a centralized connection pooler, the database crashes from connection exhaustion.", "Serverless & Databases"),

        ("Database Views vs Materialized Views: What is the defining difference between a standard SQL View and a Materialized View?",
         ["A standard View runs the underlying query on demand every time; a Materialized View physically caches the query results on disk and must be periodically refreshed", "Standard views can only store numbers", "Materialized views run only in browsers", "Standard views require hardware servers"],
         "A", "Materialized views persist query results on disk.", "Materialized views cache expensive multi-table join and aggregation results on disk for instant reading, trading disk space for speed.", "SQL Views"),

        ("CAP Theorem Trade-off: In the CAP Theorem, when a distributed network partition (P) occurs between two data centers, what choice must a distributed database make?",
         ["Consistency (reject writes to prevent stale reads) vs Availability (accept writes on both sides, risking conflicting and inconsistent data)", "Cost vs Performance", "Speed vs Encryption", "CPU vs RAM"],
         "A", "Choose Consistency (CP) or Availability (AP).", "When a network partition splits nodes, a distributed database must either stop serving writes to stay consistent, or keep serving writes and diverge.", "Distributed Systems CAP"),

        ("Eventual Consistency: In distributed databases like Amazon DynamoDB or Cassandra, what does 'Eventual Consistency' mean for user reads?",
         ["After a write, concurrent reads may return stale data for a few milliseconds until updates replicate across all quorum nodes, eventually converging to identical state", "Data is only saved once per week", "Data is lost permanently during outages", "The database will eventually crash"],
         "A", "Replicas converge after short propagation delay.", "Eventual consistency trades real-time read guarantees for extreme write availability and global scale, reconciling divergence within milliseconds.", "NoSQL Consistency"),

        ("Database Replication Lag Alerting: When an asynchronous Read Replica's replication lag exceeds 60 seconds, what product impact occurs?",
         ["Users who perform an action (e.g. update profile or place an order) and refresh their screen will see stale old data, flooding customer support with bug reports", "The database automatically deletes user accounts", "The server catches fire", "The mobile app uninstalls itself"],
         "A", "Stale user experience and ghost state.", "High replication lag causes read traffic to serve outdated records, creating apparent state rollback bugs for end users.", "Replication Lag"),

        ("Database Shard Key Selection: When sharding a multi-tenant B2B SaaS platform, why is `tenant_id` (or `company_id`) the standard choice for the Shard Key?",
         ["It ensures all data for a single company resides on the same shard node, allowing efficient single-node relational joins without slow cross-network distributed queries", "It makes all companies pay the same price", "It deletes data when companies cancel", "It converts SQL queries into JSON"],
         "A", "Co-locates tenant data to prevent cross-shard joins.", "Selecting `tenant_id` ensures that 99% of queries stay contained within a single physical shard, avoiding high-latency distributed joins.", "Sharding Architecture"),

        ("CQRS (Command Query Responsibility Segregation): What is the core architectural principle of CQRS?",
         ["Separating read models (queries) from write models (commands), allowing each to be optimized, scaled, and indexed independently using different database technologies", "Running all queries in the browser console", "Replacing SQL with voice commands", "Merging frontend and backend into one file"],
         "A", "Separates read paths from write paths.", "CQRS separates high-throughput write commands from complex read reporting models, allowing each database layer to scale to its specific workload.", "Architecture Patterns"),

        ("Database Point-in-Time Recovery (PITR): How does Point-in-Time Recovery enable restoring a production database after an engineer accidentally truncates a table at 2:14:32 PM?",
         ["It restores the last base backup snapshot and replays Write-Ahead Logs (WAL) forward to exactly 2:14:31 PM, recovering data right before the accidental command", "It asks users to re-enter their data", "It runs a reverse query automatically", "It reboots the server in safe mode"],
         "A", "Replays WAL logs to exact millisecond before disaster.", "PITR pairs full backups with continuous WAL archiving, allowing exact replay up to any target millisecond in time.", "Disaster Recovery"),

        ("Database Index Fragmentation: What causes index fragmentation in high-write tables, and how is it resolved?",
         ["Frequent random INSERTs and DELETEs cause half-filled B-Tree leaf pages, resolved by running `REINDEX` or rebuilding the index in the background", "Spilling coffee on the server", "Using long passwords", "Writing queries in lowercase"],
         "A", "Page splits fragment B-Trees; REINDEX rebuilds.", "Random insertions split B-Tree pages and leave empty space. Reindexing compacts page blocks and restores index sequential performance.", "Database Maintenance"),

        ("Database Row-Level Security (RLS): What capability does PostgreSQL Row-Level Security provide for multi-tenant applications?",
         ["It enforces database-engine-level security policies where queries automatically filter rows matching the current user's tenant ID, preventing cross-tenant data leaks", "It locks rows so only one person can use the app", "It deletes rows after 30 days", "It forces users to change passwords monthly"],
         "A", "Database-enforced tenant isolation.", "RLS acts as an impenetrable safety net: even if backend code forgets a `WHERE tenant_id = 5` filter, the DB engine restricts row access automatically.", "Database Security"),

        ("Database Connection Timeouts: Why must backend applications configure strict statement timeouts (e.g. `statement_timeout = 5000ms`) on database connections?",
         ["To automatically cancel rogue or unindexed runaway queries before they exhaust database CPU and lock tables for all other users", "To force users to type queries faster", "To save cloud electricity costs", "To prevent users from logging in at night"],
         "A", "Kills runaway queries before they crash the DB.", "Statement timeouts kill runaway queries automatically, protecting shared database pools from rogue analytics locks.", "Database Reliability"),

        ("Database Charset & Collation: Why is configuring `UTF8MB4` mandatory for relational databases storing modern mobile app inputs?",
         ["To fully support 4-byte Unicode characters, including modern emojis (e.g. 🚀, 💡), international alphabets, and non-Latin scripts without throwing encoding errors", "To make numbers load 4x faster", "To encrypt user passwords", "To reduce hard disk usage by 75%"],
         "A", "Supports 4-byte emojis and global languages.", "Older UTF-8 configurations supported only up to 3 bytes. Attempting to insert 4-byte emojis caused immediate insertion crash errors.", "Data Encoding"),

        ("Database Check Constraints: When should an engineering team implement SQL `CHECK` constraints (e.g. `CHECK (discount_percentage BETWEEN 0 AND 100)`)?",
         ["To guarantee business rule boundaries at the data persistence layer so invalid values can never enter the database regardless of bugs in application code", "To make forms submit faster in browsers", "To check employee attendance", "To automatically format dates"],
         "A", "Guarantees domain validity at storage layer.", "Check constraints enforce fundamental sanity rules directly inside the database engine, acting as the ultimate boundary defense.", "Data Integrity"),

        ("Database Explain Plans: When reviewing an EXPLAIN ANALYZE output, what does an 'Index Scan' vs 'Bitmap Index Scan' indicate?",
         ["Index Scan reads rows one-by-one directly from the heap; Bitmap Index Scan builds an in-memory bitmap of matching pages first, sorting disk I/O before fetching", "Index Scan is deprecated", "Bitmap Index Scan is for images only", "Index Scan only works on Windows"],
         "A", "Bitmap scan groups disk reads sequentially.", "Bitmap index scans batch and sort heap page lookups, turning random I/O into sequential scans when many rows match the filter.", "Query Optimization"),

        ("Database Replication Slot Exhaustion: In PostgreSQL logical replication, what catastrophic failure occurs if a replication consumer stops reading from its replication slot?",
         ["The primary master database retains all Write-Ahead Logs (WAL) on disk indefinitely, eventually filling 100% of the disk and crashing the entire primary database", "The replication slot deletes the database", "The server switches to MySQL", "The consumer is billed $10,000"],
         "A", "Retained WAL fills primary disk.", "Replication slots protect consumers from missing data by keeping WAL files until acknowledged. If a consumer dies silently, retained logs consume all disk.", "Database Operations")
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
            source_reference=f"Day 3 Databases & Modeling (Topic {idx})"
        ))
    return qs

print("Prepared helper for Day 3.")
