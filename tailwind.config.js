/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // for Next.js App Router files
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",    // if using Pages Router or legacy files
    "./components/**/*.{js,ts,jsx,tsx,mdx}"// your reusable components
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",  // was probably 1.5rem (px-6)
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",       // was maybe 3rem+
        xl: "2.5rem",
      },
    },
    extend: {
      colors: {
        themeclor: '#57BFFF',
      },
    },
  },
  plugins: [],
};
