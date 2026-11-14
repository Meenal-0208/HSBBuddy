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
      <div className={`p-8 rounded-2xl border text-center shadow-sm transition-colors ${
        isPassing 
          ? 'bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/40 dark:to-slate-900 border-emerald-200 dark:border-emerald-800' 
          : 'bg-gradient-to-b from-amber-50 to-white dark:from-amber-950/40 dark:to-slate-900 border-amber-200 dark:border-amber-800'
      }`}>
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
          isPassing ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400' : 'bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400'
        }`}>
          <Award className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Quiz Results & Feedback
        </span>
        <h1 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{quizTitle}</h1>

        <div className="mt-4 flex items-baseline justify-center gap-2">
          <span className="text-5xl font-black text-slate-900 dark:text-white">{score}%</span>
          <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            ({correctCount} of {totalQuestions} correct)
          </span>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto mt-2">
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
            className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
          >
            <RotateCcw className="w-4 h-4" /> Retake Quiz
          </button>

          <button
            onClick={onGoHome}
            className="px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold transition"
          >
            Dashboard
          </button>
        </div>
      </div>

      {/* Question by Question Detailed Breakdown */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">Detailed Explanations & Answer Analysis</h3>

        {details && details.map((item, index) => (
          <div 
            key={item.questionId || index}
            className={`p-6 rounded-2xl border bg-white dark:bg-slate-900 shadow-xs space-y-4 transition-colors ${
              item.isCorrect 
                ? 'border-emerald-200 dark:border-emerald-800/80' 
                : 'border-rose-200 dark:border-rose-800/80'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2">
                {item.isCorrect ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-300">
                    <XCircle className="w-3.5 h-3.5" /> Incorrect
                  </span>
                )}
                <span className="text-xs text-slate-400 dark:text-slate-500 font-bold">Q{index + 1}</span>
              </div>

              {item.sourceRef && (
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                  Source: {item.sourceRef}
                </span>
              )}
            </div>

            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
              {item.prompt}
            </h4>

            {/* Answer Comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-1">Your Answer</span>
                <span className={`font-semibold ${item.isCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                  {Array.isArray(item.userAnswer) ? item.userAnswer.join(', ') : (item.userAnswer || 'No answer selected')}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                <span className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400 block mb-1">Correct Key</span>
                <span className="font-semibold text-emerald-900 dark:text-emerald-200">
                  {Array.isArray(item.correctAnswer) ? item.correctAnswer.join(', ') : item.correctAnswer}
                </span>
              </div>
            </div>

            {/* AI Grounded Explanation */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="font-bold text-slate-900 dark:text-white">Explanation: </span>
              {item.explanation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
