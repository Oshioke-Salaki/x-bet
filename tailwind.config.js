/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Lora", "serif"],
    },
    extend: {
      colors: {
        primaryColor: "#2E0993",
        secondaryColor: "#181818",
        ash30: "rgba(217, 217, 217, 0.30) ",
        overlay80: "rgba(58, 58, 58, 0.80)",
        ash: "#3A3A3A",
      },
    },
  },
  plugins: [],
};
