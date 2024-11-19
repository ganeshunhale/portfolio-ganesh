/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode by class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        customWhite: 'rgb(250, 250, 250)',
        secBg: 'rgb(79,79,79,0.08)',
        // Add any additional custom colors here
      },
    },
  },
  plugins: [],
}
