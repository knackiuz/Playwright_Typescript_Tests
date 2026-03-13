import { expect, Locator, Page } from "@playwright/test";

export class SliderPage{
    readonly page: Page;
    readonly slider: Locator;

    constructor(page: Page){
        this.page = page;
        this.slider = page.locator('#sliderContainer').locator('input.range-slider');
    }

    async setSliderValue(sliderTargetValue: number){
        console.log(`[INFO]: Setting slider value to: ${sliderTargetValue}`);        
        let sliderCurrentValue: number = await this.getSliderValue();

        while (sliderCurrentValue !== sliderTargetValue){
            if (sliderCurrentValue < sliderTargetValue){
                await this.slider.press('ArrowRight');  
                sliderCurrentValue++;              
            } else {
                await this.slider.press('ArrowLeft');
                sliderCurrentValue--;
            }
        }

        console.log(`[INFO]: Slider value set to: ${sliderTargetValue}`);
        return this;
    }

    async checkSliderValue(sliderExpectedValue: number){
        console.log(`[INFO]: Checking slider value. Expected: ${sliderExpectedValue}`);
        const sliderCurrentValue: number = await this.getSliderValue();
        expect(sliderCurrentValue, `Slider value mismatch! Expected value is ${sliderExpectedValue}, but current value is ${sliderCurrentValue}`).toBe(sliderExpectedValue);
        return this;
    }

    private async getSliderValue(): Promise<number> {
        const value = await this.slider.getAttribute('value');
        return value ? parseInt(value, 10) : 0; // if value attribute is not found, default to 0 and radix(decimal) 10
    }
}