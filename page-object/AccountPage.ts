import { expect, type Locator, type Page } from '@playwright/test';

export class AccountPage {
    readonly page: Page;
    readonly getResetAccountBtnOnAccountPage: Locator
    readonly getNextBtn: Locator
    readonly getCreditCardNumberFiend: Locator
    readonly getCancelBtn: Locator
    readonly getCancelYesBtn: Locator
    readonly getCancelNoBtn: Locator
    readonly getHowAmIDoing: Locator
  
    constructor(page: Page) {
      this.page = page;
      this.getResetAccountBtnOnAccountPage = page.locator("//button[@class='reset-account primary-btn resetAccountWithoutBackground ng-star-inserted']")
      this.getNextBtn = page.locator("//BUTTON[@id='next']")
      this.getCreditCardNumberFiend = page.locator("//DIV[@id='card-element']")
      this.getCancelBtn = page.locator("//P[@_ngcontent-serverapp-c328=''][text()='cancel subscription']")
      this.getCancelYesBtn = page.locator("//BUTTON[@_ngcontent-serverapp-c329=''][text()='YES']")
      this.getCancelNoBtn = page.locator("//BUTTON[@_ngcontent-serverapp-c329=''][text()='NO']")
      this.getHowAmIDoing = page.locator("//H2[@_ngcontent-serverapp-c335=''][text()='How Am I Doing?']")
    }
  }