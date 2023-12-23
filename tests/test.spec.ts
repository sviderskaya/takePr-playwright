import { test, expect } from "@playwright/test";
import { LogInPage } from "../page-object/loginPage";
import { TestPage } from "../page-object/TestPage";
import { KnowledgeBase } from "../page-object/KnowledgeBasePage";
import { CalendarPage } from "../page-object/CalendarPage";
import { WalletPage } from "../page-object/WalletPage";
import { PersonalInfoPage } from "../page-object/PersonalInfoPage";

test("should check subscription purchasing via Credit Card", async ({ page }) => {
  const loginPage = new LogInPage(page)
  const testPage = new TestPage(page)

  await loginPage.goto()
  await loginPage.getOpenMenuBtn.click()
  await loginPage.getLoginBtn.click()
  await loginPage.getEmailField.pressSequentially("auto_test_takeprofit@yopmail.com")
  await loginPage.getPasswordField.pressSequentially("Qwe123**")
  await loginPage.getUserLoginButton.click()

  await testPage.getCreateNewBtn.click()
  // await testPage.getContinueBtn.click({ force: true })
  await testPage.getNextBtn.click()
  await testPage.getPlatform.click()
  await testPage.getNextBtn2.click()
  await testPage.getCheckbox.click()
  await testPage.getNextBtn3.click()
  await testPage.getCreditCardNumberFiend.click()
  await testPage.getCreditCardNumberFiend.pressSequentially("4242424242424242424242424242")
  await testPage.getNextBtn4.click({timeout: 3000})

  await expect(page).toHaveTitle("Congratulations!")
})

test("should check Knowledge base page", async ({page}) => {
  const loginPage = new LogInPage(page)
  const testPage = new TestPage(page)
  const knowledgeBase = new KnowledgeBase(page)

  await loginPage.goto()
  await loginPage.getOpenMenuBtn.click()
  await loginPage.getLoginBtn.click()
  await loginPage.getEmailField.pressSequentially("auto_test_takeprofit@yopmail.com")
  await loginPage.getPasswordField.pressSequentially("Qwe123**")
  await loginPage.getUserLoginButton.click()

  await expect(page).toHaveURL("https://takeprofit.avidi.tech/control-center")
  
  await testPage.getSubscription.click({timeout:3000})
  await knowledgeBase.getKnowledgeBaseRtn.click()
})

test("should", async({page}) => {
  const loginPage = new LogInPage(page)
  const testPage = new TestPage(page)
  const calendarPage = new CalendarPage(page)

  await loginPage.goto()
  await loginPage.getOpenMenuBtn.click()
  await loginPage.getLoginBtn.click()
  await loginPage.getEmailField.pressSequentially("auto_test_takeprofit@yopmail.com")
  await loginPage.getPasswordField.pressSequentially("Qwe123**")
  await loginPage.getUserLoginButton.click()
  await testPage.getMenuBtn.click()
  await calendarPage.getCalendarBtn.click()

  await expect(page).toHaveURL("https://takeprofit.avidi.tech/calendar")

})

test("should check Walet page", async({page}) => {
  const loginPage = new LogInPage(page)
  const testPage = new TestPage(page)
  const walletPage = new WalletPage(page)

  await loginPage.goto()
  await loginPage.getOpenMenuBtn.click()
  await loginPage.getLoginBtn.click()
  await loginPage.getEmailField.pressSequentially("auto_test_takeprofit@yopmail.com")
  await loginPage.getPasswordField.pressSequentially("Qwe123**")
  await loginPage.getUserLoginButton.click()
  await testPage.getMenuBtn.click()
  await walletPage.getWalletBtn.click()
  await walletPage.getWithdrawalRequestsTab.click()

  await expect(page).toHaveURL("https://takeprofit.avidi.tech/userinfo/wallet")

})

test("should check Personal Info page", async({page}) => {
  const loginPage = new LogInPage(page)
  const testPage = new TestPage(page)
  const personalInfoPage = new PersonalInfoPage(page)

  await loginPage.goto()
  await loginPage.getOpenMenuBtn.click()
  await loginPage.getLoginBtn.click()
  await loginPage.getEmailField.pressSequentially("auto_test_takeprofit@yopmail.com")
  await loginPage.getPasswordField.pressSequentially("Qwe123**")
  await loginPage.getUserLoginButton.click()
  await testPage.getMenuBtn.click()

  await personalInfoPage.getPersonalInfoBtn.click()

  await expect(page).toHaveURL("https://takeprofit.avidi.tech/userinfo/personal")
})