/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ayurveda: {
          dark: '#0a1c12',
          deep: '#112f1e',
          forest: '#1b4d32',
          emerald: '#2d6a4f',
          accent: '#40916c',
          light: '#74c69d',
          sage: '#b7e4c7',
          mint: '#d8f3dc',
          gold: '#d4af37',
          goldLight: '#f3e5ab',
          goldDark: '#997a15',
          cream: '#faf8f5',
          glass: 'rgba(255, 255, 255, 0.08)',
          glassBorder: 'rgba(212, 175, 55, 0.25)',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
