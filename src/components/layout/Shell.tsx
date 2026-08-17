import { Outlet } from 'react-router-dom'
import { currentStreak } from '@/engine/streak'
import { toDayStamp } from '@/lib/date'
import { useLevel, useProgress } from '@/store/use-progress'
import { AchievementToast } from '@/components/ui/AchievementToast'
import { MobileNav, Sidebar } from './Navigation'

/** Compact status strip shown above the content on small screens. */
function MobileStatusBar() {
  const level = useLevel()
  const xp = useProgress((s) => s.progress.xp)
  const streak = useProgress((s) => currentStreak(s.progress.streak, toDayStamp(new Date())))

  return (
    <div className="flex items-center justify-between border-b bg-surface px-4 py-2.5 md:hidden">
      <div className="flex items-baseline gap-1.5">
        <span className="font-mono text-sm text-accent" aria-hidden>
          ∴
        </span>
        <span className="font-semibold tracking-tight text-ink">Agora</span>
      </div>
      <div className="flex items-center gap-3 font-mono text-2xs text-faint">
        <span>LV {level.level}</span>
        <span>{xp.toLocaleString()} XP</span>
        <span style={streak > 0 ? { color: 'var(--c-medium)' } : undefined}>{streak}d</span>
      </div>
    </div>
  )
}

export function Shell() {
  return (
    <div className="min-h-dvh bg-app">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-raised focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>

      <Sidebar />
      <MobileStatusBar />

      <main id="main" className="px-4 pb-24 pt-6 md:ml-60 md:px-10 md:pb-16 md:pt-10">
        <div className="mx-auto w-full max-w-4xl">
          <Outlet />
        </div>
      </main>

      <MobileNav />
      <AchievementToast />
    </div>
  )
}
