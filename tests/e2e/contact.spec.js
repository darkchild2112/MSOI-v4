import { test, expect } from '@playwright/test';
import { viewports } from './viewports.js';

for (const view of viewports) {
  test.describe(`${view.name} viewport`, () => {
    test.use({ viewport: view.viewport });

    test('contact form submits and shows success alert', async ({ page }) => {
      await page.goto('/');

      // Intercept the outbound mail request and return success
      await page.route('**/api/mail/**', (route) => route.fulfill({ status: 200, body: 'OK' }));

      await page.fill('#name', 'Playwright User');
      await page.fill('#email', 'test@example.com');
      await page.fill('#tel', '0123456789');
      await page.fill('#message', 'This is an automated test message.');

      await page.click('button.formButton');

      // Success alert should be visible
      const success = page.locator('.alert.alert-success');
      await expect(success).toBeVisible();
    });

    test('contact form shows error alert when the mail API fails', async ({ page }) => {
      await page.goto('/');

      await page.route('**/api/mail/**', (route) => route.fulfill({ status: 500, body: 'Server error' }));

      await page.fill('#name', 'Playwright User');
      await page.fill('#email', 'test@example.com');
      await page.fill('#tel', '0123456789');
      await page.fill('#message', 'This is an automated test message.');

      await page.click('button.formButton');

      const error = page.locator('.alert.alert-error');
      await expect(error).toBeVisible();
      await expect(page.locator('.alert.alert-success')).not.toBeVisible();
    });

    test('contact form blocks submission when required fields are empty', async ({ page }) => {
      let mailRequestSent = false;
      await page.route('**/api/mail/**', (route) => {
        mailRequestSent = true;
        route.fulfill({ status: 200, body: 'OK' });
      });

      await page.goto('/');
      await page.click('button.formButton');

      expect(mailRequestSent).toBe(false);
      await expect(page.locator('.alert.alert-success')).not.toBeVisible();
      await expect(page.locator('.alert.alert-error')).not.toBeVisible();

      const nameIsValid = await page.locator('#name').evaluate((el) => el.checkValidity());
      expect(nameIsValid).toBe(false);
    });

    test('contact form blocks submission when email is not a valid address', async ({ page }) => {
      let mailRequestSent = false;
      await page.route('**/api/mail/**', (route) => {
        mailRequestSent = true;
        route.fulfill({ status: 200, body: 'OK' });
      });

      await page.goto('/');

      await page.fill('#name', 'Playwright User');
      await page.fill('#email', 'not-an-email');
      await page.fill('#message', 'This is an automated test message.');

      await page.click('button.formButton');

      expect(mailRequestSent).toBe(false);
      await expect(page.locator('.alert.alert-success')).not.toBeVisible();

      const emailIsValid = await page.locator('#email').evaluate((el) => el.checkValidity());
      expect(emailIsValid).toBe(false);
    });
  });
}
