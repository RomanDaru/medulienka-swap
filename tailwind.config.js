import scrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        honey: {
          light: "#FFFBEB",
          DEFAULT: "#FFC107",
          dark: "#FFA000",
        },
        forest: {
          light: "#C8E6C9",
          DEFAULT: "#4CAF50",
          dark: "#388E3C",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      zIndex: {
        100: "100", // For modal layering
      },
    },
  },
  plugins: [
    scrollbar({ nocompatible: true, preferredStrategy: "pseudoelements" }),
  ],
};
