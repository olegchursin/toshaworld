const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        132: '40rem',
        148: '48rem',
        164: '64rem'
      }
    },
    fontFamily: {
      ...fontFamily,
      cursive: ['Annie Use Your Telescope', 'cursive']
    },
    container: {
      center: true
    }
  },
  plugins: []
};
