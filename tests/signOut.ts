import { test, expect } from "@playwright/test";
import { LogInPage } from "../page-object/loginPage";
import { SignOut} from "../page-object/SignOut";
import { TestPage } from "../page-object/TestPage";
import { PersonalInfoPage } from "../page-object/PersonalInfoPage";


test("should check sign out from dropdown menu", async({page}) => {
    const loginPage = new LogInPage(page)
    const signOut = new SignOut(page)
    const testPage = new TestPage(page)

    await loginPage.goto()
    await loginPage.getOpenMenuBtn.click()
    await loginPage.getLoginBtn.click()
    await loginPage.getEmailField.pressSequentially("auto_test_takeprofit@yopmail.com")
    await loginPage.getPasswordField.pressSequentially("Qwe123**")
    await loginPage.getUserLoginButton.click()
    await testPage.getMenuBtn.click()
    await signOut.getSignOutBtnOnDropdown.click()
})

test("should check sign out from Personal Info", async({page}) => {
    const loginPage = new LogInPage(page)
    const testPage = new TestPage(page)
    const signOut = new SignOut(page)
    const personalInfoPage = new PersonalInfoPage(page)

    await loginPage.goto()
    await loginPage.getOpenMenuBtn.click()
    await loginPage.getLoginBtn.click()
    await loginPage.getEmailField.pressSequentially("auto_test_takeprofit@yopmail.com")
    await loginPage.getPasswordField.pressSequentially("Qwe123**")
    await loginPage.getUserLoginButton.click()
    await testPage.getMenuBtn.click()
    await personalInfoPage.getPersonalInfoBtn.click()
    await signOut.getSignOutOnPersonalInfoPage.click()
})