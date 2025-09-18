const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
module.exports = defineConfig({
  videosFolder: "C:/QA/artifacts/videos",
  screenshotsFolder: "C:/QA/artifacts/screenshots",
  e2e: {
    specPattern: "**/*.feature",
    supportFile: "cypress/support/e2e.js",       
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());       
      allureWriter(on, config);                  
      return config;
    },
    env: {
      allure: true                               
    },
    video: true                                  
  },
});