import { expect, type Locator, type Page } from '@playwright/test';

export class CalendarPage {
    readonly page: Page;
    readonly getCalendarBtn: Locator
  
    constructor(page: Page) {
      this.page = page;
      this.getCalendarBtn = page.locator("(//A[@_ngcontent-serverapp-c241=''])[3]")
    }
  
  }