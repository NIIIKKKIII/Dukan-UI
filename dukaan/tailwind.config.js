/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // Ensure this points to your HTML file(s)
    "./src/**/*.{js,ts,jsx,tsx}"   // Make sure this includes all JSX/TSX files
  ],
  theme: {
    extend: {  // Use 'extend' to add new values to the default theme without overriding it
      colors: {
        customPurple: "#20263E",   // Renamed to avoid conflicts with Tailwind's default purple
        BGG: "#FAFAFA",
        searchbar: "#F2F2F2",
        BC:"#1673c2",
        BBG: "#0e4f82",
        gray: "#E6E6E6",
        AV:"#343c53"
      },
      borderWidth: {
        Thin: "0.3px",
      },
      fontSize: {
        xxs: "10px",  // Extra extra small font size
        xss: "13px",  // Extra small font size
      },
      
    },
  },
  plugins: [],
}
