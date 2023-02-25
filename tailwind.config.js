/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#977FD7",
        'dark-primary': "#33294E",
        secondary: "#F5A9CB",
        accent: "#FFFFC2",
        "sub-black": "#2D2D2D"
      }
    }
  },
  plugins: []
};
