import test from "@playwright/test";
import { MainPage } from "../pages/MainPage";



test.describe('Interaction Suite @interactions', () => {
    test('Test for Interactions: resize box and check size after the action', async ({ page }) => {
        //Test data
        const wight: number = 150;
        const height: number = 50;
        const borderSize: number = 10;

        //Define main page
        const mainPage = new MainPage(page);

        //Navigate to main page
        await mainPage.navigate();

        //Verify that main page is loaded - check home banner
        await mainPage.verifyMainPageIsLoaded();

        //Click on card 'Interaction'
        const interactionsPage = await mainPage.clickInteractionCard();

        //Click on menu 'Resizable'
        const resizablePage = await interactionsPage.selectResizableMenu();

        //Resize box
        await resizablePage.resizeBox(wight, height);

        //Verify resized box size
        await resizablePage.verifyResizableBoxSize(200 + wight - borderSize, 200 + height - borderSize);
    })
});