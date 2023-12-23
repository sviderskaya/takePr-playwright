import { expect, type Locator, type Page } from '@playwright/test';

export class KnowledgeBase {
    readonly page: Page;
    readonly getKnowledgeBaseRtn: Locator
  
    constructor(page: Page) {
      this.page = page;
      this.getKnowledgeBaseRtn = page.locator("//A[@id='knowledgeBase']")
    }
  
  }