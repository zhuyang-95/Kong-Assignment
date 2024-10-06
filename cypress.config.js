const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'report',
    reportFilename: 'test-report',
    // videoOnFailOnly: true,
    code: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        await beforeRunHook(details);
      })
      on('after:run', async () => {
        await afterRunHook()
      })
    },
    specPattern: 'tests/**/*.cy.js',
    supportFile: false,
  },
});
