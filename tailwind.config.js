/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      screens: {
        xl: "1200px",
        "2xl": "1200px",
      },
      colors: {
        primary: "#EFBA67",
        dark: "#252525",
      },
    },
  },
  plugins: [],
};
