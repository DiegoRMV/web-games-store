/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorGreen: "#46d3c7",
        colorOrange: "#bec24c",
        colorDark: "#181A20",
      }
    },
  },
  plugins: [],
};
