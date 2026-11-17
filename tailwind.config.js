/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        coal: "#141414",
        smoke: "#1d1d1d",
        gold: { DEFAULT: "#c9a24a", light: "#e6c978", dark: "#9a7a2e" },
        ivory: "#f8f5ee",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Jost", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
