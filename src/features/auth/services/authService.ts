import { supabase } from '@/lib/supabase'
import { AppError } from '@/lib/errors'

export type { Session } from '@supabase/supabase-js'
import type { Session } from '@supabase/supabase-js'

export async function getSession(): Promise<Session | null> {
  const { data, error } = await supabase.auth.getSession()
  if (error) throw new AppError('auth/session', 'We could not check your session.', error)
  return data.session
}

/** Subscribes to sign-in, sign-out and token refresh. Returns an unsubscribe function. */
export function onAuthChange(callback: (session: Session | null) => void): () => void {
  const { data } = supabase.auth.onAuthStateChange((_event, session) => callback(session))
  return () => data.subscription.unsubscribe()
}

export async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut()
  if (error) throw new AppError('auth/sign-out', 'We could not sign you out. Try again.', error)
}
