import React from 'react';

// Detailed Paimon SVG Avatar & Website Mascot
export function Paimon({ className = "w-10 h-10", mood = "happy" }) {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg viewBox="0 0 100 105" className="w-full h-full drop-shadow-md overflow-visible">
        <defs>
          {/* Golden Halo Gradient */}
          <linearGradient id="paimonHaloGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* Starry Blue Eye Gradient */}
          <linearGradient id="paimonEyeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="60%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>

          {/* Hair Soft Shadow */}
          <linearGradient id="paimonHairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="85%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E0E7FF" />
          </linearGradient>
        </defs>

        {/* Floating Golden Halo above head */}
        <g transform="translate(0, -2)">
          <ellipse cx="50" cy="14" rx="26" ry="8" fill="none" stroke="url(#paimonHaloGrad)" strokeWidth="4" />
          <ellipse cx="50" cy="14" rx="24" ry="6.5" fill="none" stroke="#FFFBEB" strokeWidth="1.2" opacity="0.9" />
          {/* Halo Star Accent Top */}
          <polygon points="50,4 52,9 57,11 52,13 50,18 48,13 43,11 48,9" fill="#FDE047" stroke="#B45309" strokeWidth="0.8" />
        </g>

        {/* Back Hair Tufts (Fluffy floating white hair) */}
        <path 
          d="M 18 48 C 6 62 10 82 24 88 C 28 89 32 78 30 70 C 26 58 24 50 18 48 Z" 
          fill="url(#paimonHairGrad)" 
          stroke="#1E102E" 
          strokeWidth="2.5" 
        />
        <path 
          d="M 82 48 C 94 62 90 82 76 88 C 72 89 68 78 70 70 C 74 58 76 50 82 48 Z" 
          fill="url(#paimonHairGrad)" 
          stroke="#1E102E" 
          strokeWidth="2.5" 
        />

        {/* Capelet / Collar in midnight navy with gold border */}
        <g transform="translate(0, 78)">
          <path d="M 28 4 Q 50 20 72 4 L 76 16 Q 50 24 24 16 Z" fill="#1E1B4B" stroke="#1E102E" strokeWidth="2.5" />
          {/* Gold Trim */}
          <path d="M 28 4 Q 50 20 72 4" fill="none" stroke="#F59E0B" strokeWidth="2.2" />
          {/* Primogem Brooch at Center of Collar */}
          <polygon points="50,10 54,16 50,22 46,16" fill="#38BDF8" stroke="#1E102E" strokeWidth="1.2" />
          <polygon points="50,12 52.5,16 50,20 47.5,16" fill="#E0F2FE" />
        </g>

        {/* Face Base */}
        <ellipse cx="50" cy="56" rx="28" ry="26" fill="#FFF5EE" stroke="#1E102E" strokeWidth="2.8" />

        {/* Floating White Bangs & Side Locks */}
        <path 
          d="M 22 44 C 22 28 35 22 50 22 C 65 22 78 28 78 44 C 74 38 68 34 60 36 C 54 38 52 46 48 48 C 46 42 40 36 34 36 C 27 36 24 40 22 44 Z" 
          fill="url(#paimonHairGrad)" 
          stroke="#1E102E" 
          strokeWidth="2.5" 
        />
        {/* Left Side Bang */}
        <path d="M 22 40 C 20 54 26 66 30 70 C 26 64 24 54 25 46 Z" fill="#FFFFFF" stroke="#1E102E" strokeWidth="2" />
        {/* Right Side Bang */}
        <path d="M 78 40 C 80 54 74 66 70 70 C 74 64 76 54 75 46 Z" fill="#FFFFFF" stroke="#1E102E" strokeWidth="2" />

        {/* Paimon's Dark Star Hairpin (Signature Clip on left bangs) */}
        <g transform="translate(30, 29) rotate(-15)">
          <path d="M -2 -8 L 8 -2 L 2 8 L -8 2 Z" fill="#0F172A" stroke="#1E102E" strokeWidth="1.8" />
          {/* Rose Gold Triquetra Inverted Loop */}
          <circle cx="0" cy="0" r="3.2" fill="none" stroke="#F43F5E" strokeWidth="1.2" />
          <polygon points="0,-4 3,2 -3,2" fill="#FDE047" stroke="#1E102E" strokeWidth="0.8" />
        </g>

        {/* Starry Anime Eyes */}
        {/* Left Eye */}
        <g>
          <ellipse cx="38" cy="56" rx="4.5" ry="6.5" fill="url(#paimonEyeGrad)" stroke="#1E102E" strokeWidth="1.5" />
          <ellipse cx="38" cy="58" rx="2.8" ry="4" fill="#1D4ED8" />
          {/* Star Catchlight */}
          <polygon points="38,53 39,55 41,55 39.5,56.5 40,58.5 38,57.5 36,58.5 36.5,56.5 35,55 37,55" fill="#FFFFFF" />
          <circle cx="36" cy="60" r="1" fill="#93C5FD" />
        </g>

        {/* Right Eye */}
        <g>
          <ellipse cx="62" cy="56" rx="4.5" ry="6.5" fill="url(#paimonEyeGrad)" stroke="#1E102E" strokeWidth="1.5" />
          <ellipse cx="62" cy="58" rx="2.8" ry="4" fill="#1D4ED8" />
          {/* Star Catchlight */}
          <polygon points="62,53 63,55 65,55 63.5,56.5 64,58.5 62,57.5 60,58.5 60.5,56.5 59,55 61,55" fill="#FFFFFF" />
          <circle cx="60" cy="60" r="1" fill="#93C5FD" />
        </g>

        {/* Eyebrows */}
        <path d="M 34 47 Q 38 45 43 48" fill="none" stroke="#64748B" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M 66 47 Q 62 45 57 48" fill="none" stroke="#64748B" strokeWidth="1.6" strokeLinecap="round" />

        {/* Cute Anime Blush */}
        <ellipse cx="30" cy="63" rx="5" ry="2.8" fill="#FB7185" opacity="0.65" />
        <ellipse cx="70" cy="63" rx="5" ry="2.8" fill="#FB7185" opacity="0.65" />

        {/* Cute Smile / Happy Open Mouth */}
        {mood === "excited" ? (
          <path d="M 45 66 Q 50 74 55 66 Z" fill="#E11D48" stroke="#1E102E" strokeWidth="1.5" />
        ) : (
          <path d="M 46 66 Q 50 70 54 66" fill="none" stroke="#1E102E" strokeWidth="2" strokeLinecap="round" />
        )}

        {/* Sparkle Glint on Cheek */}
        <circle cx="33" cy="61" r="0.8" fill="#FFFFFF" />
        <circle cx="67" cy="61" r="0.8" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

// Iconic Genshin Primogem SVG
export function Primogem({ className = "w-7 h-7" }) {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md overflow-visible">
        <defs>
          <linearGradient id="primoTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
          <linearGradient id="primoBottom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
          <linearGradient id="primoLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67E8F9" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="primoRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#7E22CE" />
          </linearGradient>
        </defs>

        {/* 4-Pointed Star Facets */}
        {/* Top Tip */}
        <polygon points="50,4 34,42 50,50 66,42" fill="url(#primoTop)" stroke="#1E102E" strokeWidth="2" strokeLinejoin="round" />
        {/* Bottom Tip */}
        <polygon points="50,96 34,58 50,50 66,58" fill="url(#primoBottom)" stroke="#1E102E" strokeWidth="2" strokeLinejoin="round" />
        {/* Left Tip */}
        <polygon points="4,50 42,34 50,50 42,66" fill="url(#primoLeft)" stroke="#1E102E" strokeWidth="2" strokeLinejoin="round" />
        {/* Right Tip */}
        <polygon points="96,50 58,34 50,50 58,66" fill="url(#primoRight)" stroke="#1E102E" strokeWidth="2" strokeLinejoin="round" />

        {/* Center Diamond Highlight */}
        <polygon points="50,38 60,50 50,62 40,50" fill="#FFFFFF" opacity="0.85" />
        {/* Center Shine */}
        <circle cx="50" cy="50" r="3.5" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

// Genshin Mora Coin SVG
export function MoraCoin({ className = "w-6 h-6" }) {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm overflow-visible">
        {/* Outer Gold Rim */}
        <circle cx="50" cy="50" r="46" fill="#F59E0B" stroke="#1E102E" strokeWidth="4" />
        <circle cx="50" cy="50" r="38" fill="#FDE047" stroke="#B45309" strokeWidth="2" />
        
        {/* Genshin Triquetra Symbol in Center */}
        <g transform="translate(50, 50)" stroke="#B45309" strokeWidth="4" fill="none">
          <circle cx="0" cy="0" r="16" />
          {/* 3 Petal Arcs */}
          <path d="M 0 -16 Q 16 0 0 16" />
          <path d="M 0 -16 Q -16 0 0 16" />
          <path d="M -16 0 Q 0 16 16 0" />
        </g>
        <circle cx="50" cy="50" r="5" fill="#F59E0B" stroke="#1E102E" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

// Emergency Food Badge / Sticker
export function EmergencyFoodBadge({ className = "w-auto" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-100 dark:bg-amber-950/80 border-2 border-amber-500 text-amber-900 dark:text-amber-200 text-xs font-fredoka font-black shadow-pop-sm select-none ${className}`}>
      <span className="text-sm">🍲</span>
      <span>Emergency Food: 0%</span>
      <span className="text-[10px] bg-rose-500 text-white px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider">
        Best Companion
      </span>
    </span>
  );
}

// Teyvat 4-Pointed Sparkle Star
export function TeyvatStar({ className = "w-5 h-5 text-amber-400" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`inline-block select-none ${className}`}>
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}

// Paimon Guide Dialogue / Speech Bubble
export function PaimonDialogue({ message, subtext = "Paimon's Travel Guide" }) {
  return (
    <div className="relative flex items-start gap-3 bg-gradient-to-r from-amber-50 to-sky-50 dark:from-slate-900 dark:to-indigo-950 border-2 border-ink-900 dark:border-amber-400/60 rounded-2xl p-4 shadow-pop-sm my-4">
      <div className="shrink-0 -mt-2">
        <Paimon className="w-14 h-14" mood="excited" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-fredoka font-black text-xs text-amber-600 dark:text-amber-300 uppercase tracking-wider">
            {subtext}
          </span>
          <Primogem className="w-4 h-4" />
        </div>
        <p className="text-xs sm:text-sm font-quicksand font-bold text-ink-900 dark:text-slate-100 leading-relaxed">
          "{message}"
        </p>
      </div>
    </div>
  );
}
