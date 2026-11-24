import { Container } from '@/components/ui/Container'
import { steps } from '../content'

export function HowItWorksSection() {
    return (
        <section aria-labelledby="how-title" className="py-12 lg:py-16">
            <Container>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-strong">
                    Simple steps
                </p>
                <h2 id="how-title" className="mt-2 font-serif text-3xl text-teal-deep md:text-4xl">
                    How it works
                </h2>
                <ol className="mt-8 lg:grid lg:grid-cols-3 lg:gap-6">
                    {steps.map((step, i) => (
                        <li
                            key={step.title}
                            className="relative pb-8 pl-14 last:pb-0 lg:rounded-2xl lg:border lg:border-sage/50 lg:bg-white/70 lg:p-6"
                        >
                            <span
                                aria-hidden="true"
                                className="absolute left-0 top-0 flex size-9 items-center justify-center rounded-full bg-teal-deep font-semibold text-cream lg:static lg:mb-4"
                            >
                                {i + 1}
                            </span>
                            {i < steps.length - 1 ? (
                                <span aria-hidden="true" className="absolute bottom-0 left-[17px] top-10 w-px bg-sage lg:hidden" />
                            ) : null}
                            <h3 className="font-serif text-xl text-teal-deep">{step.title}</h3>
                            <p className="mt-1 text-ink/80">{step.text}</p>
                        </li>
                    ))}
                </ol>
            </Container>
        </section>
    )
}