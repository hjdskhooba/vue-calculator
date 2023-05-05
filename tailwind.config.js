/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,vue,jsx,ts,tsx}"],
  theme: {
    extend: {
      "weather-primary": "#00668A",
      "weather-secondary": "#004E71",
    },
  },
  fontFamily: {
    Roboto: ["Roboto, sans-serif"],
  },
  container: {
    padding: "2rem",
    center: true,
  },
  screen: {
    sm: "640px",
    md: "768px",
  },
  plugins: [],
};
