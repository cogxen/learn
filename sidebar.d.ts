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
  isDataset?: boolean
  isAssigned?: boolean
}

export type ExtendedIcons = typeof Icons & {
  [key: string]: any
}
