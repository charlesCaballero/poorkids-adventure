import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/react");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FACC15", // Yellow-500
        secondary: "#3B82F6", // Blue-500
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
