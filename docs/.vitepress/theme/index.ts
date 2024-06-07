import { h } from "vue"
import type { Theme as ThemeConfig } from "vitepress"
import DefaultTheme from "vitepress/theme"

/** Stylesheets */
import "../assets/css/root.css"
import "../assets/css/tailwind.postcss"

/** Components */
import Card from "../components/Card.vue"
import ImageCard from "../components/ImageCard.vue"
import CustomLayout from "../components/CustomLayout.vue"
import CustomBadge from "../components/CustomBadge.vue"
import VPSidebarItem from "../components/vitepress/VPSidebarItem.vue"
import VPLink from "../components/vitepress/VPLink.vue"

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Card", Card)
    app.component("CustomBadge", CustomBadge)
    app.component("ImageCard", ImageCard)
    app.component("VPSidebarItem", VPSidebarItem)
    app.component("VPLink", VPLink)
  },
  Layout: CustomLayout,
} satisfies ThemeConfig
