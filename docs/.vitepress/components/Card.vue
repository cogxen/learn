<script setup lang="ts">
import { Link2 } from "lucide-vue-next"
import { computed } from "vue"

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  redirect_url: {
    type: String,
    required: true,
  },
  img_url: {
    type: String,
    required: true,
    default: "https://via.placeholder.com/1200",
  },
})

const trimmedUrl = computed(() => {
  const url = new URL(props.redirect_url)
  let hostname = url.hostname.replace("www.", "")
  let trimmedUrl = hostname + url.pathname
  trimmedUrl = trimmedUrl.endsWith("/") ? trimmedUrl.slice(0, -1) : trimmedUrl
  return trimmedUrl.length > 20 ? trimmedUrl.slice(0, 20) + "..." : trimmedUrl
})
</script>

<template>
  <div class="w-full overflow-hidden mb-2">
    <div class="flex flex-col p-4 h-36 border border-slate-400 dark:border-slate-700 border-dashed">
      <div class="flex flex-col gap-2 items-start">
        <div class="uppercase tracking-wide text-sm text-emerald-500 font-semibold">
          {{ title }}
        </div>
        <div class="text-slate-500 line-clamp-2 text-sm">{{ description }}</div>
      </div>
      <a
        :href="redirect_url"
        target="_blank"
        class="text-xs flex flex-row gap-2 items-center mt-auto"
      >
        <Link2 class="w-4 h-4" />
        <span>{{ trimmedUrl }}</span>
      </a>
    </div>
  </div>
</template>
