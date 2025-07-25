import { test, expect } from "@playwright/test"
import fs from 'fs'

const credentials = JSON.parse(fs.readFileSync("/Users/ranjeetkendre/Documents/AutomationProjects/11JanPlaywrightAutomation/tests/24_07_25_Day9/test.json", 'utf-8'))

for (const [storeName, cred] of Object.entries(credentials.Stores)) {
  test(`Login test for store: ${storeName}`, async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.fill("#username", cred.username);
    await page.fill("#password", cred.password);
    await page.click("//button[@type='submit']");
    // Optionally, add an assertion here to verify login success
  });
}

