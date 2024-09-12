/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "400px" },
      },
    },
  },
  plugins: [require("preline/plugin")],
};
