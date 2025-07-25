import { test, expect } from '@playwright/test'

test("Alert Handling", async ({ page }) => {

    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/")
   
    const doubleclick =await page.locator("//button[text()='Double-Click Me To See Alert']")
     
   let frame1 = await page.waitForSelector('iframe.demo-frame')

   const frame = await frame1.contentFrame();

   const src =frame.locator('//img[@alt="The chalet at the Green mountain lake"]')

   const dest = frame.locator('#trash')

   await src.dragTo(dest)

    await page.waitForTimeout(4000)


});
