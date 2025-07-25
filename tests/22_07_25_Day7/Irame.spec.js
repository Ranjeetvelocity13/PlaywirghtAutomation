import { test, expect } from '@playwright/test'

test("Alert Handling", async ({ page }) => {


    await page.goto("https://demo.automationtesting.in/Frames.html")

    const frame = await page.frameLocator("iframe[id='singleframe']");

    await frame.locator('//input[@type="text"]').fill("Welcome");

    await page.waitForTimeout(4000)


});