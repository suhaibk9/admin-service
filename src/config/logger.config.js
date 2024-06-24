const winston = require('winston');
require('winston-mongodb');
const { LOG_DB_URL } = require('./server.config');

require('winston-mongodb');
const allowedTransports = [];
//Putting on Console
allowedTransports.push(
  //No levels are passed so it will log all levels
  //No collection is passed so it will log in the default collection
  //No db is passed so it will log in the default db
  new winston.transports.Console({
    //Overwriting the default
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      winston.format.printf((log) => {
        return `${log.timestamp} [${log.level}]: ${log.message}`;
      })
    ),
  })
);
//Putting in MongoDB
allowedTransports.push(
  new winston.transports.MongoDB({
    //Logging only error level logs
    //Log in the logs collection
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs',
  })
);
//Putting in File
allowedTransports.push(
  new winston.transports.File({
    filename: `${__dirname}/../logs/app.log`,
  })
);
const logger = winston.createLogger({
  //Default Format
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.printf((log) => {
      return `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`;
    })
  ),
  transports: allowedTransports,
});
module.exports = logger;
