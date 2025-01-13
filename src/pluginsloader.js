class Plugins {
  constructor(args) {
    this.args = args;
    if (!args.client) {
      console.log("You have not specified your aoi client's name! Exiting Code!");
      process.exit(0);
    }
  } loadPlugins() {
    const client = this.args.client;

  client.functionManager.createFunction(...require('./plugins.js'))


  }}

module.exports = {
  Plugins
}
