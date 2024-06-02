import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import sidebar from "./src/config/sidebar"
import netlify from "@astrojs/netlify"

export default defineConfig({
  integrations: [
    starlight({
      logo: {
        src: "./src/assets/img/logo.png",
        alt: "Lectures Logo",
        replacesTitle: true,
      },
      title: "Lectures",
      social: {
        github: "https://github.com/cogxen/lectures",
      },
      customCss: [
        "@fontsource/space-mono/400.css",
        "@fontsource/space-mono/700.css",
        "./src/styles/custom.css",
      ],
      editLink: {
        baseUrl: "https://github.com/cogxen/lectures/issues/new",
      },
      lastUpdated: true,
      sidebar: sidebar,
    }),
  ],
  output: "server",
  adapter: netlify(),
})
