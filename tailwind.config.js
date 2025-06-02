/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f0a150',
        secondary: '#000000',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
} 