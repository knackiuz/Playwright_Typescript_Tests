import { Locator, Page } from "@playwright/test";

export interface TextBoxResult{
    name: string | null;
    email: string | null;
    currentAddress: string | null;
    permanentAddress: string | null;
}

export class TextBoxPage{
    readonly page: Page;

    // Locators for input fields
    private readonly fullNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly currentAddressInput: Locator;
    private readonly permanentAddressInput: Locator;
    private readonly submitButton: Locator;

    // Locators for output/result labels
    private readonly nameOutput: Locator;
    private readonly emailOutput: Locator;
    private readonly currentAddressOutput: Locator;
    private readonly permanentAddressOutput: Locator;

    constructor(page: Page) {
        this.page = page;
        
        this.fullNameInput = page.locator('#userName');
        this.emailInput = page.locator('#userEmail');
        this.currentAddressInput = page.locator('#currentAddress');
        this.permanentAddressInput = page.locator('#permanentAddress');
        this.submitButton = page.locator('#submit');

        this.nameOutput = page.locator('#name');
        this.emailOutput = page.locator('#email');
        this.currentAddressOutput = page.locator('p#currentAddress');
        this.permanentAddressOutput = page.locator('p#permanentAddress');
    }

    async fillForm(name: string, email: string, currentAddr: string, permanentAddr: string){
        await this.fullNameInput.fill(name);
        await this.emailInput.fill(email);
        await this.currentAddressInput.fill(currentAddr);
        await this.permanentAddressInput.fill(permanentAddr);
        return this;
    }

    async clickSubmitButton() {
        await this.submitButton.click();
        return this;
    }

    async getTextFromOutputTextBox(): Promise<TextBoxResult> {
        return {
            // textContent() returns string | null, which matches our interface
            name: await this.nameOutput.textContent(),
            email: await this.emailOutput.textContent(),
            currentAddress: await this.currentAddressOutput.textContent(),
            permanentAddress: await this.permanentAddressOutput.textContent()
        };
    }
}