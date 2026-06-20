# nippon-color

Traditional Japanese color palettes for JavaScript and TypeScript. ~250 colors from [nipponcolors.com](https://nipponcolors.com/).

| Package | npm | JSR | Description |
|---|---|---|---|
| `@nippon-color/core` | [![npm](https://img.shields.io/npm/v/@nippon-color/core)](https://www.npmjs.com/package/@nippon-color/core) | [![jsr](https://jsr.io/badges/@nippon-color/core)](https://jsr.io/@nippon-color/core) | Typed JS/TS constants |
| `@nippon-color/css` | [![npm](https://img.shields.io/npm/v/@nippon-color/css)](https://www.npmjs.com/package/@nippon-color/css) | [![jsr](https://jsr.io/badges/@nippon-color/css)](https://jsr.io/@nippon-color/css) | CSS utility classes |
| `@nippon-color/tailwind` | [![npm](https://img.shields.io/npm/v/@nippon-color/tailwind)](https://www.npmjs.com/package/@nippon-color/tailwind) | [![jsr](https://jsr.io/badges/@nippon-color/tailwind)](https://jsr.io/@nippon-color/tailwind) | Tailwind CSS plugin |

## Install

```sh
npm install @nippon-color/core      # JS/TS typed constants
npm install @nippon-color/css       # CSS utilities
npm install @nippon-color/tailwind  # Tailwind plugin
```

## @nippon-color/core

```ts
import { colors, colorList } from '@nippon-color/core'

colors.beniaka.hex    // "#BF6766"
colors.beniaka.kanji  // "紅赤"
colors.beniaka.rgb    // { r: 191, g: 103, b: 102 }
colors.beniaka.hsl    // { h: 0, s: 35, l: 57 }

colorList.length      // ~250
```

## @nippon-color/css

```ts
import '@nippon-color/css'
```

```html
<div class="bg-beniaka text-gofun border-shironeri">Hello</div>
```

## @nippon-color/tailwind (v3)

```js
// tailwind.config.js
import nipponColor from '@nippon-color/tailwind'
export default { plugins: [nipponColor] }
```

```html
<div class="bg-nippon-beniaka text-nippon-gofun">Hello</div>
```

## Docs

Full documentation at [nippon-color docs](https://miohitokiri5474.github.io/nippon-color)
