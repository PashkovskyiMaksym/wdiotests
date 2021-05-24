import PortalPage from "./portal.page";

class ChallengesPage extends PortalPage {

    get sectionHeader() {
        return $('h1');
    }

    async open() {
        return super.open('/challenges')
    }

    async isOpen() {
        await expect(browser).toHaveUrlContaining('/challenge');
        await expect(this.sectionHeader).toHaveText('Coding challenges from very basic to interview level');
    }

}

export default new ChallengesPage();