import { Page, Locator, expect } from '@playwright/test';
import { tableLocators } from '../locators/tableLocators';

export class TableComponent {
  readonly page: Page;
  readonly root: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.root = page.locator(tableLocators.tableContainer);
  }

  getRowByText(text: string): Locator {
    return this.root.locator(tableLocators.tableRow).filter({ hasText: text });
  }

  async deleteRowContaining(text: string) {
    const row = this.getRowByText(text);
    const deleteButton = row.locator(tableLocators.deleteButton).locator('..'); // The button containing the trash icon
    await deleteButton.click();
    
    // Handle the confirmation dialog
    const confirmButton = this.page.locator(tableLocators.confirmationDialog).getByRole('button', { name: 'Yes, Delete' });
    await confirmButton.click();
  }

  async assertRowNotVisible(text: string) {
    const row = this.getRowByText(text);
    await expect(row).toHaveCount(0);
  }
}
