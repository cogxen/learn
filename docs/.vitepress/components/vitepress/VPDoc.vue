<script setup lang="ts">
import { useRoute, onContentUpdated } from "vitepress"
import { ref, computed } from "vue"
import { useData } from "vitepress/dist/client/theme-default/composables/data.js"
import { useSidebar } from "vitepress/dist/client/theme-default/composables/sidebar.js"
import VPDocAside from "./VPDocAside.vue"
import VPDocFooter from "./VPFooter.vue"

const { frontmatter, theme } = useData()

const route = useRoute()
const { hasSidebar, hasAside, leftAside } = useSidebar()

const pageName = computed(() => route.path.replace(/[./]+/g, "_").replace(/_html$/, ""))

const statusPage = ref({ status: "", color: "", textColor: "", text: "" })
const leetcodeInformation = ref({ difficulty: "", color: "", textColor: "", text: "" })

const updateStatusPage = () => {
  if (frontmatter.value.status) {
    const status = frontmatter.value.status
    let color = ""
    let textColor = ""
    let text = ""
    if (status === "wip") {
      color = "bg-emerald-500 dark:bg-emerald-300"
      textColor = "text-emerald-500 dark:text-emerald-300"
      text = "Work in progress"
    } else if (status === "updating") {
      color = "bg-yellow-500"
      textColor = "text-yellow-500"
      text = "Updating"
    } else {
      color = "bg-slate-500 dark:bg-slate-300"
      textColor = "text-slate-500 dark:text-slate-300"
    }
    statusPage.value = { status, color, textColor, text }
  } else {
    statusPage.value = { status: "", color: "", textColor: "", text: "" }
  }
}

const updateLeetcodeInformation = () => {
  if (frontmatter.value.leetcodeInformation) {
    const difficulty = frontmatter.value.leetcodeInformation[3].difficulty
    let color = ""
    let textColor = ""
    let text = difficulty
    switch (difficulty) {
      case "Easy":
        color = "bg-emerald-500 dark:bg-emerald-300"
        textColor = "text-emerald-500 dark:text-emerald-300"
        break
      case "Medium":
        color = "bg-yellow-500"
        textColor = "text-yellow-500"
        break
      case "Hard":
        color = "bg-red-500 dark:bg-red-500"
        textColor = "text-red-500 dark:text-red-500"
        break
      default:
        color = "bg-slate-500 dark:bg-slate-300"
        textColor = "text-slate-500 dark:text-slate-300"
    }
    leetcodeInformation.value = { difficulty, color, text, textColor }
  } else {
    leetcodeInformation.value = { difficulty: "", color: "", textColor: "", text: "" }
  }
}

onContentUpdated(updateStatusPage)
onContentUpdated(updateLeetcodeInformation)
</script>

<template>
  <div class="VPDoc" :class="{ 'has-sidebar': hasSidebar, 'has-aside': hasAside }">
    <slot name="doc-top" />
    <div class="container">
      <div v-if="hasAside" class="aside" :class="{ 'left-aside': leftAside }">
        <div class="aside-curtain" />
        <div class="aside-container">
          <div class="aside-content gap-2">
            <VPDocAside>
              <template #aside-top><slot name="aside-top" /></template>
              <template #aside-bottom><slot name="aside-bottom" /></template>
              <template #aside-outline-before><slot name="aside-outline-before" /></template>
              <template #aside-outline-after><slot name="aside-outline-after" /></template>
              <template #aside-ads-before><slot name="aside-ads-before" /></template>
              <template #aside-ads-after><slot name="aside-ads-after" /></template>
            </VPDocAside>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="content-container">
          <slot name="doc-before" />
          <main class="main">
            <!-- Page's Status -->
            <div v-if="statusPage.status !== ''" class="pb-4 flex flex-row items-center gap-2">
              <span class="relative flex h-2 w-2">
                <span
                  :class="[
                    'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                    statusPage.color,
                  ]"
                ></span>
                <span
                  :class="['relative inline-flex rounded-full h-2 w-2', statusPage.color]"
                ></span>
              </span>
              <span :class="[statusPage.textColor, 'text-sm font-space-grotesk']">
                {{ statusPage.text }}
              </span>
            </div>

            <!-- LeetCode Difficulty Status -->
            <div
              v-if="leetcodeInformation.difficulty"
              class="pb-4 flex flex-row items-center gap-2"
            >
              <span class="relative flex h-2 w-2">
                <span
                  :class="[
                    'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                    leetcodeInformation.color,
                  ]"
                ></span>
                <span
                  :class="['relative inline-flex rounded-full h-2 w-2', leetcodeInformation.color]"
                ></span>
              </span>
              <span :class="[leetcodeInformation.textColor, 'text-sm font-space-grotesk']">
                {{ leetcodeInformation.text }}
              </span>
            </div>

            <!-- Page's Content -->
            <Content
              class="vp-doc"
              :class="[pageName, theme.externalLinkIcon && 'external-link-icon-enabled']"
            />
          </main>
          <VPDocFooter>
            <template #doc-footer-before><slot name="doc-footer-before" /></template>
          </VPDocFooter>
          <slot name="doc-after" />
        </div>
      </div>
    </div>
    <slot name="doc-bottom" />
  </div>
</template>

<style scoped>
.VPDoc {
  padding: 32px 24px 96px;
  width: 100%;
}

@media (min-width: 768px) {
  .VPDoc {
    padding: 48px 32px 128px;
  }
}

@media (min-width: 960px) {
  .VPDoc {
    padding: 48px 32px 0;
  }

  .VPDoc:not(.has-sidebar) .container {
    display: flex;
    justify-content: center;
    max-width: 992px;
  }

  .VPDoc:not(.has-sidebar) .content {
    max-width: 752px;
  }
}

@media (min-width: 1280px) {
  .VPDoc .container {
    display: flex;
    justify-content: center;
  }

  .VPDoc .aside {
    display: block;
  }
}

@media (min-width: 1440px) {
  .VPDoc:not(.has-sidebar) .content {
    max-width: 784px;
  }

  .VPDoc:not(.has-sidebar) .container {
    max-width: 1104px;
  }
}

.container {
  margin: 0 auto;
  width: 100%;
}

.aside {
  position: relative;
  display: none;
  order: 2;
  flex-grow: 1;
  padding-left: 32px;
  width: 100%;
  max-width: 256px;
}

.left-aside {
  order: 1;
  padding-left: unset;
  padding-right: 32px;
}

.aside-container {
  position: fixed;
  top: 0;
  padding-top: calc(
    var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + var(--vp-doc-top-height, 0px) + 48px
  );
  width: 224px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
}

.aside-container::-webkit-scrollbar {
  display: none;
}

.aside-curtain {
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 224px;
  height: 32px;
  background: linear-gradient(transparent, var(--vp-c-bg) 70%);
}

.aside-content {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - (var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px));
  padding-bottom: 32px;
}

.content {
  position: relative;
  margin: 0 auto;
  width: 100%;
}

@media (min-width: 960px) {
  .content {
    padding: 0 32px 128px;
  }
}

@media (min-width: 1280px) {
  .content {
    order: 1;
    margin: 0;
    min-width: 640px;
  }
}

.content-container {
  margin: 0 auto;
}

.VPDoc.has-aside .content-container {
  max-width: 688px;
}
</style>
