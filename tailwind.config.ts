import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#050505",
        coal: "#0A0A0A",
        carbon: "#111111",
        saffron: "#FACC15",
        saffronDark: "#EAB308",
        mist: "#F5F5F7",
        smoke: "#86868B",
      },
      fontFamily: {
        display: ["var(--font-syne)", "var(--font-jakarta)", "system-ui", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        grotesk: ["var(--font-grotesk)", "ui-monospace", "monospace"],
      },
      letterSpacing: { display: "-0.04em" },
      animation: {
        "beam-spin": "beam-spin 4s linear infinite",
        marquee: "marquee 28s linear infinite",
        floaty: "floaty 5s ease-in-out infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
      },
      keyframes: {
        "beam-spin": { to: { transform: "rotate(360deg)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        pulseDot: { "0%,100%": { opacity: "1", transform: "scale(1)" }, "50%": { opacity: ".45", transform: "scale(.8)" } },
      },
    },
  },
  plugins: [],
};
export default config;
