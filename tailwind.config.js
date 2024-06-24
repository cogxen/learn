module.exports = {
  content: [
    "./docs/.vitepress/**/*.js",
    "./docs/.vitepress/**/*.vue",
    "./docs/.vitepress/**/*.ts",
    "./docs/**/*.md",
  ],
  darkMode: "class",
  options: {
    safelist: ["html", "body"],
  },
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
