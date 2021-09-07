module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'home': 'rgba(115,122,184,.3)'
      }),
      backgroundImage: theme => ({
        'home-page': "url(./src/assets/home.jpg)",
        'award': "url(./src/assets/construction-background.png)",
      }),
      fontFamily: theme => ({
        'Allison': ['Allison']
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
