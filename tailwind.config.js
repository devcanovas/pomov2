/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#b17ad8",
        "secondary": "#81e6d9",
        "unselected": "#585858",
      },
    }
  },
  plugins: [],
}