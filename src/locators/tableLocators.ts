export const tableLocators = {
  // Main table container
  tableContainer: '.oxd-table',
  
  // Table row selectors
  tableRow: '.oxd-table-row',
  tableRowByText: (text: string) => 
    `.oxd-table-row:has-text("${text}")`,
  
  // Button selectors within table
  deleteButton: 'i.bi-trash',
  deleteButtonParent: 'i.bi-trash + button',
  
  // Confirmation dialog
  confirmationDialog: '.orangehrm-dialog-popup',
  confirmDeleteButton: 'button:has-text("Yes, Delete")',
  cancelButton: 'button:has-text("Cancel")',
  
  // Success message
  successMessage: '.oxd-toast--success',
  successText: 'text="Successfully Deleted"',
} as const;
