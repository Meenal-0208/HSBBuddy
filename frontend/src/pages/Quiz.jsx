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
  RotateCcw,
  Heart
} from 'lucide-react';

import { HelloKitty, MyMelody, Kuromi, Cinnamoroll, Pompompurin, CuteStar, CuteBow } from '../components/SanrioStickers';

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
      <div className="fixed inset-0 z-50 bg-kitty-950/70 dark:bg-kuromi-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
        <div className="bg-white dark:bg-kuromi-900 rounded-3xl max-w-4xl w-full shadow-pop border-3 border-kitty-200 dark:border-kuromi-700 flex flex-col max-h-[92vh] overflow-hidden my-auto transition-colors relative">
          
          {/* Top Washi Tape Accent */}
          <div className="absolute top-2 left-12 w-28 h-4 washi-tape-pink -rotate-2 z-20 opacity-90 rounded-xs pointer-events-none" />
          <div className="absolute top-2 right-16 w-24 h-4 washi-tape-purple rotate-3 z-20 opacity-80 rounded-xs pointer-events-none" />

          {/* Header Banner */}
          <div className="p-6 sm:p-7 bg-gradient-to-r from-kitty-100 via-melody-100 to-pompom-100 dark:from-kuromi-950 dark:via-kuromi-900 dark:to-kuromi-950 border-b-2 border-kitty-200 dark:border-kuromi-700 relative shrink-0 pt-7">
            <div className="flex items-start justify-between">
              <div className="space-y-1.5 max-w-xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/90 dark:bg-kuromi-800 text-kitty-600 dark:text-kuromi-300 shadow-pop-sm border border-kitty-200 dark:border-kuromi-600 font-fredoka">
                  <CuteBow className="w-4 h-4" />
                  Product Management 2 • Master Case Quizzes
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-800 dark:text-white font-fredoka flex items-center gap-2">
                  <span>Select Lecture PPT & Quiz Set</span>
                  <CuteStar className="w-5 h-5 animate-spin-slow" />
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-quicksand font-bold">
                  50 questions per lecture deck divided into 5 targeted topic sets (10 questions each) • 2 Easy, 2 Medium & 1 Hard set!
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:block">
                  <MyMelody className="w-14 h-14 animate-bounce-gentle" />
                </div>
                <button
                  onClick={onCancel}
                  className="w-10 h-10 rounded-2xl bg-white dark:bg-kuromi-800 hover:bg-kitty-100 dark:hover:bg-kuromi-700 border-2 border-kitty-200 dark:border-kuromi-600 flex items-center justify-center text-slate-600 dark:text-slate-200 shadow-pop-sm transition font-bold"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Modal Interactive Content */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 bg-kitty-50/40 dark:bg-kuromi-950/60 transition-colors">
            
            {/* Step 1: Horizontal Deck Selector Cards */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-kuromi-300 flex items-center gap-2 font-fredoka">
                  <span className="w-6 h-6 rounded-full bg-kitty-500 text-white flex items-center justify-center text-xs font-black shadow-pop-sm">1</span>
                  Select Lecture PPT ({materials.length} Decks)
                </label>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {materials.map((m, idx) => {
                  const isSelected = (selectedDeckId === m.id) || (!selectedDeckId && idx === 0);

                  return (
                    <button
                      key={m.id}
                      onClick={() => setSelectedDeckId(m.id)}
                      className={`relative p-3.5 rounded-2xl border-2 text-left transition-all duration-200 flex flex-col justify-between ${
                        isSelected 
                          ? 'bg-white dark:bg-kuromi-800 border-kitty-500 dark:border-kuromi-400 shadow-pop translate-y-[-2px] ring-2 ring-kitty-400/20' 
                          : 'bg-white/80 dark:bg-kuromi-900/60 hover:bg-white dark:hover:bg-kuromi-800 border-kitty-100 dark:border-kuromi-800 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full font-fredoka ${
                          isSelected ? 'bg-kitty-500 text-white shadow-pop-sm' : 'bg-kitty-100 dark:bg-kuromi-800 text-slate-500 dark:text-slate-400'
                        }`}>
                          Deck {idx + 1}
                        </span>
                        <div className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-kitty-500 animate-pulse' : 'bg-transparent'}`} />
                      </div>
                      <div className="text-xs font-black text-slate-900 dark:text-white leading-snug line-clamp-2 font-fredoka">
                        {m.title}
                      </div>
                      <div className="text-[10px] text-kitty-600 dark:text-kuromi-400 font-bold mt-2 font-quicksand flex items-center gap-1">
                        <Heart className="w-2.5 h-2.5 fill-kitty-400 text-kitty-400" /> 50 Questions
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: 5 Targeted Quiz Sets for Active Deck */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-kuromi-300 flex items-center gap-2 font-fredoka">
                  <span className="w-6 h-6 rounded-full bg-melody-500 text-white flex items-center justify-center text-xs font-black shadow-pop-sm">2</span>
                  Select Topic Set (10 Questions Each)
                </label>
                <span className="text-xs font-black text-melody-600 dark:text-kuromi-300 bg-melody-50 dark:bg-kuromi-800/80 border-2 border-melody-200 dark:border-kuromi-700 px-3 py-1 rounded-full font-fredoka shadow-pop-sm">
                  {deckQuizzes.length} Topic Sets Ready ✨
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {deckQuizzes.map((qSet, idx) => {
                  let diff = "Easy";
                  if (qSet.title.toLowerCase().includes("[hard]")) diff = "Hard";
                  else if (qSet.title.toLowerCase().includes("[medium]")) diff = "Medium";

                  const diffBadge = diff === "Hard"
                    ? { bg: "bg-kuromi-100 dark:bg-kuromi-900 text-kuromi-600 dark:text-kuromi-300 border-kuromi-300 dark:border-kuromi-600", dot: "bg-kuromi-500", label: "Kuromi Hard", icon: <Kuromi className="w-4 h-4 shrink-0" /> }
                    : diff === "Medium"
                    ? { bg: "bg-pompom-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-pompom-300 dark:border-amber-700", dot: "bg-pompom-400", label: "Purin Medium", icon: <Pompompurin className="w-4 h-4 shrink-0" /> }
                    : { bg: "bg-kitty-100 dark:bg-kitty-950/60 text-kitty-600 dark:text-kitty-300 border-kitty-200 dark:border-kitty-700", dot: "bg-kitty-500", label: "Kitty Easy", icon: <HelloKitty className="w-4 h-4 shrink-0" /> };

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
                      className="p-4 rounded-2xl border-2 border-kitty-200 dark:border-kuromi-700 hover:border-kitty-500 dark:hover:border-kuromi-400 bg-white dark:bg-kuromi-900/90 hover:bg-kitty-50/50 dark:hover:bg-kuromi-800/90 text-left transition-all duration-200 shadow-pop-sm hover:shadow-pop group flex items-center justify-between gap-3.5 relative overflow-hidden"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-10 h-10 rounded-2xl bg-melody-100 dark:bg-kuromi-800 text-melody-600 dark:text-kuromi-300 flex items-center justify-center font-black text-sm shrink-0 group-hover:bg-melody-500 group-hover:text-white transition duration-200 shadow-inner font-fredoka">
                          {idx + 1}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-black text-slate-800 dark:text-white group-hover:text-melody-600 dark:group-hover:text-kuromi-300 truncate leading-snug font-fredoka">
                            {cleanTitle}
                          </div>
                          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                            <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 font-fredoka ${diffBadge.bg}`}>
                              {diffBadge.icon}
                              {diffBadge.label}
                            </span>
                            <span className="text-[10px] font-black text-melody-600 dark:text-kuromi-300 bg-melody-50 dark:bg-kuromi-950/60 border border-melody-200 dark:border-kuromi-800 px-2 py-0.5 rounded-full font-fredoka">
                              10 Questions
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-kitty-100 dark:bg-kuromi-800 group-hover:bg-kitty-500 text-kitty-600 dark:text-kuromi-300 group-hover:text-white flex items-center justify-center shrink-0 transition shadow-pop-sm">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-5 bg-white dark:bg-kuromi-900 border-t-2 border-kitty-200 dark:border-kuromi-700 flex items-center justify-between shrink-0 transition-colors">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 font-quicksand flex items-center gap-1.5">
              <CuteBow className="w-3.5 h-3.5 text-kitty-500" />
              Pick any topic set to begin your 10-question Sanrio study session!
            </span>
            <button
              onClick={onCancel}
              className="px-5 py-2 text-xs font-black text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition font-fredoka bg-slate-100 dark:bg-kuromi-800 rounded-xl hover:bg-slate-200"
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
    <div className="fixed inset-0 z-50 bg-kitty-950/70 dark:bg-kuromi-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white dark:bg-kuromi-900 rounded-3xl max-w-3xl w-full shadow-pop border-3 border-kitty-200 dark:border-kuromi-700 flex flex-col max-h-[92vh] overflow-hidden my-auto relative">
        
        {/* Top Washi Tape */}
        <div className="absolute top-2 right-12 w-24 h-3.5 washi-tape-yellow rotate-2 z-20 opacity-80 rounded-xs pointer-events-none" />

        {/* Sleek Top Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-kitty-100 via-melody-100 to-pompom-100 dark:from-kuromi-950 dark:via-kuromi-900 dark:to-kuromi-950 border-b-2 border-kitty-200 dark:border-kuromi-700 text-slate-800 dark:text-white shrink-0 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                {(() => {
                  let diff = "Easy";
                  if (quiz.title.toLowerCase().includes("[hard]")) diff = "Hard";
                  else if (quiz.title.toLowerCase().includes("[medium]")) diff = "Medium";

                  const badge = diff === "Hard"
                    ? "bg-kuromi-100 dark:bg-kuromi-800 text-kuromi-600 dark:text-kuromi-300 border-kuromi-300 dark:border-kuromi-600"
                    : diff === "Medium"
                    ? "bg-pompom-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-pompom-300 dark:border-amber-700"
                    : "bg-kitty-100 dark:bg-kitty-950 text-kitty-600 dark:text-kitty-300 border-kitty-300 dark:border-kitty-700";

                  return (
                    <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-black uppercase border font-fredoka shadow-pop-sm ${badge}`}>
                      <CuteStar className="w-3.5 h-3.5" />
                      {diff} Level
                    </span>
                  );
                })()}

                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-white/90 dark:bg-kuromi-800 text-melody-600 dark:text-kuromi-300 border border-melody-200 dark:border-kuromi-600 font-fredoka shadow-pop-sm">
                  <Sparkles className="w-3 h-3 text-melody-500" />
                  10 Questions
                </span>

                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-black uppercase tracking-wider ml-1 font-fredoka">
                  Set:
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
                  className="bg-white dark:bg-kuromi-800 text-slate-800 dark:text-kuromi-200 border-2 border-kitty-200 dark:border-kuromi-600 text-xs font-bold rounded-xl px-2.5 py-1 focus:ring-2 focus:ring-kitty-400 focus:outline-none cursor-pointer max-w-[240px] truncate shadow-pop-sm font-fredoka"
                >
                  {quizzes.map((q) => (
                    <option key={q.id} value={q.id} className="bg-white dark:bg-kuromi-900 text-slate-900 dark:text-white">
                      {q.title}
                    </option>
                  ))}
                </select>
              </div>

              <h2 className="text-sm sm:text-base font-black truncate text-slate-900 dark:text-white tracking-tight font-fredoka">
                {quiz.title}
              </h2>
            </div>

            <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
              {/* Question Count Pill */}
              <div className="text-right">
                <div className="text-xs font-black text-kitty-600 dark:text-kuromi-300 font-fredoka">
                  Question {currentIndex + 1} of {total}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold font-quicksand">
                  {answeredCount} answered
                </div>
              </div>

              <button
                onClick={onCancel}
                className="w-8 h-8 rounded-full bg-white dark:bg-kuromi-800 hover:bg-kitty-100 dark:hover:bg-kuromi-700 border border-kitty-200 dark:border-kuromi-600 flex items-center justify-center text-slate-600 dark:text-slate-200 shadow-pop-sm transition font-bold"
                title="Exit Quiz"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Smooth Linear Progress Bar */}
          <div className="w-full bg-white/70 dark:bg-kuromi-950 h-2 rounded-full mt-3 overflow-hidden border border-kitty-200 dark:border-kuromi-800 p-0.5">
            <div 
              className="bg-gradient-to-r from-kitty-400 via-melody-400 to-pompom-400 h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 bg-kitty-50/30 dark:bg-kuromi-950/60 transition-colors">
          
          {/* Question Category & Topic Badge */}
          <div className="flex items-center justify-between gap-2 border-b-2 border-kitty-100 dark:border-kuromi-800 pb-3 flex-wrap">
            <span className="text-[10px] font-black uppercase px-3 py-1 rounded-full bg-melody-50 dark:bg-kuromi-900 text-melody-600 dark:text-kuromi-300 border border-melody-200 dark:border-kuromi-700 font-fredoka shadow-pop-sm flex items-center gap-1.5">
              <CuteBow className="w-3.5 h-3.5" />
              {currentQ.question_type === 'single' ? 'Single Choice Case' :
               currentQ.question_type === 'multiple' ? 'Multiple Choice (Select all)' : 'Logical True / False'}
            </span>
            {currentQ.concept_tag && (
              <span className="text-xs font-black text-slate-600 dark:text-slate-400 flex items-center gap-1.5 font-fredoka">
                <Target className="w-3.5 h-3.5 text-kitty-500" />
                {currentQ.concept_tag}
              </span>
            )}
          </div>

          {/* Case Prompt */}
          <div className="text-sm sm:text-base font-black text-slate-800 dark:text-slate-100 leading-relaxed whitespace-pre-wrap bg-white dark:bg-kuromi-900 p-4 sm:p-5 rounded-2xl border-2 border-kitty-200 dark:border-kuromi-700 shadow-pop font-quicksand">
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
                      ? 'border-kitty-500 dark:border-kuromi-400 bg-kitty-100/70 dark:bg-kuromi-800/80 text-kitty-950 dark:text-white font-black shadow-pop scale-[1.01]' 
                      : 'border-kitty-100 dark:border-kuromi-800 hover:border-kitty-300 dark:hover:border-kuromi-700 bg-white dark:bg-kuromi-900/60 hover:bg-kitty-50/50 dark:hover:bg-kuromi-800/50 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-xl flex items-center justify-center border-2 font-black text-xs shrink-0 mt-0.5 transition font-fredoka ${
                    isSelected 
                      ? 'bg-kitty-500 border-kitty-500 text-white shadow-pop-sm' 
                      : 'border-kitty-200 dark:border-kuromi-700 text-slate-400 dark:text-slate-500 bg-white dark:bg-kuromi-800'
                  }`}>
                    {opt.id}
                  </div>
                  <div className="text-xs sm:text-sm leading-relaxed pt-0.5 font-bold font-quicksand">{opt.text}</div>
                </div>
              );
            })}
          </div>

          {/* Hidden Strategic Hint Accordion */}
          <div className="pt-1">
            {!revealedHints[currentQ.id] ? (
              <button
                onClick={toggleHint}
                className="inline-flex items-center gap-2 text-xs font-black text-amber-800 dark:text-amber-300 bg-pompom-100 dark:bg-amber-950/50 hover:bg-pompom-200 border-2 border-pompom-300 dark:border-amber-700 px-3.5 py-2 rounded-xl transition shadow-pop-sm font-fredoka"
              >
                <Pompompurin className="w-4 h-4 shrink-0" />
                Need a study hint from Pompompurin? (Does not reveal answer)
              </button>
            ) : (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-pompom-100 to-amber-100 dark:from-amber-950/60 dark:to-orange-950/40 border-2 border-pompom-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 text-xs leading-relaxed flex items-start gap-3 shadow-pop font-quicksand">
                <Pompompurin className="w-6 h-6 shrink-0 mt-0.5" />
                <div>
                  <div className="font-black text-amber-950 dark:text-amber-300 uppercase tracking-wide text-[10px] mb-0.5 font-fredoka">Strategic Hint</div>
                  {currentQ.hint}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Modal Bottom Footer Navigation */}
        <div className="p-4 sm:p-5 bg-white dark:bg-kuromi-900 border-t-2 border-kitty-200 dark:border-kuromi-700 flex items-center justify-between shrink-0 transition-colors">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2.5 text-xs font-black text-slate-600 dark:text-slate-300 bg-white dark:bg-kuromi-800 border-2 border-kitty-200 dark:border-kuromi-700 hover:bg-kitty-100 dark:hover:bg-kuromi-700 rounded-xl transition flex items-center gap-1.5 disabled:opacity-30 shadow-pop-sm font-fredoka"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          {!isLast ? (
            <button
              onClick={() => setCurrentIndex(prev => Math.min(total - 1, prev + 1))}
              className="px-6 py-2.5 text-xs font-black text-white bg-kitty-500 hover:bg-kitty-600 rounded-xl transition flex items-center gap-2 shadow-pop hover:shadow-pop-sm active:scale-95 font-fredoka"
            >
              Next Question <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              disabled={isSubmitting}
              className="px-6 py-2.5 text-xs font-black text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl transition flex items-center gap-2 shadow-pop hover:shadow-pop-sm active:scale-95 font-fredoka"
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
