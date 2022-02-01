const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{html,js}",
    "./src/components/**/*.{html,js}",
    "./src/styles/**/*.{html,js}",
  ],
  theme: {
    colors: {
      primary: "hsla(148, 39%, 19%, 1)",
      primaryLight: "hsla(148, 54%, 30%, 1)",
      accent: "hsla(40, 100%, 42%, 1)",
      text: "#181717",
      "text-light": "#606060",
    },
    fontFamily: {
      headline: ["Roboto", "sans-serif"],
      curly: ["Moon Dance", "cursive"],
      mono: ["DM Mono", ...defaultTheme.fontFamily.mono],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
