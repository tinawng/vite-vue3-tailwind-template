const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.65rem',
        '3xs': '.6rem',
      },
    },
    screens: {
      'sm': '1024px',
      'md': '1081px',
      'lg': '1920px',
      'xl': '2560px',
    },
  },
  plugins: [],
}
