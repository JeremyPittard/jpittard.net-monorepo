/* eslint-disable import/no-default-export -- silly rule*/
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "../../packages/ui/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        gondola: {
          DEFAULT: "#1B0F12",
          50: "#D3AFB8",
          100: "#C597A2",
          200: "#AA6677",
          300: "#7D4654",
          400: "#4C2A33",
          500: "#1B0F12",
          600: "#140B0E",
          700: "#0E0809",
          800: "#070405",
          900: "#010001",
        },
        alto: {
          DEFAULT: "#D3D3D3",
          50: "#FFFFFF",
          100: "#FCFCFC",
          200: "#F2F2F2",
          300: "#E7E7E7",
          400: "#DDDDDD",
          500: "#D3D3D3",
          600: "#B7B7B7",
          700: "#9B9B9B",
          800: "#7F7F7F",
          900: "#636363",
        },
        "neon-blue": {
          DEFAULT: "#00E0E0",
          50: "#99FFFF",
          100: "#84FFFF",
          200: "#5BFFFF",
          300: "#33FFFF",
          400: "#0AFFFF",
          500: "#00E0E0",
          600: "#00A8A8",
          700: "#007070",
          800: "#003838",
          900: "#003838",
        },
        "neon-green": {
          DEFAULT: "#38F689",
          50: "#E8FEF1",
          100: "#D4FDE6",
          200: "#ADFBCE",
          300: "#86FAB7",
          400: "#5FF8A0",
          500: "#38F689",
          600: "#0BEB6A",
          700: "#08B652",
          800: "#06803A",
          900: "#034A22",
        },
        "neon-pink": {
          DEFAULT: "#FF00FF",
          50: "#FFB8FF",
          100: "#FFA3FF",
          200: "#FF7AFF",
          300: "#FF52FF",
          400: "#FF29FF",
          500: "#FF00FF",
          600: "#C700C7",
          700: "#8F008F",
          800: "#570057",
          900: "#1F001F",
        },
      },
      fontFamily: {
        display: ["var(--lexend-font)"],
        sans: ["var(--atkinson-font)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
