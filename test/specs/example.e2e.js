import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Login', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('yapebo2166@grokleft.com');
        LoginPage.setPassword('Offspring777');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});


