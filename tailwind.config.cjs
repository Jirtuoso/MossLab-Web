/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      colors: {
        kiln: {
          bg: '#FAFAF5', /* Warm off-white / cream */
          surface: '#FFFFFF',
          forest: '#132A13', /* Deep Forest Green - Primary Text */
          sage: '#4F6F52', /* Muted Green - Secondary Text */
          leaf: '#859F3D', /* Bright Moss - Accents */
          stone: '#D8DBD0', /* Borders */
          mist: '#F0F2EB', /* Secondary Backgrounds */
          black: '#0a0a0a',
          gold: '#D4AF37', /* Premium Gold */
        }
      },
    },
  },
  plugins: [],
}

