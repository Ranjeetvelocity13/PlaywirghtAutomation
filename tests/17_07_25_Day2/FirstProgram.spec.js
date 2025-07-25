import { test, expect } from '@playwright/test'

test('Facebook login test', async ({ page }) => {

    await page.goto("https://www.facebook.com/")

    const title = await page.title()

    console.log(title);
    

})

//What is Synchronous (sync) code
//Code executes line by line one after another
//Each line must complete before the next one starts
//if one line atkes time (Like waiting for a webpage to load).it blocks everthing else
console.log("Step 1")
console.log("Step 2")
console.log("Step 3")

//ouptut - Step 1, Step e step 3
//What as Assynchronous (Async) code 
//code that can start a task and move on without waiting for it tof inish
//loaidng a webpage
//Waiting for an element
//Making API calls

// we can use
// Async to define asn async function
// await to pasue until the async task completed


/* What is async?
// The async keyword is used before a function to indicate that the function 
 returns a promise and allows the use of await inside it.
*/

/**
 * What is await?
The await keyword can be used inside an async function to pause the execution of
the function until the promise resolves.
 */


/**
 * Why is async/await important in Playwright?
Playwright commands (like page.goto(), page.click(), page.fill(), etc.) are asynchronous. 
They return promises because they perform actions like navigating to a page, interacting with UI elements, 
or waiting for selectors—all of which take time.

Using await ensures that:

The command completes before moving to the next line.

Tests run in order, avoiding flaky or broken tests.
 */