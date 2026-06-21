import { colorList } from '@wairo-palette/core'

const wairoColors: Record<string, string> = Object.fromEntries(
  colorList.map((c) => [c.romaji, c.hex])
)

// Plain plugin object compatible with Tailwind v3 plugin() API shape.
// In v3: add to plugins: [wairoPlugin]
// In v4: @plugin "@wairo-palette/tailwind" in CSS
const wairoPlugin = {
  handler: () => {},
  config: {
    theme: {
      extend: {
        colors: {
          wairo: wairoColors,
        },
      },
    },
  },
}

export default wairoPlugin
