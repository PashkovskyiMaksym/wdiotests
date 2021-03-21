import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Login', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    })

    it('user logs in with valid data', () => {
        LoginPage.setLogin('yapebo2166@grokleft.com');
        LoginPage.setPassword('Offspring777');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are absent', () => {
        LoginPage.submitButtonIsDisabled();
    });

    it('fails is invalid data provided', () => {
        LoginPage.setLogin('example@example.com');
        LoginPage.setPassword('1234567');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });

});


