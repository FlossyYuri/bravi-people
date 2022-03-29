module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          blue: '#5E7BF7',
          BG: '#fdf8f6',
          text: '#3E3C5B',
          "light-gray": '#ECEDF6',
          "dark-gray": '#CBCBDC',
        },
      },
      boxShadow: {
        'custom': '4px 0px 16px #CBCBDC',
      }
    },
  },
  plugins: [],
}
