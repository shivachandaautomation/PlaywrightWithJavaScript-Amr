const { test, expect } = require('@playwright/test');

test('Verify Google Title', async ({ page }) => {

    await page.goto('https://www.google.com');

    await expect(page).toHaveTitle(/Google/);

});

// tests/pw_practice_tests.spec.js