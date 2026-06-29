import {test, expect} from '@playwright/test'

test('actions_click practice', async ({page}) => {
    await page.goto('https://demoqa.com/text-box');
    await page.locator("//span[text()='Buttons']").click();
    await page.locator("//button[text()='Click Me']").click();
    
    // await page.getByRole('button', { name: 'Click Me' })).click(); // normal click
    await page.getByRole('button', { name: 'Double Click Me' }).dblclick(); // double click
    await page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'right'}); // right click
    await page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'middle'}); // ,iddle click
    await page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'left'}); // left click
    await page.locator("//button[text()='Click Me']").click({ force: true}); // force clcik
    await page.locator("//button[text()='Click Me']").click({delay: 1000}); // click and delay
    await page.locator("//button[text()='Click Me']").click({clickCount: 2}); // multiple times

    await page.close();

    });