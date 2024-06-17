/** Menus (Modularized) */
import home from "./menus/home"
/** Data Science  */
import blueprintToADataScienceCareer from "./menus/lectures/data-science/blueprint-to-a-data-science-career"
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
