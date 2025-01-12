/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['EB Garamond', 'serif'],
        felix: ['Felix Titling', 'serif'],
        syne: ['Syne', 'sans-serif'], // Add fallback fonts
      },
    },
  },
  plugins: [],
}