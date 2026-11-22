# SafeSpace

Private peer-support web app for male college students. Trained student **listeners** talk with students in 10-minute text sessions. Peer support, not therapy.

**Stack:** React + Vite + TypeScript · React Router · Tailwind v4 · TanStack Query · Zod · Supabase (Postgres, Auth, RLS, Realtime, Edge Functions) · Vercel · Resend · Razorpay.

**Status:** Phase 0 (project scaffold) complete. Next: Phase 1 (database and security rules). See `docs/TASKS.md`.

> AI assistants: read this file, then `docs/PROJECT_BRAIN.md`, `docs/ARCHITECTURE.md`, `docs/SECURITY.md`, `docs/DECISIONS.md` and `docs/TASKS.md` before writing any code. Use `docs/AI_TASK_TEMPLATE.md` for every task.

---

## 1. Requirements

- Node.js 22 or newer (`node -v`), npm, Git
- Accounts: GitHub, Supabase, Vercel (later: Resend, Razorpay, Sentry)

## 2. First-time setup (do the steps in order)

### Step 1. Install and check

```bash
npm install
npm run check      # lint + typecheck + tests + build. Everything must pass.
```

`check` runs the same commands as CI, so if it passes locally it will pass on GitHub.

### Step 2. Put the code on GitHub

Create a **private** repository named `safespace` (do not add a README there), then:

```bash
git init
git add .
git commit -m "chore: initial project scaffold"
git branch -M main
git remote add origin https://github.com/<your-username>/safespace.git
git push -u origin main
```

In GitHub: Settings > Branches > add a rule for `main` that requires a pull request and the **CI / check** status. If your plan does not offer branch protection for private repos, follow the rule by habit: never push to `main` directly.

### Step 3. Create the Supabase development project

1. Supabase dashboard > **New project** > name `safespace-dev`.
2. Region: choose South Asia (Mumbai) if listed, otherwise the nearest.
3. Set a strong database password and save it in a password manager. You cannot read it again.
4. Open **Project Settings > API** and copy the **Project URL** and the **anon / publishable key**. Never copy the `service_role` or secret key anywhere in this repo.
5. Open **Authentication > Providers** and make sure **Email** is enabled.
6. Open **Authentication > URL Configuration**: set Site URL to `http://localhost:5173` and add `http://localhost:5173/**` and your Vercel preview URL pattern to the redirect URLs.

### Step 4. Local environment file

```bash
cp .env.example .env.local        # Windows PowerShell: copy .env.example .env.local
```

Fill in `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. Then:

```bash
npm run dev
```

Open http://localhost:5173. You should see **SafeSpace setup is working**, your Supabase host and "Reachable". If you see "Invalid environment variables", fix `.env.local` and restart.

### Step 5. Connect the Supabase CLI

```bash
npx supabase init                              # creates supabase/config.toml. Answer "n" to editor-settings prompts.
npx supabase login                             # opens the browser once
npx supabase link --project-ref <project-ref>  # the ref is the first part of your Project URL
```

From now on every database change is a migration file (see section 7).

### Step 6. Deploy to Vercel

1. Vercel > **Add New > Project** > import the GitHub repo. Framework preset: **Vite**.
2. Add the three `VITE_` variables from `.env.example` (use the dev project values for Preview).
3. Deploy and open the URL. You should see the same setup page.
4. The free Hobby plan is for building only. Real students and paid sessions are commercial use: switch to Vercel Pro and Supabase Pro first (see section 9).

### Step 7. Later accounts (not needed yet)

| Service               | When                            | What to do                                                                                                                                    |
| --------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Supabase prod project | Before the pilot                | Create `safespace-prod` on the Pro plan, link it in CI/CD, use its keys only for Vercel **Production**                                        |
| Resend + domain       | Phase 2 (auth emails)           | Add and verify your domain DNS, create an API key, set it as custom SMTP in Supabase Auth. Never commit it                                    |
| Razorpay              | Start KYC now, build in Phase 5 | Use Test mode keys in dev. Store keys with `npx supabase secrets set RAZORPAY_KEY_ID=... RAZORPAY_KEY_SECRET=... RAZORPAY_WEBHOOK_SECRET=...` |
| Sentry                | Phase 6                         | Create a project, add the DSN as a `VITE_SENTRY_DSN` variable                                                                                 |

## 3. Environment variables

| Name                                                        | Where                               | Public?                | Purpose                                                 |
| ----------------------------------------------------------- | ----------------------------------- | ---------------------- | ------------------------------------------------------- |
| `VITE_APP_ENV`                                              | `.env.local`, Vercel                | Yes                    | `development`, `staging` or `production`                |
| `VITE_SUPABASE_URL`                                         | `.env.local`, Vercel                | Yes                    | Project URL                                             |
| `VITE_SUPABASE_ANON_KEY`                                    | `.env.local`, Vercel                | Yes (protected by RLS) | Public API key                                          |
| `RAZORPAY_*`, `RESEND_API_KEY`, `SUPABASE_SERVICE_ROLE_KEY` | Supabase Edge Function secrets only | **No**                 | Server-side secrets. Never in the browser, never in git |

Anything starting with `VITE_` is shipped to every visitor. Real secrets must never use that prefix.

## 4. Folder structure

```
safespace/
├─ docs/                    project brain: read before coding
├─ public/                  static files (favicon, later PWA icons)
├─ supabase/
│  ├─ migrations/           every database change, as .sql files
│  └─ functions/            Edge Functions (payments, safety, admin)
├─ src/
│  ├─ app/                  App, providers, router, layouts, guards, error boundary
│  ├─ components/ui/        shared design-system pieces (Button, PageState)
│  ├─ features/             one folder per product area
│  │  └─ <feature>/         pages/ components/ hooks/ services/ schemas/ index.ts
│  ├─ hooks/                shared hooks
│  ├─ lib/                  env, Supabase client, query client, errors
│  ├─ styles/               Tailwind theme (design tokens)
│  └─ types/                generated database types (Phase 1)
├─ tests/                   end-to-end tests (Phase 6)
├─ .github/                 CI, Dependabot, PR template
├─ vercel.json              SPA rewrite and security headers
└─ .env.example             variable names only
```

## 5. Golden rules (full detail in `docs/ARCHITECTURE.md`)

1. Pages are thin. Pages call hooks, hooks call services, **only services talk to Supabase** (lint enforces it).
2. Other code imports a feature only through its `index.ts` (lint enforces it).
3. Every table has Row-Level Security, deny by default. Every change is a migration file.
4. Validate all input with Zod. Never trust the browser: quota, payments and safety checks run on the server.
5. Every data screen has loading, empty, error and success states (`components/ui/PageState`).
6. No secrets in the repo or in `VITE_` variables.
7. One `MainNav` component: bottom bar up to 1024px, top links above.

## 6. Daily commands

| Command                               | What it does                                                    |
| ------------------------------------- | --------------------------------------------------------------- |
| `npm run dev`                         | Start the dev server                                            |
| `npm run check`                       | Lint, typecheck, test and build (run before every pull request) |
| `npm run lint` / `typecheck` / `test` | Run one check                                                   |
| `npm run format`                      | Format all files with Prettier                                  |

## 7. Database workflow

```bash
npx supabase migration new add_profiles          # creates supabase/migrations/<time>_add_profiles.sql
# write SQL in that file, including RLS policies
npx supabase db push                             # applies it to the linked project
npx supabase gen types typescript --linked > src/types/database.types.ts
```

Rules: never edit an applied migration (add a new one), never change tables in the dashboard without a migration file, test on `safespace-dev` before `safespace-prod`.

## 8. Git workflow

- Branches: `feature/<short-name>`, `fix/<short-name>`. Never commit to `main`.
- Commits: `feat:`, `fix:`, `chore:`, `docs:`, `test:` prefixes.
- Open a pull request, wait for CI, then squash-merge. Vercel makes a preview URL for each PR.

## 9. Before real students use it

- [ ] Supabase **Pro** (no inactivity pause, daily backups) and Vercel **Pro** (commercial use)
- [ ] Custom SMTP configured; sign-up and OTP emails tested
- [ ] RLS tested for every table; Security Advisor shows no warnings
- [ ] Crisis page tested by phone (Tele-MANAS 14416, emergency 112)
- [ ] Teacher/counsellor has reviewed lessons, code of conduct and the crisis phrase list
- [ ] Privacy policy and terms reviewed; 18+ checkbox in place
- [ ] Load test run; Sentry and uptime alerts on
- [ ] `robots` noindex tag removed from `index.html` only when you want Google to list the site

## 10. Working with AI assistants

A new chat knows nothing. Attach `README.md` and the five `docs/` files, then paste the prompt in `docs/AI_TASK_TEMPLATE.md` with one task. At the end of a session, ask the assistant to update `docs/TASKS.md`, `docs/DECISIONS.md` and the status in `docs/PROJECT_BRAIN.md`, and commit them. The repository is the project's memory.

## 11. Troubleshooting

| Problem                          | Fix                                                              |
| -------------------------------- | ---------------------------------------------------------------- |
| "Invalid environment variables"  | Fill every variable in `.env.local`, then restart `npm run dev`  |
| Page refresh shows 404 on Vercel | Check `vercel.json` is in the project root                       |
| `supabase link` fails            | Run `npx supabase login` again and check the project ref         |
| Install or build errors          | Check `node -v` is 22+, delete `node_modules`, run `npm install` |
| CI fails but local passes        | Run `npm ci` then `npm run check` locally                        |
"# safespace" 
"# safespace" 
"# safespace" 
