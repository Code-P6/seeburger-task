import { test as base, Page } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';
import { PIMPage } from '../pages/PIMPage';


type TestFixtures = {
  dashboardPage: DashboardPage;
  pimPage: PIMPage;
};

export const test = base.extend<TestFixtures>({

  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },

  pimPage: async ({ page }, use) => {
    const pimPage = new PIMPage(page);
    await use(pimPage);
  },
});

export { expect } from '@playwright/test';
