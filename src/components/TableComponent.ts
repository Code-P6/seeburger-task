import { Page, Locator, expect } from '@playwright/test';
import { tableLocators } from '../locators/tableLocators';

export class TableComponent {
  readonly page: Page;
  readonly root: Locator;
  private locators: ReturnType<typeof tableLocators>;
  
  constructor(page: Page) {
    this.page = page;
    this.locators = tableLocators(page);
    this.root = this.locators.tableContainer;
  }

  getRowByText(text: string): Locator {
    return this.locators.tableRowByText(text);
  }

  async deleteRowContaining(text: string) {
    const row = this.getRowByText(text);
    const deleteButton = row.locator('i.bi-trash').locator('..');
    await deleteButton.click();
    
    // Handle the confirmation dialog
    await expect(this.locators.confirmationDialog).toBeVisible();
    await this.locators.confirmDeleteButton.click();
  }

  async assertRowNotVisible(text: string) {
    const row = this.getRowByText(text);
    await expect(row).toHaveCount(0);
  }
}
