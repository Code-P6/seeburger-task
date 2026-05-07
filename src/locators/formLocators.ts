import { Page } from '@playwright/test';

/**
 * Centralized locators for Form Components
 * Contains all selectors used in form interactions
 * Uses Playwright's concrete locator strategies for robustness
 */
export const formLocators = (page: Page) => ({
  // Root selector for form container
  formContainer: page.locator('.orangehrm-card-container form'),
  
  // Button selectors
  saveButton: page.getByRole('button', { name: 'Save' }),
  
  // Input selectors
  textInputByPlaceholder: (placeholder: string) => 
    page.getByPlaceholder(placeholder),
  
  textInputByLabel: (label: string) => 
    page.locator('.oxd-input-group').filter({ has: page.getByText(label) }).locator('input'),
  
  // Form groups/containers
  inputGroup: page.locator('.oxd-input-group'),
});
