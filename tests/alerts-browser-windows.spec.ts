import { test } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test.beforeEach(async ({}, testInfo) => {
    console.log(`[INFO]: Starting test: ${testInfo.title}`);
});

test.describe('Alerts, Frame & Windows Suite @alerts', () => {
    test('Test for Modal Dialogs: check new tab', async ({ page }) => {
        //Test data
        const expectedText: string = "This is a sample page";

        //Define main page
        const mainPage = new MainPage(page);

        //Navigate to main page
        await mainPage.navigate();

        //Verify that main page ios loaded - check home banner
        await mainPage.verifyMainPageIsLoaded();

        //Click on card 'Alerts, Frame & Windows'
        const alertsFrameWindowsPage = await mainPage.clickOnAlertsFrameWindowsCard();

        //Click on menu 'Browser Windows'
        const browserWindowsPage = await alertsFrameWindowsPage.selectBrowserWindowsMenu();

        //Click button 'New Tab' and check displayed text
        await browserWindowsPage.clickNewTabAndCheckText(expectedText);
    });
});