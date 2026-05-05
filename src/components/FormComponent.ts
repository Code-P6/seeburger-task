import { Page, Locator } from '@playwright/test';
import { formLocators } from '../locators/formLocators';

export class FormComponent {
  readonly page: Page;
  readonly root: Locator;
  readonly saveButton: Locator;

  constructor(page: Page, rootSelector: string = formLocators.formContainer) {
    this.page = page;
    this.root = page.locator(rootSelector).first();
    this.saveButton = this.root.getByRole('button', { name: 'Save' });
  }

  /**
   * Fills an input field based on its placeholder
   */
  async fillTextInputByPlaceholder(placeholderText: string, value: string) {
    const selector = formLocators.textInputByPlaceholder(placeholderText);
    const input = this.root.locator(selector);
    await input.fill(value);
  }

  /**
   * Fills an input field based on its label
   */
  async fillTextInputByLabel(labelText: string, value: string) {
    const fieldContainer = this.root.locator(formLocators.inputGroup).filter({ hasText: labelText });
    const input = fieldContainer.locator('input').first();
    await input.fill(value);
  }

  /**
   * Submits the form by clicking the Save button
   */
  async submit() {
    await this.saveButton.click();
  }
}
