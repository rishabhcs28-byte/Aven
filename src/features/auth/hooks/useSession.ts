import { useEffect } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getSession, onAuthChange } from '../services/authService'

export const sessionQueryKey = ['auth', 'session'] as const

/** Current Supabase session, kept in sync with sign-in, sign-out and token refresh. */
export function useSession() {
  const queryClient = useQueryClient()

  useEffect(
    () => onAuthChange((session) => queryClient.setQueryData(sessionQueryKey, session)),
    [queryClient],
  )

  return useQuery({ queryKey: sessionQueryKey, queryFn: getSession, staleTime: Infinity })
}
