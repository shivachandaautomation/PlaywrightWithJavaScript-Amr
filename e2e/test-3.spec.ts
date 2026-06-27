import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // await page.getByRole('heading', { name: 'Login' }).click({button: 'right' });

  // await page.getByRole('textbox', { name: 'Username' }).click();n' }).click();
  await page.getByRole('heading', { name: 'Login' }).click();
  await page.getByText('Forgot your password?').click();


  


});