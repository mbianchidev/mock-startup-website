# Matteo - Mock Startup Website

![License](https://img.shields.io/github/license/mbianchidev/mock-startup-website)
![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)

> A satirical website that parodies typical Y Combinator startup patterns, built with modern web technologies.

## 📋 Table of Contents

- [About](#-about)
- [Purpose](#-purpose)
- [Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [License](#-license)

## 🚀 About

This project is a satirical website that parodies the typical Y Combinator startup. The aim is to showcase the common design patterns, marketing language, and feature presentations used by tech startups today, with a humorous twist.

"Matteo" serves as our fictional SaaS product/platform, complete with all the startup tropes:

- Minimalist design with vibrant call-to-action buttons
- Vague yet promising value propositions
- Integration ecosystem charts
- Pricing tiers (including the obligatory "Enterprise/Contact Us" option)
- Testimonials from "satisfied customers"
- A roadmap promising revolutionary features

## 🎯 Purpose

This project was created to:

1. Demonstrate common web design patterns used in startup marketing sites
2. Provide a template for developers creating landing pages
3. Highlight (with humor) the formulaic nature of many startup websites
4. Serve as a design study of effective and ineffective marketing tactics
5. Show conversion from static HTML/CSS/JS to modern React + Next.js

## 🔍 Key Features

- **Responsive design** that works on mobile and desktop
- **Modern React components** with TypeScript
- **Interactive elements** with React hooks and state management
- **Server-side rendering** with Next.js 15
- **Component-based architecture** for maintainability
- **Accessibility features** retained from original design

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **React 19** - Latest React features and hooks
- **CSS3** - Original styles adapted for React
- **Font Awesome** - Icon library
- **ESLint** - Code linting and quality

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ (LTS recommended)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mbianchidev/mock-startup-website.git
   cd mock-startup-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the site

## 🚀 Deployment

### GitHub Pages (Automatic)

This repository is configured for automatic deployment to GitHub Pages:

- **Workflow**: `.github/workflows/static.yml`
- **Triggers**: Push to `main` branch or `feature/**` branches
- **Output**: Static export to `out/` directory
- **URL**: Deployed at `https://mbianchidev.github.io/mock-startup-website/`

### Local Production Build

Test the production build locally:

```bash
# Build the static export
npm run build

# Serve the static files locally
npx serve out
```

### Manual Deployment

For other hosting providers:

```bash
# Build for production
npm run build

# The `out/` directory contains all static files
# Upload the contents to your hosting provider
```

## 🧪 Testing

### Playwright Tests

Run end-to-end tests:

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run tests
npm run test:playwright

# Run tests with UI
npm run test:screenshots
```

### Linting

Check code quality:

```bash
npm run lint
```

## 📂 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Homepage
│   ├── about/           # About page
│   ├── careers/         # Careers page
│   ├── customers/       # Customers page
│   ├── documentation/   # Documentation page
│   ├── press/           # Press page
│   ├── pricing/         # Pricing page
│   ├── privacy/         # Privacy page
│   ├── redirect/        # Redirect pages
│   ├── roadmap/         # Roadmap page
│   ├── support/         # Support page
│   ├── terms/           # Terms page
│   └── globals.css      # Global styles
├── components/          # Reusable React components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features grid
│   ├── UseCases.tsx     # Use cases section
│   ├── TrustedBy.tsx    # Logo carousel
│   ├── Integrations.tsx # Integration icons
│   ├── CloudCarousel.tsx # Interactive carousel
│   ├── Testimonials.tsx # Customer testimonials
│   ├── Stats.tsx        # Statistics component
│   ├── Collapsible.tsx  # Collapsible component
│   ├── RedirectPage.tsx # Redirect page component
│   ├── WorkInProgress.tsx # Work in progress component
│   ├── SessionizeEmbed.tsx # Sessionize embed component
│   └── KubernetesDistros.tsx # Kubernetes distributions component
├── types/               # TypeScript type definitions
│   └── index.ts
├── data/               # JSON data files
│   └── customers.json
└── lib/                # Utility functions
```

## 🛠️ Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reloading |
| `npm run build` | Build for production and export static files |
| `npm run start` | Start production server (requires build first) |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run test:playwright` | Run Playwright end-to-end tests |
| `npm run test:screenshots` | Run Playwright tests with browser UI |

### Development Tips

- **Hot Reloading**: Changes are automatically reflected in the browser
- **TypeScript**: Full type checking and IntelliSense support
- **ESLint**: Automatic code quality and style enforcement
- **Static Export**: Optimized for GitHub Pages deployment
- **Responsive Design**: Test on different screen sizes during development

### Troubleshooting

**Common Issues:**

1. **Dependency conflicts**: Delete `node_modules` and `package-lock.json`, then run `npm install`
2. **CSP errors**: Check `next.config.js` for Content Security Policy settings
3. **Build failures**: Ensure all TypeScript errors are resolved with `npm run lint`

## 🔄 Migration from Static HTML

This project was successfully converted from a static HTML/CSS/JS website to a modern React + Next.js application. Key improvements include:

- **Component-based architecture** for better maintainability
- **TypeScript integration** for type safety
- **React hooks** replacing DOM manipulation
- **Server-side rendering** for better SEO and performance
- **Modern development toolchain** with hot reloading
- **Accessibility improvements** with semantic HTML and ARIA attributes

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

See our [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Development Workflow

- Follow the existing code style and patterns
- Run `npm run lint` before committing
- Ensure `npm run build` passes successfully
- Test your changes locally with `npm run dev`
- Add tests for new features when applicable

## 📄 License

This project is licensed under the terms of the license included in the [LICENSE](LICENSE) file.

## 🙏 Acknowledgments

- Y Combinator startups for the inspiration
- Modern SaaS companies for their predictable design patterns
- The tech industry's love for buzzwords and vague promises

---

*Disclaimer: This is a parody project created for educational and entertainment purposes. Any similarity to actual startups is coincidental and not intended to mock specific companies.*
