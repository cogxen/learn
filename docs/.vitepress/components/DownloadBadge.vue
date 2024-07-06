<script lang="ts" setup>
import { Github, Construction } from "lucide-vue-next"

defineProps({
  githubURL: {
    type: String,
  },
})
</script>

<template>
  <div
    class="py-4 flex flex-row gap-2 flex-warp items-center text-sm text-emerald-600 dark:text-emerald-300"
  >
    <a v-if="githubURL" :href="githubURL" target="_blank" class="flex flex-row gap-2 items-center">
      <Github class="w-4 h-4" />
      <span>Datasets on GitHub</span>
    </a>
    <div
      v-else
      class="flex flex-row gap-2 items-center text-sm text-slate-600 dark:text-slate-300 cursor-not-allowed"
    >
      <Construction class="w-4 h-4" />
      <span>Not yet available</span>
    </div>
  </div>
</template>
