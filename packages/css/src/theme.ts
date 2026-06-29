// Day/night semantic color tokens using traditional Japanese colors.
// Roles map to curated wairo-palette entries chosen for contrast and mood.
export const DAY_THEME = {
  '--wairo-bg': '#FCFAF2',     // shironeri — washi paper
  '--wairo-surface': '#FFFFFB', // gofun — pigment white
  '--wairo-text': '#1C1C1C',   // sumi — ink
  '--wairo-text-muted': '#656765', // nibi — neutral gray
  '--wairo-border': '#BDC0BA', // shironezumi — light gray
  '--wairo-accent': '#E16B8C', // kohbai — plum blossom
} as const

export const NIGHT_THEME = {
  '--wairo-bg': '#1C1C1C',     // sumi — ink
  '--wairo-surface': '#373C38', // aisumicha — dark ink-green
  '--wairo-text': '#FCFAF2',   // shironeri — warm white
  '--wairo-text-muted': '#91989F', // ginnezumi — cool gray
  '--wairo-border': '#535953', // aonibi — dark gray
  '--wairo-accent': '#E16B8C', // kohbai — same accent on dark
} as const

export function generateThemeCSS(): string {
  const lines: string[] = ['/* Wairo Palette — default day/night theme */', ':root {']
  for (const [prop, val] of Object.entries(DAY_THEME)) {
    lines.push(`  ${prop}: ${val};`)
  }
  lines.push('}', '', '@media (prefers-color-scheme: dark) {', '  :root {')
  for (const [prop, val] of Object.entries(NIGHT_THEME)) {
    lines.push(`    ${prop}: ${val};`)
  }
  lines.push('  }', '}', '')
  return lines.join('\n')
}
