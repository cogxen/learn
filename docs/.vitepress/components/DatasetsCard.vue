<script setup lang="ts">
import { computed } from "vue"
import { Link2 } from "lucide-vue-next"
import datasetsData from "../../../data/datasets.json"

const sortedDatasets = computed(() => {
  return datasetsData.datasets.sort((a, b) => {
    const nameA = a.student_name || ""
    const nameB = b.student_name || ""
    if (nameA && !nameB) return -1
    if (!nameA && nameB) return 1
    return nameA.localeCompare(nameB)
  })
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 auto-rows-fr">
    <div v-for="(dataset, index) in sortedDatasets" :key="dataset.title" class="relative flex">
      <div
        class="flex flex-col p-4 border border-slate-400 dark:border-slate-700 border-dashed w-full"
      >
        <div
          class="px-8 absolute w-full text-end text-5xl -z-10 text-slate-300/50 dark:text-slate-800/50 font-space-grotesk font-extrabold"
        >
          {{ index + 1 }}
        </div>
        <div class="flex flex-col gap-2 items-start">
          <div class="uppercase tracking-wide text-sm text-emerald-500 font-semibold">
            {{ dataset.title }}
          </div>
          <div class="mb-4 text-slate-500 line-clamp-2 text-xs">{{ dataset.description }}</div>
        </div>
        <div class="mt-auto flex flex-col gap-1">
          <div class="text-xs text-emerald-500">{{ dataset.student_name }}</div>
          <div class="flex flex-row items-center gap-2">
            <a
              v-if="dataset.github_url"
              :href="dataset.github_url"
              target="_blank"
              class="text-xs flex flex-row gap-2 items-center"
            >
              <Link2 class="w-4 h-4" />
              <span>Datasets Link</span>
            </a>
            <div v-if="!dataset.github_url" class="text-xs text-slate-500">Not available yet</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
