# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testsuite1_Regression.spec.ts >> regression test suite >> TC002_addnewemployee
- Location: tests\testsuite1_Regression.spec.ts:17:9

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://sureshitacademy.in/hrms/login.php
Call log:
  - navigating to "https://sureshitacademy.in/hrms/login.php", waiting until "load"

```

# Test source

```ts
  1  | // To provide all re-useable methods / functions related to whole application.
  2  | import { Global } from "./Global";
  3  | 
  4  | export class General extends Global{
  5  | 
  6  |     //user defined methods
  7  | 
  8  |     async openapplication(){
> 9  |         await this.page.goto(this.url);
     |                         ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://sureshitacademy.in/hrms/login.php
  10 |         console.log("application opened");
  11 |     }
  12 | 
  13 |     async login(){
  14 |         await this.page.locator(this.textbox_loginname).fill(this.username);
  15 |         await this.page.locator(this.textbox_password).fill(this.password);
  16 |         await this.page.locator(this.button_login).click();
  17 |         console.log("login succesful");
  18 |     }
  19 | 
  20 | 
  21 |    async addnewemployee(){
  22 | 
  23 |         const frame=this.page.frameLocator(this.iframe);
  24 |         await frame.locator(this.button_add).click();
  25 |         await frame.locator(this.textbox_firstname).fill(this.firstname);
  26 |         await frame.locator(this.textbox_lastname).fill(this.lastname);
  27 |         await frame.locator(this.button_save).click();
  28 |         console.log("Employee added succesfully");
  29 |     } 
  30 | 
  31 |      
  32 | 
  33 |     async logout(){
  34 |         await this.page.locator(this.link_logout).click();
  35 |         console.log("logout succesful")
  36 | 
  37 |     }
  38 | 
  39 |     async wait(){
  40 |         await this.page.waitForTimeout(3000);
  41 |     }
  42 | 
  43 |     async editname(){
  44 |         const frame=this.page.frameLocator(this.iframe);
  45 |         await frame.locator(this.link_suresh).click();
  46 |         await frame.locator(this.button_edit).click();
  47 |         await frame.locator(this.textbox_middlename).fill(this.middlename);
  48 |         await frame.locator(this.checkbox_smoker).check();
  49 |         await frame.locator(this.dropdown_nationality).selectOption(this.option);
  50 |         await frame.locator(this.button_save1).click();
  51 |         //await this.page.locator(this.link_logout1).click();
  52 |         console.log("updated succesfully");
  53 |  }
  54 |     
  55 |     async delete(){
  56 |         const frame=this.page.frameLocator(this.iframe);
  57 |         await frame.locator(this.dropdown_searchby).selectOption(this.searchoption);
  58 |         await frame.locator(this.textbox_searchfor).fill(this.searchfor);
  59 |         await frame.locator(this.button_search).click();
  60 |         await frame.locator(this.checkbox_employee).check();
  61 |         await frame.locator(this.button_delete).click();
  62 | 
  63 |     }
  64 | 
  65 | 
  66 | 
  67 | 
  68 | 
  69 |     }
  70 | 
  71 | 
  72 |     
  73 | 
```