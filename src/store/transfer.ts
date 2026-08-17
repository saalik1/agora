import { toDayStamp } from '@/lib/date'
import type { UserProgress } from '@/types/progress'
import { PROGRESS_VERSION, normaliseProgress } from './progress-repository'

/**
 * Agora has no accounts, so moving between devices is a manual file transfer.
 * The export is the stored blob plus a small envelope; the import validates and
 * replaces rather than merging, because silently reconciling two divergent
 * histories would produce a state the user never chose.
 */

export interface ProgressExport {
  app: 'agora'
  version: number
  exportedAt: string
  progress: UserProgress
}

export function buildExport(progress: UserProgress): ProgressExport {
  return {
    app: 'agora',
    version: PROGRESS_VERSION,
    exportedAt: new Date().toISOString(),
    progress,
  }
}

export function serialiseExport(progress: UserProgress): string {
  return JSON.stringify(buildExport(progress), null, 2)
}

export type ImportResult =
  | { ok: true; progress: UserProgress }
  | { ok: false; error: string }

export function parseImport(raw: string, today = toDayStamp(new Date())): ImportResult {
  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    return { ok: false, error: "That file isn't valid JSON. Choose the file Agora exported." }
  }

  if (typeof parsed !== 'object' || parsed === null) {
    return { ok: false, error: "That file doesn't contain progress data." }
  }

  const envelope = parsed as Partial<ProgressExport>

  if (envelope.app !== 'agora') {
    return { ok: false, error: "That file wasn't exported from Agora." }
  }

  if (typeof envelope.version === 'number' && envelope.version > PROGRESS_VERSION) {
    return {
      ok: false,
      error: 'That file came from a newer version of Agora. Update this copy first.',
    }
  }

  if (typeof envelope.progress !== 'object' || envelope.progress === null) {
    return { ok: false, error: "That file doesn't contain progress data." }
  }

  return { ok: true, progress: normaliseProgress(envelope.progress, today) }
}

export function exportFilename(today = toDayStamp(new Date())): string {
  return `agora-progress-${today}.json`
}

/** Triggers a browser download of the current progress. */
export function downloadProgress(progress: UserProgress): void {
  const blob = new Blob([serialiseExport(progress)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = exportFilename()
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
  URL.revokeObjectURL(url)
}
