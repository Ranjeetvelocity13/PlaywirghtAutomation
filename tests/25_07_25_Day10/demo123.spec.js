import {test,expect} from "@playwright/test"
import fs from 'fs'

const credentails =JSON.parse(fs.readFileSync('/Users/ranjeetkendre/Documents/AutomationProjects/11JanPlaywrightAutomation/LoginTestData/Usercre.json','utf-8'))

for(const[storeName , cred] of Object.entries(credentails.Stores)){

test(`Login test for  ${storeName}`,async ({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.fill("//input[@name='username']", cred.username)
    await page.fill("//input[@name='password']", cred.password)
    await page.click('//button[@type="submit"]')
    await page.waitForTimeout(3000)

    const errovisbile = await page.locator('//p[@class="oxd-text oxd-text--p oxd-alert-content-text"]')

    if(errovisbile){
       const errormsg =await page.locator('//p[@class="oxd-text oxd-text--p oxd-alert-content-text"]')
       console.log(`${storeName}:${errormsg}`)
    }
    else{
     await expect(page).toHaveTitle("orangeHRM")
     console.log(`${storeName}`)
    }
})
}