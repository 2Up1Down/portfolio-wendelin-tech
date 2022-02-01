const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

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
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      lime: colors.lime,
    },
    fontFamily: {
      headline: ["Roboto", "sans-serif"],
      curly: ["Moon Dance", "cursive"],
      mono: ["DM Mono", ...defaultTheme.fontFamily.mono],
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
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
