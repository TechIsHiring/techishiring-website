import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "1nng13",
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1400,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
