# Testing Guide

## 🧪 Testing Overview

This guide covers testing practices for the Matteo Mock Startup Website, including end-to-end testing with Playwright, manual testing procedures, and quality assurance guidelines.

## 📋 Table of Contents

- [Testing Framework](#testing-framework)
- [End-to-End Testing](#end-to-end-testing)
- [Manual Testing](#manual-testing)
- [Testing Best Practices](#testing-best-practices)
- [Continuous Integration](#continuous-integration)
- [Troubleshooting](#troubleshooting)

## 🎭 Testing Framework

### Playwright Configuration

The project uses Playwright for end-to-end testing:

```typescript
// playwright.config.ts
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

### Test Structure

```
tests/
├── pages.spec.ts          # Page-level tests
├── screenshots/           # Generated screenshots
└── [future test files]    # Additional test suites
```

## 🚀 End-to-End Testing

### Running Tests

#### Basic Test Commands

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run all tests
npm run test:playwright

# Run tests with browser UI visible
npm run test:screenshots

# Run tests in headed mode (see browser)
npx playwright test --headed

# Run specific test file
npx playwright test tests/pages.spec.ts

# Debug tests
npx playwright test --debug
```

#### Test Reports

```bash
# View HTML test report
npx playwright show-report

# Generate and view report
npm run test:playwright && npx playwright show-report
```

### Current Test Suite

#### Page Tests (`tests/pages.spec.ts`)

The main test suite covers:

1. **Homepage Testing**
   - Page loads correctly
   - Title is correct
   - Core elements are visible (header, main, footer)
   - Screenshot generation

2. **Pricing Page Testing**  
   - Navigation works
   - Content renders properly
   - Responsive design

3. **Roadmap Page Testing**
   - Future features display
   - Interactive elements work

4. **Careers Page Testing**
   - Job listings render
   - Application flow works

#### Test Structure Example

```typescript
test.describe('Page Functionality', () => {
  for (const page of pages) {
    test(`should render ${page.name} page correctly`, async ({ page: pw }) => {
      // Navigate to the page
      await pw.goto(page.path);
      
      // Wait for the page to load
      await pw.waitForLoadState('networkidle');
      
      // Check title
      await expect(pw).toHaveTitle(page.title);
      
      // Take screenshot
      await pw.screenshot({ 
        path: `tests/screenshots/${page.name}-page.png`,
        fullPage: true 
      });
      
      // Basic content verification
      await expect(pw.locator('header')).toBeVisible();
      await expect(pw.locator('main')).toBeVisible();
      await expect(pw.locator('footer')).toBeVisible();
    });
  }
});
```

### Writing New Tests

#### Test File Template

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    // Setup before each test
    await page.goto('/');
  });

  test('should perform specific action', async ({ page }) => {
    // Test implementation
    await page.click('[data-testid="button"]');
    await expect(page.locator('[data-testid="result"]')).toBeVisible();
  });
});
```

#### Best Practices for E2E Tests

1. **Use data-testid attributes** for reliable element selection:
   ```html
   <button data-testid="cta-button">Get Started</button>
   ```

2. **Wait for network idle** for dynamic content:
   ```typescript
   await page.waitForLoadState('networkidle');
   ```

3. **Take screenshots** for visual regression testing:
   ```typescript
   await page.screenshot({ 
     path: 'tests/screenshots/feature.png',
     fullPage: true 
   });
   ```

4. **Test user workflows**, not just individual components:
   ```typescript
   test('complete signup flow', async ({ page }) => {
     await page.goto('/');
     await page.click('[data-testid="signup-button"]');
     await page.fill('[data-testid="email"]', 'test@example.com');
     await page.click('[data-testid="submit"]');
     await expect(page.locator('[data-testid="success"]')).toBeVisible();
   });
   ```

## 🖱️ Manual Testing

### Testing Checklist

#### Before Each Release

**Desktop Testing**:
- [ ] Homepage loads and displays correctly
- [ ] Navigation menu works on all pages
- [ ] All buttons and links are functional
- [ ] Images load properly
- [ ] External links open in new tabs
- [ ] Responsive design works (resize browser)

**Mobile Testing**:
- [ ] Mobile navigation menu works
- [ ] Touch interactions are responsive
- [ ] Text is readable without zooming
- [ ] Buttons are appropriately sized
- [ ] Horizontal scrolling is not required

**Cross-Browser Testing**:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Edge

#### Accessibility Testing

**Keyboard Navigation**:
- [ ] Tab through all interactive elements
- [ ] Enter/Space activate buttons and links
- [ ] Focus indicators are visible
- [ ] Skip links work properly

**Screen Reader Testing**:
- [ ] Headings are properly structured (h1, h2, h3)
- [ ] Images have descriptive alt text
- [ ] Form labels are associated correctly
- [ ] ARIA attributes are used appropriately

**Visual Testing**:
- [ ] Sufficient color contrast
- [ ] Text scales properly (up to 200%)
- [ ] No information conveyed by color alone
- [ ] Focus indicators are clearly visible

#### Performance Testing

**Core Web Vitals**:
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1

**Loading Performance**:
- [ ] Initial page load is fast
- [ ] Images load progressively
- [ ] No unnecessary JavaScript blocking
- [ ] Fonts load without flash of unstyled text

### Testing Tools

#### Browser DevTools

**Performance Tab**:
```bash
1. Open DevTools
2. Go to Performance tab
3. Click Record
4. Navigate/interact with site
5. Stop recording and analyze
```

**Lighthouse Audit**:
```bash
1. Open DevTools
2. Go to Lighthouse tab
3. Select categories to test
4. Run audit
5. Review recommendations
```

**Accessibility Tools**:
- Browser DevTools Accessibility panel
- axe DevTools browser extension
- WAVE Web Accessibility Evaluator

## 📏 Testing Best Practices

### Test Organization

#### Test Categories

1. **Smoke Tests**: Basic functionality that must work
2. **Feature Tests**: Specific feature functionality
3. **Regression Tests**: Prevent previously fixed bugs
4. **Visual Tests**: Screenshot comparisons
5. **Performance Tests**: Loading and runtime performance

#### Test Data Management

```typescript
// Good: Use test data files
const testPages = [
  { name: 'homepage', path: '/', title: 'Matteo - The Future of Innovation' },
  { name: 'pricing', path: '/pricing', title: 'Pricing - Matteo Platform' },
];

// Good: Use page object model for complex interactions
class HomePage {
  constructor(private page: Page) {}
  
  async clickSignup() {
    await this.page.click('[data-testid="signup-button"]');
  }
  
  async expectHeroVisible() {
    await expect(this.page.locator('[data-testid="hero"]')).toBeVisible();
  }
}
```

### Test Maintenance

#### Regular Test Updates

- **Review test failures** and update selectors as needed
- **Add tests for new features** as they're developed
- **Remove obsolete tests** when features are removed
- **Update screenshots** when UI changes are intentional

#### Test Performance

```typescript
// Good: Use efficient selectors
await page.locator('[data-testid="button"]').click();

// Avoid: Overly specific selectors that break easily
await page.locator('div.container > section:nth-child(2) > button').click();

// Good: Wait for specific conditions
await page.waitForSelector('[data-testid="loading"]', { state: 'hidden' });

// Avoid: Arbitrary timeouts
await page.waitForTimeout(5000);
```

## 🔄 Continuous Integration

### GitHub Actions Integration

The CI pipeline includes testing:

```yaml
# .github/workflows/static.yml includes build testing
- name: Install dependencies
  run: npm ci

- name: Build and export
  run: npm run build
```

### Future CI Enhancements

Consider adding:

```yaml
# Example additional CI steps
- name: Run Playwright tests
  run: npm run test:playwright

- name: Upload test results
  uses: actions/upload-artifact@v3
  if: always()
  with:
    name: playwright-report
    path: playwright-report/
```

## 🐛 Troubleshooting

### Common Issues

#### Test Failures

**Flaky Tests**:
```typescript
// Add retries for unstable tests
test.describe.configure({ retries: 2 });

// Use better waiting strategies
await page.waitForFunction(() => 
  document.querySelector('[data-testid="element"]')?.textContent === 'Expected'
);
```

**Element Not Found**:
```typescript
// Debug with screenshots
await page.screenshot({ path: 'debug.png', fullPage: true });

// Check what's actually on the page
console.log(await page.content());

// Wait for elements properly
await page.waitForSelector('[data-testid="element"]', { timeout: 10000 });
```

#### Performance Issues

**Slow Tests**:
- Use `page.waitForLoadState('networkidle')` sparingly
- Prefer specific element waiting over general page waits
- Run tests in parallel when possible

**Browser Issues**:
```bash
# Reinstall browsers
npx playwright install --force

# Clear browser cache
npx playwright test --update-snapshots
```

### Debugging Commands

```bash
# Run single test with debugging
npx playwright test --debug tests/pages.spec.ts

# Generate trace files
npx playwright test --trace on

# View trace files
npx playwright show-trace trace.zip

# Update visual snapshots
npx playwright test --update-snapshots
```

## 📊 Test Metrics

### Coverage Goals

While we don't use unit tests, aim for comprehensive E2E coverage:
- **Page Coverage**: All main pages tested
- **User Flows**: Critical user journeys covered
- **Browser Coverage**: Primary browsers tested
- **Device Coverage**: Desktop and mobile tested

### Quality Metrics

Track these metrics over time:
- Test execution time
- Test failure rate
- Test maintenance effort
- Bug detection rate

## 🎯 Future Testing

### Potential Additions

1. **Visual Regression Testing**: Compare screenshots over time
2. **API Testing**: If backend APIs are added
3. **Load Testing**: For performance under load
4. **Unit Testing**: For complex utility functions
5. **Component Testing**: For isolated component behavior

### Testing Culture

- **Write tests for new features** before implementation
- **Update tests when fixing bugs** to prevent regression
- **Review test failures carefully** before dismissing them
- **Maintain test documentation** as the project evolves

---

**Remember**: Good tests give confidence to make changes. Invest in tests that provide value and maintain them as living documentation of your application's behavior. 🧪