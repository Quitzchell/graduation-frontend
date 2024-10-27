import {defineConfig} from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here

        },
        baseUrl: process.env.baseUrl
    },

    defaultCommandTimeout: 20000,
    pageLoadTimeout: 120000,
});