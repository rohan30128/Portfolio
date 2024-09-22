/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        
        "secondary" : "#F97316",
        "tertiary" : "#54D6BB","primary" : "#0a192f",
      }
    },
  },
  plugins: [require('daisyui')],
}