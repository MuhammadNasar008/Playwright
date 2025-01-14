import { Page, Locator } from 'playwright';
import { config } from '../support/config';

export class LoginPage {
  private usernameField: Locator;
  private passwordField: Locator;
  public loginButton: Locator;
  private successMessage: Locator;
  private errorMessage: Locator;

  constructor(private page: Page) {
    // Initialize locators
    this.usernameField = this.page.locator('#username');
    this.passwordField = this.page.locator('#password');
    this.loginButton = this.page.locator('button[type="submit"]');
    this.successMessage = this.page.locator('.flash.success');
    this.errorMessage = this.page.locator('.flash.error');
  }

  // Navigate to the login page
  async navigate() {
    await this.page.goto(config.baseURL);
  }

  // Perform login with provided credentials
  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    // await this.loginButton.click();
  }

  // Get success message, waiting for it to appear
  async getSuccessMessage(): Promise<string> {
    await this.successMessage.waitFor({ state: 'visible' }); // Wait until the message is visible
    const message = await this.successMessage.textContent();
    if (!message) {
      throw new Error('Success message not found or empty.');
    }
    return message.trim(); // Return trimmed message
  }

  // Get error message, waiting for it to appear
  async getErrorMessage(): Promise<string> {
    await this.errorMessage.waitFor({ state: 'visible' }); // Wait until the message is visible
    const message = await this.errorMessage.textContent();
    if (!message) {
      throw new Error('Error message not found or empty.');
    }
    return message.trim(); // Return trimmed message
  }
}
