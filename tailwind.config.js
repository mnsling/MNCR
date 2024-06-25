/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      screens: {
        'mobile': '640px', // Custom breakpoint for mobile
        'tablet': '768px', // Custom breakpoint for tablet
        'desktop': '1024px', // Custom breakpoint for desktop
      },
      fontSize: {
        '10xl': '8rem', // custom larger font size
        '11xl': '11rem', // additional larger font size if needed
      },
      lineHeight: {
        '11': '3.0rem',  // Add this line to define a custom line-height above leading-10
        '12': '4.7rem',  // Add this line for even larger line-height
        '13': '5rem',  // Example of adding more custom line-height values
        '14': '6rem',  // Example of adding more custom line-height values
      },
    },
  },
  plugins: [],
}
