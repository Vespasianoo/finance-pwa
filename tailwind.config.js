/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        fn_dark_900: '#121214',
        fn_dark_800: '#242424'
      },
      fontFamily: {
        sans: ['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

