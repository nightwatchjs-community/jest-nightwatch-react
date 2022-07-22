# JEST-NIGHTWATCH-REACT

Jest is popular tool to test your react components. This repository shows how to jest to test your react components on real browsers with the help of Nightwatch.

## Setup

### 1. Clone the project
```bash
git clone https://github.com/gravityvi/jest-nightwatch-react.git
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run your tests
```bash
npm test
```

## Writing Tests

Here is a simple example of compoenent test that runs against real browsers. 


```js
let component

beforeAll(async () => {
  component = await browser.mountComponent('../../src/components/UserInfo.jsx', function() {
    return {
      date: new Date(),
      text: 'I hope you enjoy reading Ulysses!',
      author: {
        name: 'Leopold Bloom',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Poldy.png'
      }
    }
  });
});

afterAll(async () => {
    browser.quit();
})

it('should render regular components without error', function() {
  browser.expect(component).to.be.visible;
})
})
```

Test uses `mountComponent` from @nightwatch/react to mount form component onto real browser and then expects the component to be visible.

Nightwatch commands/assertions can be used to interact with element and verify results. We can also use Jest assertions in the test. For example

```js
it('test the dom snapshot', async function() {
  const domSnapshot = await browser.getComponentDom();
  expect(domSnapshot).toMatchSnapshot();
})
```

In this test it takes DOM snapshot using `getComponentDom` Nightwatch command and compares it across test runs. We can also use visual assertions to compare screenshot of the component.

## Configuration

In addition to Nightwatch config. Project requires jest config which also helps in passing args to Nightwatch client.

```js
//jest.config.js
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
```
