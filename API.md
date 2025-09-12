# Component API Documentation

## 📋 Overview

This document provides comprehensive API documentation for all React components in the Matteo Mock Startup Website. Each component is designed to be reusable, well-typed, and follows consistent patterns.

## 📚 Table of Contents

- [Layout Components](#layout-components)
- [Page Components](#page-components)
- [Feature Components](#feature-components)
- [Interactive Components](#interactive-components)
- [Utility Components](#utility-components)
- [Type Definitions](#type-definitions)

## 🏗️ Layout Components

### Header

The main navigation header component.

```typescript
interface HeaderProps {
  // No props required - fully self-contained
}

export default function Header(): JSX.Element
```

**Usage:**
```tsx
import Header from '@/components/Header';

<Header />
```

**Features:**
- Responsive navigation menu
- Mobile hamburger menu
- Active page highlighting
- External link handling

### Footer

The site footer with links and information.

```typescript
interface FooterProps {
  // No props required - fully self-contained
}

export default function Footer(): JSX.Element
```

**Usage:**
```tsx
import Footer from '@/components/Footer';

<Footer />
```

**Features:**
- Multi-column layout
- Social media links
- Legal page links
- Responsive design

## 📄 Page Components

### WorkInProgress

A placeholder component for pages under development.

```typescript
interface WorkInProgressProps {
  pageName?: string;
  description?: string;
  showBackButton?: boolean;
}

export default function WorkInProgress({
  pageName = "This Page",
  description = "We're working hard to bring you something amazing!",
  showBackButton = true
}: WorkInProgressProps): JSX.Element
```

**Usage:**
```tsx
import WorkInProgress from '@/components/WorkInProgress';

<WorkInProgress 
  pageName="Careers"
  description="We're hiring! Check back soon for open positions."
  showBackButton={true}
/>
```

**Props:**
- `pageName` (optional): Name of the page being developed
- `description` (optional): Custom description message
- `showBackButton` (optional): Whether to show a back navigation button

### RedirectPage

A component that handles external redirects with user confirmation.

```typescript
interface RedirectPageProps {
  targetUrl: string;
  siteName: string;
  description?: string;
  autoRedirect?: boolean;
  redirectDelay?: number;
}

export default function RedirectPage({
  targetUrl,
  siteName,
  description,
  autoRedirect = true,
  redirectDelay = 3000
}: RedirectPageProps): JSX.Element
```

**Usage:**
```tsx
import RedirectPage from '@/components/RedirectPage';

<RedirectPage
  targetUrl="https://github.com/mbianchidev"
  siteName="GitHub"
  description="You're being redirected to my GitHub profile"
  autoRedirect={true}
  redirectDelay={5000}
/>
```

**Props:**
- `targetUrl` (required): The URL to redirect to
- `siteName` (required): Display name of the target site
- `description` (optional): Custom description of where user is going
- `autoRedirect` (optional): Whether to automatically redirect
- `redirectDelay` (optional): Delay in milliseconds before auto-redirect

## ⭐ Feature Components

### Hero

The main hero section for the homepage.

```typescript
interface HeroProps {
  // No props required - content is built-in for satirical consistency
}

export default function Hero(): JSX.Element
```

**Usage:**
```tsx
import Hero from '@/components/Hero';

<Hero />
```

**Features:**
- Animated headline text
- Call-to-action buttons
- Satirical messaging
- Responsive design

### Features

Grid layout showcasing product features.

```typescript
interface FeaturesProps {
  // No props required - features are predefined for satirical effect
}

export default function Features(): JSX.Element
```

**Usage:**
```tsx
import Features from '@/components/Features';

<Features />
```

**Features:**
- 3-column responsive grid
- Icon + text layout
- Satirical feature descriptions
- Hover effects

### Testimonials

Customer testimonials section.

```typescript
interface TestimonialsProps {
  // No props currently - testimonials are built-in
}

export default function Testimonials(): JSX.Element
```

**Usage:**
```tsx
import Testimonials from '@/components/Testimonials';

<Testimonials />
```

**Features:**
- Grid of testimonial cards
- Customer photos and quotes
- Satirical testimonials
- Responsive layout

### TrustedBy

Logo carousel of "trusted" companies.

```typescript
interface TrustedByProps {
  // No props required - logos are predefined
}

export default function TrustedBy(): JSX.Element
```

**Usage:**
```tsx
import TrustedBy from '@/components/TrustedBy';

<TrustedBy />
```

**Features:**
- Horizontal scrolling logo grid
- Satirical company names/logos
- Infinite scroll effect
- Responsive sizing

### Stats

Statistics display component.

```typescript
interface StatsProps {
  // No props required - stats are built-in for consistency
}

export default function Stats(): JSX.Element
```

**Usage:**
```tsx
import Stats from '@/components/Stats';

<Stats />
```

**Features:**
- 4-column stats grid
- Large numbers with descriptions
- Satirical metrics
- Responsive layout

### UseCases

Use cases section with examples.

```typescript
interface UseCasesProps {
  // No props required - use cases are predefined
}

export default function UseCases(): JSX.Element
```

**Usage:**
```tsx
import UseCases from '@/components/UseCases';

<UseCases />
```

**Features:**
- Grid layout with icons
- Use case descriptions
- Satirical examples
- Responsive design

### Integrations

Integration ecosystem visualization.

```typescript
interface IntegrationsProps {
  // No props required - integrations are built-in
}

export default function Integrations(): JSX.Element
```

**Usage:**
```tsx
import Integrations from '@/components/Integrations';

<Integrations />
```

**Features:**
- Icon grid layout
- Popular service integrations
- Hover effects
- Responsive grid

## 🎮 Interactive Components

### CloudCarousel

Interactive carousel component for cloud services.

```typescript
interface CloudCarouselProps {
  // No props required - carousel items are predefined
}

export default function CloudCarousel(): JSX.Element
```

**Usage:**
```tsx
import CloudCarousel from '@/components/CloudCarousel';

<CloudCarousel />
```

**Features:**
- Horizontal scrolling carousel
- Cloud service cards
- Interactive navigation
- Responsive behavior

### Collapsible

Expandable content component.

```typescript
interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  variant?: 'default' | 'bordered';
}

export default function Collapsible({
  title,
  children,
  defaultExpanded = false,
  variant = 'default'
}: CollapsibleProps): JSX.Element
```

**Usage:**
```tsx
import Collapsible from '@/components/Collapsible';

<Collapsible 
  title="Advanced Features"
  defaultExpanded={false}
  variant="bordered"
>
  <p>Hidden content goes here...</p>
</Collapsible>
```

**Props:**
- `title` (required): Header text for the collapsible section
- `children` (required): Content to show/hide
- `defaultExpanded` (optional): Whether to start expanded
- `variant` (optional): Visual style variant

### SessionizeEmbed

Embedded content component for external services.

```typescript
interface SessionizeEmbedProps {
  embedUrl: string;
  title?: string;
  height?: string;
  allowFullscreen?: boolean;
}

export default function SessionizeEmbed({
  embedUrl,
  title = "Embedded Content",
  height = "600px",
  allowFullscreen = false
}: SessionizeEmbedProps): JSX.Element
```

**Usage:**
```tsx
import SessionizeEmbed from '@/components/SessionizeEmbed';

<SessionizeEmbed
  embedUrl="https://sessionize.com/embed/..."
  title="Conference Sessions"
  height="800px"
  allowFullscreen={true}
/>
```

**Props:**
- `embedUrl` (required): URL of content to embed
- `title` (optional): Accessible title for the iframe
- `height` (optional): Height of the embedded content
- `allowFullscreen` (optional): Whether to allow fullscreen mode

## 🛠️ Utility Components

### KubernetesDistros

Specialized component for displaying Kubernetes distributions.

```typescript
interface KubernetesDistrosProps {
  // No props required - distributions are predefined
}

export default function KubernetesDistros(): JSX.Element
```

**Usage:**
```tsx
import KubernetesDistros from '@/components/KubernetesDistros';

<KubernetesDistros />
```

**Features:**
- Grid of Kubernetes distribution logos
- Satirical descriptions
- Responsive layout
- Hover effects

## 📋 Type Definitions

### Common Types

```typescript
// types/index.ts

export interface Customer {
  id: string;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits?: string[];
}

export interface Integration {
  id: string;
  name: string;
  logo: string;
  category: 'cloud' | 'database' | 'monitoring' | 'security';
  isPopular?: boolean;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: string;
  examples?: string[];
}
```

### Component Props Patterns

```typescript
// Base component props
interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Props with variants
interface ComponentWithVariantProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

// Props with event handlers
interface InteractiveComponentProps extends BaseComponentProps {
  onClick?: () => void;
  onHover?: () => void;
  disabled?: boolean;
}
```

## 🎨 Styling Patterns

### CSS Classes

Components use consistent CSS class naming:

```css
/* Component wrapper */
.component-name {
  /* Base styles */
}

/* Component variants */
.component-name--variant {
  /* Variant-specific styles */
}

/* Component states */
.component-name:hover,
.component-name:focus {
  /* Interactive states */
}

/* Responsive modifiers */
@media (max-width: 768px) {
  .component-name {
    /* Mobile styles */
  }
}
```

### Design Tokens

Common values used across components:

```css
:root {
  /* Colors */
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-success: #28a745;
  --color-warning: #ffc107;
  --color-danger: #dc3545;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 3rem;
  
  /* Typography */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  
  /* Breakpoints */
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
}
```

## 🚀 Usage Examples

### Building a New Page

```tsx
// pages/example/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';

export default function ExamplePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
```

### Creating Custom Components

```tsx
// components/CustomComponent.tsx
interface CustomComponentProps {
  title: string;
  items: string[];
  variant?: 'default' | 'highlighted';
}

export default function CustomComponent({
  title,
  items,
  variant = 'default'
}: CustomComponentProps) {
  return (
    <section className={`custom-component custom-component--${variant}`}>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
```

## 📝 Contributing to Components

### Component Checklist

When creating or modifying components:

- [ ] **TypeScript**: Proper interface definitions
- [ ] **Props**: Clear and well-documented props
- [ ] **Accessibility**: ARIA attributes and semantic HTML
- [ ] **Responsive**: Works on mobile and desktop
- [ ] **Satirical Theme**: Fits the parody concept
- [ ] **Reusability**: Can be used in multiple contexts
- [ ] **Performance**: Optimized rendering
- [ ] **Testing**: Can be tested with Playwright

### Code Style

Follow these patterns for consistency:

```typescript
// Good: Clear prop interface
interface ComponentProps {
  title: string;
  isVisible?: boolean;
}

// Good: Default props in function signature
export default function Component({ 
  title, 
  isVisible = true 
}: ComponentProps) {
  // Component logic
}

// Good: Early returns for conditional rendering
if (!isVisible) {
  return null;
}

// Good: Descriptive CSS classes
return (
  <div className="component-wrapper">
    <h2 className="component-title">{title}</h2>
  </div>
);
```

---

**Need Help?** Check the actual component source code in `src/components/` for implementation details, or refer to the [DEVELOPMENT.md](DEVELOPMENT.md) guide for development practices.