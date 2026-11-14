/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'Quicksand', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        sans: ['Quicksand', 'Plus Jakarta Sans', '-apple-system', 'sans-serif'],
      },
      colors: {
        kitty: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          red: '#ff2d55',
        },
        melody: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f472b6',
          400: '#ec4899',
          500: '#db2777',
        },
        kuromi: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          900: '#3b0764',
          dark: '#1e102e',
        },
        cinnamo: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
        },
        pompom: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
        },
        marshmallow: {
          50: '#fffbfb',
          100: '#fff5f7',
          200: '#fed7e2',
        },
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#1e102e',
        }
      },
      boxShadow: {
        'pop': '5px 5px 0px #1e102e',
        'pop-lg': '7px 7px 0px #1e102e',
        'pop-sm': '3px 3px 0px #1e102e',
        'pop-pink': '5px 5px 0px #f43f5e',
        'pop-purple': '5px 5px 0px #a855f7',
        'pop-blue': '5px 5px 0px #0ea5e9',
        'pop-yellow': '5px 5px 0px #f59e0b',
        'pop-mint': '5px 5px 0px #10b981',
        'soft-cute': '0 12px 36px -4px rgba(244, 63, 94, 0.16), 0 4px 12px -2px rgba(168, 85, 247, 0.12)',
      }
    },
  },
  plugins: [],
}
