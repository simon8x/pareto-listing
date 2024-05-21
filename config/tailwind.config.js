const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      colors:{
        main:'#86B6B9',
        mainh:'#30677B',
        dark:'#262936',
        darkh:'#262A3B',
        new:'#C3D085',
        action:'#00586E',
        chip: '#262A39'
      },
      fontFamily: {
        inter:["Inter","sans"],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
