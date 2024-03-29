/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-gray": "#646464",
        "custom-gray-2":"#969696",
        "custom-dark-gray": "#323232",
        "custom-dark-gray-2": "#0F0D23",
        "custom-orange": "#0284c7",
        "custom-brand": " #0F0D23",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        "custom-product": "12px 32px 12px 12px",
        "custom-plus": "8px 0px 8px 0px",
        "custom-container": "48px 48px 0px 0px",
      },
    },
  },
  plugins: [],
};
