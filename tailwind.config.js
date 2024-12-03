/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinslow: {
          "0%, 100%": { rotate: "0deg" },
          "50%": { rotate: "180deg" },
        },
        dash: {
          "0%": {
            "stroke-dashoffset": "656",
            "stroke-dasharray": "10 10",
          },
          "100%": {
            "stroke-dashoffset": "0",
            "stroke-dasharray": "10 10",
          },
        },
      },
      animation: {
        spinslow: "spin 4s infinite",
        dash: "dash 10s linear infinite",
        dashin: "dash 2s ease-out",
      },
      colors: {
        base: {
          DEFAULT: "#767676",
          50: "#FFFFFF",
          100: "#FAFAFA",
          150: "#eeeeee",
          200: "#D9D9D9",
          300: "#B8B8B8",
          400: "#979797",
          500: "#767676",
          600: "#5C5C5C",
          700: "#434343",
          800: "#292929",
          850: "#181818",
          900: "#101010",
          950: "#030303",
        },
        base: {
          50: "#FBFAF9",
          100: "#F4F2F0",
          150: "#EDE9E6",
          200: "#DDD6D0",
          300: "#C5BAAF",
          400: "#AE9E8F",
          500: "#96816E",
          600: "#766556",
          700: "#564A3E",
          750: "#4A3F33",
          800: "#352E27",
          850: "#2B251F",
          900: "#15120F",
          950: "#040403",
        },
        error: "#dc2626",
        success: "#16a34a",
        info: "#1d4ed8",
        special: "#7e22ce",
      },
      fontFamily: {
        overused: ["Overused Grotesk", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
