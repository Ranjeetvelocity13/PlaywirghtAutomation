exports.Homepage =
class Homepage{

  constructor(page){

    this.page = page;
    this.useremail = '#email'
    this.userpassword = '#pass';
    this.loginbtn = '//button[@name="login"]';
   }

   async gotLoginPage(){
    await this.page.goto("https://www.facebook.com/")
   }

   async facebooklogin(username,password){
    await this.page.locator(this.useremail).fill(username)
    await this.page.locator(this.userpassword).fill(password)
    await this.page.locator(this.loginbtn).click();
   }

}