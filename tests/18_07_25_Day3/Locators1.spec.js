import { test, expect } from '@playwright/test'


test('Locators 1', async ({ page }) => {

    await page.goto("https://www.facebook.com/")

    const links = await page.$$('a')

    for (const link of links) {

        let linktext = await link.textContent();
        console.log(linktext)
    }

})

//getByAltText()
//getByRole
//getByPlaceholder
//getByText
//getByyesyid
//getBylable

