<template>
  <div class="w-full overflow-hidden">
    <div class="flex flex-row">
      <img
        class="h-40 w-40 md:w-48 lg:w-64 object-cover rounded-s-lg"
        :src="img_url"
        :alt="title"
      />
      <div
        class="flex flex-col p-4 rounded-e-lg border-t border-r border-b border-slate-400 dark:border-slate-700 border-dashed"
      >
        <div class="flex flex-row gap-2 items-center">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {{ title }}
          </div>
          <BadgeCheck class="w-4 h-4 text-emerald-500" />
        </div>
        <div class="text-gray-500 line-clamp-3 text-sm">{{ description }}</div>
        <div class="text-xs flex flex-row gap-2 items-center mt-auto">
          <Link2 class="w-4 h-4" />
          <a :href="redirect_url" target="_blank">{{ trimmedUrl }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BadgeCheck, Link2 } from "lucide-vue-next"
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
