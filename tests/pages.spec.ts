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
  { name: 'status', path: '/status', title: 'Status — Matteo' },
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
      const logo = lovedBy.getByRole('img', { name: company });
      await expect(logo).toHaveCount(1);
      await expect
        .poll(() => logo.evaluate((image: HTMLImageElement) => image.naturalWidth))
        .toBeGreaterThan(0);
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
        .getByRole('link', { name: 'Product' })
    ).toBeVisible();
  });

  test('uses the requested top navbar', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const navigation = page.getByRole('navigation', { name: 'Primary navigation' });
    for (const label of ['Product', 'Customers', 'Blog']) {
      await expect(navigation.getByRole('link', { name: label, exact: true })).toBeVisible();
    }
    await expect(navigation.getByRole('link', { name: 'Features', exact: true })).toHaveCount(0);
    await expect(navigation.getByRole('link', { name: 'Integrations', exact: true })).toHaveCount(0);
  });

  test('renders the Duck Runtime identity and app metadata', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const headerLogo = page
      .getByRole('banner')
      .getByRole('link', { name: 'Matteo — Human Platform home' });
    const footerLogo = page
      .getByRole('contentinfo')
      .getByRole('link', { name: 'Matteo — Human Platform home' });

    await expect(headerLogo).toBeVisible();
    await expect(footerLogo).toBeVisible();
    await expect(page.locator('[data-brand-mark]')).toHaveCount(2);

    const loadedMarks = await page.locator('[data-brand-mark]').evaluateAll((images) =>
      images.map((image) => (image as HTMLImageElement).naturalWidth)
    );
    expect(loadedMarks.every((width) => width > 0)).toBe(true);

    await expect(page.locator('link[rel="manifest"]')).toHaveAttribute(
      'href',
      /\/manifest\.webmanifest$/
    );
    await expect(page.locator('link[rel~="icon"]').first()).toHaveAttribute('href', /icon|favicon/);
  });

  test('reports status uptime and PTO incident', async ({ page }) => {
    await page.goto('/status', { waitUntil: 'domcontentloaded' });

    await expect(page.getByText('99.99%', { exact: true })).toBeVisible();
    await expect(page.getByText('3 minutes - PTO', { exact: true })).toBeVisible();
    await expect(page.getByText('All systems operational. Human included.')).toBeVisible();
  });

  test('does not expose the removed K-Lab CLI project', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await expect(page.getByText('K-Lab CLI', { exact: true })).toHaveCount(0);

    await page.goto('/portfolio', { waitUntil: 'domcontentloaded' });
    await expect(page.getByText('K-Lab CLI', { exact: true })).toHaveCount(0);
  });

  test('uses the requested homepage copy and balanced proof layout', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await expect(page.getByRole('link', { name: 'buy Matteo' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'See changelog' })).toHaveAttribute(
      'href',
      '/roadmap/'
    );
    await expect(
      page.getByText(
        'Human infrastructure for teams that want the (agenic or not) systems and the story to be equally good.'
      )
    ).toBeVisible();
    await expect(
      page.getByText(
        'Will explain architecture, trade-offs, and why the team should care. Will also get the work done. People might get upset for this amount of proactivity.'
      )
    ).toBeVisible();

    const featured = page
      .getByRole('heading', { name: 'Platform Engineering Roadmap' })
      .locator('xpath=ancestor::article');
    const engineeringInterviews = page
      .getByRole('heading', { name: 'Engineering Interviews' })
      .locator('xpath=ancestor::article');
    const [featuredBox, interviewsBox] = await Promise.all([
      featured.boundingBox(),
      engineeringInterviews.boundingBox(),
    ]);

    expect(featuredBox).not.toBeNull();
    expect(interviewsBox).not.toBeNull();
    expect(Math.abs(featuredBox!.height - interviewsBox!.height)).toBeLessThan(2);

    const integrations = page
      .getByRole('heading', { name: 'Native integrations. Emotionally stable dependencies.' })
      .locator('xpath=ancestor::section');
    const integrationsColors = await integrations.evaluate((section) => {
      const computed = getComputedStyle(section);
      return {
        background: computed.backgroundColor,
        color: computed.color,
      };
    });

    expect(integrationsColors).toEqual({
      background: 'rgb(0, 217, 255)',
      color: 'rgb(10, 10, 11)',
    });
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
      'Changelog',
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
    const historyLogos = page.locator('[data-customer-logo]');
    const historyImages = historyLogos.locator('img');
    await expect(historyEntries).toHaveCount(7);
    await expect(historyLogos).toHaveCount(7);
    await expect(historyImages).toHaveCount(6);

    await page.getByRole('button', { name: 'Load 7 more deployment history entries' }).click();
    await expect(historyEntries).toHaveCount(14);
    await expect(historyLogos).toHaveCount(14);
    await expect(historyImages).toHaveCount(13);

    const loadedWidths = await historyImages.evaluateAll((images) =>
      images.map((image) => (image as HTMLImageElement).naturalWidth)
    );
    expect(loadedWidths.every((width) => width > 0)).toBe(true);
  });

  test('renders the branded not-found route', async ({ page }) => {
    const response = await page.goto('/definitely-not-a-route', { waitUntil: 'domcontentloaded' });

    expect(response?.status()).toBe(404);
    await expect(page.getByRole('heading', { name: 'Endpoint not implemented.' })).toBeVisible();
  });
});
