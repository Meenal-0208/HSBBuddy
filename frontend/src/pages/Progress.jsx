import React, { useState } from 'react';
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
  Target,
  Flame,
  Award,
  Filter,
  ArrowUpRight
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

import { 
  Paimon, 
  Primogem, 
  MoraCoin, 
  EmergencyFoodBadge, 
  TeyvatStar 
} from '../components/GenshinStickers';

export default function Progress({ 
  attemptsHistory = [], 
  revisionQueue = [], 
  onStartRevisionQuiz,
  edition = 'genshin'
}) {
  const isGenshin = edition === 'genshin';
  const [filterDeck, setFilterDeck] = useState('all');

  const totalAttempts = attemptsHistory.length;
  const avgScore = totalAttempts > 0 
    ? Math.round(attemptsHistory.reduce((acc, a) => acc + a.score, 0) / totalAttempts)
    : 85;

  const perfectScores = attemptsHistory.filter(a => a.score === 100).length;
  const passingScores = attemptsHistory.filter(a => a.score >= 70).length;
  const accuracyRate = totalAttempts > 0 ? Math.round((passingScores / totalAttempts) * 100) : 100;

  const filteredAttempts = attemptsHistory.filter(a => {
    if (filterDeck === 'all') return true;
    return (a.source || '').toLowerCase().includes(filterDeck.toLowerCase()) || 
           (a.quizTitle || '').toLowerCase().includes(filterDeck.toLowerCase());
  });

  return (
    <div className="space-y-8 relative">
      {/* Decorative Washi Tape */}
      <div className="washi-tape-mint absolute -top-4 right-14 w-28 h-5 rotate-[2deg] rounded-sm pointer-events-none z-10 hidden sm:block" />

      {/* Header Banner */}
      <div className={`relative p-7 sm:p-9 rounded-3xl border-3 border-ink-900 shadow-pop flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden ${
        isGenshin 
          ? 'bg-gradient-to-r from-amber-100 via-sky-100 to-indigo-100 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900' 
          : 'bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 dark:from-kuromi-900 dark:via-purple-950 dark:to-slate-900'
      }`}>
        <div className="washi-tape-striped absolute -top-1 left-12 w-32 h-5 rotate-[-2deg] rounded-sm pointer-events-none z-20" />
        
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <PopStamp 
              text={isGenshin ? "ADVENTURER SCORECARD" : "STUDY SCORECARD"} 
              color={isGenshin ? "border-amber-600 text-amber-700 bg-amber-50" : "border-purple-600 text-purple-700 bg-white"} 
              rotate="-rotate-2" 
            />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-800 text-ink-900 dark:text-white border-2 border-ink-900 text-xs font-fredoka font-black shadow-pop-sm">
              {isGenshin ? <Primogem className="w-4 h-4" /> : <Trophy className="w-4 h-4 text-amber-500" />}
              {isGenshin ? "Primogem Bounty & Rank" : "Recall Mastery & Log"}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-slate-800 text-amber-800 dark:text-amber-200 border-2 border-ink-900 text-xs font-fredoka font-black shadow-pop-sm">
              <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              5 Day Streak
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-fredoka font-black tracking-tight text-ink-900 dark:text-white flex items-center gap-2">
            <span>{isGenshin ? "Adventurer Scorecard & Primogem Vault" : "Performance Scorecard & Retention Log"}</span>
            {isGenshin && <TeyvatStar className="w-5 h-5 text-amber-400" />}
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-1 max-w-xl leading-relaxed font-bold font-quicksand">
            {isGenshin 
              ? "Live record of all quest expeditions taken across your 5 Product Management decks. Earn Primogems, review missed concept tags, and level up your PM Adventurer Rank with Paimon!" 
              : "Live record of every quiz session taken across your 5 Product Management decks. Track score improvements, review missed concept tags, and master weak areas with Kuromi!"}
          </p>
        </div>

        {/* Lifetime Mastery Badge */}
        <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-5 rounded-3xl border-2 border-ink-900 shadow-pop shrink-0">
          {isGenshin ? (
            <Paimon className="w-16 h-16 animate-cute-float" mood="excited" />
          ) : (
            <Cinnamoroll className="w-14 h-10 animate-cute-float" />
          )}
          <div>
            <div className="text-3xl font-fredoka font-black text-ink-900 dark:text-white flex items-center gap-1">
              <span>{avgScore}%</span>
              {isGenshin && <Primogem className="w-5 h-5" />}
            </div>
            <div className="text-xs font-bold text-amber-600 dark:text-amber-400 font-fredoka">
              {isGenshin ? "Archon Mastery" : "Average Score"}
            </div>
            <div className="text-[10px] text-slate-500 font-quicksand font-bold mt-0.5">
              {isGenshin ? "+1,280 Primogems Earned" : `${accuracyRate}% Pass Rate`}
            </div>
          </div>
        </div>
      </div>

      {/* KPI Stats Highlights Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border-3 border-ink-900 shadow-pop-sm space-y-1">
          <div className="text-xs font-fredoka font-black text-slate-500 dark:text-amber-300 uppercase">
            {isGenshin ? 'Quests Cleared' : 'Quizzes Completed'}
          </div>
          <div className="text-2xl font-fredoka font-black text-ink-900 dark:text-white flex items-center justify-between">
            <span>{totalAttempts}</span>
            {isGenshin ? <Paimon className="w-6 h-6" /> : <HelloKitty className="w-6 h-6" />}
          </div>
          <div className="text-[11px] text-emerald-600 font-bold font-quicksand">Across all 5 decks</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border-3 border-ink-900 shadow-pop-sm space-y-1">
          <div className="text-xs font-fredoka font-black text-slate-500 dark:text-amber-300 uppercase">100% Perfect Sets</div>
          <div className="text-2xl font-fredoka font-black text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
            <span>{perfectScores}</span>
            {isGenshin ? <Primogem className="w-6 h-6" /> : <MyMelody className="w-6 h-6" />}
          </div>
          <div className="text-[11px] text-slate-500 font-bold font-quicksand">Flawless recall</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border-3 border-ink-900 shadow-pop-sm space-y-1">
          <div className="text-xs font-fredoka font-black text-slate-500 dark:text-amber-300 uppercase">
            {isGenshin ? 'Abyss Drill Queue' : 'Weak Concept Queue'}
          </div>
          <div className="text-2xl font-fredoka font-black text-purple-600 dark:text-purple-400 flex items-center justify-between">
            <span>{revisionQueue.length}</span>
            {isGenshin ? <MoraCoin className="w-6 h-6" /> : <Kuromi className="w-6 h-6" />}
          </div>
          <div className="text-[11px] text-purple-600 font-bold font-quicksand">Needs spaced review</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border-3 border-ink-900 shadow-pop-sm space-y-1">
          <div className="text-xs font-fredoka font-black text-slate-500 dark:text-amber-300 uppercase">Avg Question Time</div>
          <div className="text-2xl font-fredoka font-black text-amber-500 flex items-center justify-between">
            <span>22s</span>
            {isGenshin ? <TeyvatStar className="w-6 h-6 text-amber-400" /> : <Pompompurin className="w-6 h-6" />}
          </div>
          <div className="text-[11px] text-slate-500 font-bold font-quicksand">Speed & confidence</div>
        </div>
      </div>

      {/* Main Grid: Spaced Revision Queue (Left) & Historical Attempt Scorecards (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Revision Queue */}
        <div className="lg:col-span-1 bg-gradient-to-b from-purple-50 to-white dark:from-kuromi-900 dark:to-kuromi-950 rounded-3xl border-3 border-ink-900 shadow-pop p-6 space-y-4 transition-colors relative">
          <div className="washi-tape-purple absolute -top-2 left-8 w-20 h-4 rotate-[-1deg] rounded-sm pointer-events-none" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-purple-200 dark:bg-kuromi-800 rounded-xl border-2 border-ink-900 shadow-pop-sm">
                <Kuromi className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-fredoka font-black text-ink-900 dark:text-white">Active Revision Queue</h2>
                <p className="text-[11px] text-slate-500 dark:text-melody-300 font-bold font-quicksand">Targeted spaced repetition</p>
              </div>
            </div>
            <span className="text-xs bg-purple-200 dark:bg-kuromi-800 text-purple-900 dark:text-purple-200 font-black px-3 py-1 rounded-full border-2 border-ink-900 font-fredoka shadow-pop-sm">
              {revisionQueue.length}
            </span>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-bold font-quicksand">
            Concepts flagged from previous mistakes. Practice targeted revision questions until they graduate to mastered!
          </p>

          <div className="space-y-3">
            {revisionQueue.map((item) => (
              <div key={item.id} className="p-4 rounded-2xl border-2 border-ink-900 bg-white dark:bg-kuromi-850 shadow-pop-sm space-y-2 hover:border-purple-400 transition">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs font-fredoka font-black text-ink-900 dark:text-slate-100 leading-snug">{item.concept}</h4>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-200 text-rose-900 border border-rose-300 shrink-0 font-fredoka">
                    {item.missCount} Misses
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-purple-700 dark:text-purple-300 font-bold font-quicksand pt-1 border-t border-purple-100 dark:border-kuromi-800">
                  <span className="truncate max-w-[140px] text-[11px]">{item.sourceMaterial}</span>
                  <span className="text-[10px] bg-purple-100 dark:bg-kuromi-800 px-2 py-0.5 rounded-md font-fredoka">{item.status}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onStartRevisionQuiz}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl text-xs font-fredoka font-black shadow-pop flex items-center justify-center gap-2 border-2 border-ink-900 transition hover:translate-y-[-1px]"
          >
            <RotateCcw className="w-4 h-4" /> Practice Revision Drill
          </button>
        </div>

        {/* Right 2 Columns: Past Quiz Attempts Table */}
        <div className="lg:col-span-2 bg-white dark:bg-kuromi-900 rounded-3xl border-3 border-ink-900 shadow-pop p-6 space-y-4 transition-colors relative">
          <div className="washi-tape-yellow absolute -top-2 left-10 w-24 h-4 rotate-[2deg] rounded-sm pointer-events-none" />

          {/* Section Title & Filter Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b-2 border-dashed border-pink-200 dark:border-kuromi-800">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-200 dark:bg-kuromi-800 rounded-xl border-2 border-ink-900 shadow-pop-sm">
                <Pompompurin className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-fredoka font-black text-ink-900 dark:text-white">Past Quiz Experiences & Scorecards</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold font-quicksand">Detailed log of past test sessions & scores</p>
              </div>
            </div>

            {/* Filter by Deck */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={() => setFilterDeck('all')}
                className={`text-[11px] font-fredoka font-black px-3 py-1 rounded-xl border border-ink-900 shadow-pop-sm transition ${
                  filterDeck === 'all'
                    ? 'bg-kitty-500 text-white'
                    : 'bg-white dark:bg-kuromi-800 text-ink-900 dark:text-slate-200'
                }`}
              >
                All Decks ({attemptsHistory.length})
              </button>
              <button
                onClick={() => setFilterDeck('Day 1')}
                className={`text-[11px] font-fredoka font-black px-3 py-1 rounded-xl border border-ink-900 shadow-pop-sm transition ${
                  filterDeck === 'Day 1'
                    ? 'bg-kitty-500 text-white'
                    : 'bg-white dark:bg-kuromi-800 text-ink-900 dark:text-slate-200'
                }`}
              >
                Day 1
              </button>
              <button
                onClick={() => setFilterDeck('Day 2')}
                className={`text-[11px] font-fredoka font-black px-3 py-1 rounded-xl border border-ink-900 shadow-pop-sm transition ${
                  filterDeck === 'Day 2'
                    ? 'bg-kitty-500 text-white'
                    : 'bg-white dark:bg-kuromi-800 text-ink-900 dark:text-slate-200'
                }`}
              >
                Day 2
              </button>
              <button
                onClick={() => setFilterDeck('Day 3')}
                className={`text-[11px] font-fredoka font-black px-3 py-1 rounded-xl border border-ink-900 shadow-pop-sm transition ${
                  filterDeck === 'Day 3'
                    ? 'bg-kitty-500 text-white'
                    : 'bg-white dark:bg-kuromi-800 text-ink-900 dark:text-slate-200'
                }`}
              >
                Day 3
              </button>
            </div>
          </div>

          {/* List of Scorecards */}
          <div className="divide-y-2 divide-pink-100 dark:divide-kuromi-800">
            {filteredAttempts.map((att) => (
              <div key={att.id} className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-pink-50/40 dark:hover:bg-kuromi-850/60 p-3 rounded-2xl transition">
                <div className="space-y-1.5 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-fredoka font-black px-2.5 py-0.5 rounded-full bg-pink-100 dark:bg-kuromi-800 text-pink-700 dark:text-pink-300 border border-ink-900">
                      {att.source ? att.source.split('-')[0].trim() : 'Course Deck'}
                    </span>
                    <h4 className="text-sm sm:text-base font-fredoka font-black text-ink-900 dark:text-slate-100">
                      {att.quizTitle}
                    </h4>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-bold font-quicksand flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-kitty-500" />
                      {new Date(att.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </span>
                    {att.timeSpent && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-purple-500" />
                        Time: {att.timeSpent}
                      </span>
                    )}
                  </div>

                  {att.missedConcepts && att.missedConcepts.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {att.missedConcepts.map((c, i) => (
                        <span key={i} className="text-[10px] font-fredoka font-bold bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 px-2.5 py-0.5 rounded-full border border-rose-300 dark:border-rose-800 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 text-rose-500" />
                          Missed: {c}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1 text-[11px] font-fredoka font-black text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-800">
                      <CheckCircle className="w-3.5 h-3.5" /> 100% Mastery • No Missed Concepts!
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 self-end sm:self-center shrink-0">
                  <div className="text-right">
                    <div className={`text-2xl font-fredoka font-black ${
                      att.score >= 80 
                        ? 'text-emerald-600 dark:text-emerald-400' 
                        : att.score >= 60 
                        ? 'text-amber-600 dark:text-amber-400' 
                        : 'text-rose-600 dark:text-rose-400'
                    }`}>
                      {att.score}%
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-bold font-quicksand">
                      {att.correctCount}/{att.totalQuestions} Correct
                    </div>
                  </div>

                  <div className={`p-2.5 rounded-2xl border-2 border-ink-900 shadow-pop-sm ${
                    att.score >= 80 ? 'bg-yellow-200' : 'bg-slate-100 dark:bg-kuromi-800'
                  }`}>
                    {att.score >= 80 ? (
                      <Trophy className="w-6 h-6 text-amber-600" />
                    ) : (
                      <Target className="w-6 h-6 text-slate-500" />
                    )}
                  </div>
                </div>
              </div>
            ))}

            {filteredAttempts.length === 0 && (
              <div className="py-12 text-center text-slate-500">
                <Trophy className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <p className="font-fredoka font-bold text-sm">No quizzes taken for this filter yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
