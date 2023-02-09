/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        autodesktop: "repeat(auto-fit, minmax(410px, 1fr))", automobile: "repeat(auto-fit, minmax(300px, 1fr))"
      },
      screens: {
        xs: "425px",
        // => @media (min-width: 425px) { ... }

        "2xl": "1440px"
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        primary: "#165C9C",
        secondary: "#101828",
        gray: "#667085"

      }
    }
  },
  plugins: []
};
