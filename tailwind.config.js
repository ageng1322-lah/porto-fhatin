/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6',
        secondary: '#3b82f6',
        dark: '#0a0a0a',
        'dark-lighter': '#1a1a1a',
      },
      fontFamily: {
        sans: ['"Inter"', '"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
