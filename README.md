Qubika Website Automation Tests

Overview

This project contains automated test cases for navigating and validating elements on the Qubika website using Cypress. It is part of the QA SDET Assessment and covers UI validation, form submission, and error handling.

Tech Stack

Cypress - JavaScript-based end-to-end testing framework

VS Code - Development environment

Node.js & npm - Required for Cypress installation and execution

Installation & Setup

Prerequisites:

Install Node.js (v14 or later recommended)

Clone this repository:
    git clone <https://github.com/jgiraltXXX7/QA-SDET-Assessment>

Install dependencies:
    npm install

Running the Tests

Open Cypress Test Runner (GUI Mode)
    npx cypress open

    Select exercises.cy.js from the Cypress Test Runner to execute the test case.

Run Tests in Headless Mode
    npx cypress run --spec cypress/e2e/exercises.cy.js

Folder Structure

QA-SDET-Assessment/
│-- cypress/
│   ├── e2e/
│   │   ├── exercises.cy.js   # Main test case
│   ├── components/
│   │   ├── contactUsModal.js # Contact Us modal component
│   ├── pages/
│   │   ├── homePage.js       # Home page object model
│-- package.json              # Dependencies and scripts
│-- README.md                 # Project documentation

Additional Notes

Ensure that Cypress is correctly installed before running tests.
The project follows Page Object Model (POM) for better test structure and maintainability.

Contact

For any issues or questions, feel free to reach out!