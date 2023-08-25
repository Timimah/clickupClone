/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "##E4F4E9",
          DEFAULT: "#038046",
        },
        secondary: {
          DEFAULT: "#FFF9F7",
        },
      },
      fontFamily: {
        heading: ["Epilogue", "sans-serif"],
        sans: ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
