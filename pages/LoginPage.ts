import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameDropdown: Locator;
  readonly languageDropdown: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameDropdown = page.locator('select').nth(0);
    this.languageDropdown = page.locator('select').nth(1);
    this.loginButton = page.locator('button').filter({ hasText: 'Login' });
  }

  async goto() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    await this.usernameDropdown.waitFor({ state: 'visible', timeout: 30000 });
    await this.languageDropdown.waitFor({ state: 'visible', timeout: 30000 });
  }

  async loginAsAdministratorInSpanish() {
    await this.usernameDropdown.selectOption({ label: 'Administrator' });
    await this.languageDropdown.selectOption({ label: 'Spanish (Spain)' });
    await this.loginButton.click();
  }
}
