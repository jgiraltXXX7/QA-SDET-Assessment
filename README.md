Qubika Website Automation Tests

Overview

This project contains automated test cases for:
- UI validation and form handling (`exercise1.cy.js`)
- Exploratory testing documentation (`exercise2`)
- API + UI end-to-end test automation (`exercise3.cy.js`)
- Mochawesome reporter setup for clean and consolidated test reporting.

Tech Stack

- **Cypress** – JavaScript-based end-to-end testing framework
- **Node.js & npm** – Required for Cypress installation and execution
- **Mochawesome** – Test report generator for Cypress
- **VS Code** – Development environment
-**Node.js & npm** - Required for Cypress installation and execution

Installation & Setup

Prerequisites:

Install Node.js (v14 or later recommended)

Clone this repository:
    git clone <https://github.com/jgiraltXXX7/QA-SDET-Assessment>

Install dependencies:
    npm install

Running the Tests

Open Cypress Test Runner (GUI Mode)

 - npx cypress open
 - Select any .cy.js file from the Test Runner to execute the test.

Run Tests in Headless Mode
   - npx cypress run --spec "cypress/e2e/exercise1.cy.js"
   - npx cypress run --spec cypress/e2e/exercise3.cy.js

Folder Structure

QA-SDET-Assessment/
│-- cypress/
│   ├── e2e/
│   │   ├── exercises.cy.js         # Exercise 1: UI navigation & validation
│   │   ├── exercise3.cy.js         # Exercise 3: API + UI integration test
│   ├── components/
│   │   ├── contactUsModal.js       # Contact Us modal component
│   ├── pages/
│   │   ├── homePage.js             # Home page object model
│   │   ├── loginPage.js            # Login page object model
│   │   ├── categoryPage.js         # Category page object model
│-- cypress.config.js               # Cypress configuration
│-- package.json                    # Dependencies and test scripts
│-- README.md                       # Project documentation

Additional Notes

Ensure that Cypress is correctly installed before running tests.
The project follows Page Object Model (POM) for better test structure and maintainability.

Contact

For any issues or questions, feel free to reach out!
