const {setup, teardown} = require('@nightwatch/react');

let viteServer;

module.exports = {
    async before() {
        viteServer = await setup();
        this.launchUrl = `http://localhost:${viteServer.config.server.port}`;
    },

    async after() {
      await teardown();
    }
}