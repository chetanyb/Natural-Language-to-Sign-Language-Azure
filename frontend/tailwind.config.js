/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "first-pink": "#dbc0af",
        "first-green": "#5c8f92",
        "second-pink": "#b3907b",
        "second-green": "#4c7f82",
      },
      gradientColorStops: {
        "first-pink": "#dbc0af",
        "first-green": "#5c8f92",
        "second-pink": "#b3907b",
        "second-green": "#4c7f82",
      },
    },
  },
  plugins: [],
};
