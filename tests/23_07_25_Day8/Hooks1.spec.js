import {test,expect} from "@playwright/test"

let page;
test.beforeAll(async({browser}) =>{

    console.log("Opening  the page ")
     const cotext = await browser.newContext();
     page =await cotext.newPage()

    await page.goto("https://www.saucedemo.com/")
    await expect(page).toHaveURL("https://www.saucedemo.com/")

})

test('Test 1 -  check inventory page title',async () =>{

    console.log("clsoing  the page 1")
})

test('Test 2 -  check inventory page title',async () =>{

    console.log("clsoing  the page 2")
})

test.afterAll(async()=>{

    console.log("Logout after each test")

})
