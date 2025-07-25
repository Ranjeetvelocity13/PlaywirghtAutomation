import {test,expect} from "@playwright/test"

test("Page screesnshot down" , async ({page}) =>{


  await page.goto("https://the-internet.herokuapp.com/infinite_scroll")
  await page.screenshot({path:'tests/Screenshot/'+Date.now()+"Homepage.png"})

})

test("Page screesnshot down 1" , async ({page}) =>{

  await page.goto("https://www.facebook.com/")
  await page.screenshot({path:'tests/Screenshot/'+Date.now()+"Homepage.png"})

})

test("Full page screesnshot " , async ({page}) =>{

  await page.goto("https://www.facebook.com/")
  await page.screenshot({path:'tests/Screenshot/'+Date.now()+"Fullpage.png",fullPage:true})

})

test("facebook page screesnshot " , async ({page}) =>{

  await page.goto("https://www.facebook.com/")
  await page.locator("//img[@class='fb_logo _8ilh img']").screenshot({path:'tests/Screenshot/'+Date.now()+"facebook.png",fullPage:false})

})
