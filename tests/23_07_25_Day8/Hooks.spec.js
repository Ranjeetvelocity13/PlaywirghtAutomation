import {test,expect} from "@playwright/test"


test.beforeEach(async({page}) =>{

    await page.goto('https://www.saucedemo.com/')

    await page.fill('#user-name','standard_user')
    await page.fill("#password",'secret_sauce')
    await page.click("#login-button")
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})

test('Test 1 -  check inventory page title',async ({page}) =>{

   const title= await page.title();
   console.log(title)
   expect(title).toContain("Swag Labs")
})

test('Test 2 -  check inventory page title',async ({page}) =>{

   const title= await page.title();
   console.log(title)
   expect(title).toContain("Swag Labs")

})


test.afterEach(async({page})=>{

    console.log("::Logout after each test")
    await page.click("#react-burger-menu-btn")
    await page.click('#logout_sidebar_link')

})
