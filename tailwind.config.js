/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }

      // '2xl': { max: '1440px' },
      // // => @media (max-width: 1535px) { ... }

      // xl: { max: '1279px' },
      // // => @media (max-width: 1279px) { ... }

      // lg: { max: '1023px' },
      // // => @media (max-width: 1023px) { ... }

      // md: { max: '767px' },
      // // => @media (max-width: 767px) { ... }

      // sm: { max: '480px' },
      // // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      sen: ['Sen', 'sans-serif'],
    },
    extend: {
      colors: {
        mainColor: '#050C2A',
      },
      padding: {
        big: '50px',
      },
      // screens: {
      //   sm: '480px',
      //   md: '768px',
      //   lg: '1028px',
      //   xl: '1440px',
      // },
    },
  },
  plugins: [],
};
