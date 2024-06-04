<template>
  <span :class="badgeClass">
    {{ text }}
  </span>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue"

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "info",
  },
})

const badgeClass = computed(() => {
  switch (props.type) {
    case "danger":
      return "items-center mx-2 px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800"
    case "warning":
      return "items-center mx-2 px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800"
    case "success":
      return "items-center mx-2 px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800"
    case "new":
      return "items-center mx-2 px-2 py-0.5 rounded text-xs font-medium bg-gradient-to-r from-red-500 to-indigo-600 text-white"
    default:
      return "items-center mx-2 px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
  }
})
</script>
