import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        portfolio: {
          primary: "#2563eb",
          "primary-content": "#ffffff",
          secondary: "#64748b",
          "secondary-content": "#ffffff",
          accent: "#0f172a",
          "accent-content": "#ffffff",
          neutral: "#1e293b",
          "neutral-content": "#f8fafc",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#e2e8f0",
          "base-content": "#0f172a",
          info: "#3b82f6",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
      {
        "portfolio-dark": {
          primary: "#3b82f6",
          "primary-content": "#ffffff",
          secondary: "#94a3b8",
          "secondary-content": "#0f172a",
          accent: "#e2e8f0",
          "accent-content": "#0f172a",
          neutral: "#1e293b",
          "neutral-content": "#f8fafc",
          "base-100": "#0a0f1a",
          "base-200": "#0f1629",
          "base-300": "#1e2d4a",
          "base-content": "#f1f5f9",
          info: "#60a5fa",
          success: "#4ade80",
          warning: "#fbbf24",
          error: "#f87171",
        },
      },
    ],
    darkTheme: "portfolio-dark",
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
};

export default config;
