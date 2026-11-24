import { Container } from '@/components/ui/Container'
import { weights } from '../content'

const tagStyles = [
  'bg-sage/40 text-teal-deep',
  'bg-terracotta/15 text-ink',
  'bg-teal-deep/10 text-teal-deep',
  'border border-sage bg-white/70 text-ink',
]

export function WeightsSection() {
  return (
    <section aria-labelledby="weights-title" className="py-12 lg:py-16">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-strong">
          {weights.eyebrow}
        </p>
        <h2 id="weights-title" className="mt-2 font-serif text-3xl text-teal-deep md:text-4xl">
          {weights.title}
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2.5 md:gap-3">
          {weights.tags.map((tag, i) => (
            <li
              key={tag}
              className={`rounded-full px-4 py-2 text-sm md:text-base ${tagStyles[i % tagStyles.length]}`}
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-xl rounded-2xl bg-white/60 px-4 py-3 text-ink/80">
          {weights.footnote}
        </p>
      </Container>
    </section>
  )
}
