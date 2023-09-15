/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PS2P: ["Press Start 2P", "sans-serif"],
        montserrat: ["Montserrat", "san-serif"],
      },
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
      },
    },
  },
  plugins: [require("daisyui")],
};
