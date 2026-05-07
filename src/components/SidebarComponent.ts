import { Page, Locator } from '@playwright/test';
import { sidebarLocators } from '../locators/sidebarLocators';

export class SidebarComponent {
  readonly page: Page;
  readonly root: Locator;
  readonly searchInput: Locator;
  private locators: ReturnType<typeof sidebarLocators>;

  constructor(page: Page) {
    this.page = page;
    this.locators = sidebarLocators(page);
    this.root = this.locators.sidebarContainer;
    this.searchInput = this.locators.searchInput;
  }

  async navigateTo(moduleName: string) {
    const menuItem = this.root.getByRole('link', { name: moduleName });
    await menuItem.click();
  }
}
