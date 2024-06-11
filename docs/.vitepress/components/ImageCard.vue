<template>
  <div class="w-full h-full overflow-hidden relative">
    <img
      class="h-full w-full object-cover rounded-xl"
      :class="bordered ? 'border border-dashed border-slate-400 dark:border-none' : ''"
      :src="img_url"
      :alt="caption"
      v-bind="$attrs"
    />
    <div class="absolute top-2 left-2 bg-slate-700 text-white text-[10px] px-2 py-1 rounded-lg">
      {{ copyright_owner }}
    </div>
  </div>
  <div class="flex pt-1 flex-col items-center">
    <div class="text-sm text-slate-400">{{ caption }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  caption: {
    type: String,
    default: "Cogxen Images",
  },
  copyright_owner: {
    type: String,
    default: "cogxen.quest",
  },
  img_url: {
    type: String,
    default: "https://via.placeholder.com/1200",
  },
  bordered: {
    type: Boolean,
    default: false,
  },
})
</script>
