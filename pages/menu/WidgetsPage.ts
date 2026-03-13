import { Locator, Page } from "@playwright/test";
import { AutoCompletePage } from "../AutoCompletePage";
import { SliderPage } from "../SliderPage";


export class WidgetsPage{
    readonly page: Page;
    readonly autoCompleteMenu: Locator;
    readonly sliderMenu: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.autoCompleteMenu = page.getByText("Auto Complete");
        this.sliderMenu = page.getByText("Slider");
    }

    async selectAutoCompleteMenu(): Promise<AutoCompletePage>{
        await this.autoCompleteMenu.click();
        return new AutoCompletePage(this.page);
    }

    async selectSliderMenu(): Promise<SliderPage>{
        await this.sliderMenu.click();
        return new SliderPage(this.page);
    }
}