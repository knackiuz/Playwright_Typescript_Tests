import { Locator, Page } from "@playwright/test";
import { TextBoxPage } from "../TextBoxPage";
import { CheckBoxPage } from "../CheckBoxPage";


export class ElementsPage {
    readonly page: Page;
    readonly textBoxMenu: Locator;

    constructor(page: Page){
        this.page = page;
        this.textBoxMenu = page.getByText("Text Box");
    }

    async selectTextBoxMenu(): Promise<TextBoxPage>{
        await this.textBoxMenu.click();
        return new TextBoxPage(this.page);
    }

    async selectCheckBoxMenu(): Promise<CheckBoxPage>{
        const checkBoxMenu = this.page.getByText("Check Box");
        await checkBoxMenu.click();
        return new CheckBoxPage(this.page);
    }
}