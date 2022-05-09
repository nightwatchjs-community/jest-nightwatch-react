const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

let component;  
  
beforeAll(async () => {
  component = await browser.mountComponent('../../src/components/Form.jsx');
});

afterAll(async () => {
    await browser.quit();
});

it('should render functional components without error', async function() {
  await browser.expect(component).to.be.visible;
  const screenshot = await browser.screenshot();
  expect(screenshot).toMatchImageSnapshot();
})

it('test the dom snapshot', async function() {
  const domSnapshot = await browser.getComponentDom();
  expect(domSnapshot).toMatchSnapshot();
})