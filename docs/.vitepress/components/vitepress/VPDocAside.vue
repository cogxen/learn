<script setup lang="ts">
import { onContentUpdated } from "vitepress"
import { ref, type Ref } from "vue"
import { useData } from "vitepress/dist/client/theme-default/composables/data.js"
import type { Contributor, AssignedTo } from "../../../../types/doc-aside"
import { Link2 } from "lucide-vue-next"

// Components
import VPDocAsideOutline from "./VPDocAsideOutline.vue"
import VPDocAsideCarbonAds from "./VPDocAsideCarbonAds.vue"

const { frontmatter, theme } = useData()
const leetcodeStudyPlan = ref({ name: "", link: "", planImg: "" })
const leetcodeInformation = ref({ number: "", problemName: "", link: "" })
const contributors: Ref<Contributor[]> = ref([])
const assignedTo: Ref<AssignedTo[]> = ref([])
const activityInformation = ref({ name: "", link: "" })
const github = ref({ link: "" })

const updateleetcodeStudyPlan = () => {
  if (frontmatter.value.leetcodeStudyPlan !== undefined) {
    const lcspName = frontmatter.value.leetcodeStudyPlan[0].name
    const lcspLink = frontmatter.value.leetcodeStudyPlan[1].link
    const lcspPlanImg = frontmatter.value.leetcodeStudyPlan[2].planImg
    leetcodeStudyPlan.value = { name: lcspName, link: lcspLink, planImg: lcspPlanImg }
  } else {
    leetcodeStudyPlan.value = { name: "", link: "", planImg: "" }
  }
}

const updateleetcodeInformation = () => {
  if (frontmatter.value.leetcodeInformation !== undefined) {
    const lcNumber = frontmatter.value.leetcodeInformation[0].number
    const lcproblemName = frontmatter.value.leetcodeInformation[1].problemName
    const lcLink = frontmatter.value.leetcodeInformation[2].link
    leetcodeInformation.value = { number: lcNumber, problemName: lcproblemName, link: lcLink }
  } else {
    leetcodeInformation.value = { number: "", problemName: "", link: "" }
  }
}

const updateContributors = () => {
  if (frontmatter.value.contributors !== undefined) {
    const contributorsDetails = frontmatter.value.contributors
      .map((group: any[]) => {
        if (Array.isArray(group) && group[0] === "detail") {
          return {
            name: group[1]?.name ? group[1].name.charAt(0) : "",
            website_url: group[2]?.website_url || "",
          }
        }
        return null
      })
      .filter(
        (contributor: Contributor | null) =>
          contributor && contributor.name && contributor.website_url,
      )

    contributors.value = contributorsDetails
  } else {
    contributors.value = []
  }
}

const updateAssignedTo = () => {
  if (frontmatter.value.assignedTo !== undefined) {
    const assignedToDetails = frontmatter.value.assignedTo.map((detail: any) => {
      return {
        name: detail.name || "",
        year: detail.year || "",
        websiteURL: detail.websiteURL || "",
        projectURL: detail.projectURL || "",
      }
    })

    assignedTo.value = assignedToDetails
  } else {
    assignedTo.value = []
  }
}

const updateActivityInformation = () => {
  if (frontmatter.value.activityInformation !== undefined) {
    const activityName = frontmatter.value.activityInformation[0].name
    const activityLink = frontmatter.value.activityInformation[1].link
    activityInformation.value = { name: activityName, link: activityLink }
  } else {
    activityInformation.value = { name: "", link: "" }
  }
}

function simplifiedLink(link: string): string {
  if (!link) return ""
  const urlParts = link.split("/")
  if (urlParts.length > 5 && urlParts[2] === "github.com" && urlParts[5] === "blob") {
    const pathAfterBranch = urlParts.slice(5).join("/")
    return `${urlParts[2]}/${urlParts[3]}/${urlParts[4]}/${pathAfterBranch}`
  }
  return link
}

const updateGithubLink = () => {
  if (frontmatter.value.github !== undefined) {
    const githubLink = frontmatter.value.github[0].link
    github.value = { link: githubLink }
  } else {
    github.value = { link: "" }
  }
}

onContentUpdated(updateleetcodeStudyPlan)
onContentUpdated(updateleetcodeInformation)
onContentUpdated(updateContributors)
onContentUpdated(updateAssignedTo)
onContentUpdated(updateActivityInformation)
onContentUpdated(updateGithubLink)
</script>

<template>
  <div class="VPDocAside gap-2">
    <slot name="aside-top">
      <!-- LeetCode Study Plan -->
      <a
        v-if="leetcodeStudyPlan.name && leetcodeStudyPlan.link"
        :href="leetcodeStudyPlan.link"
        target="_blank"
        class="px-4 py-2 border border-dashed border-slate-300 dark:border-slate-700"
      >
        <div class="flex flex-row gap-2 justify-between items-center">
          <span
            class="text-sm text-slate-800 font-space-grotesk font-medium line-clamp-1 dark:text-slate-300"
          >
            {{ leetcodeStudyPlan.name }}
          </span>
          <img :src="leetcodeStudyPlan.planImg" alt="LeetCode" class="w-10 h-10" />
        </div>
      </a>

      <!-- LeetCode Information -->
      <a
        v-if="leetcodeInformation.number && leetcodeInformation.link"
        :href="leetcodeInformation.link"
        target="_blank"
        class="px-4 py-2 border border-dashed border-slate-300 dark:border-slate-700"
      >
        <div
          class="flex flex-row gap-2 justify-between items-center text-slate-800 dark:text-slate-300"
        >
          <div class="text-sm font-space-grotesk font-medium line-clamp-2">
            {{ leetcodeInformation.number }}.
            {{ leetcodeInformation.problemName }}
          </div>
        </div>
      </a>

      <!-- Activity Information -->
      <div
        class="flex flex-col gap-2 items-start"
        v-if="activityInformation.name && activityInformation.link"
      >
        <span class="text-xs text-slate-800 dark:text-slate-300">Activity link</span>
        <a
          v-if="activityInformation.name && activityInformation.link"
          :href="activityInformation.link"
          target="_blank"
          class="px-4 py-2 border border-dashed border-slate-300 dark:border-slate-700"
        >
          <div class="flex flex-row gap-2 justify-between items-center">
            <span
              class="text-sm text-slate-800 font-space-grotesk font-medium line-clamp-1 dark:text-slate-300"
            >
              {{ activityInformation.name }}
            </span>
          </div>
        </a>
      </div>

      <!-- GitHub Link -->
      <div class="flex flex-col gap-2 items-start" v-if="github.link">
        <span class="text-xs text-slate-800 dark:text-slate-300">Repository</span>
        <a
          :href="github.link"
          target="_blank"
          class="px-4 py-2 w-full border border-dashed border-slate-300 dark:border-slate-700"
        >
          <div class="flex flex-row gap-2 justify-between items-center">
            <span
              class="text-xs text-slate-800 font-space-grotesk font-medium line-clamp-1 dark:text-slate-300"
            >
              {{ simplifiedLink(github.link) }}
            </span>
          </div>
        </a>
      </div>

      <!-- Contributors -->
      <div class="flex flex-col gap-2 items-start" v-if="contributors.length">
        <span class="text-xs text-slate-800 dark:text-slate-300">Contributors</span>
        <div class="flex flex-row flex-wrap gap-1 items-center">
          <a
            v-for="contributor in contributors"
            :key="contributor.website_url"
            :href="contributor.website_url"
            target="_blank"
            class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden border border-dashed border-slate-300 dark:border-slate-700"
          >
            <span class="font-medium text-slate-600 dark:text-slate-300">{{
              contributor.name
            }}</span>
          </a>
        </div>
      </div>

      <!-- AssignedTo -->
      <div class="flex flex-col gap-2 items-start" v-if="assignedTo.length">
        <span class="text-xs text-slate-800 dark:text-slate-300"> Asssigned to</span>
        <div
          v-for="item in assignedTo"
          :key="item.name"
          class="flex flex-col items-start gap-1 w-full p-2 border border-dashed border-slate-300 dark:border-slate-700"
        >
          <div class="font-medium text-sm text-slate-600 dark:text-slate-300">
            {{ item.name }}
            <span class="text-slate-400 dark:text-slate-500 text-xs">({{ item.year }} Year)</span>
          </div>
          <a
            v-if="item.projectURL"
            :href="item.projectURL"
            target="_blank"
            class="text-xs text-emerald-600 dark:text-emerald-300 flex flex-row gap-1 items-center"
          >
            <Link2 class="w-4 h-4" />
            Project link</a
          >
          <div v-else class="text-xs text-emerald-400 dark:text-emerald-700">
            Project link not available
          </div>
        </div>
      </div>
    </slot>

    <slot name="aside-outline-before" />
    <VPDocAsideOutline />
    <slot name="aside-outline-after" />

    <div class="spacer" />

    <slot name="aside-ads-before" />
    <VPDocAsideCarbonAds v-if="theme.carbonAds" :carbon-ads="theme.carbonAds" />
    <slot name="aside-ads-after" />

    <slot name="aside-bottom" />
  </div>
</template>

<style scoped>
.VPDocAside {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.spacer {
  flex-grow: 1;
}

.VPDocAside :deep(.spacer + .VPDocAsideSponsors),
.VPDocAside :deep(.spacer + .VPDocAsideCarbonAds) {
  margin-top: 24px;
}

.VPDocAside :deep(.VPDocAsideSponsors + .VPDocAsideCarbonAds) {
  margin-top: 16px;
}
</style>
