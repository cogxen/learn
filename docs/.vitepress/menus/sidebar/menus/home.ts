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
      },
      {
        text: "Tools",
        link: "/resources/tools",
      },
    ],
  },
  {
    text: "Lectures",
    items: [
      {
        text: "Fundamentals",
        collapsed: false,
        items: [
          {
            text: "Blueprint to a Data Science Career",
            link: "/lectures/blueprint-to-a-data-science-career/introduction",
            badge: { type: "gradient", text: "New", custom: "" },
          },
        ],
      },
      {
        text: "Statistics",
        collapsed: false,
        items: [
          {
            text: "Linear Algebra in Data Science",
            link: "/lectures/linear-algebra-in-data-science/introduction",
            badge: { type: "gradient", text: "New", custom: "" },
          },
        ],
      },
    ],
  },
]
