import { z } from 'zod'

const schema = z.object({
  VITE_APP_ENV: z.enum(['development', 'staging', 'production']).default('development'),
  VITE_SUPABASE_URL: z.url(),
  VITE_SUPABASE_ANON_KEY: z.string().min(20),
})

export type Env = z.infer<typeof schema>

/** Validates raw environment values. Throws a readable error naming every bad variable. */
export function parseEnv(raw: Record<string, unknown>): Env {
  const result = schema.safeParse(raw)
  if (!result.success) {
    const problems = result.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`)
    throw new Error(`Invalid environment variables: ${problems.join('; ')}`)
  }
  return result.data
}
