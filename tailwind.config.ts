import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#070709",
        surface: {
          DEFAULT: "#0f1015",
          muted: "#151720",
          card: "#12141c",
          border: "#1f2330",
          hover: "#1a1d28",
        },
        brand: {
          lime: "#ccff00",
          limeHover: "#b8e600",
          gold: "#eab308",
          cyan: "#00f0ff",
          crimson: "#ff2a5f",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "marquee": "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 28s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2.5s ease-in-out infinite alternate",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 15px rgba(204, 255, 0, 0.2)" },
          "100%": { boxShadow: "0 0 35px rgba(204, 255, 0, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
