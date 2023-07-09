module.exports = {
  theme: {
    extend: {      
    	colors: {
      }
    }
  },
  variants: {
  	fill: ['hover', 'focus']
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography')
  ]
}
