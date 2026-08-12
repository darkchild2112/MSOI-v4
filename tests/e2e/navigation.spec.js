import { test, expect } from '@playwright/test';
import { viewports } from './viewports.js';

const waitForScrollToSettle = (page) =>
  page.evaluate(
    () =>
      new Promise((resolve) => {
        let lastY = window.scrollY;
        let stableFrames = 0;

        const check = () => {
          if (window.scrollY === lastY) {
            stableFrames += 1;
            if (stableFrames > 5) {
              resolve();
              return;
            }
          } else {
            stableFrames = 0;
            lastY = window.scrollY;
          }
          requestAnimationFrame(check);
        };

        requestAnimationFrame(check);
      }),
  );

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

    test('clicking a nav link smooth-scrolls to the target section', async ({ page }) => {
      await page.goto('/');

      if (view.name === 'mobile') {
        await page.locator('#menuBtn').click();
      }

      await page.locator('#navigation a[href="/#services"]').click();

      await expect(page).toHaveURL(/#services$/);
      expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
    });

    test('navigating back to the Home section does not hide it behind the sticky header', async ({ page }) => {
      await page.goto('/');

      const clickNavLink = async (href) => {
        if (view.name === 'mobile') {
          await page.locator('#menuBtn').click();
        }
        await page.locator(`#navigation a[href="${href}"]`).click();
      };

      // Scroll away from the top first, so clicking Home is a real "navigate back" case.
      await clickNavLink('/#contact');
      await waitForScrollToSettle(page);
      await clickNavLink('/#body');
      await waitForScrollToSettle(page);

      const headerHeight = await page.locator('header').evaluate((el) => el.getBoundingClientRect().height);
      const bannerTop = await page.locator('#banner').evaluate((el) => el.getBoundingClientRect().top);

      expect(bannerTop).toBeGreaterThanOrEqual(headerHeight - 1);
    });
  });
}
