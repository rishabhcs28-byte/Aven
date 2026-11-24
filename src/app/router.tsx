import { createBrowserRouter } from 'react-router-dom'
import { LandingPage } from '@/features/landing'
import { ROUTES } from '@/lib/routes'
import { LandingLayout } from './layouts/LandingLayout'
import { ComingSoonPage } from './pages/ComingSoonPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { SetupCheckPage } from './pages/SetupCheckPage'

// Diagnostics page exists only in development, never in the production build.
const devRoutes = import.meta.env.DEV ? [{ path: '/setup-check', element: <SetupCheckPage /> }] : []

export const router = createBrowserRouter([
  {
    element: <LandingLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: ROUTES.login, element: <ComingSoonPage title="Log in" /> },
      { path: ROUTES.signup, element: <ComingSoonPage title="Sign up" /> },
      { path: ROUTES.start, element: <ComingSoonPage title="Get started" /> },
      { path: ROUTES.listen, element: <ComingSoonPage title="Become a listener" /> },
      { path: ROUTES.help, element: <ComingSoonPage title="Help" /> },
      { path: ROUTES.about, element: <ComingSoonPage title="About" /> },
      { path: ROUTES.privacy, element: <ComingSoonPage title="Privacy" /> },
      { path: ROUTES.app, element: <ComingSoonPage title="Your space" /> },
      ...devRoutes,
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
