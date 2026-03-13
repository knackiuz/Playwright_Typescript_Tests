import { test } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test.beforeEach(async ({}, testInfo) => {
    console.log(`[INFO]: Starting test: ${testInfo.title}`);
});

test.describe('Alerts, Frame & Windows Suite @alerts', () => {
    test('Test for Browser Windows: check new tab', async ({ page }) => {
        //Test data
        const expectedText: string = "This is a sample page";

        //Define main page
        const mainPage = new MainPage(page);

        //Navigate to main page
        await mainPage.navigate();

        //Verify that main page is loaded - check home banner
        await mainPage.verifyMainPageIsLoaded();

        //Click on card 'Alerts, Frame & Windows'
        const alertsFrameWindowsPage = await mainPage.clickOnAlertsFrameWindowsCard();

        //Click on menu 'Browser Windows'
        const browserWindowsPage = await alertsFrameWindowsPage.selectBrowserWindowsMenu();

        //Click button 'New Tab' and check displayed text
        await browserWindowsPage.clickNewTabAndCheckText(expectedText);
    });

    test('Test for Browser Windows: check new window', async ({ page }) => {
        //Test data
        const expectedText: string = "This is a sample page";

        //Define main page
        const mainPage = new MainPage(page);

        //Navigate to main page
        await mainPage.navigate();

        //Verify that main page is loaded - check home banner
        await mainPage.verifyMainPageIsLoaded();
        
        //Click on card 'Alerts, Frame & Windows'
        const alertsFrameWindowsPage = await mainPage.clickOnAlertsFrameWindowsCard();

        //Click on menu 'Browser Windows'
        const browserWindowsPage = await alertsFrameWindowsPage.selectBrowserWindowsMenu();
        
        //Click button 'New Window' and check displayed text
        await browserWindowsPage.clickNewWindowAndCheckText(expectedText);
    });

    test('Test for Browser Windows: check new window message', async ({ page }) => {
        //Test data
        const expectedText: string = "Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.";

        //Define main page
        const mainPage = new MainPage(page);
        
        //Navigate to main page
        await mainPage.navigate();

        //Verify that main page is loaded - check home banner
        await mainPage.verifyMainPageIsLoaded();

        //Click on card 'Alerts, Frame & Windows'
        const alertsFrameWindowsPage = await mainPage.clickOnAlertsFrameWindowsCard();

        //Click on menu 'Browser Windows'
        const browserWindowsPage = await alertsFrameWindowsPage.selectBrowserWindowsMenu();

        //Click button 'New Window Message' and check displayed text
        await browserWindowsPage.clickNewWindowMessageAndCheckText(expectedText);
    });

    test('Test for Alerts: check see alert - check that alert with text is displayed after clicking', async ({ page }) => {
        //Test data
        const expectedText: string = "You clicked a button";

        //Define main page
        const mainPape = new MainPage(page);

        //Navigate to main page
        await mainPape.navigate();

        //Verify that main page is loaded - check home banner
        await mainPape.verifyMainPageIsLoaded();
        
        //Click on card 'Alerts, Frame & Windows'
        const alertsFrameWindowsPage = await mainPape.clickOnAlertsFrameWindowsCard();

        //Click on menu 'Alerts'
        const alertsPage = await alertsFrameWindowsPage.selectAlertsMenu();

        //Click button 'See Alert' and check that alert with text is displayed
        await alertsPage.clickButtonToSeeAlert();
    });
});