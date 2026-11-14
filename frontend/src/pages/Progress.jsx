import React from 'react';
import { 
  BarChart2, 
  TrendingUp, 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  RotateCcw,
  BookOpen,
  Calendar,
  Sparkles,
  Trophy,
  Zap,
  Target
} from 'lucide-react';

import { 
  HelloKitty, 
  MyMelody, 
  Kuromi, 
  Cinnamoroll, 
  Pompompurin, 
  CuteStar, 
  CuteBow,
  CuteHeart,
  PaperClip,
  PopStamp 
} from '../components/SanrioStickers';

export default function Progress({ 
  attemptsHistory, 
  revisionQueue, 
  onStartRevisionQuiz 
}) {
  const avgScore = attemptsHistory.length > 0 
    ? Math.round(attemptsHistory.reduce((acc, a) => acc + a.score, 0) / attemptsHistory.length)
    : 75;

  return (
    <div className="space-y-8 relative">
      {/* Decorative Washi Tape */}
      <div className="washi-tape-mint absolute -top-4 right-14 w-28 h-5 rotate-[2deg] rounded-sm pointer-events-none z-10 hidden sm:block" />

      {/* Header Banner */}
      <div className="relative bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 dark:from-kuromi-900 dark:via-purple-950 dark:to-slate-900 p-7 sm:p-9 rounded-3xl border-3 border-ink-900 shadow-pop flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
        <div className="washi-tape-striped absolute -top-1 left-12 w-32 h-5 rotate-[-2deg] rounded-sm pointer-events-none z-20" />
        
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <PopStamp text="SCORE TRACKER" color="border-purple-600 text-purple-700 bg-white" rotate="-rotate-2" />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-kuromi-800 text-ink-900 dark:text-white border-2 border-ink-900 text-xs font-fredoka font-black shadow-pop-sm">
              <Trophy className="w-4 h-4 text-amber-500" />
              Recall Mastery
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-fredoka font-black tracking-tight text-ink-900 dark:text-white">
            Study Progress & Retention Log
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-melody-100 mt-1 max-w-xl leading-relaxed font-bold font-quicksand">
            Track quiz attempts, celebrate high scores, and eradicate recurring misconceptions alongside Kuromi and Cinnamoroll!
          </p>
        </div>

        <div className="flex items-center gap-4 bg-white dark:bg-kuromi-800 p-4 rounded-3xl border-2 border-ink-900 shadow-pop-sm shrink-0">
          <Cinnamoroll className="w-14 h-10 animate-cute-float" />
          <div>
            <div className="text-3xl font-fredoka font-black text-ink-900 dark:text-white">{avgScore}%</div>
            <div className="text-xs font-bold text-sky-600 dark:text-sky-400 font-fredoka">Lifetime Mastery</div>
          </div>
        </div>
      </div>

      {/* Grid: Weak Concepts on Left, Attempt Log on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Revision Queue */}
        <div className="lg:col-span-1 bg-gradient-to-b from-purple-50 to-white dark:from-kuromi-900 dark:to-kuromi-950 rounded-3xl border-3 border-ink-900 shadow-pop p-6 space-y-4 transition-colors relative">
          <div className="washi-tape-purple absolute -top-2 left-8 w-20 h-4 rotate-[-1deg] rounded-sm pointer-events-none" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-purple-200 rounded-xl border-2 border-ink-900 shadow-pop-sm">
                <Kuromi className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-fredoka font-black text-ink-900 dark:text-white">Targets to Revise</h2>
            </div>
            <span className="text-xs bg-purple-200 text-purple-900 font-black px-3 py-1 rounded-full border-2 border-ink-900 font-fredoka shadow-pop-sm">
              {revisionQueue.length}
            </span>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-bold font-quicksand">
            Concepts marked by Kuromi for retention drills. They graduate to mastered once scored correct consistently.
          </p>

          <div className="space-y-3">
            {revisionQueue.map((item) => (
              <div key={item.id} className="p-4 rounded-2xl border-2 border-ink-900 bg-white dark:bg-kuromi-850 shadow-pop-sm space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs font-fredoka font-black text-ink-900 dark:text-slate-100 leading-snug">{item.concept}</h4>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-200 text-rose-900 border border-rose-300 shrink-0 font-fredoka">
                    {item.missCount} Misses
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-purple-700 dark:text-purple-300 font-bold font-quicksand pt-1 border-t border-purple-100 dark:border-kuromi-800">
                  <span className="truncate max-w-[140px]">{item.sourceMaterial}</span>
                  <span className="text-[10px] bg-purple-100 dark:bg-kuromi-800 px-2 py-0.5 rounded-md">{item.status}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onStartRevisionQuiz}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl text-xs font-fredoka font-black shadow-pop flex items-center justify-center gap-2 border-2 border-ink-900 transition hover:translate-y-[-1px]"
          >
            <RotateCcw className="w-4 h-4" /> Practice Revision Deck
          </button>
        </div>

        {/* Right 2 Columns: Past Quiz Attempts Table */}
        <div className="lg:col-span-2 bg-white dark:bg-kuromi-900 rounded-3xl border-3 border-ink-900 shadow-pop p-6 space-y-4 transition-colors relative">
          <div className="washi-tape-yellow absolute -top-2 left-10 w-24 h-4 rotate-[2deg] rounded-sm pointer-events-none" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-200 rounded-xl border-2 border-ink-900 shadow-pop-sm">
                <Pompompurin className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-fredoka font-black text-ink-900 dark:text-white">Past Quiz Performances</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold font-quicksand">Saved scorecard records & retention history</p>
              </div>
            </div>
            <PopStamp text="VERIFIED" color="border-emerald-500 text-emerald-700 bg-emerald-50" rotate="rotate-2" />
          </div>

          <div className="divide-y-2 divide-pink-100 dark:divide-kuromi-800">
            {attemptsHistory.map((att) => (
              <div key={att.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-fredoka font-black text-ink-900 dark:text-slate-100">{att.quizTitle}</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-bold font-quicksand">
                    <span>{att.source}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-pink-500" />
                      {new Date(att.date).toLocaleDateString()}
                    </span>
                  </div>
                  {att.missedConcepts && att.missedConcepts.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {att.missedConcepts.map((c, i) => (
                        <span key={i} className="text-[10px] font-fredoka font-bold bg-rose-100 text-rose-800 px-2.5 py-0.5 rounded-full border border-rose-300">
                          Missed: {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 self-end sm:self-center">
                  <div className="text-right">
                    <div className={`text-xl font-fredoka font-black ${
                      att.score >= 70 ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'
                    }`}>
                      {att.score}%
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold font-quicksand">
                      {att.correctCount}/{att.totalQuestions} Correct
                    </div>
                  </div>
                  <div className="p-2 bg-yellow-100 rounded-xl border border-ink-900 shadow-pop-sm">
                    <Trophy className="w-5 h-5 text-amber-500" />
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
