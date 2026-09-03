import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#09090F",
        surface: "#15141D",
        surface2: "#1C1B27",
        ink: "#F4F2ED",
        paper: "#F4F2ED",
        muted: "#948FA3",
        signal: "#FF7A3D",
        pulse: "#9B87F5",
        econ: "#F5C451",
        line: "#2A2836",
        // legacy aliases kept during the redesign
        slate: "#948FA3",
        deep: "#9B87F5",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        accent: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "glow-signal": "radial-gradient(circle at 30% 20%, rgba(255,122,61,0.25), transparent 60%)",
        "glow-pulse": "radial-gradient(circle at 70% 30%, rgba(155,135,245,0.25), transparent 60%)",
        "glow-econ": "radial-gradient(circle at 50% 20%, rgba(245,196,81,0.2), transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
