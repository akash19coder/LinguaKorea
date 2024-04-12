/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      screens: {
        'xs': '300px',
      },
      colors: {
        'lingua-korea-blue': '#060644',
        'lingua-korea-red': '#EF3A5D',
      }
    },
  },
  plugins: [],
}