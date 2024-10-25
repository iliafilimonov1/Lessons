/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        '3': '3',
        '4': '4',
        '5': '5',
      }
    }
  },
  plugins: [],
}

