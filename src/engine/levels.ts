/**
 * Levels. Cumulative XP thresholds with titles that describe a reasoner's
 * progress rather than flattering the user.
 */

export interface LevelTier {
  level: number
  title: string
  /** Cumulative XP required to reach this level. */
  threshold: number
}

export const LEVELS: readonly LevelTier[] = [
  { level: 1, title: 'Curious Mind', threshold: 0 },
  { level: 2, title: 'Student', threshold: 100 },
  { level: 3, title: 'Reader', threshold: 250 },
  { level: 4, title: 'Reasoner', threshold: 500 },
  { level: 5, title: 'Analyst', threshold: 850 },
  { level: 6, title: 'Dialectician', threshold: 1300 },
  { level: 7, title: 'Philosopher', threshold: 1900 },
  { level: 8, title: 'Logician', threshold: 2600 },
  { level: 9, title: 'Sceptic', threshold: 3400 },
  { level: 10, title: 'Scholar', threshold: 4300 },
] as const

export interface LevelState {
  level: number
  title: string
  /** XP accumulated inside the current level. */
  xpIntoLevel: number
  /** XP needed to span the current level. Null at the maximum level. */
  xpForLevel: number | null
  /** XP remaining until the next level. Null at the maximum level. */
  xpToNext: number | null
  /** Progress through the current level, 0–1. 1 at the maximum level. */
  progress: number
  isMax: boolean
}

export function levelForXp(xp: number): LevelTier {
  const safeXp = Math.max(0, xp)
  let current = LEVELS[0] as LevelTier
  for (const tier of LEVELS) {
    if (safeXp >= tier.threshold) current = tier
    else break
  }
  return current
}

export function levelState(xp: number): LevelState {
  const safeXp = Math.max(0, xp)
  const tier = levelForXp(safeXp)
  const next = LEVELS.find((t) => t.level === tier.level + 1)

  if (!next) {
    return {
      level: tier.level,
      title: tier.title,
      xpIntoLevel: safeXp - tier.threshold,
      xpForLevel: null,
      xpToNext: null,
      progress: 1,
      isMax: true,
    }
  }

  const xpForLevel = next.threshold - tier.threshold
  const xpIntoLevel = safeXp - tier.threshold

  return {
    level: tier.level,
    title: tier.title,
    xpIntoLevel,
    xpForLevel,
    xpToNext: next.threshold - safeXp,
    progress: xpIntoLevel / xpForLevel,
    isMax: false,
  }
}

/** True when awarding `gained` XP crossed at least one level threshold. */
export function didLevelUp(previousXp: number, gained: number): boolean {
  return levelForXp(previousXp + gained).level > levelForXp(previousXp).level
}
