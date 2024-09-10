const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://test.arportal.io/",
    viewportWidth: 1025,
    viewportHeight: 680,
  },
});
