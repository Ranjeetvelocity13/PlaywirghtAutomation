import { test, expect } from '@playwright/test'

test("DropDown", async ({page}) =>{

  await page.goto('https://testautomationpractice.blogspot.com/');

   await page.waitForTimeout(3000)
//   await page.locator("#country").selectOption({label :'Japan'})
//   await page.waitForTimeout(5000)
//   await page.locator("#country").selectOption({label :'India'})
//   await page.waitForTimeout(3000)
//   await page.selectOption('#country','France')
//   await page.waitForTimeout(3000)

  //Assertion
//   const option =await page.locator('#country option')
//   await expect(option).toHaveCount(10)

  //Check numbersoption in listbox
  const options =await page.$$('#country option')

//  console.log("Number of options:",options.length)
//  await expect(options.length).toBe(10)

//  let status =false

//  for(const option of options){
//     let value = await option.textContent();
//     if(value.includes('India')){
//         status = true
//         break
//     }
//  }
 await page.waitForTimeout(3000)

 const content =await page.locator('#country').textContent();
 await expect(content.includes('India1')).toBeTruthy();

 
})