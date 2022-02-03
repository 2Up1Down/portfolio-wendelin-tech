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
      "primary-light": "hsla(148, 54%, 30%, 1)",
      accent: "hsla(40, 100%, 42%, 1)",
      "text-base": "#181717",
      "gray-dark": "#606060",
      "gray-light": "#F1F1F1",
      white: "#FFFFFF",
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
    extend: {
      aspectRatio: {
        "4/5": "4 / 5",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
