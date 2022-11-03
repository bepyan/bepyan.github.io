const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        mobile: { max: '1024px' },
        pc: { min: '1024px' },
      },
    },
  },
  plugins: [],
};
