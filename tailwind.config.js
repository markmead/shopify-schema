const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
