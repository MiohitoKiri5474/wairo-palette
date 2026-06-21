import { describe, it, expect } from 'vitest'
import { colors, colorList } from '../src/index.js'

describe('@wairo-palette/core', () => {
  it('colorList has at least 200 entries', () => {
    expect(colorList.length).toBeGreaterThanOrEqual(200)
  })

  it('each color has all required fields', () => {
    for (const color of colorList) {
      expect(typeof color.name).toBe('string')
      expect(typeof color.romaji).toBe('string')
      expect(typeof color.kanji).toBe('string')
      expect(color.hex).toMatch(/^#[0-9A-Fa-f]{6}$/)
      expect(typeof color.rgb.r).toBe('number')
      expect(typeof color.rgb.g).toBe('number')
      expect(typeof color.rgb.b).toBe('number')
      expect(typeof color.hsl.h).toBe('number')
      expect(typeof color.hsl.s).toBe('number')
      expect(typeof color.hsl.l).toBe('number')
    }
  })

  it('colors object is keyed by romaji', () => {
    for (const [key, color] of Object.entries(colors)) {
      expect(key).toBe(color.romaji)
    }
  })

  it('colors and colorList length match', () => {
    expect(Object.keys(colors).length).toBe(colorList.length)
  })

  it('romaji keys are lowercase with no spaces', () => {
    for (const romaji of Object.keys(colors)) {
      expect(romaji).toBe(romaji.toLowerCase())
      expect(romaji).not.toContain(' ')
    }
  })

  it('rgb values are in 0–255 range', () => {
    for (const { rgb } of colorList) {
      expect(rgb.r).toBeGreaterThanOrEqual(0)
      expect(rgb.r).toBeLessThanOrEqual(255)
      expect(rgb.g).toBeGreaterThanOrEqual(0)
      expect(rgb.g).toBeLessThanOrEqual(255)
      expect(rgb.b).toBeGreaterThanOrEqual(0)
      expect(rgb.b).toBeLessThanOrEqual(255)
    }
  })

  it('hsl values are in valid ranges', () => {
    for (const { hsl } of colorList) {
      expect(hsl.h).toBeGreaterThanOrEqual(0)
      expect(hsl.h).toBeLessThanOrEqual(360)
      expect(hsl.s).toBeGreaterThanOrEqual(0)
      expect(hsl.s).toBeLessThanOrEqual(100)
      expect(hsl.l).toBeGreaterThanOrEqual(0)
      expect(hsl.l).toBeLessThanOrEqual(100)
    }
  })
})
