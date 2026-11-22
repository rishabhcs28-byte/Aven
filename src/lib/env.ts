import { parseEnv } from './env.schema'

/** The only place environment variables are read. Fails fast at startup if any are missing. */
export const env = parseEnv(import.meta.env)
