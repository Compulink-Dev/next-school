import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lamaSky: "#145da0",
        lamaSkyLight: "#b1d4e0",
        lamaPurple: "#0c2d48",
        lamaPurpleLight: "#FAA0A0",
        lamaYellow: "#2e8bc0",
        lamaYellowLight: "#b1d4e0",
      },
    },
  },
  plugins: [],
};
export default config;
