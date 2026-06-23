/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F1117",
        surface: "#1A1D27",
        border: "#2A2D3E",
        primary: "#6C63FF",
        accent: "#00D4AA",
        warning: "#F59E0B",
        textPrimary: "#F1F1F5",
        textMuted: "#8B8FA8",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
