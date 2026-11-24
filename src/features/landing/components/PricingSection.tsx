import { Container } from '@/components/ui/Container'
import { pricing } from '../content'

export function PricingSection() {
    return (
        <section aria-labelledby="pricing-title" className="py-12 lg:py-16">
            <Container>
                <div className="rounded-3xl border border-sage/60 bg-white/70 p-6 md:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-strong">
                        {pricing.eyebrow}
                    </p>
                    <h2 id="pricing-title" className="mt-2 font-serif text-3xl text-teal-deep md:text-4xl">
                        {pricing.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-ink/80">{pricing.text}</p>
                </div>
            </Container>
        </section>
    )
}