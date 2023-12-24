/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in-left': 'fade-in-left 0.5s',
        'fade-in-right': 'fade-in-right 0.5s'
      },
      keyframes: {
        'fade-in-left': {
          '0%': {
            transform: 'translateX(-200%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        },
        'fade-in-right': {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-200%)'
          }
        }
      }
    }
  },
  plugins: []
};
