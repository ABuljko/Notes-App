/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors:{
          primary:"#2B85FF",
          secondary:"#EF863E",
        }
      },
    },
    plugins: [],
  }
  