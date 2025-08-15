/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'doradoboda': '#d5b36b',
        'cards-color': '#d4c4af',
        'marron-100': '#aa9273',
        'yellow-100': '#FFF3B0',
        'yellow-200': '#FFD95A',
        'blackligth': '#1A1A1A',
        'grayligth': '#CCCCCC',
        'grayblack': '#999999',
        'nuevoverde': '#2090e0',
      },
    },
  },
  plugins: [],
};
