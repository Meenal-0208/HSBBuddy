import React, { useState } from 'react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  HelpCircle, 
  Search, 
  Bookmark, 
  Pin, 
  Layers, 
  Grid, 
  Columns3,
  Lightbulb,
  Tag,
  BookOpen
} from 'lucide-react';

const STICKY_THEMES = [
  {
    bg: 'bg-amber-100/90',
    border: 'border-amber-300',
    header: 'bg-amber-200/70 text-amber-900',
    pin: 'text-amber-600',
    tag: 'bg-amber-200/90 text-amber-800'
  },
  {
    bg: 'bg-sky-100/90',
    border: 'border-sky-300',
    header: 'bg-sky-200/70 text-sky-900',
    pin: 'text-sky-600',
    tag: 'bg-sky-200/90 text-sky-800'
  },
  {
    bg: 'bg-emerald-100/90',
    border: 'border-emerald-300',
    header: 'bg-emerald-200/70 text-emerald-900',
    pin: 'text-emerald-600',
    tag: 'bg-emerald-200/90 text-emerald-800'
  },
  {
    bg: 'bg-rose-100/90',
    border: 'border-rose-300',
    header: 'bg-rose-200/70 text-rose-900',
    pin: 'text-rose-600',
    tag: 'bg-rose-200/90 text-rose-800'
  },
  {
    bg: 'bg-purple-100/90',
    border: 'border-purple-300',
    header: 'bg-purple-200/70 text-purple-900',
    pin: 'text-purple-600',
    tag: 'bg-purple-200/90 text-purple-800'
  },
  {
    bg: 'bg-teal-100/90',
    border: 'border-teal-300',
    header: 'bg-teal-200/70 text-teal-900',
    pin: 'text-teal-600',
    tag: 'bg-teal-200/90 text-teal-800'
  }
];

export default function ShortNotes({ 
  materials, 
  notesData, 
  activeMaterialId, 
  onSelectMaterial, 
  onStartQuiz
}) {
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [pinnedIds, setPinnedIds] = useState(new Set());
  const [viewMode, setViewMode] = useState('all'); // 'all' or specific materialId

  // Collect notes across all materials if 'all' is selected, or active material
  let displayNotes = [];

  if (viewMode === 'all') {
    Object.entries(notesData).forEach(([matId, noteObj]) => {
      if (noteObj && noteObj.sections) {
        noteObj.sections.forEach((sec, idx) => {
          // Clean title removing "Slide X:"
          const cleanTitle = sec.heading.replace(/^Slide \d+:\s*/i, '').replace(/^[A-Z0-9.\s]+:\s*/, '');
          displayNotes.push({
            id: `${matId}-${idx}`,
            materialTitle: noteObj.materialTitle,
            title: cleanTitle || sec.heading,
            content: sec.content,
            sourceRef: sec.sourceRef,
            matId
          });
        });
      }
    });
  } else {
    const noteObj = notesData[viewMode] || notesData[activeMaterialId];
    if (noteObj && noteObj.sections) {
      noteObj.sections.forEach((sec, idx) => {
        const cleanTitle = sec.heading.replace(/^Slide \d+:\s*/i, '').replace(/^[A-Z0-9.\s]+:\s*/, '');
        displayNotes.push({
          id: `${viewMode}-${idx}`,
          materialTitle: noteObj.materialTitle,
          title: cleanTitle || sec.heading,
          content: sec.content,
          sourceRef: sec.sourceRef,
          matId: viewMode
        });
      });
    }
  }

  // Filter by search
  const filteredNotes = displayNotes.filter(item => {
    const q = searchTerm.toLowerCase();
    return item.title.toLowerCase().includes(q) || item.content.toLowerCase().includes(q);
  });

  // Sort pinned first
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    const aPinned = pinnedIds.has(a.id);
    const bPinned = pinnedIds.has(b.id);
    if (aPinned && !bPinned) return -1;
    if (!aPinned && bPinned) return 1;
    return 0;
  });

  const togglePin = (id) => {
    setPinnedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleCopyBoard = () => {
    const text = sortedNotes.map(n => `### ${n.title} (${n.materialTitle})\n${n.content}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Interactive Sticky Board Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Concept Pinboard
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Visual Revision Notes
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
            Every core definition, architectural framework, and status code organized into clean, interactive sticky notes. Pin critical concepts or search instantly.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={handleCopyBoard}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition flex items-center gap-2 border border-slate-700 shadow"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied All Notes!' : 'Copy Entire Board'}
          </button>
          <button
            onClick={() => onStartQuiz(viewMode !== 'all' ? viewMode : null)}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center gap-2 shadow"
          >
            <HelpCircle className="w-4 h-4" />
            Quiz On These Concepts
          </button>
        </div>
      </div>

      {/* Control Bar: Material Filter & Instant Search */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search notes (e.g. REST, 403, ACID, Next.js)..."
            className="w-full text-xs pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </div>

        {/* Course Deck Selector Filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label className="text-xs font-bold text-slate-500 shrink-0">Show Deck:</label>
          <select
            value={viewMode}
            onChange={(e) => {
              setViewMode(e.target.value);
              if (e.target.value !== 'all') {
                onSelectMaterial(e.target.value);
              }
            }}
            className="w-full sm:w-auto text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
          >
            <option value="all">🌟 All 5 Course Decks Combined ({displayNotes.length} notes)</option>
            {materials.map((m) => (
              <option key={m.id} value={m.id}>
                {m.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Sticky Notes Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedNotes.map((item, index) => {
          const theme = STICKY_THEMES[index % STICKY_THEMES.length];
          const isPinned = pinnedIds.has(item.id);

          return (
            <div
              key={item.id}
              className={`rounded-2xl border ${theme.border} ${theme.bg} p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative transform hover:-translate-y-1`}
            >
              {/* Note Pin Icon */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${theme.tag}`}>
                    {item.materialTitle.split(':')[0].replace('.pptx', '')}
                  </span>
                  {item.sourceRef && (
                    <span className="text-[10px] font-semibold text-slate-500 bg-white/70 px-2 py-0.5 rounded-md">
                      Ref: {item.sourceRef}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => togglePin(item.id)}
                  className={`p-1.5 rounded-lg transition ${
                    isPinned ? 'bg-amber-400 text-amber-950 font-bold shadow-xs' : 'text-slate-400 hover:text-slate-700 bg-white/60'
                  }`}
                  title={isPinned ? 'Unpin Note' : 'Pin to Top'}
                >
                  <Pin className={`w-3.5 h-3.5 ${isPinned ? 'fill-amber-950' : ''}`} />
                </button>
              </div>

              {/* Note Heading */}
              <h3 className="font-extrabold text-sm text-slate-900 leading-snug mb-3">
                {item.title}
              </h3>

              {/* Note Content Bullets */}
              <div className="text-xs text-slate-800 leading-relaxed space-y-1.5 whitespace-pre-wrap font-sans bg-white/40 p-3.5 rounded-xl border border-white/60 flex-1">
                {item.content}
              </div>

              {/* Interactive Footer */}
              <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between text-[11px] text-slate-600">
                <span className="font-semibold">{item.materialTitle}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`${item.title}\n${item.content}`);
                  }}
                  className="hover:text-blue-700 font-bold transition flex items-center gap-1 text-[10px] uppercase"
                >
                  <Copy className="w-3 h-3" /> Copy Note
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {sortedNotes.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-2" />
          <h3 className="text-base font-bold text-slate-700">No matching notes found</h3>
          <p className="text-xs text-slate-400 mt-1">Try searching for another topic like 'API', 'SQL', or 'Frontend'.</p>
        </div>
      )}
    </div>
  );
}
