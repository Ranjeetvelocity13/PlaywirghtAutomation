import { format } from "path";
import {test,expect} from "@playwright/test"

test("Scroll down" , async ({page}) =>{


  await page.goto("https://the-internet.herokuapp.com/infinite_scroll")

   //scro;; down multip,e time

   for(let i=0; i< 5 ;i++){
    await page.mouse.wheel(0,1000); //scroll down
    await page.waitForTimeout(1000) //wait for new cotent load
    
   }

   const paragraph = page.locator('.jscroll-added')
   await expect(paragraph.first()).toBeVisible()

})