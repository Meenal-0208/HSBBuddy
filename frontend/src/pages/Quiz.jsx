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
  BookOpen
} from 'lucide-react';

export default function Quiz({ 
  quiz, 
  materials = [],
  activeMaterialId,
  onSelectMaterial,
  onSubmitQuiz, 
  onCancel 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [revealedHints, setRevealedHints] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If no quiz selected, show a popup modal deck picker
  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
        <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto shadow-inner">
            <HelpCircle className="w-8 h-8" />
          </div>

          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Interactive Pop-up Quiz
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-3">
              Select a Topic to Start Quiz
            </h2>
            <p className="text-xs text-slate-500 mt-1.5 max-w-md mx-auto leading-relaxed">
              Analytical and situational case questions testing real system design, error codes, and architectural trade-offs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2.5 text-left">
            {materials.map((m) => (
              <button
                key={m.id}
                onClick={() => onSelectMaterial(m.id)}
                className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/70 text-left transition group flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-slate-800 group-hover:text-blue-700">
                    {m.title}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {m.slidesCount > 0 ? `${m.slidesCount} slides covered` : 'Lecture deck'}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition" />
              </button>
            ))}

            <button
              onClick={() => onSelectMaterial(null)}
              className="p-3.5 rounded-xl border-2 border-dashed border-indigo-200 bg-indigo-50/50 hover:bg-indigo-100/60 text-left transition flex items-center justify-between"
            >
              <div>
                <div className="text-xs font-black text-indigo-900">
                  🌟 Comprehensive Quiz (All Topics Combined)
                </div>
                <div className="text-[11px] text-indigo-600">
                  Strategic cross-deck questions
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-indigo-500" />
            </button>
          </div>

          <button
            onClick={onCancel}
            className="text-xs font-bold text-slate-400 hover:text-slate-600"
          >
            Cancel and Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

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

  return (
    /* Fullscreen Modal Backdrop: Interactive Pop-up Quiz */
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-100 flex flex-col max-h-[92vh] overflow-hidden my-auto">
        
        {/* Modal Top Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="min-w-0 pr-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-500/30 text-blue-300 mb-1">
              <Sparkles className="w-3 h-3" />
              Pop-up Case Challenge
            </div>
            <h2 className="text-base sm:text-lg font-black truncate text-white">
              {quiz.title}
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Progress indicator */}
            <div className="hidden sm:block text-right">
              <div className="text-xs font-extrabold text-blue-400">
                Question {currentIndex + 1} of {total}
              </div>
              <div className="text-[10px] text-slate-400">
                {answeredCount} answered
              </div>
            </div>

            <button
              onClick={onCancel}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition"
              title="Close Quiz"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          {/* Tag & Type Header */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
              {currentQ.type === 'single' ? 'Single Choice Case' :
               currentQ.type === 'multiple' ? 'Multiple Selection (Select all)' : 'Logical True / False'}
            </span>
            {currentQ.conceptTag && (
              <span className="text-[11px] font-bold text-slate-500">
                Topic: {currentQ.conceptTag}
              </span>
            )}
          </div>

          {/* Prompt */}
          <div className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed whitespace-pre-wrap">
            {currentQ.prompt}
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt) => {
              const isSingleOrTF = currentQ.type === 'single' || currentQ.type === 'true_false';
              const isSelected = isSingleOrTF 
                ? userAnswers[currentQ.id] === opt.id
                : Array.isArray(userAnswers[currentQ.id]) && userAnswers[currentQ.id].includes(opt.id);

              return (
                <div
                  key={opt.id}
                  onClick={() => isSingleOrTF ? handleSingleSelect(opt.id) : handleMultipleSelect(opt.id)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-3.5 ${
                    isSelected 
                      ? 'border-blue-600 bg-blue-50 text-blue-950 font-semibold shadow-xs' 
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border font-bold text-xs shrink-0 mt-0.5 ${
                    isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 text-slate-400'
                  }`}>
                    {opt.id}
                  </div>
                  <div className="text-xs sm:text-sm leading-relaxed">{opt.text}</div>
                </div>
              );
            })}
          </div>

          {/* Hidden Hint Disclosure */}
          <div className="pt-1">
            {!revealedHints[currentQ.id] ? (
              <button
                onClick={toggleHint}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1.5 rounded-xl transition"
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                Need a strategic hint? (Does not reveal answer)
              </button>
            ) : (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold">Strategic Hint: </span>
                  {currentQ.hint}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Footer Navigation */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2 text-xs font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 rounded-xl transition flex items-center gap-1.5 disabled:opacity-30 shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          {!isLast ? (
            <button
              onClick={() => setCurrentIndex(prev => Math.min(total - 1, prev + 1))}
              className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition flex items-center gap-1.5 shadow"
            >
              Next Question <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              disabled={isSubmitting}
              className="px-6 py-2.5 text-xs font-black text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition flex items-center gap-2 shadow"
            >
              {isSubmitting ? 'Grading Answers...' : 'Submit Pop-up Quiz'}
              <CheckCircle className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
