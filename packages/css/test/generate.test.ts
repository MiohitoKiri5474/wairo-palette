import { describe, it, expect } from 'vitest'
import { generateCSS, generateThemeCSS } from '../src/generate.js'
import { DAY_THEME, NIGHT_THEME } from '../src/theme.js'
import { colorList } from '@wairo-palette/core'

describe('@wairo-palette/css', () => {
  it('generates :root with CSS custom properties', () => {
    const css = generateCSS()
    expect(css).toContain(':root {')
    expect(css).toMatch(/--color-\w+:\s*#[0-9A-Fa-f]{6}/)
  })

  it('generates .text-* utility classes', () => {
    const css = generateCSS()
    expect(css).toMatch(/\.text-\w+\s*\{\s*color:/)
  })

  it('generates .bg-* utility classes', () => {
    const css = generateCSS()
    expect(css).toMatch(/\.bg-\w+\s*\{\s*background-color:/)
  })

  it('generates .border-* utility classes', () => {
    const css = generateCSS()
    expect(css).toMatch(/\.border-\w+\s*\{\s*border-color:/)
  })

  it('generates .fill-* utility classes', () => {
    const css = generateCSS()
    expect(css).toMatch(/\.fill-\w+\s*\{\s*fill:/)
  })

  it('generates .stroke-* utility classes', () => {
    const css = generateCSS()
    expect(css).toMatch(/\.stroke-\w+\s*\{\s*stroke:/)
  })

  it('covers every color in colorList', () => {
    const css = generateCSS()
    for (const color of colorList) {
      expect(css).toContain(`--color-${color.romaji}: ${color.hex}`)
      expect(css).toContain(`.text-${color.romaji}`)
      expect(css).toContain(`.bg-${color.romaji}`)
      expect(css).toContain(`.border-${color.romaji}`)
      expect(css).toContain(`.fill-${color.romaji}`)
      expect(css).toContain(`.stroke-${color.romaji}`)
    }
  })

  it('includes day/night theme at the top', () => {
    const css = generateCSS()
    const themeIdx = css.indexOf('--wairo-bg')
    const rootIdx = css.indexOf('--color-')
    expect(themeIdx).toBeGreaterThanOrEqual(0)
    expect(themeIdx).toBeLessThan(rootIdx)
  })
})

describe('generateThemeCSS', () => {
  it('emits day theme tokens in :root', () => {
    const css = generateThemeCSS()
    for (const [prop, val] of Object.entries(DAY_THEME)) {
      expect(css).toContain(`${prop}: ${val}`)
    }
  })

  it('emits night theme tokens inside prefers-color-scheme: dark', () => {
    const css = generateThemeCSS()
    expect(css).toContain('@media (prefers-color-scheme: dark)')
    for (const [prop, val] of Object.entries(NIGHT_THEME)) {
      expect(css).toContain(`${prop}: ${val}`)
    }
  })

  it('night bg is darker than day bg', () => {
    // sumi (#1C1C1C) lightness:11 < shironeri (#FCFAF2) lightness:97
    const dayBg = parseInt(DAY_THEME['--wairo-bg'].slice(1), 16)
    const nightBg = parseInt(NIGHT_THEME['--wairo-bg'].slice(1), 16)
    expect(nightBg).toBeLessThan(dayBg)
  })
})
