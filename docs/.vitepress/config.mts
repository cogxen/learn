import { defineConfigWithTheme } from "vitepress"
import { transformerTwoslash } from "@shikijs/vitepress-twoslash"
import { addMarkdownPlugins } from "./theme/plugins/markdown"

/** Menus (Modularized) */
import nav from "./menus/nav"
import sidebar from "./menus/sidebar"

export default defineConfigWithTheme({
  title: "Cogxen",
  description:
    "Empowers data enthusiasts and practitioners with the tools and knowledge to unlock the potential of data.",
  lang: "en-US",
  themeConfig: {
    /** Logo */
    logo: "/img/logo/logo.png",
    /** Menus */
    nav: nav,
    sidebar: sidebar,

    /** Social Links */
    socialLinks: [{ icon: "github", link: "https://github.com/cogxen/cogxen" }],

    /** Search */
    search: {
      provider: "local",
    },

    /** Footer */
    footer: {
      message: "Collaborate, Innovate, and Create Together!",
      copyright: "Copyright © 2024 Cogxen",
    },

    /** Outline */
    outlineTitle: "Page contents",
    outline: "deep",

    returnToTopLabel: "Go to Top",
    sidebarMenuLabel: "Menu",
  },

  /** Configurations */
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    image: {
      lazyLoading: true,
    },
    math: true,
    codeTransformers: [transformerTwoslash()],
    config: (md) => {
      addMarkdownPlugins(md as any)
    },
  },
  srcDir: "../pages",
  srcExclude: ["**/node_modules/**", "**/README.md", "**/TODO.md"],
  metaChunk: true,
})
