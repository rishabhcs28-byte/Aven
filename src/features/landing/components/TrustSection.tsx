import { MessageCircle, ShieldCheck, Trash2, User } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { trust } from '../content'
import type { PromiseIcon } from '../content'

const icons = { nickname: User, chat: MessageCircle, reviewed: ShieldCheck, delete: Trash2 } as const satisfies Record<PromiseIcon, unknown>

export function TrustSection() {
    return (
        <section aria-labelledby="trust-title" className="py-6 lg:py-10">
            <Container>
                <div className="rounded-3xl bg-teal-deep px-6 py-10 text-cream md:px-12 md:py-14">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">{trust.eyebrow}</p>
                    <h2 id="trust-title" className="mt-2 font-serif text-3xl md:text-4xl">
                        {trust.title}
                    </h2>
                    <ul className="mt-8 grid gap-4 md:grid-cols-2">
                        {trust.promises.map((promise) => {
                            const Icon = icons[promise.icon]
                            return (
                                <li key={promise.text} className="flex items-start gap-3">
                                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-cream/10">
                                        <Icon aria-hidden="true" className="size-5" />
                                    </span>
                                    <span className="pt-2">{promise.text}</span>
                                </li>
                            )
                        })}
                    </ul>
                    <p className="mt-8 border-t border-cream/20 pt-6 text-sm text-cream/85">{trust.disclaimer}</p>
                </div>
            </Container>
        </section>
    )
}