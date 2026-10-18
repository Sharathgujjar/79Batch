//To provide actual automation scripts 

import {test} from '@playwright/test';
import { General } from '../lib/General';

test('@Smoke_TC001_Login_Logout', async ({page})=>{
    const obj=new General(page);

    await obj.openapplication();
    await obj.login();
    await obj.logout();



});
