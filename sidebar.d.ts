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
  showNumber?: boolean
}

export type ExtendedIcons = typeof Icons & {
  [key: string]: any
}
