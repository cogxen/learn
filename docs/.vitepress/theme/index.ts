import type { Theme as ThemeConfig } from "vitepress"
import type { EnhanceAppContext } from "vitepress"
import DefaultTheme from "vitepress/theme"

/** Stylesheets */
import "../assets/css/root.css"
import "../assets/css/tailwind.postcss"

/** Components */
import Card from "../components/Card.vue"
import ImageCard from "../components/ImageCard.vue"
import MathExampleCard from "../components/MathExampleCard.vue"
import CustomAccordion from "../components/CustomAccordion.vue"
import CustomLayout from "../components/CustomLayout.vue"
import CustomBadge from "../components/CustomBadge.vue"
import VPSidebarItem from "../components/vitepress/VPSidebarItem.vue"
import VPDocAside from "../components/vitepress/VPDocAside.vue"
import VPDocAsideOutline from "../components/vitepress/VPDocAsideOutline.vue"
import VPDoc from "../components/vitepress/VPDoc.vue"

export default {
  ...DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component("Card", Card)
    app.component("MathExampleCard", MathExampleCard)
    app.component("CustomBadge", CustomBadge)
    app.component("ImageCard", ImageCard)
    app.component("VPDoc", VPDoc)
    app.component("VPSidebarItem", VPSidebarItem)
    app.component("VPDocAside", VPDocAside)
    app.component("VPDocAsideOutline", VPDocAsideOutline)
    app.component("CustomLayout", CustomLayout)
    app.component("CustomAccordion", CustomAccordion)
  },
  Layout: CustomLayout,
} satisfies ThemeConfig
