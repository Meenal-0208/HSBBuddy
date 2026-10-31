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
  ArrowRight
} from 'lucide-react';

export default function Dashboard({ data, onNavigate, onSelectMaterial, onStartQuiz }) {
  const { subjectName, stats, materials, revisionQueue, attemptsHistory } = data;

  return (
    <div className="space-y-8">
      {/* Subject Header */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/30 text-blue-100 text-xs font-semibold mb-3 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-200" />
            Configured Subject
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
            {subjectName}
          </h1>
          <p className="text-blue-100 text-sm md:text-base leading-relaxed">
            Your single-subject AI revision sanctuary. Upload lecture slides, generate concise high-yield notes, and train on active recall quizzes grounded strictly in your syllabus.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={() => onNavigate('materials')}
              className="inline-flex items-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-4 py-2.5 rounded-xl font-semibold text-sm shadow transition-all duration-150"
            >
              <PlusCircle className="w-4 h-4 text-blue-600" />
              Upload Materials
            </button>
            <button
              onClick={() => onStartQuiz(null)}
              className="inline-flex items-center gap-2 bg-blue-600/80 hover:bg-blue-600 border border-blue-400/40 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-150 backdrop-blur-sm"
            >
              <HelpCircle className="w-4 h-4" />
              Quick Quiz All Deck
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-800">{stats.materialsCount}</div>
            <div className="text-xs text-slate-500 font-medium">Uploaded Materials</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-800">{stats.notesGenerated}</div>
            <div className="text-xs text-slate-500 font-medium">Saved Short Notes</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-800">{stats.averageScore}%</div>
            <div className="text-xs text-slate-500 font-medium">Avg Quiz Accuracy</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-800">{stats.revisionTopicsCount}</div>
            <div className="text-xs text-slate-500 font-medium">Concepts to Revise</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Recent Materials & Revision Queue */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Course Materials Quick Access */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Course Materials</h2>
              <p className="text-xs text-slate-500">Your uploaded slide decks and study documents</p>
            </div>
            <button 
              onClick={() => onNavigate('materials')}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              View all ({materials.length}) <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {materials.map((item) => (
              <div 
                key={item.id}
                onClick={() => onSelectMaterial(item)}
                className="py-3.5 flex items-center justify-between hover:bg-slate-50/80 -mx-3 px-3 rounded-lg cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`p-2 rounded-lg text-xs font-bold uppercase ${
                    item.fileType === 'pptx' ? 'bg-orange-100 text-orange-700' :
                    item.fileType === 'pdf' ? 'bg-rose-100 text-rose-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {item.fileType}
                  </div>
                  <div className="truncate">
                    <h3 className="text-sm font-semibold text-slate-800 truncate">{item.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mt-0.5">
                      <span>{item.slidesCount > 0 ? `${item.slidesCount} slides/pages` : item.size}</span>
                      <span>•</span>
                      <span className={`inline-flex items-center gap-1 font-medium ${
                        item.status === 'Ready' ? 'text-emerald-600' :
                        item.status === 'Processing' ? 'text-amber-600 animate-pulse' : 'text-rose-600'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {item.hasNotes && (
                    <span className="hidden sm:inline-block text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                      Notes Ready
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: Revision Queue & Weak Concepts */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                <h2 className="text-lg font-bold text-slate-900">Revision Queue</h2>
              </div>
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-semibold">
                {revisionQueue.length} items
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-4">
              Concepts missed in recent quizzes. High priority topics require repeated mastery.
            </p>

            <div className="space-y-3">
              {revisionQueue.slice(0, 3).map((rev) => (
                <div key={rev.id} className="p-3 rounded-lg bg-amber-50/50 border border-amber-100">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs font-semibold text-slate-800 leading-snug">{rev.concept}</h4>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 shrink-0">
                      Missed {rev.missCount}x
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 truncate">
                    {rev.sourceMaterial}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <button
              onClick={() => onStartQuiz('revision')}
              className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs py-2.5 rounded-lg shadow-sm transition"
            >
              Practice Missed Concepts
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Recent Quiz Attempts Banner */}
      <div className="bg-slate-900 text-white rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-slate-800 rounded-xl text-blue-400">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-sm">Last Quiz Attempt: Skeletal System Mastery</h4>
            <p className="text-xs text-slate-400">Scored 75% (3/4 correct) • 1 concept flagged for revision</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('progress')}
            className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2"
          >
            Full Performance History
          </button>
          <button
            onClick={() => onStartQuiz('quiz-sample-1')}
            className="text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow transition"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
