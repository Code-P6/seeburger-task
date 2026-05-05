export const dashboardLocators = {
  // Page heading
  dashboardHeading: 'role=heading[name="Dashboard"]',
  
  // Navigation elements
  pimLink: 'role=link[name="PIM"]',
  
  // Common headings
  heading: (name: string) => `role=heading[name="${name}"]`,
} as const;
