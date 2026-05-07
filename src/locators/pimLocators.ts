import { Page } from '@playwright/test';


export const pimLocators = (page: Page) => ({
  // Page headings
  pimHeading: page.getByRole('heading', { name: 'PIM' }),
  addEmployeeHeading: page.getByRole('heading', { name: 'Add Employee' }),
  personalDetailsHeading: page.getByRole('heading', { name: 'Personal Details' }),
  
  // Buttons
  addButton: page.getByRole('button', { name: 'Add' }),
  searchButton: page.getByRole('button', { name: /Search|search/i }),
  
  // Navigation
  employeeListLink: page.getByRole('link', { name: 'Employee List' }),
  
  // Search/Filter inputs - target the first input in the employee search field
  employeeNameSearchInput: page.locator('.oxd-input-group').first().locator('input'),
  
  // Autocomplete
  autocompleteDropdown: page.locator('.oxd-autocomplete-dropdown'),
  autocompleteOption: page.locator('.oxd-autocomplete-dropdown .oxd-autocomplete-option'),
  
  // Employee details
  employeeNameHeader: page.locator('.orangehrm-edit-employee-name'),
  
  // Success messages
  successSavedMessage: page.getByText('Successfully Saved'),
  successDeletedMessage: page.getByText(/Successfully Deleted|Record Successfully Deleted/),
});
