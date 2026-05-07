import { Page, expect } from '@playwright/test';
import { SidebarComponent } from '../components/SidebarComponent';
import { TableComponent } from '../components/TableComponent';
import { FormComponent } from '../components/FormComponent';
import { pimLocators } from '../locators/pimLocators';

export class PIMPage {
  readonly page: Page;
  readonly sidebar: SidebarComponent;
  readonly table: TableComponent;
  readonly form: FormComponent;
  private locators: ReturnType<typeof pimLocators>;

  constructor(page: Page) {
    this.page = page;
    this.sidebar = new SidebarComponent(page);
    this.table = new TableComponent(page);
    this.form = new FormComponent(page);
    this.locators = pimLocators(page);
  }

  async verifyPIMScreen() {
    await expect(this.page.getByRole('heading', { name: 'PIM' })).toBeVisible();
  }

  async clickAddEmployee() {
    await this.page.getByRole('button', { name: 'Add' }).click();
    await expect(this.page.getByRole('heading', { name: 'Add Employee' })).toBeVisible();
  }

  async fillEmployeeDetails(firstName: string, lastName: string) {
    await this.form.fillTextInputByPlaceholder('First Name', firstName);
    await this.form.fillTextInputByPlaceholder('Last Name', lastName);
  }

  async saveEmployee() {
    await this.form.submit();
    // Wait for success confirmation
    await expect(this.locators.successSavedMessage).toBeVisible({ timeout: 10000 });
    // Wait for navigation by checking for the target page's heading
    await expect(this.page.getByRole('heading', { name: 'Personal Details' })).toBeVisible({ timeout: 15000 });
    await this.page.waitForLoadState('networkidle');
  }

  async verifyEmployeePersonalDetails(firstName: string, lastName: string) {
    // Verifying that we landed on the Personal Details page for the user
    await expect(this.page.getByRole('heading', { name: 'Personal Details' })).toBeVisible({ timeout: 10000 });
    const nameHeader = this.locators.employeeNameHeader;
    await expect(nameHeader).toHaveText(`${firstName} ${lastName}`);
  }

  async clickEmployeeList() {
    await this.page.getByRole('link', { name: 'Employee List' }).click();
    // Wait for the employee list page to load
    await expect(this.page.getByRole('heading', { name: 'PIM' })).toBeVisible();
  }

  /**
   * Searches for an employee by name using the search field
   * @param employeeName The name of the employee to search for
   */
  async searchEmployee(employeeName: string) {
    // Find the employee name search input and fill it
    const empNameInput = this.locators.employeeNameSearchInput;
    await empNameInput.fill(employeeName);
    
    // Wait for suggestions to appear and select the employee
    await this.page.waitForTimeout(500); // Small delay for suggestions
    
    // Try to select from dropdown if it appears
    const suggestions = this.locators.autocompleteOption;
    if (await suggestions.count() > 0) {
      await suggestions.first().click();
    }
    
    // Click Search button
    await this.page.getByRole('button', { name: /Search|search/ }).click();
    
    // Wait for results to load
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Deletes an employee from the table by their name
   * @param employeeName The name of the employee to delete
   */
  async deleteEmployee(employeeName: string) {
    await this.table.deleteRowContaining(employeeName);
    // Wait for the success toast
    await expect(this.locators.successDeletedMessage).toBeVisible({ timeout: 10000 });
  }

  /**
   * Verifies that an employee no longer exists in the table
   * @param employeeName The name of the employee to verify deletion
   */
  async verifyEmployeeDeleted(employeeName: string) {
    // Re-fetch the table after deletion
    await this.page.reload();
    await this.page.waitForLoadState('networkidle');
    await this.table.assertRowNotVisible(employeeName);
  }
}
