import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';


test.beforeEach(async ({}, testInfo) => {
    console.log(`[INFO]: Starting test: ${testInfo.title}`);
});

test.describe('Elements Box Suite @elements', () => {
    test('Test for Check Box: check main box and verify that all sub boxes are checked', async ({ page }) => {
        //Define main page
        const mainPage = new MainPage(page);
        
        //Navigate to main page
        await mainPage.navigate();

        //Verify that main page ios loaded - check home banner
        await mainPage.verifyMainPageIsLoaded();

        //Click on card 'Elements'
        const elementsPage = await mainPage.clickOnElementsCard();

        //Click on menu 'Check Box'
        const checkBoxPage = await elementsPage.selectCheckBoxMenu();

        // Check that 'Desktop' checkbox is hidden
        await checkBoxPage.verifyDesktopCheckBoxIsHidden();

        //Click on 'Home' expand/collapse button
        await checkBoxPage.clickExpandCollapseHomeButton();

        // Click on 'Home' checkbox
        await checkBoxPage.clickHomeCheckBox();

        // Verify that 'Home' checkbox is checked
        await checkBoxPage.verifyHomeCheckBoxIsChecked();

        // Verify that 'Desktop' checkbox is visible
        await checkBoxPage.verifyDesktopCheckBoxIsVisible();

        // Click on 'Home' expand/collapse button
        await checkBoxPage.clickExpandCollapseHomeButton();

        // Verify that 'Desktop' checkbox is hidden
        await checkBoxPage.verifyDesktopCheckBoxIsHidden();
    });
});