/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cgreen': '#20BF6B',
        'cblue': '#0169FF',
        'light-gray': '#F2FDF2',
        'light-green': '#F4FCF8',
        'dark-blue': '#212435',
        'light-red': '#FFFAF2',
      },
      spacing: {
        'custom-top': '-100px',
      },
      height: {
        'hero': '700px'
      },
    },
  },
  plugins: [],
}