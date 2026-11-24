import { Link } from 'react-router-dom'
import { Lock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/LinkButton'
import { ROUTES } from '@/lib/routes'
import { hero } from '../content'
import { HeroIllustration } from './HeroIllustration'

function HandUnderline() {
    return (
        <svg
            viewBox="0 0 200 12"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
            className="absolute -bottom-2 left-0 h-3 w-full"
        >
            <path
                d="M2 8c30-6 62-7 96-4s62 3 100-2"
                fill="none"
                strokeWidth="3"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                className="stroke-terracotta"
            />
        </svg>
    )
}

export function HeroSection() {
    return (
        <section aria-labelledby="hero-title" className="pb-12 pt-6 lg:pb-20 lg:pt-12">
            <Container className="grid items-center gap-y-8 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0">
                <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
                    <p className="inline-flex items-center gap-2 rounded-full bg-sage/40 px-3 py-1 text-sm font-medium text-teal-deep">
                        <span aria-hidden="true" className="size-1.5 rounded-full bg-teal-deep" />
                        {hero.badge}
                    </p>
                    <h1
                        id="hero-title"
                        className="mt-5 font-serif text-4xl leading-[1.12] text-teal-deep md:text-5xl lg:text-6xl"
                    >
                        {hero.titleStart}{' '}
                        <span className="relative inline-block">
                            {hero.titleEmphasis}
                            <HandUnderline />
                        </span>
                    </h1>
                </div>

                <HeroIllustration className="mx-auto w-full max-w-md lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none" />

                <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
                    <p className="mt-0 max-w-xl text-lg text-ink/80 lg:mt-6">{hero.body}</p>
                    <div className="mt-8 flex max-w-sm flex-col gap-3">
                        <LinkButton to={ROUTES.signup} fullWidth>
                            {hero.cta}
                        </LinkButton>
                        <p className="flex items-center gap-2 text-sm text-ink/75">
                            <Lock aria-hidden="true" className="size-4 shrink-0" />
                            {hero.note}
                        </p>
                        <p className="text-sm text-ink/80">
                            {hero.listenerPrompt}{' '}
                            <Link to={ROUTES.listen} className="font-medium text-teal-deep underline underline-offset-4">
                                {hero.listenerLink}
                            </Link>
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}