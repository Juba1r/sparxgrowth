import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Sunborn", "Plus Jakarta Sans", "sans-serif"],
        subheading: ["Barriecito", "cursive"],
      },
      colors: {
        background: "#030f07",
        primary: {
          DEFAULT: "#1b9058",
          light: "#22b56c",
          dark: "#064226",
        },
        accent: "#ffde59",
        "deep-green": "#064226",
        surface: "rgba(27,144,88,0.05)",
        border: "rgba(27,144,88,0.15)",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "orb-float": "orb-float 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "orb-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #064226, #1b9058, #ffde59)",
        "gradient-green": "linear-gradient(135deg, #064226, #1b9058)",
        "gradient-gold": "linear-gradient(135deg, #1b9058, #ffde59)",
        "gradient-hero": "linear-gradient(135deg, #030f07 0%, #064226 50%, #030f07 100%)",
        "gradient-card": "linear-gradient(145deg, rgba(27,144,88,0.08), rgba(6,66,38,0.04))",
      },
    },
  },
  plugins: [],
};

export default config;
