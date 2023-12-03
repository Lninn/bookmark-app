import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        ".z-bg": {
          "backgroundColor": "#f8f7f3"
        },
        ".z-bg-ac": {
          "backgroundColor": "#ede9e4"
        },
      })
    })
  ],
  darkMode: "class"
}
export default config
