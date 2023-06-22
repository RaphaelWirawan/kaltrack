/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        sans: ["var(--font-inter)"],
        roboto: ["var(--font-roboto)"],
        comforta: ["var(--font-comfortaa)"],
      },
      colors: {
        Navy: "#201E45",
        Gray: "#404267",
        OffWhite: "#E4E4EF",
        Peach: "#F07B7B",
        Teal: "#355C7D",
        White: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
