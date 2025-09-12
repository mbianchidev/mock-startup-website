# Development Guide

## 🛠️ Development Environment Setup

This guide provides comprehensive instructions for setting up and working with the Matteo Mock Startup Website development environment.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Setup](#environment-setup)
- [Development Workflow](#development-workflow)
- [Code Organization](#code-organization)
- [Best Practices](#best-practices)
- [Debugging](#debugging)
- [Performance](#performance)

## 📦 Prerequisites

### Required Software

- **Node.js**: Version 18 or higher (LTS recommended)
- **npm**: Comes with Node.js, version 9+ preferred
- **Git**: For version control
- **VS Code**: Recommended editor with extensions

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "ms-playwright.playwright"
  ]
}
```

### Browser Requirements

- **Chrome/Chromium**: For Playwright testing
- **Modern browsers**: For cross-browser testing
- **React Developer Tools**: Browser extension for debugging

## 🚀 Environment Setup

### Initial Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mbianchidev/mock-startup-website.git
   cd mock-startup-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Playwright browsers** (for testing):
   ```bash
   npx playwright install
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open browser**: Navigate to http://localhost:3000

### Environment Variables

Create a `.env.local` file for local development (optional):

```bash
# .env.local (not committed to version control)
NEXT_PUBLIC_APP_VERSION=development
NODE_ENV=development
```

### VS Code Configuration

Create `.vscode/settings.json`:

```json
{
  "typescript.preferences.includePackageJsonAutoImports": "auto",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

## 🔄 Development Workflow

### Daily Development Process

1. **Pull latest changes**:
   ```bash
   git pull origin main
   ```

2. **Create feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Make changes** and test in browser

5. **Run linting** frequently:
   ```bash
   npm run lint
   ```

6. **Test build** before committing:
   ```bash
   npm run build
   ```

### Git Workflow

#### Branch Naming Convention

- `feature/description` - New features
- `fix/description` - Bug fixes  
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

#### Commit Message Format

Follow conventional commits:

```bash
# Examples
git commit -m "feat: add testimonial carousel component"
git commit -m "fix: resolve mobile navigation issue"
git commit -m "docs: update README with deployment guide"
git commit -m "style: improve button hover animations"
```

### Code Review Process

1. **Self-review** your changes before creating PR
2. **Test thoroughly** on different screen sizes
3. **Check accessibility** with browser dev tools
4. **Ensure build passes** with `npm run build`
5. **Create descriptive PR** with context and screenshots

## 📁 Code Organization

### Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── [routes]/          # Route-specific pages
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── [others]/          # Feature components
├── types/                 # TypeScript type definitions
├── data/                  # Static data files
└── lib/                   # Utility functions
```

### Component Architecture

#### Component Structure

```typescript
// Component template
interface ComponentProps {
  // Define props with clear types
  title: string;
  isVisible?: boolean;
  children?: React.ReactNode;
}

export default function Component({ 
  title, 
  isVisible = true, 
  children 
}: ComponentProps) {
  // Component logic here
  
  return (
    <div className="component-wrapper">
      {/* JSX here */}
    </div>
  );
}
```

#### Naming Conventions

- **Components**: PascalCase (`Header.tsx`, `TrustedBy.tsx`)
- **Files**: kebab-case for non-components (`globals.css`)
- **Variables**: camelCase (`isVisible`, `userName`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINT`)

### CSS Organization

#### Global Styles

```css
/* globals.css structure */
:root {
  /* CSS custom properties */
}

* {
  /* Universal styles */
}

html, body {
  /* Base styles */
}

/* Component-specific styles */
.header { /* ... */ }
.hero { /* ... */ }
```

#### Component Styles

Use CSS modules or styled-jsx when needed:

```typescript
// For complex styling needs
import styles from './component.module.css';

export default function Component() {
  return <div className={styles.wrapper}>Content</div>;
}
```

## 🎯 Best Practices

### React Best Practices

#### Component Design

```typescript
// Good: Clear, focused components
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}

export default function Hero({ title, subtitle, ctaText, onCtaClick }: HeroProps) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <button onClick={onCtaClick}>{ctaText}</button>
    </section>
  );
}
```

#### Hooks Usage

```typescript
// Good: Custom hooks for reusable logic
function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
}
```

### TypeScript Best Practices

#### Type Definitions

```typescript
// types/index.ts
export interface Customer {
  id: string;
  name: string;
  logo: string;
  testimonial?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

// Use discriminated unions for variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline';
```

#### Component Props

```typescript
// Good: Explicit, well-documented props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}
```

### Performance Best Practices

#### Image Optimization

```typescript
// Use Next.js Image component for optimization
import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Matteo Logo"
      width={200}
      height={100}
      priority // For above-the-fold images
    />
  );
}
```

#### Code Splitting

```typescript
// Dynamic imports for large components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
});
```

## 🐛 Debugging

### Development Tools

#### Browser DevTools

- **Elements**: Inspect DOM and CSS
- **Console**: Check for JavaScript errors
- **Network**: Monitor resource loading
- **Lighthouse**: Performance and accessibility audits

#### React DevTools

- **Components**: Inspect React component tree
- **Profiler**: Analyze component performance
- **Props**: Check component props and state

### Common Issues

#### Build Errors

```bash
# TypeScript errors
npm run lint

# Dependency issues
rm -rf node_modules package-lock.json
npm install

# Next.js cache issues
rm -rf .next
npm run dev
```

#### Runtime Errors

```typescript
// Use error boundaries for better error handling
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <MyComponent />
    </ErrorBoundary>
  );
}
```

### Debugging Checklist

- [ ] Check browser console for errors
- [ ] Verify component props are correct
- [ ] Test responsive design on different screen sizes
- [ ] Run `npm run lint` for code quality issues
- [ ] Test build with `npm run build`
- [ ] Check network tab for failed requests

## ⚡ Performance

### Optimization Strategies

#### Bundle Analysis

```bash
# Analyze bundle size
npm run build
# Check the build output size information
```

#### Core Web Vitals

Monitor these metrics:
- **LCP**: Largest Contentful Paint
- **FID**: First Input Delay
- **CLS**: Cumulative Layout Shift

#### Optimization Techniques

```typescript
// Lazy loading components
const LazyComponent = lazy(() => import('./LazyComponent'));

// Memoization for expensive calculations
const ExpensiveComponent = memo(({ data }: { data: Data[] }) => {
  const processedData = useMemo(() => 
    expensiveCalculation(data), [data]
  );
  
  return <div>{/* Render processed data */}</div>;
});
```

### Performance Checklist

- [ ] Optimize images (use WebP when possible)
- [ ] Minimize bundle size
- [ ] Use proper caching headers
- [ ] Implement lazy loading for non-critical components
- [ ] Monitor Core Web Vitals

## 📝 Documentation

### Code Documentation

```typescript
/**
 * Renders a testimonial card with customer information
 * @param customer - Customer data including name, role, and testimonial
 * @param variant - Display variant (default | featured)
 * @returns JSX element containing the testimonial card
 */
export default function TestimonialCard({ 
  customer, 
  variant = 'default' 
}: TestimonialCardProps) {
  // Component implementation
}
```

### README Updates

When adding new features:
- Update component documentation
- Add setup instructions if needed
- Include screenshots for UI changes
- Update the project structure section

---

**Happy coding!** 🚀 Remember to follow the satirical theme while maintaining high code quality. When in doubt, check existing patterns in the codebase or ask for help in GitHub Issues.