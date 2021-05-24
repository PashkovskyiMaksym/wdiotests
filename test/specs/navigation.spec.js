import MainPage from '../pageobjects/portal/main.portal.page';
import CoursesPage from '../pageobjects/portal/courses.portal.page'
import DiaryPage from '../pageobjects/portal/diary.portal.page'
import CardsPage from '../pageobjects/portal/cards.portal.page'
import ChallengesPage from '../pageobjects/portal/challenges.portal.page'

describe('Navigation', () => {
    before(() => {
        browser.login(process.env.LOGIN, process.env.PASSWORD);
    });

    beforeEach(() => {
        browser.pause(3000)
        MainPage.open();
    });

    it('courses page opens', () => {
        MainPage.goToCourses();
        CoursesPage.isOpen();
    });

    it('diary page opens', () => {
        MainPage.goToDiary();
        DiaryPage.isOpen();
    });

    it('cards page opens', () => {
        MainPage.goToCards();
        CardsPage.isOpen();
    });

    it('challenges page opens', () => {
        MainPage.goToChallenges();
        ChallengesPage.isOpen();
    });

});