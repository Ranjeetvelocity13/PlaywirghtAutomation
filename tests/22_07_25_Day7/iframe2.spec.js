import { test, expect } from '@playwright/test'

test("Alert Handling", async ({ page }) => {


    await page.goto("https://demo.automationtesting.in/Frames.html")

    await page.click('text= Iframe with in an Iframe')
    await page.waitForTimeout(2000)
 

    //outerframe

    const outerframe = await page.frameLocator("#Multiple iframe");

    const nestedframetest = await outerframe.locator("//h5[contains(text(),'Nested iFrames')]")

   let textvalue = await nestedframetest.textContent();

   console.log(textvalue)
    if(textvalue == "Nested iFrames"){
        console.log("Correct text")
    }
    else{
        console.log("Incorrec text")
    }
    //intter fame

    const innterframe =await outerframe.frameLocator('iframe');

    await innterframe.locator("//input[@type='text']").fill("Automation testing")

    await page.waitForTimeout(4000)


});