import type { DefaultTheme } from "vitepress/theme"

export interface CustomSidebarItem extends DefaultTheme.SidebarItem {
  icon?: string
  badge?: {
    type: string
    text: string
    custom?: string
  }
}
