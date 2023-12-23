import { expect, type Locator, type Page } from '@playwright/test';

export class PersonalInfoPage {
    readonly page: Page;
    readonly getPersonalInfoBtn: Locator
  
    constructor(page: Page) {
      this.page = page;
      this.getPersonalInfoBtn = page.locator("(//A[@_ngcontent-serverapp-c241=''])[1]")
    }
  
  }