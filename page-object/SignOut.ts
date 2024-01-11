import { expect, type Locator, type Page } from '@playwright/test';

export class SignOut {
    readonly page: Page;
    readonly getSignOutBtnOnDropdown: Locator
    readonly getSignOutOnPersonalInfoPage: Locator
    
    constructor(page: Page) {
      this.page = page;
      this.getSignOutBtnOnDropdown = page.locator("//LI[@_ngcontent-serverapp-c241=''][text()='Sign out']")
      this.getSignOutOnPersonalInfoPage = page.locator("//SPAN[@_ngcontent-serverapp-c349=''][text()='Sign out']")
      
    }
  }