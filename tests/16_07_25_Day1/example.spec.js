
import { test, expect } from '@playwright/test';
import { use, useActionState } from 'react';

test('has title', ({ page }) => {
   page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
   expect(page).toHaveTitle(/Playwright/);
});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal-email').fill('Rahul@gmaul.com');
  await page.getByTestId('royal-pass').click();
  await page.getByTestId('royal-pass').fill('Rahul@123');
  await page.locator('#passContainer div').nth(2).click();
  await page.getByTestId('royal-login-button').click();
});