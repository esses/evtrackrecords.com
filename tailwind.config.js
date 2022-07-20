module.exports = {
  content: ["./*.js","./src/**/*.{html,njk}"],
  theme: {
    fontFamily: {
      'sans': ['Montserrat','Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      fontSize: {
        'shmedium': '.93rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
