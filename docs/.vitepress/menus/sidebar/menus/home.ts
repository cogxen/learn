import dataScience from "./data-science"
import analytics from "./analytics"
import math from "./math"
import programming from "./programming"
import ai from "./ai"

export default [
  {
    text: "Welcome",
    link: "/",
    icon: "Home",
  },
  {
    text: "About Us",
    link: "/about-us",
    icon: "UserSearch",
  },
  {
    text: "How to Contribute?",
    link: "/how-to-contribute",
    icon: "GitPullRequestCreateArrow",
  },
  {
    text: "Resources",
    items: [
      {
        text: "Datasets",
        link: "/resources/datasets",
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
