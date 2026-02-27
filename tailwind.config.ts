import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        accent: "#38BDF8",
        dark: "#0B1120",
        darkSoft: "#0F172A",
      },
    },
  },
  plugins: [],
};

export default config;