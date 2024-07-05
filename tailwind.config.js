/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      colors: {
        "regal-blue": "#243c5a",
        customColor: "#E3E3FF",
      },
    },
  },
  plugins: [],
};
