const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  colors: {
    'blue': '#1fb6ff',
    'pink': '#ff49db',
    'orange': '#ff7849',
    'green': '#13ce66',
    'gray-dark': '#273444',
    'gray': '#8492a6',
    'gray-light': '#d3dce6',
    'background': '#f6ebe5'
  },
  plugins: [('@tailwindcss/aspect-ratio')],
}

