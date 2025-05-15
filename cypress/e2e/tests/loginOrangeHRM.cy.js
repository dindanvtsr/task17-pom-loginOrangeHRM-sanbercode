import LoginPage from "../../support/pageObjects/loginPage";
import loginData from "../../fixtures/loginData.json";

describe('Login', () => {
    const loginPage = new LoginPage();
    
    beforeEach(() => {
        loginPage.visit()
    })

    it('TCL_001', () => {
        loginPage.fillUsername(loginData.username_TCL001)
        loginPage.fillPassword(loginData.password_TCL001)
        loginPage.loginSuccessDashboardIntercepts()
        loginPage.submit()
        loginPage.loginSuccessUrl()
        loginPage.waitDashboardData()
    })
    it('TCL_002', () => {
        loginPage.fillUsername(loginData.username_TCL002)
        loginPage.fillPassword(loginData.password_TCL002)
        loginPage.submit()
        loginPage.invalidCredentialsMessage()
    })
    it('TCL_003', () => {
        loginPage.fillUsername(loginData.username_TCL003)
        loginPage.fillPassword(loginData.password_TCL003)
        loginPage.submit()
        loginPage.invalidCredentialsMessage()
    })
    it('TCL_004', () => {
        loginPage.emptyUsername()
        loginPage.emptyPassword()
        loginPage.submit()
        loginPage.requiredMessage()
    })
    it('TCL_005', () => {
        loginPage.fillUsername(loginData.username_TCL005)
        loginPage.fillPassword(loginData.password_TCL005)
        loginPage.submit()
        loginPage.invalidCredentialsMessage()
    })
    it('TCL_006', () => {
        loginPage.emptyUsername()
        loginPage.fillPassword(loginData.password_TCL006)
        loginPage.submit()
        loginPage.requiredMessage()
    })
    it('TCL_007', () => {
        loginPage.fillUsername(loginData.username_TCL007)
        loginPage.emptyPassword()
        loginPage.submit()
        loginPage.requiredMessage()
    })
    it('TCL_008', () => {
        loginPage.fillUsername(loginData.username_TCL008)
        loginPage.fillPassword(loginData.password_TCL008)
        loginPage.submit()
        loginPage.invalidCredentialsMessage()
    })
    it('TCL_009', () => {
        loginPage.fillUsername(loginData.username_TCL009)
        loginPage.fillPassword(loginData.password_TCL009)
        loginPage.submit()
        loginPage.invalidCredentialsMessage()
    })
})