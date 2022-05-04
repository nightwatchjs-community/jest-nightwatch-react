const path = require('path');
const {setup} = require('@nightwatch/react');

module.exports = async function() {
  this.global.viteServer = await setup();

  const port = this.global.viteServer.config.server.port;
  this.global.viteServerUrl = `http://localhost:${port}`;
}