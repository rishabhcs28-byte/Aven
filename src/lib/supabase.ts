import { createClient } from '@supabase/supabase-js'
import { env } from './env'

/**
 * The single Supabase client. Only the services folder of each feature may import this file
 * (enforced by lint). After Phase 1, pass the generated Database type to createClient.
 */
export const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
})
