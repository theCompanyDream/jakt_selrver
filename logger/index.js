var bunyan = require('bunyan');

var logger = bunyan.createLogger({
  name: "jakt",
  streams: [
    {
      level: 'info',
      stream: process.stdout            // log INFO and above to stdout
    }
  ]
});

module.exports = logger;

// var verbose_logger = bunyan.createLogger({
//   name: "verbose_jakt",
//   {
//     level: 'debug',
//     path: "/var/log/jakt.log"
//   }
// });
