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
  RotateCw,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  FolderOpen,
  CheckCircle2
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
    frontGradient: 'from-amber-100 via-yellow-50 to-orange-100 dark:from-amber-950 dark:via-orange-950 dark:to-stone-900',
    backGradient: 'from-yellow-100 to-amber-200 dark:from-yellow-950 dark:to-stone-900',
    border: 'border-3 border-ink-900 dark:border-amber-400',
    accent: '#ef4444',
  },
  'pm2-day2': {
    character: 'melody',
    label: 'APIs & Integrations',
    theme: 'melody',
    badge: 'bg-pink-100 text-pink-700 border-pink-300 dark:bg-pink-950 dark:text-pink-300',
    frontGradient: 'from-pink-100 via-rose-50 to-pink-200 dark:from-pink-950 dark:via-rose-950 dark:to-stone-900',
    backGradient: 'from-rose-100 to-pink-200 dark:from-rose-950 dark:to-pink-900',
    border: 'border-3 border-ink-900 dark:border-pink-400',
    accent: '#ec4899',
  },
  'pm2-day3': {
    character: 'cinnamo',
    label: 'Databases & Modeling',
    theme: 'cinnamo',
    badge: 'bg-sky-100 text-sky-700 border-sky-300 dark:bg-sky-950 dark:text-sky-300',
    frontGradient: 'from-sky-100 via-blue-50 to-cyan-100 dark:from-sky-950 dark:via-blue-950 dark:to-stone-900',
    backGradient: 'from-cyan-100 to-sky-200 dark:from-cyan-950 dark:to-sky-900',
    border: 'border-3 border-ink-900 dark:border-sky-400',
    accent: '#0ea5e9',
  },
  'pm2-tech-guide': {
    character: 'kuromi',
    label: 'Tech Stacks Guide',
    theme: 'kuromi',
    badge: 'bg-purple-100 text-purple-700 border-purple-300 dark:bg-purple-950 dark:text-purple-300',
    frontGradient: 'from-purple-100 via-fuchsia-50 to-violet-100 dark:from-purple-950 dark:via-fuchsia-950 dark:to-stone-900',
    backGradient: 'from-fuchsia-100 to-purple-200 dark:from-fuchsia-950 dark:to-purple-900',
    border: 'border-3 border-ink-900 dark:border-purple-400',
    accent: '#a855f7',
  },
  'pm2-python': {
    character: 'pompom',
    label: 'Python in Production',
    theme: 'pompom',
    badge: 'bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300',
    frontGradient: 'from-emerald-100 via-teal-50 to-green-100 dark:from-emerald-950 dark:via-teal-950 dark:to-stone-900',
    backGradient: 'from-teal-100 to-emerald-200 dark:from-teal-950 dark:to-emerald-900',
    border: 'border-3 border-ink-900 dark:border-emerald-400',
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
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDeckTab, setActiveDeckTab] = useState('all'); // 'all' or matId
  const [flippedCards, setFlippedCards] = useState(new Set()); // set of card ids flipped to back
  const [masteredCards, setMasteredCards] = useState(new Set());
  const [studyMode, setStudyMode] = useState('grid'); // 'grid' (all categorized cards) or 'review' (one-by-one study deck)
  const [reviewIndex, setReviewIndex] = useState(0);

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

  // Toggle card flip (Front <-> Back)
  const toggleFlip = (id, e) => {
    if (e) e.stopPropagation();
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const flipAllToBack = () => {
    const allIds = new Set(filteredCards.map(c => c.id));
    setFlippedCards(allIds);
  };

  const flipAllToFront = () => {
    setFlippedCards(new Set());
  };

  const toggleMastered = (id, e) => {
    if (e) e.stopPropagation();
    setMasteredCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleCopyBoard = () => {
    const text = filteredCards.map(n => `### [${n.deckTitle}] ${n.title} (${n.sourceRef})\n${n.content}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activePalette = DECK_PALETTES[activeDeckTab] || DECK_PALETTES['pm2-day1'];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 dark:from-kuromi-900 dark:via-purple-950 dark:to-slate-900 p-6 sm:p-8 rounded-3xl border-3 border-ink-900 shadow-pop flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
        <div className="washi-tape-striped absolute -top-1 left-12 w-32 h-5 rotate-[-2deg] rounded-sm pointer-events-none z-20" />
        <div className="washi-tape-mint absolute -top-1 right-20 w-28 h-5 rotate-[3deg] rounded-sm pointer-events-none z-20" />
        
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <PopStamp text="INTERACTIVE FLASHCARDS" color="border-pink-600 text-pink-700 bg-white" rotate="-rotate-2" />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-kuromi-800 text-ink-900 dark:text-white border-2 border-ink-900 text-xs font-fredoka font-black shadow-pop-sm">
              <MyMelody className="w-4 h-4" />
              {allCards.length} Revision Flashcards
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-2 border-ink-900 text-xs font-fredoka font-black shadow-pop-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              {masteredCards.size} Mastered
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-fredoka font-black tracking-tight text-ink-900 dark:text-white">
            Course Deck Flashcards
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-melody-100 mt-1 max-w-xl leading-relaxed font-bold font-quicksand">
            Categorised strictly by your 5 uploaded lecture PPT decks. Click any flashcard to flip between the high-level concept question and the full textbook breakdown.
          </p>
        </div>

        {/* Global Controls */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={() => setStudyMode(studyMode === 'grid' ? 'review' : 'grid')}
            className="px-5 py-3 rounded-2xl bg-white dark:bg-kuromi-800 hover:bg-yellow-100 text-ink-900 dark:text-white text-xs font-fredoka font-black transition flex items-center gap-2 border-2 border-ink-900 shadow-pop hover:translate-y-[-1px]"
          >
            <RotateCw className="w-4 h-4 text-purple-600" />
            {studyMode === 'grid' ? 'Practice 1-by-1 Deck' : 'View Full Grid'}
          </button>
          <button
            onClick={handleCopyBoard}
            className="px-5 py-3 rounded-2xl bg-white dark:bg-kuromi-800 hover:bg-yellow-100 text-ink-900 dark:text-white text-xs font-fredoka font-black transition flex items-center gap-2 border-2 border-ink-900 shadow-pop hover:translate-y-[-1px]"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-pink-500" />}
            {copied ? 'Copied!' : 'Copy Cards'}
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
            <span>Select Deck Category:</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={flipAllToBack}
              className="text-[11px] font-fredoka font-black px-3 py-1 bg-pink-100 dark:bg-kuromi-800 text-pink-700 dark:text-melody-200 rounded-xl border border-ink-900 hover:bg-pink-200"
            >
              Flip All to Answers 🔄
            </button>
            <button
              onClick={flipAllToFront}
              className="text-[11px] font-fredoka font-black px-3 py-1 bg-yellow-100 dark:bg-kuromi-800 text-yellow-800 dark:text-yellow-200 rounded-xl border border-ink-900 hover:bg-yellow-200"
            >
              Flip All to Front 📖
            </button>
          </div>
        </div>

        {/* Horizontal Category Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => { setActiveDeckTab('all'); setReviewIndex(0); }}
            className={`px-4 py-2.5 rounded-2xl text-xs font-fredoka font-black whitespace-nowrap transition flex items-center gap-2 border-2 border-ink-900 shadow-pop-sm ${
              activeDeckTab === 'all'
                ? 'bg-yellow-300 text-ink-900 scale-105'
                : 'bg-white dark:bg-kuromi-800 text-slate-700 dark:text-slate-200 hover:bg-pink-50'
            }`}
          >
            🌟 All 5 Decks ({allCards.length} Cards)
          </button>

          {materials.map((mat) => {
            const count = allCards.filter(c => c.deckId === mat.id).length;
            const pal = DECK_PALETTES[mat.id] || DECK_PALETTES['pm2-day1'];
            const isActive = activeDeckTab === mat.id;

            return (
              <button
                key={mat.id}
                onClick={() => { setActiveDeckTab(mat.id); setReviewIndex(0); }}
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

      {/* ONE-BY-ONE FLASHCARD PRACTICE MODE */}
      {studyMode === 'review' && filteredCards.length > 0 && (
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-between text-xs font-fredoka font-black text-ink-900 dark:text-melody-200">
            <span>Card {reviewIndex + 1} of {filteredCards.length}</span>
            <span>Click card to reveal explanation</span>
          </div>

          {(() => {
            const currentCard = filteredCards[reviewIndex];
            const pal = DECK_PALETTES[currentCard.deckId] || DECK_PALETTES['pm2-day1'];
            const isFlipped = flippedCards.has(currentCard.id);
            const isMastered = masteredCards.has(currentCard.id);

            return (
              <div 
                onClick={(e) => toggleFlip(currentCard.id, e)}
                className={`min-h-[380px] p-8 rounded-3xl cursor-pointer select-none transition-all duration-300 relative flex flex-col justify-between ${pal.border} shadow-pop-lg ${
                  isFlipped 
                    ? `bg-gradient-to-br ${pal.backGradient}`
                    : `bg-gradient-to-br ${pal.frontGradient}`
                }`}
              >
                <div className="washi-tape-striped absolute -top-2 left-10 w-28 h-5 rotate-[-2deg] rounded-sm pointer-events-none" />

                <div className="flex items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-fredoka font-black bg-white dark:bg-kuromi-800 text-ink-900 dark:text-white border-2 border-ink-900 shadow-pop-sm">
                    {currentCard.deckTitle} • {currentCard.sourceRef}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => toggleMastered(currentCard.id, e)}
                      className={`px-3 py-1 rounded-full text-xs font-fredoka font-black border-2 border-ink-900 transition ${
                        isMastered ? 'bg-emerald-400 text-white' : 'bg-white text-ink-900'
                      }`}
                    >
                      {isMastered ? '✓ Mastered' : 'Mark Mastered'}
                    </button>
                    <span className="text-xs font-fredoka font-black px-2.5 py-1 bg-yellow-300 text-ink-900 rounded-xl border border-ink-900">
                      {isFlipped ? 'Answer Side' : 'Question Side'}
                    </span>
                  </div>
                </div>

                <div className="my-auto py-6">
                  {!isFlipped ? (
                    <div className="text-center space-y-4">
                      <span className="text-xs uppercase tracking-wider font-fredoka font-black text-kitty-600 dark:text-melody-300">
                        Concept Flashcard #{currentCard.topicIndex}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-fredoka font-black text-ink-900 dark:text-white leading-tight">
                        {currentCard.title}
                      </h2>
                      <p className="text-xs font-quicksand font-bold text-slate-600 dark:text-melody-200">
                        Tap anywhere on this card to flip and view the full breakdown →
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <h3 className="text-lg font-fredoka font-black text-ink-900 dark:text-white pb-2 border-b-2 border-ink-900/20">
                        {currentCard.title}
                      </h3>
                      <div className="notebook-lined p-5 rounded-2xl border-2 border-ink-900 text-xs sm:text-sm font-quicksand font-bold whitespace-pre-line leading-relaxed max-h-[260px] overflow-y-auto">
                        {currentCard.content}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-fredoka font-bold text-slate-700 dark:text-slate-300 pt-3 border-t-2 border-ink-900/10">
                  <span>From: {currentCard.deckFilename}</span>
                  <span className="flex items-center gap-1 text-kitty-600 dark:text-melody-300">
                    <RotateCw className="w-3.5 h-3.5" /> Tap card to flip
                  </span>
                </div>
              </div>
            );
          })()}

          {/* Stepper Controls */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              onClick={() => setReviewIndex(prev => Math.max(0, prev - 1))}
              disabled={reviewIndex === 0}
              className="flex-1 py-3 px-4 rounded-2xl bg-white dark:bg-kuromi-800 text-ink-900 dark:text-white text-xs font-fredoka font-black border-2 border-ink-900 shadow-pop disabled:opacity-40 flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" /> Previous Card
            </button>
            <button
              onClick={() => setReviewIndex(prev => Math.min(filteredCards.length - 1, prev + 1))}
              disabled={reviewIndex === filteredCards.length - 1}
              className="flex-1 py-3 px-4 rounded-2xl bg-kitty-500 hover:bg-kitty-600 text-white text-xs font-fredoka font-black border-2 border-ink-900 shadow-pop disabled:opacity-40 flex items-center justify-center gap-2"
            >
              Next Card <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* FULL CATEGORIZED FLASHCARDS GRID */}
      {studyMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => {
            const pal = DECK_PALETTES[card.deckId] || DECK_PALETTES['pm2-day1'];
            const isFlipped = flippedCards.has(card.id);
            const isMastered = masteredCards.has(card.id);

            return (
              <div
                key={card.id}
                onClick={(e) => toggleFlip(card.id, e)}
                className={`rounded-3xl ${pal.border} p-6 shadow-pop hover:shadow-pop-lg transition-all duration-300 flex flex-col justify-between relative cursor-pointer transform hover:-translate-y-1.5 select-none ${
                  isFlipped 
                    ? `bg-gradient-to-br ${pal.backGradient}`
                    : `bg-gradient-to-br ${pal.frontGradient}`
                }`}
              >
                {/* Washi Tape */}
                <div className="washi-tape-pink absolute -top-2 left-8 w-20 h-4 rotate-[-2deg] rounded-sm pointer-events-none z-10" />

                {/* Decorative Paperclip */}
                <div className="absolute -top-3 right-8 pointer-events-none z-10">
                  <PaperClip className="w-5 h-9" color="#1e102e" />
                </div>

                {/* Card Header */}
                <div className="flex items-start justify-between gap-3 mb-3 pt-1">
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
                      onClick={(e) => toggleMastered(card.id, e)}
                      className={`p-1.5 rounded-xl border-2 border-ink-900 text-[10px] font-fredoka font-black shadow-pop-sm ${
                        isMastered ? 'bg-emerald-400 text-white' : 'bg-white hover:bg-yellow-100 text-ink-900'
                      }`}
                      title={isMastered ? 'Mastered!' : 'Click to Mark Mastered'}
                    >
                      {isMastered ? '✓' : '☆'}
                    </button>
                  </div>
                </div>

                {/* Question / Concept (Front) */}
                {!isFlipped ? (
                  <div className="my-auto py-4 space-y-3">
                    <div className="flex items-center gap-1 text-[11px] font-fredoka font-black text-kitty-600 dark:text-melody-300">
                      <Sparkles className="w-3.5 h-3.5" />
                      Concept #{card.topicIndex}
                    </div>
                    <h3 className="font-fredoka font-black text-base sm:text-lg text-ink-900 dark:text-white leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-melody-200 font-quicksand font-bold bg-white/60 dark:bg-kuromi-950/60 p-3 rounded-xl border border-ink-900/20">
                      💡 Click to flip and read high-yield summary notes, architecture details, and equations.
                    </p>
                  </div>
                ) : (
                  /* Answer / Notes Breakdown (Back) */
                  <div className="space-y-2 py-1">
                    <div className="flex items-center justify-between text-[11px] font-fredoka font-black text-emerald-700 dark:text-emerald-300 pb-1">
                      <span>✓ Flashcard Solution</span>
                      <span className="text-[10px] text-slate-500">{card.sourceRef}</span>
                    </div>
                    <h4 className="font-fredoka font-black text-sm text-ink-900 dark:text-white">
                      {card.title}
                    </h4>
                    <div className="notebook-lined p-3.5 rounded-xl border-2 border-ink-900 text-xs font-quicksand font-bold whitespace-pre-wrap leading-relaxed max-h-[220px] overflow-y-auto">
                      {card.content}
                    </div>
                  </div>
                )}

                {/* Footer with Flip Action */}
                <div className="mt-4 pt-3 border-t-2 border-ink-900/20 dark:border-white/20 flex items-center justify-between text-xs text-ink-900 dark:text-slate-200 font-bold font-fredoka">
                  <span className="truncate max-w-[140px] text-[11px] text-slate-600 dark:text-melody-200">
                    {card.deckFilename}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-kitty-600 dark:text-melody-300 font-black flex items-center gap-1">
                      <RotateCw className="w-3 h-3" />
                      {isFlipped ? 'Show Front' : 'Flip'}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard.writeText(`${card.title}\n${card.content}`);
                      }}
                      className="hover:text-pink-600 dark:hover:text-pink-400 transition uppercase font-black bg-white/80 dark:bg-kuromi-800 px-2.5 py-1 rounded-xl border border-ink-900 shadow-pop-sm text-[10px]"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Empty State */}
      {filteredCards.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-kuromi-900 rounded-3xl border-3 border-ink-900 shadow-pop p-8">
          <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-2" />
          <h3 className="text-base font-fredoka font-black text-ink-900 dark:text-white">No matching flashcards found</h3>
          <p className="text-xs text-slate-500 mt-1 font-quicksand font-bold">Try selecting 'All 5 Decks' or clearing your search term.</p>
        </div>
      )}
    </div>
  );
}
