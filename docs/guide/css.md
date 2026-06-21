# @wairo-palette/css

```sh
npm install @wairo-palette/css
```

## Setup

**With a bundler:**
```ts
import '@wairo-palette/css'
```

**Plain HTML:**
```html
<link rel="stylesheet" href="node_modules/@wairo-palette/css/dist/wairo-palette.css">
```

## Utility Classes

Every color `{name}` generates five classes:

| Class | CSS property |
|---|---|
| `.text-{name}` | `color` |
| `.bg-{name}` | `background-color` |
| `.border-{name}` | `border-color` |
| `.fill-{name}` | `fill` (SVG) |
| `.stroke-{name}` | `stroke` (SVG) |

## CSS Custom Properties

All colors are available as CSS variables:

```css
.my-element {
  color: var(--color-beniaka);
  background-color: var(--color-gofun);
}
```

## Example

```html
<div class="bg-beniaka text-gofun">Traditional Japanese colors</div>
```
