/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // Tells Tailwind where to scan for class usage
  ],
  theme: {
    extend: {
      colors: {
        ebayRed: '#E53238',
        ebayBlue: '#0064D2',
        ebayYellow: '#F5AF02',
      },
    },
  },
  plugins: [],
};
