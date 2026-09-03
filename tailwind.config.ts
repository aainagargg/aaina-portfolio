import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // NOTE for Claude Code / whoever redesigns this:
      // No color/type tokens are pre-baked here on purpose. Pick a palette
      // and type system deliberately based on the brief in CLAUDE.md —
      // don't default to Tailwind's stock slate/indigo or a generic
      // cream+serif combo. See CLAUDE.md "Design direction" section.
    },
  },
  plugins: [],
};
export default config;
