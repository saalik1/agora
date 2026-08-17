import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { masteryBand } from '@/engine/mastery'
import type { Difficulty } from '@/types/content'

/* -------------------------------------------------------------------------- */
/* Button                                                                     */
/* -------------------------------------------------------------------------- */

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: 'sm' | 'md'
}

const BUTTON_BASE =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium ' +
  'transition-[background-color,border-color,color,transform] duration-150 ' +
  'active:translate-y-px disabled:pointer-events-none disabled:opacity-45'

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: 'text-[#04211d] hover:brightness-110',
  secondary: 'border bg-raised text-ink hover:border-strong',
  ghost: 'text-muted hover:text-ink hover:bg-raised',
  danger: 'border text-[color:var(--c-hard)] hover:bg-[color:var(--c-hard-wash)]',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  style,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      style={variant === 'primary' ? { backgroundColor: 'var(--c-accent)', ...style } : style}
      className={cn(
        BUTTON_BASE,
        BUTTON_VARIANTS[variant],
        size === 'sm' ? 'h-8 px-3 text-sm' : 'h-10 px-4 text-base',
        className,
      )}
    />
  )
}

/* -------------------------------------------------------------------------- */
/* Card                                                                       */
/* -------------------------------------------------------------------------- */

export function Card({
  children,
  className,
  as: As = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'li'
}) {
  return (
    <As className={cn('rounded-[--radius-card] border bg-surface', className)}>{children}</As>
  )
}

/* -------------------------------------------------------------------------- */
/* Eyebrow — a small mono label. Used to name a thing, never to decorate.      */
/* -------------------------------------------------------------------------- */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'font-mono text-2xs uppercase tracking-[0.14em] text-faint',
        className,
      )}
    >
      {children}
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/* Difficulty pill — the triad doing its first job                            */
/* -------------------------------------------------------------------------- */

const DIFFICULTY: Record<Difficulty, { label: string; color: string; wash: string }> = {
  1: { label: 'Easy', color: 'var(--c-easy)', wash: 'var(--c-easy-wash)' },
  2: { label: 'Medium', color: 'var(--c-medium)', wash: 'var(--c-medium-wash)' },
  3: { label: 'Hard', color: 'var(--c-hard)', wash: 'var(--c-hard-wash)' },
}

export function DifficultyPill({ level }: { level: Difficulty }) {
  const tone = DIFFICULTY[level]
  return (
    <span
      className="rounded px-1.5 py-0.5 font-mono text-2xs font-medium uppercase tracking-wider"
      style={{ color: tone.color, backgroundColor: tone.wash }}
    >
      {tone.label}
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/* Mastery bar                                                                */
/* -------------------------------------------------------------------------- */

const TONE_VAR: Record<string, string> = {
  faint: 'var(--c-text-faint)',
  hard: 'var(--c-hard)',
  medium: 'var(--c-medium)',
  accent: 'var(--c-accent)',
  easy: 'var(--c-easy)',
}

export function MasteryBar({
  score,
  label,
  showBand = true,
}: {
  score: number
  label?: string
  showBand?: boolean
}) {
  const band = masteryBand(score)
  const color = TONE_VAR[band.tone] ?? 'var(--c-accent)'

  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        {label ? <span className="truncate text-sm text-ink">{label}</span> : <span />}
        <span className="shrink-0 font-mono text-xs" style={{ color }}>
          {showBand ? band.label : `${Math.round(score)}%`}
        </span>
      </div>
      <div
        className="h-1 w-full overflow-hidden rounded-full bg-raised"
        role="meter"
        aria-valuenow={Math.round(score)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ? `${label} mastery` : 'Mastery'}
      >
        <div
          className="h-full rounded-full transition-[width] duration-500"
          style={{ width: `${Math.max(2, score)}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Empty state — an invitation to act, not an apology                         */
/* -------------------------------------------------------------------------- */

export function EmptyState({
  title,
  body,
  action,
}: {
  title: string
  body: string
  action?: { label: string; to: string }
}) {
  return (
    <div className="rounded-[--radius-card] border border-dashed px-6 py-10 text-center">
      <p className="text-base text-ink">{title}</p>
      <p className="mx-auto mt-1.5 max-w-sm text-sm text-muted">{body}</p>
      {action && (
        <Link
          to={action.to}
          className="mt-5 inline-flex h-9 items-center rounded-md px-4 text-sm font-medium text-[#04211d]"
          style={{ backgroundColor: 'var(--c-accent)' }}
        >
          {action.label}
        </Link>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page header                                                                */
/* -------------------------------------------------------------------------- */

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string
  title: string
  description?: string
  actions?: ReactNode
}) {
  return (
    <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && <div className="mb-2">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>}
        <h1 className="text-2xl font-semibold tracking-tight text-ink">{title}</h1>
        {description && <p className="mt-2 max-w-xl text-sm text-muted">{description}</p>}
      </div>
      {actions}
    </header>
  )
}
