import { Link, Outlet } from 'react-router-dom'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { Container } from '@/components/ui/Container'
import { useSession } from '@/features/auth'
import { BRAND } from '@/lib/brand'
import { ROUTES } from '@/lib/routes'

const navLink =
  'inline-flex min-h-12 items-center px-2 font-medium text-teal-deep underline-offset-4 hover:underline'

export function LandingLayout() {
  const { data: session } = useSession()

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-10 focus:rounded focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <header>
        <Container className="flex items-center justify-between py-2">
          <Link to={ROUTES.home} className="font-serif text-2xl text-teal-deep">
            {BRAND.name}
          </Link>
          <nav aria-label="Account">
            {session ? (
              <Link to={ROUTES.app} className={navLink}>
                Open {BRAND.name}
              </Link>
            ) : (
              <Link to={ROUTES.login} className={navLink}>
                Log in
              </Link>
            )}
          </nav>
        </Container>
      </header>
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
