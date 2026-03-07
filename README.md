# Playwright Automation Testing - DemoQA Project

This repository contains automated UI tests for [DemoQA](https://demoqa.com/) built with **Playwright** and **TypeScript**. 
The project follows the **Page Object Model (POM)** design pattern for better maintainability and code readability.

---

## 🛠 Tech Stack
* **Language:** TypeScript
* **Framework:** Playwright (Test Runner & Library)
* **CI/CD:** GitHub Actions
* **Reporting:** Playwright HTML Reporter

---

## 📑 Test Suites Overview
The project covers 4 different sections of the DemoQA website to demonstrate various automation techniques:

### 1. Elements Box Suite
* **Goal:** Verify form submission and data integrity.
* **Actions:** Fill full name, email, and addresses; click Submit.
* **Assertions:** Check if the output container matches the input data.

### 2. Alerts, Frame & Windows Suite
* **Goal:** Test multi-tab browser behavior.
* **Actions:** Click 'New Tab' button and switch context.
* **Assertions:** Verify text content on the newly opened page.

### 3. Interaction Suite
* **Goal:** Automate mouse actions and element resizing.
* **Actions:** Target the resize handle and drag it using coordinates.
* **Assertions:** Calculate and verify the new dimensions of the box.

### 4. Widgets Suite
* **Goal:** Handle dynamic dropdowns and auto-complete fields.
* **Actions:** Type partial names and select items from suggestions.
* **Assertions:** Verify that all selected items are present in the multi-value container.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

### 1. Clone the repository
```bash```
git clone <https://github.com/knackiuz/Playwright_Typescript_Tests>
cd <project-folder>

### 2. Install dependencies
# Install NPM packages (creates node_modules)
npm install

# Install Playwright browsers and system dependencies
npx playwright install --with-deps

### 3. Run Tests
# Run all tests in Headless mode (fastest)
npx playwright test

# Run tests in UI Mode (interactive, great for debugging)
npx playwright test --ui

# Run a specific test file
npx playwright test tests/Widgets.spec.ts

📊 Reporting & CI/CD

# After the tests finish, you can view a detailed HTML report:
npx playwright show-report

### 📂 Project Structure
* tests/ — Test specification files (.spec.ts)
* pages/ — Page Object classes (Selectors and Actions)
* .github/workflows/ — CI/CD pipeline configuration
* playwright.config.ts — Global settings (timeouts, retries, browser projects)
