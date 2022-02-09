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
        lg: "1128px",
        xl: "1128px",
        "2xl": "1128px",
      },
    },
    extend: {
      aspectRatio: {
        "4/5": "4 / 5",
      },
      gridTemplateColumns: {
        // inspired by https://rachelandrew.co.uk/archives/2017/06/01/breaking-out-with-css-grid-explained/
        // 94px + 12 = 1128px --> corresponds to the container width
        "full-width":
          "[full-start] auto [main-start] repeat(12, minmax(0, 94px)) [main-end] auto [full-end];",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
