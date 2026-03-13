import { expect, Locator, Page, Dialog } from "@playwright/test";

export class AlertsPage {
    readonly page: Page;
    readonly seeAlertButton: Locator;

    constructor(page: Page) {
        this.page = page;        
        this.seeAlertButton = page.locator("#alertButton");
    }

    async clickButtonToSeeAlert(): Promise<void> {
        // 1. Prepare the dialog listener first
        const dialogPromise = this.page.waitForEvent('dialog');

        // 2. Trigger the alert using dispatchEvent
        // This bypasses the 30s hang because it doesn't wait for page stability
        await Promise.all([
            dialogPromise.then(async (dialog) => {
                // Verify the message
                expect(dialog.message()).toBe("You clicked a button");
                // Close the alert
                await dialog.accept();
            }),
            this.seeAlertButton.dispatchEvent('click')
        ]);
    }
}