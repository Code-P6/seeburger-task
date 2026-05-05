import { test, expect } from '../src/fixtures/fixtures';

// Generate a unique employee name to avoid collisions
const uniqueId = Math.floor(Math.random() * 10000).toString();
const firstName = 'John';
const lastName = `Doe${uniqueId}`;

test.describe.serial('Employee Workflow Tests', () => {
  test('Add New Employee (CPOM)', async ({ page, dashboardPage, pimPage }) => {
    // Navigate to Dashboard and verify it's loaded
    await dashboardPage.goto();
    await dashboardPage.verifyDashboard();

    // Navigate to PIM Module and verify the screen
    await dashboardPage.navigateToPIM();
    await pimPage.verifyPIMScreen();

    // Add New Employee (Using CPOM Pattern)
    // Click Add button to open the add employee form
    await pimPage.clickAddEmployee();

    // Fill in employee details using the FormComponent
    await pimPage.fillEmployeeDetails(firstName, lastName);

    // Submit the form
    await pimPage.saveEmployee();

    // Verify employee was added (lands on personal details page)
    await pimPage.verifyEmployeePersonalDetails(firstName, lastName);
  });

  test('Search & Delete Employee (CPOM)', async ({ page, dashboardPage, pimPage }) => {
    // Navigate to Dashboard and verify it's loaded
    await dashboardPage.goto();
    await dashboardPage.verifyDashboard();

    // Navigate to PIM Module and verify the screen
    await dashboardPage.navigateToPIM();
    await pimPage.verifyPIMScreen();

    // Search & Delete Employee (Using CPOM Pattern)
    // Navigate to Employee List
    await pimPage.clickEmployeeList();

    // Use the employee search functionality to find the newly added employee
    await pimPage.searchEmployee(lastName); // Using unique last name

    // Verify the employee appears in the search results before deletion
    const table = pimPage.table;
    const row = table.getRowByText(lastName);
    await expect(row).toBeVisible();

    // Delete the employee using table actions (TableComponent)
    await pimPage.deleteEmployee(lastName);

    // Verify that the employee no longer appears in search results
    await pimPage.verifyEmployeeDeleted(lastName);
  });
});
