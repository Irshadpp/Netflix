/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar-hide';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'nsans-light': ['Nsans Light'],
        'nsans-bold': ['Nsans Bold'],
        'nsans-medium': ['Nsans Medium'],
        'nsans-regular': ['Nsans Regular'],
      },
      animation: {
        // shimmer: 'shimmer 2.0s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [
    scrollbar,
  ],
};
