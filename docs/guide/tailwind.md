# @wairo-palette/tailwind

```sh
npm install @wairo-palette/tailwind
```

## Tailwind v3

```js
// tailwind.config.js
import wairoPlugin from '@wairo-palette/tailwind'

export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
  plugins: [wairoPlugin],
}
```

## Tailwind v4

```css
/* main.css */
@import "tailwindcss";
@plugin "@wairo-palette/tailwind";
```

## Usage

All colors are namespaced under `wairo-` to avoid conflicts with Tailwind's built-in palette:

```html
<div class="bg-wairo-beniaka text-wairo-gofun border-wairo-shironeri">
  Traditional Japanese colors
</div>
```

See the [Color Reference](/colors) for all available color names.
