# Contributing to Matteo - Mock Startup Website

Thank you for your interest in contributing to this satirical startup website! We welcome contributions that enhance the parody, improve the codebase, or add new features.

## 🎯 Project Vision

This project parodies typical Y Combinator startup patterns while serving as a modern React + Next.js demonstration. Contributions should align with this satirical nature while maintaining high code quality.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm package manager
- Git for version control
- Basic knowledge of React, Next.js, and TypeScript

### Setup Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/mock-startup-website.git
   cd mock-startup-website
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/mbianchidev/mock-startup-website.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Start development server**:
   ```bash
   npm run dev
   ```

## 📋 How to Contribute

### Types of Contributions Welcome

- **Bug fixes** - Fix issues with existing functionality
- **Feature enhancements** - Add new satirical elements or improve existing ones
- **Performance improvements** - Optimize loading times and user experience
- **Documentation** - Improve README, code comments, or add new docs
- **Testing** - Add or improve Playwright tests
- **Design improvements** - Enhance the parody elements or visual design

### Contribution Workflow

1. **Check existing issues** or create a new one to discuss your idea
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following our coding standards
4. **Test your changes**:
   ```bash
   npm run lint
   npm run build
   npm run test:playwright
   ```
5. **Stage and commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```
6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request** on GitHub

## 🔧 Development Guidelines

### Code Style

- **TypeScript**: Use strict typing, avoid `any` when possible
- **React**: Use functional components with hooks
- **Next.js**: Follow App Router patterns and conventions
- **CSS**: Maintain the existing design patterns and responsiveness
- **Naming**: Use descriptive, satirical names that fit the parody theme

### Component Structure

```typescript
// Good example
interface HeroProps {
  title: string;
  subtitle: string;
  buzzwordIntensity: 'mild' | 'moderate' | 'extreme';
}

export default function Hero({ title, subtitle, buzzwordIntensity }: HeroProps) {
  // Component logic
}
```

### Commit Messages

Use conventional commit format:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Build process or auxiliary tool changes

### Testing Requirements

- **Existing tests must pass**: Run `npm run test:playwright`
- **New features should include tests** when applicable
- **Manual testing**: Verify changes work in development mode
- **Build verification**: Ensure `npm run build` succeeds

## 🎨 Design Principles

### Satirical Elements

When adding new content, consider these parody themes:
- **Buzzword overuse**: "revolutionary," "disruptive," "next-generation"
- **Vague value propositions**: Promise everything, explain nothing
- **Startup clichés**: Ping pong tables, "changing the world," etc.
- **Enterprise complexity**: Unnecessary charts, diagrams, and processes

### Technical Standards

- **Responsive design**: Mobile-first approach
- **Performance**: Maintain fast loading times
- **Accessibility**: Follow WCAG guidelines
- **SEO**: Use semantic HTML and proper meta tags
- **Static export**: Ensure compatibility with GitHub Pages

## 📝 Pull Request Guidelines

### Before Submitting

- [ ] Code follows the project style guidelines
- [ ] Self-review of code changes completed
- [ ] Tests pass locally (`npm run test:playwright`)
- [ ] Build succeeds (`npm run build`)
- [ ] No linting errors (`npm run lint`)
- [ ] Documentation updated if needed

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Manual testing completed
- [ ] Build verification successful

## Screenshots (if applicable)
Add screenshots for UI changes
```

## 🐛 Reporting Issues

### Bug Reports

Include the following information:
- **Description**: Clear description of the bug
- **Steps to reproduce**: Detailed steps to recreate the issue
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment**: Browser, Node.js version, OS
- **Screenshots**: If applicable

### Feature Requests

- **Problem**: What problem does this solve?
- **Solution**: Describe your proposed solution
- **Alternatives**: Any alternative solutions considered
- **Satirical relevance**: How does this fit the parody theme?

## 💬 Getting Help

- **Issues**: Use GitHub Issues for bug reports and feature requests
- **Discussions**: Use GitHub Discussions for general questions
- **Code Review**: Engage in constructive code review discussions

## 📜 Code of Conduct

This project follows a standard code of conduct:
- Be respectful and inclusive
- Focus on constructive feedback
- Embrace the satirical nature while maintaining professionalism
- Help create a welcoming environment for all contributors

---

Thank you for contributing to this parody of startup culture! Your contributions help make this a better example of modern web development while keeping the humor alive. 🚀
