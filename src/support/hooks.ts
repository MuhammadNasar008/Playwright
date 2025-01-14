import { Before, After, Status } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  this.page = await context.newPage(); // Attach the page to the custom world
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshotPath = `reports/screenshots/${scenario.pickle.name.replace(/ /g, '_')}.png`;
    await this.page.screenshot({ path: screenshotPath });
    console.log(`Screenshot taken: ${screenshotPath}`);
  }
  if (this.page) await this.page.close();
  if (browser) await browser.close();
});
