/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',  
        secondary: '#4B5563', 
        backgroundLight: '#F9FAFB',
        backgroundDark: '#1F2937', 
        textLight: '#F3F4F6', 
        textDark: '#E5E7EB', 
      },
    },
  },
  plugins: [],
}

