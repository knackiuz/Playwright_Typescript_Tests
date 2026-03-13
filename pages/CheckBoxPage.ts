import { expect, Locator, Page } from "@playwright/test";

export class CheckBoxPage {
    readonly page: Page;
    readonly desktopCheckbox: Locator;
    readonly expandCollapseHomeButton: Locator;
    readonly homeCheckBox: Locator;

    constructor(page: Page){
        this.page = page;
        this.desktopCheckbox = page.getByRole('checkbox', { name: 'Select Desktop' });
        this.expandCollapseHomeButton = page.locator("div:has(span[title='Home']) > span.rc-tree-switcher");
        this.homeCheckBox = page.getByRole('checkbox', { name: 'Select Home' });
    }

    async clickExpandCollapseHomeButton(){
        console.log("Click on 'Home' expand/collapse button");
        await this.expandCollapseHomeButton.click();
        return this;
    }

    async clickHomeCheckBox(){
        console.log("Click on 'Home' checkbox");
        await this.homeCheckBox.click();
        return this;
    }

    async verifyHomeCheckBoxIsChecked(){
        console.log("Verify that 'Home' checkbox is checked");
        await expect (this.homeCheckBox).toBeChecked();
        return this;
    }

    async verifyDesktopCheckBoxIsVisible(){
        console.log("Verify that 'Desktop' checkbox is visible");
        await expect (this.desktopCheckbox).toBeVisible();
    }

    async verifyDesktopCheckBoxIsHidden(){
        console.log("Verify that 'Desktop' checkbox is hidden");
        await expect (this.desktopCheckbox).toBeHidden();
        return this;
    }
}