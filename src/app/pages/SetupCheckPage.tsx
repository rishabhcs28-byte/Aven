import { env } from '@/lib/env'
import { useSession } from '@/features/auth'
import { LoadingState } from '@/components/ui/PageState'

/** Temporary Phase 0 page. Replace with the real landing page in Phase 3. */
export function SetupCheckPage() {
  const { isLoading, isError } = useSession()
  const supabaseHost = new URL(env.VITE_SUPABASE_URL).host

  return (
    <section className="py-10">
      <h1 className="font-serif text-4xl text-teal-deep">SafeSpace setup is working</h1>
      <dl className="mt-8 grid max-w-md grid-cols-[auto_1fr] gap-x-6 gap-y-3">
        <dt className="text-ink/70">Environment</dt>
        <dd>{env.VITE_APP_ENV}</dd>
        <dt className="text-ink/70">Supabase project</dt>
        <dd>{supabaseHost}</dd>
        <dt className="text-ink/70">Supabase connection</dt>
        <dd>
          {isLoading ? <LoadingState label="Checking" /> : isError ? 'Not reachable' : 'Reachable'}
        </dd>
      </dl>
    </section>
  )
}
