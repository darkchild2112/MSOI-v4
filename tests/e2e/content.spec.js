import { test, expect } from '@playwright/test';
import { pages } from './pages.js';

for (const path of pages) {
  test(`${path} loads with a title and no console errors`, async ({ page }) => {
    const consoleErrors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('pageerror', (err) => consoleErrors.push(err.message));

    const response = await page.goto(path);

    expect(response.ok()).toBe(true);
    await expect(page).toHaveTitle(/.+/);
    expect(consoleErrors).toEqual([]);
  });

  test(`${path} has no broken internal links`, async ({ page, request }) => {
    await page.goto(path);

    const hrefs = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a[href]'), (a) => a.getAttribute('href')),
    );

    const internalHrefs = [
      ...new Set(
        hrefs.filter(
          (href) =>
            href &&
            !href.startsWith('http') &&
            !href.startsWith('mailto:') &&
            !href.startsWith('tel:') &&
            !href.startsWith('javascript:'),
        ),
      ),
    ];

    for (const href of internalHrefs) {
      const url = href.startsWith('/') ? href : new URL(href, page.url()).pathname;
      const [target] = url.split('#');

      if (!target) continue;

      const response = await request.get(target);
      expect(response.ok(), `Broken link "${href}" found on ${path}`).toBe(true);
    }
  });
}
