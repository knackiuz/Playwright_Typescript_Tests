import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test.beforeEach(async ({}, testInfo) => {
    console.log(`[INFO]: Starting test: ${testInfo.title}`);
});

test.describe('Widgets Suite @widgets', () => {
    test('Test for Slider: set value - move the slider with arrows and check set value', async ({page}) => {
        // Test data
        const sliderTargetValue: number = 50;

        // Define main page
        const mainPage = new MainPage(page);

        // Navigate to main page
        await mainPage.navigate();

        // Verify that main page is loaded - check home banner
        await mainPage.verifyMainPageIsLoaded();

        // Click on card 'Widgets'
        const widgetsPage = await mainPage.clickWidgetsCard();

        // Click on menu 'Slider'
        const sliderPage = await widgetsPage.selectSliderMenu();

        // Set slider value
        await sliderPage.setSliderValue(sliderTargetValue);
        
        // Check slider value
        await sliderPage.checkSliderValue(sliderTargetValue);
    });
});