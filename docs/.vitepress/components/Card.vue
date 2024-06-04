<template>
  <div class="w-full rounded-xl overflow-hidden border border-slate-700 border-dashed">
    <div class="flex flex-row">
      <img class="h-40 w-64 object-cover" :src="img_url" alt="Card image cap" />
      <div class="flex flex-col p-4">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {{ title }}
        </div>
        <div class="text-gray-500 line-clamp-3 text-sm">{{ description }}</div>
        <a :href="redirect_url" target="_blank" class="text-xs mt-auto">{{ trimmedUrl }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
  },
  computed: {
    trimmedUrl() {
      const url = new URL(this.redirect_url)
      let hostname = url.hostname.replace("www.", "")
      let trimmedUrl = hostname + url.pathname
      trimmedUrl = trimmedUrl.endsWith("/") ? trimmedUrl.slice(0, -1) : trimmedUrl
      return trimmedUrl.length > 20 ? trimmedUrl.slice(0, 20) + "..." : trimmedUrl
    },
  },
}
</script>
