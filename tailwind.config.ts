import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  darkMode: "class",
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url(/images/EllipseBG.png)",
        "widing-card": "url(/images/cards/widing.jpg)",
        "applass-card": "url(/images/cards/applass.jpg)",
        "master-group-card": "url(/images/cards/master-group.jpg)",
        "ptsp-card": "url(/images/cards/ptsp.jpg)",
        "sentafition-card": "url(/images/cards/sentafition.jpg)",
        "winulu-card": "url(/images/cards/winulu.jpg)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-102vw)" },
        },
      },
      animation: {
        marquee: "marquee 15s infinite normal linear",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#0098F6",
              foreground: "#ffffff",
            },
            focus: "#0098F6",
          },
        },
      },
    }),
  ],
};
export default config;
