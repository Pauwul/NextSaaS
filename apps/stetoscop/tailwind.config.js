/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#136cfb",
      },
    },
  },
  plugins: [],
};

// color palette from the internet :
// light blue : #136cfb
// lighter blue : #3c84fb
// darkest blue : #023382
// gradient from dark in saturation to light in saturation
// #023b96
// #033a95
// #023b96
