/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {

      
    extend: {

      fontFamily: {
        "open": ['Open Sans', 'sans-serif'],
        "patua": ['Patua One', 'serif'],
      }
    },
  },
  plugins: [],
}

