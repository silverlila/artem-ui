/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],

  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '',
        error: '',
        success: '',
        warning: '',
        info: '',
        default: '',
      },
    },
  },
  plugins: [],
};
