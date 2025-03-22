const { Plugins } = require("./pluginsloader.js");
const chalk = require('chalk');
const { version } = require('../package.json');


module.exports = {
    Plugins
};

console.log(chalk.green(`mupp.js v${version} is ready!`))