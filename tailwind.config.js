/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E88E5', // Logo blue color
        'primary-dark': '#1565C0',
        'primary-light': '#42A5F5',
        dark: {
          DEFAULT: '#0A0A0A',
          100: '#171717',
          200: '#1F1F1F',
          300: '#2E2E2E',
        }
      },
    },
  },
  plugins: [],
};
