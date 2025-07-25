import { test, expect, chromium } from '@playwright/test'

import fs from 'fs'

//load all credentials
const credentials = JSON.parse(fs.readFileSync('/Users/ranjeetkendre/Documents/AutomationProjects/25JunPlaywrightAutomation/LoginTestData/Usercred.json', 'utf-8'))

const  LoginQAdata  = "LoginATG"
const {username, password} = credentials.Stores[LoginQAdata]
const storeQAData = 'LoginQA';

for (const [storeName, cred] of Object.entries(credentials.Stores)) {
  test(`Login test for ${storeName}`, async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.fill('input[name="username"]', cred.username);
    await page.fill('input[name="password"]', cred.password);
    await page.locator('button[type="submit"]').click();

    await page.waitForTimeout(3000);
  });
}
