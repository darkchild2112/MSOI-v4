import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pagesToCheck = ['/', '/services/autism-adhd-assessments', '/services/family-mental-health'];

for (const path of pagesToCheck) {
  test(`${path} has no automatically detectable accessibility violations`, async ({ page }) => {
    await page.goto(path);

    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });
}
