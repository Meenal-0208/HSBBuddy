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
  ExternalLink 
} from 'lucide-react';

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

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsUploading(true);
    setTimeout(() => {
      onUploadMock({
        title: customTitle || selectedFile.name,
        filename: selectedFile.name,
        fileType: selectedFile.name.split('.').pop().toLowerCase(),
        size: `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`,
      });
      setIsUploading(false);
      setSelectedFile(null);
      setCustomTitle('');
    }, 800);
  };

  const filteredMaterials = materials.filter(m => {
    if (filterType === 'all') return true;
    return m.fileType === filterType;
  });

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Course Materials</h1>
          <p className="text-sm text-slate-500">
            Upload and manage your PPTX, PDF, and DOCX files. Files are privately stored and processed for AI revision.
          </p>
        </div>
      </div>

      {/* Upload Box Component */}
      <div className="bg-white rounded-xl border border-dashed border-blue-300 p-6 shadow-sm hover:border-blue-400 transition-colors">
        <form onSubmit={handleUploadSubmit} className="space-y-4">
          <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50">
            <UploadCloud className="w-12 h-12 text-blue-500 mb-2" />
            <div className="text-center">
              <label className="cursor-pointer">
                <span className="text-sm font-bold text-blue-600 hover:text-blue-700">Choose PPTX, PDF, or DOCX</span>
                <input 
                  type="file" 
                  accept=".pptx,.pdf,.docx" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
              </label>
              <p className="text-xs text-slate-400 mt-1">Single-file upload up to 25MB. Local private storage only.</p>
            </div>
          </div>

          {selectedFile && (
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-blue-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                </div>
                <button 
                  type="button" 
                  onClick={() => setSelectedFile(null)}
                  className="text-xs text-rose-600 font-semibold hover:underline"
                >
                  Cancel
                </button>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Custom Display Title (optional):
                </label>
                <input
                  type="text"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder="e.g. Lecture 3: Renal Physiology & Glomerular Filtration"
                  className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isUploading}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow flex items-center gap-2 disabled:opacity-50"
                >
                  {isUploading ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      Uploading & Processing...
                    </>
                  ) : (
                    'Confirm & Process File'
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Materials List Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Table Filters */}
        <div className="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <span>Filter by Type:</span>
            {['all', 'pptx', 'pdf', 'docx'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-2.5 py-1 rounded-md uppercase text-[11px] font-bold tracking-wide transition ${
                  filterType === type 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-400">
            Showing {filteredMaterials.length} of {materials.length} files
          </div>
        </div>

        {/* List Items */}
        <div className="divide-y divide-slate-100">
          {filteredMaterials.map((mat) => (
            <div key={mat.id} className="p-4 sm:p-5 hover:bg-slate-50 transition flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4 min-w-0">
                <div className={`p-3 rounded-xl text-xs font-black uppercase shrink-0 ${
                  mat.fileType === 'pptx' ? 'bg-orange-100 text-orange-700' :
                  mat.fileType === 'pdf' ? 'bg-rose-100 text-rose-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {mat.fileType}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      onClick={() => onSelectMaterial(mat)}
                      className="font-bold text-slate-900 text-sm hover:text-blue-600 transition text-left"
                    >
                      {mat.title}
                    </button>
                    {mat.status === 'Ready' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" /> Ready
                      </span>
                    )}
                    {mat.status === 'Processing' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 animate-pulse">
                        <Clock className="w-3 h-3" /> Extracting Text
                      </span>
                    )}
                    {mat.status === 'Failed' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                        <AlertCircle className="w-3 h-3" /> Extraction Error
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 mt-1">
                    Filename: <span className="font-mono text-slate-600">{mat.filename}</span> • {mat.size} • {mat.slidesCount > 0 ? `${mat.slidesCount} slides/pages` : 'Pending'}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                <button
                  onClick={() => onSelectMaterial(mat)}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
                >
                  Inspect & Preview
                </button>
                <button
                  onClick={() => onGenerateNotes(mat)}
                  disabled={mat.status !== 'Ready'}
                  className="px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition flex items-center gap-1 disabled:opacity-40"
                >
                  <BookOpen className="w-3.5 h-3.5" /> Notes
                </button>
                <button
                  onClick={() => onStartQuiz(mat.id)}
                  disabled={mat.status !== 'Ready'}
                  className="px-3 py-1.5 text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-lg transition flex items-center gap-1 disabled:opacity-40"
                >
                  <HelpCircle className="w-3.5 h-3.5" /> Quiz
                </button>
                <button
                  onClick={() => onDeleteMaterial(mat.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
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
