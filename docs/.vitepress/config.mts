import { defineConfigWithTheme } from "vitepress"

/** Menus (Modularized) */
import nav from "./menus/nav"
import sidebar from "./menus/sidebar"

export default defineConfigWithTheme({
  title: "Cogxen",
  description: "A VitePress Site",
  themeConfig: {
    /** Menus */
    nav: nav,
    sidebar: sidebar,

    /** Social Links */
    socialLinks: [{ icon: "github", link: "https://github.com/cogxen/cogxen" }],

    /** Search */
    search: {
      provider: "local",
    },

    footer: {
      message: "Collaborate, Innovate, and Create Together!",
      copyright: "Copyright © 2024 Cogxen",
    },
  },

  /** Configurations */
  cleanUrls: true,
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
})
