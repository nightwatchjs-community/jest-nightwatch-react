module.exports = {
    globalSetup: './lib/setup.js',
    globalTeardown: './lib/teardown.js',
    testEnvironment: 'jest-environment-nightwatch',
    testEnvironmentOptions: {
      capabilities: {},
      env: 'chrome',
      headless: false,
      devtools: false,
      debug: false,
      output: false,
      silent: false,
      parallel: true,
      timeout: 1000,
      baseUrl: 'http://localhost:3001',
      async setup(browser) {
        if (global.viteServerUrl) {
          browser.baseUrl = global.viteServerUrl;
        }
      },
  
      teardown() {
        //console.log('Nightwatch teardown')
      }
    },
    testMatch: [
       "**/test/src/formTest.[jt]s?(x)"
    ],
    slowTestThreshold: 15000000
  }