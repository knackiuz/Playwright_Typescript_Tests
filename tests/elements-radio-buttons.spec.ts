import test from "@playwright/test";
import { MainPage } from "../pages/MainPage";



test.beforeEach(async ({}, testInfo) => {
    console.log(`[INFO]: Starting test: ${testInfo.title}`);
})

test.describe('Elements Radio Buttons Suite @elements', () => {
    test('Test for Radio buttons: select, verify and check that not enabled', async ({ page }) => {        
        //Define main page
        const mainPage = new MainPage(page);

        //Navigate to main page
        await mainPage.navigate();

        //Verify that main page ios loaded - check home banner
        await mainPage.verifyMainPageIsLoaded();

        //Click on card 'Elements'
        const elementsPage = await mainPage.clickOnElementsCard();

        //Click on menu 'Radio Buttons'
        const radioButtonsPage = await elementsPage.selectRadioButtonMenu();

        //Click on 'Yes' radio button
        await radioButtonsPage.clickYesRadioButton();

        //Verify that 'Yes' radio button is selected
        await radioButtonsPage.verifyYesIsSelected();

        //Verify that 'Impressive' radio button is not selected
        await radioButtonsPage.verifyImpressiveIsNotSelected();
        
        //Click on 'Impressive' radio button
        await radioButtonsPage.clickImpressiveRadioButton();

        //Verify that 'Impressive' radio button is selected
        await radioButtonsPage.verifyImpressiveIsSelected();

        //Verify that 'Yes' radio button is not selected
        await radioButtonsPage.verifyYesIsNotSelected();

        //Verify that 'No' radio button is disabled
        await radioButtonsPage.verifyNoIsDisabled();
    });
});