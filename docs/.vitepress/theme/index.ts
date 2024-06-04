import { h } from "vue"
import type { Theme as ThemeConfig } from "vitepress"
import DefaultTheme from "vitepress/theme"

/** Stylesheets */
import "../assets/css/root.css"
import "../assets/css/tailwind.postcss"

/** Components */
import Card from "../components/Card.vue"
import CustomLayout from "../components/CustomLayout.vue"

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Card", Card)
  },
  Layout: CustomLayout,
} satisfies ThemeConfig
