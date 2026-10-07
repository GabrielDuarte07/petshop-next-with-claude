# NextJS with Claude – PetCare landing page

Petshop landing page built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 and shadcn/ui (Radix).

## Features

### Landing page (`/`)

- **Site header** – PetCare brand with paw icon and a "Book now" button that jumps to the contact section.
- **Hero** – headline, "Trusted by 2,000+ pet parents" badge, two calls to action ("Book an appointment" and "See our services") and a dog/cat illustration made from Lucide icons.
- **Services section** (`#services`) – responsive grid (1/2/3 columns) of service cards, each with icon, title, description and price:
  - Bath & Grooming – from $35
  - Veterinary Care – from $50
  - Daycare – from $25/day
  - Boarding – from $40/night
  - Styling & Spa – from $45
  - Pet Shop – visit our store
- **Footer / contact** (`#contact`) – phone, address and opening hours (Mon–Sat, 8am–6pm).
- **SEO metadata** – page title and description set in the root layout.
- **Fonts** – Geist Sans and Geist Mono via `next/font`.

### Architecture

- Server Component first: `page.tsx` fetches data and composes presentational sections.
- Data Access Layer: `getServices()` in `_data-access/` returns the service list (static for now, ready to be swapped for a database query).
- Page-private components in `_components/`; shared shadcn/ui primitives in `components/ui/` (currently `Button`).
- Supabase clients ready to use (`@supabase/ssr`): `lib/supabase/server.ts` (cookie-based, for Server Components/Actions/Route Handlers) and `lib/supabase/client.ts` (browser).
- Shared Zod schemas in `types/schemas.ts` (placeholder example schema), with React Hook Form + `@hookform/resolvers` installed for forms.

### Testing

Jest + React Testing Library (jsdom) with tests for `Hero`, `Services` and `getServices`.

### Claude Code setup

- Project rules in `.claude/rules/global.md` and conventions in `CLAUDE.md`.
- Custom commands: `/new-rule` and `/update-rule`.
- Skills: `frontend-design`, `vercel-react-best-practices`, `web-design-guidelines`.
- Hooks: `SessionStart` (welcome/context message) and `Stop` (asks Claude to review its work before finishing).
- MCP servers (`.mcp.json`): Context7 (library docs) and Chrome DevTools.

## Scripts

| Command              | Description                       |
| -------------------- | --------------------------------- |
| `npm run dev`        | Local server at http://localhost:3000 |
| `npm run build`      | Production build                  |
| `npm run start`      | Serve the production build        |
| `npm run lint`       | ESLint                            |
| `npm run type-check` | Generate route types + `tsc`      |
| `npm run test`       | Jest + React Testing Library (e.g. `npm run test -- hero`) |

## Structure

Follows `.claude/rules/global.md`:

```
src/
  app/
    page.tsx            # Server Component: fetches data, composes sections
    layout.tsx          # Root layout, fonts and metadata
    _components/        # Hero, Services, ServiceCard, SiteHeader, SiteFooter (+ tests)
    _data-access/       # getServices() Data Access Layer (+ test)
  components/ui/        # shadcn/ui primitives (shared)
  hooks/                # Custom hooks
  services/             # Business logic / external services
  lib/                  # Helpers (utils) and Supabase clients
  styles/globals.css    # Tailwind entry and design tokens
  types/                # Shared types and Zod schemas
```

## Environment

Copy `.env.example` to `.env.local` and fill in the Supabase values:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

The `context7` MCP server also expects `CONTEXT7_MCP_TOKEN_CLAUDE` in your environment.
