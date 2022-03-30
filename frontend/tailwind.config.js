module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          blue: '#5E7BF7',
          BG: '#F7F6FB',
          text: '#3E3C5B',
          "light-gray": '#ECEDF6',
          "input": '#ECEDF6',
          "gray": '#EEF0FF',
          "dark-gray": '#CBCBDC',
        },
      },
      boxShadow: {
        'custom': '4px 0px 16px #CBCBDC',
      },
      minWidth: {
        'dropdown': '160px',
      },
      maxWidth: {
        'dropdown': '200px',
      }
    },
  },
  plugins: [],
}
