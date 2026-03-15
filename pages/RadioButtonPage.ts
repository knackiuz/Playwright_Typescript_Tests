import { expect, Locator, Page } from "@playwright/test";


export class RadioButtonPage {
    readonly page: Page;
    readonly yesRadioButton: Locator;
    readonly impressiveRadioButton: Locator;
    readonly noRadioButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.yesRadioButton = page.locator("label[for='yesRadio']");
        this.impressiveRadioButton = page.locator("label[for='impressiveRadio']");
        this.noRadioButton = page.locator("label[for='noRadio']");
    }

    async clickYesRadioButton(){
        await this.yesRadioButton.click();
        return this;
    }

    async verifyYesIsSelected(){
        console.log("Verify that 'Yes' radio button is selected");
        await expect(this.yesRadioButton).toBeChecked();
        return this;
    }

    async verifyYesIsNotSelected(){
        console.log("Verify that 'Yes' radio button is not selected");
        await expect(this.yesRadioButton).not.toBeChecked();
        return this;
    }

    async clickImpressiveRadioButton(){
        console.log("Click on 'Impressive' radio button");
        await this.impressiveRadioButton.click();
        return this;
    }

    async verifyImpressiveIsSelected(){
        console.log("Verify that 'Impressive' radio button is selected");
        await expect(this.impressiveRadioButton).toBeChecked();
        return this;
    }

    async verifyImpressiveIsNotSelected(){
        console.log("Verify that 'Impressive' radio button is not selected");
        await expect(this.impressiveRadioButton).not.toBeChecked();
        return this;
    }

    async verifyNoIsDisabled(){
        console.log("Verify that 'No' radio button is disabled");
        await expect(this.noRadioButton).toBeDisabled();
        return this;
    }
}