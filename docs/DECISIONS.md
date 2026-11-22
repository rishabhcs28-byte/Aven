# Decisions

| Date    | Decision                                       | Reason                                                                      |
| ------- | ---------------------------------------------- | --------------------------------------------------------------------------- |
| 2026-11 | Vite + React SPA, not Next.js                  | App is behind login; fewer server concepts to learn; backend is Supabase    |
| 2026-11 | Supabase client + SQL migrations, no Prisma    | Prisma's direct connection can bypass RLS; fewer layers                     |
| 2026-11 | Razorpay Checkout for payments                 | RBI-authorised aggregator; webhook confirms payment; replaces manual UPI QR |
| 2026-11 | 10-minute sessions, chat only in MVP           | Simpler pilot; calls later                                                  |
| 2026-11 | Email-only notifications                       | Avoids lock-screen exposure of a mental-health app                          |
| 2026-11 | Admin is desktop only                          | Reduces scope                                                               |
| 2026-11 | Tailwind only, no Ant Design, Redux or Zustand | Custom design; TanStack Query covers server state                           |
