const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({
        headless: false
    });

    const page = await browser.newPage();

    await page.goto('https://playwright.dev');

    const title = await page.title();

    if (title.includes('Playwright')) {
        console.log('PASS');
    } else {
        console.log('FAIL');
    }

    await browser.close();
})();
