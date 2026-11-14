export const MOCK_DATA = {
  subjectName: "PRODUCT MANAGEMENT",
  stats: {
    materialsCount: 5,
    notesGenerated: 0,
    quizzesCompleted: 0,
    averageScore: 0,
    revisionTopicsCount: 0,
  },
  materials: [
    {
      id: "pm2-day1",
      title: "PM2 Combined Overview - Day 1",
      filename: "PM2-Combined-Overview-v2 - Day 1.pptx",
      fileType: "pptx",
      uploadDate: "2026-10-27T21:58:00Z",
      status: "Ready",
      size: "94 KB",
      slidesCount: 18,
      extractedPreview: "--- Slide 1 ---\nPM2-01 & PM2-02  –  COMBINED OVERVIEW\nHow Software Works, Meet the Stack\nA fast, high-level tour for Product Managers – everything in one hour\nDr. Anand Fadte\n\n--- Slide 2 ---\nToday's Roadmap\n1. How Software Works\n2. Front-End, Back-End, Database\n3. APIs & Integrations\n4. Cloud & Infrastructure",
      hasNotes: false,
      hasQuiz: false,
    },
    {
      id: "pm2-day2",
      title: "PM2 APIs & Integrations - Day 2",
      filename: "PM2-APIs-Integrations-Combined-v2 - Day 2.pptx",
      fileType: "pptx",
      uploadDate: "2026-10-27T21:58:00Z",
      status: "Ready",
      size: "71 KB",
      slidesCount: 13,
      extractedPreview: "--- Slide 1 ---\nAPIs & Integrations for Product Managers\nREST, Endpoints, JSON, Webhooks & Third-Party Services",
      hasNotes: false,
      hasQuiz: false,
    },
    {
      id: "pm2-day3",
      title: "PM2 Databases & Data Modeling - Day 3",
      filename: "PM2-Databases-DataModeling-Combined-Day 3.pptx",
      fileType: "pptx",
      uploadDate: "2026-10-27T21:58:00Z",
      status: "Ready",
      size: "82 KB",
      slidesCount: 15,
      extractedPreview: "--- Slide 1 ---\nDatabases & Data Modeling\nRelational vs NoSQL, Schemas, Primary Keys, Foreign Keys & ACID Properties",
      hasNotes: false,
      hasQuiz: false,
    },
    {
      id: "pm2-tech-guide",
      title: "PM2 Tech Stacks Guide",
      filename: "PM2-Tech-Stacks-Guide.pptx",
      fileType: "pptx",
      uploadDate: "2026-10-27T21:58:00Z",
      status: "Ready",
      size: "113 KB",
      slidesCount: 20,
      extractedPreview: "--- Slide 1 ---\nComprehensive Technology Stacks Guide\nFrontend Frameworks, Backend Runtimes, Database Engines & DevOps Pipelines",
      hasNotes: false,
      hasQuiz: false,
    },
    {
      id: "pm2-python",
      title: "Tech Stacks: Python in Production",
      filename: "Tech-Stacks-Python.pptx",
      fileType: "pptx",
      uploadDate: "2026-10-27T21:58:00Z",
      status: "Ready",
      size: "64 KB",
      slidesCount: 14,
      extractedPreview: "--- Slide 1 ---\nPython Tech Stacks\nFastAPI, Django, Flask, SQLAlchemy, Celery & ML Serving",
      hasNotes: false,
      hasQuiz: false,
    }
  ],
  notes: {},
  sampleQuiz: {
    id: "quiz-sample-pm2",
    title: "Software Stacks & Web Architecture Quiz",
    sourceMaterial: "PM2 Combined Overview - Day 1",
    totalQuestions: 3,
    questions: [
      {
        id: "q-pm-1",
        type: "single",
        prompt: "In a 3-tier web application architecture, which layer is responsible for business logic execution, user authentication, and data validation?",
        options: [
          { id: "A", text: "Client/Presentation Layer (Frontend)" },
          { id: "B", text: "Application/Logic Layer (Backend)" },
          { id: "C", text: "Storage Layer (Database)" },
          { id: "D", text: "Domain Name System (DNS)" }
        ],
        hint: "This layer acts as the intermediary between user interfaces and databases.",
        explanation: "The Application/Backend layer processes incoming HTTP requests, enforces business rules, authorizes users, and queries the database.",
        sourceRef: "Slide 4",
        conceptTag: "3-Tier Architecture"
      },
      {
        id: "q-pm-2",
        type: "multiple",
        prompt: "Which of the following are core characteristics of RESTful APIs? (Select all that apply)",
        options: [
          { id: "A", text: "Statelessness: each request contains all context needed to process it" },
          { id: "B", text: "Standard HTTP verbs (GET, POST, PUT, DELETE) used for actions" },
          { id: "C", text: "Mandatory bidirectional WebSocket connection for all calls" },
          { id: "D", text: "Resource-based URL endpoints returning standard data formats like JSON" }
        ],
        hint: "REST relies on standard HTTP conventions and does not keep session state on the server across calls.",
        explanation: "REST is stateless, uses standard HTTP methods, and models endpoints as resources (JSON/XML). WebSockets are a different protocol for persistent two-way streaming.",
        sourceRef: "Slide 8",
        conceptTag: "RESTful Principles"
      },
      {
        id: "q-pm-3",
        type: "true_false",
        prompt: "True or False: A Foreign Key in a relational database enforces referential integrity by pointing to the Primary Key of another table.",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" }
        ],
        hint: "Think about how SQL joins connect a User to their Orders.",
        explanation: "True. A Foreign Key references a Primary Key in another table, ensuring child records cannot reference non-existent parent rows.",
        sourceRef: "Slide 11",
        conceptTag: "Relational Modeling"
      }
    ]
  },
  attemptsHistory: [],
  revisionQueue: []
};
