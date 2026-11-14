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

const STICKY_THEMES = [
  {
    character: 'melody',
    name: 'My Melody',
    washi: 'washi-tape-pink',
    bg: 'bg-gradient-to-br from-pink-100 to-rose-200 dark:from-pink-950 dark:to-rose-900',
    border: 'border-3 border-ink-900',
    tag: 'bg-white text-pink-700 border-2 border-ink-900 font-black shadow-pop-sm',
    cardInner: 'notebook-lined border-2 border-ink-900 text-slate-900 dark:text-slate-100 shadow-pop-sm font-bold',
    title: 'text-pink-950 dark:text-pink-100 font-fredoka font-black',
    accent: '#f43f5e',
    clipColor: '#f43f5e',
  },
  {
    character: 'kitty',
    name: 'Hello Kitty',
    washi: 'washi-tape-striped',
    bg: 'bg-gradient-to-br from-yellow-100 to-amber-200 dark:from-amber-950 dark:to-yellow-900',
    border: 'border-3 border-ink-900',
    tag: 'bg-white text-amber-900 border-2 border-ink-900 font-black shadow-pop-sm',
    cardInner: 'notebook-lined border-2 border-ink-900 text-slate-900 dark:text-slate-100 shadow-pop-sm font-bold',
    title: 'text-amber-950 dark:text-yellow-100 font-fredoka font-black',
    accent: '#f59e0b',
    clipColor: '#f59e0b',
  },
  {
    character: 'kuromi',
    name: 'Kuromi',
    washi: 'washi-tape-purple',
    bg: 'bg-gradient-to-br from-purple-100 to-fuchsia-200 dark:from-purple-950 dark:to-fuchsia-900',
    border: 'border-3 border-ink-900',
    tag: 'bg-white text-purple-900 border-2 border-ink-900 font-black shadow-pop-sm',
    cardInner: 'notebook-lined border-2 border-ink-900 text-slate-900 dark:text-slate-100 shadow-pop-sm font-bold',
    title: 'text-purple-950 dark:text-purple-100 font-fredoka font-black',
    accent: '#a855f7',
    clipColor: '#a855f7',
  },
  {
    character: 'cinnamo',
    name: 'Cinnamoroll',
    washi: 'washi-tape-blue',
    bg: 'bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-950 dark:to-blue-900',
    border: 'border-3 border-ink-900',
    tag: 'bg-white text-sky-900 border-2 border-ink-900 font-black shadow-pop-sm',
    cardInner: 'notebook-lined border-2 border-ink-900 text-slate-900 dark:text-slate-100 shadow-pop-sm font-bold',
    title: 'text-sky-950 dark:text-sky-100 font-fredoka font-black',
    accent: '#0ea5e9',
    clipColor: '#0ea5e9',
  },
  {
    character: 'pompom',
    name: 'Pompompurin',
    washi: 'washi-tape-mint',
    bg: 'bg-gradient-to-br from-emerald-100 to-teal-200 dark:from-emerald-950 dark:to-teal-900',
    border: 'border-3 border-ink-900',
    tag: 'bg-white text-emerald-900 border-2 border-ink-900 font-black shadow-pop-sm',
    cardInner: 'notebook-lined border-2 border-ink-900 text-slate-900 dark:text-slate-100 shadow-pop-sm font-bold',
    title: 'text-emerald-950 dark:text-emerald-100 font-fredoka font-black',
    accent: '#10b981',
    clipColor: '#10b981',
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
      <div className="relative bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 dark:from-kuromi-900 dark:via-purple-950 dark:to-slate-900 p-7 sm:p-9 rounded-3xl border-3 border-ink-900 shadow-pop flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
        <div className="washi-tape-striped absolute -top-1 left-12 w-32 h-5 rotate-[-2deg] rounded-sm pointer-events-none z-20" />
        <div className="washi-tape-mint absolute -top-1 right-20 w-28 h-5 rotate-[3deg] rounded-sm pointer-events-none z-20" />
        
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <PopStamp text="STUDY PINBOARD" color="border-pink-600 text-pink-700 bg-white" rotate="-rotate-2" />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-kuromi-800 text-ink-900 dark:text-white border-2 border-ink-900 text-xs font-fredoka font-black shadow-pop-sm">
              <MyMelody className="w-4 h-4" />
              Pastel Note Cards
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-fredoka font-black tracking-tight text-ink-900 dark:text-white">
            Visual Revision Notes
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-melody-100 mt-1 max-w-xl leading-relaxed font-bold font-quicksand">
            Every core architectural framework, metric equation, and product definition organized into vivid Sanrio sticky notes. Pin important concepts or search instantly!
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={handleCopyBoard}
            className="px-5 py-3 rounded-2xl bg-white dark:bg-kuromi-800 hover:bg-yellow-100 text-ink-900 dark:text-white text-xs font-fredoka font-black transition flex items-center gap-2 border-2 border-ink-900 shadow-pop hover:translate-y-[-1px]"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-pink-500" />}
            {copied ? 'Copied All Notes!' : 'Copy Entire Board'}
          </button>
          <button
            onClick={() => onStartQuiz(viewMode !== 'all' ? viewMode : null)}
            className="px-6 py-3 rounded-2xl bg-kitty-500 hover:bg-kitty-600 text-white text-xs font-fredoka font-black transition flex items-center gap-2 border-2 border-ink-900 shadow-pop hover:translate-y-[-1px]"
          >
            <HelpCircle className="w-4 h-4" />
            Quiz On These Concepts
          </button>
        </div>
      </div>

      {/* Control Bar: Material Filter & Instant Search */}
      <div className="bg-white dark:bg-kuromi-900 p-4 sm:p-5 rounded-3xl border-3 border-ink-900 shadow-pop flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-pink-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search notes (e.g. REST, 403, ACID, Next.js)..."
            className="w-full text-xs pl-9 pr-4 py-3 rounded-2xl border-2 border-ink-900 bg-pink-50/50 dark:bg-kuromi-800 text-ink-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 font-bold font-quicksand placeholder-slate-400 shadow-pop-sm"
          />
        </div>

        {/* Course Deck Selector Filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label className="text-xs font-fredoka font-black text-ink-900 dark:text-melody-300 shrink-0">Filter Deck:</label>
          <select
            value={viewMode}
            onChange={(e) => {
              setViewMode(e.target.value);
              if (e.target.value !== 'all') {
                onSelectMaterial(e.target.value);
              }
            }}
            className="w-full sm:w-auto text-xs font-fredoka font-black bg-yellow-200 dark:bg-kuromi-800 border-2 border-ink-900 rounded-2xl px-4 py-3 text-ink-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-pop-sm"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedNotes.map((item, index) => {
          const theme = STICKY_THEMES[index % STICKY_THEMES.length];
          const isPinned = pinnedIds.has(item.id);

          return (
            <div
              key={item.id}
              className={`rounded-3xl ${theme.border} ${theme.bg} p-6 shadow-pop hover:shadow-pop-lg transition-all duration-200 flex flex-col justify-between relative transform hover:-translate-y-2`}
            >
              {/* Washi Tape on each card */}
              <div className={`${theme.washi} absolute -top-2 left-8 w-20 h-4 rotate-[-2deg] rounded-sm pointer-events-none z-10`} />

              {/* Decorative Paperclip on Right */}
              <div className="absolute -top-3 right-8 pointer-events-none select-none z-10">
                <PaperClip className="w-5 h-9" color="#1e102e" />
              </div>

              {/* Note Pin Icon & Character Sticker */}
              <div className="flex items-start justify-between gap-3 mb-3.5 pt-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className={`text-[10px] font-fredoka font-black px-3 py-1 rounded-full ${theme.tag}`}>
                    {item.materialTitle.split(':')[0].replace('.pptx', '')}
                  </span>
                  {item.sourceRef && (
                    <span className="text-[10px] font-bold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 px-2 py-0.5 rounded-md border border-ink-900">
                      Ref: {item.sourceRef}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {theme.character === 'melody' && <MyMelody className="w-7 h-7" />}
                  {theme.character === 'kitty' && <HelloKitty className="w-7 h-7" />}
                  {theme.character === 'kuromi' && <Kuromi className="w-7 h-7" />}
                  {theme.character === 'cinnamo' && <Cinnamoroll className="w-7 h-6" />}
                  {theme.character === 'pompom' && <Pompompurin className="w-7 h-7" />}

                  <button
                    onClick={() => togglePin(item.id)}
                    className={`p-2 rounded-xl transition border-2 border-ink-900 shadow-pop-sm ${
                      isPinned ? 'bg-yellow-300 text-ink-900 font-black' : 'bg-white hover:bg-pink-100 text-ink-900'
                    }`}
                    title={isPinned ? 'Unpin Note' : 'Pin to Top'}
                  >
                    <Pin className={`w-3.5 h-3.5 ${isPinned ? 'fill-ink-900' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Note Heading */}
              <h3 className={`font-black text-base sm:text-lg leading-snug mb-3.5 ${theme.title || 'text-ink-900'}`}>
                {item.title}
              </h3>

              {/* Note Content Bullets in Notebook Paper */}
              <div className={`text-xs sm:text-sm leading-relaxed space-y-2 whitespace-pre-wrap font-quicksand p-4 rounded-2xl flex-1 ${theme.cardInner}`}>
                {item.content}
              </div>

              {/* Interactive Footer */}
              <div className="mt-4 pt-3 border-t-2 border-ink-900/20 dark:border-white/20 flex items-center justify-between text-xs text-ink-900 dark:text-slate-200 font-bold font-fredoka">
                <span className="truncate max-w-[150px]">{item.materialTitle}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`${item.title}\n${item.content}`);
                  }}
                  className="hover:text-pink-600 dark:hover:text-pink-400 transition flex items-center gap-1.5 uppercase font-black bg-white/80 dark:bg-kuromi-800 px-3 py-1 rounded-xl border border-ink-900 shadow-pop-sm"
                >
                  <Copy className="w-3.5 h-3.5" /> Copy
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
