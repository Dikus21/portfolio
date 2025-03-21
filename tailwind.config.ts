import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        textContent: "var(--color-text-content)",
        subtitle: "var(--color-subtitle)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "title-gradient": "var(--color-title)",
        "accent-gradient": "var(--color-accent)", 
      }
    },
  },
  plugins: [],
  darkMode: 'class'
} satisfies Config;
