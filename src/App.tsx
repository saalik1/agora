import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Shell } from '@/components/layout/Shell'
import { useTheme } from '@/lib/use-theme'
import { selectSettings, useProgress } from '@/store/use-progress'
import { Home } from '@/pages/Home'
import { Learn } from '@/pages/Learn'
import { LessonPage } from '@/pages/LessonPage'
import { Practice } from '@/pages/Practice'
import { Library } from '@/pages/Library'
import { ArgumentPage, ConceptPage } from '@/pages/LibraryDetail'
import { ProgressPage } from '@/pages/Progress'
import { Settings } from '@/pages/Settings'
import { NotFound } from '@/pages/NotFound'

export function App() {
  const hydrate = useProgress((s) => s.hydrate)
  const hydrated = useProgress((s) => s.hydrated)
  const settings = useProgress(selectSettings)

  useEffect(() => {
    void hydrate()
  }, [hydrate])

  useTheme(settings.theme, settings.reducedMotion)

  // Holding the first paint until stored progress is read avoids a flash of
  // "0 XP, no streak" for a returning user.
  if (!hydrated) {
    return <div className="min-h-dvh bg-app" aria-busy="true" />
  }

  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<Home />} />
        <Route path="learn" element={<Learn />} />
        <Route path="learn/lesson/:lessonId" element={<LessonPage />} />
        <Route path="practice" element={<Practice />} />
        <Route path="library" element={<Library />} />
        <Route path="library/concept/:conceptId" element={<ConceptPage />} />
        <Route path="library/argument/:argumentId" element={<ArgumentPage />} />
        <Route path="progress" element={<ProgressPage />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
