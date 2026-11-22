/** Error with a safe, user-friendly message. The raw cause is kept for logs only. */
export class AppError extends Error {
  readonly code: string
  readonly userMessage: string

  constructor(code: string, userMessage: string, cause?: unknown) {
    super(userMessage, { cause })
    this.name = 'AppError'
    this.code = code
    this.userMessage = userMessage
  }
}

/** Never show raw error text to users. Unknown errors get a generic message. */
export function toUserMessage(error: unknown): string {
  if (error instanceof AppError) return error.userMessage
  return 'Something went wrong. Please try again.'
}
