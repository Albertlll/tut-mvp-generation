/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        primary: '#408FFF',
        secondary: '#A2C9FF',
        angry: '#FF808F'
      }
    },
  },
  plugins: [],
}

