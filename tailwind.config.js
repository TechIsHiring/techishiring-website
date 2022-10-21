/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
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
      boxShadow: {
        "login": "0px 64px 100px -80px #FF5F13, 0px 16px 56px rgba(181, 107, 72, 0.19)",
        "superlative": "0px 22px 24px -8px rgba(0, 0, 0, 0.05), 0px 4px 8px rgba(0, 0, 0, 0.1)",
        "paginate": "0px 1px 2px rgba(237, 95, 0, 0.05), 0px 1px 1px rgba(237, 95, 0, 0.05)",
        "input": "0px 1px 2px rgba(17, 24, 28, 0.05), 0px 1px 1px rgba(17, 24, 28, 0.05)"
      }
    }
  },
  plugins: [],
}
