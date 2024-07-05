import sql from "./sql"
import pandas from "./pandas"
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
          collapsed: true,
          showNumber: true,
        },
        {
          text: "SQL",
          icon: "Code",
          items: sql,
          collapsed: true,
          showNumber: true,
        },
        {
          text: "Pandas",
          icon: "BarChart2",
          items: pandas,
          collapsed: true,
          showNumber: true,
        },
      ],
    },
  ],
}
