/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/App.jsx", "./src/MainApp.jsx"],
  theme: {
    extend: {
      colors: {
        Purple: "hsl(259, 100%, 65%)",
        Light_red: "hsl(0, 100%, 67%)",
        White: "hsl(0, 0%, 100%)",
        Off_white: "hsl(0, 0%, 94%)",
        Light_grey: "hsl(0, 0%, 86%)",
        Smokey_grey: "hsl(0, 1%, 44%)",
        Off_black: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
