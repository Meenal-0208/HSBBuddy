import React from 'react';
import { 
  BookOpen, 
  FileText, 
  HelpCircle, 
  BarChart3, 
  Clock, 
  Award, 
  ChevronRight, 
  AlertCircle,
  PlusCircle,
  Sparkles,
  ArrowRight,
  Heart,
  Zap,
  Star
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

export default function Dashboard({ data, onNavigate, onSelectMaterial, onStartQuiz }) {
  const { subjectName, stats, materials, revisionQueue, attemptsHistory } = data;

  return (
    <div className="space-y-8 relative">
      {/* Sanrio Hero Scrapbook Banner */}
      <div className="relative bg-gradient-to-r from-pink-100 via-yellow-100 to-purple-100 dark:from-kuromi-900 dark:via-purple-950 dark:to-slate-900 rounded-3xl p-7 md:p-9 border-3 border-ink-900 shadow-pop overflow-hidden transition-all duration-200">
        
        {/* Scrapbook Binder Rings at Top */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center gap-6 z-30">
          <div className="binder-ring" />
          <div className="binder-ring" />
          <div className="binder-ring" />
          <div className="binder-ring" />
        </div>

        {/* Washi Tapes Accents */}
        <div className="washi-tape-striped absolute -top-1 left-8 w-32 h-5 rotate-[-2deg] rounded-sm pointer-events-none z-20" />
        <div className="washi-tape-mint absolute -top-1 right-16 w-28 h-5 rotate-[3deg] rounded-sm pointer-events-none z-20" />

        {/* PaperClip Top Right */}
        <div className="absolute top-4 right-8 hidden sm:block z-20">
          <PaperClip className="w-7 h-12 text-kitty-500" />
        </div>

        {/* Floating Sanrio Characters Trio */}
        <div className="absolute right-4 bottom-2 hidden lg:flex items-end gap-3 pointer-events-none select-none z-10">
          <div className="animate-cute-bounce delay-100">
            <MyMelody className="w-24 h-24 filter drop-shadow-md" />
          </div>
          <div className="animate-cute-float">
            <HelloKitty className="w-28 h-28 filter drop-shadow-lg" />
          </div>
          <div className="animate-cute-bounce">
            <Kuromi className="w-24 h-24 filter drop-shadow-md" />
          </div>
        </div>

        <div className="relative z-10 max-w-xl">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <PopStamp text="100% CUTE STUDY" color="border-pink-500 text-pink-600 bg-white/90" rotate="-rotate-2" />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-200/90 text-amber-900 border-2 border-amber-400 text-xs font-fredoka font-bold shadow-pop-sm">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              5 PPTs • 250 Questions
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-fredoka font-black tracking-tight text-ink-900 dark:text-white mb-2 leading-tight">
            {subjectName}
          </h1>
          
          <p className="text-slate-700 dark:text-melody-100 text-xs sm:text-sm leading-relaxed max-w-lg font-quicksand font-bold">
            Welcome to your Sanrio study lab! Hello Kitty, My Melody, and Kuromi turned all your lecture slides into pastel visual notes, difficulty-curated quizzes, and instant case revisions!
          </p>

          <div className="flex flex-wrap gap-3.5 mt-6">
            <button
              onClick={() => onNavigate('materials')}
              className="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-ink-900 px-5 py-3 rounded-2xl font-fredoka font-black text-sm border-2 border-ink-900 shadow-pop hover:translate-y-[-2px] transition-all"
            >
              <PlusCircle className="w-4 h-4 text-ink-900" />
              Upload & View Decks
            </button>
            <button
              onClick={() => onStartQuiz(null)}
              className="inline-flex items-center gap-2 bg-kitty-500 hover:bg-kitty-600 text-white px-6 py-3 rounded-2xl font-fredoka font-black text-sm border-2 border-ink-900 shadow-pop hover:translate-y-[-2px] transition-all"
            >
              <Sparkles className="w-4 h-4" />
              Play Master Quiz (50 Q)
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row: 4 Hyper-Vibrant Scrapbook Cards with Pins & Washi */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Card 1: Hello Kitty (Materials) */}
        <div className="relative bg-gradient-to-b from-pink-50 to-white dark:from-kuromi-900 dark:to-kuromi-950 p-5 rounded-3xl border-3 border-ink-900 shadow-pop hover:shadow-pop-lg transition-all group hover-wiggle cursor-pointer" onClick={() => onNavigate('materials')}>
          <div className="washi-tape-pink absolute -top-2 left-6 w-20 h-4 rotate-[-3deg] rounded-sm pointer-events-none" />
          <div className="flex items-center justify-between">
            <div className="p-3 bg-pink-200 dark:bg-pink-900/80 text-pink-700 dark:text-pink-200 rounded-2xl border-2 border-ink-900 shadow-pop-sm">
              <FileText className="w-5 h-5" />
            </div>
            <HelloKitty className="w-10 h-10 group-hover:scale-115 transition" />
          </div>
          <div className="mt-4">
            <div className="text-3xl font-fredoka font-black text-ink-900 dark:text-white">{stats.materialsCount}</div>
            <div className="text-xs text-pink-700 dark:text-pink-300 font-fredoka font-bold flex items-center gap-1 mt-0.5">
              <CuteBow className="w-3.5 h-3.5" /> Lecture Decks
            </div>
          </div>
        </div>

        {/* Card 2: My Melody (Short Notes) */}
        <div className="relative bg-gradient-to-b from-rose-50 to-white dark:from-kuromi-900 dark:to-kuromi-950 p-5 rounded-3xl border-3 border-ink-900 shadow-pop hover:shadow-pop-lg transition-all group hover-wiggle cursor-pointer" onClick={() => onNavigate('notes')}>
          <div className="washi-tape-yellow absolute -top-2 left-6 w-20 h-4 rotate-[2.5deg] rounded-sm pointer-events-none" />
          <div className="flex items-center justify-between">
            <div className="p-3 bg-yellow-200 dark:bg-amber-900/80 text-amber-900 dark:text-amber-200 rounded-2xl border-2 border-ink-900 shadow-pop-sm">
              <BookOpen className="w-5 h-5" />
            </div>
            <MyMelody className="w-10 h-10 group-hover:scale-115 transition" />
          </div>
          <div className="mt-4">
            <div className="text-3xl font-fredoka font-black text-ink-900 dark:text-white">{stats.notesGenerated}</div>
            <div className="text-xs text-amber-700 dark:text-amber-300 font-fredoka font-bold flex items-center gap-1 mt-0.5">
              <CuteHeart className="w-3.5 h-3.5 text-rose-500" /> Saved Short Notes
            </div>
          </div>
        </div>

        {/* Card 3: Cinnamoroll (Quiz Accuracy) */}
        <div className="relative bg-gradient-to-b from-sky-50 to-white dark:from-kuromi-900 dark:to-kuromi-950 p-5 rounded-3xl border-3 border-ink-900 shadow-pop hover:shadow-pop-lg transition-all group hover-wiggle cursor-pointer" onClick={() => onNavigate('quiz')}>
          <div className="washi-tape-blue absolute -top-2 left-6 w-20 h-4 rotate-[-2deg] rounded-sm pointer-events-none" />
          <div className="flex items-center justify-between">
            <div className="p-3 bg-sky-200 dark:bg-sky-900/80 text-sky-800 dark:text-sky-200 rounded-2xl border-2 border-ink-900 shadow-pop-sm">
              <Award className="w-5 h-5" />
            </div>
            <Cinnamoroll className="w-11 h-8 group-hover:scale-115 transition" />
          </div>
          <div className="mt-4">
            <div className="text-3xl font-fredoka font-black text-ink-900 dark:text-white">{stats.averageScore}%</div>
            <div className="text-xs text-sky-700 dark:text-sky-300 font-fredoka font-bold flex items-center gap-1 mt-0.5">
              <CuteStar className="w-3.5 h-3.5 text-sky-500" /> Avg Accuracy
            </div>
          </div>
        </div>

        {/* Card 4: Kuromi (Revision Queue) */}
        <div className="relative bg-gradient-to-b from-purple-50 to-white dark:from-kuromi-900 dark:to-kuromi-950 p-5 rounded-3xl border-3 border-ink-900 shadow-pop hover:shadow-pop-lg transition-all group hover-wiggle cursor-pointer" onClick={() => onNavigate('progress')}>
          <div className="washi-tape-purple absolute -top-2 left-6 w-20 h-4 rotate-[3deg] rounded-sm pointer-events-none" />
          <div className="flex items-center justify-between">
            <div className="p-3 bg-purple-200 dark:bg-purple-900/80 text-purple-800 dark:text-purple-200 rounded-2xl border-2 border-ink-900 shadow-pop-sm">
              <AlertCircle className="w-5 h-5" />
            </div>
            <Kuromi className="w-10 h-10 group-hover:scale-115 transition" />
          </div>
          <div className="mt-4">
            <div className="text-3xl font-fredoka font-black text-ink-900 dark:text-white">{stats.revisionTopicsCount}</div>
            <div className="text-xs text-purple-700 dark:text-purple-300 font-fredoka font-bold flex items-center gap-1 mt-0.5">
              <Zap className="w-3.5 h-3.5 text-purple-500" /> Revision Targets
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Recent Materials & Revision Queue */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Course Materials Quick Access */}
        <div className="relative lg:col-span-2 bg-white dark:bg-kuromi-900 rounded-3xl border-3 border-ink-900 shadow-pop p-6 md:p-7 transition-all">
          <div className="washi-tape-pink absolute -top-2 left-10 w-24 h-4 rotate-[-2deg] rounded-sm pointer-events-none z-10" />
          
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-pink-100 rounded-xl border-2 border-ink-900 shadow-pop-sm">
                <HelloKitty className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-xl font-fredoka font-black text-ink-900 dark:text-white flex items-center gap-2">
                  <span>Course Materials</span>
                  <PopStamp text="5 DECKS" color="border-emerald-500 text-emerald-700 bg-emerald-50" rotate="rotate-2" />
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold font-quicksand">Your uploaded slide decks and case materials</p>
              </div>
            </div>
            <button 
              onClick={() => onNavigate('materials')}
              className="text-xs font-fredoka font-black text-ink-900 dark:text-melody-200 hover:text-kitty-600 flex items-center gap-1.5 bg-yellow-200 dark:bg-kuromi-800 px-3.5 py-2 rounded-xl border-2 border-ink-900 shadow-pop-sm hover:translate-y-[-1px] transition-all"
            >
              View all ({materials.length}) <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y-2 divide-pink-100 dark:divide-kuromi-800">
            {materials.map((item, idx) => (
              <div 
                key={item.id}
                onClick={() => onSelectMaterial(item)}
                className="py-4 flex items-center justify-between hover:bg-pink-50/70 dark:hover:bg-kuromi-950/60 -mx-3 px-3.5 rounded-2xl cursor-pointer transition-all duration-150 group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className={`p-3 rounded-2xl text-xs font-black uppercase shrink-0 border-2 border-ink-900 shadow-pop-sm font-fredoka ${
                    idx % 3 === 0 ? 'bg-pink-200 text-pink-900' :
                    idx % 3 === 1 ? 'bg-yellow-200 text-amber-950' : 'bg-sky-200 text-sky-950'
                  }`}>
                    {item.fileType}
                  </div>
                  <div className="truncate">
                    <h3 className="text-sm sm:text-base font-fredoka font-black text-ink-900 dark:text-slate-100 truncate group-hover:text-kitty-600 dark:group-hover:text-melody-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 font-bold font-quicksand mt-1">
                      <span>{item.slidesCount > 0 ? `${item.slidesCount} slides` : item.size}</span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-300 font-bold bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-300">
                        Ready for Quiz
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] bg-pink-100 dark:bg-kuromi-800 text-pink-700 dark:text-melody-200 border-2 border-pink-300 dark:border-kuromi-600 px-3 py-1 rounded-full font-fredoka font-bold shadow-pop-sm">
                    <CuteHeart className="w-3 h-3 text-pink-500" />
                    Notes Ready
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-kuromi-800 border-2 border-ink-900 group-hover:bg-yellow-300 flex items-center justify-center shadow-pop-sm transition">
                    <ChevronRight className="w-4 h-4 text-ink-900 dark:text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: Revision Queue & Weak Concepts (Kuromi theme) */}
        <div className="relative bg-gradient-to-b from-purple-50/80 to-white dark:from-kuromi-900 dark:to-kuromi-950 rounded-3xl border-3 border-ink-900 shadow-pop p-6 md:p-7 flex flex-col justify-between transition-all">
          <div className="washi-tape-purple absolute -top-2 right-10 w-24 h-4 rotate-[2deg] rounded-sm pointer-events-none z-10" />
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-purple-200 rounded-xl border-2 border-ink-900 shadow-pop-sm">
                  <Kuromi className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-fredoka font-black text-ink-900 dark:text-white">Revision Targets</h2>
              </div>
              <span className="text-xs bg-purple-200 dark:bg-kuromi-800 text-purple-900 dark:text-melody-200 px-3 py-1 rounded-full font-fredoka font-black border-2 border-ink-900 shadow-pop-sm">
                {revisionQueue.length} items
              </span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 font-bold font-quicksand">
              Concepts flagged by Kuromi for extra practice. Master them with targeted recall drills!
            </p>

            <div className="space-y-3">
              {revisionQueue.slice(0, 3).map((rev) => (
                <div key={rev.id} className="p-3.5 rounded-2xl bg-white dark:bg-kuromi-850 border-2 border-ink-900 shadow-pop-sm">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs font-fredoka font-bold text-ink-900 dark:text-slate-100 leading-snug">{rev.concept}</h4>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-200 text-rose-900 border border-rose-300 shrink-0 font-fredoka">
                      Missed {rev.missCount}x
                    </span>
                  </div>
                  <div className="text-[11px] text-purple-700 dark:text-purple-300 font-bold font-quicksand mt-1 truncate">
                    {rev.sourceMaterial}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-purple-200 dark:border-kuromi-800">
            <button
              onClick={() => onStartQuiz('revision')}
              className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-fredoka font-black text-xs py-3.5 rounded-2xl border-2 border-ink-900 shadow-pop hover:translate-y-[-1px] transition-all"
            >
              <Zap className="w-4 h-4 text-yellow-300" />
              Practice Missed Targets
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Recent Quiz Attempts Scrapbook Ticket */}
      <div className="relative bg-gradient-to-r from-yellow-100 via-pink-100 to-sky-100 dark:from-kuromi-900 dark:via-slate-900 dark:to-kuromi-950 rounded-3xl p-6 border-3 border-ink-900 shadow-pop flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="washi-tape-yellow absolute -top-2 left-16 w-20 h-4 -rotate-1 rounded-sm pointer-events-none" />

        <div className="flex items-center gap-4">
          <div className="p-3 bg-white dark:bg-kuromi-800 rounded-2xl border-2 border-ink-900 shadow-pop-sm text-pink-500">
            <Pompompurin className="w-9 h-9" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-fredoka font-black text-base text-ink-900 dark:text-white">Latest Challenge: Skeletal System Mastery</h4>
              <PopStamp text="75% PASS" color="border-emerald-600 text-emerald-800 bg-emerald-100" rotate="rotate-1" />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-bold font-quicksand mt-0.5">Scored 75% (3/4 correct) • 1 concept flagged for Kuromi revision</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('progress')}
            className="text-xs font-fredoka font-black text-ink-900 dark:text-white bg-white dark:bg-kuromi-800 hover:bg-pink-100 px-4 py-2.5 rounded-xl border-2 border-ink-900 shadow-pop-sm transition"
          >
            Full Scorecard
          </button>
          <button
            onClick={() => onStartQuiz('quiz-sample-1')}
            className="text-xs font-fredoka font-black bg-kitty-500 hover:bg-kitty-600 text-white px-5 py-2.5 rounded-xl border-2 border-ink-900 shadow-pop transition flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
