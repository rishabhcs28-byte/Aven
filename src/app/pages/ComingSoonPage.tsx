import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/LinkButton'
import { EmptyState } from '@/components/ui/PageState'
import { HELPLINES } from '@/lib/helplines'
import { ROUTES } from '@/lib/routes'

/** Placeholder for routes that are linked but not built yet. Always shows the crisis numbers. */
export function ComingSoonPage({ title }: { title: string }) {
  return (
    <Container className="py-12">
      <EmptyState
        title={`${title} is coming soon`}
        message="We are still building this page."
        action={
          <LinkButton to={ROUTES.home} variant="secondary">
            Back to start
          </LinkButton>
        }
      />
      <p className="mt-6 text-center text-sm text-ink/75">
        Need to talk to someone right now? Call{' '}
        <a className="font-semibold underline" href={HELPLINES.teleManas.href}>
          {HELPLINES.teleManas.name} {HELPLINES.teleManas.number}
        </a>{' '}
        ({HELPLINES.teleManas.hours}), or {HELPLINES.emergency.number} in an emergency.
      </p>
    </Container>
  )
}
