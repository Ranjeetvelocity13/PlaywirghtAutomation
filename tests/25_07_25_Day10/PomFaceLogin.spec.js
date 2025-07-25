import { test, expect } from "@playwright/test"
import fs from 'fs'
import { faceLoginPage } from "../../Pages/faceLoginPage"
import { Homepage } from "../../Pages/Homepage";


test("Valid Login test",async ({page}) =>{


    const login = new faceLoginPage(page);
    await login.gotLoginPage()
    await login.facebooklogin("Test@gmai","qwrrr")
    await page.waitForTimeout(3000)

   //xlxs or exceljs, playwright, playwright test runner, Javascript, python,selenium we

})