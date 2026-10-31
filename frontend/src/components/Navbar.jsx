import React from 'react';
import { 
  Home, 
  FileText, 
  BookOpen, 
  HelpCircle, 
  BarChart3, 
  Sparkles 
} from 'lucide-react';

export default function Navbar({ activePage, onNavigate, subjectName }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'materials', label: 'Materials', icon: FileText },
    { id: 'notes', label: 'Short Notes', icon: BookOpen },
    { id: 'quiz', label: 'Quiz', icon: HelpCircle },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Configured Subject Pill */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('dashboard')} 
              className="flex items-center gap-2 group text-left"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black shadow group-hover:bg-blue-700 transition">
                <Sparkles className="w-5 h-5 text-blue-200" />
              </div>
              <div>
                <span className="font-extrabold text-sm sm:text-base text-slate-900 leading-tight block">
                  Study Buddy
                </span>
                <span className="text-[10px] font-semibold text-blue-600 tracking-wide uppercase block truncate max-w-[150px] sm:max-w-[220px]">
                  {subjectName}
                </span>
              </div>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
