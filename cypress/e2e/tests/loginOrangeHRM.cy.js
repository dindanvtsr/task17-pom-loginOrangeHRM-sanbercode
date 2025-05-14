import LoginPage from "../../support/pageObjects/loginPage";

describe('Login', () => {
    const loginPage = new LoginPage();
    
    beforeEach(() => {
        loginPage.visit()
    })

    it('TCL_001', () => {
        loginPage.fillUsername('Admin')
        loginPage.fillPassword('admin123')
        loginPage.loginSuccessDashboardIntercepts()
        loginPage.submit()
        loginPage.loginSuccessUrl()
        loginPage.waitDashboardData()
    })
    it('TCL_002', () => {
        loginPage.fillUsername('Admin')
        loginPage.fillPassword('admin')
        loginPage.submit()
        loginPage.invalidCredentialsMessage()
    })
    it('TCL_003', () => {
        loginPage.fillUsername('Adminnn')
        loginPage.fillPassword('admin123')
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
        loginPage.fillUsername('coba')
        loginPage.fillPassword('coba123')
        loginPage.submit()
        loginPage.invalidCredentialsMessage()
    })
    it('TCL_006', () => {
        loginPage.emptyUsername()
        loginPage.fillPassword('admin123')
        loginPage.submit()
        loginPage.requiredMessage()
    })
    it('TCL_007', () => {
        loginPage.fillUsername('Admin')
        loginPage.emptyPassword()
        loginPage.submit()
        loginPage.requiredMessage()
    })
    it('TCL_008', () => {
        loginPage.fillUsername('ADMIN')
        loginPage.fillPassword('Admin123')
        loginPage.submit()
        loginPage.invalidCredentialsMessage()
    })
    it('TCL_009', () => {
        loginPage.fillUsername('Admin')
        loginPage.fillPassword('ADMIN123')
        loginPage.submit()
        loginPage.invalidCredentialsMessage()
    })
})