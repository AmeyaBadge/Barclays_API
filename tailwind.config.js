/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
        },
        neon: {
          blue: "#00f5ff",
          purple: "#a855f7",
        },
      },
      boxShadow: {
        glow: "0 0 10px rgba(168, 85, 247, 0.5)",
        "glow-blue": "0 0 10px rgba(0, 245, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
