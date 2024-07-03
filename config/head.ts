import type { HeadConfig } from "vitepress"
import { metadata } from "./constants"

export const head: HeadConfig[] = [
  [
    "meta",
    {
      property: "og:type",
      content: "website",
    },
  ],
  [
    "meta",
    {
      property: "og:locale",
      content: metadata.locale,
    },
  ],
  [
    "meta",
    {
      property: "og:title",
      content: metadata.title,
    },
  ],
  [
    "meta",
    {
      property: "og:description",
      content: metadata.description,
    },
  ],
  [
    "meta",
    {
      property: "og:site",
      content: metadata.site,
    },
  ],
  [
    "meta",
    {
      property: "og:site_name",
      content: metadata.title,
    },
  ],
  [
    "meta",
    {
      property: "og:image",
      content: metadata.image,
    },
  ],
]
