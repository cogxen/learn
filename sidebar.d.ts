import type { DefaultTheme } from "vitepress/theme"

export interface CustomSidebarItem extends DefaultTheme.SidebarItem {
  icon?: string
  difficulty?: {
    level: string
  }
  badge?: {
    type: string
    text: string
    custom?: string
  }
}

export type ExtendedIcons = typeof Icons & {
  [key: string]: any
}
