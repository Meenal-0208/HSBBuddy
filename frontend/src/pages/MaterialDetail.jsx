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
  onBack, 
  onGenerateNotes, 
  onStartQuiz 
}) {
  if (!material) {
    return (
      <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
        <p className="text-slate-500 text-sm">No material selected.</p>
        <button onClick={onBack} className="mt-4 text-xs font-bold text-blue-600 hover:underline">
          Return to Materials
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
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Materials
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onGenerateNotes(material)}
            disabled={material.status !== 'Ready'}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-2 transition disabled:opacity-40"
          >
            <BookOpen className="w-4 h-4" />
            Generate / View Notes
          </button>
          <button
            onClick={() => onStartQuiz(material.id)}
            disabled={material.status !== 'Ready'}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-2 transition disabled:opacity-40"
          >
            <HelpCircle className="w-4 h-4" />
            Take Material Quiz
          </button>
        </div>
      </div>

      {/* Main Metadata Card */}
      <div className="bg-white dark:bg-kuromi-900 rounded-2xl border-2 border-slate-200 dark:border-kuromi-700 p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-bold uppercase bg-slate-100 dark:bg-kuromi-800 text-slate-700 dark:text-slate-200 mb-2">
              {material.fileType} Document
            </div>
            <h1 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">{material.title}</h1>
            <p className="text-xs text-slate-400 dark:text-slate-400 mt-1 font-mono">Original File: {material.filename}</p>
          </div>

          <div>
            {material.status === 'Ready' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-full text-xs font-bold">
                <CheckCircle2 className="w-4 h-4" /> Ready for AI
              </span>
            )}
            {material.status === 'Processing' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 rounded-full text-xs font-bold animate-pulse">
                Processing Content...
              </span>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-kuromi-800 text-xs">
          <div>
            <div className="text-slate-400 dark:text-slate-400 font-medium">Content Scope</div>
            <div className="font-bold text-slate-800 dark:text-slate-100 mt-0.5">
              {material.slidesCount > 0 ? `${material.slidesCount} slides/pages` : 'Pending'}
            </div>
          </div>
          <div>
            <div className="text-slate-400 dark:text-slate-400 font-medium">File Size</div>
            <div className="font-bold text-slate-800 dark:text-slate-100 mt-0.5">{material.size}</div>
          </div>
          <div>
            <div className="text-slate-400 dark:text-slate-400 font-medium">Uploaded At</div>
            <div className="font-bold text-slate-800 dark:text-slate-100 mt-0.5">
              {new Date(material.uploadDate).toLocaleDateString()}
            </div>
          </div>
          <div>
            <div className="text-slate-400 dark:text-slate-400 font-medium">Storage Location</div>
            <div className="font-bold text-slate-800 dark:text-slate-100 mt-0.5">storage/uploads/ (Local)</div>
          </div>
        </div>
      </div>

      {/* Extracted Text Preview Card */}
      <div className="bg-white dark:bg-kuromi-900 rounded-2xl border-2 border-slate-200 dark:border-kuromi-700 shadow-sm overflow-hidden">
        <div className="p-4 bg-slate-50 dark:bg-kuromi-950 border-b border-slate-200 dark:border-kuromi-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100">Extracted Text Content (Parsed by Backend)</h2>
          </div>
          <span className="text-[11px] text-slate-400 dark:text-slate-400">Grounding Source for AI Notes & Quizzes</span>
        </div>

        <div className="p-5">
          {material.extractedPreview ? (
            <pre className="font-mono text-xs bg-slate-900 dark:bg-kuromi-950 text-slate-100 p-4 rounded-xl overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96 border border-slate-800 dark:border-kuromi-800">
              {material.extractedPreview}
            </pre>
          ) : (
            <div className="p-8 text-center text-slate-400">
              <AlertTriangle className="w-8 h-8 mx-auto text-amber-500 mb-2 opacity-70" />
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">No extracted text available yet.</p>
              <p className="text-[11px] text-slate-400 mt-1">
                The document is either currently processing or contains non-extractable scanned raster imagery.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
