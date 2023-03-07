/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './pages/*.html',
    './*.html',
  ],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      colors: {
        linkblue: '#066ff5',
        bodybg: '#f7f7f7',
      },
      spacing: {
        'c5': '5px',
        'c15': '15px',
        'c30': '30px',
      }
    },
  },
  variants: {},
  plugins: [],
}
