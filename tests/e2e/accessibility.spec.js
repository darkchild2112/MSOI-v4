import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pagesToCheck = ['/', '/services/autism-adhd-assessments', '/services/family-mental-health'];

for (const path of pagesToCheck) {
  test(`${path} has no automatically detectable accessibility violations`, async ({ page }) => {
    await page.goto(path);

    // color-contrast is tracked separately and intentionally excluded here.
    const results = await new AxeBuilder({ page }).disableRules(['color-contrast']).analyze();

    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });
}
