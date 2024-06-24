<script setup lang="ts">
import { computed } from "vue"
import { useSidebarControl } from "vitepress/dist/client/theme-default/composables/sidebar.js"
import VPLink from "vitepress/dist/client/theme-default/components/VPLink.vue"
import type { CustomSidebarItem, ExtendedIcons } from "../../../../sidebar"
import * as Icons from "lucide-vue-next"
import { CircleCheck } from "lucide-vue-next"

const props = defineProps<{
  item: CustomSidebarItem
  depth: number
}>()

const iconComponent = computed(() => {
  const extendedIcons: ExtendedIcons = Icons
  return props.item.icon ? extendedIcons[props.item.icon] : null
})

const { collapsed, collapsible, isLink, isActiveLink, hasActiveLink, hasChildren, toggle } =
  useSidebarControl(computed(() => props.item))

const sectionTag = computed(() => (hasChildren.value ? "section" : `div`))

const linkTag = computed(() => (isLink.value ? "a" : "div"))

const textTag = computed(() => {
  return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`
})

const itemRole = computed(() => (isLink.value ? undefined : "button"))

const classes = computed(() => [
  [`level-${props.depth}`],
  { collapsible: collapsible.value },
  { collapsed: collapsed.value },
  { "is-link": isLink.value },
  { "is-active": isActiveLink.value },
  { "has-active": hasActiveLink.value },
])

function onItemInteraction(e: MouseEvent | Event) {
  if ("key" in e && e.key !== "Enter") {
    return
  }
  !props.item.link && toggle()
}

function onCaretClick() {
  props.item.link && toggle()
}
</script>

<template>
  <component :is="sectionTag" class="VPSidebarItem" :class="classes">
    <div
      v-if="item.text"
      class="item flex flex-row items-center gap-2"
      :role="itemRole"
      v-on="item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {}"
      :tabindex="item.items && 0"
    >
      <div
        class="border p-1 border-slate-300 bg-slate-200 text-slate-800 rounded-md dark:bg-emerald-800 dark:text-emerald-200 dark:border-emerald-700"
        v-if="iconComponent"
      >
        <component :is="iconComponent" class="w-4 h-4" />
      </div>

      <div class="indicator" />

      <VPLink
        v-if="item.link"
        :tag="linkTag"
        class="link flex flex-row items-center gap-1"
        :href="item.link"
        :rel="item.rel"
        :target="item.target"
      >
        <span
          v-if="item.difficulty"
          class="rounded-md text-[10px] px-2"
          :class="{
            'text-emerald-500 dark:text-emerald-600': item.difficulty.level === 'Easy',
            'text-yellow-500  dark:text-yellow-600': item.difficulty.level === 'Medium',
            'text-red-500 dark:text-red-600': item.difficulty.level === 'Hard',
          }"
        >
          <CircleCheck class="w-4 h-4" />
        </span>
        <component
          :is="textTag"
          class="text"
          :class="{ 'line-clamp-3': item.difficulty, 'line-clamp-2': !item.difficulty }"
          v-html="item.text"
        />
        <span
          v-if="item.badge"
          class="rounded-md text-[10px] text-slate-800 px-2 bg-slate-200 border border-slate-300 dark:bg-emerald-900 dark:text-emerald-200 dark:border-emerald-700"
          v-text="item.badge.text"
        ></span>
      </VPLink>
      <component v-else :is="textTag" class="text line-clamp-2" v-html="item.text" />

      <div
        v-if="item.collapsed != null && item.items && item.items.length"
        class="caret"
        role="button"
        aria-label="toggle section"
        @click="onCaretClick"
        @keydown.enter="onCaretClick"
        tabindex="0"
      >
        <span class="vpi-chevron-right caret-icon" />
      </div>
    </div>

    <div v-if="item.items && item.items.length" class="items">
      <template v-if="depth < 5">
        <VPSidebarItem v-for="i in item.items" :key="i.text" :item="i" :depth="depth + 1" />
      </template>
    </div>
  </component>
</template>

<style scoped>
.VPSidebarItem.level-0 {
  padding-bottom: 24px;
}

.VPSidebarItem.collapsed.level-0 {
  padding-bottom: 10px;
}

.item {
  position: relative;
  display: flex;
  width: 100%;
}

.VPSidebarItem.collapsible > .item {
  cursor: pointer;
}

.indicator {
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: -17px;
  width: 2px;
  border-radius: 2px;
  transition: background-color 0.25s;
}

.VPSidebarItem.level-2.is-active > .item > .indicator,
.VPSidebarItem.level-3.is-active > .item > .indicator,
.VPSidebarItem.level-4.is-active > .item > .indicator,
.VPSidebarItem.level-5.is-active > .item > .indicator {
  background-color: var(--vp-c-brand-1);
}

.link {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.text {
  flex-grow: 1;
  padding: 4px 0;
  font-size: 14px;
  line-height: 24px;
  transition: color 0.25s;
}

.VPSidebarItem.level-0 .text {
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.VPSidebarItem.level-1 .text,
.VPSidebarItem.level-2 .text,
.VPSidebarItem.level-3 .text,
.VPSidebarItem.level-4 .text,
.VPSidebarItem.level-5 .text {
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.VPSidebarItem.level-0.is-link > .item > .link:hover .text,
.VPSidebarItem.level-1.is-link > .item > .link:hover .text,
.VPSidebarItem.level-2.is-link > .item > .link:hover .text,
.VPSidebarItem.level-3.is-link > .item > .link:hover .text,
.VPSidebarItem.level-4.is-link > .item > .link:hover .text,
.VPSidebarItem.level-5.is-link > .item > .link:hover .text {
  color: var(--vp-c-brand-1);
}

.VPSidebarItem.level-0.has-active > .item > .text,
.VPSidebarItem.level-1.has-active > .item > .text,
.VPSidebarItem.level-2.has-active > .item > .text,
.VPSidebarItem.level-3.has-active > .item > .text,
.VPSidebarItem.level-4.has-active > .item > .text,
.VPSidebarItem.level-5.has-active > .item > .text,
.VPSidebarItem.level-0.has-active > .item > .link > .text,
.VPSidebarItem.level-1.has-active > .item > .link > .text,
.VPSidebarItem.level-2.has-active > .item > .link > .text,
.VPSidebarItem.level-3.has-active > .item > .link > .text,
.VPSidebarItem.level-4.has-active > .item > .link > .text,
.VPSidebarItem.level-5.has-active > .item > .link > .text {
  color: var(--vp-c-text-1);
}

.VPSidebarItem.level-0.is-active > .item .link > .text,
.VPSidebarItem.level-1.is-active > .item .link > .text,
.VPSidebarItem.level-2.is-active > .item .link > .text,
.VPSidebarItem.level-3.is-active > .item .link > .text,
.VPSidebarItem.level-4.is-active > .item .link > .text,
.VPSidebarItem.level-5.is-active > .item .link > .text {
  color: var(--vp-c-brand-1);
}

.caret {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -7px;
  width: 32px;
  height: 32px;
  color: var(--vp-c-text-3);
  cursor: pointer;
  transition: color 0.25s;
  flex-shrink: 0;
}

.item:hover .caret {
  color: var(--vp-c-text-2);
}

.item:hover .caret:hover {
  color: var(--vp-c-text-1);
}

.caret-icon {
  font-size: 18px;
  transform: rotate(90deg);
  transition: transform 0.25s;
}

.VPSidebarItem.collapsed .caret-icon {
  transform: rotate(0);
}

.VPSidebarItem.level-1 .items,
.VPSidebarItem.level-2 .items,
.VPSidebarItem.level-3 .items,
.VPSidebarItem.level-4 .items,
.VPSidebarItem.level-5 .items {
  border-left: 1px solid var(--vp-c-divider);
  padding-left: 16px;
}

.VPSidebarItem.collapsed .items {
  display: none;
}
</style>
