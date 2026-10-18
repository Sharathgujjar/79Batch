import {test} from '@playwright/test'
import { General } from '../lib/General'

test('editemployee', async({page})=>{
const obj = new General(page);
await obj.openapplication();
await obj.wait();
await obj.login();
await obj.wait();
await obj.editname();
await obj.wait();
await obj.logout();
await obj.wait();



});