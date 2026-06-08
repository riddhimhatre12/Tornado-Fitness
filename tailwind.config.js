/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0F0F0F",
        graphite: "#1A1A1A",
        cyanAccent: {
          DEFAULT: "#00D4FF",
          dark: "#00A2C2",
          light: "#33DDFF",
          translucent: "rgba(0, 212, 255, 0.15)",
        }
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
        cyanGlow: "0 0 20px rgba(0, 212, 255, 0.3)",
      },
      backgroundImage: {
        "glass-gradient": "linear-gradient(135deg, rgba(26, 26, 26, 0.7) 0%, rgba(15, 15, 15, 0.9) 100%)",
      }
    },
  },
  plugins: [],
}
