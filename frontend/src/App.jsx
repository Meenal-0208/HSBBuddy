import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Materials from './pages/Materials';
import MaterialDetail from './pages/MaterialDetail';
import ShortNotes from './pages/ShortNotes';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import Progress from './pages/Progress';

import { 
  fetchHealth, 
  fetchMaterials, 
  uploadMaterial, 
  deleteMaterial, 
  fetchNotes, 
  generateNotes, 
  generateQuiz, 
  fetchQuizzes,
  fetchQuiz,
  submitQuizAnswers, 
  fetchProgress 
} from './api/client';
import { MOCK_DATA } from './mockData';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [subjectName, setSubjectName] = useState("PRODUCT MANAGEMENT");
  const [aiConfigured, setAiConfigured] = useState(false);
  const [materials, setMaterials] = useState(() => MOCK_DATA.materials || []);
  const [selectedMaterial, setSelectedMaterial] = useState(() => (MOCK_DATA.materials && MOCK_DATA.materials[0]) || null);
  const [notesData, setNotesData] = useState(() => MOCK_DATA.notes || {});
  const [activeQuiz, setActiveQuiz] = useState(() => MOCK_DATA.sampleQuiz || null);
  const [allQuizzes, setAllQuizzes] = useState(() => MOCK_DATA.quizzes || []);
  const [latestResult, setLatestResult] = useState(null);
  const [progressData, setProgressData] = useState({
    recent_attempts: [],
    revision_items: [],
    stats: MOCK_DATA.stats || {
      materialsCount: 5,
      notesGenerated: 5,
      quizzesCompleted: 0,
      averageScore: 0,
      revisionTopicsCount: 26
    }
  });

  const [loading, setLoading] = useState(false);
  const [errorToast, setErrorToast] = useState(null);

  // Dark Mode State with LocalStorage Persistence
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('study_buddy_dark_mode');
      if (saved !== null) return JSON.parse(saved);
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('study_buddy_dark_mode', JSON.stringify(isDarkMode));
    } catch (e) {
      console.warn("Could not save dark mode preference:", e);
    }

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const showError = (msg) => {
    setErrorToast(msg);
    setTimeout(() => setErrorToast(null), 5000);
  };

  // Initial Load from Backend
  const loadInitialData = async () => {
    try {
      const health = await fetchHealth();
      if (health.subject_name) setSubjectName(health.subject_name);
      setAiConfigured(health.ai_configured);

      const matsRaw = await fetchMaterials();
      const normalizeMat = (m) => ({
        ...m,
        filename: m.filename || m.original_filename || m.title,
        fileType: (m.fileType || m.file_type || 'pptx').toLowerCase(),
        slidesCount: m.slidesCount ?? m.slides_count ?? 0,
        uploadDate: m.uploadDate || m.uploaded_at || new Date().toISOString(),
        size: m.size || (m.file_size_bytes ? `${(m.file_size_bytes / 1024).toFixed(0)} KB` : 'N/A'),
        extractedPreview: m.extractedPreview || m.extracted_text || ''
      });

      let mats = [];
      if (matsRaw && matsRaw.length > 0) {
        mats = matsRaw.map(normalizeMat);
        setMaterials(mats);
        if (!selectedMaterial) setSelectedMaterial(mats[0]);
      } else {
        // Fallback to sample materials to let the user immediately preview UI
        mats = MOCK_DATA.materials;
        setMaterials(mats);
        setSelectedMaterial(MOCK_DATA.materials[0]);
      }

      // Load saved notes from SQLite
      try {
        const savedNotes = await fetchNotes();
        if (savedNotes && savedNotes.length > 0) {
          const notesMap = {};
          savedNotes.forEach(n => {
            const key = n.material_id || 'all_subject';
            const mat = mats.find(m => m.id === n.material_id);
            notesMap[key] = {
              materialId: n.material_id,
              materialTitle: mat ? mat.title : 'All Course Materials',
              updatedAt: n.created_at,
              overview: n.overview,
              sections: n.content
            };
          });
          setNotesData(notesMap);
        }
      } catch (e) {
        console.warn("Could not load notes:", e);
      }

      // Load all available quiz sets from backend
      try {
        const qList = await fetchQuizzes();
        if (qList && qList.length > 0) {
          setAllQuizzes(qList);
        }
      } catch (e) {
        console.warn("Could not load quizzes:", e);
      }

      const prog = await fetchProgress();
      if (prog) {
        setProgressData({
          recent_attempts: prog.recent_attempts || [],
          revision_items: prog.revision_items || [],
          stats: {
            materialsCount: prog.stats.materials_count || mats.length || MOCK_DATA.stats.materialsCount,
            notesGenerated: prog.stats.notes_generated || MOCK_DATA.stats.notesGenerated,
            quizzesCompleted: prog.stats.quizzes_completed || MOCK_DATA.stats.quizzesCompleted,
            averageScore: prog.stats.average_score || MOCK_DATA.stats.averageScore,
            revisionTopicsCount: prog.stats.revision_topics_count || MOCK_DATA.stats.revisionTopicsCount
          }
        });
      }
    } catch (err) {
      console.warn("Backend unavailable or seeding default data:", err);
      setMaterials(MOCK_DATA.materials);
      setSelectedMaterial(MOCK_DATA.materials[0]);
      setNotesData(MOCK_DATA.notes);
      setActiveQuiz(MOCK_DATA.sampleQuiz);
      setProgressData({
        recent_attempts: MOCK_DATA.attemptsHistory,
        revision_items: MOCK_DATA.revisionQueue,
        stats: MOCK_DATA.stats
      });
    }
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  // Handlers
  const handleSelectMaterial = (mat) => {
    setSelectedMaterial(mat);
    setActivePage('material-detail');
  };

  const handleUpload = async (uploadPayload) => {
    try {
      setLoading(true);
      const formData = new FormData();
      const actualFile = uploadPayload?.file || uploadPayload;
      const title = uploadPayload?.title || uploadPayload?.customTitle || (actualFile?.name ? actualFile.name.replace(/\.[^/.]+$/, "") : "Uploaded Material");
      
      formData.append('file', actualFile);
      if (title) formData.append('title', title);

      await uploadMaterial(formData);
      await loadInitialData();
    } catch (err) {
      showError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMaterial(id);
      setMaterials(prev => prev.filter(m => m.id !== id));
      if (selectedMaterial && selectedMaterial.id === id) {
        setSelectedMaterial(null);
        setActivePage('materials');
      }
    } catch (err) {
      showError(err.message);
    }
  };

  const handleGenerateNotes = async (mat) => {
    setSelectedMaterial(mat);
    // If note already exists in memory or MOCK_DATA, navigate directly
    if (notesData[mat.id] || MOCK_DATA.notes[mat.id]) {
      if (!notesData[mat.id] && MOCK_DATA.notes[mat.id]) {
        setNotesData(prev => ({ ...prev, [mat.id]: MOCK_DATA.notes[mat.id] }));
      }
      setActivePage('notes');
      return;
    }

    try {
      setLoading(true);
      const res = await generateNotes(mat.id);
      setNotesData(prev => ({
        ...prev,
        [mat.id]: {
          materialId: mat.id,
          materialTitle: mat.title,
          updatedAt: res.created_at,
          overview: res.overview,
          sections: res.content
        }
      }));
      setActivePage('notes');
    } catch (err) {
      const fallbackNote = MOCK_DATA.notes[mat.id] || Object.values(MOCK_DATA.notes)[0];
      if (fallbackNote) {
        setNotesData(prev => ({
          ...prev,
          [mat.id]: fallbackNote
        }));
        setActivePage('notes');
      } else {
        showError(err.message || "Failed to generate notes");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleStartQuiz = async (param) => {
    try {
      setLoading(true);
      let quizRes = null;

      if (!param) {
        // If no parameter passed, show topic picker
        setActiveQuiz(null);
        setActivePage('quiz');
        return;
      }

      // Check if param is a direct quiz ID (check if it exists in allQuizzes)
      const foundDirect = allQuizzes.find(q => q.id === param);
      if (foundDirect) {
        const fullQuiz = await fetchQuiz(param).catch(() => foundDirect);
        setActiveQuiz(fullQuiz);
        setActivePage('quiz');
        return;
      }

      // If param is a materialId, fetch quizzes for that material
      const existingList = await fetchQuizzes(param).catch(() => []);
      if (existingList && existingList.length > 0) {
        // fetch the full quiz with questions
        quizRes = await fetchQuiz(existingList[0].id).catch(() => existingList[0]);
      } else {
        quizRes = await generateQuiz(param, 'single', 10);
      }

      if (quizRes && quizRes.questions && quizRes.questions.length > 0) {
        setActiveQuiz(quizRes);
        setActivePage('quiz');
      } else {
        showError("Loading quiz questions...");
        const fresh = await generateQuiz(param, 'single', 10);
        setActiveQuiz(fresh);
        setActivePage('quiz');
      }
    } catch (err) {
      console.warn("Quiz load error, falling back:", err);
      setActiveQuiz(MOCK_DATA.sampleQuiz);
      setActivePage('quiz');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitQuiz = async ({ quizId, answers, quiz }) => {
    try {
      setLoading(true);
      const answerPayload = Object.entries(answers).map(([qid, val]) => ({
        question_id: qid,
        selected: val
      }));

      const graded = await submitQuizAnswers(quizId, answerPayload);
      setLatestResult({
        quizId: graded.quiz_id,
        quizTitle: graded.quiz_title,
        score: graded.score,
        correctCount: graded.correct_count,
        totalQuestions: graded.total_questions,
        details: graded.details,
        missedConcepts: graded.missed_concepts
      });
      loadInitialData();
      setActivePage('results');
    } catch (err) {
      // Client-side fallback evaluation if offline
      let correctCount = 0;
      const details = quiz.questions.map(q => {
        const u = answers[q.id];
        const isC = (q.type === 'multiple') ? (Array.isArray(u) && u.includes("B")) : (u === "B" || u === "true");
        if (isC) correctCount++;
        return {
          questionId: q.id,
          prompt: q.prompt,
          userAnswer: u,
          correctAnswer: q.type === 'multiple' ? ["B", "C", "D"] : (q.type === 'true_false' ? "true" : "B"),
          isCorrect: isC,
          explanation: q.explanation || "Answer grounded in course slide notes.",
          sourceRef: q.source_reference || "Slide Reference",
          conceptTag: q.concept_tag || "Course Concept"
        };
      });

      setLatestResult({
        quizId,
        quizTitle: quiz.title,
        score: Math.round((correctCount / quiz.questions.length) * 100),
        correctCount,
        totalQuestions: quiz.questions.length,
        details,
        missedConcepts: details.filter(d => !d.isCorrect).map(d => d.conceptTag)
      });
      setActivePage('results');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navbar 
        activePage={activePage} 
        onNavigate={(page) => {
          if (page === 'quiz') {
            setActiveQuiz(null); // Show topic chooser modal with all 5 quizzes
          }
          setActivePage(page);
        }} 
        subjectName={subjectName} 
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Global Error Toast */}
      {errorToast && (
        <div className="bg-amber-600 text-white px-4 py-3 text-xs font-semibold text-center shadow-md">
          {errorToast}
        </div>
      )}

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activePage === 'dashboard' && (
          <Dashboard 
            data={{
              subjectName,
              stats: progressData.stats,
              materials,
              revisionQueue: progressData.revision_items,
              attemptsHistory: progressData.recent_attempts
            }} 
            onNavigate={setActivePage} 
            onSelectMaterial={handleSelectMaterial}
            onStartQuiz={handleStartQuiz}
          />
        )}

        {activePage === 'materials' && (
          <Materials 
            materials={materials}
            onSelectMaterial={handleSelectMaterial}
            onUploadMock={(mockMeta) => {
              // Create native File object if uploaded via input or mock
              handleUpload(mockMeta);
            }}
            onDeleteMaterial={handleDelete}
            onGenerateNotes={handleGenerateNotes}
            onStartQuiz={handleStartQuiz}
          />
        )}

        {activePage === 'material-detail' && (
          <MaterialDetail 
            material={selectedMaterial}
            notes={notesData[selectedMaterial?.id] || Object.values(notesData).find(n => n?.materialTitle === selectedMaterial?.title)}
            onBack={() => setActivePage('materials')}
            onGenerateNotes={handleGenerateNotes}
            onStartQuiz={handleStartQuiz}
            onViewNotes={() => setActivePage('notes')}
          />
        )}

        {activePage === 'notes' && (
          <ShortNotes 
            materials={materials}
            notesData={notesData}
            activeMaterialId={selectedMaterial ? selectedMaterial.id : (materials[0] ? materials[0].id : null)}
            onSelectMaterial={(id) => {
              const m = materials.find(x => x.id === id);
              if (m) setSelectedMaterial(m);
            }}
            onStartQuiz={handleStartQuiz}
            onRegenerateNotes={(id) => {
              const m = materials.find(x => x.id === id);
              if (m) handleGenerateNotes(m);
            }}
          />
        )}

        {activePage === 'quiz' && (
          <Quiz 
            quiz={activeQuiz}
            quizzes={allQuizzes}
            materials={materials}
            activeMaterialId={selectedMaterial ? selectedMaterial.id : null}
            onSelectQuiz={(quizId) => handleStartQuiz(quizId)}
            onSelectMaterial={(id) => handleStartQuiz(id)}
            onSubmitQuiz={handleSubmitQuiz}
            onCancel={() => setActivePage('dashboard')}
          />
        )}

        {activePage === 'results' && (
          <Results 
            result={latestResult}
            onRetake={() => setActivePage('quiz')}
            onReviseMistakes={() => handleStartQuiz('revision')}
            onGoHome={() => setActivePage('dashboard')}
          />
        )}

        {activePage === 'progress' && (
          <Progress 
            attemptsHistory={progressData.recent_attempts}
            revisionQueue={progressData.revision_items}
            onStartRevisionQuiz={() => handleStartQuiz('revision')}
          />
        )}
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-4 text-center text-xs text-slate-400 dark:text-slate-500 transition-colors">
        Personal AI Study Buddy • Single-Subject Dedicated Workspace • Private Local Storage
      </footer>
    </div>
  );
}
