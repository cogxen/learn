import { defineConfigWithTheme } from "vitepress"

/** Extensions */
import sidebar from "./config/sidebar"
import nav from "./config/nav"

const getYear = new Date().getFullYear()

export default defineConfigWithTheme({
  title: "Lectures",
  description:
    "Explore an extensive repository of publicly accessible personal notebooks on machine learning engineering, data science analytics, artificial intelligence, and more.",
  lang: "en-US",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "Lectures",
    search: {
      provider: "local",
    },

    outlineTitle: "Contents",
    outline: "deep",
    appearance: "force-dark",

    /** (Navbar) Menu */
    nav: nav,

    /** (Navbar) Social Links */
    socialLinks: [{ icon: "github", link: "https://github.com/cogxen/lectures" }],

    /** (Sidebar) Menu */
    sidebar: sidebar,

    /** Footer */
    footer: {
      message: "Collected by Noey Ignacio.",
      copyright: `All rights reserved &copy; ${getYear}`,
    },
    returnToTopLabel: "Go to Top",
    sidebarMenuLabel: "Menu",
    darkModeSwitchLabel: "Dark Mode",
  },

  vite: {
    optimizeDeps: {
      include: [
        "@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas",
      ],
      exclude: ["@nolebase/vitepress-plugin-enhanced-readabilities"],
    },
    ssr: {
      noExternal: ["@nolebase/vitepress-plugin-enhanced-readabilities"],
    },
    server: {
      fs: {
        cachedChecks: false,
      },
    },
  },
})
