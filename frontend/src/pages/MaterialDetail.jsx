import React from 'react';
import { 
  ArrowLeft, 
  FileText, 
  BookOpen, 
  HelpCircle, 
  Calendar, 
  HardDrive, 
  Layers, 
  AlertTriangle,
  CheckCircle2,
  Copy
} from 'lucide-react';

export default function MaterialDetail({ 
  material, 
  notes,
  onBack, 
  onGenerateNotes, 
  onStartQuiz,
  onViewNotes
}) {
  if (!material) {
    return (
      <div className="text-center py-16 bg-white dark:bg-kuromi-900 rounded-3xl border-3 border-ink-900 shadow-pop">
        <p className="text-slate-600 dark:text-melody-200 text-sm font-fredoka font-bold">No material selected.</p>
        <button onClick={onBack} className="mt-4 text-xs font-black text-kitty-600 dark:text-melody-300 hover:underline font-fredoka">
          ← Return to Materials
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Navigation & Actions Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-black text-ink-900 dark:text-melody-200 hover:text-kitty-600 dark:hover:text-melody-300 transition font-fredoka bg-white dark:bg-kuromi-800 px-4 py-2 rounded-2xl border-2 border-ink-900 shadow-pop-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Course Materials
        </button>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onGenerateNotes ? onGenerateNotes(material) : onViewNotes && onViewNotes()}
            className="px-5 py-2.5 bg-yellow-300 hover:bg-yellow-400 text-ink-900 rounded-2xl text-xs font-black border-2 border-ink-900 shadow-pop flex items-center gap-2 transition font-fredoka hover:translate-y-[-1px]"
          >
            <BookOpen className="w-4 h-4 text-kitty-600" />
            Open Study Notes Pinboard
          </button>
          <button
            onClick={() => onStartQuiz(material.id)}
            className="px-5 py-2.5 bg-kitty-500 hover:bg-kitty-600 text-white rounded-2xl text-xs font-black border-2 border-ink-900 shadow-pop flex items-center gap-2 transition font-fredoka hover:translate-y-[-1px]"
          >
            <HelpCircle className="w-4 h-4" />
            Take 50 Q Quiz Sets
          </button>
        </div>
      </div>

      {/* Main Metadata Card */}
      <div className="bg-white dark:bg-kuromi-900 rounded-3xl border-3 border-ink-900 p-6 sm:p-7 shadow-pop relative overflow-hidden">
        <div className="washi-tape-pink absolute -top-1 left-10 w-28 h-4 rotate-[-2deg] rounded-sm pointer-events-none" />
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase bg-pink-100 dark:bg-kuromi-800 text-kitty-600 dark:text-melody-300 border-2 border-ink-900 mb-2 shadow-pop-sm font-fredoka">
              {material.fileType} Course Deck
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-ink-900 dark:text-white font-fredoka">{material.title}</h1>
            <p className="text-xs text-slate-500 dark:text-melody-200 mt-1 font-mono font-bold">Original File: {material.filename}</p>
          </div>

          <div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-2 border-ink-900 rounded-full text-xs font-black font-fredoka shadow-pop-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Ready For Study
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t-2 border-dashed border-pink-200 dark:border-kuromi-800 text-xs">
          <div>
            <div className="text-slate-500 dark:text-melody-300 font-bold font-fredoka">Content Scope</div>
            <div className="font-black text-ink-900 dark:text-white mt-0.5 font-quicksand text-sm">
              {material.slidesCount > 0 ? `${material.slidesCount} slides/pages` : '18 slides'}
            </div>
          </div>
          <div>
            <div className="text-slate-500 dark:text-melody-300 font-bold font-fredoka">File Size</div>
            <div className="font-black text-ink-900 dark:text-white mt-0.5 font-quicksand text-sm">{material.size}</div>
          </div>
          <div>
            <div className="text-slate-500 dark:text-melody-300 font-bold font-fredoka">Uploaded At</div>
            <div className="font-black text-ink-900 dark:text-white mt-0.5 font-quicksand text-sm">
              {new Date(material.uploadDate).toLocaleDateString()}
            </div>
          </div>
          <div>
            <div className="text-slate-500 dark:text-melody-300 font-bold font-fredoka">Storage Location</div>
            <div className="font-black text-ink-900 dark:text-white mt-0.5 font-quicksand text-sm">storage/uploads/ (Local)</div>
          </div>
        </div>
      </div>

      {/* Structured Revision Notes for this Deck */}
      {notes && notes.sections && notes.sections.length > 0 && (
        <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-kuromi-900 dark:to-purple-950 rounded-3xl border-3 border-ink-900 p-6 sm:p-7 shadow-pop space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <span className="text-xs font-black uppercase text-pink-600 dark:text-melody-300 font-fredoka tracking-wider">High-Yield Study Cards</span>
              <h2 className="text-xl sm:text-2xl font-black text-ink-900 dark:text-white font-fredoka">
                Curated Revision Notes ({notes.sections.length} Topics)
              </h2>
            </div>
            <button
              onClick={onViewNotes}
              className="px-4 py-2 bg-white dark:bg-kuromi-800 hover:bg-yellow-100 text-ink-900 dark:text-white text-xs font-fredoka font-black rounded-xl border-2 border-ink-900 shadow-pop-sm transition"
            >
              View on Visual Sticky Board →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notes.sections.map((sec, i) => (
              <div key={i} className="bg-white dark:bg-kuromi-850 p-5 rounded-2xl border-2 border-ink-900 shadow-pop-sm space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-fredoka font-black text-ink-900 dark:text-melody-200 text-sm">
                    {sec.heading}
                  </h3>
                  {sec.sourceRef && (
                    <span className="text-[10px] font-fredoka font-black px-2 py-0.5 rounded-full bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 border border-pink-300">
                      {sec.sourceRef}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-200 font-quicksand font-bold whitespace-pre-line leading-relaxed">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Extracted Text Content from Slides */}
      <div className="bg-white dark:bg-kuromi-900 rounded-3xl border-3 border-ink-900 shadow-pop overflow-hidden">
        <div className="p-4 bg-yellow-100 dark:bg-kuromi-950 border-b-2 border-ink-900 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-ink-900 dark:text-melody-300" />
            <h2 className="text-xs sm:text-sm font-fredoka font-black text-ink-900 dark:text-slate-100">
              Raw Extracted PPT Slide Transcript
            </h2>
          </div>
          <span className="text-[11px] text-slate-600 dark:text-melody-300 font-bold font-quicksand">
            Grounding Source for AI Notes & Quizzes
          </span>
        </div>

        <div className="p-5">
          {material.extractedPreview ? (
            <pre className="font-mono text-xs bg-slate-900 dark:bg-kuromi-950 text-slate-100 p-5 rounded-2xl overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[380px] border-2 border-ink-900">
              {material.extractedPreview}
            </pre>
          ) : (
            <div className="p-8 text-center text-slate-400">
              <AlertTriangle className="w-8 h-8 mx-auto text-amber-500 mb-2 opacity-70" />
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">No extracted text available yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
