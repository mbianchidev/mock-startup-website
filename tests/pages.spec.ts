import { test, expect } from '@playwright/test';

const pages = [
  { name: 'homepage', path: '/', title: 'Matteo — The Human Platform' },
  { name: 'about', path: '/about', title: 'Product Internals — Matteo' },
  { name: 'blog', path: '/blog', title: 'Field Notes — Matteo' },
  {
    name: 'blog-article',
    path: '/blog/building-scalable-cloud-native-applications',
    title: 'Building Scalable Cloud Native Applications — Matteo',
  },
  { name: 'roadmap', path: '/roadmap', title: 'Changelog — Matteo' },
  { name: 'portfolio', path: '/portfolio', title: 'Open Source — Matteo' },
  { name: 'customers', path: '/customers', title: 'Customers — Matteo' },
  { name: 'careers', path: '/careers', title: 'Careers — Matteo' },
  { name: 'pricing', path: '/pricing', title: 'Pricing — Matteo' },
  { name: 'documentation', path: '/documentation', title: 'Documentation — Matteo' },
  { name: 'press', path: '/press', title: 'Press — Matteo' },
  { name: 'support', path: '/support', title: 'Support — Matteo' },
  { name: 'privacy', path: '/privacy', title: 'Privacy — Matteo' },
  { name: 'terms', path: '/terms', title: 'Terms — Matteo' },
];

test.describe('Static route experience', () => {
  for (const page of pages) {
    test(`renders ${page.name}`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path, { waitUntil: 'domcontentloaded' });

      await expect(browserPage).toHaveTitle(page.title);
      await expect(browserPage.locator('header')).toBeVisible();
      await expect(browserPage.locator('main')).toBeVisible();
      await expect(browserPage.locator('h1').first()).toBeVisible();
      await expect(browserPage.locator('footer')).toBeVisible();

      await browserPage.screenshot({
        path: `tests/screenshots/${page.name}-page.png`,
        fullPage: true,
      });
    });
  }

  test('renders the main-branch loved-by logo set', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const lovedBy = page.getByRole('region', { name: 'Loved and trusted by people at' });
    await expect(lovedBy).toBeVisible();

    for (const company of ['GitHub', 'Google', 'Microsoft', 'Uber', 'Amazon', 'Meta', 'Apple', 'Netflix', 'Tesla', 'NVIDIA', 'Adobe', 'Edera', 'Replit', 'OpenAI', 'Anthropic']) {
      await expect(lovedBy.getByRole('img', { name: company })).toHaveCount(1);
    }
  });

  test('updates the hiring compatibility result', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.locator('html[data-hydrated="true"]').waitFor();

    const developerExperience = page.getByRole('button', { name: /Developer friction/ });
    await developerExperience.click();

    await expect(developerExperience).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#compatibility-result')).toContainText(
      'Treats developer experience as product work'
    );
  });

  test('exposes the mobile navigation with accurate state', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.locator('html[data-hydrated="true"]').waitFor();

    const menuButton = page.getByRole('button', { name: 'Open navigation menu' });
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await menuButton.click();

    await expect(page.getByRole('button', { name: 'Close navigation menu' })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    await expect(
      page
        .getByRole('navigation', { name: 'Primary navigation' })
        .getByRole('link', { name: 'Features' })
    ).toBeVisible();
  });

  test('navigates to Privacy and Terms from the footer', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const footer = page.getByRole('contentinfo');
    await footer.getByRole('link', { name: 'Privacy' }).click();
    await expect(page).toHaveURL(/\/privacy\/?$/);
    await expect(page).toHaveTitle('Privacy — Matteo');
    await expect(
      page.getByRole('heading', { name: 'Privacy without the surveillance novella.' })
    ).toBeVisible();

    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page
      .getByRole('contentinfo')
      .getByRole('link', { name: 'Terms of Service' })
      .click();
    await expect(page).toHaveURL(/\/terms\/?$/);
    await expect(page).toHaveTitle('Terms — Matteo');
    await expect(
      page.getByRole('heading', { name: 'Terms that fit on one reasonable page.' })
    ).toBeVisible();
  });

  test('uses the requested Product and Company footer taxonomy', async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 900 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const product = page.getByRole('navigation', { name: 'Product' });
    await expect(product.getByRole('link')).toHaveText([
      'Features',
      'Integrations',
      'Pricing',
      'Roadmap',
    ]);

    const company = page.getByRole('navigation', { name: 'Company' });
    await expect(company.getByRole('link')).toHaveText([
      'Open source',
      'About',
      'Careers',
      'Customers',
    ]);

    for (const navigation of [product, company]) {
      const positions = await navigation.getByRole('link').evaluateAll((links) =>
        links.map((link) => link.getBoundingClientRect().top)
      );

      expect(positions).toEqual([...positions].sort((a, b) => a - b));
      expect(new Set(positions).size).toBe(positions.length);
    }
  });

  test('calculates an advisory quote accessibly', async ({ page }) => {
    await page.goto('/pricing', { waitUntil: 'domcontentloaded' });
    await page.locator('html[data-hydrated="true"]').waitFor();

    await page.getByLabel('Exact monthly hours').fill('20');
    await page.getByLabel('Engagement tier').selectOption('advisory');

    await expect(page.locator('output')).toHaveText('€2,000');
    await expect(page.getByRole('button', { name: '20h' })).toHaveAttribute('aria-pressed', 'true');
  });

  test('loads more deployment history without replacing existing entries', async ({ page }) => {
    await page.goto('/customers', { waitUntil: 'domcontentloaded' });
    await page.locator('html[data-hydrated="true"]').waitFor();

    const historyEntries = page.locator('main section ol > li');
    await expect(historyEntries).toHaveCount(7);

    await page.getByRole('button', { name: 'Load 7 more deployment history entries' }).click();
    await expect(historyEntries).toHaveCount(14);
  });

  test('renders the branded not-found route', async ({ page }) => {
    const response = await page.goto('/definitely-not-a-route', { waitUntil: 'domcontentloaded' });

    expect(response?.status()).toBe(404);
    await expect(page.getByRole('heading', { name: 'Endpoint not implemented.' })).toBeVisible();
  });
});
