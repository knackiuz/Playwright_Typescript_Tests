import test, { expect } from "@playwright/test";
import { title } from "node:process";


test.describe('Network Mocking Suite @network-mocking', () => {
    test('Should show error message when API returns 500', async ({ page }) => {
        //URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

        // Mock the API response to return a 500 error        
        await page.route(apiUrl, async route => {
            await route.fulfill({
                status: 500,
                contentType: 'application/json',
                body: JSON.stringify({ error: 'Internal Server Error' }),                
            })
        });
        // Navigate to the API URL and wait for the response        
        const [response] = await Promise.all([
            page.waitForResponse(apiUrl),
            page.goto(apiUrl)
        ]);

        // Assert that the response status is 500
        expect(response.status()).toBe(500);

        // Assert that the response body contains the expected error message
        const responseBody = await response.json();
        expect(responseBody).toEqual({ error: 'Internal Server Error' });
    });

    test('Should mock device list with custom data', async ({ page }) => {
        // URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        // Mock the API response to return a custom list of devices
        const mockDevices = [
            { id: 1, title : 'Device 1' },
            { id: 2, title : 'Device 2' },
            { id: 3, title : 'Device 3' }
        ];

        // Mock the API response
        await page.route(apiUrl, async route => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(mockDevices),
            });
        });

        // Navigate to the API URL and wait for the response
        await Promise.all([
            page.waitForResponse(apiUrl),
            page.goto(apiUrl)
        ]);

        // Assert that the mocked devices are displayed on the page
        await expect(page.getByText('Device 1')).toBeVisible();
        await expect(page.getByText('Device 2')).toBeVisible();
        await expect(page.getByText('Device 3')).toBeVisible();
    });
});