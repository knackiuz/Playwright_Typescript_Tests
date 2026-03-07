import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test.describe('Elements Box Suite', () => {

    test('Test for Edit fields: enter data, confirm and check result', async ({ page }) => {        
        //Test data
        const fullName = "Test User";
        const email = "test@mail.com";
        const currentAddress = "Riga, Brivibas iela 1";
        const permanentAddress = "Riga, Terbatas iela 1";
        
        //Define main page
        const mainPage = new MainPage(page);
        
        //Navigate to main page
        await mainPage.navigate();

        //Verify that main page ios loaded - check home banner
        await mainPage.verifyMainPageIsLoaded();
        
        //Click on card 'Elements'
        const elementsPage = await mainPage.clickOnElementsCard();

        //Click on menu 'Text Box'
        const textBoxPage = await elementsPage.selectTextBoxMenu();
        
        //Fill text fields
        await textBoxPage.fillForm(fullName, email, currentAddress, permanentAddress);

        //Click button 'Submit'
        await textBoxPage.clickSubmitButton();
        
        //Get data from output field
        const result = await textBoxPage.getTextFromOutputTextBox();
        
        //Check results
        expect(result.name).toBe(`Name:${fullName}`);
        expect(result.email).toBe(`Email:${email}`);
        expect(result.currentAddress).toBe(`Current Address :${currentAddress} `);
        expect(result.permanentAddress).toBe(`Permananet Address :${permanentAddress}`);
    });
});