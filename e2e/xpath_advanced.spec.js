import {test, expect} from '@playwright/test'

test('xpath-advanced practice', async ({page}) => {
    await page.goto('https://demoqa.com/text-box'); 
    // await page.locator("//input[@id='userName']").fill("John");
    // await page.locator("//div[@class='col-md-9 col-sm-12']//input[@id='userName']").fill("I am not John");
     await page.locator(
     await page.locator(xpath).click();
     await page.locator("//label[text()='Username']/following-sibling::input").click();
    
    
     await page.close();

     

     })