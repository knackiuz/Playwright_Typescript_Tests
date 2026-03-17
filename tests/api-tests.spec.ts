import { test, expect } from "@playwright/test";

// Define the User interface based on the expected structure of the API response (https://jsonplaceholder.typicode.com/users)
type geo = {
    lat: string,
    lng: string
}

type address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: geo
}

type company = {
    name: string,
    catchPhrase: string,
    bs: string
}

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: address,
    phone: string,
    website: string,
    company: company
}

test.describe("API tests suite @api", () => {
    // Define the base URL for the API
    const baseURL = "https://jsonplaceholder.typicode.com";

    // Define the endpoint for retrieving user information by ID
    const endPoint = "/users/";

    const userID = 1;

    test("Get user by id", async ({ request }) => {
        // Define the expected user information based on the API documentation and the user ID being tested
        const expectedUser: User = {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                    lat: "-37.3159",
                    lng: "81.1496"
                }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
            }
        };
        
        // Send a GET request to the API endpoint to retrieve user information by ID
        const response = await request.get(`${baseURL}${endPoint}${userID}`);

        // Assert that the response status code is 200 (OK)
        expect(response).toBeOK();

        // Parse the response body as JSON and store it in a variable of type User
        const userReceived: User = await response.json();

        // Assert that the user ID in the response matches the requested user ID
        expect(userReceived).toEqual(expectedUser);
        
        // Log the user information to the console for verification
        console.log(userReceived);
    });
})