import { expect, type Locator, type Page } from '@playwright/test';

export class ProPage {
    readonly page: Page;
    readonly getGoToProBtn: Locator
    readonly getStartedBtn: Locator
    readonly getResetAccountBtnOnProPage: Locator
    
  
    constructor(page: Page) {
      this.page = page;
      this.getGoToProBtn = page.locator("(//BUTTON[@_ngcontent-serverapp-c343=''][text()='Go to pro'])[2]")
      this.getStartedBtn = page.locator("//BUTTON[@_ngcontent-serverapp-c195=''][text()='GET STARTED']")
  
    }
  }