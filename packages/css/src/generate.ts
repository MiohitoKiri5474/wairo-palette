import { colorList } from '@wairo-palette/core'
import { writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { generateThemeCSS } from './theme.js'

export { generateThemeCSS } from './theme.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

export function generateCSS(): string {
  const lines: string[] = [generateThemeCSS()]

  lines.push(':root {')
  for (const color of colorList) {
    lines.push(`  --color-${color.romaji}: ${color.hex};`)
  }
  lines.push('}', '')

  for (const { romaji, hex } of colorList) {
    lines.push(`.text-${romaji} { color: ${hex}; }`)
    lines.push(`.bg-${romaji} { background-color: ${hex}; }`)
    lines.push(`.border-${romaji} { border-color: ${hex}; }`)
    lines.push(`.fill-${romaji} { fill: ${hex}; }`)
    lines.push(`.stroke-${romaji} { stroke: ${hex}; }`)
  }

  return lines.join('\n') + '\n'
}

// Write to dist/ when run directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const outDir = resolve(__dirname, '../dist')
  mkdirSync(outDir, { recursive: true })
  const css = generateCSS()
  writeFileSync(resolve(outDir, 'wairo-palette.css'), css)
  console.log(`Generated ${css.split('\n').length} lines → dist/wairo-palette.css`)
}
