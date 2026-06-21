# @wairo-palette/css

Pre-built CSS for ~250 traditional Japanese colors — custom properties and utility classes.

## Install

```bash
npm install @wairo-palette/css
```

## Usage

```css
@import '@wairo-palette/css';
```

Or in JS/TS bundlers:

```ts
import '@wairo-palette/css'
```

## What's included

### CSS custom properties

Each color is exposed as a `:root` variable:

```css
:root {
  --color-akane: #c0392b;
  --color-hanada: #1e50a2;
  /* ...~250 colors */
}
```

### Utility classes

Five utility classes per color, named by romaji:

| Pattern | Property |
|---------|----------|
| `.text-{romaji}` | `color` |
| `.bg-{romaji}` | `background-color` |
| `.border-{romaji}` | `border-color` |
| `.fill-{romaji}` | `fill` |
| `.stroke-{romaji}` | `stroke` |

```html
<p class="text-akane">Red like madder</p>
<div class="bg-hanada">Indigo background</div>
```
