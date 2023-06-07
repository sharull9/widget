/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "var(--primary-color)",
        },
        lightBlue: "#c7d2fe",
      },
      height: {
        "9/10": "90%",
        "4/10": "40%",
      },
    },
  },
  plugins: [],
};
