import { Link } from 'react-router-dom'
import { EmptyState } from '@/components/ui/PageState'

export function NotFoundPage() {
  return (
    <EmptyState
      title="We can't find that page"
      message="The link may be old or mistyped."
      action={
        <Link to="/" className="font-medium text-teal-deep underline">
          Go to the start
        </Link>
      }
    />
  )
}
