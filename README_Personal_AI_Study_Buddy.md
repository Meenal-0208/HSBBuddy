# Personal AI Study Buddy

A private, single-user study website for **one subject**. Upload your
course PPTs, PDFs, or Word documents, generate short revision notes,
practise with AI-generated quizzes, and track topics that need revision.

This README is a step-by-step build and run guide. It assumes the
recommended stack:

-   **Frontend:** React + Vite + Tailwind CSS
-   **Backend:** Python + FastAPI
-   **Database:** SQLite
-   **File storage:** Private local folder during the MVP
-   **AI:** An LLM API called securely from the backend

> Keep the subject configurable in one place (for example,
> `SUBJECT_NAME` in backend configuration). The application supports
> multiple files for that one subject, not multiple subjects.

------------------------------------------------------------------------

## 1. What you are building

The main user journey is:

1.  Open your private Study Buddy website.
2.  Upload course materials from the upload/admin page.
3.  The backend extracts text from each file.
4.  Select one PPT/document or all uploaded materials.
5.  Generate concise, student-friendly notes.
6.  Take a quiz based on the selected source material.
7.  Reveal optional hints, submit answers, and read explanations.
8.  Review incorrect answers and practise those concepts again.

### MVP features

-   Upload and manage PPTX, PDF, and DOCX files.
-   See file-processing status and extraction errors.
-   Generate and save short notes from uploaded material.
-   Generate single-select, multiple-select, and true/false quizzes.
-   Show hints before answering and explanations after submission.
-   Save quiz attempts, scores, and incorrect answers.
-   Generate a revision quiz from missed concepts.

### Not part of the MVP

Do not build student accounts, study groups, messaging, social feeds,
payments, public sharing, or multi-subject management.

------------------------------------------------------------------------

## 2. Software you need

Install these before starting:

1.  **Python 3.11 or newer** --- backend and file processing.
2.  **Node.js LTS** --- frontend development.
3.  **VS Code** or another code editor.
4.  **Git** --- version control (recommended).
5.  **Google Antigravity** or another AI coding assistant --- to build
    and edit the project.
6.  **An API key for your chosen LLM provider** --- needed for real
    AI-generated notes and quizzes.

Check that Python and Node.js are available in your terminal:

``` bash
python --version
node --version
npm --version
git --version
```

If `python` does not work on Windows, try:

``` powershell
py --version
```

------------------------------------------------------------------------

## 3. Create the project

Create a folder named `study-buddy` and open it in your coding tool.

Suggested structure:

``` text
study-buddy/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   └── types/
│   └── package.json
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── db/
│   │   ├── models/
│   │   ├── schemas/
│   │   └── services/
│   │       ├── file_extraction.py
│   │       ├── ai_provider.py
│   │       ├── notes_service.py
│   │       └── quiz_service.py
│   ├── tests/
│   ├── requirements.txt
│   └── .env.example
├── storage/
│   └── uploads/
├── .gitignore
└── README.md
```

The AI coding assistant may adjust the exact structure, but keep
frontend, backend, database, file extraction, and AI services separated.

------------------------------------------------------------------------

## 4. Build the website in stages

Build and test one stage at a time. Do not ask the coding assistant to
generate the entire application in one prompt.

### Stage 1 --- Build the frontend shell

Create a React + Vite application in the `frontend` folder and configure
Tailwind CSS.

Create these screens:

-   **Dashboard:** subject name, number of uploaded materials, recent
    quiz score, and quick actions.
-   **Materials:** upload control and list of uploaded files.
-   **Material detail:** file information, processing status, and
    actions to generate notes or take a quiz.
-   **Short Notes:** display saved notes in readable sections.
-   **Quiz:** show one question at a time, answer options, a hidden
    hint, and quiz progress.
-   **Results:** score, correct answers, explanations, and a
    revise-mistakes action.
-   **Progress:** recent attempts and concepts to revisit.

Use sample placeholder content only to design the layout. Clearly
replace it with real API data in later stages.

**Stage 1 is complete when:** the frontend starts, all screens load,
navigation works, and the layout is usable on desktop and mobile.

### Stage 2 --- Set up the backend

Create a Python virtual environment inside `backend`.

Windows PowerShell:

``` powershell
cd backend
py -m venv .venv
.\.venv\Scripts\Activate.ps1
```

If PowerShell blocks activation, use Command Prompt:

``` bat
.venv\Scripts\activate.bat
```

macOS/Linux:

``` bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
```

Install the backend packages listed in `requirements.txt`. The initial
dependencies will typically include:

``` text
fastapi
uvicorn[standard]
python-multipart
pydantic-settings
sqlalchemy
python-pptx
pymupdf
python-docx
pytest
httpx
```

The coding assistant should add compatible versions to
`requirements.txt`. Install them:

``` bash
pip install -r requirements.txt
```

Create a basic FastAPI application with:

-   A health-check endpoint such as `GET /api/health`.
-   SQLite database configuration.
-   Database models and initialisation.
-   CORS configured for the local frontend development address.
-   Environment-based configuration.

Run the backend from the `backend` folder:

``` bash
uvicorn app.main:app --reload
```

Open `http://127.0.0.1:8000/docs` to inspect the API documentation. The
health endpoint should return a successful response.

**Stage 2 is complete when:** the backend starts, the health endpoint
works, and the SQLite database is created.

### Stage 3 --- Add material uploads

Build the upload flow.

The backend should:

1.  Accept PPTX, PDF, and DOCX files.
2.  Validate allowed extensions and file size.
3.  Generate a safe server-side filename rather than trusting the
    uploaded filename as a storage path.
4.  Store the original file in `storage/uploads/`.
5.  Save its title, original filename, file type, upload date, and
    status in SQLite.
6.  Return the saved material details to the frontend.

The frontend should let you:

-   Select a file.
-   Add or edit its display title.
-   Upload it.
-   See upload and processing status.
-   View the list of uploaded files.
-   Delete a file.

Use statuses such as `Uploaded`, `Processing`, `Ready`, and `Failed`.

**Stage 3 is complete when:** you can upload a supported file, see it in
the materials list, refresh the page and still see it, and delete it.

### Stage 4 --- Extract text from files

Add file-processing services in the backend:

-   **PPTX:** use `python-pptx` to extract slide text in slide order.
-   **PDF:** use PyMuPDF to extract page text.
-   **DOCX:** use `python-docx` to extract paragraphs and table text
    where possible.

Preserve slide or page numbers in the extracted content. Store extracted
text in the database, linked to the material record.

Show a preview of extracted text so you can check whether the file was
read correctly.

Important limitations for the first version:

-   Scanned PDFs and image-only slides may not contain extractable text.
-   Complex diagrams, charts, and images may need OCR or a vision model
    later.
-   Do not silently pretend that a file was fully understood if
    extraction is incomplete.

**Stage 4 is complete when:** you can upload test files, inspect
extracted text, and see a clear error or warning for unsupported or
unreadable content.

### Stage 5 --- Generate short notes with AI

Connect the chosen LLM provider from the backend only.

1.  Put the API key in the backend `.env` file.
2.  Read the key through backend environment configuration.
3.  Create an `ai_provider.py` service to make the model request.
4.  Create a `notes_service.py` service to prepare the source text and
    format the response.
5.  Add an API endpoint to generate notes for one material.
6.  Save successful notes in SQLite.
7.  Display saved notes in the frontend.

Ask the model to return structured sections such as:

-   Quick overview.
-   Key concepts and definitions.
-   Frameworks and models.
-   Formulas or steps, if present.
-   Examples and applications from the material.
-   Important exam takeaways.
-   Quick revision summary.
-   Slide/page references where available.

The notes must be based on the uploaded source. The model should not
invent details or claim that an example came from the PPT when it did
not.

For long files, split the extracted text into manageable slide/page
chunks, generate notes for each chunk, and combine them into a concise
set of notes. Do not silently drop the end of a long document.

Add loading, retry, and error messages. If the API key is missing, show
a setup message rather than fake AI output.

**Stage 5 is complete when:** you can generate notes from a real
uploaded file, refresh the page, and view the saved notes again.

### Stage 6 --- Generate and take quizzes

Create the quiz-generation service and quiz screens.

Allow these source choices:

-   One selected PPT/document.
-   All uploaded materials for the subject.

Support these question types:

-   Single-select MCQ.
-   Multiple-select question.
-   True/false.

Each generated question should contain:

-   Question text.
-   Question type.
-   Answer options.
-   Correct answer or complete set of correct answers.
-   A hidden hint.
-   Explanation for the answer.
-   Option-specific feedback where appropriate.
-   Source slide/page reference when available.
-   Concept tags for revision.

Validate the AI response before saving it. Reject malformed questions,
questions without a defensible answer, and duplicate questions in the
same quiz.

The quiz interface should:

1.  Show the question and answer options.
2.  Let you open a hint without revealing the answer.
3.  Let you select an answer.
4.  Submit the quiz.
5.  Show the score and explanations after submission.
6.  Offer a way to review missed questions.

For multiple-select questions, define the grading rule clearly. A simple
MVP rule is exact-set matching: the response is correct only if it
includes all correct options and no incorrect options.

**Important:** do not send correct answer keys to the browser before the
quiz is submitted. Keep answer keys on the backend and grade submissions
on the server.

**Stage 6 is complete when:** a quiz can be generated from a real PPT,
completed, scored, and reviewed.

### Stage 7 --- Add progress and revision

Save each quiz attempt in SQLite, including:

-   Quiz ID and source material.
-   Start and completion time.
-   Selected answers.
-   Score.
-   Incorrect questions and concept tags.

Create a simple progress screen with:

-   Recent quiz attempts.
-   Score history.
-   Materials practised.
-   Questions or concepts to revise.

Add a **Revise mistakes** action. It should use previously missed
concepts as the source for a fresh practice quiz. Avoid simply repeating
the exact same question every time.

Do not mark a topic as mastered after just one correct answer. Use
repeated performance across attempts as a stronger signal.

**Stage 7 is complete when:** quiz history survives a restart and missed
concepts can be practised again.

### Stage 8 --- Test and polish

Before calling the MVP complete:

-   Test PPTX, PDF, and DOCX uploads.
-   Test unsupported and corrupted files.
-   Test an image-only or scanned PDF and confirm the limitation is
    visible.
-   Test notes generation and saved-note retrieval.
-   Test all three quiz types.
-   Check that hints do not reveal answers.
-   Check that answer keys are not exposed before submission.
-   Check that incorrect answers are saved.
-   Restart the backend and confirm saved data remains.
-   Test AI-provider failure and missing API-key behaviour.
-   Check desktop and mobile layouts.
-   Add useful empty, loading, success, and error states.
-   Update this README if the actual commands or folder structure
    changed.

------------------------------------------------------------------------

## 5. Configure the AI provider securely

Create `backend/.env` based on `backend/.env.example`.

Example placeholders:

``` env
APP_ENV=development
DATABASE_URL=sqlite:///./study_buddy.db
UPLOAD_DIR=../storage/uploads
MAX_UPLOAD_MB=25

AI_PROVIDER=your_provider
AI_API_KEY=put_your_secret_key_here
AI_MODEL=your_chosen_model
```

These are configuration examples; the exact variable names must match
the backend implementation.

Rules:

-   Never put the AI API key in React/Vite frontend environment
    variables.
-   Never commit `.env` to Git.
-   Commit `.env.example` with placeholder values only.
-   Make all model requests from the backend.
-   Check the chosen provider's pricing, rate limits, and data-handling
    policy before uploading private study materials.

------------------------------------------------------------------------

## 6. Run the website locally

You will normally need two terminal windows.

### Terminal 1 --- Start the backend

Windows PowerShell:

``` powershell
cd study-buddy\backend
.\.venv\Scripts\Activate.ps1
uvicorn app.main:app --reload
```

macOS/Linux:

``` bash
cd study-buddy/backend
source .venv/bin/activate
uvicorn app.main:app --reload
```

Backend address:

``` text
http://127.0.0.1:8000
```

API documentation:

``` text
http://127.0.0.1:8000/docs
```

### Terminal 2 --- Start the frontend

``` bash
cd study-buddy/frontend
npm install
npm run dev
```

Vite will print the local website address, usually:

``` text
http://localhost:5173
```

Open that address in your browser.

Keep both terminal windows running while you use the local application.

------------------------------------------------------------------------

## 7. Git and files you should not upload

Add a `.gitignore` file at the project root. At minimum, exclude:

``` gitignore
.env
.env.*
!.env.example

.venv/
venv/
__pycache__/
*.pyc

node_modules/
dist/

storage/uploads/
*.db
*.sqlite
*.sqlite3

.DS_Store
```

Do not commit your uploaded PPTs, private notes, database, or API keys
to a public repository.

------------------------------------------------------------------------

## 8. Suggested database records

The backend will likely need these records:

  -----------------------------------------------------------------------
  Record                              What it stores
  ----------------------------------- -----------------------------------
  Material                            File title, filename, type, upload
                                      date, status, extracted text

  Notes                               Generated notes, source material,
                                      creation date

  Quiz                                Quiz title, source scope, settings,
                                      creation date

  Question                            Question, options, answer key,
                                      hint, explanation, source reference

  Quiz Attempt                        Attempt date, score, completion
                                      status

  Attempt Answer                      Selected answer, correctness,
                                      question reference

  Revision Item                       Missed concept/question and
                                      revision status
  -----------------------------------------------------------------------

The coding assistant can implement these with SQLAlchemy and SQLite.

------------------------------------------------------------------------

## 9. Final MVP checklist

The first usable version is ready when all of the following work:

-   [ ] The website opens locally.
-   [ ] The dashboard is connected to real backend data.
-   [ ] I can upload PPTX, PDF, and DOCX materials.
-   [ ] Uploaded materials remain available after restarting the app.
-   [ ] Extracted text can be previewed.
-   [ ] I can generate and revisit short notes.
-   [ ] I can generate a quiz from one file or all files.
-   [ ] I can reveal hints before answering.
-   [ ] I receive a score and explanations after submission.
-   [ ] Incorrect answers are saved.
-   [ ] I can practise missed concepts again.
-   [ ] API keys are stored only on the backend.
-   [ ] Private uploaded files and database files are excluded from Git.

------------------------------------------------------------------------

## 10. Best way to work with your AI coding assistant

Give the coding assistant one stage at a time. At the beginning of each
task, tell it to read this README and the PRD.

Use this instruction:

> Read the PRD and README before making changes. Work only on the stage
> I specify. First inspect the existing code and explain the files you
> plan to change. Do not rewrite working parts unnecessarily and do not
> add features outside the PRD. Implement the requested stage, run the
> relevant tests, fix errors, and tell me exactly how to run and verify
> the result. If a requirement is unclear, ask before making a major
> architectural decision.

After each stage:

1.  Run the application yourself.
2.  Test the feature with a real file or real workflow.
3.  Share any error messages or screenshots with the coding assistant.
4.  Ask it to fix the issue before moving to the next stage.
5.  Keep a Git commit or backup after each working milestone.

**Recommended first task:** build Stage 1 (the frontend shell), then
Stage 2 (the backend foundation). Do not connect the AI model until file
upload and text extraction work reliably.
