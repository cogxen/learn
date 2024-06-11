/** Menus (Modularized) */
import home from "./menus/home"
import blueprintToADataScienceCareer from "./menus/lectures/data-science/blueprint-to-a-data-science-career"
import linearAlgebra from "./menus/lectures/math/linear-algebra"

export default {
  "/": home,
  /** Data Science  */
  "/lectures/data-science/blueprint-to-a-data-science-career/": blueprintToADataScienceCareer,

  /** Math */
  "/lectures/math/linear-algebra/": linearAlgebra,
}
