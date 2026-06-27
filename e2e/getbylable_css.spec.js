import {test, expect} from '@playwright/test'

test('getbylable_css practice', async ({page}) => {
    await page.goto('https://automationexercise.com');
    await expect(page.locator('input#susbscribe_email')).toBeVisible();
    await page.locator('input#susbscribe_email').highlight();   
    
     await page.close();

     })