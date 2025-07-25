import { test, expect } from '@playwright/test'

test("Alert Handling", async ({ page }) => {

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
   
    const doubleclick =await page.locator("//button[text()='Double-Click Me To See Alert']")
    
    await doubleclick.dblclick();

    await page.waitForTimeout(2000)


});