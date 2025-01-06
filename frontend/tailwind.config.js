/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Aldrich:["Aldrich","serif"],
        CroissantOne:["Croissant One","serif"],
        PermanentMarker:["Permanent Marker","serif"],
        DMSerifText:['DM Serif Text','serif'],
        Delius:['Delius','serif'],
      },
    },
  },
  plugins: [],
}