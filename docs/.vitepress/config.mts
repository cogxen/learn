import path from "path"
import { writeFileSync } from "fs"
import { Feed } from "feed"
import { defineConfigWithTheme, createContentLoader, type SiteConfig } from "vitepress"
import { transformerTwoslash } from "@shikijs/vitepress-twoslash"
import { addMarkdownPlugins } from "./theme/plugins/markdown"

/** Menus (Modularized) */
import nav from "./menus/nav"
import sidebar from "./menus/sidebar"
import { fileURLToPath, URL } from "url"

const hostname: string = "https://cogxen.quest"

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

  buildEnd: async (config: SiteConfig) => {
    const feed = new Feed({
      title: "Cogxen",
      description:
        "Empowers data enthusiasts and practitioners with the tools and knowledge to unlock the potential of data.",
      id: hostname,
      link: hostname,
      language: "en",
      favicon: `${hostname}/img/logo/logo.png`,
      copyright: "Copyright (c) 2024, Cogxen",
    })

    const posts = await createContentLoader("*.md", {
      excerpt: true,
      render: true,
    }).load()

    posts.sort(
      (a, b) => +new Date(b.frontmatter.date as string) - +new Date(a.frontmatter.date as string),
    )

    for (const { url, excerpt, frontmatter, html } of posts) {
      feed.addItem({
        title: frontmatter.title,
        id: `${hostname}${url}`,
        link: `${hostname}${url}`,
        description: excerpt,
        content: html,
        author: [
          {
            name: "Cogxen",
            email: "hello@cogxen.quest",
            link: "https://github.com/cogxen",
          },
        ],
        date: frontmatter.date,
      })
    }

    writeFileSync(path.join(config.outDir, "feed.rss"), feed.rss2())
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPDoc\.vue$/,
          replacement: fileURLToPath(new URL("./components/vitepress/VPDoc.vue", import.meta.url)),
        },
        {
          find: /^.*\/VPSidebar\.vue$/,
          replacement: fileURLToPath(
            new URL("./components/vitepress/VPSidebar.vue", import.meta.url),
          ),
        },
      ],
    },
  },
})
