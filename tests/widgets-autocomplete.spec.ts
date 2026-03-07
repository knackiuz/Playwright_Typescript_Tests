import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/MainPage';


test.describe('Widgets Suite', () => {
    test('Test for Auto Complete: enter part of color name, wait for dropdown, then select required color and check that right colors are selected', async ({ page }) => {
        //Test data
        const firstColorName: string = "Red";
        const secondColorName: string = "Green";

        //Define main page
        const mainPage = new MainPage(page);

        //Navigate to main page
        await mainPage.navigate();

        //Verify that main page is loaded - check home banner
        await mainPage.verifyMainPageIsLoaded();

        //Click on card 'Widgets'
        const widgetsPage = await mainPage.clickWidgetsCard();

        //Click on menu 'Auto Complete'
        const autoCompletePage = await widgetsPage.selectAutoCompleteMenu();

        //Type and select first color
        await autoCompletePage.typeAndSelectColor(firstColorName);

        //Type and select second color
        await autoCompletePage.typeAndSelectColor(secondColorName);
        
        const selectedColors: string[] = await autoCompletePage.getSelectedColors();

        expect(selectedColors, '${firstColorName} is missing!').toContain(firstColorName);
        expect(selectedColors, '${secondColorName} is missing!').toContain(secondColorName);
    });
});