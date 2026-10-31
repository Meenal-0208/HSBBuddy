import React from 'react';
import { 
  BarChart2, 
  TrendingUp, 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  RotateCcw,
  BookOpen,
  Calendar
} from 'lucide-react';

export default function Progress({ 
  attemptsHistory, 
  revisionQueue, 
  onStartRevisionQuiz 
}) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Study Progress & Retention</h1>
        <p className="text-sm text-slate-500">
          Track attempt history, identify recurring misconceptions, and drill targeted revision quizzes.
        </p>
      </div>

      {/* Grid: Weak Concepts on Left, Attempt Log on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Revision Queue */}
        <div className="lg:col-span-1 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              <h2 className="text-base font-bold text-slate-900">Concepts to Revise</h2>
            </div>
            <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
              {revisionQueue.length}
            </span>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed">
            A concept is marked as mastered only after repeated correct recall across multiple attempts.
          </p>

          <div className="space-y-3">
            {revisionQueue.map((item) => (
              <div key={item.id} className="p-3.5 rounded-xl border border-amber-200/80 bg-amber-50/40 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">{item.concept}</h4>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 shrink-0">
                    {item.missCount} Misses
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-amber-100">
                  <span className="truncate max-w-[140px]">{item.sourceMaterial}</span>
                  <span>{item.status}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onStartRevisionQuiz}
            className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow flex items-center justify-center gap-2 transition"
          >
            <RotateCcw className="w-4 h-4" /> Practice Revision Deck
          </button>
        </div>

        {/* Right 2 Columns: Past Quiz Attempts Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">Quiz History & Scores</h2>
              <p className="text-xs text-slate-400">Past quiz performances recorded in SQLite</p>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {attemptsHistory.map((att) => (
              <div key={att.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">{att.quizTitle}</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>{att.source}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date(att.date).toLocaleDateString()}
                    </span>
                  </div>
                  {att.missedConcepts && att.missedConcepts.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {att.missedConcepts.map((c, i) => (
                        <span key={i} className="text-[10px] font-medium bg-rose-50 text-rose-700 px-2 py-0.5 rounded-md border border-rose-100">
                          Missed: {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 self-end sm:self-center">
                  <div className="text-right">
                    <div className={`text-lg font-black ${
                      att.score >= 70 ? 'text-emerald-600' : 'text-amber-600'
                    }`}>
                      {att.score}%
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium">
                      {att.correctCount}/{att.totalQuestions} Correct
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
