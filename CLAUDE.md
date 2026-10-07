# Project: [Project name]

## Tech Stack
- Next.js 16 (App Router), React 19, Typescript
- TailwindCSS 4, shadcn/ui
- React Hook form + Zod (validation)
- Server Component First

## Comands
- `npm run dev` - local server (port 3000)
- `npm run build` - production build

## Architecture
- App Router: Routes at `app/`, grouped by `(group)/`
- Server Components by default - only add `use client` when hooks/events/browser APIs are necessary
- Mutation via Server Actions at `actions/` - NEVER call the DataBase direct inside Client Components
- `components/ui/` - reusable primitives (shadcn)
- `components/` - Features Components
- `lib/` - helpers, clients (supabase, stripe), configs
- `types` - global types and Zod shared Schemes

## Code Style
- NEVER use `any` explictly - use `unknown` + type guard
- Imports: ES modules (import/export), no require()
- Tailwind only - no inline CSS, no styled-components
- New design tokens go at `tailwind.config.ts` before using
- Files name: kebab-case. Components: PascalCase

## Environment variables
- `NEXT_PUBLIC_*` only to safe values on client side
- Secrets (DB, API keys) only in Server Actions or Route Handlers
- Copy `.env.example` to `.env.local` when cloning

## workflow
- ALWAYS run `npm run type-check && npm run lint` after a series of changes
- Run one test at a time, not the complete suit: `npm run test -- <file-name>`
- Branch naming: `feat/`, `fix/`, `chore/` + description in kebab-case
- Commits in english, imperative: "Add OAuth callback handler"

## Common Gotchas
- `revalidatePath()` and `revalidateTag()` only work in Server Actions/Route Handlers
- Middleware at `middleware.ts` on root - not inside `app/`
- Supabase client in servers: use `createServerClient` (cookies). On client: `createBrowserClient`
- External images need authorized domain at `next.config.ts` (remotePatterns)