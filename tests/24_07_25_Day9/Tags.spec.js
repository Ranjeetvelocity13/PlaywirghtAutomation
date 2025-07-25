import {test, expect} from "@playwright/test"

test("@Smoke verify sucessful login on saucedemo", async ({page})=>{

await page.goto("https://www.saucedemo.com/")
await page.fill("#user-name",'standard_user')
await page.fill("#password","secret_sauce")
await page.click("#login-button")
await expect(page.locator('.title')).toHaveText("Products")

})

test("@Regression @Smoke Verify login ", async ({page})=>{

await page.goto("https://demoqa.com/text-box")
await page.fill("#userName","Akash")
await page.fill("#userEmail","Akash@gmail.com")
await page.fill("#currentAddress","Pune")
await page.click("#submit")
await expect(page.locator("#output")).toBeVisible()
})

test("@Sanity Verify facebook login ", async ({page})=>{

await page.goto("https://www.facebook.com/")
await page.fill("#email","Akash")
await page.fill("#pass",'wertyu')
await page.click("//button[@name='login']")


})

test("@E2E Verify login 2", async ({page})=>{

await page.goto("https://www.facebook.com/")
await page.locator("#email").fill("Akash")
await page.fill("#email","Akash")
await page.fill("#pass",'wertyu')
await page.click("//button[@name='login']")


})
