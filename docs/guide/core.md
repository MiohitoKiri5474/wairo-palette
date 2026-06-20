# @nippon-color/core

```sh
npm install @nippon-color/core
```

## API

### `colors`

`Record<string, NipponColor>` keyed by romaji.

```ts
import { colors } from '@nippon-color/core'

colors.beniaka.hex        // "#BF6766"
colors.beniaka.romaji     // "beniaka"
colors.beniaka.kanji      // "紅赤"
colors.beniaka.name       // "Beniaka"
colors.beniaka.rgb        // { r: 191, g: 103, b: 102 }
colors.beniaka.hsl        // { h: 0, s: 35, l: 57 }
```

### `colorList`

`NipponColor[]` — all colors as an array.

```ts
import { colorList } from '@nippon-color/core'

colorList.length                          // ~250
colorList.find(c => c.romaji === 'gofun') // NipponColor
```

### `NipponColor` type

```ts
interface NipponColor {
  name: string    // "Beniaka"
  romaji: string  // "beniaka"
  kanji: string   // "紅赤"
  hex: string     // "#BF6766"
  rgb: { r: number; g: number; b: number }
  hsl: { h: number; s: number; l: number }
}
```
