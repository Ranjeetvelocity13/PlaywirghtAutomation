import { test, expect } from '@playwright/test'

priorityTest(1, 'Login Test', async ({ page }) => {
  await page.goto('https://example.com/login');
  // test logic
});

priorityTest(2, 'Search Product', async ({ page }) => {
  await page.goto('https://example.com/search');
  // test logic
});

priorityTest(0, 'Launch App', async ({ page }) => {
  await page.goto('https://example.com');
  // test logic
});
