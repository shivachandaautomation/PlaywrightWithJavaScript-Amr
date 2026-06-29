import {test, expect} from '@playwright/test'

test('actions_keyboard_actions practice', async ({page}) => {
    await page.goto('https://demoqa.com/text-box');
    await page.keyboard.press('Enter');
    await page.keyboard.press('End');
    await page.keyboard.press('F1');
    await page.keyboard.press('Delete');
    await page.keyboard.press('Tab');
    await page.keyboard.type('hfagfjafgajfg')



    await page.close();

    });