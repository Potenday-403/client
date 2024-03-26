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
        "accents-5": "#111111",
        "accents-4": "#979797",
        "accents-3": "#AEAEB2",
        "accents-2": "#BBBBBB",
        "accents-1": "#E5E5E5",
        red: "#D04354",
        yellow: "#B54708",
        green: "#039855",
        bluegray: "#344054",
        "red-subtle": "#FEF3F2",
        "yellow-subtle": "#FFFAEB",
        "green-subtle": "#ECFDF3",
        "gray-subtle": "#F2F4F7",
      },
    },
  },
  plugins: [],
};
export default config;
