# ZAREW Mustang Rental — Project Rules

## Tech Stack
- **Framework:** Next.js 15 (App Router) + TypeScript strict
- **Styling:** Tailwind CSS 4 + shadcn/ui (dark theme, amber/gold accents)
- **Database:** Supabase (PostgreSQL) + Supabase Auth
- **Payments:** Stripe
- **Email:** Resend
- **SMS:** Twilio
- **PDF:** @react-pdf/renderer
- **Forms:** react-hook-form + zod
- **State:** Zustand (client), Server Components (default)
- **Charts:** Recharts
- **Animations:** Framer Motion
- **Package manager:** pnpm

## Project Structure
```
src/
  app/
    (public)/        — Customer-facing pages (SK language)
    admin/           — Admin dashboard & CRM (SK/EN mix)
    api/             — API routes & webhooks
  components/
    ui/              — shadcn/ui base components
    public/          — Public website components
    admin/           — Admin dashboard components
  lib/
    supabase/        — Supabase client/server utils
    stripe/          — Stripe helpers
    email/           — Resend templates
    sms/             — Twilio helpers
    pdf/             — PDF generation (contracts, vouchers)
    validations/     — Shared Zod schemas
    utils.ts         — Utility functions
  hooks/             — Custom React hooks
  stores/            — Zustand stores
  types/             — TypeScript types & interfaces
```

## Conventions
- UI language: Slovak (customer pages), SK/EN mix (admin)
- TypeScript strict — no `any` types
- Zod schemas shared between frontend and backend
- Server Components by default, client only when needed
- Conventional commits: feat:, fix:, refactor:, etc.
- Booking number format: MUS-{YEAR}-{SEQ} (e.g. MUS-2026-001)
- 3-hour buffer between rentals
- Deposit: 1000 EUR, over-limit km: 0.40 EUR/km

## Do NOT
- Read, write, or log .env files
- Use `any` types
- Skip loading states or error handling
- Commit without running `npx tsc --noEmit` first
