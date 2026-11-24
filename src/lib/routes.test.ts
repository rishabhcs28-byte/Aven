import { describe, expect, it } from 'vitest'
import { loginPath } from './routes'

describe('loginPath', () => {
  it('returns the plain login route without a role', () => {
    expect(loginPath()).toBe('/login')
  })
  it('adds the role as a query parameter', () => {
    expect(loginPath('listener')).toBe('/login?role=listener')
  })
})
