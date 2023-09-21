const { nextui } = require("@nextui-org/react");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: {
              "50": "#ecfdf5",
              "100": "#d2f9e5",
              "200": "#a9f1d0",
              "300": "#71e4b6",
              "400": "#38cf98",
              "500": "#14b37e",
              "600": "#099268",
              "700": "#077556",
              "800": "#085d45",
              "900": "#084c3a",
              "950": "#032b21",
              DEFAULT: "#14b37e",
            },
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: {
              "50": "#ecfdf5",
              "100": "#d2f9e5",
              "200": "#a9f1d0",
              "300": "#71e4b6",
              "400": "#38cf98",
              "500": "#14b37e",
              "600": "#099268",
              "700": "#077556",
              "800": "#085d45",
              "900": "#084c3a",
              "950": "#032b21",
              DEFAULT: "#14b37e",
            },
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
export default config;
