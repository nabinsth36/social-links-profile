/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],

  theme: {
    extend: {},
    screens: {
      mobile: "375px",
      // => @media (min-width: 375px) {...}
      desktop: "1440px",
      // => @media (min-width: 1440px) {...}
    },
  },
  plugins: [],
};
