/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar-hide'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nsans-light': ['Nsans Light'],
        'nsans-bold': ['Nsans Bold'],
        'nsans-medium': ['Nsans Medium'],
        'nsans-regular': ['Nsans Regular'],
      },
    },
  },
  plugins: [
    scrollbar,
  ],
}

