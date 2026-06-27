import {test, expect} from '@playwright/test'

test('getbylable_css practice', async ({page}) => {
    await page.goto('https://automationexercise.com');   
    
    // page.locator(css selector)
    // page.locator(xpath)
    // page.locator(id)
    // page.locator(class)
    // page.locator(Attribute)
    // page.locator(name)

    await page.locator('input#susbscribe_email').highlight();  // css selector
    await page.locator('h2.title text-center').highlight();

    

    
     await page.close();

     })