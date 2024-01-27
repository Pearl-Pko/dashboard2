/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#FAFAFA",
        primary: "#34CAA5",
        secondary: "#3A3F51",
        textSecondary: "#898989",
        success: "#00AC56",
        error: "#FF1F7D",
        waring: "#F5BF3D"
      }
    },
  },
  plugins: [],
}

