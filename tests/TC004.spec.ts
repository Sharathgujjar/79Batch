import {test} from '@playwright/test'
import { General } from '../lib/General'

test('deleteemployee', async({page})=>{

    const obj=new General(page);
    await obj.openapplication();
    await obj.wait();
    await obj.login();
    await obj.wait();
    await obj.delete();
    await obj.wait();
    await obj.logout();
    await obj.wait();




});