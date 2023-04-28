/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        "max-screen-size": "1920px"
      },
      gridTemplateColumns: {
        autodesktop: "repeat(auto-fit, minmax(410px, 1fr))",
        automobile: "repeat(auto-fit, minmax(300px, 1fr))"
      },
      screens: {
        xs: "425px",
        // => @media (min-width: 425px) { ... }
        "2xl": "1440px",
        // => @media (min-width: 1440px) { ... }
        "3xl": "1920px",
        // => @media (min-width: 1920px) { ... }
        "pass-max-screen": "1921px"
        // => @media (min-width: 1921px) { ... }
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        primary: "#165C9C",
        secondary: "#101828",
        gray: "#667085",
        dark: "#000000",
        altDark: "#222222",
        altWhite: "#F0F0F0"
      }
    }
  },
  plugins: []
};
