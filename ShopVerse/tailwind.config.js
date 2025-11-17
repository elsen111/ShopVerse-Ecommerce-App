/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",        // include root HTML
    "./src/**/*.{js,ts,jsx,tsx}" // include all React components
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
        accent: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
