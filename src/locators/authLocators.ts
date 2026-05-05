export const authLocators = {
  // Login page inputs
  usernameInput: 'input[placeholder="Username"]',
  passwordInput: 'input[placeholder="Password"]',
  
  // Login button
  loginButton: 'role=button[name="Login"]',
  
  // Dashboard heading (verification)
  dashboardHeading: 'h6:has-text("Dashboard")',
} as const;
