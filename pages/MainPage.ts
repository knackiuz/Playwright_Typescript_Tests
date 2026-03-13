import { expect, Locator, Page } from "@playwright/test";
import { ElementsPage } from "./menu/ElementsPage";
import { WidgetsPage } from "./menu/WidgetsPage";
import { InteractionsPage } from "./menu/InteractionsPage";
import { AlertsFrameWindowsPage } from "./menu/AlertsFrameWindowsPage";


export class MainPage {
    readonly page: Page;
    readonly homeBanner: Locator;
    readonly elementsCard: Locator;
    readonly alertsFrameWindowsCard: Locator;
    readonly widgetsCard: Locator;
    readonly interactionsCard: Locator;

    constructor (page: Page){
        this.page = page;
        this.homeBanner = page.locator(".banner-image");
        this.elementsCard = page.locator(".card").filter({hasText: 'Elements'});
        this.alertsFrameWindowsCard = page.locator(".card").filter({hasText: 'Alerts, Frame & Windows'});
        this.widgetsCard = page.locator(".card").filter({hasText: 'Widgets'});
        this.interactionsCard = page.locator(".card").filter({hasText: 'Interactions'});
    }

    async navigate(){
        await this.page.goto('/');
        return this;
    }

    async verifyMainPageIsLoaded(){
        await expect(this.homeBanner).toBeVisible();
        return this;
    }

    async clickOnElementsCard(){
        await this.elementsCard.click();
        return new ElementsPage(this.page);
    }

    async clickOnAlertsFrameWindowsCard(){
        await this.alertsFrameWindowsCard.click();
        return new AlertsFrameWindowsPage(this.page);
    }

    async clickWidgetsCard(){
        await this.widgetsCard.click();
        return new WidgetsPage(this.page);
    }

    async clickInteractionCard(){
        await this.interactionsCard.click();
        return new InteractionsPage(this.page);
    }
}