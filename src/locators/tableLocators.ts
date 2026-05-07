import { Page } from '@playwright/test';


export const tableLocators = (page: Page) => ({
  // Main table container
  tableContainer: page.locator('.oxd-table'),
  
  // Table row selectors
  tableRow: page.locator('.oxd-table-row'),
  tableRowByText: (text: string) => 
    page.locator('.oxd-table-row').filter({ hasText: text }),
  
  // Button selectors within table
  deleteButton: page.locator('i.bi-trash'),
  deleteButtonParent: page.locator('button').filter({ has: page.locator('i.bi-trash') }),
  
  // Confirmation dialog
  confirmationDialog: page.locator('.orangehrm-dialog-popup'),
  confirmDeleteButton: page.getByRole('button', { name: 'Yes, Delete' }),
  cancelButton: page.getByRole('button', { name: 'Cancel' }),
  
  // Success message
  successMessage: page.locator('.oxd-toast--success'),
  successText: page.getByText('Successfully Deleted'),
});
