import { writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const clean = hex.replace('#', '')
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  }
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  const rn = r / 255, gn = g / 255, bn = b / 255
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn)
  const l = (max + min) / 2
  let h = 0, s = 0
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6
    else if (max === gn) h = ((bn - rn) / d + 2) / 6
    else h = ((rn - gn) / d + 4) / 6
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function sleep(ms: number): Promise<void> {
  return new Promise(res => setTimeout(res, ms))
}

interface ColorEntry {
  name: string
  romaji: string
  kanji: string
  hex: string
  rgb: { r: number; g: number; b: number }
  hsl: { h: number; s: number; l: number }
}

interface ApiResponse {
  index: string
  cmyk: string
  rgb: string
}

async function scrape(): Promise<void> {
  // Step 1: Fetch the main page HTML to extract all color names
  console.log('Fetching nipponcolors.com...')
  const res = await fetch('https://nipponcolors.com')
  const html = await res.text()

  // Parse <li id="colXXX"><div><a href="...">kanji, ROMAJI</a></div></li>
  const liRegex = /<li id="col\d+"><div><a href="[^"]*">([^<]+)<\/a><\/div><\/li>/g
  const entries: { kanji: string; romaji: string }[] = []

  let match: RegExpExecArray | null
  while ((match = liRegex.exec(html)) !== null) {
    const text = match[1].trim()
    // Format: "kanji, ROMAJI"
    const commaIdx = text.lastIndexOf(', ')
    if (commaIdx === -1) continue
    const kanji = text.slice(0, commaIdx).trim()
    const romaji = text.slice(commaIdx + 2).trim().toLowerCase().replace(/\s+/g, '')
    entries.push({ kanji, romaji })
  }

  console.log(`Found ${entries.length} color entries in HTML`)
  if (entries.length === 0) {
    console.error('No entries found in HTML - page structure may have changed')
    process.exit(1)
  }

  // Step 2: For each color, fetch the color data from the API
  const colors: ColorEntry[] = []

  for (let i = 0; i < entries.length; i++) {
    const { kanji, romaji } = entries[i]
    const romajiUpper = romaji.toUpperCase()

    try {
      const apiRes = await fetch(`https://nipponcolors.com/php/io.php?color=${romajiUpper}`)
      const data = await apiRes.json() as ApiResponse

      if (!data.rgb) {
        console.warn(`  [${i + 1}/${entries.length}] ${romaji}: no rgb data, skipping`)
        continue
      }

      const hex = '#' + data.rgb.toUpperCase()
      const rgb = hexToRgb(hex)
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

      colors.push({
        name: capitalize(romaji),
        romaji,
        kanji,
        hex,
        rgb,
        hsl,
      })

      if ((i + 1) % 10 === 0) {
        console.log(`  [${i + 1}/${entries.length}] ${romaji} -> ${hex}`)
      }

      // Be polite - small delay between requests
      if (i < entries.length - 1) {
        await sleep(50)
      }
    } catch (err) {
      console.warn(`  [${i + 1}/${entries.length}] ${romaji}: fetch error - ${err}`)
    }
  }

  console.log(`\nScraped ${colors.length} colors successfully`)

  if (colors.length < 200) {
    console.error(`Only got ${colors.length} colors - expected > 200. Aborting.`)
    process.exit(1)
  }

  const outDir = resolve(__dirname, '../packages/core/src/data')
  mkdirSync(outDir, { recursive: true })
  writeFileSync(resolve(outDir, 'colors.json'), JSON.stringify(colors, null, 2) + '\n')

  console.log(`Written -> packages/core/src/data/colors.json`)
}

scrape().catch(err => {
  console.error(err)
  process.exit(1)
})
