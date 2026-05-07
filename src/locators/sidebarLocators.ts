import { Page } from '@playwright/test';

export const sidebarLocators = (page: Page) => ({
  // Sidebar container
  sidebarContainer: page.locator('nav.oxd-navbar-nav'),
  
  // Menu items
  menuItem: page.locator('.oxd-navbar-nav li'),
  menuItemByName: (name: string) => 
    page.locator('.oxd-navbar-nav li').filter({ hasText: name }),
  
  // Search field
  searchInput: page.getByPlaceholder('Search'),
  
  // Menu list item
  listItem: page.locator('nav.oxd-navbar-nav li'),
});
