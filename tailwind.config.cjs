/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "2rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "4xl": [
        "2.5rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1.1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
    },
    extend: {
      colors: {
        black: "#121212",
        accent: {
          50: "#EBEDFF",
          100: "#D6DAFF",
          200: "#A8B1FF",
          300: "#808CFF",
          400: "#5263FF",
          500: "#283CFF",
          600: "#0017EB",
          700: "#0012B3",
          800: "#000C75",
          900: "#00063D",
        },
        primary: "var(--aw-color-primary)",
        secondary: "var(--aw-color-secondary)",
        accent: "var(--aw-color-accent)",
        default: "var(--aw-color-text-default)",
        muted: "var(--aw-color-text-muted)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        text: {
          "0%": {
            "background-size": "200% 200%",
            "background-position": "0",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "100%",
          },
        },
        wiggle: {
          "0%": { transform: "rotate(0)" },
          "25%": { transform: "rotate(-25deg)" },
          "75%": { transform: "rotate(25deg)" },
          "100%": { transform: "rotate(0)" },
        },
      },
      animation: {
        text: "text 3s ease infinite",
        wiggle: "wiggle 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
