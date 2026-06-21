import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#030407",
        obsidian: "#080b12",
        panel: "rgba(12, 18, 31, 0.72)",
        cyan: {
          tlx: "#00d7e8"
        },
        violet: {
          tlx: "#7f3cff"
        },
        blue: {
          tlx: "#1977ff"
        },
        frost: "#e9f4ff",
        muted: "#91a3b8",
        signal: "#f2c86b"
      },
      boxShadow: {
        glow: "0 0 48px rgba(0, 215, 232, 0.18)",
        violetGlow: "0 0 54px rgba(127, 60, 255, 0.2)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.48)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Inter", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        "tlx-radial":
          "radial-gradient(circle at 20% 20%, rgba(0, 215, 232, 0.18), transparent 32%), radial-gradient(circle at 80% 0%, rgba(127, 60, 255, 0.18), transparent 36%), linear-gradient(180deg, #030407 0%, #080b12 46%, #030407 100%)"
      }
    }
  },
  plugins: []
};

export default config;
