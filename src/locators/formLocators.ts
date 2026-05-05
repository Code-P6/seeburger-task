export const formLocators = {
  // Root selector for form container
  formContainer: '.orangehrm-card-container form',
  
  // Button selectors
  saveButton: 'button:has-text("Save")',
  
  // Input selectors
  textInputByPlaceholder: (placeholder: string) => 
    `input[placeholder="${placeholder}"]`,
  
  textInputByLabel: (label: string) => 
    `.oxd-input-group:has-text("${label}") input`,
  
  // Form groups/containers
  inputGroup: '.oxd-input-group',
} as const;
