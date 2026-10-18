//To provide Test Data and objects / elements related to whone application
import {Page} from '@playwright/test'

export class Global{

        constructor(public page : Page){

        }



    //------------------Test Data-------------------------*/
public url:string = "https://sureshitacademy.in/hrms/login.php";
public username:string="sureshit";
public password:string="sureshit";

public firstname:string="Sharath";
public lastname:string="ja";

public middlename:string="Gujjar";
public option:string="INDIANS";

public searchoption:string="Emp. ID";
public searchfor:string="12204";

    //-----------------objects/elements-------------------*/

public textbox_loginname:string="//input[@name='txtUserName']";
public textbox_password:string="//input[@name='txtPassword']";
public button_login:string="//input[@name='Submit']";
public link_logout:string="//a[text()='Logout']";

public iframe:string="//iframe[@id='rightMenu']";
public button_add:string="//input[@type='button'][@class='plainbtn'][@value='Add']";
public textbox_firstname:string="//input[@name='txtEmpFirstName']"; 
public textbox_lastname:string="//input[@name='txtEmpLastName']";
public button_save:string="//input[@class='savebutton'][@value='Save']"


public link_suresh:string="(//a[contains(text(),'Suresh Gujjar Hyderabad')])[1]"
public button_edit:string="//input[@name='EditMain'][@id='btnEditPers']";
public textbox_middlename:string="//input[@name='txtEmpMiddleName']";
public checkbox_smoker:string="//input[@name='chkSmokeFlag']";
public dropdown_nationality:string="//select[@name='cmbNation']";
public button_save1:string="//input[@id='btnEditPers'][@value='Save']";


public dropdown_searchby:string="//select[@name='loc_code']";
public textbox_searchfor:string="//input[@name='loc_name'][@type='text']";
public button_search:string="//input[@value='Search'][@type='button']['.plainbtn']"
public checkbox_employee:string="//input[@type='checkbox'][@value='12204']";
public button_delete:string="//input[@value='Delete'][@type='button']";
}