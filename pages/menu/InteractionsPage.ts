import { Locator, Page } from "@playwright/test";
import { ResizablePage } from "../ResizablePage";


export class InteractionsPage{
    readonly page: Page;
    readonly resizableMenu: Locator;


    constructor(page: Page){
        this.page = page;
        this.resizableMenu = page.getByText("Resizable");
    }

    async selectResizableMenu(): Promise<ResizablePage>{
        this.resizableMenu.click();
        return new ResizablePage(this.page);
    }
}