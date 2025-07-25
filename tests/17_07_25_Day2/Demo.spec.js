import { test, expect } from '@playwright/test'

test('Facebook Home test', async ({ page }) => {

    await page.goto("https://www.facebook.com/")

    const title = await page.title()

    console.log(title);

})