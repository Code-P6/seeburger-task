import { Page, Locator } from '@playwright/test';
import { formLocators } from '../locators/formLocators';

export class FormComponent {
  readonly page: Page;
  readonly root: Locator;
  readonly saveButton: Locator;
  private locators: ReturnType<typeof formLocators>;

  constructor(page: Page) {
    this.page = page;
    this.locators = formLocators(page);
    this.root = this.locators.formContainer;
    this.saveButton = this.locators.saveButton;
  }

  /**
   * Fills an input field based on its placeholder
   */
  async fillTextInputByPlaceholder(placeholderText: string, value: string) {
    const input = this.locators.textInputByPlaceholder(placeholderText);
    await input.fill(value);
  }

  /**
   * Fills an input field based on its label
   */
  async fillTextInputByLabel(labelText: string, value: string) {
    const fieldContainer = this.root.locator(this.locators.inputGroup).filter({ hasText: labelText });
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
