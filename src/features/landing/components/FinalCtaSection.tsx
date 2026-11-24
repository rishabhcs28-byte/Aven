import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/LinkButton'
import { ROUTES } from '@/lib/routes'
import { finalCta } from '../content'

export function FinalCtaSection() {
  return (
    <section aria-labelledby="cta-title" className="py-6 lg:py-10">
      <Container>
        <div className="rounded-3xl bg-sage/35 px-6 py-12 text-center md:py-16">
          <h2 id="cta-title" className="font-serif text-3xl text-teal-deep md:text-4xl">
            {finalCta.title}
          </h2>
          <p className="mt-3 text-ink/80">{finalCta.text}</p>
          <div className="mx-auto mt-8 flex max-w-sm flex-col gap-4">
            <LinkButton to={ROUTES.signup} fullWidth>
              {finalCta.cta}
            </LinkButton>
            <p className="text-sm text-ink/80">
              {finalCta.listenerPrompt}{' '}
              <Link
                to={ROUTES.listen}
                className="font-medium text-teal-deep underline underline-offset-4"
              >
                {finalCta.listenerLink}
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
