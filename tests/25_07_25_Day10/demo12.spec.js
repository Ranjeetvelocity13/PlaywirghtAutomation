import {test,expect} from "@playwright/test"
import fs from 'fs'

const credentails =JSON.parse(fs.readFileSync('/Users/ranjeetkendre/Documents/AutomationProjects/11JanPlaywrightAutomation/LoginTestData/Usercre.json','utf-8'))

const loginQAdata = "LoginQA"
const {username , password} = credentails.Stores[loginQAdata]
const storeQAData = "LoginQA"
test(`Lgoin test for ${storeQAData}`,async ({page}) =>{


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.fill("//input[@name='username']", username)
    await page.fill("//input[@name='password']", password)

    await page.click('//button[@type="submit"]')
    await page.waitForTimeout(3000)

})
