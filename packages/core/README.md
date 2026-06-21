# @wairo-palette/core

~250 traditional Japanese colors as typed JS/TS constants.

## Install

```bash
npm install @wairo-palette/core
```

## Usage

```ts
import { colors, colorList } from '@wairo-palette/core'

// Lookup by romaji key
colors['akane']      // { name, romaji, kanji, hex, rgb, hsl }

// Full list
colorList.forEach(c => console.log(c.hex))
```

## Type

```ts
interface NipponColor {
  name: string
  romaji: string
  kanji: string
  hex: string
  rgb: { r: number; g: number; b: number }
  hsl: { h: number; s: number; l: number }
}
```

## Exports

| Export | Type | Description |
|--------|------|-------------|
| `colors` | `Record<string, NipponColor>` | Keyed by romaji (lowercase, no spaces) |
| `colorList` | `NipponColor[]` | Full array of all colors |
| `NipponColor` | `interface` | Color shape |

Dual ESM + CJS output. No runtime dependencies.
