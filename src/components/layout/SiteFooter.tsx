import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { BRAND } from '@/lib/brand'
import { ROUTES } from '@/lib/routes'

const links = [
    { to: ROUTES.about, label: 'About' },
    { to: ROUTES.privacy, label: 'Privacy' },
    { to: ROUTES.listen, label: 'Become a Listener' },
    { to: ROUTES.help, label: 'Help' },
] as const

export function SiteFooter() {
    return (
        <footer className="bg-teal-deep text-cream">
            <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="font-serif text-2xl">{BRAND.name}</p>
                    <p className="mt-2 text-sm text-cream/80">Made with care for college students in India.</p>
                </div>
                <nav aria-label="Footer">
                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                        {links.map((link) => (
                            <li key={link.to}>
                                <Link to={link.to} className="inline-flex min-h-12 items-center underline-offset-4 hover:underline">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </footer>
    )
}