# Architecture

## Layers

`page -> hook (TanStack Query) -> service -> Supabase client`

- **Pages** (`features/<x>/pages`): layout and wiring only.
- **Hooks** (`features/<x>/hooks`): data fetching, mutations, caching, cache keys.
- **Services** (`features/<x>/services`): plain async functions. The only code that imports `@/lib/supabase`. Convert errors to `AppError` with a safe user message.
- **Schemas** (`features/<x>/schemas`): Zod schemas shared by forms and services.
- Each feature exposes a public API in `index.ts`. Do not deep-import another feature.

## Naming

Components `PascalCase.tsx`. Hooks `useThing.ts`. Services `thingService.ts`. Schemas `thingSchemas.ts`. Routes kebab-case. Database tables and columns `snake_case`. Query keys are arrays starting with the feature name.

## Routing and layouts

`PublicLayout` (landing, role choice, login, signup, help). `SharerLayout`, `ListenerLayout` (with `MainNav`), `FlowLayout` (back arrow, no nav), `AdminLayout` (desktop). Protected groups use `RequireAuth` plus a role check. Large pages load with the route `lazy` option.

## Responsive rules

Three sizes: up to 767px, 768 to 1024px, 1025px and up. `MainNav` is one component: bottom bar up to 1024px, top links above. Sheets are bottom sheets on small screens and centered modals (max 480px) on desktop. Tap targets are at least 48px.

## Data and security model

- Postgres with RLS on every table, deny by default, policies per role.
- Public listener data is exposed through a view with only safe fields (nickname, year, topics). Real names stay in private tables.
- Logic that must be all-or-nothing (booking with quota check) lives in database functions. Webhooks, safety flags and admin actions live in Edge Functions.
- Wrap `auth.uid()` as `(select auth.uid())` in policies and index every column used in a policy.

## Realtime

Open realtime channels only in the session room and close them on unmount. Persist messages before broadcast, reconnect with backoff and fetch messages after the last id. Never log message text.

## Errors and states

Services throw `AppError`. Screens render `LoadingState`, `EmptyState` or `ErrorState`. A top-level `ErrorBoundary` prevents blank pages. Report errors to Sentry in Phase 6.

## Performance

Paginate every list, use route-level code splitting, keep the first bundle small, avoid refetch storms with sensible `staleTime`.

## Testing

Vitest for schemas, services and pure logic. Playwright for the main click paths at 390, 768 and 1280px (Phase 6). Database tests for RLS.
