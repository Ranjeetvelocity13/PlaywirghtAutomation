import { test, expect } from '@playwright/test'

test("Assertion2", async ({page}) =>{

//HardAssertion
await page.goto("https://www.saucedemo.com/")

// await expect(page).toHaveTitle("Swag Labs1")
// await expect(page).toHaveURL("https://www.saucedemo.com/")

//soft assertion
await expect.soft(page).toHaveTitle("Swag Labs1")
await expect.soft(page).toHaveURL("https://www.saucedemo.com/")

})

