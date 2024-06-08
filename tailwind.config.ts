import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'custom-orange': 'rgba(255, 140, 0, 0.25) 0px 54px 55px, rgba(255, 140, 0, 0.12) 0px -40px 30px, rgba(255, 140, 0, 0.12) 0px 10px 6px, rgba(255, 140, 0, 0.17) 0px 12px 13px, rgba(255, 140, 0, 0.09) 0px -5px 5px',
      },
    },
  },
  plugins: [],
};
export default config;
