import { test, expect } from '@playwright/test';
import { pages } from './pages.js';

test('every page has a distinct, non-empty title and meta description', async ({ page }) => {
  const seo = [];

  for (const path of pages) {
    await page.goto(path);

    const title = await page.title();
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute('content');

    expect(title, `${path} should have a non-empty title`).toBeTruthy();
    expect(description, `${path} should have a non-empty meta description`).toBeTruthy();

    seo.push({ path, title, description });
  }

  const titles = seo.map((entry) => entry.title);
  const descriptions = seo.map((entry) => entry.description);

  expect(new Set(titles).size, `titles should be unique across pages: ${JSON.stringify(seo)}`).toBe(
    titles.length,
  );
  expect(
    new Set(descriptions).size,
    `descriptions should be unique across pages: ${JSON.stringify(seo)}`,
  ).toBe(descriptions.length);
});
