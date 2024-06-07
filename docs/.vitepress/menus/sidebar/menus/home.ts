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
    items: [
      {
        text: "Fundamentals",
        icon: "Box",
        collapsed: false,
        items: [
          {
            text: "Blueprint to a Data Science Career",
            link: "/lectures/blueprint-to-a-data-science-career/introduction",
            badge: { type: "gradient", text: "New", custom: "" },
          },
          {
            text: "Data and Programming Foundations",
            link: "/lectures/data-and-programming-foundations/",
            badge: { type: "success", text: "Soon", custom: "" },
          },
          {
            text: "Data Science Foundation",
            link: "/lectures/data-science-foundation/",
            badge: { type: "success", text: "Soon", custom: "" },
          },
          {
            text: "AI Foundations: Machine Learning",
            link: "/lectures/ai-foundations-machine-learning/",
            badge: { type: "success", text: "Soon", custom: "" },
          },
        ],
      },
      {
        text: "Statistics",
        collapsed: false,
        icon: "BarChart2",
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
