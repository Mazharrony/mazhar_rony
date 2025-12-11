# Copilot Instructions for Mazhar Rony Portfolio (Next.js)

## Project Overview
- **Frameworks:** Next.js 15 (App Router), React, Framer Motion
- **Features:** Multi-language (i18n), dark/light theme, SEO, responsive, accessible
- **Structure:**
  - `app/` — Next.js routes, layouts, sitemap, robots
  - `src/components/` — React UI components (use `'use client'` for hooks/animations)
  - `lib/i18n/` — Language detection, context, provider
  - `lib/ThemeContext.tsx` — Theme context/provider
  - `locales/` — Translation files per language
  - `public/` — Static assets (images, OG images, robots.txt)

## Key Workflows
- **Development:**
  - Start: `npm run dev` (Next.js server at http://localhost:3000)
  - Build: `npm run build` (outputs to `build/`)
  - Test: `npm test` (interactive watch mode)
- **Migration:**
  - Use `package-next.json` for Next.js dependencies
  - Backup old config: `cp package.json package-react-backup.json`
  - Update imports to Next.js (`next/link`, `next/image`)
- **Translations:**
  - Use `t()` in components for i18n
  - Add new language: copy `locales/en/common.json` and translate
- **Theming:**
  - Edit CSS variables in `src/App.css` for colors
  - Theme toggling via header, persisted in localStorage

## Patterns & Conventions
- **Client Components:** Add `'use client'` to top of files using hooks/animations
- **SEO:**
  - JSON-LD, Open Graph, Twitter Cards in `app/layout.tsx`
  - Dynamic sitemap: `app/sitemap.ts`
  - Robots.txt: `app/robots.ts`
- **Language Detection:**
  - Auto-detect in `lib/i18n/LanguageDetector.tsx`
  - RTL support for Arabic
- **Accessibility:**
  - Use semantic HTML, ARIA attributes, and WCAG guidelines

## Integration Points
- **Framer Motion:** For animations in UI components
- **Next.js:** Routing, SSR, SEO, image optimization
- **External Links:** Social profiles in JSON-LD (`app/layout.tsx`)

## Example: Adding a New Page
1. Create a folder in `app/` (e.g., `app/newpage/`)
2. Add `page.tsx` with content
3. Update translations in `locales/*/common.json`
4. Add OG image to `public/`

## References
- See `README-NEXT.md` for full migration and setup guide
- See `lib/i18n/LanguageDetector.tsx` and `ThemeContext.tsx` for context usage
- See `src/components/Header-next.tsx` for i18n and theme toggle example

---
**Feedback:** If any section is unclear or missing, please specify so it can be improved for future AI agents.
