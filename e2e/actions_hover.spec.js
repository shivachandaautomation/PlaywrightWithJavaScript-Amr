import {test, expect} from '@playwright/test'

test('actions_hover practice', async ({page}) => {
    await page.goto('https://demoqa.com/menu');
    await page.waitForTimeout(5000)
    await page.getByRole('link', { name: 'Main Item 2' }).hover()
    await page.waitForTimeout(5000)
    await expect(page.locator('a').filter({ hasText: 'Sub Item' }).first()).toBeVisible()
    await expect(page.locator('a').filter({ hasText: 'Sub Item' }).last()).toBeVisible()
    await expect(page.locator('a').filter({ hasText: 'SUB SUB LIST »' })).toBeVisible()
    await page.waitForTimeout(5000)  


    // await page.close()

    
});