/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        violet: {
          100: '#7F56D9',
        },
        grey: {
          100: '#475467',
        },
      },
      //adding bg color
      backgroundColor: {
        violet: {
          100: '#7F56D9',
        },
      },
    },
  },
  plugins: [],
}

