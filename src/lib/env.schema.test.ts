import { describe, expect, it } from 'vitest'
import { parseEnv } from './env.schema'

const valid = {
  VITE_SUPABASE_URL: 'https://abc.supabase.co',
  VITE_SUPABASE_ANON_KEY: 'x'.repeat(32),
}

describe('parseEnv', () => {
  it('accepts valid values and defaults VITE_APP_ENV to development', () => {
    expect(parseEnv(valid).VITE_APP_ENV).toBe('development')
  })
  it('rejects a bad URL and names the variable', () => {
    expect(() => parseEnv({ ...valid, VITE_SUPABASE_URL: 'nope' })).toThrow(/VITE_SUPABASE_URL/)
  })
  it('rejects a missing key', () => {
    expect(() => parseEnv({ VITE_SUPABASE_URL: valid.VITE_SUPABASE_URL })).toThrow(
      /VITE_SUPABASE_ANON_KEY/,
    )
  })
})
