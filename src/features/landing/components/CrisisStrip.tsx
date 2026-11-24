import { Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/LinkButton'
import { HELPLINES } from '@/lib/helplines'
import { ROUTES } from '@/lib/routes'
import { crisis } from '../content'

export function CrisisStrip() {
  const line = HELPLINES.teleManas
  return (
    <section aria-label="Crisis support" className="py-8">
      <Container>
        <div className="flex flex-col gap-3 rounded-2xl bg-terracotta/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <Phone aria-hidden="true" className="size-5 shrink-0 text-teal-deep" />
            <span>
              {crisis.lead}{' '}
              <a href={line.href} className="font-semibold underline underline-offset-4">
                {line.name}: {line.number}
              </a>{' '}
              ({line.hours})
            </span>
          </p>
          <LinkButton to={ROUTES.help} variant="secondary">
            {crisis.cta}
          </LinkButton>
        </div>
      </Container>
    </section>
  )
}
