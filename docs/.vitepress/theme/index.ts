import type { Theme as ThemeConfig } from "vitepress"
import type { EnhanceAppContext } from "vitepress"
import DefaultTheme from "vitepress/theme"
import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client"
import "@shikijs/vitepress-twoslash/style.css"

/** Stylesheets */
import "../assets/css/root.css"
import "../assets/css/tailwind.postcss"

/** Components */
import Card from "../components/Card.vue"
import ImageCard from "../components/ImageCard.vue"
import MathExampleCard from "../components/MathExampleCard.vue"
import CustomLayout from "../components/CustomLayout.vue"
import CustomBadge from "../components/CustomBadge.vue"
import VPSidebarItem from "../components/vitepress/VPSidebarItem.vue"

export default {
  ...DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component("Card", Card)
    app.component("MathExampleCard", MathExampleCard)
    app.component("CustomBadge", CustomBadge)
    app.component("ImageCard", ImageCard)
    app.component("VPSidebarItem", VPSidebarItem)
    app.use(TwoslashFloatingVue)
  },
  Layout: CustomLayout,
} satisfies ThemeConfig
