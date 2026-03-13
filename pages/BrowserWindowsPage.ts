import { expect, Locator, Page } from "@playwright/test";


export class BrowserWindowsPage{
    readonly page: Page;
    readonly newTabButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.newTabButton = page.locator("#tabButton");
    }

    async clickNewTabAndCheckText(expectedText: string): Promise<void>{
        //Start waiting for new page(tab) before clicking
        const pagePromise = this.page.context().waitForEvent('page');

        //Perform that action that opens the new tab
        await this.newTabButton.click();

        //Wait for the new page object to be created
        const newPage = await pagePromise;

        //Wait for the new page is loaded
        await newPage.waitForLoadState();

        //Interact with new page object
        const headingNewPage = newPage.locator('#sampleHeading');
        await expect(headingNewPage).toHaveText(expectedText);

        //Close the new tab
        await newPage.close();
    }

    async clickNewWindowAndCheckText(expectedText: string): Promise<void>{
        //Start waiting for new page(window) before clicking
        const pagePromise = this.page.context().waitForEvent('page');

        //Perform that action that opens the new window
        await this.page.locator("#windowButton").click();

        //Wait for the new page object to be created
        const newPage = await pagePromise;

        //Wait for the new page is loaded
        await newPage.waitForLoadState();

        //Interact with new page object
        const headingNewPage = newPage.locator('#sampleHeading');
        await expect(headingNewPage).toHaveText(expectedText);

        //Close the new window
        await newPage.close();        
    }
}