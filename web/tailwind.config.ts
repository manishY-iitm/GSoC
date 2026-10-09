/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        haze: "var(--haze)",
        dust: "var(--dust)",
        accent: "var(--accent)",
        seam: "var(--seam)",
        raise: "var(--raise)",
        sunk: "var(--sunk)",
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
