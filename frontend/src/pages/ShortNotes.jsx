import React, { useState } from 'react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  HelpCircle, 
  Search, 
  Pin, 
  Layers, 
  Grid, 
  BookOpen,
  FolderOpen,
  CheckCircle2,
  Bookmark
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

const DECK_PALETTES = {
  'pm2-day1': {
    character: 'kitty',
    label: 'Overview & Stacks',
    theme: 'kitty',
    badge: 'bg-red-100 text-red-700 border-red-300 dark:bg-red-950 dark:text-red-300',
    cardBg: 'bg-gradient-to-br from-amber-50 to-orange-100 dark:from-kuromi-900 dark:to-kuromi-950',
    border: 'border-3 border-ink-900 dark:border-amber-400',
    headerBg: 'bg-amber-100 dark:bg-amber-950/60',
    accent: '#ef4444',
  },
  'pm2-day2': {
    character: 'melody',
    label: 'APIs & Integrations',
    theme: 'melody',
    badge: 'bg-pink-100 text-pink-700 border-pink-300 dark:bg-pink-950 dark:text-pink-300',
    cardBg: 'bg-gradient-to-br from-pink-50 to-rose-100 dark:from-kuromi-900 dark:to-kuromi-950',
    border: 'border-3 border-ink-900 dark:border-pink-400',
    headerBg: 'bg-pink-100 dark:bg-pink-950/60',
    accent: '#ec4899',
  },
  'pm2-day3': {
    character: 'cinnamo',
    label: 'Databases & Modeling',
    theme: 'cinnamo',
    badge: 'bg-sky-100 text-sky-700 border-sky-300 dark:bg-sky-950 dark:text-sky-300',
    cardBg: 'bg-gradient-to-br from-sky-50 to-blue-100 dark:from-kuromi-900 dark:to-kuromi-950',
    border: 'border-3 border-ink-900 dark:border-sky-400',
    headerBg: 'bg-sky-100 dark:bg-sky-950/60',
    accent: '#0ea5e9',
  },
  'pm2-tech-guide': {
    character: 'kuromi',
    label: 'Tech Stacks Guide',
    theme: 'kuromi',
    badge: 'bg-purple-100 text-purple-700 border-purple-300 dark:bg-purple-950 dark:text-purple-300',
    cardBg: 'bg-gradient-to-br from-purple-50 to-fuchsia-100 dark:from-kuromi-900 dark:to-kuromi-950',
    border: 'border-3 border-ink-900 dark:border-purple-400',
    headerBg: 'bg-purple-100 dark:bg-purple-950/60',
    accent: '#a855f7',
  },
  'pm2-python': {
    character: 'pompom',
    label: 'Python in Production',
    theme: 'pompom',
    badge: 'bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300',
    cardBg: 'bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-kuromi-900 dark:to-kuromi-950',
    border: 'border-3 border-ink-900 dark:border-emerald-400',
    headerBg: 'bg-emerald-100 dark:bg-emerald-950/60',
    accent: '#10b981',
  }
};

export default function ShortNotes({ 
  materials = [], 
  notesData = {}, 
  activeMaterialId, 
  onSelectMaterial, 
  onStartQuiz
}) {
  const [copiedId, setCopiedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDeckTab, setActiveDeckTab] = useState('all'); // 'all' or matId
  const [masteredCards, setMasteredCards] = useState(new Set());

  // Flatten all notes with normalized metadata and deck grouping
  let allCards = [];

  materials.forEach((mat) => {
    // Look up note for this deck
    const noteObj = notesData[mat.id] || Object.values(notesData).find(n => n?.materialTitle === mat.title);
    if (noteObj && noteObj.sections) {
      noteObj.sections.forEach((sec, idx) => {
        const cleanTitle = sec.heading.replace(/^Slide \d+:\s*/i, '').replace(/^[A-Z0-9.\s]+:\s*/, '');
        allCards.push({
          id: `${mat.id}-${idx}`,
          deckId: mat.id,
          deckTitle: mat.title,
          deckFilename: mat.filename,
          topicIndex: idx + 1,
          totalInDeck: noteObj.sections.length,
          title: cleanTitle || sec.heading,
          content: sec.content,
          sourceRef: sec.sourceRef || `Slide ${idx + 1}`,
          overview: noteObj.overview
        });
      });
    }
  });

  // Filter cards by selected deck tab and search query
  const filteredCards = allCards.filter((card) => {
    const matchesDeck = activeDeckTab === 'all' || card.deckId === activeDeckTab;
    const q = searchTerm.toLowerCase();
    const matchesSearch = !q || card.title.toLowerCase().includes(q) || card.content.toLowerCase().includes(q) || card.deckTitle.toLowerCase().includes(q);
    return matchesDeck && matchesSearch;
  });

  const toggleMastered = (id) => {
    setMasteredCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleCopyCard = (card) => {
    const text = `### [${card.deckTitle}] ${card.title} (${card.sourceRef})\n${card.content}`;
    navigator.clipboard.writeText(text);
    setCopiedId(card.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAll = () => {
    const text = filteredCards.map(n => `### [${n.deckTitle}] ${n.title} (${n.sourceRef})\n${n.content}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopiedId('all');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 dark:from-kuromi-900 dark:via-purple-950 dark:to-slate-900 p-6 sm:p-8 rounded-3xl border-3 border-ink-900 shadow-pop flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
        <div className="washi-tape-striped absolute -top-1 left-12 w-32 h-5 rotate-[-2deg] rounded-sm pointer-events-none z-20" />
        <div className="washi-tape-mint absolute -top-1 right-20 w-28 h-5 rotate-[3deg] rounded-sm pointer-events-none z-20" />
        
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <PopStamp text="HIGH-YIELD REVISION NOTES" color="border-pink-600 text-pink-700 bg-white" rotate="-rotate-2" />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-kuromi-800 text-ink-900 dark:text-white border-2 border-ink-900 text-xs font-fredoka font-black shadow-pop-sm">
              <MyMelody className="w-4 h-4" />
              {allCards.length} Revision Topics
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-2 border-ink-900 text-xs font-fredoka font-black shadow-pop-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              {masteredCards.size} Mastered
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-fredoka font-black tracking-tight text-ink-900 dark:text-white">
            Visual Revision Notes
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-melody-100 mt-1 max-w-xl leading-relaxed font-bold font-quicksand">
            All summary notes, system architecture lifecycles, and bullet breakdowns displayed directly across your 5 uploaded lecture PPT decks. No clicking or flipping needed!
          </p>
        </div>

        {/* Global Controls */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={handleCopyAll}
            className="px-5 py-3 rounded-2xl bg-white dark:bg-kuromi-800 hover:bg-yellow-100 text-ink-900 dark:text-white text-xs font-fredoka font-black transition flex items-center gap-2 border-2 border-ink-900 shadow-pop hover:translate-y-[-1px]"
          >
            {copiedId === 'all' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-pink-500" />}
            {copiedId === 'all' ? 'Copied All!' : 'Copy All Notes'}
          </button>
          <button
            onClick={() => onStartQuiz(activeDeckTab !== 'all' ? activeDeckTab : null)}
            className="px-6 py-3 rounded-2xl bg-kitty-500 hover:bg-kitty-600 text-white text-xs font-fredoka font-black transition flex items-center gap-2 border-2 border-ink-900 shadow-pop hover:translate-y-[-1px]"
          >
            <HelpCircle className="w-4 h-4" />
            Quiz Deck
          </button>
        </div>
      </div>

      {/* PDF / PPT Deck Category Filter Tabs */}
      <div className="bg-white dark:bg-kuromi-900 p-4 rounded-3xl border-3 border-ink-900 shadow-pop flex flex-col gap-3">
        <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b-2 border-dashed border-pink-200 dark:border-kuromi-800">
          <div className="flex items-center gap-2 text-xs font-fredoka font-black text-ink-900 dark:text-melody-200">
            <FolderOpen className="w-4 h-4 text-kitty-600" />
            <span>Filter By Lecture Deck:</span>
          </div>
          <div className="text-xs font-fredoka font-black text-slate-500 dark:text-melody-300">
            Showing {filteredCards.length} of {allCards.length} notes
          </div>
        </div>

        {/* Horizontal Category Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveDeckTab('all')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-fredoka font-black whitespace-nowrap transition flex items-center gap-2 border-2 border-ink-900 shadow-pop-sm ${
              activeDeckTab === 'all'
                ? 'bg-yellow-300 text-ink-900 scale-105'
                : 'bg-white dark:bg-kuromi-800 text-slate-700 dark:text-slate-200 hover:bg-pink-50'
            }`}
          >
            🌟 All 5 Decks ({allCards.length} Notes)
          </button>

          {materials.map((mat) => {
            const count = allCards.filter(c => c.deckId === mat.id).length;
            const pal = DECK_PALETTES[mat.id] || DECK_PALETTES['pm2-day1'];
            const isActive = activeDeckTab === mat.id;

            return (
              <button
                key={mat.id}
                onClick={() => setActiveDeckTab(mat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-fredoka font-black whitespace-nowrap transition flex items-center gap-2 border-2 border-ink-900 shadow-pop-sm ${
                  isActive
                    ? 'bg-kitty-500 text-white scale-105'
                    : 'bg-white dark:bg-kuromi-800 text-slate-700 dark:text-slate-200 hover:bg-pink-50'
                }`}
              >
                {pal.character === 'kitty' && <HelloKitty className="w-4 h-4" />}
                {pal.character === 'melody' && <MyMelody className="w-4 h-4" />}
                {pal.character === 'kuromi' && <Kuromi className="w-4 h-4" />}
                {pal.character === 'cinnamo' && <Cinnamoroll className="w-4 h-3.5" />}
                {pal.character === 'pompom' && <Pompompurin className="w-4 h-4" />}
                <span>{mat.title}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-black/10 dark:bg-white/10">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative pt-1">
          <Search className="w-4 h-4 text-pink-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search concepts, acronyms, or keywords (e.g. REST, ACID, SPOF, FastAPI)..."
            className="w-full text-xs pl-9 pr-4 py-2.5 rounded-2xl border-2 border-ink-900 bg-pink-50/50 dark:bg-kuromi-800 text-ink-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 font-bold font-quicksand shadow-pop-sm placeholder-slate-400"
          />
        </div>
      </div>

      {/* DIRECT NOTES CARDS GRID (ALL CONTENT DIRECTLY VISIBLE) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => {
          const pal = DECK_PALETTES[card.deckId] || DECK_PALETTES['pm2-day1'];
          const isMastered = masteredCards.has(card.id);
          const isCopied = copiedId === card.id;

          return (
            <div
              key={card.id}
              className={`rounded-3xl ${pal.border} ${pal.cardBg} p-6 shadow-pop hover:shadow-pop-lg transition-all duration-200 flex flex-col justify-between relative transform hover:-translate-y-1`}
            >
              {/* Washi Tape */}
              <div className="washi-tape-pink absolute -top-2 left-8 w-20 h-4 rotate-[-2deg] rounded-sm pointer-events-none z-10" />

              {/* Decorative Paperclip */}
              <div className="absolute -top-3 right-8 pointer-events-none z-10">
                <PaperClip className="w-5 h-9" color="#1e102e" />
              </div>

              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 mb-3.5 pt-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] font-fredoka font-black px-2.5 py-1 rounded-full bg-white dark:bg-kuromi-800 text-ink-900 dark:text-white border-2 border-ink-900 shadow-pop-sm">
                    {card.deckTitle.split('-')[0].trim()}
                  </span>
                  <span className="text-[10px] font-bold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 px-2 py-0.5 rounded-md border border-ink-900">
                    {card.sourceRef}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {pal.character === 'kitty' && <HelloKitty className="w-6 h-6" />}
                  {pal.character === 'melody' && <MyMelody className="w-6 h-6" />}
                  {pal.character === 'kuromi' && <Kuromi className="w-6 h-6" />}
                  {pal.character === 'cinnamo' && <Cinnamoroll className="w-6 h-5" />}
                  {pal.character === 'pompom' && <Pompompurin className="w-6 h-6" />}

                  <button
                    onClick={() => toggleMastered(card.id)}
                    className={`p-1.5 rounded-xl border-2 border-ink-900 text-[10px] font-fredoka font-black shadow-pop-sm transition ${
                      isMastered ? 'bg-emerald-400 text-white' : 'bg-white hover:bg-yellow-100 text-ink-900 dark:bg-kuromi-800 dark:text-white'
                    }`}
                    title={isMastered ? 'Mastered!' : 'Click to Mark Mastered'}
                  >
                    {isMastered ? '✓' : '☆'}
                  </button>
                </div>
              </div>

              {/* Note Heading & Concept Tag */}
              <div className="space-y-1 mb-3">
                <div className="flex items-center gap-1 text-[11px] font-fredoka font-black text-kitty-600 dark:text-melody-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  Topic #{card.topicIndex}
                </div>
                <h3 className="font-fredoka font-black text-base sm:text-lg text-ink-900 dark:text-white leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* Full Content Notes (Directly Visible Notebook View) */}
              <div className="notebook-lined p-4 rounded-2xl border-2 border-ink-900 text-xs sm:text-sm font-quicksand font-bold whitespace-pre-line leading-relaxed flex-1 max-h-[320px] overflow-y-auto my-1 shadow-inner">
                {card.content}
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t-2 border-ink-900/20 dark:border-white/20 flex items-center justify-between text-xs text-ink-900 dark:text-slate-200 font-bold font-fredoka">
                <span className="truncate max-w-[140px] text-[11px] text-slate-600 dark:text-melody-200">
                  {card.deckFilename}
                </span>
                <button
                  onClick={() => handleCopyCard(card)}
                  className="hover:text-pink-600 dark:hover:text-pink-400 transition uppercase font-black bg-white dark:bg-kuromi-800 px-3 py-1 rounded-xl border border-ink-900 shadow-pop-sm text-[10px] flex items-center gap-1"
                >
                  {isCopied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 text-pink-500" />}
                  {isCopied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredCards.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-kuromi-900 rounded-3xl border-3 border-ink-900 shadow-pop p-8">
          <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-2" />
          <h3 className="text-base font-fredoka font-black text-ink-900 dark:text-white">No matching notes found</h3>
          <p className="text-xs text-slate-500 mt-1 font-quicksand font-bold">Try selecting 'All 5 Decks' or clearing your search term.</p>
        </div>
      )}
    </div>
  );
}
