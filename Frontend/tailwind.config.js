/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          800: "#5046e4",
          200: "#e1e7ff",
          400: "#9592dd"
        }
      }
    },
  },
  plugins: [],
}

