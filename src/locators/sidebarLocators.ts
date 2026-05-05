export const sidebarLocators = {
  // Sidebar container
  sidebarContainer: 'nav.oxd-navbar-nav',
  
  // Menu items
  menuItem: '.oxd-navbar-nav li',
  menuItemByName: (name: string) => 
    `.oxd-navbar-nav li:has-text("${name}")`,
  
  // Search field
  searchInput: 'input[placeholder="Search"]',
  
  // Menu list item
  listItem: 'nav.oxd-navbar-nav li',
} as const;
