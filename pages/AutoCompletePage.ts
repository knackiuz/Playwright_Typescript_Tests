import { Locator, Page } from "@playwright/test";


export class AutoCompletePage{
    readonly page: Page;
    readonly autoCompleteMultipleInput: Locator;
    readonly autoCompleteDropDown: Locator;
    readonly multiValueContainer: Locator;

    constructor(page: Page){
        this.page = page;
        this.autoCompleteMultipleInput = page.locator("#autoCompleteMultipleInput");
        this.autoCompleteDropDown = page.locator("[id*='react-select-2-option-']");
        this.multiValueContainer = page.locator(".auto-complete__multi-value__label");
    }

    async typeAndSelectColor(colorName: string): Promise<AutoCompletePage>{
        const partOfColor: string = colorName.substring(0, 2);
        await this.autoCompleteMultipleInput.pressSequentially(partOfColor);
        await this.autoCompleteDropDown.filter({hasText: colorName}).click();
        return this;
    }

    async getSelectedColors(): Promise<string[]>{
        return await this.multiValueContainer.allTextContents();
    }
}