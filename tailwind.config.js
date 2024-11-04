/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens:{
      sm: "340px",
      md:"540px", 
      lg:"768px",
      xl: "1080px"
    },
    extend: {
      colors:{
        primaryColor : '#F0670E'
      }
    },
  },
  plugins: [],
}

