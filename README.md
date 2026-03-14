# Playwright Automation Testing - DemoQA Project

This repository contains automated UI tests for [DemoQA](https://demoqa.com/) built with **Playwright** and **TypeScript**. 
The project follows the **Page Object Model (POM)** design pattern for better maintainability and code readability.

---

## 🛠 Tech Stack
* **Language:** TypeScript
* **Framework:** Playwright (Test Runner & Library)
* **Environment:** Docker & VS Code Dev Containers
* **CI/CD:** GitHub Actions (with Caching & Docker)
* **Reporting:** Playwright HTML Reporter
* **Jenkins** — CI/CD automation within a Dockerized environment.
* **Network Interception:** Playwright API Request/Response mocking.

---

## 📑 Test Suites Overview
The project covers 4 different sections of the DemoQA website to demonstrate various automation techniques:

### 1. Elements Box Suite `@elements`
* **Goal:** Verify form submission and data integrity.
* **Actions:** Fill full name, email, and addresses; click Submit.
* **Assertions:** Check if the output container matches the input data.

### 2. Alerts, Frame & Windows Suite `@alerts`
* **Goal:** Test multi-tab browser behavior.
* **Actions:** Click 'New Tab' button and switch context.
* **Assertions:** Verify text content on the newly opened page.

### 3. Interaction Suite `@interactions`
* **Goal:** Automate mouse actions and element resizing.
* **Actions:** Target the resize handle and drag it using coordinates.
* **Assertions:** Calculate and verify the new dimensions of the box.

### 4. Widgets Suite `@widgets`
* **Goal:** Handle dynamic dropdowns and auto-complete fields.
* **Actions:** Type partial names and select items from suggestions.
* **Assertions:** Verify that all selected items are present in the multi-value container.

### 5. Network Mocking Suite `@network-mocking`
* **Goal:** Test frontend resilience and API data handling.
* **Scenarios:**
    - Intercepting API responses to simulate 500 Internal Server Error and verify UI error handling.
    - Mocking dynamic device lists to verify data rendering without relying on a live backend.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

### 1. Clone the repository
```bash```
git clone <https://github.com/knackiuz/Playwright_Typescript_Tests>
cd <project-folder>

### Option 1: Using Dev Containers (Recommended)
This project is pre-configured for **VS Code Dev Containers**. This is the easiest way to start without installing Node.js or browsers locally.
1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/).
2. Open this project in VS Code.
3. Click **"Reopen in Container"** when prompted. 
4. Everything (Node.js, Playwright, Browsers) will be set up automatically.

### Option 2: Local Installation
### 2. Install dependencies
### Install NPM packages (creates node_modules)
npm install

### Install Playwright browsers and system dependencies
npx playwright install --with-deps

### 3. Run Tests
### Run all tests in Headless mode (4 workers by default)
npx playwright test

### Run tests with a specific tag
npx playwright test --grep @alerts

### Run tests in UI Mode (interactive, great for debugging)
npx playwright test --ui

### Run a specific test file
npx playwright test tests/Widgets.spec.ts

📊 Reporting & CI/CD

### After the tests finish, you can view a detailed HTML report:
npx playwright show-report

### GitHub Actions
* Tests run automatically on every push or pull request
* The project is configured to run in 4 parallel workers for maximum efficiency
* Parallelism is managed via playwright.config.ts

## ⚙️ Jenkins Pipeline
The project includes a Jenkinsfile optimized for running in a Dockerized environment:
* Infrastructure: Runs on a Jenkins agent with pre-configured Node.js and system dependencies.
* Browser Caching: Optimized to use .cache/ms-playwright to avoid redundant browser downloads.
* Reporting: Integrated with HTML Publisher Plugin to display Playwright results directly in the Jenkins build interface.
* Security: Configured to handle Content Security Policy (CSP) for proper report rendering.

## 📊 Reporting & Analytics
This project uses **Allure Report** to provide deep insights into test execution. 

### Features:
* **Visual Dashboards:** Track pass/fail rates over time.
* **Step-by-Step Logs:** See exactly where a test failed with integrated `[INFO]` logs. [cite: 2026-03-07]
* **Environment Info:** Details about the Docker container and browser versions.

### CI/CD Infrastructure (Local Jenkins)
## Run Jenkins Container:
* ```bash```
docker run -p 8080:8080 -p 50000:50000 --restart=on-failure -v jenkins_home:/var/jenkins_home -v //var/run/docker.sock:/var/run/docker.sock jenkins/jenkins:lts



### 📂 Project Structure
* tests/ — Test specification files (.spec.ts)
* pages/ — Page Object classes (Selectors and Actions)
* .devcontainer/ — Docker development environment settings
* .github/workflows/ — CI/CD pipeline configuration
* playwright.config.ts — Global settings (timeouts, retries, browser projects)
* Jenkinsfile - CI/CD pipeline definition for automated builds and reporting.
