import {test, expect} from '@playwright/test'

test('getbyrole practice', async ({page}) => {
    // await page.goto('https://automationexercise.com');
    // page.getByRole('link', { name: 'Home' })
    // await page.getByText('Home')
    // await page.locator(':text("Home")')

    // await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
    //
    await page.goto('https://automationexercise.com');
    await expect(page.getByRole('img', { name: 'Website for automation practice' })).toBeVisible();
    // await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    // await expect(page.getByRole('link', { name: ' Products' })).toBeVisible();
    // await expect(page.getByText('Cart', { exact: true })).toBeVisible();
    // await expect(page.getByRole('link', { name: 'Signup / Login' })).toBeVisible();
    // // await expect(page.getByRole('link', { name: 'Amrutha' })).toBeVisible();
    await page.close();






})