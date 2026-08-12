import { test, expect } from '@playwright/test';
import { viewports } from './viewports.js';

for (const view of viewports) {
  test.describe(`${view.name} viewport`, () => {
    test.use({ viewport: view.viewport });

    if (view.name === 'mobile') {
      test('mobile menu button toggles navigation panel', async ({ page }) => {
        await page.goto('/');

        const menuBtn = page.locator('#menuBtn');
        const navContainer = page.locator('#nav-container');

        await expect(menuBtn).toBeVisible();
        await expect(navContainer).not.toHaveClass(/open-nav-menu/);

        await menuBtn.click();
        await expect(navContainer).toHaveClass(/open-nav-menu/);

        await menuBtn.click();
        await expect(navContainer).toHaveClass(/close-nav-menu/);
      });
    }

    test('navigation links work and highlight active item', async ({ page }) => {
      await page.goto('/');

      const navHrefList = await page.evaluate(() => Array.from(document.querySelectorAll('#navigation a'), (anchor) => anchor.getAttribute('href')));
      expect(navHrefList.length).toBeGreaterThan(0);

      for (const href of navHrefList) {
        expect(href).toBeTruthy();
        await page.goto(href);

        if (href === '/#body') {
          await expect(page).toHaveURL(/.*#(body|banner)$/);
        } else if (href?.startsWith('/#')) {
          const expectedHash = href.replace('/', '');
          await expect(page).toHaveURL(new RegExp(`.*${expectedHash}$`));
        } else {
          await expect(page).toHaveURL(new RegExp(`.*${href}$`));
        }

        if (href?.startsWith('/services/')) {
          await expect(page.locator(`a[href="${href}"]`).first()).toHaveClass(/active/);
        }
      }
    });
  });
}
