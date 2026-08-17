import { describe, expect, it } from 'vitest'
import type { UserProgress } from '@/types/progress'
import { createEmptyProgress } from '@/store/progress-repository'
import { ACHIEVEMENTS, achievementById, evaluateAchievements } from './achievements'

function progressWith(overrides: Partial<UserProgress>): UserProgress {
  return { ...createEmptyProgress('2026-08-16'), ...overrides }
}

describe('evaluateAchievements', () => {
  it('awards nothing to a brand-new user', () => {
    expect(evaluateAchievements({ progress: progressWith({}) })).toEqual([])
  })

  it('awards First Argument on a first completed lesson', () => {
    const progress = progressWith({
      lessons: { 'logic-1': { completedAt: '2026-08-16', bestScore: 0.8, attempts: 1 } },
    })
    expect(evaluateAchievements({ progress })).toContain('first-argument')
  })

  it('awards Perfect Lesson only on a flawless run', () => {
    const progress = progressWith({
      lessons: { 'logic-1': { completedAt: '2026-08-16', bestScore: 1, attempts: 1 } },
    })
    expect(evaluateAchievements({ progress, justCompletedScore: 1 })).toContain('perfect-lesson')
    expect(evaluateAchievements({ progress, justCompletedScore: 0.8 })).not.toContain(
      'perfect-lesson',
    )
  })

  it('awards the streak achievement at seven days', () => {
    const six = progressWith({ streak: { current: 6, longest: 6, lastActiveDay: '2026-08-16' } })
    const seven = progressWith({ streak: { current: 7, longest: 7, lastActiveDay: '2026-08-16' } })
    expect(evaluateAchievements({ progress: six })).not.toContain('seven-day-streak')
    expect(evaluateAchievements({ progress: seven })).toContain('seven-day-streak')
  })

  it('never re-awards something already held', () => {
    const progress = progressWith({
      lessons: { 'logic-1': { completedAt: '2026-08-16', bestScore: 1, attempts: 1 } },
      achievements: { 'first-argument': '2026-08-16T10:00:00.000Z' },
    })
    expect(evaluateAchievements({ progress })).not.toContain('first-argument')
  })
})

describe('achievementById', () => {
  it('resolves every declared achievement', () => {
    for (const achievement of ACHIEVEMENTS) {
      expect(achievementById(achievement.id)?.title).toBe(achievement.title)
    }
  })

  it('returns undefined for an unknown id', () => {
    expect(achievementById('nope')).toBeUndefined()
  })
})
