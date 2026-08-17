import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="py-16 text-center">
      <p className="font-mono text-sm text-faint">404</p>
      <h1 className="mt-2 text-xl font-semibold text-ink">That page does not exist</h1>
      <p className="mt-2 text-sm text-muted">The link may be out of date, or mistyped.</p>
      <Link
        to="/"
        className="mt-6 inline-flex h-9 items-center rounded-md px-4 text-sm font-medium text-[#04211d]"
        style={{ backgroundColor: 'var(--c-accent)' }}
      >
        Go home
      </Link>
    </div>
  )
}
