/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        '4vh': '4vh',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      colors: {
        black: {
          100: '#191919',
          700: '#333333',
          800: '#474747',
          900: '#000000',
        },
        gray: {
          100: '#fafbfd',
          120: '#f6f7f8',
          150: '#EAEAEA',
          180: '#E8E8E8',
          200: '#DDDDDD',
          220: '#d6d6d6',
          250: '#DADADA',
          300: '#D8D8D8',
          320: '#e8e8ea',
          330: '#e9e9e9',
          340: '#CCCCCC',
          350: '#c3c3c3',
          400: '#B1B1B1',
          450: '#AAAAAA',
          500: '#9b9b9b',
          550: '#8e8e93',
          560: '#868686',
          600: '#666666',
          700: '#707070',
          750: '#7d7d7d',
          800: '#888888',
        },
        red: {
          200: '#FDE8E8',
          300: '#ffdbdf',
          600: '#D10101',
          700: '#B9152D',
          750: '#970021',
          800: '#9B1C1C',
          900: '#FF0000',
        },
        navy: {
          100: '#e5e9ff',
          500: '#00303C',
        },
        green: {
          100: '#d6f2ef',
          500: '#82d77a',
          700: '#47d200',
        },
        cyan: {
          100: '#e3faff',
          500: '#3DB5E6',
        },
        violet: {
          100: '#ece3ff',
          700: '#6e2ef4',
        },
        zinc: {
          200: '#f2f2f2',
        },
        blue: {
          40: '#f5f9fc',
          50: '#F6F9FC',
          60: '#f5f8fd',
          80: '#edf6fc',
          90: '#e0f0fc',
          100: '#cde4ff',
          150: '#007ff2',
          200: '#428dff',
          220: '#3b7fe9',
          250: '#3c7ae5',
          300: '#007aff',
          350: '#0055c4',
          400: '#1E40AF',
        },
        slate: {
          100: '#f1f5f9',
        },
        yellow: {
          200: '#FDF6B2',
          300: '#FDDC3F',
          500: '#ffb436',
          600: '#ef9a39',
          800: '#723B13',
        },
        teal: {
          400: '#43bbc8',
          500: '#00aac1',
        },
      },
      spacing: {
        wrapper: '1170px',
        registrationCard: '314px',
      },
      screens: {
        wrapper: '1170px',
        'sm-1': '620px',
        'sm-2': '784px',
        'sm-3': '930px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
