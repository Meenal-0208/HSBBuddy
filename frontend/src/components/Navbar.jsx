import React from 'react';
import { 
  Home, 
  FileText, 
  BookOpen, 
  HelpCircle, 
  BarChart3, 
  Sparkles,
  Sun,
  Moon
} from 'lucide-react';

import { HelloKitty, CuteStar, CuteBow } from './SanrioStickers';

export default function Navbar({ activePage, onNavigate, subjectName, isDarkMode, onToggleDarkMode }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, badge: '🌸' },
    { id: 'materials', label: 'Materials', icon: FileText, badge: '📁' },
    { id: 'notes', label: 'Short Notes', icon: BookOpen, badge: '📝' },
    { id: 'quiz', label: 'Quiz Master', icon: HelpCircle, badge: '✨' },
    { id: 'progress', label: 'Scorecard', icon: BarChart3, badge: '🏆' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-kuromi-900/95 backdrop-blur-md border-b-3 border-ink-900 shadow-pop-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Brand Logo & Configured Subject Pill */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('dashboard')} 
              className="flex items-center gap-3 group text-left transition transform hover:scale-105"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-pink-200 to-rose-100 border-2 border-ink-900 flex items-center justify-center p-1 shadow-pop-sm group-hover:rotate-6 transition">
                <HelloKitty className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-fredoka font-black text-lg sm:text-xl text-ink-900 dark:text-white tracking-tight">
                    Sanrio Study Buddy
                  </span>
                  <CuteStar className="w-4 h-4 text-yellow-400" />
                </div>
                <span className="text-[10px] font-fredoka font-black text-pink-600 dark:text-melody-300 tracking-wider uppercase block truncate max-w-[140px] sm:max-w-[240px]">
                  {subjectName}
                </span>
              </div>
            </button>
          </div>

          {/* Navigation Links & Dark Mode Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <nav className="flex items-center gap-1 sm:gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-fredoka font-black transition-all duration-200 ${
                      isActive 
                        ? 'bg-yellow-300 text-ink-900 border-2 border-ink-900 shadow-pop-sm scale-105' 
                        : 'text-slate-700 dark:text-slate-200 hover:text-pink-600 dark:hover:text-melody-300 hover:bg-pink-100/60 dark:hover:bg-kuromi-800'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-ink-900' : 'text-slate-500'}`} />
                    <span className="hidden sm:inline">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="h-6 w-[2px] bg-ink-900/20 dark:bg-white/20 mx-1 hidden sm:block" />

            {/* Dark (Kuromi mode) / Light (Hello Kitty mode) Toggle Button */}
            <button
              onClick={onToggleDarkMode}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={isDarkMode ? "Switch to Hello Kitty Light Mode" : "Switch to Kuromi Dark Mode"}
              className="p-2 sm:px-4 sm:py-2 rounded-2xl border-2 border-ink-900 bg-pink-100 dark:bg-purple-900 text-ink-900 dark:text-white hover:bg-pink-200 shadow-pop-sm transition flex items-center gap-2 text-xs font-fredoka font-black"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-4 h-4 text-yellow-300 animate-spin-slow" />
                  <span className="hidden md:inline">Kitty Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-purple-600" />
                  <span className="hidden md:inline">Kuromi Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
