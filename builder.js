var ImpactDevServer = require('./node/impact-dev-server');
var argv = require('optimist').argv;

if (argv.h || argv.help) {
  console.log([
    "usage: impact-dev-server [path]",
    "",
    "options:",
    "  -h --help          Print this list and exit.",
  ].join('\n'));
  process.exit();
}

var dirRoot = argv._[0] || './';

console.log('Root:', dirRoot);

var server = new ImpactDevServer({
  root: dirRoot
});

console.log('Listening on localhost:5000...');