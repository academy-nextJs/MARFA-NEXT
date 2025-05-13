/** @type {import('tailwindcss').Config} */

const { heroui } = require('@heroui/react');

module.exports = {
  content: [
     "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/main/global.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        yekan: ['Yekan', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
    plugins: [heroui()],
}

