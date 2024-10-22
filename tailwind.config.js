/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        customLavender: '#ECEEF6',
        customBackgroundColor:"#2A1768",
        customBannerColor:"#DA291C",
      },
      screens: {
        'phone': '370px', 
      },
    },
  },
  plugins: [],
}