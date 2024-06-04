import type { Theme as ThemeConfig } from "vitepress"
import DefaultTheme from "vitepress/theme"

/** Stylesheets */
import "../assets/css/root.css"
import "../assets/css/tailwind.postcss"

/** Components */
import Card from "../components/Card.vue"

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("Card", Card)
  },
} satisfies ThemeConfig
