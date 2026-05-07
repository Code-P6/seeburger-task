import { Page } from '@playwright/test';

/**
 * Centralized locators for DashboardPage
 * Contains all selectors used in dashboard interactions
 * Uses Playwright's concrete locator strategies for robustness
 */
export const dashboardLocators = (page: Page) => ({
  // Page heading
  dashboardHeading: page.getByRole('heading', { name: 'Dashboard' }),
  
  // Navigation elements
  pimLink: page.getByRole('link', { name: 'PIM' }),
  
  // Common headings
  heading: (name: string) => page.getByRole('heading', { name }),
});
