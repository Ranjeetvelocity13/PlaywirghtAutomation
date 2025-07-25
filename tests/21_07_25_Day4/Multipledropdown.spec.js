import { test, expect } from '@playwright/test'

test("DropDown", async ({page}) =>{


  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.selectOption('#colors',['Blue','Red','White'])

  await page.waitForTimeout(5000)
})