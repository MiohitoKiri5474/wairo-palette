# Getting Started

## Installation

Pick the package(s) you need:

::: code-group

```sh [npm]
npm install @wairo-palette/core
npm install @wairo-palette/css
npm install @wairo-palette/tailwind
```

```sh [pnpm]
pnpm add @wairo-palette/core
pnpm add @wairo-palette/css
pnpm add @wairo-palette/tailwind
```

```sh [yarn]
yarn add @wairo-palette/core
yarn add @wairo-palette/css
yarn add @wairo-palette/tailwind
```

:::

## Quick Example

**JS/TS constants:**
```ts
import { colors } from '@wairo-palette/core'
colors.beniaka.hex    // "#BF6766"
colors.beniaka.kanji  // "紅赤"
```

**CSS utilities:**
```html
<!-- import '@wairo-palette/css' once, then: -->
<div class="bg-beniaka text-gofun">Hello</div>
```

**Tailwind:**
```js
// tailwind.config.js
import wairoPlugin from '@wairo-palette/tailwind'
export default { plugins: [wairoPlugin] }
// then: class="bg-wairo-beniaka text-wairo-gofun"
```
