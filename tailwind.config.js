/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
import scrollbar from 'tailwindcss-scrollbar'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'system': ['-apple-system'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)',
      },
    },
  },
  plugins: [
    scrollbar,
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
}

