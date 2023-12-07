module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_01": "#0d0f13", "900_3f": "#0000003f" },
        gray: { 50: "#fdf5f5", 900: "#151a2d" },
        blue_gray: { 800: "#324563" },
        red: { A700_01: "#d00909", A700: "#db0c0c" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
