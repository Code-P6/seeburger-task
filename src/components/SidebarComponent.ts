import { Page, Locator } from '@playwright/test';
import { sidebarLocators } from '../locators/sidebarLocators';

export class SidebarComponent {
  readonly page: Page;
  readonly root: Locator;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    // The sidebar container
    this.root = page.locator(sidebarLocators.sidebarContainer);
    this.searchInput = this.root.locator(sidebarLocators.searchInput);
  }

  async navigateTo(moduleName: string) {
    const menuItem = this.root.getByRole('link', { name: moduleName });
    await menuItem.click();
  }
}
