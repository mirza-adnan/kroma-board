/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          light: "#fffae6",
          DEFAULT: "#ffd008",
          dark: "#d6af00",
        },
        bright: "#eeeeee",
        dark: "#121212",
        darkish: {
          100: "#7a7a7a",
          200: "#5c5c5c",
          300: "#474747",
          400: "#212121",
          500: "#1f1f1f",
          600: "#141414",
          700: "#111111",
        },
        modalBg: "rgba(0%, 0%, 0%, 0.7)",
      },
      spacing: {
        header: "70px",
        sidebar: "280px",
      },
    },
    fontFamily: {
      grotesk: ["Hanken Grotesk", "sans-serif"],
    },
  },
  plugins: [],
};
