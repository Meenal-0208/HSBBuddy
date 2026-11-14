import React from 'react';
import { 
  Home, 
  FileText, 
  BookOpen, 
  HelpCircle, 
  BarChart3, 
  Sparkles,
  Sun,
  Moon,
  Compass
} from 'lucide-react';

import { HelloKitty, CuteStar } from './SanrioStickers';
import { Paimon, Primogem, TeyvatStar } from './GenshinStickers';

export default function Navbar({ 
  activePage, 
  onNavigate, 
  subjectName, 
  isDarkMode, 
  onToggleDarkMode,
  edition = 'genshin',
  onToggleEdition 
}) {
  const isGenshin = edition === 'genshin';

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, badge: isGenshin ? '✨' : '🌸' },
    { id: 'materials', label: 'Materials', icon: FileText, badge: isGenshin ? '📜' : '📁' },
    { id: 'notes', label: 'Short Notes', icon: BookOpen, badge: isGenshin ? '🧭' : '📝' },
    { id: 'quiz', label: 'Quiz Master', icon: HelpCircle, badge: isGenshin ? '💎' : '✨' },
    { id: 'progress', label: 'Scorecard', icon: BarChart3, badge: isGenshin ? '👑' : '🏆' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b-3 border-ink-900 shadow-pop-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Brand Logo & Configured Subject Pill */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('dashboard')} 
              className="flex items-center gap-3 group text-left transition transform hover:scale-105"
            >
              {isGenshin ? (
                /* Paimon Official Website Logo */
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-100 via-sky-100 to-indigo-100 dark:from-indigo-950 dark:to-amber-950 border-2 border-ink-900 flex items-center justify-center p-0.5 shadow-pop-sm group-hover:rotate-6 transition relative">
                  <Paimon className="w-10 h-10" mood="happy" />
                  <div className="absolute -top-1 -right-1">
                    <Primogem className="w-4 h-4 animate-pulse" />
                  </div>
                </div>
              ) : (
                /* Sanrio Official Website Logo */
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-pink-200 to-rose-100 border-2 border-ink-900 flex items-center justify-center p-1 shadow-pop-sm group-hover:rotate-6 transition">
                  <HelloKitty className="w-8 h-8" />
                </div>
              )}

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-fredoka font-black text-lg sm:text-xl text-ink-900 dark:text-white tracking-tight">
                    {isGenshin ? 'Paimon Study Buddy' : 'Sanrio Study Buddy'}
                  </span>
                  {isGenshin ? (
                    <TeyvatStar className="w-4 h-4 text-amber-400 animate-spin-slow" />
                  ) : (
                    <CuteStar className="w-4 h-4 text-yellow-400" />
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`text-[10px] font-fredoka font-black tracking-wider uppercase block truncate max-w-[140px] sm:max-w-[240px] ${
                    isGenshin 
                      ? 'text-amber-600 dark:text-amber-300' 
                      : 'text-pink-600 dark:text-melody-300'
                  }`}>
                    {isGenshin ? `Teyvat Edition • ${subjectName}` : subjectName}
                  </span>
                </div>
              </div>
            </button>
          </div>

          {/* Navigation Links, Theme Switcher & Dark Mode Toggle */}
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
                        ? (isGenshin 
                            ? 'bg-amber-300 text-ink-900 border-2 border-ink-900 shadow-pop-sm scale-105'
                            : 'bg-yellow-300 text-ink-900 border-2 border-ink-900 shadow-pop-sm scale-105') 
                        : (isGenshin
                            ? 'text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-300 hover:bg-amber-100/60 dark:hover:bg-slate-800'
                            : 'text-slate-700 dark:text-slate-200 hover:text-pink-600 dark:hover:text-melody-300 hover:bg-pink-100/60 dark:hover:bg-kuromi-800')
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-ink-900' : 'text-slate-500'}`} />
                    <span className="hidden sm:inline">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="h-6 w-[2px] bg-ink-900/20 dark:bg-white/20 mx-1 hidden sm:block" />

            {/* Edition Switcher (Paimon / Genshin vs Sanrio) */}
            <button
              onClick={onToggleEdition}
              title={isGenshin ? "Switch to Sanrio Edition (Hello Kitty)" : "Switch to Genshin Impact Edition (Paimon)"}
              className={`px-3 py-2 rounded-2xl border-2 border-ink-900 shadow-pop-sm transition flex items-center gap-1.5 text-xs font-fredoka font-black ${
                isGenshin 
                  ? 'bg-gradient-to-r from-amber-200 to-sky-200 dark:from-indigo-900 dark:to-amber-900 text-ink-900 dark:text-amber-100 hover:brightness-105' 
                  : 'bg-gradient-to-r from-pink-200 to-rose-200 dark:from-purple-900 dark:to-pink-900 text-ink-900 dark:text-pink-100 hover:brightness-105'
              }`}
            >
              {isGenshin ? (
                <>
                  <Primogem className="w-4 h-4" />
                  <span className="hidden lg:inline">Genshin Mode</span>
                  <span className="text-[10px] bg-white/70 dark:bg-black/40 px-1 py-0.2 rounded font-bold">Paimon</span>
                </>
              ) : (
                <>
                  <span className="text-sm">🌸</span>
                  <span className="hidden lg:inline">Sanrio Mode</span>
                  <span className="text-[10px] bg-white/70 dark:bg-black/40 px-1 py-0.2 rounded font-bold">Kitty</span>
                </>
              )}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={
                isGenshin 
                  ? (isDarkMode ? "Switch to Celestia Day Mode" : "Switch to Abyss Night Mode") 
                  : (isDarkMode ? "Switch to Hello Kitty Light Mode" : "Switch to Kuromi Dark Mode")
              }
              className="p-2 sm:px-3 sm:py-2 rounded-2xl border-2 border-ink-900 bg-pink-100 dark:bg-purple-900 text-ink-900 dark:text-white hover:bg-pink-200 shadow-pop-sm transition flex items-center gap-1.5 text-xs font-fredoka font-black"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-4 h-4 text-yellow-300 animate-spin-slow" />
                  <span className="hidden md:inline">{isGenshin ? 'Celestia' : 'Kitty'}</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-purple-600 dark:text-purple-300" />
                  <span className="hidden md:inline">{isGenshin ? 'Abyss' : 'Kuromi'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
