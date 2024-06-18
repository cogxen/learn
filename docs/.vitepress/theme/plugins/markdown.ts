import type MarkdownIt from "markdown-it"
import kbd from "markdown-it-kbd"
import markdownitMultimdTable from "markdown-it-multimd-table"

export const addMarkdownPlugins = (md: MarkdownIt) => {
  md.use(kbd)
  md.use(markdownitMultimdTable, {
    multiline: true,
    headerless: true,
    multibody: true,
  })
}
