/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#13294B',
        'cream': '#FFF0DB',
        'blue': '#1D96CD',
      },
      spacing: {
        '80': '320px',
      },
    },
  },
  plugins: [],
};
