import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "36px",
    },
    screens: {
      sm: "640px",
      md: "800px",
      lg: "1360px",
    },
    fontFamily: {
      primary: "var(--font-rubik)",
    },
    extend: {
      colors: {
        primary: "#545454",
        accent: {
          DEFAULT: "#E0D1D1",
          hover: "#1F1F1F",
        },
        background: "#F5F9FC",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
