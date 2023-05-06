/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,vue,jsx,ts,tsx}"],
  theme: {
    extend: {
      "weather-primary": "#00668A",
      "weather-secondary": "#004E71",
      boxShadow: {
        "webkit": "0px 1px 4px 0px rgba(0, 0, 0, 0.2)",
        "mine": "0px 1px 4px 0px rgba(0, 0, 0, 0.2)",
      },
      backgroundColor: {
        'blue': "#307cf9",
      }
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
