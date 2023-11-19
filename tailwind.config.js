/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      content: ["Ubuntu", "sans-serif"]
    },
    colors: {
      "BrandYellow": "#fde047",
      "BrandGray": "#374151",
    },
    extend: {},
  },
  plugins: [],
});