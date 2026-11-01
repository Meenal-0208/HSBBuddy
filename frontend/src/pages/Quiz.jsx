import React, { useState } from 'react';
import { 
  HelpCircle, 
  Lightbulb, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle, 
  X, 
  Sparkles,
  Layers,
  Award,
  BookOpen,
  Compass,
  Zap,
  Target,
  ArrowRight,
  RotateCcw
} from 'lucide-react';

export default function Quiz({ 
  quiz, 
  quizzes = [],
  materials = [],
  activeMaterialId,
  onSelectQuiz,
  onSelectMaterial,
  onSubmitQuiz, 
  onCancel 
}) {
  const [selectedDeckId, setSelectedDeckId] = useState(activeMaterialId || (materials[0] ? materials[0].id : null));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [revealedHints, setRevealedHints] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Deck color accent palette for sleek visual distinction
  const deckThemes = [
    { bg: "from-blue-600 to-indigo-700", ring: "ring-blue-500", light: "bg-blue-50 text-blue-700 border-blue-200" },
    { bg: "from-emerald-600 to-teal-700", ring: "ring-emerald-500", light: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { bg: "from-purple-600 to-fuchsia-700", ring: "ring-purple-500", light: "bg-purple-50 text-purple-700 border-purple-200" },
    { bg: "from-amber-500 to-orange-600", ring: "ring-amber-500", light: "bg-amber-50 text-amber-700 border-amber-200" },
    { bg: "from-rose-600 to-pink-700", ring: "ring-rose-500", light: "bg-rose-50 text-rose-700 border-rose-200" }
  ];

  // =========================================================================
  // 1. TOPIC & SETS PICKER MODAL (WHEN NO QUIZ IS ACTIVE)
  // =========================================================================
  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    const activeDeck = materials.find(m => m.id === selectedDeckId) || materials[0];
    const activeDeckIdx = materials.findIndex(m => m.id === (activeDeck ? activeDeck.id : null));
    const deckTheme = deckThemes[Math.max(0, activeDeckIdx) % deckThemes.length];
    const deckQuizzes = quizzes.filter(q => q.material_id === (activeDeck ? activeDeck.id : null));

    return (
      <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
        <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-100 flex flex-col max-h-[92vh] overflow-hidden my-auto">
          
          {/* Header Banner */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white relative shrink-0">
            <div className="flex items-start justify-between">
              <div className="space-y-1.5 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/10 text-blue-300 backdrop-blur-md border border-white/10">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  Product Management 2 • Master Case Quizzes
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  Select Lecture PPT & Quiz Set
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  50 questions per lecture deck divided into 5 targeted topic sets (10 questions each) covering the entire syllabus.
                </p>
              </div>

              <button
                onClick={onCancel}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition backdrop-blur-md"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Interactive Content */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 bg-slate-50/60">
            
            {/* Step 1: Horizontal Deck Selector Cards */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] font-black">1</span>
                  Select Lecture PPT ({materials.length} Decks)
                </label>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {materials.map((m, idx) => {
                  const isSelected = (selectedDeckId === m.id) || (!selectedDeckId && idx === 0);
                  const theme = deckThemes[idx % deckThemes.length];

                  return (
                    <button
                      key={m.id}
                      onClick={() => setSelectedDeckId(m.id)}
                      className={`relative p-3.5 rounded-2xl border-2 text-left transition-all duration-200 flex flex-col justify-between ${
                        isSelected 
                          ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-500/20 translate-y-[-2px]' 
                          : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                        }`}>
                          Deck {idx + 1}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-blue-600 animate-pulse' : 'bg-transparent'}`} />
                      </div>
                      <div className="text-xs font-extrabold text-slate-900 leading-snug line-clamp-2">
                        {m.title}
                      </div>
                      <div className="text-[10px] text-slate-400 font-semibold mt-2">
                        50 Questions
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: 5 Targeted Quiz Sets for Active Deck */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[11px] font-black">2</span>
                  Select Topic Set (10 Questions Each)
                </label>
                <span className="text-xs font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                  {deckQuizzes.length} Topic Sets Available
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deckQuizzes.map((qSet, idx) => {
                  const cleanTitle = qSet.title.includes("•") 
                    ? qSet.title.split("•")[1].trim() 
                    : qSet.title;

                  return (
                    <button
                      key={qSet.id}
                      onClick={() => {
                        if (onSelectQuiz) {
                          onSelectQuiz(qSet.id);
                        } else {
                          onSelectMaterial(qSet.id);
                        }
                      }}
                      className="p-4 rounded-2xl border-2 border-slate-200 hover:border-indigo-600 bg-white hover:bg-indigo-50/40 text-left transition-all duration-200 shadow-xs hover:shadow-md group flex items-center justify-between gap-3.5"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black text-sm shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition duration-200 shadow-inner">
                          {idx + 1}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-indigo-700 truncate leading-snug">
                            {cleanTitle}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full">
                              10 Questions
                            </span>
                            <span className="text-[11px] text-slate-400 font-medium">
                              Case Scenarios
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-indigo-600 text-slate-400 group-hover:text-white flex items-center justify-center shrink-0 transition">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex items-center justify-between shrink-0">
            <span className="text-xs font-semibold text-slate-400">
              Pick any topic set to begin your 10-question case review.
            </span>
            <button
              onClick={onCancel}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition"
            >
              Cancel
            </button>
          </div>

        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. ACTIVE QUIZ MODAL VIEW (10 QUESTIONS WITH PROGRESS & CONTROLS)
  // =========================================================================
  const currentQ = quiz.questions[currentIndex];
  const total = quiz.questions.length;
  const isLast = currentIndex === total - 1;

  const handleSingleSelect = (optionId) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionId
    }));
  };

  const handleMultipleSelect = (optionId) => {
    const currentList = Array.isArray(userAnswers[currentQ.id]) ? userAnswers[currentQ.id] : [];
    let updated;
    if (currentList.includes(optionId)) {
      updated = currentList.filter(id => id !== optionId);
    } else {
      updated = [...currentList, optionId];
    }
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: updated
    }));
  };

  const toggleHint = () => {
    setRevealedHints(prev => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id]
    }));
  };

  const handleFinish = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitQuiz({
        quizId: quiz.id,
        quizTitle: quiz.title,
        source: quiz.sourceMaterial || "Course Lecture Deck",
        answers: userAnswers,
        quiz
      });
    }, 600);
  };

  const answeredCount = Object.keys(userAnswers).filter(k => {
    const ans = userAnswers[k];
    return Array.isArray(ans) ? ans.length > 0 : !!ans;
  }).length;

  const progressPercentage = Math.round(((currentIndex + 1) / total) * 100);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-100 flex flex-col max-h-[92vh] overflow-hidden my-auto">
        
        {/* Sleek Top Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  10-Question Case Challenge
                </span>

                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Jump to Set:
                </span>
                
                {/* Instant Set Switcher Dropdown */}
                <select
                  value={quiz.id}
                  onChange={(e) => {
                    if (onSelectQuiz) {
                      onSelectQuiz(e.target.value);
                    } else {
                      onSelectMaterial(e.target.value);
                    }
                  }}
                  className="bg-slate-800/90 text-blue-200 border border-slate-700 text-xs font-bold rounded-xl px-2.5 py-1 focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer max-w-[240px] truncate"
                >
                  {quizzes.map((q) => (
                    <option key={q.id} value={q.id} className="bg-slate-900 text-white">
                      {q.title}
                    </option>
                  ))}
                </select>
              </div>

              <h2 className="text-sm sm:text-base font-black truncate text-white tracking-tight">
                {quiz.title}
              </h2>
            </div>

            <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
              {/* Question Count Pill */}
              <div className="text-right">
                <div className="text-xs font-black text-blue-400">
                  Question {currentIndex + 1} of {total}
                </div>
                <div className="text-[10px] text-slate-400 font-bold">
                  {answeredCount} answered
                </div>
              </div>

              <button
                onClick={onCancel}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition"
                title="Exit Quiz"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Smooth Linear Progress Bar */}
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 bg-white">
          
          {/* Question Category & Topic Badge */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3 flex-wrap">
            <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
              {currentQ.question_type === 'single' ? '🎯 Single Choice Case' :
               currentQ.question_type === 'multiple' ? '☑️ Multiple Choice (Select all)' : '⚖️ Logical True / False'}
            </span>
            {currentQ.concept_tag && (
              <span className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-indigo-500" />
                {currentQ.concept_tag}
              </span>
            )}
          </div>

          {/* Case Prompt */}
          <div className="text-sm sm:text-base font-extrabold text-slate-900 leading-relaxed whitespace-pre-wrap bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-inner">
            {currentQ.prompt}
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {currentQ.options.map((opt) => {
              const isSingleOrTF = currentQ.question_type === 'single' || currentQ.question_type === 'true_false';
              const isSelected = isSingleOrTF 
                ? userAnswers[currentQ.id] === opt.id
                : Array.isArray(userAnswers[currentQ.id]) && userAnswers[currentQ.id].includes(opt.id);

              return (
                <div
                  key={opt.id}
                  onClick={() => isSingleOrTF ? handleSingleSelect(opt.id) : handleMultipleSelect(opt.id)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex items-start gap-3.5 ${
                    isSelected 
                      ? 'border-indigo-600 bg-indigo-50/70 text-indigo-950 font-bold shadow-xs scale-[1.005]' 
                      : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50/80 text-slate-700'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-xl flex items-center justify-center border-2 font-black text-xs shrink-0 mt-0.5 transition ${
                    isSelected 
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs' 
                      : 'border-slate-300 text-slate-400 bg-white'
                  }`}>
                    {opt.id}
                  </div>
                  <div className="text-xs sm:text-sm leading-relaxed pt-0.5">{opt.text}</div>
                </div>
              );
            })}
          </div>

          {/* Hidden Strategic Hint Accordion */}
          <div className="pt-1">
            {!revealedHints[currentQ.id] ? (
              <button
                onClick={toggleHint}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100/80 border border-amber-200 px-3.5 py-2 rounded-xl transition shadow-xs"
              >
                <Lightbulb className="w-4 h-4 text-amber-600 animate-pulse" />
                Need a strategic hint? (Does not reveal answer)
              </button>
            ) : (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start gap-3 shadow-xs">
                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-black text-amber-950 uppercase tracking-wide text-[10px] mb-0.5">Strategic Hint</div>
                  {currentQ.hint}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Modal Bottom Footer Navigation */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2.5 text-xs font-extrabold text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 rounded-xl transition flex items-center gap-1.5 disabled:opacity-30 shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          {!isLast ? (
            <button
              onClick={() => setCurrentIndex(prev => Math.min(total - 1, prev + 1))}
              className="px-6 py-2.5 text-xs font-black text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95"
            >
              Next Question <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              disabled={isSubmitting}
              className="px-6 py-2.5 text-xs font-black text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95"
            >
              {isSubmitting ? 'Grading Challenge...' : 'Submit 10-Question Set'}
              <CheckCircle className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
