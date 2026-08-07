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

  test('publishes canonical URLs on static and dynamic routes', async ({ page }) => {
    const canonical = page.locator('link[rel="canonical"]');

    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await expect(canonical).toHaveAttribute('href', 'https://mbianchi.dev/');

    await page.goto('/about', { waitUntil: 'domcontentloaded' });
    await expect(canonical).toHaveAttribute('href', 'https://mbianchi.dev/about/');

    await page.goto('/blog/building-scalable-cloud-native-applications', {
      waitUntil: 'domcontentloaded',
    });
    await expect(canonical).toHaveAttribute(
      'href',
      'https://mbianchi.dev/blog/building-scalable-cloud-native-applications/'
    );
  });

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

  test('updates the compatibility result', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.locator('html[data-hydrated="true"]').waitFor();

    const automationBacklog = page.getByRole('button', { name: /Automation backlog/ });
    await automationBacklog.click();

    await expect(automationBacklog).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#compatibility-result')).toContainText(
      'Automate repeated work without automating responsibility.'
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
    await page.goto('/', { waitUntil: 'load' });

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

    await expect(page.getByRole('heading', { name: 'Platform as a Human' })).toBeVisible();
    await expect(
      page.getByText(
        'Matteo turns customer pain into cloud systems, developer platforms, and AI automation people actually adopt - then tells the story to engineers, leaders and the open source community.'
      )
    ).toBeVisible();
    await expect(page.getByRole('link', { name: 'Start trial' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'See changelog' })).toHaveAttribute(
      'href',
      '/roadmap/'
    );
    await expect(
      page.getByText(
        'Human infrastructure for teams that need platforms, AI automation, customer outcomes, and clear technical communication to reinforce each other.'
      )
    ).toBeVisible();
    await expect(
      page.getByText(
        'Repeated work tends to become a script, agent, or internal product. Humans keep the judgment and the reclaimed time.'
      )
    ).toBeVisible();

    const featured = page
      .getByRole('heading', { name: 'Platform Engineering Roadmap' })
      .locator('xpath=ancestor::article');
    const sendbox = page
      .getByRole('heading', { name: 'Sendbox' })
      .locator('xpath=ancestor::article');
    const [featuredBox, sendboxBox] = await Promise.all([
      featured.boundingBox(),
      sendbox.boundingBox(),
    ]);

    expect(featuredBox).not.toBeNull();
    expect(sendboxBox).not.toBeNull();
    expect(Math.abs(featuredBox!.height - sendboxBox!.height)).toBeLessThan(2);

    const integrations = page
      .getByRole('heading', { name: 'Native integrations. Human judgment included.' })
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

  test('keeps benchmark metrics separated and pricing cards aligned', async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1000 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const benchmarks = page
      .getByRole('heading', { name: 'Field report, not vanity dashboard.' })
      .locator('xpath=ancestor::section');
    const metricRows = benchmarks.locator('dl > div');
    await expect(metricRows).toHaveCount(3);

    for (let index = 0; index < 3; index += 1) {
      const row = metricRows.nth(index);
      const [valueBox, copyBox] = await Promise.all([
        row.locator('dt').boundingBox(),
        row.locator('dd').boundingBox(),
      ]);

      expect(valueBox).not.toBeNull();
      expect(copyBox).not.toBeNull();
      expect(valueBox!.x + valueBox!.width).toBeLessThan(copyBox!.x);
    }

    const primaryMetricLines = await benchmarks.getByText('20–25%', { exact: true }).evaluate(
      (element) => {
        const range = document.createRange();
        range.selectNodeContents(element);
        return range.getClientRects().length;
      }
    );
    expect(primaryMetricLines).toBe(1);

    await page.goto('/pricing', { waitUntil: 'domcontentloaded' });

    const pricingRows: Array<{
      articleTop: number;
      articleBottom: number;
      headingTop: number;
      priceTop: number;
      descriptionTop: number;
      toggleTop: number;
      actionTop: number;
    }> = [];

    for (const planName of ['Advisory', 'Delivery', 'Full-time']) {
      const plan = page
        .getByRole('heading', { name: planName, exact: true })
        .locator('xpath=ancestor::article');
      const [articleBox, headingBox, priceBox, descriptionBox, toggleBox, actionBox, hasOverflow] =
        await Promise.all([
          plan.boundingBox(),
          plan.getByRole('heading', { name: planName, exact: true }).boundingBox(),
          plan.locator('strong').first().boundingBox(),
          plan.locator(':scope > p').boundingBox(),
          plan.getByRole('button').boundingBox(),
          plan.locator(':scope > a').boundingBox(),
          plan.evaluate((article) => article.scrollWidth > article.clientWidth + 1),
        ]);

      expect(articleBox).not.toBeNull();
      expect(headingBox).not.toBeNull();
      expect(priceBox).not.toBeNull();
      expect(descriptionBox).not.toBeNull();
      expect(toggleBox).not.toBeNull();
      expect(actionBox).not.toBeNull();
      expect(headingBox!.y + headingBox!.height).toBeLessThan(priceBox!.y);
      expect(hasOverflow).toBe(false);

      pricingRows.push({
        articleTop: articleBox!.y,
        articleBottom: articleBox!.y + articleBox!.height,
        headingTop: headingBox!.y,
        priceTop: priceBox!.y,
        descriptionTop: descriptionBox!.y,
        toggleTop: toggleBox!.y,
        actionTop: actionBox!.y,
      });
    }

    for (const row of [
      'articleTop',
      'articleBottom',
      'headingTop',
      'priceTop',
      'descriptionTop',
      'toggleTop',
      'actionTop',
    ] as const) {
      const positions = pricingRows.map((plan) => plan[row]);
      expect(Math.max(...positions) - Math.min(...positions)).toBeLessThanOrEqual(1);
    }
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
