import type { ReactNode } from 'react'
import { Button } from './Button'

/** Every data-driven screen must render one of these for loading, empty and error. */
export function LoadingState({ label = 'Loading' }: { label?: string }) {
  return (
    <div role="status" aria-live="polite" className="flex flex-col items-center gap-3 py-16">
      <span
        aria-hidden="true"
        className="size-8 animate-spin rounded-full border-4 border-sage border-t-teal-deep"
      />
      <p className="text-ink/70">{label}…</p>
    </div>
  )
}

export function EmptyState({
  title,
  message,
  action,
}: {
  title: string
  message?: string
  action?: ReactNode
}) {
  return (
    <div className="flex flex-col items-center gap-3 py-16 text-center">
      <h2 className="font-serif text-2xl text-teal-deep">{title}</h2>
      {message ? <p className="max-w-md text-ink/70">{message}</p> : null}
      {action}
    </div>
  )
}

export function ErrorState({
  title = 'Something went wrong',
  message = 'Please try again.',
  onRetry,
}: {
  title?: string
  message?: string
  onRetry?: () => void
}) {
  return (
    <div role="alert" className="flex flex-col items-center gap-3 py-16 text-center">
      <h2 className="font-serif text-2xl text-teal-deep">{title}</h2>
      <p className="max-w-md text-ink/70">{message}</p>
      {onRetry ? (
        <Button variant="secondary" onClick={onRetry}>
          Try again
        </Button>
      ) : null}
    </div>
  )
}
