<script setup lang="ts">
import { ref } from "vue"

const showModal = ref(false)

defineProps({
  caption: {
    type: String,
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

<template>
  <div class="w-full h-full overflow-hidden relative cursor-pointer" @click="showModal = true">
    <img
      class="h-full w-full object-cover"
      :class="bordered ? 'border border-dashed border-slate-400 dark:border-none' : ''"
      :src="img_url"
      :alt="caption"
      v-bind="$attrs"
    />
    <div class="absolute top-2 left-2 bg-slate-700 text-white text-[10px] px-2 py-1">
      {{ copyright_owner }}
    </div>
    <div class="flex pt-1 flex-col items-center">
      <div class="text-xs text-slate-400 text-center">{{ caption }}</div>
    </div>
    <teleport to="body">
      <div
        v-if="showModal"
        class="p-8 fixed inset-0 bg-black z-50 bg-opacity-50 flex justify-center items-center"
        @click.self="showModal = false"
      >
        <img
          class="md:max-w-4xl md:max-h-4xl lg:max-w-6xl lg:max-h-6xl object-contain"
          :src="img_url"
          :alt="caption"
        />
      </div>
    </teleport>
  </div>
</template>
