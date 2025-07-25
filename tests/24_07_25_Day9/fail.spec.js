import {test, expect} from "@playwright/test"

test("Skip test case 1", async ({page})=>{

await page.goto("https://www.facebook.com/")
await expect(page).toHaveTitle("Facebook – log in or sign up");

})

test.fail("Skip test case 2", async ({page})=>{

await page.goto("https://www.facebook.com/")
await expect(page.locator("#email1")).toBeVisible();
    
})