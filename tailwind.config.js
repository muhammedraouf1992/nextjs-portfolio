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
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      backgroundImage: {
        "firefly-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(249,70,70, 0.3) 0%, rgba(249,48,48, 0) 100%)",
      },
      boxShadow: {
        "glass-inset": "inset 0 17px 5px -9px rgba(249,48,48, 0.3)",
        "glass-sm": "5px 5px 20px 0px rgba(249,48,48, 0.3)",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 80s linear infinite",
        "spin-reverse": "spin-reverse 80s linear infinite",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
