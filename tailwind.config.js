/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#d8f3f6",
          100: "#9ee1e8",
          200: "#00c7d4",
        },
      },
    },
  },
  plugins: [],
};
