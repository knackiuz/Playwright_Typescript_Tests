import { Locator, Page } from "@playwright/test";
import { TextBoxPage } from "../TextBoxPage";
import { CheckBoxPage } from "../CheckBoxPage";
import { RadioButtonPage } from "../RadioButtonPage";


export class ElementsPage {
    readonly page: Page;
    readonly textBoxMenu: Locator;
    readonly checkBoxMenu: Locator;
    readonly radioButtonMenu: Locator;

    constructor(page: Page){
        this.page = page;
        this.textBoxMenu = page.getByText("Text Box");
        this.checkBoxMenu = page.getByText("Check Box");
        this.radioButtonMenu = page.getByText("Radio Button");
    }

    async selectTextBoxMenu(): Promise<TextBoxPage>{
        await this.textBoxMenu.click();
        return new TextBoxPage(this.page);
    }

    async selectCheckBoxMenu(): Promise<CheckBoxPage>{        
        await this.checkBoxMenu.click();
        return new CheckBoxPage(this.page);
    }

    async selectRadioButtonMenu(): Promise<RadioButtonPage>{
        await this.radioButtonMenu.click();
        return new RadioButtonPage(this.page);
    }
} 