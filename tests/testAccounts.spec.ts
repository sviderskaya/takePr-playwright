import { test, expect } from "@playwright/test";
import { LogInPage } from "../page-object/loginPage";
import { TestPage } from "../page-object/TestPage";
import { AccountPage } from "../page-object/AccountPage"

test("should check account reset from the Test page with Bank/Credit Card payment method", async ({ page }) => {
    const loginPage = new LogInPage(page)
    const testPage = new TestPage(page)

    await loginPage.goto()
    await loginPage.getOpenMenuBtn.click()
    await loginPage.getLoginBtn.click()
    await loginPage.getEmailField.pressSequentially("auto_test_takeprofit@yopmail.com")
    await loginPage.getPasswordField.pressSequentially("Qwe123**")
    await loginPage.getUserLoginButton.click()
    await testPage.getResetAccountBtnOnTestPage.click()
    await testPage.getNextBtn.click()
    await testPage.getCreditCardNumberFiend.click()
    await testPage.getCreditCardNumberFiend.pressSequentially("4242424242424242424242424242")
    await testPage.getNextBtn.click()

    await expect(page).toHaveTitle("Congratulations!")
})

test("should check account reset from the Account page with Bank.Credit Card", async ({ page }) => {
    const loginPage = new LogInPage(page)
    const testPage = new TestPage(page)
    const accountPage = new AccountPage(page)

    await loginPage.goto()
    await loginPage.getOpenMenuBtn.click()
    await loginPage.getLoginBtn.click()
    await loginPage.getEmailField.pressSequentially("auto_test_takeprofit@yopmail.com")
    await loginPage.getPasswordField.pressSequentially("Qwe123**")
    await loginPage.getUserLoginButton.click()
    await testPage.getAccount.click()
    await accountPage.getResetAccountBtnOnAccountPage.click()
    await accountPage.getNextBtn.click()
    await accountPage.getCreditCardNumberFiend.click()
    await accountPage.getCreditCardNumberFiend.pressSequentially("4242424242424242424242424242")
    await accountPage.getNextBtn.click()

    await expect(page).toHaveTitle("Congratulations!")
})

test("should check account calcel positive test", async ({ page }) => {
    const loginPage = new LogInPage(page)
    const testPage = new TestPage(page)
    const accountPage = new AccountPage(page)

    await loginPage.goto()
    await loginPage.getOpenMenuBtn.click()
    await loginPage.getLoginBtn.click()
    await loginPage.getEmailField.pressSequentially("auto_test_takeprofit@yopmail.com")
    await loginPage.getPasswordField.pressSequentially("Qwe123**")
    await loginPage.getUserLoginButton.click()
    await testPage.getAccount.click()
    await accountPage.getCancelBtn.click()
    await accountPage.getCancelYesBtn.click()
})

test("should check account calcel negative test", async ({ page }) => {
    const loginPage = new LogInPage(page)
    const testPage = new TestPage(page)
    const accountPage = new AccountPage(page)

    await loginPage.goto()
    await loginPage.getOpenMenuBtn.click()
    await loginPage.getLoginBtn.click()
    await loginPage.getEmailField.pressSequentially("auto_test_takeprofit@yopmail.com")
    await loginPage.getPasswordField.pressSequentially("Qwe123**")
    await loginPage.getUserLoginButton.click()
    await testPage.getAccount.click()
    await accountPage.getCancelNoBtn.click()

})

test("should check 'how am i doing?' section", async ({ page }) => {
    const loginPage = new LogInPage(page)
    const testPage = new TestPage(page)
    const accountPage = new AccountPage(page)

    await loginPage.goto()
    await loginPage.getOpenMenuBtn.click()
    await loginPage.getLoginBtn.click()
    await loginPage.getEmailField.pressSequentially("auto_test_takeprofit@yopmail.com")
    await loginPage.getPasswordField.pressSequentially("Qwe123**")
    await loginPage.getUserLoginButton.click()
    await testPage.getAccount.click()
    await accountPage.getHowAmIDoing.click()
    
    await expect(page).toHaveTitle("How Am I Doing?")
})