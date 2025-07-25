
import { test, expect } from '@playwright/test'

test("Alert Handling", async ({ page }) => {

    //Enabling doalog windos

    page.on('dialog', async dialog => {
     expect(dialog.type()).toContain('alert')
     expect(dialog.message()).toContain('I am an alert box!')
     await page.waitForTimeout(3000)
     await dialog.accept()
    })
    
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.click('#alertBtn')

})