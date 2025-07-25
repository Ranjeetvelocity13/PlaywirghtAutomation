import { test, expect } from '@playwright/test'

test("Alert Handling", async ({ page }) => {

    await page.goto("https://www.facebook.com/")

    const input1 = page.locator('#email1')
    const input2 = page.locator('#pass')

    await input1.fill('Test@gmail.com')

    const modifykey =process.platform == 'darwin' ? 'Meta' : "Control";

    await input1.press(`${modifykey}+A`)

    //ctrl+C

    await input1.press(`${modifykey}+C`)

    await input1.press('Tab')

    await input2.press(`${modifykey}+V`)

    await page.waitForTimeout(4000)
});