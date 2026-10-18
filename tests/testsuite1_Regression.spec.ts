import {test} from '@playwright/test'
import { General } from '../lib/General';

test.describe('regression test suite', ()=>{

    test('TC001_Login_Logout', async ({page})=>{
        const obj=new General(page);
    
        await obj.openapplication();
        await obj.login();
        await obj.logout();
    
    
    
    });

    test('TC002_addnewemployee', async({page})=>{

const obj1=new General(page);

await obj1.openapplication();
await obj1.wait();
await obj1.login();
await obj1.wait();
await obj1.addnewemployee();
await obj1.wait();
await obj1.logout();
await obj1.wait();


});



});