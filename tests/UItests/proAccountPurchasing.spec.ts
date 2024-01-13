import { test, expect } from "@playwright/test";
import { LogInPage } from "../../page-object/loginPage";
import { ProPage } from "../../page-object/ProPage";
import { TestProProPlusTab } from "../../page-object/TestProProPlusTab";
import { TestPage } from "../../page-object/TestPage";

test("should check purchasing PRO accaunt Bank/Credit Card payment method", async({page}) => {
    const loginPage = new LogInPage(page)
    const proPage = new ProPage(page)
    const testProProPlusTab = new TestProProPlusTab(page)
    const testPage = new TestPage(page)

    await loginPage.goto()
    await loginPage.getOpenMenuBtn.click()
    await loginPage.getLoginBtn.click()
    await loginPage.getEmailField.pressSequentially("auto_test_takeprofit@yopmail.com")
    await loginPage.getPasswordField.pressSequentially("Qwe123**")
    await loginPage.getUserLoginButton.click()
    await testProProPlusTab.proTab.click()
    await proPage.getGoToProBtn.click()
    await proPage.getStartedBtn.click()
    await testPage.getNextBtn.click()
    await testPage.getCreditCardNumberFiend.click()
    await testPage.getCreditCardNumberFiend.pressSequentially("4242424242424242424242424242")
    await testPage.getNextBtn.click()


    await expect(page).toHaveTitle("Congratulations!")
})

test("should check Pro account purchasing via Wallet payment method", async ({page}) => {
    const loginPage = new LogInPage(page)
    const proPage = new ProPage(page)
    const testProProPlusTab = new TestProProPlusTab(page)
    const testPage = new TestPage(page)

    await loginPage.goto()
    await loginPage.getOpenMenuBtn.click()
    await loginPage.getLoginBtn.click()
    await loginPage.getEmailField.pressSequentially("auto_test_takeprofit@yopmail.com")
    await loginPage.getPasswordField.pressSequentially("Qwe123**")
    await loginPage.getUserLoginButton.click()
    await testProProPlusTab.proTab.click()
    await proPage.getGoToProBtn.click()
    await proPage.getWalletpaymentForGoToPto.click()
    await proPage.getYesWalletGoToPro.click()

    await expect(page).toHaveTitle("Congratulations!")
})