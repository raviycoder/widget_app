/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */


const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
  },
  darkMode: "class",
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    nextui({
      themes: {
        dark: {
          colors: {
            secondary: {
              DEFAULT: "#28292F",
            },
          },
        },
      },
    }),
  ],
};
