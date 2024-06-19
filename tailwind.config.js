/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    backgroundColor: {
      primary: "#885BE8",
      secondary: "#F6F2FF",
      "light-secondary": "#FBF9FF",
    },
    fontSize: {
      logo: "40px",
      h1: "24px",
    },
    textColor: {
      primary: "#885BE8",
      secondary: "#F6F2FF",
      "light-secondary": "#FBF9FF",
    },
    height: {
      full: "100%",
      "40vh": "40vh",
      "60vh": "60vh",
    },
  },
  plugins: [],
};
