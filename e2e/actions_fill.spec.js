import {test, expect} from '@playwright/test'

test('actions_fill practice', async ({page}) => {
    await page.goto('https://demoqa.com/text-box');
    // await page.locator('#userName').fill('amrutha k') // 1st way
    // await page.fill('#userName','amrutha k')  // 2nd way
    // const username = await page.locator('#userName')
    // username.fill('amrutha k')  // 3rd way
    // // --------same CSS different ways -------------------
    // await page.locator('#userName').fill('amrutha k')
    // await page.locator('input#userName').fill('amrutha k')
    // await page.locator('css=input#userName').fill('amrutha k')
    // await page.locator('css=input[id=userName]').fill('amrutha k')
    // await page.locator('input[id=userName]').fill('amrutha k')
    // type method

    await page.locator('#userName').pressSequentially('amrutha k')
    await page.waitForTimeout(5000) ;
    await page.locator('#userName').clear()  
    await page.waitForTimeout(5000) ;

    await page.close();

    });