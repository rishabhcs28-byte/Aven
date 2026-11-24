# Aven project brain

## What it is

Private peer-support web app for male college students. Students talk in text chat to trained student "listeners". Peer support, not therapy.

## Roles

- **sharer**: student who comes to talk
- **listener**: vetted, trained student volunteer
- **admin**: founder team, desktop only

## Stack

React + Vite + TypeScript, React Router, Tailwind v4, TanStack Query, Zod, React Hook Form,
Supabase (Postgres, Auth, RLS, Realtime, Edge Functions), Vercel, Resend (email), Razorpay (UPI). PWA first. English only.

## Product rules

- 2 free sessions, then paid via Razorpay Checkout. Each session is **10 minutes**. Chat only in the MVP (calls later).
- Notifications: email only. Admin is desktop only.
- Anonymity: nickname only, no photos, initial-letter avatars.
- Sessions are time-limited: show a 10:00 countdown and an end-of-time state.

## Safety rules

- A Help icon on every screen opens /help (Tele-MANAS 14416, emergency 112). The page works without login.
- No red alarms. Never claim absolute confidentiality. Never use the word "therapist".
- Crisis phrase checks run on the server. Flags go to an admin queue and a human follows up.
- A person at risk is never blocked: the safety screen can always be skipped.

## Design tokens

cream #F6F1E7, teal #1F4D47, sage #A8BFA9, terracotta #C9704F, ink #2B2622, brick #A8453A (delete only). Fraunces (headings), Figtree (body).
Sharer primary buttons are terracotta. Listener primary buttons are teal.

## Engineering rules

See docs/ARCHITECTURE.md and docs/SECURITY.md. In short: only services import Supabase, RLS on every table, migrations only, Zod everywhere, states for loading/empty/error, no secrets in VITE_ variables.

## Working agreement

Build mode with explanations. Small commits. Ask before schema or architecture changes. Review security-sensitive code twice.

## Current status

Phase 0 scaffold complete. Next: Phase 1 database.

## Next task

Design the Phase 1 schema and RLS policies; get approval before writing migrations.
