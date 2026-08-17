import { useEffect } from 'react'
import type { ThemePreference } from '@/types/progress'

function resolve(theme: ThemePreference): 'dark' | 'light' {
  if (theme !== 'system') return theme
  if (typeof window === 'undefined' || !window.matchMedia) return 'dark'
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

/**
 * Applies the theme and motion preference to the document root. Kept out of the
 * store so persistence stays a plain data concern and the DOM stays a view one.
 */
export function useTheme(theme: ThemePreference, reducedMotion: boolean): void {
  useEffect(() => {
    const root = document.documentElement

    const apply = () => {
      const resolved = resolve(theme)
      root.classList.toggle('light', resolved === 'light')
      root.classList.toggle('dark', resolved === 'dark')
      root.style.colorScheme = resolved
    }

    apply()

    if (theme !== 'system' || !window.matchMedia) return
    const query = window.matchMedia('(prefers-color-scheme: light)')
    query.addEventListener('change', apply)
    return () => query.removeEventListener('change', apply)
  }, [theme])

  useEffect(() => {
    document.documentElement.classList.toggle('reduce-motion', reducedMotion)
  }, [reducedMotion])
}
