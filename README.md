# Wairo-Palette

Traditional Japanese color palettes for JavaScript and TypeScript. ~250 colors from [nipponcolors.com](https://nipponcolors.com/).

| Package                   | npm                                                                                                                   | JSR                                                                                             | Description           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------- |
| `@wairo-palette/core`     | [![npm](https://img.shields.io/npm/v/@wairo-palette/core)](https://www.npmjs.com/package/@wairo-palette/core)         | [![jsr](https://jsr.io/badges/@wairo-palette/core)](https://jsr.io/@wairo-palette/core)         | Typed JS/TS constants |
| `@wairo-palette/css`      | [![npm](https://img.shields.io/npm/v/@wairo-palette/css)](https://www.npmjs.com/package/@wairo-palette/css)           | [![jsr](https://jsr.io/badges/@wairo-palette/css)](https://jsr.io/@wairo-palette/css)           | CSS utility classes   |
| `@wairo-palette/tailwind` | [![npm](https://img.shields.io/npm/v/@wairo-palette/tailwind)](https://www.npmjs.com/package/@wairo-palette/tailwind) | [![jsr](https://jsr.io/badges/@wairo-palette/tailwind)](https://jsr.io/@wairo-palette/tailwind) | Tailwind CSS plugin   |

## Install

```sh
npm install @wairo-palette/core      # JS/TS typed constants
npm install @wairo-palette/css       # CSS utilities
npm install @wairo-palette/tailwind  # Tailwind plugin
```

## @wairo-palette/core

```ts
import { colors, colorList } from "@wairo-palette/core";

colors.beniaka.hex; // "#BF6766"
colors.beniaka.kanji; // "紅赤"
colors.beniaka.rgb; // { r: 191, g: 103, b: 102 }
colors.beniaka.hsl; // { h: 0, s: 35, l: 57 }

colorList.length; // ~250
```

## @wairo-palette/css

```ts
import "@wairo-palette/css";
```

```html
<div class="bg-beniaka text-gofun border-shironeri">Hello</div>
```

## @wairo-palette/tailwind (v3)

```js
// tailwind.config.js
import wairoPlugin from "@wairo-palette/tailwind";
export default { plugins: [wairoPlugin] };
```

```html
<div class="bg-wairo-beniaka text-wairo-gofun">Hello</div>
```

## Docs

Full documentation at [wairo-palette docs](https://MiohitoKiri5474.github.io/wairo-palette)
