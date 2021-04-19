module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
