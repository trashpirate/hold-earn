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
        "hero-pattern": "url('/flame.gif')",
      },
      fontFamily: {
        body: ["IBM Plex Sans"],
      },
      screens: {
        xs: "465px",
        xxs: "372px"
      },
      colors: {
        primary: "#FF6B10"
      },
      maxHeight: {
        maxH192: "30rem"
      },
      width: {
        wide: "500px"
      }
    },
  },
  plugins: [],
};
export default config;
