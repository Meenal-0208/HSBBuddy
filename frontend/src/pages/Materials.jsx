import React, { useState } from 'react';
import { 
  FileText, 
  Trash2, 
  BookOpen, 
  HelpCircle, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Heart,
  FolderOpen
} from 'lucide-react';

import { HelloKitty, MyMelody, Kuromi, Cinnamoroll, Pompompurin, CuteStar, CuteBow } from '../components/SanrioStickers';
import { Paimon, Primogem, MoraCoin, TeyvatStar } from '../components/GenshinStickers';

export default function Materials({ 
  materials, 
  onSelectMaterial, 
  onDeleteMaterial,
  onGenerateNotes,
  onStartQuiz,
  edition = 'genshin'
}) {
  const isGenshin = edition === 'genshin';
  const [filterType, setFilterType] = useState('all');

  const filteredMaterials = materials.filter(m => {
    if (filterType === 'all') return true;
    return m.fileType === filterType;
  });

  return (
    <div className="space-y-8 relative">
      {/* Decorative Washi Tape */}
      <div className="hidden sm:block absolute -top-4 right-10 w-28 h-4 washi-tape-blue rotate-2 z-10 opacity-80 rounded-xs" />

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-cinnamo-100 dark:bg-kuromi-800 text-cinnamo-600 dark:text-kuromi-300 shadow-pop-sm border border-cinnamo-200 dark:border-kuromi-600 font-fredoka mb-2">
            {isGenshin ? <Primogem className="w-4 h-4" /> : <CuteBow className="w-4 h-4" />}
            {isGenshin ? 'Archon Decks Library' : 'Study Materials Library'}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white tracking-tight font-fredoka flex items-center gap-2">
            <span>{isGenshin ? 'Product Management Archon Decks' : 'Course PPT Decks & Files'}</span>
            {isGenshin ? (
              <Paimon className="w-9 h-9 animate-cute-float" />
            ) : (
              <Cinnamoroll className="w-8 h-8 animate-bounce-gentle" />
            )}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-quicksand font-bold">
            {isGenshin 
              ? 'All 5 syllabus lecture PPT decks ready with 250 Paimon quest questions and visual revision scrolls!' 
              : 'All 5 syllabus lecture PPT decks ready with 250 AI-generated case questions and revision summaries!'}
          </p>
        </div>
      </div>

      {/* Materials List Table */}
      <div className="bg-white dark:bg-kuromi-900 rounded-3xl border-2 border-kitty-200 dark:border-kuromi-700 shadow-pop overflow-hidden transition-colors">
        {/* Table Filters */}
        <div className="p-4 sm:p-5 border-b-2 border-kitty-100 dark:border-kuromi-800 flex flex-wrap items-center justify-between gap-3 bg-kitty-50/50 dark:bg-kuromi-950/40">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 font-fredoka">
            <CuteStar className="w-4 h-4 text-kitty-500" />
            <span>Filter Files:</span>
            {['all', 'pptx', 'pdf', 'docx'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-3 py-1 rounded-xl uppercase text-[11px] font-black tracking-wide transition font-fredoka shadow-pop-sm ${
                  filterType === type 
                    ? 'bg-kitty-500 text-white' 
                    : 'bg-white dark:bg-kuromi-800 text-slate-600 dark:text-slate-300 border border-kitty-200 dark:border-kuromi-700 hover:bg-kitty-100 dark:hover:bg-kuromi-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="text-xs text-kitty-600 dark:text-kuromi-400 font-bold font-quicksand flex items-center gap-1.5">
            <CuteBow className="w-3.5 h-3.5" />
            Showing {filteredMaterials.length} of {materials.length} decks
          </div>
        </div>

        {/* List Items */}
        <div className="divide-y-2 divide-kitty-100 dark:divide-kuromi-800">
          {filteredMaterials.map((mat, idx) => (
            <div key={mat.id} className="p-4 sm:p-5 hover:bg-kitty-50/40 dark:hover:bg-kuromi-850 transition flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4 min-w-0">
                <div className={`p-3 rounded-2xl text-xs font-black uppercase shrink-0 font-fredoka shadow-pop-sm ${
                  idx % 3 === 0 ? 'bg-kitty-100 dark:bg-kitty-950 text-kitty-600 dark:text-kitty-300 border-2 border-kitty-200' :
                  idx % 3 === 1 ? 'bg-melody-100 dark:bg-melody-950 text-melody-600 dark:text-melody-300 border-2 border-melody-200' : 
                  'bg-cinnamo-100 dark:bg-cinnamo-950 text-cinnamo-600 dark:text-cinnamo-300 border-2 border-cinnamo-200'
                }`}>
                  {mat.fileType}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      onClick={() => onSelectMaterial(mat)}
                      className="font-black text-slate-900 dark:text-white text-sm sm:text-base hover:text-kitty-600 dark:hover:text-kuromi-400 transition text-left font-fredoka"
                    >
                      {mat.title}
                    </button>
                    {mat.status === 'Ready' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 font-fredoka">
                        <CheckCircle2 className="w-3 h-3" /> Ready
                      </span>
                    )}
                    {mat.status === 'Processing' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-800 animate-pulse font-fredoka">
                        <Clock className="w-3 h-3" /> Extracting Text
                      </span>
                    )}
                    {mat.status === 'Failed' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 px-2.5 py-0.5 rounded-full border border-rose-200 dark:border-rose-800 font-fredoka">
                        <AlertCircle className="w-3 h-3" /> Extraction Error
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-quicksand font-bold">
                    Filename: <span className="font-mono text-slate-600 dark:text-slate-300">{mat.filename}</span> • {mat.size} • {mat.slidesCount > 0 ? `${mat.slidesCount} slides/pages` : 'Pending'}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2.5 self-end md:self-center shrink-0">
                <button
                  onClick={() => onSelectMaterial(mat)}
                  className="px-3 py-1.5 text-xs font-black text-slate-700 dark:text-slate-200 bg-white dark:bg-kuromi-800 hover:bg-slate-100 dark:hover:bg-kuromi-700 rounded-xl transition border border-slate-200 dark:border-kuromi-700 shadow-pop-sm font-fredoka"
                >
                  Preview Deck
                </button>
                <button
                  onClick={() => onGenerateNotes(mat)}
                  disabled={mat.status !== 'Ready'}
                  className="px-3.5 py-1.5 text-xs font-black text-melody-600 dark:text-kuromi-300 bg-melody-50 dark:bg-kuromi-800 hover:bg-melody-100 dark:hover:bg-kuromi-700 rounded-xl transition flex items-center gap-1.5 disabled:opacity-40 border border-melody-200 dark:border-kuromi-700 shadow-pop-sm font-fredoka"
                >
                  <BookOpen className="w-3.5 h-3.5" /> Notes
                </button>
                <button
                  onClick={() => onStartQuiz(mat.id)}
                  disabled={mat.status !== 'Ready'}
                  className="px-3.5 py-1.5 text-xs font-black text-white bg-kitty-500 hover:bg-kitty-600 rounded-xl transition flex items-center gap-1.5 disabled:opacity-40 shadow-pop-sm font-fredoka"
                >
                  <HelpCircle className="w-3.5 h-3.5" /> 50 Q Quiz
                </button>
                <button
                  onClick={() => onDeleteMaterial(mat.id)}
                  className="p-2 text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded-xl transition"
                  title="Delete file"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
