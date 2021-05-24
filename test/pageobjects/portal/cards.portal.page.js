import PortalPage from "./portal.page";

class CardsPage extends PortalPage {

    get sectionHeader() {
        return $('h1');
    }

    async open() {
        return super.open('/cards')
    }

    async isOpen() {
        await expect(browser).toHaveUrlContaining('/flash');
        await expect(this.sectionHeader).toHaveText('Flash cards in beta mode so far');
    }

}

export default new CardsPage();