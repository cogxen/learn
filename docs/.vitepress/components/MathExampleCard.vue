<template>
  <div class="w-full h-full overflow-hidden relative">
    <div
      class="p-6 text-center w-full h-fit border border-dashed border-slate-400 dark:border-slate-600"
    >
      <slot />
    </div>
    <div class="absolute top-2 left-2 bg-slate-700 text-white text-[10px] px-2 py-1">
      {{ copyright_owner }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  copyright_owner: {
    type: String,
    default: "cogxen.quest",
  },
})
</script>
