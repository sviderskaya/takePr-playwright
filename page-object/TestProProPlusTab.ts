import { expect, type Locator, type Page } from '@playwright/test';

export class TestProProPlusTab {
    readonly page: Page;
    readonly testTab: Locator
    readonly proTab: Locator
    
  
    constructor(page: Page) {
      this.page = page;
      this.testTab = page.locator("(//DIV[@role='tab'])[1]")
      this.proTab = page.locator("//P[@_ngcontent-serverapp-c337=''][text()='PRO']")
    }
  }