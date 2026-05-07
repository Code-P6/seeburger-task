import { Page } from '@playwright/test';

/**
 * Centralized locators for Auth Setup
 * Contains all selectors used in authentication
 * Uses Playwright's concrete locator strategies for robustness
 */
export const authLocators = (page: Page) => ({
  // Login page inputs
  usernameInput: page.getByPlaceholder('Username'),
  passwordInput: page.getByPlaceholder('Password'),
  
  // Login button
  loginButton: page.getByRole('button', { name: 'Login' }),
  
  // Dashboard heading (verification)
  dashboardHeading: page.getByRole('heading', { name: 'Dashboard' }),
});
