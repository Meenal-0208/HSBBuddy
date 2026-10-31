import React, { useState } from 'react';
import { 
  HelpCircle, 
  Lightbulb, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle, 
  AlertCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Quiz({ 
  quiz, 
  onSubmitQuiz, 
  onCancel 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [questionId]: optionId or array of optionIds }
  const [revealedHints, setRevealedHints] = useState({}); // { [questionId]: boolean }
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
        <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-2" />
        <h3 className="text-base font-bold text-slate-800">No Quiz Selected</h3>
        <p className="text-xs text-slate-500 mt-1">Please select a course material to start an active recall quiz.</p>
        <button onClick={onCancel} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold">
          Back to Dashboard
        </button>
      </div>
    );
  }

  const currentQ = quiz.questions[currentIndex];
  const total = quiz.questions.length;
  const isLast = currentIndex === total - 1;

  // Single select handler
  const handleSingleSelect = (optionId) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionId
    }));
  };

  // Multiple select handler (checkboxes)
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
        source: quiz.sourceMaterial,
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
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Quiz Progress Top Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
            {quiz.sourceMaterial}
          </span>
          <h2 className="text-base font-bold text-slate-900">{quiz.title}</h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs font-bold text-slate-800">
              Question {currentIndex + 1} of {total}
            </div>
            <div className="text-[11px] text-slate-400">
              {answeredCount} of {total} answered
            </div>
          </div>
          <button
            onClick={onCancel}
            className="text-xs text-slate-400 hover:text-slate-600 font-semibold px-2 py-1 rounded"
          >
            Exit
          </button>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
        {/* Question Type & Source Pill */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 uppercase">
            {currentQ.type === 'single' ? 'Single Choice MCQ' :
             currentQ.type === 'multiple' ? 'Multiple Selection (Select all)' : 'True / False'}
          </span>
          {currentQ.conceptTag && (
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
              Tag: {currentQ.conceptTag}
            </span>
          )}
        </div>

        {/* Prompt */}
        <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
          {currentQ.prompt}
        </h3>

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
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-3.5 ${
                  isSelected 
                    ? 'border-blue-600 bg-blue-50/70 text-blue-950 font-semibold shadow-xs' 
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border font-bold text-xs ${
                  isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 text-slate-400'
                }`}>
                  {opt.id}
                </div>
                <div className="text-sm leading-relaxed">{opt.text}</div>
              </div>
            );
          })}
        </div>

        {/* Hidden Hint Accordion */}
        <div className="pt-2">
          {!revealedHints[currentQ.id] ? (
            <button
              onClick={toggleHint}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1.5 rounded-lg transition"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
              Need a hint? (Does not reveal answer)
            </button>
          ) : (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start gap-3">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Hint: </span>
                {currentQ.hint}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition flex items-center gap-1.5 disabled:opacity-30"
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
              {isSubmitting ? 'Submitting & Grading...' : 'Submit Quiz for Grading'}
              <CheckCircle className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
