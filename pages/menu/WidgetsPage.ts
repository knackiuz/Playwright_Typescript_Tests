import { Locator, Page } from "@playwright/test";
import { AutoCompletePage } from "../AutoCompletePage";


export class WidgetsPage{
    readonly page: Page;
    readonly autoCompleteMenu: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.autoCompleteMenu = page.getByText("Auto Complete");
    }

    async selectAutoCompleteMenu(): Promise<AutoCompletePage>{
        await this.autoCompleteMenu.click();
        return new AutoCompletePage(this.page);
    }
}