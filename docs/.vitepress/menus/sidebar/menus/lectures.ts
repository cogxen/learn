import dataScienceCareer from "./lectures/data-science/data-science-career"
import nonTechnicalSkills from "./lectures/data-science/non-technical-skills"
import aiFoundationsMachineLearning from "./lectures/ai/ai-foundations-machine-learning"
import whatIsBusinessAnalysis from "./lectures/analytics/what-is-business-analysis"
import analyzingData from "./lectures/programming/sql/analyzing-data"
import introductionToSql from "./lectures/programming/sql/introduction-to-sql"
import linearAlgebra from "./lectures/math/linear-algebra"

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
      ],
    },
    {
      text: "AI",
      items: [
        {
          text: "Machine Learning",
          items: aiFoundationsMachineLearning,
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
          items: whatIsBusinessAnalysis,
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
              icon: "CodeSquare",
            },
            {
              text: "Analyzing Data",
              items: analyzingData,
              collapsed: true,
              icon: "BetweenHorizontalStart",
            },
          ],
        },
      ],
    },
    {
      text: "Math",
      items: [
        {
          text: "Linear Algebra",
          items: linearAlgebra,
          collapsed: true,
          icon: "Sigma",
        },
      ],
    },
  ],
}
