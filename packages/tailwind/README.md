# @wairo-palette/tailwind

Tailwind CSS plugin for ~250 traditional Japanese colors, namespaced under `wairo-*`.

## Install

```bash
npm install @wairo-palette/tailwind
```

## Usage

### Tailwind v3

```ts
// tailwind.config.ts
import wairoPlugin from '@wairo-palette/tailwind'

export default {
  plugins: [wairoPlugin],
}
```

### Tailwind v4

```css
/* app.css */
@plugin "@wairo-palette/tailwind";
```

## Colors

Colors are namespaced under `wairo` to avoid conflicts with Tailwind's built-in palette:

```html
<p class="text-wairo-akane">Red like madder</p>
<div class="bg-wairo-hanada">Indigo background</div>
<span class="border-wairo-shironeri">Off-white border</span>
```

All ~250 romaji color names are available as `wairo-{romaji}`.
