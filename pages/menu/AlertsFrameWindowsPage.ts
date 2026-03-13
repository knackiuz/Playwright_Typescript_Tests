import { Locator, Page } from "@playwright/test";
import { BrowserWindowsPage } from "../BrowserWindowsPage";
import { AlertsPage } from "../AlertsPage";


export class AlertsFrameWindowsPage{
    readonly page: Page;
    readonly browserWindowsMenu: Locator;
    readonly alertsMenu: Locator;

    constructor (page: Page){
        this.page = page;
        this.browserWindowsMenu = page.getByText("Browser Windows");
        this.alertsMenu = page.getByText("Alerts", {exact: true});
    }

    async selectBrowserWindowsMenu(): Promise<BrowserWindowsPage>{
        await this.browserWindowsMenu.click();
        return new BrowserWindowsPage(this.page);
    }

    async selectAlertsMenu(): Promise<AlertsPage>{
        await this.alertsMenu.click();
        return new AlertsPage(this.page);
    }
}