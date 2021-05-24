import PortalPage from "./portal.page";

class MainPage extends PortalPage {
    async open() {
        return super.open('/')
    }
}

export default new MainPage();