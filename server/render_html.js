import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { replace } from 'lodash-es'

const rawIndexHTML = await readFile(resolve(import.meta.dirname, '..', 'web/index.html'), 'utf-8')
const rawStyle = await readFile(resolve(import.meta.dirname, '..', 'dist/index.css'), 'utf-8')

const template = replace(rawIndexHTML, '<!-- style -->', `<style>${rawStyle}</style>`)

export function renderToHTML(html) {
  return replace(template, '<!-- html -->', html)
}
