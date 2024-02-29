/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '13px',
        'md': '2erm'
      }
    },
    extend: {
      screens: {
        '2xl': '1320px'
      },
      colors: {
        primary: '#6366f1',
        secondary: '#374151'
      }
    },
  },
  plugins: [],
}

