module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [{ pattern: /.*/ }],
  theme: {
    extend: {
      spacing: {
        84: "21rem",
        118: "27.5rem",
        128: "30rem",
        140: "33rem",
        184: "44rem",
      },
      backgroundImage: {
        home: "url('../public/bg-home.jpg')",
      },
    },
  },
  plugins: [],
};
