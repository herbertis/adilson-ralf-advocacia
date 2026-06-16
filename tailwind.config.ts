import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"]
      },
      colors: {
        navy: {
          50:  "#f0f3f8",
          100: "#dde5f0",
          200: "#b8cae2",
          300: "#8aa6cf",
          400: "#5680b8",
          500: "#3660a0",
          600: "#264b87",
          700: "#1e3d6f",
          800: "#18305a",
          900: "#14274b",
          950: "#0d1b32"
        },
        // Steel blue - extracted from logo (replaces gold)
        steel: {
          50:  "#f0f4f9",
          100: "#dce6f2",
          200: "#b4cce4",
          300: "#83acd1",
          400: "#5688bc",
          500: "#3d6fa6",  // main accent - logo blue
          600: "#2e5a8e",
          700: "#244878",
          800: "#1c3860",
          900: "#162d4e"
        },
        // Silver - logo "ADILSON RALF" text color
        silver: {
          300: "#c8cdd6",
          400: "#a2aab8",
          500: "#7d8799",
          600: "#5e6a7c"
        },
        ink: "#1a1a18",
        muted: "#7d7d77",
        surface: "#f7f6f2",
        "surface-2": "#eeeee9"
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        beam: "beam 2.5s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        "glow-pulse": {
          "0%,100%": { opacity: "0.3", filter: "blur(60px)" },
          "50%": { opacity: "0.6", filter: "blur(80px)" }
        },
        shimmer: {
          from: { backgroundPosition: "200% center" },
          to: { backgroundPosition: "-200% center" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        beam: {
          "0%": { transform: "translateX(-100%) skewX(-12deg)" },
          "100%": { transform: "translateX(250%) skewX(-12deg)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
