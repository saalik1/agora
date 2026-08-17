import { describe, expect, it } from 'vitest'
import { LEVELS, didLevelUp, levelForXp, levelState } from './levels'
import { XP, dailyGoalBonus, dailyGoalState, lessonXp, practiceXp } from './xp'

describe('levelForXp', () => {
  it('starts everyone at level 1', () => {
    expect(levelForXp(0).level).toBe(1)
    expect(levelForXp(0).title).toBe('Curious Mind')
  })

  it('treats a threshold as the first XP of the new level', () => {
    expect(levelForXp(99).level).toBe(1)
    expect(levelForXp(100).level).toBe(2)
    expect(levelForXp(101).level).toBe(2)
  })

  it('lands on the right tier at every declared threshold', () => {
    for (const tier of LEVELS) {
      expect(levelForXp(tier.threshold).level).toBe(tier.level)
    }
  })

  it('clamps negative XP rather than throwing', () => {
    expect(levelForXp(-50).level).toBe(1)
  })

  it('stays at the maximum tier beyond the last threshold', () => {
    const max = LEVELS[LEVELS.length - 1]!
    expect(levelForXp(max.threshold + 10_000).level).toBe(max.level)
  })
})

describe('levelState', () => {
  it('reports progress within the current level', () => {
    // Level 2 spans 100 -> 250, so 175 XP is exactly halfway.
    const state = levelState(175)
    expect(state.level).toBe(2)
    expect(state.xpIntoLevel).toBe(75)
    expect(state.xpForLevel).toBe(150)
    expect(state.xpToNext).toBe(75)
    expect(state.progress).toBeCloseTo(0.5)
    expect(state.isMax).toBe(false)
  })

  it('reports a complete bar at the maximum level', () => {
    const max = LEVELS[LEVELS.length - 1]!
    const state = levelState(max.threshold + 500)
    expect(state.isMax).toBe(true)
    expect(state.xpToNext).toBeNull()
    expect(state.progress).toBe(1)
  })
})

describe('didLevelUp', () => {
  it('detects crossing a threshold', () => {
    expect(didLevelUp(95, 10)).toBe(true)
  })

  it('is false when the gain stays inside a level', () => {
    expect(didLevelUp(100, 10)).toBe(false)
  })

  it('is true when a single award skips a whole level', () => {
    expect(didLevelUp(90, 200)).toBe(true)
  })
})

describe('lessonXp', () => {
  it('pays the lesson reward on a first completion', () => {
    expect(lessonXp({ lessonReward: 15, score: 0.75, alreadyCompleted: false })).toBe(15)
  })

  it('adds a bonus for a flawless run', () => {
    expect(lessonXp({ lessonReward: 15, score: 1, alreadyCompleted: false })).toBe(
      15 + XP.PERFECT_LESSON_BONUS,
    )
  })

  it('pays nothing for repeating a completed lesson', () => {
    expect(lessonXp({ lessonReward: 15, score: 1, alreadyCompleted: true })).toBe(0)
  })

  it('falls back to the default when a lesson declares no reward', () => {
    expect(lessonXp({ lessonReward: 0, score: 0.5, alreadyCompleted: false })).toBe(
      XP.LESSON_DEFAULT,
    )
  })
})

describe('practiceXp', () => {
  it('pays per correct answer', () => {
    expect(practiceXp(4)).toBe(4 * XP.PRACTICE_CORRECT)
  })

  it('pays nothing for a set with no correct answers', () => {
    expect(practiceXp(0)).toBe(0)
  })

  it('never returns negative XP', () => {
    expect(practiceXp(-3)).toBe(0)
  })
})

describe('dailyGoalBonus', () => {
  it('pays on the transition across the goal', () => {
    expect(dailyGoalBonus(20, 10, 25)).toBe(XP.DAILY_GOAL_BONUS)
  })

  it('does not pay again once the goal is already met', () => {
    expect(dailyGoalBonus(30, 10, 25)).toBe(0)
  })

  it('does not pay when the goal is still out of reach', () => {
    expect(dailyGoalBonus(5, 10, 25)).toBe(0)
  })

  it('pays when a single award lands exactly on the goal', () => {
    expect(dailyGoalBonus(0, 25, 25)).toBe(XP.DAILY_GOAL_BONUS)
  })
})

describe('dailyGoalState', () => {
  it('caps the progress bar once the goal is passed', () => {
    const state = dailyGoalState({ '2026-08-16': 40 }, '2026-08-16', 25)
    expect(state.met).toBe(true)
    expect(state.progress).toBe(1)
    expect(state.earned).toBe(40)
  })

  it('reports an untouched day as zero', () => {
    const state = dailyGoalState({}, '2026-08-16', 25)
    expect(state.earned).toBe(0)
    expect(state.met).toBe(false)
  })
})
