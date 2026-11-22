# Security checklist

## Always

- [ ] RLS enabled on every new table, with policies per role and a test
- [ ] No `service_role` or other secret in the browser, git, logs or `VITE_` variables
- [ ] All input validated with Zod in the browser **and** again on the server
- [ ] Quota, payment and safety decisions made on the server only
- [ ] Rate limits on login, OTP, messages and booking
- [ ] Generic auth errors (no account enumeration)
- [ ] Chat text rendered as text (React escapes it); never `dangerouslySetInnerHTML`
- [ ] Logs hold ids and timings, never message content or personal data
- [ ] Caches (service worker, query cache) cleared on logout; never cache signed-in API responses

## Payments

- [ ] Razorpay order created on the server; amount set on the server
- [ ] Webhook signature verified; processing idempotent by payment id
- [ ] Browser "success" is never trusted

## Privacy

- [ ] Collect the minimum; deletion removes profile, sessions, messages and notes
- [ ] Retention period for messages decided and documented
- [ ] 18+ only; privacy policy and terms reviewed before launch

## Before launch

- [ ] Supabase Security Advisor clean
- [ ] Independent review of all RLS policies
- [ ] Content-Security-Policy added to vercel.json once all domains are known
- [ ] Incident plan written (detect, contain, notify, fix)
