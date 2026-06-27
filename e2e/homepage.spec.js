// const { test, expect} = require('@playwright/test');
import { test, expect} from '@playwright/test';

test('validate title', async ({ page}) => {
    await page.goto('https://automationexercise.com/');
    const title = await page.title();
    console.log('Page title', title);
    await page.getByRole('link', {name: 'Products'}).click();


    await expect(page).toHaveTitle('Automation Exercise');
    await expect(page).toHaveURL('https://automationexercise.com/products')

    await page.close();

});