export const pimLocators = {
  // Page headings
  pimHeading: 'role=heading[name="PIM"]',
  addEmployeeHeading: 'role=heading[name="Add Employee"]',
  personalDetailsHeading: 'role=heading[name="Personal Details"]',
  
  // Buttons
  addButton: 'role=button[name="Add"]',
  searchButton: 'role=button[name=/Search|search/]',
  
  // Navigation
  employeeListLink: 'role=link[name="Employee List"]',
  
  // Search/Filter inputs
  employeeNameSearchInput: 'input[placeholder*="Type for hints"]',
  
  // Autocomplete
  autocompleteDropdown: '.oxd-autocomplete-dropdown',
  autocompleteOption: '.oxd-autocomplete-dropdown .oxd-autocomplete-option',
  
  // Employee details
  employeeNameHeader: '.orangehrm-edit-employee-name',
  
  // Success messages
  successSavedMessage: 'text="Successfully Saved"',
  successDeletedMessage: 'text=/Successfully Deleted|Record Successfully Deleted/',
} as const;
