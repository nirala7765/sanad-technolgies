/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media", // 👈 enables system-level dark mode detection
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {},
    },
    extend: {
      colors: {
        themeclor: "#57BFFF",
      },
    },
  },
  plugins: [],
};