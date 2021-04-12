module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        custom: {
          100: '#6bdaff',
          200: '#33AEF4'
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mont: ['Montserrat']
      },
    }
  },
  variants: {},
  plugins: [],
  important: true,
}
