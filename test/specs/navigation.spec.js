import MainPage from '../pageobjects/portal/main.portal.page';
import CoursesPage from '../pageobjects/portal/courses.portal.page'

describe('Navigation', () => {
    before(() => {
        browser.login('yapebo2166@grokleft.com', 'Offspring777')
    });

    beforeEach(() => {
        browser.pause(3000)
        MainPage.open();
    });

    it('courses page opens', () => {
        MainPage.goToCourses();

        CoursesPage.isOpen();
    })
});