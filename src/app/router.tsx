import { createBrowserRouter } from 'react-router-dom'
import { PublicLayout } from './layouts/PublicLayout'
import { NotFoundPage } from './pages/NotFoundPage'
import { SetupCheckPage } from './pages/SetupCheckPage'

/**
 * Route groups are added here as phases land:
 *  - public:   PublicLayout            (landing, role choice, login, signup, /help)
 *  - sharer:   RequireAuth + SharerLayout   (Phase 3)
 *  - listener: RequireAuth + ListenerLayout (Phase 4)
 *  - admin:    RequireAuth + AdminLayout    (Phase 4, desktop only)
 * Load large pages with the route `lazy` option so each page is its own chunk.
 */
export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { index: true, element: <SetupCheckPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
