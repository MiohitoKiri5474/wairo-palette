# Getting Started

## Installation

Pick the package(s) you need:

::: code-group

```sh [npm]
npm install @nippon-color/core
npm install @nippon-color/css
npm install @nippon-color/tailwind
```

```sh [pnpm]
pnpm add @nippon-color/core
pnpm add @nippon-color/css
pnpm add @nippon-color/tailwind
```

```sh [yarn]
yarn add @nippon-color/core
yarn add @nippon-color/css
yarn add @nippon-color/tailwind
```

:::

## Quick Example

**JS/TS constants:**
```ts
import { colors } from '@nippon-color/core'
colors.beniaka.hex    // "#BF6766"
colors.beniaka.kanji  // "紅赤"
```

**CSS utilities:**
```html
<!-- import '@nippon-color/css' once, then: -->
<div class="bg-beniaka text-gofun">Hello</div>
```

**Tailwind:**
```js
// tailwind.config.js
import nipponColor from '@nippon-color/tailwind'
export default { plugins: [nipponColor] }
// then: class="bg-nippon-beniaka text-nippon-gofun"
```
