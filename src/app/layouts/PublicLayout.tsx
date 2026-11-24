import { Link, Outlet } from 'react-router-dom'

export function PublicLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:rounded focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <header className="px-5 py-4">
        <Link to="/" className="font-serif text-xl text-teal-deep">
          Aven
        </Link>
      </header>
      <main id="main" className="mx-auto w-full max-w-5xl flex-1 px-5 pb-16">
        <Outlet />
      </main>
    </div>
  )
}
