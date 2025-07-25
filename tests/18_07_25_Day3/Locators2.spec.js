import { test, expect } from '@playwright/test'
//getByAltText()
//getByRole
//getByPlaceholder
//getByText
//getByyesyid
//getBylable
test('OrangeHRM login test', async ({ page }) => {


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


    //getByAltText()
    const logo = await page.getByAltText('company-branding')

     await expect(logo).toBeVisible()
     //fill //sendkys
     await page.getByPlaceholder('Username').fill("Admin")
     await page.getByPlaceholder('password').fill("admin123")

     await page.waitForTimeout(2000)

     await page.getByRole('button',{type:'submit'}).click()
     await page.waitForTimeout(2000)

     let text =await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()

     await expect(page.getByText(text)).toBeVisible()
     
})