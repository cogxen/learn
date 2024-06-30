import sql50 from "./sql-50"
import introToPandas from "./intro-to-pandas"
import arraysAndHashing from "./arrays-and-hashing"

export default {
  text: "Challenges",
  items: [
    {
      text: "LeetCode",
      items: [
        {
          text: "Arrays & Hashing",
          icon: "Brackets",
          items: arraysAndHashing,
          collapsed: false,
          showNumber: true,
        },
        {
          text: "SQL 50",
          icon: "Code",
          items: sql50,
          collapsed: false,
          showNumber: true,
        },
        {
          text: "Intro to Pandas",
          icon: "BarChart2",
          items: introToPandas,
          collapsed: false,
          showNumber: true,
        },
      ],
    },
  ],
}
