import { useEffect } from 'react'
import { achievementById } from '@/engine/achievements'
import { useProgress } from '@/store/use-progress'

/**
 * A quiet acknowledgement, not a celebration. Restrained gamification means the
 * app tells you what you earned and gets out of the way — no confetti, no
 * modal, no blocking the next action.
 */
export function AchievementToast() {
  const pending = useProgress((s) => s.pendingAchievements)
  const dismiss = useProgress((s) => s.dismissAchievements)

  useEffect(() => {
    if (pending.length === 0) return
    const timer = setTimeout(dismiss, 6000)
    return () => clearTimeout(timer)
  }, [pending, dismiss])

  if (pending.length === 0) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-20 left-1/2 z-30 w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 md:bottom-6 md:left-auto md:right-6 md:translate-x-0"
    >
      <ul className="space-y-2">
        {pending.map((id) => {
          const achievement = achievementById(id)
          if (!achievement) return null

          return (
            <li
              key={id}
              className="rounded-[--radius-card] border bg-raised px-4 py-3 shadow-lg"
              style={{ borderColor: 'var(--c-accent)' }}
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-0.5 font-mono text-sm"
                  style={{ color: 'var(--c-accent)' }}
                >
                  ✓
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-2xs uppercase tracking-[0.14em] text-faint">
                    Achievement
                  </p>
                  <p className="mt-0.5 text-sm text-ink">{achievement.title}</p>
                  <p className="mt-0.5 text-xs text-muted">{achievement.description}</p>
                </div>
                <button
                  onClick={dismiss}
                  aria-label="Dismiss"
                  className="shrink-0 font-mono text-xs text-faint hover:text-ink"
                >
                  ✕
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
