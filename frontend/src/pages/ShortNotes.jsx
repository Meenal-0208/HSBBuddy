import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Copy, 
  Check, 
  RefreshCw, 
  HelpCircle, 
  ArrowLeft,
  FileText
} from 'lucide-react';

export default function ShortNotes({ 
  materials, 
  notesData, 
  activeMaterialId, 
  onSelectMaterial, 
  onStartQuiz,
  onRegenerateNotes
}) {
  const [copied, setCopied] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);

  const currentNotes = notesData[activeMaterialId] || null;
  const currentMaterial = materials.find(m => m.id === activeMaterialId);

  const handleCopy = () => {
    if (!currentNotes) return;
    const fullText = `${currentNotes.materialTitle}\n\n${currentNotes.overview}\n\n` + 
      currentNotes.sections.map(s => `${s.heading} (${s.sourceRef})\n${s.content}`).join('\n\n');
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegenerate = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      setIsRegenerating(false);
      onRegenerateNotes(activeMaterialId);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Header and Material Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Structured Revision Notes</h1>
          <p className="text-sm text-slate-500">
            Student-friendly concise notes distilled strictly from your uploaded course slides.
          </p>
        </div>

        {/* Material Selector Dropdown */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-500">Select Material:</label>
          <select
            value={activeMaterialId || ''}
            onChange={(e) => onSelectMaterial(e.target.value)}
            className="text-xs font-semibold bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {materials.map((m) => (
              <option key={m.id} value={m.id}>
                {m.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {currentNotes ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Notes Top Banner */}
          <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-blue-500/30 text-blue-300 mb-2">
                <Sparkles className="w-3.5 h-3.5" /> High-Yield Revision
              </div>
              <h2 className="text-xl font-extrabold text-white">{currentNotes.materialTitle}</h2>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {currentNotes.overview}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopy}
                className="px-3.5 py-2 bg-slate-700/80 hover:bg-slate-700 rounded-xl text-xs font-semibold text-white transition flex items-center gap-1.5"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy Notes'}
              </button>
              <button
                onClick={handleRegenerate}
                disabled={isRegenerating}
                className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-xs font-semibold text-white transition flex items-center gap-1.5 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isRegenerating ? 'animate-spin' : ''}`} />
                Regenerate
              </button>
              <button
                onClick={() => onStartQuiz(activeMaterialId)}
                className="px-3.5 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl text-xs font-semibold text-white transition flex items-center gap-1.5"
              >
                <HelpCircle className="w-4 h-4" />
                Practice Quiz
              </button>
            </div>
          </div>

          {/* Structured Note Sections */}
          <div className="p-6 md:p-8 space-y-6">
            {currentNotes.sections.map((section, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-200 transition-all shadow-xs">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {section.heading}
                  </h3>
                  {section.sourceRef && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 shrink-0">
                      {section.sourceRef}
                    </span>
                  )}
                </div>
                <div className="text-xs md:text-sm text-slate-700 whitespace-pre-wrap leading-relaxed space-y-2">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Empty / Generate State */
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center shadow-sm space-y-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">No Notes Generated Yet</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
              Click below to instruct the backend AI provider to synthesize concise, grounded study notes from {currentMaterial ? currentMaterial.title : 'this material'}.
            </p>
          </div>
          <button
            onClick={() => onRegenerateNotes(activeMaterialId)}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow transition inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Generate Notes from Material
          </button>
        </div>
      )}
    </div>
  );
}
