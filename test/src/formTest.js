
describe('form test', function() {
  let component;  
  beforeAll(async () => {
      component = await browser.mountComponent('../../src/components/Form.jsx');
    });

    afterAll(async () => {
        await browser.quit();
    });
  
    it('should render functional components without error', async function() {
      await browser.expect(component).to.be.visible;
    })
  })