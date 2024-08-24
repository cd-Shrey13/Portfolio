/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      backgroundImage: {
        'background-texture': "url('./src/assets/Android Large - 3.png')",
      },
      fontFamily:
      {
        'Poppins': ["Poppins", "sans-serif"],
        'Cascadia': ['Cascadia Code',' sans-serif']
        
      }
    },
  },
  plugins: [],
}

