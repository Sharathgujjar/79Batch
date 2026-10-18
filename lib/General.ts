// To provide all re-useable methods / functions related to whole application.
import { Global } from "./Global";

export class General extends Global{

    //user defined methods

    async openapplication(){
        await this.page.goto(this.url);
        console.log("application opened");
    }

    async login(){
        await this.page.locator(this.textbox_loginname).fill(this.username);
        await this.page.locator(this.textbox_password).fill(this.password);
        await this.page.locator(this.button_login).click();
        console.log("login succesful");
    }


   async addnewemployee(){

        const frame=this.page.frameLocator(this.iframe);
        await frame.locator(this.button_add).click();
        await frame.locator(this.textbox_firstname).fill(this.firstname);
        await frame.locator(this.textbox_lastname).fill(this.lastname);
        await frame.locator(this.button_save).click();
        console.log("Employee added succesfully");
    } 

     

    async logout(){
        await this.page.locator(this.link_logout).click();
        console.log("logout succesful")

    }

    async wait(){
        await this.page.waitForTimeout(3000);
    }

    async editname(){
        const frame=this.page.frameLocator(this.iframe);
        await frame.locator(this.link_suresh).click();
        await frame.locator(this.button_edit).click();
        await frame.locator(this.textbox_middlename).fill(this.middlename);
        await frame.locator(this.checkbox_smoker).check();
        await frame.locator(this.dropdown_nationality).selectOption(this.option);
        await frame.locator(this.button_save1).click();
        //await this.page.locator(this.link_logout1).click();
        console.log("updated succesfully");
 }
    
    async delete(){
        const frame=this.page.frameLocator(this.iframe);
        await frame.locator(this.dropdown_searchby).selectOption(this.searchoption);
        await frame.locator(this.textbox_searchfor).fill(this.searchfor);
        await frame.locator(this.button_search).click();
        await frame.locator(this.checkbox_employee).check();
        await frame.locator(this.button_delete).click();

    }





    }


    
