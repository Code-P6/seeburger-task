import { Page, expect } from '@playwright/test';
import { SidebarComponent } from '../components/SidebarComponent';
import { dashboardLocators } from '../locators/dashboardLocators';

export class DashboardPage {
  readonly page: Page;
  readonly sidebar: SidebarComponent;

  constructor(page: Page) {
    this.page = page;
    this.sidebar = new SidebarComponent(page);
  }

  async goto() {
    await this.page.goto('/web/index.php/dashboard/index');
  }

  async verifyDashboard() {
    await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  }

  async navigateToPIM() {
    await this.sidebar.navigateTo('PIM');
  }
}
