# NextJS with Claude – PetCare landing page

Petshop landing page built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 and shadcn/ui (Radix).

## Scripts

| Command              | Description                       |
| -------------------- | --------------------------------- |
| `npm run dev`        | Local server at http://localhost:3000 |
| `npm run build`      | Production build                  |
| `npm run lint`       | ESLint                            |
| `npm run type-check` | Generate route types + `tsc`      |
| `npm run test`       | Jest + React Testing Library (e.g. `npm run test -- hero`) |

## Structure

Follows `.claude/rules/global.md`:

```
src/
  app/
    page.tsx            # Server Component: fetches data, composes sections
    _components/        # Components used only by this page
    _data-access/       # Data Access Layer for this page
    layout.tsx
  components/ui/        # shadcn/ui primitives (shared)
  hooks/                # Custom hooks
  services/             # Business logic / external services
  lib/                  # Helpers and clients (Supabase)
  styles/globals.css    # Tailwind entry and design tokens
  types/                # Shared types and Zod schemas
```

## Environment

Copy `.env.example` to `.env.local` and fill in the Supabase values.
