import { describe, it, expect } from 'vitest'
import nipponPlugin from '../src/index.js'
import { colorList } from '@nippon-color/core'

describe('@nippon-color/tailwind', () => {
  it('exports a plugin object', () => {
    expect(nipponPlugin).toBeDefined()
    expect(typeof nipponPlugin).toBe('object')
  })

  it('has a handler function', () => {
    expect(typeof nipponPlugin.handler).toBe('function')
  })

  it('config.theme.extend.colors.nippon exists', () => {
    const nippon = (nipponPlugin as any).config?.theme?.extend?.colors?.nippon
    expect(nippon).toBeDefined()
    expect(typeof nippon).toBe('object')
  })

  it('nippon palette contains all colors keyed by romaji', () => {
    const nippon = (nipponPlugin as any).config?.theme?.extend?.colors?.nippon as Record<string, string>
    for (const color of colorList) {
      expect(nippon[color.romaji]).toBe(color.hex)
    }
  })

  it('nippon palette length matches colorList', () => {
    const nippon = (nipponPlugin as any).config?.theme?.extend?.colors?.nippon as Record<string, string>
    expect(Object.keys(nippon).length).toBe(colorList.length)
  })
})
