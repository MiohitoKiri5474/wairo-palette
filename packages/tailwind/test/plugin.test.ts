import { describe, it, expect } from 'vitest'
import wairoPlugin from '../src/index.js'
import { colorList } from '@wairo-palette/core'

describe('@wairo-palette/tailwind', () => {
  it('exports a plugin object', () => {
    expect(wairoPlugin).toBeDefined()
    expect(typeof wairoPlugin).toBe('object')
  })

  it('has a handler function', () => {
    expect(typeof wairoPlugin.handler).toBe('function')
  })

  it('config.theme.extend.colors.wairo exists', () => {
    const wairo = (wairoPlugin as any).config?.theme?.extend?.colors?.wairo
    expect(wairo).toBeDefined()
    expect(typeof wairo).toBe('object')
  })

  it('wairo palette contains all colors keyed by romaji', () => {
    const wairo = (wairoPlugin as any).config?.theme?.extend?.colors?.wairo as Record<string, string>
    for (const color of colorList) {
      expect(wairo[color.romaji]).toBe(color.hex)
    }
  })

  it('wairo palette length matches colorList', () => {
    const wairo = (wairoPlugin as any).config?.theme?.extend?.colors?.wairo as Record<string, string>
    expect(Object.keys(wairo).length).toBe(colorList.length)
  })
})
