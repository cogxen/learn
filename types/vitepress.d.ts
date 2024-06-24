declare module "vitepress/dist/client/theme-default/composables/data.js" {
  export function useData(): any
}

declare module "vitepress/dist/client/theme-default/composables/outline.js" {
  export function useOutline(): any
  export function getHeaders(): any
  export function resolveTitle(): any
  export function useActiveAnchor(): any
  export type MenuItem = any
}

declare module "vitepress/dist/client/theme-default/composables/sidebar.js" {
  export function useSidebarControl(): any
  export function useSidebar(): any
}
