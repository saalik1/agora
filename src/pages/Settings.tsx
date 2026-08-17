import { useRef, useState } from 'react'
import { cn } from '@/lib/cn'
import { downloadProgress, parseImport } from '@/store/transfer'
import { useProgress } from '@/store/use-progress'
import { Button, Card, PageHeader } from '@/components/ui'
import type { DailyGoal, ThemePreference } from '@/types/progress'

const GOALS: Array<{ value: DailyGoal; label: string }> = [
  { value: 10, label: 'Light' },
  { value: 25, label: 'Regular' },
  { value: 50, label: 'Serious' },
]

const THEMES: Array<{ value: ThemePreference; label: string }> = [
  { value: 'dark', label: 'Dark' },
  { value: 'light', label: 'Light' },
  { value: 'system', label: 'System' },
]

function Row({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-4">
      <div>
        <p className="text-sm text-ink">{label}</p>
        {hint && <p className="mt-0.5 max-w-md text-xs text-muted">{hint}</p>}
      </div>
      {children}
    </div>
  )
}

function SegmentedControl<T extends string | number>({
  options,
  value,
  onChange,
  label,
}: {
  options: Array<{ value: T; label: string }>
  value: T
  onChange: (value: T) => void
  label: string
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex rounded-md border bg-raised p-0.5">
      {options.map((option) => {
        const active = option.value === value
        return (
          <button
            key={String(option.value)}
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option.value)}
            className={cn(
              'rounded px-3 py-1.5 text-xs transition-colors',
              active ? 'text-ink' : 'text-muted hover:text-ink',
            )}
            style={active ? { backgroundColor: 'var(--c-surface)' } : undefined}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export function Settings() {
  const progress = useProgress((s) => s.progress)
  const setTheme = useProgress((s) => s.setTheme)
  const setDailyGoal = useProgress((s) => s.setDailyGoal)
  const setReducedMotion = useProgress((s) => s.setReducedMotion)
  const replaceProgress = useProgress((s) => s.replaceProgress)
  const resetProgress = useProgress((s) => s.resetProgress)

  const fileInput = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState<{ tone: 'ok' | 'error'; text: string } | null>(null)

  async function handleFile(file: File) {
    const result = parseImport(await file.text())
    if (!result.ok) {
      setMessage({ tone: 'error', text: result.error })
      return
    }
    const confirmed = window.confirm(
      'Importing replaces everything currently stored in this browser — XP, streak, mastery and completed lessons. Continue?',
    )
    if (!confirmed) return
    replaceProgress(result.progress)
    setMessage({ tone: 'ok', text: 'Progress imported.' })
  }

  return (
    <div>
      <PageHeader title="Settings" />

      <Card className="mb-6 divide-y">
        <Row label="Theme">
          <SegmentedControl
            label="Theme"
            options={THEMES}
            value={progress.settings.theme}
            onChange={setTheme}
          />
        </Row>
        <Row label="Daily goal" hint="How much XP counts as a full day.">
          <SegmentedControl
            label="Daily goal"
            options={GOALS}
            value={progress.settings.dailyGoal}
            onChange={setDailyGoal}
          />
        </Row>
        <Row label="Reduce motion" hint="Turns off transitions regardless of your system setting.">
          <button
            role="switch"
            aria-checked={progress.settings.reducedMotion}
            aria-label="Reduce motion"
            onClick={() => setReducedMotion(!progress.settings.reducedMotion)}
            className="relative h-6 w-11 rounded-full border transition-colors"
            style={{
              backgroundColor: progress.settings.reducedMotion
                ? 'var(--c-accent)'
                : 'var(--c-raised)',
            }}
          >
            <span
              className="absolute top-0.5 h-4 w-4 rounded-full bg-white transition-[left] duration-150"
              style={{ left: progress.settings.reducedMotion ? '24px' : '3px' }}
            />
          </button>
        </Row>
      </Card>

      <h2 className="mb-3 text-sm font-medium text-ink">Your progress</h2>
      <Card className="mb-6 divide-y">
        <Row
          label="Export progress"
          hint="Downloads a JSON file. Agora has no accounts, so this is how you move to another device."
        >
          <Button variant="secondary" size="sm" onClick={() => downloadProgress(progress)}>
            Export
          </Button>
        </Row>
        <Row label="Import progress" hint="Replaces what is stored in this browser.">
          <>
            <input
              ref={fileInput}
              type="file"
              accept="application/json,.json"
              className="sr-only"
              onChange={(event) => {
                const file = event.target.files?.[0]
                if (file) void handleFile(file)
                event.target.value = ''
              }}
            />
            <Button variant="secondary" size="sm" onClick={() => fileInput.current?.click()}>
              Choose file
            </Button>
          </>
        </Row>
        <Row label="Reset progress" hint="Erases everything stored in this browser. This cannot be undone.">
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              if (!window.confirm('Erase all progress in this browser? This cannot be undone.')) return
              if (!window.confirm('Last check — export first if you want to keep it. Erase now?')) return
              void resetProgress()
              setMessage({ tone: 'ok', text: 'Progress erased.' })
            }}
          >
            Reset
          </Button>
        </Row>
      </Card>

      {message && (
        <p
          role="status"
          className="text-sm"
          style={{ color: message.tone === 'ok' ? 'var(--c-easy)' : 'var(--c-hard)' }}
        >
          {message.text}
        </p>
      )}

      <p className="mt-8 text-xs text-faint">
        Agora stores nothing outside this browser. There are no accounts, no analytics and no
        server to send anything to.
      </p>
    </div>
  )
}
