import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';

let loginPage: LoginPage;

Given('I am on the login page', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
  await this.page.waitForLoadState('networkidle'); // Wait for the network to be idle
});

When('I enter a valid username and password', async function () {
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
});

When('I click the login button', async function () {
    await loginPage.loginButton.waitFor({ state: 'visible', timeout: 10000 }); // Wait until the button is visible
    await loginPage.loginButton.click(); // Click the button
  });
  
When('I enter an invalid username or password', async function () {
  await loginPage.login('invalidUser', 'invalidPassword');
});

When('I leave both fields empty', async function () {
  await loginPage.login('', '');
});

Then('I should see a message {string}', async function (expectedMessage) {
  const actualMessage = await loginPage.getSuccessMessage();
  expect(actualMessage).toContain(expectedMessage);
});

Then('I should see an error message {string}', async function (expectedMessage) {
  const actualMessage = await loginPage.getErrorMessage();
  expect(actualMessage).toContain(expectedMessage);
});
