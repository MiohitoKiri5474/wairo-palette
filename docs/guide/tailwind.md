# @nippon-color/tailwind

```sh
npm install @nippon-color/tailwind
```

## Tailwind v3

```js
// tailwind.config.js
import nipponColor from '@nippon-color/tailwind'

export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
  plugins: [nipponColor],
}
```

## Tailwind v4

```css
/* main.css */
@import "tailwindcss";
@plugin "@nippon-color/tailwind";
```

## Usage

All colors are namespaced under `nippon-` to avoid conflicts with Tailwind's built-in palette:

```html
<div class="bg-nippon-beniaka text-nippon-gofun border-nippon-shironeri">
  Traditional Japanese colors
</div>
```

See the [Color Reference](/colors) for all available color names.
