import { expect, Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForDashboardToLoad() {
    await expect(this.page.locator('body')).toContainText(/Homepage|Inicio|Dashboard/i, { timeout: 30000 });
    await expect(this.page).toHaveURL(/\?l=es_ES|\?l=en_US/);
  }
}
