import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  ArrowRight, 
  RotateCcw, 
  BookOpen, 
  HelpCircle 
} from 'lucide-react';

export default function Results({ 
  result, 
  onRetake, 
  onReviseMistakes, 
  onGoHome 
}) {
  if (!result) {
    return (
      <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
        <p className="text-sm text-slate-500">No recent quiz result found.</p>
        <button onClick={onGoHome} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold">
          Go to Dashboard
        </button>
      </div>
    );
  }

  const { quizTitle, score, correctCount, totalQuestions, details, missedConcepts } = result;
  const isPassing = score >= 70;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Score Header Card */}
      <div className={`p-8 rounded-2xl border text-center shadow-sm ${
        isPassing 
          ? 'bg-gradient-to-b from-emerald-50 to-white border-emerald-200' 
          : 'bg-gradient-to-b from-amber-50 to-white border-amber-200'
      }`}>
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
          isPassing ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
        }`}>
          <Award className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Quiz Results & Feedback
        </span>
        <h1 className="text-2xl font-black text-slate-900 mt-1">{quizTitle}</h1>

        <div className="mt-4 flex items-baseline justify-center gap-2">
          <span className="text-5xl font-black text-slate-900">{score}%</span>
          <span className="text-sm font-semibold text-slate-500">
            ({correctCount} of {totalQuestions} correct)
          </span>
        </div>

        <p className="text-xs text-slate-600 max-w-md mx-auto mt-2">
          {isPassing 
            ? 'Great performance! You demonstrated solid grasp of the core lecture mechanisms.' 
            : 'Review the explanations below and hit "Revise Mistakes" to practise weak areas.'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          {missedConcepts && missedConcepts.length > 0 && (
            <button
              onClick={onReviseMistakes}
              className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-2 transition"
            >
              <AlertCircle className="w-4 h-4" />
              Revise Mistakes ({missedConcepts.length} concepts)
            </button>
          )}

          <button
            onClick={onRetake}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
          >
            <RotateCcw className="w-4 h-4" /> Retake Quiz
          </button>

          <button
            onClick={onGoHome}
            className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold transition"
          >
            Dashboard
          </button>
        </div>
      </div>

      {/* Question by Question Detailed Breakdown */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900">Detailed Explanations & Answer Analysis</h3>

        {details && details.map((item, index) => (
          <div 
            key={item.questionId || index}
            className={`p-6 rounded-2xl border bg-white shadow-xs space-y-4 ${
              item.isCorrect ? 'border-emerald-200' : 'border-rose-200'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2">
                {item.isCorrect ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800">
                    <XCircle className="w-3.5 h-3.5" /> Incorrect
                  </span>
                )}
                <span className="text-xs text-slate-400 font-bold">Q{index + 1}</span>
              </div>

              {item.sourceRef && (
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  Source: {item.sourceRef}
                </span>
              )}
            </div>

            <h4 className="text-sm font-bold text-slate-900 leading-snug">
              {item.prompt}
            </h4>

            {/* Answer Comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Your Answer</span>
                <span className={`font-semibold ${item.isCorrect ? 'text-emerald-700' : 'text-rose-600'}`}>
                  {Array.isArray(item.userAnswer) ? item.userAnswer.join(', ') : (item.userAnswer || 'No answer selected')}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <span className="text-[10px] uppercase font-bold text-emerald-700 block mb-1">Correct Key</span>
                <span className="font-semibold text-emerald-900">
                  {Array.isArray(item.correctAnswer) ? item.correctAnswer.join(', ') : item.correctAnswer}
                </span>
              </div>
            </div>

            {/* AI Grounded Explanation */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
              <span className="font-bold text-slate-900">Explanation: </span>
              {item.explanation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
