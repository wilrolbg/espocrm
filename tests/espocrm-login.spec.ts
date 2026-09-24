import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test('Login to EspoCRM demo and verify dashboard loads in Spanish', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.loginAsAdministratorInSpanish();
  await dashboardPage.waitForDashboardToLoad();
});
