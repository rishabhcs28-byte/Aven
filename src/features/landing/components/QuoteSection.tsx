import { Container } from '@/components/ui/Container'
import { quote } from '../content'

export function QuoteSection() {
  return (
    <section aria-label="A thought" className="py-12 lg:py-16">
      <Container>
        <figure className="mx-auto max-w-2xl text-center">
          <hr className="mx-auto mb-8 w-10 border-sage" />
          <blockquote className="font-serif text-3xl italic leading-snug text-teal-deep md:text-4xl">
            “{quote.text}”
          </blockquote>
          <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-ink/70">
            {quote.author}
          </figcaption>
        </figure>
      </Container>
    </section>
  )
}
