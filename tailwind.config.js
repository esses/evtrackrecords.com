module.exports = {
  content: ["./*.js","./src/**/*.{html,njk}"],
  theme: {
    fontFamily: {
      'sans': ['Montserrat','Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
