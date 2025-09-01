# AGENTS.md - Mock Startup Website

## Dev environment tips

- This is a Next.js 15 project with React 19 and TypeScript
- Use `npm run dev` to start the development server on http://localhost:3000
- Run `npm install` to add new dependencies to the project
- Use `npm run build` to create a production build with static export
- The project uses static export configuration for GitHub Pages deployment
- Check `package.json` for available scripts and dependencies
- TypeScript configuration is in `tsconfig.json`
- ESLint configuration is in `.eslintrc.json`

## Testing instructions

- Find the CI plan in the `.github/workflows/static.yml` file
- Currently no test framework is configured - tests would need to be added if required
- Run `npm run build` to ensure the project builds successfully
- Run `npm run lint` to check code quality and TypeScript types
- The build process creates a static export in the `out/` directory
- Always run `npm run build` and `npm run lint` after making significant changes
- Test the static export locally with `npx serve out` after building

## Troubleshooting Common Issues

### Dependency Issues
If you encounter weird dependency issues or package conflicts:
- Delete `package-lock.json` file
- Delete `node_modules` folder
- Run `npm install` again
- This often resolves version conflicts and ensures a clean dependency tree

### Content Security Policy (CSP) Errors
If you see CSP violations in the browser console:
- Check if external scripts (like Font Awesome, analytics) are being blocked
- Verify the CSP headers in `next.config.js` allow the required domains
- For Font Awesome specifically, ensure `kit.fontawesome.com` is allowlisted

### Hydration Errors
If you encounter React hydration mismatches:
- Ensure server-rendered content matches client-side content exactly
- Check for browser-specific APIs being used during SSR
- Use `useEffect` for browser-only code
- Consider using `dynamic` imports with `{ ssr: false }` for client-only components

## Build & deployment process

- The project is configured for static export to GitHub Pages
- Build command: `npm run build` creates optimized static files
- Output directory: `out/` (automatically generated)
- The CI workflow sets `NEXT_BASE_PATH` for proper GitHub Pages subpath routing
- Production builds should pass all linting and type checking
- Static assets are optimized and images are unoptimized for static hosting

## PR instructions

- Title format: `[feature/fix] <descriptive-title>`
- Always run `npm run lint` and `npm run build` before committing
- Ensure the static export builds successfully
- Check that TypeScript compilation passes without errors
- Test functionality in development mode with `npm run dev`
- Verify static export works with `npx serve out` after building
- Follow the existing code style and component patterns
- Update documentation if adding new features or changing functionality