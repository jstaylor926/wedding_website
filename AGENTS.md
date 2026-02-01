# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
This is a Next.js 15 wedding website for Taylor and Josh's Las Vegas wedding (May 1st, 2026). The site uses the App Router, TypeScript, Tailwind CSS v4, and Turbopack. Package management is via pnpm (version 10.14.0+).

## Development Commands

### Essential Commands
- **Start dev server**: `npm run dev` (uses Turbopack)
- **Build**: `npm run build` (uses Turbopack)
- **Production server**: `npm start`
- **Lint**: `npm run lint` (uses ESLint 9 with Next.js config)

### Notes
- This project does NOT have a test suite configured
- No custom build scripts or pre-commit hooks are present
- Use pnpm if installing new packages (configured as packageManager)

## Architecture

### Content Management
All wedding content (schedule, travel, FAQ, registry) is centralized in `assets/wedding-content.json`. This JSON file is the single source of truth for:
- Event schedule (Wednesday welcome drinks, Friday ceremony/reception)
- Travel information (airport, hotel, room block details)
- Registry links and messaging
- FAQ questions and answers

When updating content, edit this file rather than hardcoding values in components.

### Page Structure
The site uses Next.js App Router with a nested layout pattern:
- **Root layout** (`app/layout.tsx`): Applies global background image (`/bg.png`), Adobe Typekit fonts (Gizmo, Pollen), and renders the Navbar
- **Page-specific layouts**: Each route (travel, faq, schedule, registry) has its own layout that wraps content in a styled card with backdrop blur and border
- **Home page** (`app/page.tsx`): Special layout with desktop split-screen (navigation buttons left, save-the-date image right) and mobile-only card view

### Routing & Middleware
`middleware.ts` restricts access to only allowed routes (`/`, `/travel`, `/schedule`, `/registry`, `/faq`) and redirects all other paths to home. When adding new routes, update the `allowedRoutes` array in middleware.

### Component Organization
- **Navbar** (`components/Navbar.tsx`): Client component with responsive hamburger menu (mobile) and horizontal links (desktop). Hides automatically on home page for desktop. Has a "disabled" state for unreleased pages (controlled via `disabled: true` in `navLinks` array)
- **Timeline** (`components/Timeline.tsx`): Reusable timeline component (currently unused but available for schedule enhancements)

### Styling System
- **Fonts**: 
  - Gizmo (Adobe Typekit) for headings and navigation via `.font-gizmo`
  - Pollen Web (Adobe Typekit) for body text in page layouts via `.font-pollen`
  - Geist Sans/Mono as Next.js defaults
- **Brand colors**: CSS variables `--brand-red` (#ff000d) and `--brand-red-hover` (#ff4d57) defined in `app/globals.css`
- **Background**: Fixed global background (`/bg.png`) applied in root layout
- **Card pattern**: Inner pages use consistent white-bordered card on semi-transparent dark background

### Path Aliases
TypeScript is configured with `@/*` alias pointing to project root (e.g., `@/components/Navbar`, `@/assets/wedding-content.json`)

## Common Patterns

### Adding a New Page
1. Create route folder in `app/` (e.g., `app/newpage/`)
2. Add `layout.tsx` following the pattern in `app/travel/layout.tsx` (card with backdrop blur)
3. Add `page.tsx` with content, importing from `assets/wedding-content.json` if needed
4. Update `middleware.ts` `allowedRoutes` array to include new route
5. Update `navLinks` in `components/Navbar.tsx` to add navigation link
6. Optionally add corresponding content section to `assets/wedding-content.json`

### Updating Wedding Information
Edit `assets/wedding-content.json` - changes automatically propagate to all pages that import content.

### Managing Public Assets
All images/SVGs go in `public/` directory. The project uses many themed SVG assets (disco balls, chips, cherries, etc.) referenced by pages. Use Next.js `Image` component for optimization when possible.

### Disabled Navigation Items
To temporarily disable a route while keeping it visible, set `disabled: true` in the `navLinks` array in `components/Navbar.tsx`. The link will appear grayed out and non-clickable.
