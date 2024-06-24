import sql50 from "./sql-50"
import introToPandas from "./intro-to-pandas"

export default {
  text: "Challenges",
  items: [
    {
      text: "LeetCode",
      items: [
        {
          text: "SQL 50",
          icon: "Code",
          items: sql50,
          collapsed: false,
        },
        {
          text: "Intro to Pandas",
          icon: "BarChart2",
          items: introToPandas,
          collapsed: false,
        },
      ],
    },
  ],
}
