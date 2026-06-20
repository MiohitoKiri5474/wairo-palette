import type { NipponColor } from './types.js'
import rawColors from './data/colors.json'

export type { NipponColor }

export const colorList: NipponColor[] = rawColors as NipponColor[]

export const colors: Record<string, NipponColor> = Object.fromEntries(
  colorList.map((c) => [c.romaji, c])
)
