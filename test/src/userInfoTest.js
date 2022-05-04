
  
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

afterAll(async ()=>{
    browser.quit();
})

it('should render regular components without error', function() {
  browser.expect(component).to.be.visible;
})