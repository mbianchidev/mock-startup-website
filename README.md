# Matteo - Mock Startup Website

![License](https://img.shields.io/github/license/mbianchidev/mock-startup-website)

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

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone this repository
   ```bash
   git clone https://github.com/mbianchidev/mock-startup-website.git
   cd mock-startup-website
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Homepage
│   ├── about/           # About page
│   ├── pricing/         # Pricing page
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
│   └── Testimonials.tsx # Customer testimonials
├── types/               # TypeScript type definitions
│   └── index.ts
├── data/               # JSON data files
│   └── customers.json
└── lib/                # Utility functions
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔄 Migration from Static HTML

This project was successfully converted from a static HTML/CSS/JS website to a modern React + Next.js application. Key improvements include:

- **Component-based architecture** for better maintainability
- **TypeScript integration** for type safety
- **React hooks** replacing DOM manipulation
- **Server-side rendering** for better SEO and performance
- **Modern development toolchain** with hot reloading
- **Accessibility improvements** with semantic HTML and ARIA attributes

## 📝 Contribute

Contributions are welcome! See our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

This project is licensed under the terms of the license included in the [LICENSE](LICENSE) file.

## 🙏 Acknowledgments

- Y Combinator startups for the inspiration
- Modern SaaS companies for their predictable design patterns
- The tech industry's love for buzzwords and vague promises

---

*Disclaimer: This is a parody project created for educational and entertainment purposes. Any similarity to actual startups is coincidental and not intended to mock specific companies.*
