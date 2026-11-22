import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSession } from '@/features/auth'
import { ErrorState, LoadingState } from '@/components/ui/PageState'

/** Wrap protected routes. Phase 2 adds role checks (sharer, listener, admin) on top of this. */
export function RequireAuth() {
  const { data: session, isLoading, isError, refetch } = useSession()
  const location = useLocation()

  if (isLoading) return <LoadingState label="Checking your session" />
  if (isError) return <ErrorState onRetry={() => void refetch()} />
  if (!session) return <Navigate to="/login" replace state={{ from: location }} />
  return <Outlet />
}
