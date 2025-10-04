    import { test, expect } from '@playwright/test';

    test('should mimic logging in to admin dashboard', async ({ page }) => {
      await page.goto('https://app.apprabbit.com/login');

      // Assertions
      await expect(page).toHaveTitle(/AppRabbit Dashboard/);
      await expect(page.locator('button').nth(1)).toHaveText('Continue with Email');

      // Click the 'Continue with Email' button
      await page.getByRole('button', { name: 'Continue with Email'}).click();

      // Locate and enter email into input field
      await page.getByPlaceholder("Email").fill("jasndoner@gmail.com");
      await page.getByRole('button', { name: 'Continue' }).click();

      // Locate and enter password into input field
      await page.getByPlaceholder("Password").fill("puD2i!b7P7RnXX8");
      await page.getByRole('button', { name: 'Log In' }).click();

      // Assert URL change
      await expect(page).toHaveURL(/\/app\/builder/);
    });