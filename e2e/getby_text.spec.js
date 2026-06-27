import {test, expect} from '@playwright/test'

test('getbytext practice', async ({page}) => {
    await page.goto('https://automationexercise.com');
    // await expect(page.getByText('Subscription')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible()
    
     await page.close();

     })