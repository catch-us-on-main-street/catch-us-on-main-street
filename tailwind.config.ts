// Tailwind v4 is CSS-first; this file is loaded via `@config` in app/globals.css.
const config = {
  content: ["./app/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        teal: "#0F4C5C",
        espresso: "#261E1B",
        cream: "#F5F2EF",
        goldenrod: "#B8860B",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      // Slow Ken Burns drift for the hero photo; transform-only so it stays on the compositor.
      keyframes: {
        "ken-burns": {
          from: { transform: "scale(1.05) translate3d(0, 0, 0)" },
          to: { transform: "scale(1.15) translate3d(-2%, -1.5%, 0)" },
        },
      },
      animation: {
        "ken-burns": "ken-burns 32s ease-in-out infinite alternate",
      },
      letterSpacing: {
        luxe: "0.25em",
        airy: "0.4em",
      },
    },
  },
};

export default config;
