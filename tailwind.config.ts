import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f9f7fd",
          100: "#f2ecfb",
          200: "#e6dcf8",
          300: "#d4c1f1",
          400: "#b999e7",
          500: "#9d71db",
          600: "#8653ca",
          700: "#6b3ca6",
          800: "#613891",
          900: "#502e75",
          950: "#331754",
        },
        accent: {
          50: "#fff1f4",
          100: "#ffe4ea",
          200: "#ffccdb",
          300: "#fea3bc",
          400: "#fd6f99",
          500: "#f52467",
          600: "#e31b65",
          700: "#c01055",
          800: "#a1104e",
          900: "#891248",
          950: "#4d0424",
        },
      },
    },
  },
  plugins: [],
};
export default config;
