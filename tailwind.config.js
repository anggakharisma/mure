/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#794CF0",
        accent: "#FFFF8E",
        secondary: "#FF85BB",
        "dark-primary": "#33294E",
        "sub-black": "#2D2D2D",

        "light-gradient-first": "#FCF2FF",
        "light-gradient-second": "#E2FFF5",
      }
    }
  },
  plugins: []
};
