import { expect, type Locator, type Page } from '@playwright/test';

export class WalletPage {
    readonly page: Page;
    readonly getWalletBtn: Locator
    readonly getWithdrawalRequestsTab: Locator
  
    constructor(page: Page) {
      this.page = page;
      this.getWalletBtn = page.locator("(//A[@_ngcontent-serverapp-c241=''])[2]")
      this.getWithdrawalRequestsTab = page.locator("(//DIV[@role='tab'])[2]")
    }
  
  }