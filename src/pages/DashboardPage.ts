import { Page, expect } from '@playwright/test';
import { SidebarComponent } from '../components/SidebarComponent';
import { dashboardLocators } from '../locators/dashboardLocators';

export class DashboardPage {
  readonly page: Page;
  readonly sidebar: SidebarComponent;
  private locators: ReturnType<typeof dashboardLocators>;

  constructor(page: Page) {
    this.page = page;
    this.sidebar = new SidebarComponent(page);
    this.locators = dashboardLocators(page);
  }

  async goto() {
    await this.page.goto('/web/index.php/dashboard/index');
  }

  async verifyDashboard() {
    await expect(this.locators.dashboardHeading).toBeVisible();
  }

  async navigateToPIM() {
    await this.sidebar.navigateTo('PIM');
  }
}
