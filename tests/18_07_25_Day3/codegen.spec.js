import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal-email').fill('Rahul@gmaul.com');
  await page.getByTestId('royal-pass').fill('Rahul@123');
  await page.getByTestId('royal-login-button').click();
  
});