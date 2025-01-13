const { Plugins } = require("./pluginsloader.js");
const chalk = require('chalk');
const { version } = require('../package.json');


module.exports = {
  Plugins
};

console.log(chalk.green(`scootz.js v${version} is ready to be used!`))
