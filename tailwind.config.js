/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // for Next.js App Router files
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",    // if using Pages Router or legacy files
    "./components/**/*.{js,ts,jsx,tsx,mdx}"// your reusable components
  ],
  theme: {
    extend: {
      colors: {
        themeclor: '#57BFFF',
      },
    },
  },
  plugins: [],
};
