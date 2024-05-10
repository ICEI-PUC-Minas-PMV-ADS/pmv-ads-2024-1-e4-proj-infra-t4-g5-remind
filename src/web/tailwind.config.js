/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4b0195',
        bgPrimary: '#F2F4FF',
        textSecondary: '#9ca3af',
        textLink: '#546FFF',
        bgSecondary: '#F9F8FE',
        subtleBlack: '#2B2B33',
        lightGray: '#cccccc',
        btnBlue: '#317BE9',
      },
      animation: {
        jump: 'jump 500ms ease-in-out infinite',
      },
      keyframes: {
        jump: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      screens: {
        mg: '825px',
        // => @media (min-width: 825px) { ... }
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('transitionDelay'),
        },
      );
    }),
  ],
};
