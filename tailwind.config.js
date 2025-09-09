/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f7f4f1',
          100: '#e9e1d7',
          200: '#d4c3ab',
          300: '#bc9e7a',
          400: '#a67c52',
          500: '#8b6635',
          600: '#6d4f2a',
          700: '#544023',
          800: '#423321',
          900: '#362a1f',
        },
        coffee: {
          50: '#f6f1e8',
          100: '#e8d5c4',
          200: '#d4b896',
          300: '#bc9767',
          400: '#a67c46',
          500: '#8b5a2b',
          600: '#704621',
          700: '#5a381a',
          800: '#472d15',
          900: '#382412',
        },
        nature: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bde5bd',
          300: '#91d491',
          400: '#5fbe5f',
          500: '#3da43d',
          600: '#2d842d',
          700: '#266926',
          800: '#225522',
          900: '#1e471e',
        }
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
