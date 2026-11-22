import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import { ErrorState } from '@/components/ui/PageState'

type State = { hasError: boolean }

/** Catches render errors so users never see a blank page. Wire Sentry in componentDidCatch (Phase 6). */
export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Unhandled render error', error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorState onRetry={() => window.location.reload()} />
    }
    return this.props.children
  }
}
