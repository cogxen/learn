<script setup lang="ts">
import { computed } from "vue"
import * as Icons from "lucide-vue-next"
import type { ExtendedIcons } from "../../../../sidebar"

const props = defineProps<{
  icon?: string
  title: string
  details?: string
  linkText?: string
  rel?: string
  target?: string
}>()

const iconComponent = computed(() => {
  const extendedIcons: ExtendedIcons = Icons
  return props.icon ? extendedIcons[props.icon] : null
})
</script>

<template>
  <div class="VPFeature" :rel="rel" :target="target" :no-icon="true">
    <article class="box flex flex-col !items-start gap-2">
      <div class="flex flex-row gap-4 items-center">
        <div class="text-slate-500 rounded-md dark:text-emerald-200" v-if="iconComponent">
          <component :is="iconComponent" class="w-8 h-8" />
        </div>
        <h2 class="text-xl font-semibold font-space-grotesk" v-html="title"></h2>
      </div>

      <p v-if="details" class="details" v-html="details"></p>
    </article>
  </div>
</template>

<style scoped>
.VPFeature {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition:
    border-color 0.25s,
    background-color 0.25s;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
}

.box > :deep(.VPImage) {
  margin-bottom: 20px;
}

.details {
  flex-grow: 1;
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.link-text {
  padding-top: 8px;
}

.link-text-value {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.link-text-icon {
  margin-left: 6px;
}
</style>
