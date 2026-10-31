import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Materials from './pages/Materials';
import MaterialDetail from './pages/MaterialDetail';
import ShortNotes from './pages/ShortNotes';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import Progress from './pages/Progress';
import { MOCK_DATA } from './mockData';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [data, setData] = useState(MOCK_DATA);
  const [selectedMaterial, setSelectedMaterial] = useState(data.materials[0]);
  const [activeQuiz, setActiveQuiz] = useState(data.sampleQuiz);
  const [latestResult, setLatestResult] = useState(null);

  // Handlers
  const handleSelectMaterial = (material) => {
    setSelectedMaterial(material);
    setActivePage('material-detail');
  };

  const handleUploadMock = (newFileMeta) => {
    const newEntry = {
      id: `mat-${Date.now()}`,
      title: newFileMeta.title,
      filename: newFileMeta.filename,
      fileType: newFileMeta.fileType,
      uploadDate: new Date().toISOString(),
      status: 'Ready',
      size: newFileMeta.size,
      slidesCount: Math.floor(Math.random() * 25) + 10,
      extractedPreview: `Slide 1: Extracted overview of ${newFileMeta.title}.\nSlide 2: Primary definitions and frameworks.\nSlide 3: High-yield summary.`,
      hasNotes: false,
      hasQuiz: false,
    };

    setData(prev => ({
      ...prev,
      materials: [newEntry, ...prev.materials],
      stats: {
        ...prev.stats,
        materialsCount: prev.stats.materialsCount + 1
      }
    }));
  };

  const handleDeleteMaterial = (id) => {
    setData(prev => ({
      ...prev,
      materials: prev.materials.filter(m => m.id !== id),
      stats: {
        ...prev.stats,
        materialsCount: Math.max(0, prev.stats.materialsCount - 1)
      }
    }));
    if (selectedMaterial && selectedMaterial.id === id) {
      setSelectedMaterial(null);
      setActivePage('materials');
    }
  };

  const handleGenerateNotes = (material) => {
    setSelectedMaterial(material);
    // If not existing, add a mock note entry
    if (!data.notes[material.id]) {
      setData(prev => ({
        ...prev,
        notes: {
          ...prev.notes,
          [material.id]: {
            materialId: material.id,
            materialTitle: material.title,
            updatedAt: new Date().toISOString(),
            overview: `Concise revision notes generated for ${material.title}.`,
            sections: [
              {
                heading: "1. Core Takeaways & Definitions",
                content: "• Key concepts and foundational principles extracted directly from source slides.\n• Clear exam-oriented breakdown with accurate terminology.",
                sourceRef: "Slide 1-5"
              },
              {
                heading: "2. Mechanistic Steps & Frameworks",
                content: "• Step-by-step physiological pathways.\n• Sequential checkpoints to remember for clinical scenarios.",
                sourceRef: "Slide 8-12"
              }
            ]
          }
        }
      }));
    }
    setActivePage('notes');
  };

  const handleStartQuiz = (sourceScope) => {
    if (sourceScope === 'revision') {
      // Build a revision quiz from missed concepts
      const revQuiz = {
        id: `quiz-rev-${Date.now()}`,
        title: "Targeted Revision: Missed Concepts Practice",
        sourceMaterial: "Revision Deck (Previously Missed Questions)",
        totalQuestions: 2,
        questions: [
          {
            id: "rev-q-1",
            type: "single",
            prompt: "What is the primary cellular target of Parathyroid Hormone (PTH) in renal calcium handling?",
            options: [
              { id: "A", text: "Proximal Convoluted Tubule calcium secretion" },
              { id: "B", text: "Distal Convoluted Tubule calcium reabsorption" },
              { id: "C", text: "Collecting Duct water permeability" },
              { id: "D", text: "Loop of Henle potassium wasting" }
            ],
            hint: "PTH increases apical calcium channels in the distal tubule.",
            explanation: "In the kidney, PTH directly stimulates Ca2+ reabsorption specifically in the distal convoluted tubule (DCT).",
            sourceRef: "Lecture 1 (Slide 32)",
            conceptTag: "Calcium Homeostasis & Parathyroid Regulation"
          },
          {
            id: "rev-q-2",
            type: "single",
            prompt: "During skeletal muscle contraction, which regulatory protein binds Calcium (Ca2+) to trigger conformational shift in tropomyosin?",
            options: [
              { id: "A", text: "Troponin C (TnC)" },
              { id: "B", text: "Myosin Light Chain Kinase" },
              { id: "C", text: "Calmodulin" },
              { id: "D", text: "Dystrophin" }
            ],
            hint: "The subunit designated 'C' is named for its high affinity for Calcium ions.",
            explanation: "Troponin C binds Ca2+, causing a conformational pull on tropomyosin that uncovers the actin myosin-binding sites.",
            sourceRef: "Lecture 2 (Slide 14)",
            conceptTag: "Troponin vs Tropomyosin roles in cross-bridge formation"
          }
        ]
      };
      setActiveQuiz(revQuiz);
    } else {
      setActiveQuiz(data.sampleQuiz);
    }
    setActivePage('quiz');
  };

  const handleSubmitQuiz = ({ quizId, quizTitle, source, answers, quiz }) => {
    // Evaluate submission
    let correctCount = 0;
    const details = quiz.questions.map(q => {
      const userAns = answers[q.id];
      let isCorrect = false;

      // Mock correct key logic
      let correctKey = "B";
      if (q.type === 'multiple') {
        correctKey = ["B", "C", "D"];
        const u = Array.isArray(userAns) ? userAns : [];
        isCorrect = u.length === correctKey.length && u.every(v => correctKey.includes(v));
      } else if (q.type === 'true_false') {
        correctKey = "true";
        isCorrect = userAns === correctKey;
      } else {
        if (q.id === 'rev-q-1') correctKey = 'B';
        else if (q.id === 'rev-q-2') correctKey = 'A';
        else correctKey = q.id === 'q-4' ? 'B' : 'B';
        isCorrect = userAns === correctKey;
      }

      if (isCorrect) correctCount++;

      return {
        questionId: q.id,
        prompt: q.prompt,
        userAnswer: userAns,
        correctAnswer: correctKey,
        isCorrect,
        explanation: q.explanation,
        sourceRef: q.sourceRef,
        conceptTag: q.conceptTag
      };
    });

    const score = Math.round((correctCount / quiz.questions.length) * 100);
    const missed = details.filter(d => !d.isCorrect).map(d => d.conceptTag);

    const resultObj = {
      quizId,
      quizTitle,
      source,
      score,
      correctCount,
      totalQuestions: quiz.questions.length,
      details,
      missedConcepts: missed
    };

    setLatestResult(resultObj);

    // Save attempt into history
    setData(prev => ({
      ...prev,
      attemptsHistory: [
        {
          id: `att-${Date.now()}`,
          quizTitle,
          source,
          date: new Date().toISOString(),
          score,
          totalQuestions: quiz.questions.length,
          correctCount,
          missedConcepts: missed
        },
        ...prev.attemptsHistory
      ]
    }));

    setActivePage('results');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Navbar 
        activePage={activePage} 
        onNavigate={setActivePage} 
        subjectName={data.subjectName} 
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activePage === 'dashboard' && (
          <Dashboard 
            data={data} 
            onNavigate={setActivePage} 
            onSelectMaterial={handleSelectMaterial}
            onStartQuiz={handleStartQuiz}
          />
        )}

        {activePage === 'materials' && (
          <Materials 
            materials={data.materials}
            onSelectMaterial={handleSelectMaterial}
            onUploadMock={handleUploadMock}
            onDeleteMaterial={handleDeleteMaterial}
            onGenerateNotes={handleGenerateNotes}
            onStartQuiz={handleStartQuiz}
          />
        )}

        {activePage === 'material-detail' && (
          <MaterialDetail 
            material={selectedMaterial}
            onBack={() => setActivePage('materials')}
            onGenerateNotes={handleGenerateNotes}
            onStartQuiz={handleStartQuiz}
          />
        )}

        {activePage === 'notes' && (
          <ShortNotes 
            materials={data.materials}
            notesData={data.notes}
            activeMaterialId={selectedMaterial ? selectedMaterial.id : data.materials[0].id}
            onSelectMaterial={(id) => {
              const m = data.materials.find(x => x.id === id);
              if (m) setSelectedMaterial(m);
            }}
            onStartQuiz={handleStartQuiz}
            onRegenerateNotes={(id) => {
              // Simulated regeneration
            }}
          />
        )}

        {activePage === 'quiz' && (
          <Quiz 
            quiz={activeQuiz}
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
            attemptsHistory={data.attemptsHistory}
            revisionQueue={data.revisionQueue}
            onStartRevisionQuiz={() => handleStartQuiz('revision')}
          />
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-400">
        Personal AI Study Buddy • Single-Subject Dedicated Workspace • Private Local Storage
      </footer>
    </div>
  );
}
