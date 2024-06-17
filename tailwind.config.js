/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '50px',
      },
      transitionDuration: {
        '200': '0.2s',
      },
      transitionProperty: {
        'all': 'all',
      },
      boxShadow: {
        'inset-black': 'inset 0 0 5px black',
        'custom-black': '0 0 10px black',
      },
    },
  },
  plugins: [],
}

