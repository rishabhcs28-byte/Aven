# Supabase

- `migrations/`: one SQL file per change. Never edit an applied file; add a new one.
- `functions/`: Edge Functions (TypeScript on Deno) for payments, safety flags and admin actions.

Commands (run from the project root):

```bash
npx supabase init            # once
npx supabase login
npx supabase link --project-ref <ref>
npx supabase migration new <name>
npx supabase db push
npx supabase gen types typescript --linked > src/types/database.types.ts
npx supabase functions new <name>
npx supabase functions deploy <name>
npx supabase secrets set KEY=value
```

Use `safespace-dev` for all experiments. Apply to `safespace-prod` only after testing.
