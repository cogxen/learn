/** Menus (Modularized) */
import home from "./menus/home"

/** Data Science  */
import blueprintToADataScienceCareer from "./menus/lectures/data-science/blueprint-to-a-data-science-career"
import nonTechnicalSkills from "./menus/lectures/data-science/non-technical-skills"

/** AI */
import aiFoundationsMachineLearning from "./menus/lectures/ai/ai-foundations-machine-learning"

/** Analytics */
import whatIsBusinessAnalysis from "./menus/lectures/analytics/what-is-business-analysis"

/** Math */
import linearAlgebra from "./menus/lectures/math/linear-algebra"
import analyzingData from "./menus/lectures/programming/sql/analyzing-data"

/** Programming */
import introductionToSql from "./menus/lectures/programming/sql/introduction-to-sql"

/** Challenges */
import challenges from "./menus/challenges"

export default {
  "/": home,

  /** Data Science  */
  "/lectures/data-science/blueprint-to-a-data-science-career/": blueprintToADataScienceCareer,
  "/lectures/data-science/non-technical-skills/": nonTechnicalSkills,

  /** AI */
  "/lectures/ai/ai-foundations-machine-learning/": aiFoundationsMachineLearning,

  /** Analytics */
  "/lectures/analytics/what-is-business-analysis/": whatIsBusinessAnalysis,

  /** Math */
  "/lectures/math/linear-algebra/": linearAlgebra,
  "/lectures/programming/sql/analyzing-data/": analyzingData,

  /** Programming */
  "/lectures/programming/sql/introduction-to-sql": introductionToSql,

  /** Challenges */
  "/challenges/": challenges,
}
