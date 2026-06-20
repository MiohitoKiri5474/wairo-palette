import { describe, it, expect } from 'vitest'
import { generateCSS } from '../src/generate.js'
import { colorList } from '@nippon-color/core'

describe('@nippon-color/css', () => {
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
})
