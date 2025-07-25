
import { test, expect } from '@playwright/test'

test("Alert Handling", async ({ page }) => {

    //Enabling doalog windos
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog => {
     expect(dialog.type()).toContain('confirm')
     expect(dialog.message()).toContain('Press a button!')
     await dialog.dismiss()
    })
    

    await page.click('//button[@id="confirmBtn"]')

})