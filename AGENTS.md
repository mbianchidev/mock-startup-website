# AGENTS.md

## Project

- This is a statically exported personal portfolio built with Next.js 15.5, React 19, and strict TypeScript.
- The application uses the App Router and deploys to Vercel. `npm run build` writes the static site to `out/`.
- `PRODUCT.md` defines the product direction, voice, audience, and accessibility goals. Keep `README.md` aligned with setup, architecture, and deployment changes.
- Use Node.js 20 and npm to match `.github/workflows/ci.yml`.

## Commands

| Task | Command |
| --- | --- |
| Install exact dependencies | `npm ci` |
| Start development server | `npm run dev` |
| Lint and type-check | `npm run lint` |
| Run Playwright tests | `npm run test:playwright` |
| Build and validate static export | `npm run build` |
| Preview the export | `npx serve out` |
| Regenerate optimized portraits | `npm run images:optimize` |

Playwright starts the development server at `http://localhost:3000` automatically. Install Chromium with `npx playwright install chromium` if it is unavailable locally.

## Repository map

- `src/app/`: App Router pages, layouts, metadata routes, and route-specific CSS Modules.
- `src/components/`: Shared server and client components.
- `src/data/`: Structured project, customer, link, and redirect data.
- `src/lib/`: Markdown, metadata, and SEO helpers.
- `content/blog/`: Markdown posts with front matter.
- `public/`: Static images, brand assets, icons, and downloadable files.
- `tests/pages.spec.ts`: Playwright route, interaction, accessibility, metadata, redirect, and security-header coverage.
- `scripts/`: Image optimization and static redirect validation.
- `vercel.json`: Production response headers and Content Security Policy.

## Implementation conventions

- Prefer Server Components. Add `'use client'` only for browser APIs, effects, or interactive state.
- Use the `@/*` alias for imports from `src/`.
- Reuse shared components and existing CSS Modules before adding new abstractions or styles.
- Keep public routes compatible with `output: 'export'`; do not introduce runtime server dependencies.
- Use `createPageMetadata` from `src/lib/siteMetadata.ts` for canonical metadata.
- Keep essential content available in the initial HTML. Client-side interaction should enhance content, not unlock it.
- Preserve WCAG 2.2 AA behavior: semantic HTML, keyboard access, visible focus, meaningful labels, sufficient contrast, and reduced-motion support.
- Use `next/link` for internal navigation. External links opened in a new tab must use `rel="noopener noreferrer"`.
- Prefer structured data changes in `src/data/` over duplicating content inside components.
- Keep redirect declarations in `src/data/redirects.json` and their static fallback pages synchronized. The build validates this contract.
- Blog posts belong in `content/blog/` and require `title`, `date`, `author`, `category`, and `excerpt` front matter.
- If a new external origin is required, update the relevant directive in `vercel.json` instead of weakening the whole CSP.
- Do not commit generated `.next/`, `out/`, `playwright-report/`, `test-results/`, or `tests/screenshots/` files.

## Validation

Run the same checks as CI before opening a pull request:

```bash
npm run lint
npm run test:playwright
npm run build
```

For visual changes, inspect affected routes at mobile and desktop widths and confirm keyboard and reduced-motion behavior. Use `[feature] <description>` or `[fix] <description>` for pull request titles.
