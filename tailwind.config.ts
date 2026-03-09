import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFAF5",
          100: "#FAF5EB",
          200: "#F5EDD8",
          300: "#EDE0C4",
          400: "#E2CFA8",
          500: "#D4BA88",
        },
        sand: {
          50: "#F7F3EE",
          100: "#EDE4D8",
          200: "#DDD0BC",
          300: "#C8B89A",
          400: "#B09B78",
          500: "#947B5A",
          600: "#7A6347",
          700: "#614E38",
          800: "#4A3C2C",
          900: "#362B1F",
        },
        mocha: {
          50: "#F4EFE9",
          100: "#E6DDD3",
          200: "#CDBBA7",
          300: "#B4997B",
          400: "#9B7B57",
          500: "#7D6044",
          600: "#634C36",
          700: "#4A3929",
          800: "#32271C",
          900: "#1E170F",
        },
        warm: {
          50: "#FAFAF9",
          100: "#F5F4F2",
          200: "#EDECEA",
          300: "#E0DED9",
          400: "#CDC9C2",
          500: "#B8B3A9",
          600: "#9C9690",
          700: "#807A72",
          800: "#635E58",
          900: "#47433F",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "spin-slow": "spin 12s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(180, 153, 123, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(180, 153, 123, 0.7)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
