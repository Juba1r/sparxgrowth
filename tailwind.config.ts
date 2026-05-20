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
        subheading: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#F5F0E6",
        primary: {
          DEFAULT: "#123527",
          light: "#1C4D38",
          dark: "#0a1f17",
        },
        accent: "#C59B27",
        "deep-green": "#123527",
        surface: "#EAE3D5",
        border: "rgba(18, 53, 39, 0.12)",
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
        "gradient-brand": "linear-gradient(135deg, #123527, #1C4D38, #C59B27)",
        "gradient-green": "linear-gradient(135deg, #123527, #1C4D38)",
        "gradient-gold": "linear-gradient(135deg, #1C4D38, #C59B27)",
        "gradient-hero":
          "linear-gradient(135deg, #F5F0E6 0%, #EADFCB 50%, #F5F0E6 100%)",
        "gradient-card":
          "linear-gradient(145deg, #FFFFFF, #EAE3D5)",
      },
    },
  },
  plugins: [],
};

export default config;
