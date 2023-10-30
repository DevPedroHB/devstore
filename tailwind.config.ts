import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter)",
      },
      maxWidth: {
        app: "100rem",
        "product-info": "17.5rem",
      },
      maxHeight: {
        app: "53.75rem",
      },
      width: {
        search: "20rem",
      },
      height: {
        "skeleton-home": "53.5rem",
        "skeleton-search": "25rem",
      },
      gridTemplateRows: {
        app: "min-content max-content",
      },
    },
  },
  plugins: [],
};

export default config;
