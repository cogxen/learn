/** Menus (Modularized) */
import home from "./menus/home"
import blueprintToADataScienceCareer from "./menus/lectures/blueprint-to-a-data-science-career"
import linearAlgebraInDataSciece from "./menus/lectures/linear-algebra-in-data-sciece"

export default {
  "/": home,
  "/lectures/blueprint-to-a-data-science-career/": blueprintToADataScienceCareer,
  "/lectures/linear-algebra-in-data-science/": linearAlgebraInDataSciece,
}
