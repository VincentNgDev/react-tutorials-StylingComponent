/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        "custom-0.4": "0.4em",
      },
      colors: {
        "header-title": "#9a3412",
        "header-subtitle": "#a39191",
      },
      fontFamily: {
        "header-title" : ["Pacifico", "cursive"],
      }
    },
  },
  plugins: [],
}

