import { colorList } from '../packages/core/src/index.js'
import { writeFileSync } from 'fs'

const rows = colorList
  .map(
    (c) =>
      `| <span style="display:inline-block;width:20px;height:20px;background:${c.hex};border-radius:3px;vertical-align:middle;"></span> | \`${c.romaji}\` | ${c.kanji} | ${c.name} | \`${c.hex}\` | rgb(${c.rgb.r}, ${c.rgb.g}, ${c.rgb.b}) |`
  )
  .join('\n')

const md = `# Color Reference

All ${colorList.length} traditional Japanese colors from [nipponcolors.com](https://nipponcolors.com/).

| Swatch | Romaji | Kanji | Name | Hex | RGB |
|--------|--------|-------|------|-----|-----|
${rows}
`

writeFileSync('docs/colors.md', md)
console.log(`Generated docs/colors.md with ${colorList.length} colors`)
