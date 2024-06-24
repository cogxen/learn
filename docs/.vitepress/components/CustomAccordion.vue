<template>
  <div class="mb-4 p-4 rounded-md bg-[#f6f5f2] dark:bg-[#064e3b]/25">
    <div class="flex flex-row w-full items-center justify-between">
      <div class="flex flex-row items-center gap-4">
        <BookCopy class="w-8 h-8" />
        <div class="flex flex-col items-start w-full">
          <span class="font-bold">{{ title }}</span>
          <div
            v-if="submitted_by"
            class="flex flex-row items-center gap-1 text-xs text-slate-500 w-full"
          >
            Submitted by
            <a
              :href="submit_website_url"
              target="_blank"
              class="text-slate-500 dark:text-slate-400 flex flex-row gap-1 items-center"
              >{{ submitted_by }}
            </a>
          </div>
        </div>
      </div>
      <button
        class="hover:bg-slate-200 dark:hover:bg-[#064e3b]/50 p-1 rounded-full"
        @click="isOpen = !isOpen"
      >
        <ChevronDown class="w-5 h-5" v-if="!isOpen" />
        <ChevronUp class="w-5 h-5" v-else />
      </button>
    </div>
    <div v-if="isOpen">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { ChevronDown, ChevronUp, BookCopy } from "lucide-vue-next"

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  submitted_by: {
    type: String,
    required: false,
  },
  submit_website_url: {
    type: String,
    required: false,
  },
  collapsed: {
    type: Boolean,
    required: false,
    default: true,
  },
})

let isOpen = ref(!props.collapsed)
</script>
