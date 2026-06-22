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
        base: "#100C18",
        surface: "#1A1425",
        primary: "#FF85A2",
        secondary: "#F5D5A0",
        tertiary: "#A8E6CF",
        foreground: "#F8F4FF",
        muted: "#9CA3AF",
      },
      fontFamily: {
        display: ["Quicksand", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee2": "marquee2 30s linear infinite",
        "shiny": "shiny 4s ease-in-out infinite",
        "glow-spin": "glow-spin 4s linear infinite",
        "float1": "float1 20s ease-in-out infinite",
        "float2": "float2 25s ease-in-out infinite",
        "float3": "float3 22s ease-in-out infinite",
        "reveal-up": "reveal-up 0.8s ease-out forwards",
        "reveal-scale": "reveal-scale 0.8s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        shiny: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "glow-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float1: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(60px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-40px, 30px) scale(0.95)" },
        },
        float2: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(-50px, 50px) scale(1.05)" },
          "66%": { transform: "translate(40px, -30px) scale(0.9)" },
        },
        float3: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, 40px) scale(1.08)" },
          "66%": { transform: "translate(-60px, -20px) scale(0.95)" },
        },
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-scale": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
