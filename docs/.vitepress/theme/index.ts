import { h } from "vue"
import type { Theme as ThemeConfig } from "vitepress"
import DefaultTheme from "vitepress/theme"

/** Plugins */
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client"
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client"
import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css"

/** Sylesheet */
import "./style.css"

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "nav-bar-content-after": () => h(NolebaseEnhancedReadabilitiesMenu),
      "nav-screen-content-after": () => h(NolebaseEnhancedReadabilitiesScreenMenu),
    })
  },
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
  },
} satisfies ThemeConfig
