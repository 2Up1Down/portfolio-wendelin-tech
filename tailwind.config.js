module.exports = {
  content: [
    "./src/pages/**/*.{html,js}",
    "./src/components/**/*.{html,js}",
    "./src/styles/**/*.{html,js}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
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
  plugins: [],
};
