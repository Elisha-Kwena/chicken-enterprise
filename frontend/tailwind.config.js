// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        // Reference CSS variables
        orangered:"#ff4500",
        yellow:"#ffff00",
        red:"#ff0000",
        green:"#1eff00",
        pale_brown:"#f5d8ae",
        metric:"#F9F7F2",
      }
    },
  },
  plugins: [],
}