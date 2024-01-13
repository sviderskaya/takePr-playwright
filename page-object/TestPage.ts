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
    readonly getResetAccountBtnOnTestPage: Locator
    readonly getAccount: Locator
    readonly getWalletPaymentMethod: Locator
    readonly getYesBtnWalletPayment: Locator
    readonly getAddPromocodeBtn: Locator
    readonly getPromocodeForm: Locator
    readonly getApplyBtn: Locator
    
  
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
      this.getResetAccountBtnOnTestPage = page.locator("(//button[@class='primary-btn reset-account resetAccountWithoutBackground ng-star-inserted'])[1]")
      this.getAccount = page.locator("(//*[@class='item table box'])[4]")
      this.getWalletPaymentMethod = page.locator("(//DIV[@_ngcontent-serverapp-c199=''])[5]")
      this.getYesBtnWalletPayment = page.locator("//BUTTON[@_ngcontent-serverapp-c198=''][text()='YES']")
      this.getAddPromocodeBtn = page.locator("//P[@_ngcontent-serverapp-c192=''][text()='Add']")
      this.getPromocodeForm = page.locator("//INPUT[@id='promocode-form']")
      this.getApplyBtn = page.locator("//BUTTON[@id='promocode-btn']")
      
    }
  
  }