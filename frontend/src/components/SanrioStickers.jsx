import React from 'react';

// Hello Kitty SVG Sticker
export function HelloKitty({ className = "w-10 h-10", mood = "happy" }) {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg viewBox="0 0 100 90" className="w-full h-full drop-shadow-sm overflow-visible">
        {/* Left Ear */}
        <path d="M 22 32 Q 10 12 28 14 Z" fill="#FFFFFF" stroke="#1E102E" strokeWidth="3.5" strokeLinejoin="round" />
        {/* Right Ear */}
        <path d="M 78 32 Q 90 12 72 14 Z" fill="#FFFFFF" stroke="#1E102E" strokeWidth="3.5" strokeLinejoin="round" />
        {/* Head */}
        <ellipse cx="50" cy="50" rx="38" ry="32" fill="#FFFFFF" stroke="#1E102E" strokeWidth="3.5" />
        
        {/* Red Bow on right ear */}
        <g transform="translate(68, 18) rotate(15)">
          {/* Left loop */}
          <ellipse cx="-10" cy="-2" rx="9" ry="7" fill="#FF2D55" stroke="#1E102E" strokeWidth="2.5" />
          {/* Right loop */}
          <ellipse cx="10" cy="2" rx="9" ry="7" fill="#FF2D55" stroke="#1E102E" strokeWidth="2.5" />
          {/* Knot */}
          <circle cx="0" cy="0" r="5" fill="#FF2D55" stroke="#1E102E" strokeWidth="2.5" />
          <circle cx="-1.5" cy="-1.5" r="1.5" fill="#FFFFFF" />
        </g>

        {/* Eyes */}
        <ellipse cx="34" cy="52" rx="3.5" ry="5" fill="#1E102E" />
        <ellipse cx="66" cy="52" rx="3.5" ry="5" fill="#1E102E" />
        {/* Eye shine */}
        <circle cx="33" cy="50" r="1.2" fill="#FFFFFF" />
        <circle cx="65" cy="50" r="1.2" fill="#FFFFFF" />

        {/* Yellow Button Nose */}
        <ellipse cx="50" cy="58" rx="4" ry="2.8" fill="#FACC15" stroke="#1E102E" strokeWidth="2" />

        {/* Whiskers Left */}
        <line x1="10" y1="48" x2="25" y2="51" stroke="#1E102E" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="8" y1="56" x2="24" y2="56" stroke="#1E102E" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="11" y1="64" x2="25" y2="61" stroke="#1E102E" strokeWidth="2.5" strokeLinecap="round" />

        {/* Whiskers Right */}
        <line x1="90" y1="48" x2="75" y2="51" stroke="#1E102E" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="92" y1="56" x2="76" y2="56" stroke="#1E102E" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="89" y1="64" x2="75" y2="61" stroke="#1E102E" strokeWidth="2.5" strokeLinecap="round" />

        {/* Cute blush cheeks */}
        <ellipse cx="26" cy="58" rx="5" ry="3" fill="#FDA4AF" opacity="0.75" />
        <ellipse cx="74" cy="58" rx="5" ry="3" fill="#FDA4AF" opacity="0.75" />
      </svg>
    </div>
  );
}

// My Melody SVG Sticker
export function MyMelody({ className = "w-10 h-10" }) {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg viewBox="0 0 100 105" className="w-full h-full drop-shadow-sm overflow-visible">
        {/* Pink Hood Ears */}
        {/* Left Long Ear */}
        <path d="M 28 50 C 15 25 15 -2 30 2 C 42 6 38 35 36 50 Z" fill="#F472B6" stroke="#1E102E" strokeWidth="3" strokeLinejoin="round" />
        {/* Right Long Bent Ear */}
        <path d="M 64 50 C 62 30 68 5 80 4 C 92 3 88 28 72 50 Z" fill="#F472B6" stroke="#1E102E" strokeWidth="3" strokeLinejoin="round" />

        {/* Hood Back/Base */}
        <circle cx="50" cy="58" r="36" fill="#F472B6" stroke="#1E102E" strokeWidth="3" />

        {/* White Face Oval */}
        <ellipse cx="50" cy="64" rx="26" ry="22" fill="#FFFFFF" stroke="#1E102E" strokeWidth="2.5" />

        {/* White Flower on Hood */}
        <g transform="translate(32, 42)">
          <circle cx="0" cy="-6" r="5" fill="#FFFFFF" stroke="#1E102E" strokeWidth="2" />
          <circle cx="6" cy="0" r="5" fill="#FFFFFF" stroke="#1E102E" strokeWidth="2" />
          <circle cx="0" cy="6" r="5" fill="#FFFFFF" stroke="#1E102E" strokeWidth="2" />
          <circle cx="-6" cy="0" r="5" fill="#FFFFFF" stroke="#1E102E" strokeWidth="2" />
          {/* Flower Center */}
          <circle cx="0" cy="0" r="4" fill="#FACC15" stroke="#1E102E" strokeWidth="2" />
        </g>

        {/* Eyes */}
        <ellipse cx="40" cy="64" rx="2.8" ry="4" fill="#1E102E" />
        <ellipse cx="60" cy="64" rx="2.8" ry="4" fill="#1E102E" />
        {/* Eye gleam */}
        <circle cx="39" cy="62" r="1" fill="#FFFFFF" />
        <circle cx="59" cy="62" r="1" fill="#FFFFFF" />

        {/* Yellow Nose */}
        <ellipse cx="50" cy="69" rx="3.2" ry="2.2" fill="#FACC15" stroke="#1E102E" strokeWidth="1.8" />

        {/* Cute Smile */}
        <path d="M 46 73 Q 50 76 54 73" fill="none" stroke="#1E102E" strokeWidth="2" strokeLinecap="round" />

        {/* Pink Blush */}
        <ellipse cx="33" cy="68" rx="4" ry="2.5" fill="#FDA4AF" opacity="0.8" />
        <ellipse cx="67" cy="68" rx="4" ry="2.5" fill="#FDA4AF" opacity="0.8" />
      </svg>
    </div>
  );
}

// Kuromi SVG Sticker
export function Kuromi({ className = "w-10 h-10" }) {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm overflow-visible">
        {/* Black/Deep Purple Jester Hat Ears */}
        {/* Left Jester Ear with Bauble */}
        <path d="M 32 46 C 22 25 10 10 12 4 C 18 2 34 22 42 42 Z" fill="#2D1537" stroke="#1E102E" strokeWidth="3" />
        <circle cx="12" cy="4" r="5" fill="#E879F9" stroke="#1E102E" strokeWidth="2" />

        {/* Right Jester Ear with Bauble */}
        <path d="M 68 46 C 78 25 90 10 88 4 C 82 2 66 22 58 42 Z" fill="#2D1537" stroke="#1E102E" strokeWidth="3" />
        <circle cx="88" cy="4" r="5" fill="#E879F9" stroke="#1E102E" strokeWidth="2" />

        {/* Hood Head */}
        <circle cx="50" cy="56" r="34" fill="#2D1537" stroke="#1E102E" strokeWidth="3" />

        {/* White Face */}
        <ellipse cx="50" cy="62" rx="26" ry="21" fill="#FFFFFF" stroke="#1E102E" strokeWidth="2.5" />

        {/* Pink Skull on forehead */}
        <g transform="translate(50, 36) scale(0.9)">
          <circle cx="0" cy="0" r="7" fill="#F472B6" stroke="#1E102E" strokeWidth="1.8" />
          <ellipse cx="-2.5" cy="-0.5" rx="1.8" ry="2.5" fill="#2D1537" />
          <ellipse cx="2.5" cy="-0.5" rx="1.8" ry="2.5" fill="#2D1537" />
          <rect x="-4" y="5" width="8" height="3" rx="1.5" fill="#F472B6" stroke="#1E102E" strokeWidth="1.5" />
        </g>

        {/* Mischievous Cat Eyes */}
        <path d="M 36 60 Q 42 58 44 65 Q 40 67 36 60 Z" fill="#2D1537" />
        <path d="M 64 60 Q 58 58 56 65 Q 60 67 64 60 Z" fill="#2D1537" />
        {/* Eye sparkle */}
        <circle cx="41" cy="62" r="1.2" fill="#FFFFFF" />
        <circle cx="59" cy="62" r="1.2" fill="#FFFFFF" />

        {/* Lashes */}
        <line x1="33" y1="58" x2="36" y2="60" stroke="#1E102E" strokeWidth="2" strokeLinecap="round" />
        <line x1="67" y1="58" x2="64" y2="60" stroke="#1E102E" strokeWidth="2" strokeLinecap="round" />

        {/* Cute Smirk / Fangs */}
        <path d="M 46 72 Q 50 76 54 72" fill="none" stroke="#1E102E" strokeWidth="2" strokeLinecap="round" />

        {/* Purple/Pink Blush */}
        <ellipse cx="32" cy="68" rx="4" ry="2.5" fill="#E879F9" opacity="0.75" />
        <ellipse cx="68" cy="68" rx="4" ry="2.5" fill="#E879F9" opacity="0.75" />
      </svg>
    </div>
  );
}

// Cinnamoroll SVG Sticker
export function Cinnamoroll({ className = "w-10 h-10" }) {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg viewBox="0 0 110 75" className="w-full h-full drop-shadow-sm overflow-visible">
        {/* Floppy Cloud Ears Left */}
        <path d="M 30 38 C 12 36 2 24 6 18 C 12 12 28 22 36 34 Z" fill="#FFFFFF" stroke="#1E102E" strokeWidth="3" strokeLinejoin="round" />
        {/* Floppy Cloud Ears Right */}
        <path d="M 80 38 C 98 36 108 24 104 18 C 98 12 82 22 74 34 Z" fill="#FFFFFF" stroke="#1E102E" strokeWidth="3" strokeLinejoin="round" />

        {/* Chubby Head */}
        <ellipse cx="55" cy="40" rx="34" ry="25" fill="#FFFFFF" stroke="#1E102E" strokeWidth="3.2" />

        {/* Cute Blue Eyes */}
        <ellipse cx="44" cy="40" rx="3" ry="4.5" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
        <ellipse cx="66" cy="40" rx="3" ry="4.5" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
        {/* Eye shine */}
        <circle cx="43" cy="38" r="1.3" fill="#FFFFFF" />
        <circle cx="65" cy="38" r="1.3" fill="#FFFFFF" />

        {/* Pink Cheeks */}
        <ellipse cx="34" cy="46" rx="5" ry="3" fill="#FDA4AF" opacity="0.8" />
        <ellipse cx="76" cy="46" rx="5" ry="3" fill="#FDA4AF" opacity="0.8" />

        {/* W-Shaped Mouth */}
        <path d="M 50 46 Q 52.5 49 55 46 Q 57.5 49 60 46" fill="none" stroke="#1E102E" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Pompompurin SVG Sticker
export function Pompompurin({ className = "w-10 h-10" }) {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg viewBox="0 0 95 85" className="w-full h-full drop-shadow-sm overflow-visible">
        {/* Golden Pudding Head */}
        {/* Left Droopy Ear */}
        <path d="M 24 38 C 14 36 10 48 16 56 C 22 62 26 50 28 42 Z" fill="#FEF08A" stroke="#1E102E" strokeWidth="3" />
        {/* Right Droopy Ear */}
        <path d="M 71 38 C 81 36 85 48 79 56 C 73 62 69 50 67 42 Z" fill="#FEF08A" stroke="#1E102E" strokeWidth="3" />

        {/* Head */}
        <ellipse cx="47" cy="50" rx="32" ry="27" fill="#FEF08A" stroke="#1E102E" strokeWidth="3.2" />

        {/* Brown Beret Hat */}
        <ellipse cx="47" cy="25" rx="14" ry="6" fill="#78350F" stroke="#1E102E" strokeWidth="2.5" />
        <rect x="45.5" y="16" width="3" height="5" rx="1" fill="#78350F" stroke="#1E102E" strokeWidth="1.5" />

        {/* Small Dot Eyes */}
        <circle cx="38" cy="48" r="2.5" fill="#1E102E" />
        <circle cx="56" cy="48" r="2.5" fill="#1E102E" />

        {/* Y-Shaped Mouth */}
        <path d="M 47 52 L 47 55 M 44 57 Q 47 55 50 57" fill="none" stroke="#1E102E" strokeWidth="2.2" strokeLinecap="round" />

        {/* Soft Blush */}
        <ellipse cx="28" cy="53" rx="4" ry="2.5" fill="#FDA4AF" opacity="0.8" />
        <ellipse cx="66" cy="53" rx="4" ry="2.5" fill="#FDA4AF" opacity="0.8" />
      </svg>
    </div>
  );
}

// Cute Sparkle / Star Sticker
export function CuteStar({ className = "w-5 h-5", color = "#FACC15" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} animate-pulse drop-shadow-sm`}>
      <path d="M 12 2 Q 13 9 20 10 Q 13 11 12 18 Q 11 11 4 10 Q 11 9 12 2 Z" fill={color} stroke="#1E102E" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

// Cute Pastel Bow
export function CuteBow({ className = "w-6 h-6", color = "#F43F5E" }) {
  return (
    <svg viewBox="0 0 40 30" className={className}>
      <ellipse cx="10" cy="15" rx="9" ry="8" fill={color} stroke="#1E102E" strokeWidth="2" />
      <ellipse cx="30" cy="15" rx="9" ry="8" fill={color} stroke="#1E102E" strokeWidth="2" />
      <circle cx="20" cy="15" r="5" fill={color} stroke="#1E102E" strokeWidth="2" />
      <circle cx="18" cy="13" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

// Cute Floating Heart Sticker
export function CuteHeart({ className = "w-5 h-5", color = "#FB7185" }) {
  return (
    <svg viewBox="0 0 32 32" className={`${className} drop-shadow-sm`}>
      <path 
        d="M 16 28 C 16 28 3 20 3 10 C 3 5 7 2 12 2 C 14.5 2 15.5 3.5 16 4.5 C 16.5 3.5 17.5 2 20 2 C 25 2 29 5 29 10 C 29 20 16 28 16 28 Z" 
        fill={color} 
        stroke="#1E102E" 
        strokeWidth="2.2" 
        strokeLinejoin="round" 
      />
      <ellipse cx="9" cy="7" rx="2" ry="1" fill="#FFFFFF" opacity="0.8" transform="rotate(-30 9 7)" />
    </svg>
  );
}

// Scrapbook Paper Clip (Metal/Pastel clip)
export function PaperClip({ className = "w-6 h-10", color = "#F43F5E" }) {
  return (
    <svg viewBox="0 0 24 40" className={`${className} drop-shadow-md select-none`}>
      <path 
        d="M 6 12 L 6 30 C 6 35 18 35 18 30 L 18 8 C 18 2 10 2 10 8 L 10 26 C 10 28 14 28 14 26 L 14 12" 
        fill="none" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

// Rubber Pop Stamp
export function PopStamp({ text = "APPROVED", color = "border-pink-500 text-pink-600 bg-pink-50/90", rotate = "-rotate-3" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-black uppercase tracking-widest border-2 border-dashed ${color} ${rotate} shadow-pop-sm select-none font-fredoka hover:rotate-0 hover:scale-105 transition-transform duration-200`}>
      <CuteStar className="w-3.5 h-3.5" />
      {text}
    </span>
  );
}
