/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nature: {
          50: "#f0f5fc",
          100: "#dce8f7",
          500: "#1d63b8",
          900: "#0b284d"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"]
      }
    }
  },
  plugins: []
};
