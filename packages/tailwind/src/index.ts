import { colorList } from '@nippon-color/core'

const nipponColors: Record<string, string> = Object.fromEntries(
  colorList.map((c) => [c.romaji, c.hex])
)

// Plain plugin object compatible with Tailwind v3 plugin() API shape.
// In v3: add to plugins: [nipponColor]
// In v4: @plugin "@nippon-color/tailwind" in CSS
const nipponColorPlugin = {
  handler: () => {},
  config: {
    theme: {
      extend: {
        colors: {
          nippon: nipponColors,
        },
      },
    },
  },
}

export default nipponColorPlugin
