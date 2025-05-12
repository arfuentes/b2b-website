/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './assets/**/*.scss',
    './assets/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#EDF2FF',
          100: '#DBE4FF',
          200: '#BDC9FF',
          300: '#94A6FF',
          400: '#7581FF',
          500: '#4F5DFF', // primary
          600: '#3A44D9',
          700: '#2A31B3',
          800: '#1C228C',
          900: '#141972',
        },
        secondary: {
          50: '#F2FCFC',
          100: '#DCF7F7',
          200: '#B0EEEF',
          300: '#7EE0E5',
          400: '#4BCCD6',
          500: '#2AB5C3', // secondary
          600: '#1E98A9',
          700: '#167A8E',
          800: '#0F5E72',
          900: '#0A4B5E',
        },
        accent: {
          50: '#FFF8E6',
          100: '#FFEDBF',
          200: '#FFE099',
          300: '#FFD166', // accent
          400: '#FFBF33',
          500: '#FFAE00',
          600: '#DB9400',
          700: '#B77C00',
          800: '#936300',
          900: '#7A5200',
        },
        success: {
          50: '#E9F7EF',
          100: '#C8EAD9',
          200: '#93D7B0',
          300: '#5BC286',
          400: '#2EAF67',
          500: '#1E9255', // success
          600: '#177A47',
          700: '#126239',
          800: '#0D4A2C',
          900: '#093D23',
        },
        warning: {
          50: '#FFF9E6',
          100: '#FFEEB3',
          200: '#FFE480',
          300: '#FFD94D',
          400: '#FFCE1A',
          500: '#E6B800', // warning
          600: '#B38F00',
          700: '#806600',
          800: '#4D3D00',
          900: '#332900',
        },
        error: {
          50: '#FEF2F2',
          100: '#FECACA',
          200: '#FCA5A5',
          300: '#F87171',
          400: '#EF4444',
          500: '#DC2626', // error
          600: '#B91C1C',
          700: '#991B1B',
          800: '#7F1D1D',
          900: '#6B1C1C',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
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
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}