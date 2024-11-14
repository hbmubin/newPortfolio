/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arvo: ["Arvo"],
        cairo: ["Cairo"],
      },
      colors: {
        back: "#ebebeb",
        card: "#f9fbe9",
        text: "#333333",
      },
    },
  },
  plugins: [],
};
