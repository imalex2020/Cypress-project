const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1980,
  chromeWebSecurity: false,
  //retries: 2,
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  env:{
    SITE_URL: 'https://techglobal-training.com'
  },
  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    specPattern: 'cypress/e2e/integration/*.cy.{js,jsx,ts,tsx}',
    screenshotOnRunFailure: true,
    video: true,
  },
});
