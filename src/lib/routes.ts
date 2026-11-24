export const ROUTES = {
    home: '/',
    app: '/app',
    login: '/login',
    signup: '/signup',
    start: '/start',
    listen: '/listen',
    help: '/help',
    about: '/about',
    privacy: '/privacy',
} as const

export type LoginRole = 'sharer' | 'listener'

/** Login URL that opens with a role pre-selected, for example /login?role=listener */
export function loginPath(role?: LoginRole): string {
    return role ? `${ROUTES.login}?role=${role}` : ROUTES.login
}