/*tohaveURL
toHaveTitle
tobevisible
tobeenabled
tobechecked
tohaveattribute
tohavvalue
tohavecount
tohavetext8*/

import { test, expect } from '@playwright/test'

test("Assertion", async ({page}) =>{

    //Enter URL
  await page.goto("https://demo.nopcommerce.com/register")

  await page.waitForTimeout(2000)
  
  //TOhavetitle
  await expect(page).toHaveTitle("nopCommerce demo store. Register")

  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

  //Tobevisbile -
  await expect(page.locator('#FirstName')).toBeVisible();

  //4.tobeenables
  await expect(page.locator("#register-button")).toBeEnabled();

  //5.Tobechecked - check checbox is selected
  const checbox =page.locator("#Newsletter")
//   checbox.check();
  await expect(checbox).toBeChecked()

  //tohavevalue -
  const firstName = page.locator("#FirstName");
  await firstName.fill("Mahesh");
  await expect(firstName).toHaveValue('Mahesh')

  //tohavecount
  const links = page.locator('//ul[@class="top-menu notmobile"]/li');
  await expect(links).toHaveCount(7)

  //Tohavetext
  await expect(page.locator('.page-title h1')).toHaveText("Register")

})
