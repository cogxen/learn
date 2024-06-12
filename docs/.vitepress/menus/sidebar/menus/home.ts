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
        text: "Data Science",
        icon: "Box",
        collapsed: false,
        items: [
          {
            text: "Blueprint to a Data Science Career",
            link: "/lectures/data-science/blueprint-to-a-data-science-career/introduction",
          },
        ],
      },
      {
        text: "Math",
        collapsed: false,
        icon: "Sigma",
        items: [
          {
            text: "Linear Algebra",
            link: "/lectures/math/linear-algebra/introduction",
            badge: { text: "Working" },
          },
        ],
      },
      {
        text: "Programming",
        collapsed: false,
        icon: "Code",
        items: [
          {
            text: "SQL",
            collapsed: false,
            items: [
              {
                text: "Introduction",
                link: "/lectures/programming/sql/introduction-to-sql/introduction",
                badge: { text: "New" },
              },
              {
                text: "Analyzing Data",
                link: "/lectures/programming/sql/analyzing-data/introduction",
                badge: { text: "Working" },
              },
            ],
          },
        ],
      },
    ],
  },
]
