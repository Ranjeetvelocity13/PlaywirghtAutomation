import { test, expect } from '@playwright/test';

test('Handle JavaScript prompt and send data', async ({ page }) => {
  // Navigate to any site
  await page.goto('https://example.com');

  // Set up dialog handler for prompt
  page.once('dialog', async dialog => {
    console.log('Prompt message:', dialog.message());
    await dialog.accept('Ranjeet'); // Sending data to the prompt
  });

  // Trigger a prompt using JavaScript (for demo purpose)
  await page.evaluate(() => prompt('Enter your name:', 'Default Name'));

  console.log('Prompt handled with input');
});
