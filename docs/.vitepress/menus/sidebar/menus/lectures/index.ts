import dataScienceCareer from "../lectures/data-science/data-science-career"
import nonTechnicalSkills from "../lectures/data-science/non-technical-skills"
import dataScience from "./data-science/data-science"
import machineLearning from "./artificial-intelligence/ai-foundations-machine-learning"
import businessAnalysis from "../lectures/analytics/business-analysis"
import analyzingData from "../lectures/programming/sql/analyzing-data"
import introductionToSql from "../lectures/programming/sql/introduction-to-sql"
import forDataScience from "./programming/python/for-data-science"
import linearAlgebra from "../lectures/math/linear-algebra"
import sdlc from "../lectures/software-development/sdlc"

export default {
  text: "Lectures",
  items: [
    {
      text: "Data Science",
      items: [
        {
          text: "Data Science Career",
          items: dataScienceCareer,
          collapsed: true,
          icon: "BarChart2",
        },
        {
          text: "Non-Technical Skills",
          items: nonTechnicalSkills,
          collapsed: true,
          icon: "WandSparkles",
        },
        {
          text: "Data Science",
          items: dataScience,
          collapsed: true,
          icon: "LineChart",
        },
      ],
    },
    {
      text: "Artificial Intelligence",
      items: [
        {
          text: "Machine Learning",
          items: machineLearning,
          collapsed: true,
          icon: "BrainCircuit",
        },
      ],
    },
    {
      text: "Analytics",
      items: [
        {
          text: "Business Analysis",
          items: businessAnalysis,
          collapsed: true,
          icon: "Briefcase",
        },
      ],
    },
    {
      text: "Programming",
      items: [
        {
          text: "SQL",
          icon: "Code",
          items: [
            {
              text: "Introduction to SQL",
              items: introductionToSql,
              collapsed: true,
            },
            {
              text: "Analyzing Data",
              items: analyzingData,
              collapsed: true,
            },
          ],
        },
        {
          text: "Python",
          icon: "Code",
          items: [
            {
              text: "For Data Science",
              items: forDataScience,
              collapsed: true,
            },
          ],
        },
      ],
    },
    {
      text: "Mathematics",
      items: [
        {
          text: "Linear Algebra",
          items: linearAlgebra,
          collapsed: true,
          icon: "Sigma",
        },
      ],
    },
    {
      text: "Software Development",
      items: [
        {
          text: "SDLC",
          items: sdlc,
          collapsed: true,
          icon: "RefreshCcw",
        },
      ],
    },
  ],
}
