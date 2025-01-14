import { Page } from 'playwright';

export async function waitForElement(page: Page, selector: string): Promise<void> {
  await page.waitForSelector(selector, { timeout: 5000 });
}
