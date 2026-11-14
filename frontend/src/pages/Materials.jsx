import React, { useState } from 'react';
import { 
  UploadCloud, 
  FileText, 
  Trash2, 
  RefreshCw, 
  BookOpen, 
  HelpCircle, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  Heart
} from 'lucide-react';

import { HelloKitty, MyMelody, Kuromi, Cinnamoroll, Pompompurin, CuteStar, CuteBow } from '../components/SanrioStickers';

export default function Materials({ 
  materials, 
  onSelectMaterial, 
  onUploadMock, 
  onDeleteMaterial,
  onGenerateNotes,
  onStartQuiz
}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [customTitle, setCustomTitle] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [filterType, setFilterType] = useState('all');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Default title from filename minus extension
      const cleanName = file.name.replace(/\.[^/.]+$/, "");
      setCustomTitle(cleanName);
    }
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsUploading(true);
    try {
      if (onUploadMock) {
        await onUploadMock({
          file: selectedFile,
          title: customTitle || selectedFile.name,
          filename: selectedFile.name,
          fileType: selectedFile.name.split('.').pop().toLowerCase(),
          size: `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`,
        });
      }
      setSelectedFile(null);
      setCustomTitle('');
    } finally {
      setIsUploading(false);
    }
  };

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
            <CuteBow className="w-4 h-4" />
            Study Materials Library
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white tracking-tight font-fredoka flex items-center gap-2">
            <span>Course PPT Decks & Files</span>
            <Cinnamoroll className="w-8 h-8 animate-bounce-gentle" />
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-quicksand font-bold">
            All 5 syllabus lecture PPT decks ready with 250 AI-generated case questions and revision summaries!
          </p>
        </div>
      </div>

      {/* Upload Box Component */}
      <div className="bg-white dark:bg-kuromi-900 rounded-3xl border-3 border-dashed border-cinnamo-300 dark:border-kuromi-600 p-6 shadow-pop hover:border-cinnamo-400 transition-colors relative">
        <div className="absolute -top-3 left-8 w-20 h-3.5 washi-tape-pink -rotate-1 opacity-90 rounded-xs" />
        <form onSubmit={handleUploadSubmit} className="space-y-4">
          <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-cinnamo-200 dark:border-kuromi-700 rounded-2xl bg-cinnamo-50/40 dark:bg-kuromi-950/40">
            <Pompompurin className="w-14 h-14 mb-2 animate-bounce-gentle" />
            <div className="text-center">
              <label className="cursor-pointer">
                <span className="text-sm font-black text-kitty-600 dark:text-kuromi-300 hover:text-kitty-700 font-fredoka bg-white dark:bg-kuromi-800 px-4 py-2 rounded-xl border-2 border-kitty-200 dark:border-kuromi-600 shadow-pop-sm inline-block">
                  Upload PPTX, PDF, or DOCX 🌸
                </span>
                <input 
                  type="file" 
                  accept=".pptx,.pdf,.docx" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
              </label>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 font-quicksand font-bold">Single-file upload up to 25MB • Private encrypted local storage</p>
            </div>
          </div>

          {selectedFile && (
            <div className="bg-kitty-50 dark:bg-kuromi-850 p-4 rounded-2xl border-2 border-kitty-200 dark:border-kuromi-700 space-y-3 font-quicksand">
              <div className="flex items-center justify-between">
                <div className="text-xs font-black text-kitty-900 dark:text-kuromi-200 flex items-center gap-2 font-fredoka">
                  <FileText className="w-4 h-4 text-kitty-500" />
                  {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                </div>
                <button 
                  type="button" 
                  onClick={() => setSelectedFile(null)}
                  className="text-xs text-rose-500 font-bold hover:underline"
                >
                  Cancel
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Custom Display Title (optional):
                </label>
                <input
                  type="text"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder="e.g. Lecture Deck 6: Metrics & Monetization"
                  className="w-full text-xs px-3 py-2 bg-white dark:bg-kuromi-800 text-slate-900 dark:text-white rounded-xl border-2 border-kitty-200 dark:border-kuromi-700 focus:outline-none focus:ring-2 focus:ring-kitty-400"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isUploading}
                  className="px-5 py-2.5 bg-kitty-500 hover:bg-kitty-600 text-white rounded-xl text-xs font-black shadow-pop flex items-center gap-2 disabled:opacity-50 font-fredoka"
                >
                  {isUploading ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      Uploading & Processing...
                    </>
                  ) : (
                    'Confirm & Process File ✨'
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
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
