import dataScience from "./data-science"
import analytics from "./analytics"
import math from "./math"
import programming from "./programming"
import ai from "./ai"
import datasets from "./datasets"

export default [
  {
    text: "Welcome",
    link: "/",
    icon: "Home",
  },
  {
    text: "Resources",
    items: [
      {
        text: "Datasets",
        items: datasets,
        collapsed: false,
        icon: "DatabaseZap",
      },
      {
        text: "Tools",
        link: "/resources/tools",
        icon: "Hammer",
      },
    ],
  },
  {
    text: "Lectures",
    items: [dataScience, ai, analytics, math, programming],
  },
]
