<script setup lang="ts">
import { onContentUpdated } from "vitepress"
import { ref, type Ref } from "vue"
import { useData } from "vitepress/dist/client/theme-default/composables/data.js"
import VPDocAsideOutline from "./VPDocAsideOutline.vue"
import VPDocAsideCarbonAds from "./VPDocAsideCarbonAds.vue"

interface Contributor {
  name: string
  github_url: string
}

const { frontmatter, theme } = useData()
const leetcodeStudyPlan = ref({ name: "", link: "" })
const contributors: Ref<Contributor[]> = ref([])

const updateLeetcodeInfo = () => {
  if (frontmatter.value.leetcodeStudyPlan !== undefined) {
    const lcspName = frontmatter.value.leetcodeStudyPlan[0].name
    const lcspLink = frontmatter.value.leetcodeStudyPlan[1].link
    leetcodeStudyPlan.value = { name: lcspName, link: lcspLink }
  } else {
    leetcodeStudyPlan.value = { name: "", link: "" }
  }
}

const updateContributors = () => {
  if (frontmatter.value.contributors !== undefined) {
    const contributorsDetails = frontmatter.value.contributors
      .map((group: any[]) => {
        if (Array.isArray(group) && group[0] === "detail") {
          return {
            name: group[1]?.name ? group[1].name.charAt(0) : "",
            github_url: group[2]?.github_url || "",
          }
        }
        return null
      })
      .filter(
        (contributor: Contributor | null) =>
          contributor && contributor.name && contributor.github_url,
      )

    contributors.value = contributorsDetails
  } else {
    contributors.value = []
  }
}

onContentUpdated(updateLeetcodeInfo)
onContentUpdated(updateContributors)
</script>

<template>
  <div class="VPDocAside gap-4">
    <slot name="aside-top">
      <a
        v-if="leetcodeStudyPlan.name && leetcodeStudyPlan.link"
        :href="leetcodeStudyPlan.link"
        target="_blank"
        class="px-4 py-2 border border-dashed rounded-lg border-slate-300 dark:border-slate-700"
      >
        <div class="flex flex-row gap-2 justify-between items-center">
          <span
            class="text-sm text-slate-800 font-space-grotesk font-medium line-clamp-1 dark:text-slate-300"
          >
            {{ leetcodeStudyPlan.name }}
          </span>
          <img src="https://i.imgur.com/cxH56Lt.png" alt="LeetCode" class="w-10 h-10" />
        </div>
      </a>
      <div class="flex flex-col gap-2 items-start" v-if="contributors.length">
        <span class="text-xs text-slate-800 dark:text-slate-300">Contributors</span>
        <div class="flex flex-row gap-1 items-center">
          <a
            v-for="contributor in contributors"
            :key="contributor.github_url"
            :href="contributor.github_url"
            target="_blank"
            class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden border border-dashed rounded-lg border-slate-300 dark:border-slate-700"
          >
            <span class="font-medium text-gray-600 dark:text-gray-300">{{ contributor.name }}</span>
          </a>
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
