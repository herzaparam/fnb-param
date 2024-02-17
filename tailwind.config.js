/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#22333b",
      secondary: "#a9927d",
      tertiary: "#5e503f",
      dark: "#0a0908",
      light: "#f2f4f3"
    },
  },
  plugins: [],
};
