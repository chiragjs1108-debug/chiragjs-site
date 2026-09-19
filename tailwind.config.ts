import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0B",
        surface: "#141518",
        "surface-2": "#1C1D21",
        border: "#26282D",
        "border-bright": "#3A3D44",
        lime: "#C8FF3D",
        "lime-dim": "#9BCC2E",
        "lime-glow": "rgba(200,255,61,0.12)",
        // Secondary accents — used for multi-category coding (ownership
        // tiers, cost tiers) where a single accent can't distinguish 3+
        // groups. Never used for CTAs; lime stays the only action colour.
        azure: "#4DA8FF",
        "azure-dim": "#3B82CC",
        "azure-glow": "rgba(77,168,255,0.12)",
        amber: "#FFB13D",
        "amber-dim": "#CC8E2E",
        "amber-glow": "rgba(255,177,61,0.12)",
        text: "#F5F6F7",
        "text-2": "#A1A4AB",
        "text-3": "#6B6F78",
        light: "#F7F8F8",
        ink: "#0A0A0B",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-space-grotesk)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      borderRadius: {
        card: "12px",
        button: "8px",
        badge: "6px",
      },
      maxWidth: {
        container: "1240px",
      },
      boxShadow: {
        "lime-glow": "0 0 40px rgba(200,255,61,0.08)",
      },
    },
  },
} satisfies Config;
