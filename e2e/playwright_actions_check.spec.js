import {test, expect} from '@playwright/test'

test('actions_check practice', async ({page}) => {
    await page.goto('https://demoqa.com/text-box');
    // Check box practice

    // await page.getByText('Check Box').click()
    // await page.locator('span.rc-tree-checkbox').check();

    // another locators as well
    // await page.getByRole('checkbox').check(); 
    //  await page.getByRole('checkbox').first().check(); 
    //   await page.getByRole('checkbox').nth(0).check();
    // await page.getByRole('checkbox', { name: 'Select Home' }).check()
    // await page.getByRole('checkbox', { name: /Select Home/i }).check()
    // await page.getByLabel('Select Home').check()
    // await page.getByLabel('Home', { exact: false }).check()
    // await page.locator('.rc-tree-checkbox').check() // css
    // // await page.locator('css=span[class=rc-tree-checkbox]').check() 
    // await page.locator('.rc-tree-checkbox').first().click();
    // await page.locator('span.rc-tree-checkbox').first().click();

    // await page.locator("//span[@aria-label='Select Home']").check()   // xpath
    // await page.locator('rc-tree-checkbox').check() // locator(class)

    // Radio button practice
    await page.getByText('Check Box').click()
    await page.locator("//span[normalize-space()='Radio Button']").click();
    
    
    await page.locator("//input[@id='yesRadio']").check();
    await page.getByRole('radio', { name: 'Yes' }).check()
    await page.getByRole('radio', { name: /Yes/i }).check()
    await page.getByLabel('Yes').check()
    await page.getByLabel('Yes', { exact: true }).check()
    await page.locator('#yesRadio').check()
    await page.getByRole('radio').first().check()     

    await page.close();

    });