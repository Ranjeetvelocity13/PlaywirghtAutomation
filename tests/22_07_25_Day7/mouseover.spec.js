import { test, expect } from '@playwright/test'

test("Alert Handling", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Frames.html")

   
    const switchTo =await page.locator("//a[text()='Widgets']")

    await switchTo.hover()

    await page.waitForTimeout(2000)

});