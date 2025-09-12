# Support

## 🆘 Getting Help

Welcome to the support documentation for Matteo - Mock Startup Website! While this is a satirical project, we provide real support for developers working with the codebase.

## 📋 Support Channels

### Primary Support

- **GitHub Issues**: [Report bugs and request features](https://github.com/mbianchidev/mock-startup-website/issues)
- **GitHub Discussions**: [Community discussions and questions](https://github.com/mbianchidev/mock-startup-website/discussions)
- **Documentation**: Check the README.md and other docs first

### Community Support

- **Code Review**: Get help through pull request reviews
- **Collaboration**: Connect with other contributors
- **Learning**: Share knowledge about React, Next.js, and TypeScript

## 🔧 Self-Help Resources

### Documentation

1. **[README.md](README.md)** - Project overview and setup
2. **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contribution guidelines
3. **[AGENTS.md](AGENTS.md)** - Development environment tips
4. **Code Comments** - Inline documentation in source files

### Common Solutions

#### Installation Issues

```bash
# Delete dependencies and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version (requires 18+)
node --version
```

#### Build Problems

```bash
# Check for TypeScript errors
npm run lint

# Clean build
rm -rf .next out
npm run build
```

#### Development Server Issues

```bash
# Kill any processes on port 3000
lsof -ti:3000 | xargs kill

# Restart development server
npm run dev
```

## 🐛 Issue Reporting

### Before Creating an Issue

- [ ] Search existing issues for duplicates
- [ ] Check the documentation
- [ ] Try the common solutions above
- [ ] Test with a clean install

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g. macOS, Windows, Linux]
- Browser: [e.g. Chrome, Safari, Firefox]
- Node.js: [e.g. 18.17.0]
- npm: [e.g. 9.6.7]
```

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of what the problem is.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Other solutions you've considered.

**Additional context**
Any other context, screenshots, or satirical elements.
```

## 🚀 Quick Troubleshooting

### Common Problems & Solutions

| Problem | Solution |
|---------|----------|
| Port 3000 already in use | Kill the process: `lsof -ti:3000 \| xargs kill` |
| Module not found errors | Run `npm install` |
| Build fails | Check `npm run lint` for TypeScript errors |
| Images not loading | Check public directory and file paths |
| CSS not applying | Verify CSS import paths |
| Tests failing | Run `npx playwright install` for first-time setup |

### Performance Issues

- **Slow builds**: Check for large dependencies or unused imports
- **Slow dev server**: Clear `.next` directory and restart
- **Memory issues**: Increase Node.js memory limit: `NODE_OPTIONS="--max-old-space-size=4096"`

## 🎓 Learning Resources

### Technologies Used

- **[Next.js Documentation](https://nextjs.org/docs)** - Framework features and API
- **[React Documentation](https://react.dev/)** - Component patterns and hooks  
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)** - Type system and features
- **[Playwright Documentation](https://playwright.dev/)** - Testing framework

### Educational Content

- **Component Architecture**: Study the `src/components/` directory
- **Page Routing**: Explore the `src/app/` directory structure
- **Static Export**: Review `next.config.js` configuration
- **CI/CD**: Examine `.github/workflows/static.yml`

## 📞 Direct Contact

### Professional Support

For professional inquiries or consulting:
- **Email**: matteo@mb-consulting.dev
- **LinkedIn**: [Connect with the maintainer](https://linkedin.com/in/matteobianchimb)

### Security Issues

For security-related concerns:
- **Email**: security@mb-consulting.dev
- **Process**: See [SECURITY.md](SECURITY.md) for details

## 🤝 Community Guidelines

### Getting the Best Help

1. **Be specific** - Provide clear details about your issue
2. **Be patient** - This is maintained by volunteers
3. **Be respectful** - Follow the code of conduct
4. **Be helpful** - Help others when you can

### Response Times

- **Bug reports**: Within 1-3 business days
- **Feature requests**: Within 1 week
- **Security issues**: Within 48 hours
- **General questions**: Community-driven, varies

## 💡 Contributing Back

### Ways to Help Others

- **Answer questions** in GitHub Discussions
- **Review pull requests** from other contributors
- **Improve documentation** based on your experience
- **Share solutions** for common problems

### Become a Maintainer

Interested in helping maintain this project?
- Consistently contribute quality code and documentation
- Help with issue triage and community support  
- Demonstrate understanding of the satirical theme
- Follow the project's technical and communication standards

---

**Remember**: While we parody startup culture, we provide genuine support for developers. Don't hesitate to ask for help - we're here to make your development experience as smooth as possible! 🎯
