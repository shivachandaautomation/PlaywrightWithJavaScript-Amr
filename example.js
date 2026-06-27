const { chromium } = require('playwright');

(async () => {
  console.log("Starting...");
    const browser = await chromium.launch({
    headless: false,
    slowMo: 1000
});
//   const browser = await chromium.launch();

  const page = await browser.newPage();

  await page.goto('https://playwright.dev');

  const title = await page.title();
  console.log("Title:", title);

  await browser.close();

  console.log("Done");
})();