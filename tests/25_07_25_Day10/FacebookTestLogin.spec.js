import { test, expect } from "@playwright/test"
import fs from 'fs'

const credentails = JSON.parse(fs.readFileSync('/Users/ranjeetkendre/Documents/AutomationProjects/11JanPlaywrightAutomation/LoginTestData/facelogin.json', 'utf-8'))

//Loop thriugh each accounts

for (const[accountName, creds] of Object.entries(credentails.accounts1)) {


    test(`Facebook login test for ${accountName}`, async ({ page }) => {


        await page.goto("https://www.facebook.com/")
        await page.fill('input[id="email"]', creds.Email)
        await page.fill('input[id="pass"]', creds.password)

        await page.click('button[name="login"]')
        await page.waitForTimeout(3000)

        const errovisbile = await page.locator("div._9ay7").isVisible();
        if (errovisbile) {
            let errmsg = await page.locator("div._9ay7").textContent();
            console.log(`Login Failed for ${accountName} ${errmsg}`)
        }
        else {
            const currentURL = page.url();
            if (currentURL.includes('facebook.com')) {
                console.log(`Login succesful for ${accountName}`)
            }
            else {
                console.log(`Login Failed for ${accountName}`)
            }
        }
    });



}