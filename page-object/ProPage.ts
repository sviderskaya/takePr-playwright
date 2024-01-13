import { expect, type Locator, type Page } from '@playwright/test';

export class ProPage {
    readonly page: Page;
    readonly getGoToProBtn: Locator
    readonly getStartedBtn: Locator
    readonly getResetAccountBtnOnProPage: Locator
    readonly getWalletpaymentForGoToPto: Locator
    readonly getYesWalletGoToPro: Locator
    
  
    constructor(page: Page) {
      this.page = page;
      this.getGoToProBtn = page.locator("(//BUTTON[@_ngcontent-serverapp-c343=''][text()='Go to pro'])[2]")
      this.getStartedBtn = page.locator("//BUTTON[@_ngcontent-serverapp-c195=''][text()='GET STARTED']")
      this.getWalletpaymentForGoToPto = page.locator("(//DIV[@_ngcontent-serverapp-c199=''])[5]")
      this.getYesWalletGoToPro = page.locator("//BUTTON[@_ngcontent-serverapp-c198=''][text()='YES']")
  
    }
  }