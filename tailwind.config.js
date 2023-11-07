/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      phone: { max: '600px' },
      tablet: { max: '1024px' },
      desktop: { min: '1025px' },
    },
  },
  plugins: [],
};
