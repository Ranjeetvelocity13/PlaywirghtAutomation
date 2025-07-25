import { test, expect } from '@playwright/test'

test('Facebook title valdation test', async ({ page }) => {

    await page.goto("https://www.facebook.com/")

    await expect(page).toHaveTitle("Facebook – log in or sign up")
    await expect(page).toHaveURL("")

})
//npx playwright show-report  
//npx playwright test --headed --project=chromium   
//npx playwright test --headed;     
//npx playwright test Secondprogram.spec.js --headed