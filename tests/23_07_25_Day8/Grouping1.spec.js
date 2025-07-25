import { test, expect } from "playwright/test";

test.beforeAll(async()=>{

    console.log("Before all :Rune once before all tests")
})

test.afterAll(async()=>{

    console.log("After all :Rune once after all tests")
})

test.beforeEach(async()=>{

    console.log("Before each : Rune before every tests")
})

test.skip(async()=>{

    console.log("afterEach e : Rune after every tests")
})

//Group
test.describe("Group 1",async()=>{

   test("Test 1 - Addition",async()=>{

    let a = 5
    let b = 10
    let result = a+b
    console.log(`${a}+${b} = ${result}`)
    expect(result).toBe(15)
   })
    test("Test 2 - String match ",async()=>{

     const msg = "Javascript palywright";
     console.log(`Message= ${msg}`)
     expect(msg).toContain('palywright')
   })

})

test.describe("Group 2", ()=>{

 test("Test 2 - String match ",async()=>{

     const msg = "Javascript python";
     console.log(`Message= ${msg}`)
     expect(msg).toContain('python')
   })
})