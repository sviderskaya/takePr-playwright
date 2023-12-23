import { expect, type Locator, type Page } from '@playwright/test';

export class TestPage {
    readonly page: Page;
    readonly getCreateNewBtn: Locator
    readonly getContinueBtn: Locator
    readonly getNextBtn: Locator
    readonly getPlatform: Locator
    readonly getNextBtn2: Locator
    readonly getCheckbox: Locator
    readonly getNextBtn3: Locator
    readonly getCreditCardNumberFiend: Locator
    readonly getNextBtn4: Locator
    readonly getTestRoleTab: Locator
    readonly getMenuBtn: Locator
    readonly getSubscription: Locator

  
    constructor(page: Page) {
      this.page = page;
      this.getCreateNewBtn = page.locator("//SPAN[@_ngcontent-serverapp-c337=''][text()='+ Create ']")
      this.getContinueBtn= page.getByRole('button', { name: 'CONTINUE' })
      this.getNextBtn = page.locator("//BUTTON[@id='next']")
      this.getPlatform = page.locator("(//DIV[@_ngcontent-serverapp-c193=''])[1]")
      this.getNextBtn2 = page.locator("//BUTTON[@id='next']")
      this.getCheckbox = page.locator("//INPUT[@id='acceptTermsOfService']")
      this.getNextBtn3 = page.locator("//BUTTON[@id='next']")
      this.getCreditCardNumberFiend = page.locator("//DIV[@id='card-element']")
      this.getNextBtn4 = page.locator("//BUTTON[@id='next']")
      this.getTestRoleTab = page.locator("//DIV[@role='tab']")
      this.getMenuBtn = page.locator("//IMG[@id='button-nav']")
      this.getSubscription = page.locator("(//P[@_ngcontent-serverapp-c343=''][text()='Futures $ 50k Account'])[1]")
    }
  
  }