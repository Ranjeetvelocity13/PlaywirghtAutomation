import { test, expect } from "@playwright/test"

//group 1

test.describe("Home page title", () => {

    test("Verify home page title", async ({ page }) => {

        await page.goto("https://www.saucedemo.com/")
        await expect(page).toHaveTitle("Swag Labs")


    })
    test("Verify home page", async ({ page }) => {
        await page.goto("https://www.saucedemo.com/")
        await expect(page.locator('//div[@class="login_logo"]')).toBeVisible()

    })
})

//Group 2

test.describe("Dashboad test", () => {

    test("Login swag lAbs  ", async ({ page }) => {
        await page.goto("https://www.saucedemo.com/")
        await page.fill('#user-name', 'standard_user')
        await page.fill("#password", 'secret_sauce')
        await page.click("#login-button")

    })
})