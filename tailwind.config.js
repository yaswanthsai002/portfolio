/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['Noto Sans', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'urbanist': ['Urbanist', 'sans-serif'],
      },
      colors: {
        primary: '#FFB703',
        secondary: '#0C356A',
        accent: '#219EBC',
        background: '#023047',
      }
    },
  },
  plugins: [],
}