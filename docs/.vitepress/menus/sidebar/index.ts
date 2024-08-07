import challenges from "./menus/challenges"
import lectures from "./menus/lectures"

import activities from "./menus/academics/activities"

/** Lectures */
import foundations from "./menus/lectures/data-science/foundations"
import dataScienceCareer from "./menus/lectures/data-science/data-science-career"
import nonTechnicalSkills from "./menus/lectures/data-science/non-technical-skills"
import dataFoundations from "./menus/lectures/data-science/data-foundations"
import machineLearning from "./menus/lectures/artificial-intelligence/machine-learning"
import businessAnalysis from "./menus/lectures/analytics/business-analysis"
import introductionToSql from "./menus/lectures/programming/sql/introduction-to-sql"
import analyzingData from "./menus/lectures/programming/sql/analyzing-data"
import forDataScience from "./menus/lectures/programming/python/for-data-science"
import sdlc from "./menus/lectures/software-development/sdlc"
import machineLearningGuide from "./menus/lectures/algorithm/machine-learning-guide"

/** Resources */
import datasets from "./menus/resources/datasets"
import tools from "./menus/resources/tools"
import blogs from "./menus/resources/blogs"
import whatIsCrispDm from "./menus/resources/blogs/what-is-crisp-dm"

export default {
  /** Challenges */
  "/challenges/": challenges,

  /** Lectures */
  "/lectures/": lectures,
  "/lectures/data-science/foundations/": foundations,
  "/lectures/data-science/data-science-career/": dataScienceCareer,
  "/lectures/data-science/non-technical-skills/": nonTechnicalSkills,
  "/lectures/data-science/data-foundations/": dataFoundations,
  "/lectures/artificial-intelligence/machine-learning/": machineLearning,
  "/lectures/analytics/business-analysis/": businessAnalysis,
  "/lectures/programming/sql/introduction-to-sql/": introductionToSql,
  "/lectures/programming/sql/analyzing-data/": analyzingData,
  "/lectures/programming/python/for-data-science/": forDataScience,
  "/lectures/software-development/sdlc/": sdlc,
  "/lectures/algorithm/machine-learning-guide/": machineLearningGuide,

  /** Resources */
  "/resources/datasets/": datasets,
  "/resources/tools/": tools,
  "/resources/blogs/": blogs,
  "/resources/blogs/what-is-crisp-dm/": whatIsCrispDm,

  /** Academics */
  "/academics/activities/": activities,
}
