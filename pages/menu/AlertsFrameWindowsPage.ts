import { Locator, Page } from "@playwright/test";
import { BrowserWindowsPage } from "../BrowserWindowsPage";


export class AlertsFrameWindowsPage{
    readonly page: Page;
    readonly browserWindowsMenu: Locator;

    constructor (page: Page){
        this.page = page;
        this.browserWindowsMenu = page.getByText("Browser Windows");
    }

    async selectBrowserWindowsMenu(): Promise<BrowserWindowsPage>{
        await this.browserWindowsMenu.click();
        return new BrowserWindowsPage(this.page);
    }
}