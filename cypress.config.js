const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // This line specifies the pattern for test files
  },

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",     // Directory where reports will be saved
    overwrite: false,                 // Don't overwrite previous reports
    html: true,                       // Generate HTML report
    json: true                        // Also generate JSON version
  }
});