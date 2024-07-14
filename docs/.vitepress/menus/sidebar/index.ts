import challenges from "./menus/challenges"
import lectures from "./menus/lectures"
import datasets from "./menus/resources/datasets"
import activities from "./menus/academics/activities"

import dataFoundations from "./menus/lectures/data-science/data-foundations"

export default {
  "/challenges/": challenges,
  "/lectures/": lectures,

  /** Lectures */
  "/lectures/data-science/data-foundations/": dataFoundations,
  "/resources/datasets/": datasets,
  "/academics/activities/": activities,
}
