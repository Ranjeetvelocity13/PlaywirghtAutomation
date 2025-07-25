import { test, expect } from '@playwright/test'


test('Locators', async ({ page }) => {

    await page.goto("https://www.facebook.com/")

    //Using CSS selctor
    // await page.locator('#email').fill("Test@gmail.com")
    // await page.waitForTimeout(4000)
    // await page.fill('#email', 'test@gmail.com')
    // await page.waitForTimeout(4000)
    // await page.type('#email', 'test@gmail.com')
    // await page.waitForTimeout(4000)

    // await page.fill("input[id='pass']", "Test@123")


    //Xapth

    await page.locator('//input[@id="email"]').fill("Test@123")
    await page.locator('//input[@id="pass"]').cl("Test@123")
    await page.waitForTimeout(4000)

    //
    await page.click("//button[contains(@name,'login')]")
    await page.locator("//button[contains(@name,'login')]").click()
    await page.waitForTimeout(4000)
    await page.close()

})