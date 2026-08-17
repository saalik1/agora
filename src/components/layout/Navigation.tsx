import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { currentStreak } from '@/engine/streak'
import { toDayStamp } from '@/lib/date'
import { useLevel, useProgress } from '@/store/use-progress'

export interface NavItem {
  to: string
  label: string
  /**
   * Each glyph is drawn from proof notation rather than a generic icon set:
   * the app's whole visual language is the shape of an argument.
   */
  glyph: string
  end?: boolean
}

export const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Home', glyph: '⌂', end: true },
  { to: '/learn', label: 'Learn', glyph: '⊢' },
  { to: '/practice', label: 'Practice', glyph: '∴' },
  { to: '/library', label: 'Library', glyph: '§' },
  { to: '/progress', label: 'Progress', glyph: '◪' },
]

function itemClass(isActive: boolean): string {
  return cn(
    'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors duration-150',
    isActive ? 'bg-raised text-ink' : 'text-muted hover:bg-raised hover:text-ink',
  )
}

/* -------------------------------------------------------------------------- */
/* Desktop sidebar                                                            */
/* -------------------------------------------------------------------------- */

export function Sidebar() {
  const level = useLevel()
  const xp = useProgress((s) => s.progress.xp)
  const streak = useProgress((s) => currentStreak(s.progress.streak, toDayStamp(new Date())))

  return (
    <aside className="fixed inset-y-0 left-0 hidden w-60 flex-col border-r bg-surface md:flex">
      <div className="px-5 py-6">
        {/* The wordmark is a one-line proof: premises above the rule, Agora below. */}
        <div className="font-mono text-2xs leading-tight text-faint">P1 · P2</div>
        <div className="my-1 h-px w-10" style={{ backgroundColor: 'var(--c-accent)' }} />
        <div className="flex items-baseline gap-1.5">
          <span className="font-mono text-sm text-accent">∴</span>
          <span className="text-lg font-semibold tracking-tight text-ink">Agora</span>
        </div>
      </div>

      <nav aria-label="Main" className="flex-1 px-3">
        <ul className="space-y-0.5">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.end} className={({ isActive }) => itemClass(isActive)}>
                {({ isActive }) => (
                  <>
                    <span
                      aria-hidden
                      className="w-4 text-center font-mono text-sm"
                      style={isActive ? { color: 'var(--c-accent)' } : undefined}
                    >
                      {item.glyph}
                    </span>
                    {item.label}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t px-5 py-4">
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-ink">{level.title}</span>
          <span className="font-mono text-2xs text-faint">LV {level.level}</span>
        </div>

        <div className="mt-2 h-1 overflow-hidden rounded-full bg-raised">
          <div
            className="h-full rounded-full transition-[width] duration-500"
            style={{
              width: `${Math.max(2, level.progress * 100)}%`,
              backgroundColor: 'var(--c-accent)',
            }}
          />
        </div>

        <div className="mt-2.5 flex items-center justify-between font-mono text-2xs text-faint">
          <span>{xp.toLocaleString()} XP</span>
          <span style={streak > 0 ? { color: 'var(--c-medium)' } : undefined}>
            {streak}d streak
          </span>
        </div>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            cn(
              'mt-3 block text-xs transition-colors',
              isActive ? 'text-ink' : 'text-faint hover:text-muted',
            )
          }
        >
          Settings
        </NavLink>
      </div>
    </aside>
  )
}

/* -------------------------------------------------------------------------- */
/* Mobile bottom bar                                                          */
/* -------------------------------------------------------------------------- */

export function MobileNav() {
  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-20 border-t bg-surface pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <ul className="flex">
        {NAV_ITEMS.map((item) => (
          <li key={item.to} className="flex-1">
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  'flex flex-col items-center gap-0.5 py-2.5 text-2xs transition-colors',
                  isActive ? 'text-ink' : 'text-faint',
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    aria-hidden
                    className="font-mono text-base leading-none"
                    style={isActive ? { color: 'var(--c-accent)' } : undefined}
                  >
                    {item.glyph}
                  </span>
                  {item.label}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
