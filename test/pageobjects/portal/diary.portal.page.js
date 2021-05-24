import PortalPage from "./portal.page";

class DiaryPage extends PortalPage {

    get sectionHeader() {
        return $('h1');
    }

    async open() {
        return super.open('/diary')
    }

    async isOpen() {
        await expect(browser).toHaveUrlContaining('/diary');
        await expect(this.sectionHeader).toHaveText('Diaries is self accountability tool');
    }

}

export default new DiaryPage();