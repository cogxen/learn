import { h } from "vue"
import type { Theme as ThemeConfig } from "vitepress"
import DefaultTheme from "vitepress/theme"

/** Stylesheets */
import "../assets/css/root.css"
import "../assets/css/tailwind.postcss"

/** Components */
import Card from "../components/Card.vue"
import CustomLayout from "../components/CustomLayout.vue"
import CustomBadge from "../components/CustomBadge.vue"

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Card", Card)
    app.component("CustomBadge", CustomBadge)
  },
  Layout: CustomLayout,
} satisfies ThemeConfig
