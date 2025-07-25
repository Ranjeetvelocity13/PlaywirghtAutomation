
import { test, expect } from '@playwright/test'

test("Alert Handling", async ({ page }) => {

    //Enabling doalog windos
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog => {
     expect(dialog.type()).toContain('prompt')
     expect(dialog.message()).toContain('Please enter your name:')
     expect (dialog.defaultValue()).toContain("Harry Potter")
     await dialog.accept()
    })
    
    await page.click('//button[@id="promptBtn"]')
    await page.evaluate(() => prompt("Enter you name")) 

})

