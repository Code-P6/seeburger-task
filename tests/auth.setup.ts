import { test as setup, expect } from '@playwright/test';
import * as path from 'path';
import { authLocators } from '../src/locators/authLocators';

const authFile = path.join(__dirname, '../.auth/user.json');

setup('authenticate', async ({ page }) => {
  // Get locators
  const locators = authLocators(page);
  
  // Navigate to login page
  await page.goto('/web/index.php/auth/login');
  
  // Enter credentials
  await locators.usernameInput.fill('Admin');
  await locators.passwordInput.fill('admin123');
  
  // Submit the form
  await locators.loginButton.click();
  
  // Wait until the Dashboard is visible to ensure successful login
  await expect(locators.dashboardHeading).toBeVisible({ timeout: 15000 });

  // Save the authentication state
  await page.context().storageState({ path: authFile });
});
